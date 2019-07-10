package it.unisa.controller;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import it.unisa.model.Annuncio;
import it.unisa.model.AnnuncioModel;
import it.unisa.model.DriverManagerConnectionPool;
import it.unisa.model.Utente;

@WebServlet("/PrelevaAnnuncioSingoloServlet")
public class PrelevaAnnuncioSingoloServlet extends HttpServlet 
{
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		DriverManagerConnectionPool dmcp = (DriverManagerConnectionPool) getServletContext().getAttribute("DriverManager");
		AnnuncioModel modelAnnuncio = new AnnuncioModel(dmcp);
		String titolo = "psd"; //request.getParameter("titolo");
		String mail = "lorenzone1999@hotmail.it"; //request.getParameter("mail");
		/* fittizio */
		Annuncio annuncioFit = new Annuncio();
		annuncioFit.setTitolo(titolo);
		Utente utente = new Utente();
		utente.setEmail(mail);
		annuncioFit.setUtente(utente);
		Annuncio annuncio = null;
		try 
		{
			annuncio = modelAnnuncio.doRetrieveByKey(annuncioFit);
		} 
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
		
		request.setAttribute("Annuncio", annuncio);
		RequestDispatcher rd = getServletContext().getRequestDispatcher("/Tutti/Annuncio.jsp");
		rd.forward(request, response);
	}	

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{		
		doGet(request, response);
	}
}