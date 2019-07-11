<%@page import="java.util.ArrayList"%>
<%@page import="it.unisa.model.Annuncio"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>

<%
	Annuncio annuncio = (Annuncio) request.getAttribute("Annuncio");
%>
		
<!DOCTYPE html>
<html>
	<head>
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
		<!-- TITOLO-IMMAGINI (PrelevaImmagini, arraylist)- DESCRIZIONE - BOTTONEACQUISTA (SE C'è) - BOTTONECONTATTA -->	
		<div class="containerAnnuncio">
			<div id="TitoloAnnuncio"> <%= annuncio.getTitolo() %> </div>
			<div id="fakeTable">
				<div id="slideshow">
					<img onerror="this.onerror=null; this.src='/UniAds/img/error.png'" src="PrelevaImmaginiServlet?email=<%=annuncio.getUtente().getEmail()%>&titolo=<%=annuncio.getTitolo()%>">
				</div>
				<div>
					<div id="descrizione"><%= annuncio.getDescrizione() %> </div>
					<div id="elenco">
						<span class="proprietà">Rilasciato da: </span> 
						<%= annuncio.getUtente().getEmail() %>	<br>
						<span class="proprietà">Appartenente a: </span>
						<%= annuncio.getSiglaUni() %> <br>
						<span class="proprietà">Categoria: </span>
						<%= annuncio.getCategoria().getNome() %> <br>
						<div>
							<form action="mailto: <%= annuncio.getUtente().getEmail() %>" method="GET" >
								<button class="btnAnnuncio"> Contatta </button>
							</form>
							<% if (annuncio.isAcquistoOnline()) { %>
								<button class="btnAnnuncio" onclick="displaySelect()"> Acquista Online </button> 
							<% } %>
							<div id="corriere"></div>
							<div id="response"></div>
						</div>
					</div>
				</div>
			</div>
		</div> 
		
			
  
		<%@include file="Footer.jsp" %>
			
		<script src="/UniAds/js/jquery.js"></script>
		<script src="/UniAds/js/funzioni.js"></script>	
			
		<script type="text/javascript">
		function displaySelect() 
		{
			var fieldset = "<fieldset> <legend>Acquisto Online</legend>";
			var select = "<select id='corriere' class='select'>";
			var option = "<option value='0' selected>Scegli un corriere</option>";
			for (var x=1; x<10; x++)
				var option = option +  "<option value='" + x + "'> Corriere " + x + " </option>";
			var selectEnd = "</select>";
			var input = "<input type='text' placeholder='Numero Carta' id='carta'>";
			var button = "<button class='btnAnnuncio' onclick='sendData()'>Scegli corriere </button>";
			var fieldEnd = "</fieldset>";
			
			$("#corriere").empty();
			$("#corriere").append(fieldset + select + option + selectEnd + input + button + fieldEnd);
		}
		
		function sendData()
		{
			var matching = /^[0-9]+$/;
			$("#response").empty();
			if ($("#carta").val().length == 0)
				$("#response").append("<font color='red' style='bold'>Inserisci la carta</font>");
			else
				if (!$("#carta").val().match(matching))
					$("#response").append("<font color='red' style='bold'>La carta non può contenere caratteri non numerici</font>");
			else
				if ($("#carta").val().length != 16)
					$("#response").append("<font color='red' style='bold'>La carta deve essere di 16 caratteri</font>");
			else
				if ( $('#corriere').find(":selected").val() == 0)
					$("#response").append("<font color='red' style='bold'>Devi selezionare un corriere</font>");
			else
			{
				$("#response").append("I tuoi dati sono stati consegnati al corriere scelto");
				$("#response").append("il quale provvederà a contattarti appena possibile");	
			}				
		}
		</script>
	</body>
</html>