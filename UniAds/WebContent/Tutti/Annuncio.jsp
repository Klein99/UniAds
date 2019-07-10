<%@page import="java.util.ArrayList"%>
<%@page import="it.unisa.model.Annuncio"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
	<head>
		<%
			Annuncio annuncio = (Annuncio) request.getAttribute("Annuncio");
		%>
		<meta charset="ISO-8859-1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
    	<title>Annuncio <%=annuncio.getTitolo()%></title> 
		<link type="text/css" rel="stylesheet" href="/UniAds/css/simplePagination.css"/>
		<link rel="stylesheet" href="/UniAds/css/style.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css">
		<link rel="stylesheet" href="/UniAds/css/annuncio.css">
  	</head>
	
	<body onload=mostraCategorie();mostraUniversita()>	
		<%@include file="Header.jsp" %>
		<%@include file="BarraNavigazione.jsp" %>
		<!-- TITOLO-IMMAGINI (PrelevaImmagini, arraylist)- DESCRIZIONE - BOTTONEACQUISTA (SE C'è) - BOTTONECONTATTA -->	
		<div class="container">
		<div id="TitoloAnnuncio">
			<%= annuncio.getTitolo() %>
		</div>
		<form action="/UniAds/NONLOSOServlet" method="GET" >
		<img onerror="this.onerror=null; this.src='/UniAds/img/error.png'" src="PrelevaImmaginiServlet?email=<%=annuncio.getUtente().getEmail()%>&titolo=<%=annuncio.getTitolo()%>">
			
				<%= annuncio.getDescrizione() %> <br>
				Rilasciato da: <%= annuncio.getUtente().getEmail() %>	<br>
				Appartenente a: <%= annuncio.getSiglaUni() %> <br>
				Categoria: <%= annuncio.getCategoria().getNome() %> <br>
				Azioni: <input type="submit" value="Contatta"> 
				<% if (!annuncio.isAcquistoOnline()) { %>
						<input type="submit" value="Acquista Online"> <% } %></button>
		</form>
		</div>
		
			
  
		<%@include file="Footer.jsp" %>
			
		<script src="/UniAds/js/jquery.js"></script>
		<script src="/UniAds/js/funzioni.js"></script>	
	</body>
</html>