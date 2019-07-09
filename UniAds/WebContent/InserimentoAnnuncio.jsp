<%@page import="it.unisa.model.GenericUser"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="ISO-8859-1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>UniAds - Inserisci Annunci</title>
		
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<link rel="stylesheet" type="text/css" href="css/InserimentoAnnuncio.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css">
		
	</head>
	
	<body onload=mostraCategorie();mostraUniversita();>
		<%@include file="Header.jsp"%>
		<%@include file="BarraNavigazione.jsp"%>
		<% isLog = (Boolean) request.getSession().getAttribute("login"); 
			if(isLog!=null && isLog.equals(true) && object!=null){
				String email="";
				String error="";
				if(object instanceof Amministratore){
					amministratore = (Amministratore)request.getSession().getAttribute("utente");					
					email = amministratore.getEmail();
					error = (String)request.getAttribute("errore");
				}
				if(object instanceof Utente){
					utente = (Utente) request.getSession().getAttribute("utente");
					email = utente.getEmail();
  					error = (String)request.getAttribute("errore");
				}
				if(object instanceof Corriere){
					corriere = (Corriere) request.getSession().getAttribute("utente");
					email = corriere.getEmail();
  					error = (String)request.getAttribute("errore");
				}
				
				
		%>
		
	
   	<div class="container_insert">
	<fieldset class="fieldVit">

		<form action="InserimentoAnnuncioServlet" method="POST" id="formInserisciAnnuncio" enctype="multipart/form-data">
			
				
			<input type = "hidden" value="<%=email%>" name="email">
			<input type ="hidden" value="0" name="valutazione">
			<p class="dettagli">Titolo Annuncio:</p>
			<input class="input-text" type = "text" value="" name="titoloAnnuncio" placeholder="Titolo" onblur="primaLetteraMaiuscola(this.form,'titoloAnnuncio')"><br/>
			<br/>
			<fieldset style="border: 2px dashed #838383;" id="fieldsetImg">
				<legend class="dettagli">Seleziona immagini(facoltativo)</legend>
				<div class="img" id="divImg">
					<img src="img/iconaddphoto.png">
					<label for="imgLabel"></label>
					
					<input type="file"  value="Scegli immagine" name="img" size="200" class="uploadImg" onchange="aggiungiImmagine(0)">
					<input type="button" value="+" onclick="addImg()">
				</div>
				<span id="0"></span>
				<br/>				
			</fieldset><br/>
			<select name="categorie" id="selectCategoria2">
				<option value="0" selected="selected">Seleziona categoria:</option>
			</select>
			
			
			<select name="universita" id="selectUniversita2">
				<option value="0" selected="selected">Seleziona universit�:</option>
			</select>
			
			<br/>
			<br/>
			
			<textarea name = "descrizione" placeholder="Descrizione annuncio" onblur="primaLetteraMaiuscola(this.form,'descrizione')"></textarea>
			
			<br/>
			
			<input type = "radio"  name="tipo" value="vendita" checked="checked">Vendita
			<input type = "radio"  name="tipo" value="cercasi">Cercasi
			<input type = "radio"  name="tipo" value="offerta">Offerta
			<br/>
			<input type="checkbox" name="acquistoOnline" value="acquistoOnline">Consenti Acquisto Online
			
			<br/>
			
			<% if(error != null && !error.equals("")) { %>	
				<%=error %>
			<% } %>
			<br/>
			<input type="submit" class="pulsantilogin-registrazione-add" value="Aggiungi">
				
		</form>	
		<%
			}
		%>	
			
  </fieldset>
  </div>
			<%@include file="Footer.jsp"%>

		<script src="js/jquery.js"></script>
		<script src="js/funzioni.js"></script>
		
		
		
	</body>

</html>