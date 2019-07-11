package it.unisa.controller;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import it.unisa.model.Annuncio;
import it.unisa.model.AnnuncioModel;
import it.unisa.model.Categoria;
import it.unisa.model.DriverManagerConnectionPool;
import it.unisa.model.Universita;
import it.unisa.model.UniversitaModel;

/**
 * Servlet implementation class PrelevaAnnunciServlet
 */
@WebServlet("/Tutti/PrelevaAnnunciServlet")
public class PrelevaAnnunciServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String siglaUni = request.getParameter("universita");
		String categoria = request.getParameter("categorie");
		String titolo = request.getParameter("search");
		String regione = request.getParameter("regione");
		String tutti =  request.getParameter("tutti");
		System.out.println(titolo);
		System.out.println(categoria);
		System.out.println(siglaUni);

		Categoria c = new Categoria();
		DriverManagerConnectionPool dmcp = (DriverManagerConnectionPool) getServletContext().getAttribute("DriverManager");
		AnnuncioModel modelAnnuncio = new AnnuncioModel(dmcp);
		if(tutti!=null && tutti.equals("-1")) {
			try {
				ArrayList<Annuncio> annunci=modelAnnuncio.doRetrieveAll("titolo");
				request.setAttribute("numeroAnnunci", annunci.size());
				request.setAttribute("annunci", annunci);
				request.setAttribute("annunciJson", new Gson().toJson(annunci));
				RequestDispatcher d = getServletContext().getRequestDispatcher("/User/AnnunciCreati.jsp");
				d.forward(request, response);
			} 
			catch (SQLException e) {
				e.printStackTrace();
			}

		}
		else if(siglaUni!=null && categoria != null && titolo!=null && !siglaUni.equals("0") && !categoria.equals("0") && !titolo.equals("")) {
			try {
				ArrayList<Annuncio> annunci=modelAnnuncio.doRetrieveAll("titolo");
				ArrayList<Annuncio> annunciView = new ArrayList<Annuncio>();
				c.setNome(categoria);
				for(Annuncio a : annunci) {
					if(a.getSiglaUni().equals(siglaUni) && a.getCategoria().equals(c) && a.getTitolo().equals(titolo)) {
						annunciView.add(a);
					}
				}
				request.setAttribute("numeroAnnunci", annunciView.size());
				request.setAttribute("annunci", annunciView);
				request.setAttribute("annunciJson", new Gson().toJson(annunciView));
				RequestDispatcher d = getServletContext().getRequestDispatcher("/Tutti/VisualizzaAnnunci.jsp");
				d.forward(request, response);
			} 
			catch (SQLException e) {
				e.printStackTrace();
			}
		}
		else if(siglaUni!=null && categoria != null && !siglaUni.equals("0") && !categoria.equals("0")) {
			try {
				ArrayList<Annuncio> annunci=modelAnnuncio.doRetrieveAll("titolo");
				ArrayList<Annuncio> annunciView = new ArrayList<Annuncio>();
				c.setNome(categoria);
				for(Annuncio a : annunci) {
					if(a.getSiglaUni().equals(siglaUni) && a.getCategoria().equals(c)) {
						annunciView.add(a);
					}
				}
				request.setAttribute("numeroAnnunci", annunciView.size());
				request.setAttribute("annunciJson", new Gson().toJson(annunciView));
				request.setAttribute("annunci", annunciView);
				RequestDispatcher d = getServletContext().getRequestDispatcher("/Tutti/VisualizzaAnnunci.jsp");
				d.forward(request, response);
			} 
			catch (SQLException e) {
				e.printStackTrace();
			} 
		}
		else if(siglaUni!=null && titolo!=null && !siglaUni.equals("0") && !titolo.equals("")) {
			try {
				ArrayList<Annuncio> annunci=modelAnnuncio.doRetrieveAll("titolo");
				ArrayList<Annuncio> annunciView = new ArrayList<Annuncio>();
				
				for(Annuncio a : annunci) {
					if(a.getSiglaUni().equals(siglaUni) && a.getTitolo().equals(titolo)) {
						annunciView.add(a);
					}
				}
				request.setAttribute("numeroAnnunci", annunciView.size());
				request.setAttribute("annunciJson", new Gson().toJson(annunciView));
				request.setAttribute("annunci", annunciView);
				RequestDispatcher d = getServletContext().getRequestDispatcher("/Tutti/VisualizzaAnnunci.jsp");
				d.forward(request, response);
			} 
			catch (SQLException e) {
				e.printStackTrace();
			} 
		}
		else if(categoria != null && titolo!=null && !categoria.equals("0") && !titolo.equals("")) {
			try {
				ArrayList<Annuncio> annunci=modelAnnuncio.doRetrieveAll("titolo");
				ArrayList<Annuncio> annunciView = new ArrayList<Annuncio>();
				c.setNome(categoria);
				for(Annuncio a : annunci) {
					if(a.getTitolo().equals(titolo) && a.getCategoria().equals(c)) {
						annunciView.add(a);
					}
				}

				request.setAttribute("annunciJson", new Gson().toJson(annunciView));
				request.setAttribute("numeroAnnunci", annunciView.size());
				request.setAttribute("annunci", annunciView);
				RequestDispatcher d = getServletContext().getRequestDispatcher("/Tutti/VisualizzaAnnunci.jsp");
				d.forward(request, response);
			} 
			catch (SQLException e) {
				e.printStackTrace();
			} 
		}
		else if(siglaUni!=null && !siglaUni.equals("0")) {
			try {
				ArrayList<Annuncio> annunci=modelAnnuncio.doRetrieveAll("titolo");
				ArrayList<Annuncio> annunciView = new ArrayList<Annuncio>();
				for(Annuncio a : annunci) {
					if(a.getSiglaUni().equals(siglaUni)) {
						annunciView.add(a);
					}
				}

				request.setAttribute("annunciJson", new Gson().toJson(annunciView));
				request.setAttribute("numeroAnnunci", annunciView.size());
				request.setAttribute("annunci", annunciView);
				RequestDispatcher d = getServletContext().getRequestDispatcher("/Tutti/VisualizzaAnnunci.jsp");
				d.forward(request, response);
			} 
			catch (SQLException e) {
				e.printStackTrace();
			} 
		}
		else if(categoria != null && !categoria.equals("0")) {
			try {
				ArrayList<Annuncio> annunci=modelAnnuncio.doRetrieveAll("titolo");
				ArrayList<Annuncio> annunciView = new ArrayList<Annuncio>();
				c.setNome(categoria);
				for(Annuncio a : annunci) {
					if(a.getCategoria().equals(c)) {
						annunciView.add(a);
					}
				}

				request.setAttribute("annunciJson", new Gson().toJson(annunciView));
				request.setAttribute("numeroAnnunci", annunciView.size());
				request.setAttribute("annunci", annunciView);
				RequestDispatcher d = getServletContext().getRequestDispatcher("/Tutti/VisualizzaAnnunci.jsp");
				d.forward(request, response);
			} 
			catch (SQLException e) {
				e.printStackTrace();
			} 
		}
		else if(titolo!=null && !titolo.equals("")) {
			try {
				ArrayList<Annuncio> annunci=modelAnnuncio.doRetrieveAll("titolo");
				ArrayList<Annuncio> annunciView = new ArrayList<Annuncio>();
			
				for(Annuncio a : annunci) {
					if(a.getTitolo().equals(titolo)) {
						annunciView.add(a);
					}
				}
				request.setAttribute("numeroAnnunci", annunciView.size());

				request.setAttribute("annunciJson", new Gson().toJson(annunciView));
				request.setAttribute("annunci", annunciView);
				RequestDispatcher d = getServletContext().getRequestDispatcher("/Tutti/VisualizzaAnnunci.jsp");
				d.forward(request, response);
			} 
			catch (SQLException e) {
				e.printStackTrace();
			} 
		}
		else if(regione!=null) {
			try {
				ArrayList<Annuncio> annunci=modelAnnuncio.doRetrieveAll("titolo");
				ArrayList<Annuncio> annunciView = new ArrayList<Annuncio>();
				UniversitaModel modelUniversita = new UniversitaModel(dmcp);
				
				ArrayList<Universita> universita = modelUniversita.doRetrieveAll("localita");
				Universita uni = new Universita();
				
				for(Universita u: universita) {
					if(u.getLocalita().equals(regione)){
						uni = u;
					}
				}
				
				for(Annuncio a : annunci) {
					if(a.getSiglaUni().equals(uni.getSigla())) {
						annunciView.add(a);
					}
				}
				request.setAttribute("numeroAnnunci", annunciView.size());
				
				request.setAttribute("annunciJson", new Gson().toJson(annunciView));
				request.setAttribute("annunci", annunciView);
				RequestDispatcher d = getServletContext().getRequestDispatcher("/Tutti/VisualizzaAnnunci.jsp");
				d.forward(request, response);
			} 
			catch (SQLException e) {
				e.printStackTrace();
			} 

		}
		else {
			request.setAttribute("erroreRicerca", "Annunci non trovati");
			request.setAttribute("numeroAnnunci", 0);
			RequestDispatcher d = getServletContext().getRequestDispatcher("/Tutti/VisualizzaAnnunci.jsp");
			d.forward(request, response);

		}
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
