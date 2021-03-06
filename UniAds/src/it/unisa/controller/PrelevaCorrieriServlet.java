package it.unisa.controller;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import it.unisa.model.AreaCompetenza;
import it.unisa.model.AreaCompetenzaModel;
import it.unisa.model.DriverManagerConnectionPool;

/**
 * Servlet implementation class PrelevaCorrieriServlet
 */
@WebServlet("/PrelevaCorrieriServlet")
public class PrelevaCorrieriServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	response.setContentType("application/json");
		DriverManagerConnectionPool dmcp=(DriverManagerConnectionPool)getServletContext().getAttribute("DriverManager");
		AreaCompetenzaModel modelAreaCompetenza = new AreaCompetenzaModel(dmcp);
		try {
			
			ArrayList<AreaCompetenza> corrieri = modelAreaCompetenza.doRetrieveAll("agenzia_corriere");
			Gson gson = new Gson();
			String jsonString = gson.toJson(corrieri);
			response.getWriter().print(jsonString.toString());
		} catch (SQLException e) {
			e.printStackTrace();
		}

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
