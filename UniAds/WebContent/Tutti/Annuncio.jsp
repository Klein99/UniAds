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
		<link rel="stylesheet" href="/UniAds/css/Annuncio.css">
  	</head>
	
	<body onload=mostraCategorie();mostraUniversita()>	
		<%@include file="Header.jsp" %>
		<%@include file="BarraNavigazione.jsp" %>
		<!-- TITOLO-IMMAGINI (PrelevaImmagini, arraylist)- DESCRIZIONE - BOTTONEACQUISTA (SE C'�) - BOTTONECONTATTA -->	
		<div class="containerAnnuncio">
			<div id="TitoloAnnuncio"> <%= annuncio.getTitolo() %> </div>
			<div id="fakeTable">
				<div id="slideshow">
					<img onerror="this.onerror=null; this.src='/UniAds/img/error.png'" src="PrelevaImmaginiServlet?email=<%=annuncio.getUtente().getEmail()%>&titolo=<%=annuncio.getTitolo()%>">
				</div>
				<div>
					<div id="descrizione"><%= annuncio.getDescrizione() %> </div>
					<div id="elenco">
						<span class="propriet�">Rilasciato da: </span>
						<%= annuncio.getUtente().getEmail() %>	<br>
						<span class="propriet�">Appartenente a: </span>
						<%= annuncio.getSiglaUni() %> <br>
						<span class="propriet�">Categoria: </span>
						<%= annuncio.getCategoria().getNome() %> <br>
						<div>
							<form action="mailto: <%= annuncio.getUtente().getEmail() %>" method="GET" >
								<button class="btnAnnuncio"> Contatta </button>
							</form>
							<% if (annuncio.isAcquistoOnline()) { %>
							<button class="btnAnnuncio"> Acquista Online </button> <% } %>
						</div>
					</div>
				</div>
			</div>
		</div> 
		
			
  
		<%@include file="Footer.jsp" %>
			
		<script src="/UniAds/js/jquery.js"></script>
		<script src="/UniAds/js/funzioni.js"></script>	
	</body>
</html>