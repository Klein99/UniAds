package it.unisa.controller;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import it.unisa.model.Amministratore;
import it.unisa.model.AmministratoreModel;
import it.unisa.model.Corriere;
import it.unisa.model.CorriereModel;
import it.unisa.model.DriverManagerConnectionPool;
import it.unisa.model.Utente;
import it.unisa.model.UtenteModel;

/**
 * Servlet implementation class ModificaRuoloServlet
 */
@WebServlet("/ModificaRuoloServlet")
public class ModificaRuoloServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String email = request.getParameter("emailUtente");
		String ruolo = request.getParameter("ruolo");
		DriverManagerConnectionPool dmcp = (DriverManagerConnectionPool) getServletContext().getAttribute("DriverManager");
		Utente utente = new Utente();
		utente.setEmail(email);
		Corriere corriere = new Corriere();
		corriere.setEmail(email);
		Amministratore admin = new Amministratore();
		admin.setEmail(email);
		UtenteModel modelUtente = new UtenteModel(dmcp);
		CorriereModel modelCorriere = new CorriereModel(dmcp);
		corriere.setEmail(email);
		AmministratoreModel modelAdmin = new AmministratoreModel(dmcp);
		try {
			if(ruolo.equals("Utente")) {
				utente = modelUtente.doRetrieveByKey(utente);
				if(utente!=null && utente.getEmail().equals(email)) {
					modelUtente.doDelete(utente);
					Utente modifica = new Utente();
					modifica.setEmail(email);
					modifica.setCognome(utente.getCognome());
					modifica.setNome(utente.getNome());
					modifica.setPassword(utente.getPassword());
					modifica.setIndirizzo(utente.getIndirizzo());
					while(utente.getEmail().equals("")) {
						modelUtente.doRetrieveByKey(utente);
					}
					modelUtente.doSave(modifica);
					request.setAttribute("completamentoModifica", "Ruolo modificato");
					RequestDispatcher d = getServletContext().getRequestDispatcher("/OperazioniAdmin.jsp");
					d.forward(request, response);
				}
				else {
					request.setAttribute("erroreModificaRuolo", "Impossibile modificare ruolo");
					RequestDispatcher d = getServletContext().getRequestDispatcher("/OperazioniAdmin.jsp");
					d.forward(request, response);

				}
			}
			else if(ruolo.equals("Corriere")) {
				corriere = modelCorriere.doRetrieveByKey(corriere);
				if(corriere!=null && corriere.getEmail().equals(email)) {
					modelCorriere.doDelete(corriere);
					Corriere modifica = new Corriere();
					modifica.setEmail(email);
					modifica.setCognome(corriere.getCognome());
					modifica.setNome(corriere.getNome());
					modifica.setPassword(corriere.getPassword());
					modifica.setIndirizzo(corriere.getIndirizzo());
					while(corriere.getEmail().equals("")) {
						modelCorriere.doRetrieveByKey(corriere);
					}
					modelCorriere.doSave(modifica);
					request.setAttribute("completamentoModifica", "Ruolo modificato");
					RequestDispatcher d = getServletContext().getRequestDispatcher("/OperazioniAdmin.jsp");
					d.forward(request, response);
				}
				else {
					request.setAttribute("erroreModificaRuolo", "Impossibile modificare ruolo");
					RequestDispatcher d = getServletContext().getRequestDispatcher("/OperazioniAdmin.jsp");
					d.forward(request, response);

				}
			}
			else {
				admin = modelAdmin.doRetrieveByKey(admin);
				if(admin!=null && admin.getEmail().equals(email)) {
					modelCorriere.doDelete(corriere);
					Amministratore modifica = new Amministratore();
					modifica.setEmail(email);
					modifica.setCognome(admin.getCognome());
					modifica.setNome(admin.getNome());
					modifica.setPassword(admin.getPassword());
					modifica.setIndirizzo(admin.getIndirizzo());
					while(admin.getEmail().equals("")) {
						modelCorriere.doRetrieveByKey(corriere);
					}
					modelAdmin.doSave(modifica);
					request.setAttribute("completamentoModifica", "Ruolo modificato");
					RequestDispatcher d = getServletContext().getRequestDispatcher("/OperazioniAdmin.jsp");
					d.forward(request, response);
				}
				else {
					request.setAttribute("erroreModificaRuolo", "Impossibile modificare ruolo");
					RequestDispatcher d = getServletContext().getRequestDispatcher("/OperazioniAdmin.jsp");
					d.forward(request, response);

				}
			}

		}
		catch (SQLException e) {
			e.printStackTrace();
		} 
		
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
 