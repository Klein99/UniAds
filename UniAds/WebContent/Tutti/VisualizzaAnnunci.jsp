<%@page import="com.google.gson.Gson"%>
<%@page import="java.util.ArrayList"%>
<%@page import="it.unisa.model.Annuncio"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="ISO-8859-1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
    
		<title>Visualizza Annunci</title>
		<link type="text/css" rel="stylesheet" href="/UniAds/css/simplePagination.css"/>
		<link rel="stylesheet" href="/UniAds/css/style.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css">
  		

	</head>
	
	<body onload=mostraCategorie();mostraUniversita()>	
	
		<%@include file="Header.jsp" %>
		<%@include file="BarraNavigazione.jsp" %>
		
		
		<%
			
			String errore = (String)request.getAttribute("erroreRicerca");
			Object objNumAnnunci =  request.getAttribute("numeroAnnunci");	
		
			if(errore==null && objNumAnnunci!=null){				
		%>
					<input type="hidden" value="0" id="selettorePagine" name="selettorePagine">
		<%
		
				int numeroAnnunci = (Integer) request.getAttribute("numeroAnnunci");
				ArrayList<Annuncio> annunci = (ArrayList<Annuncio>) request.getAttribute("annunci");
				String annunciJson = (String) request.getAttribute("annunciJson");
				System.out.println(annunciJson);
				if(annunci.size()>0){
		%>
		
		
		
		<div class="containerAds">
			<ul class="listAds">
					<li id="ricerca">Annunci trovati</li>
					<%
					for(int i = 1; i <= 5; i++) {
						if(annunci.size()>i-1 && annunci.get(i-1)!=null){
							String gtitolo = new Gson().toJson(annunci.get(i-1).getTitolo());
							String gEmail = new Gson().toJson(annunci.get(i-1).getUtente().getEmail());
					%> 
							<li class="everyAds" id="div<%=i%>">
								<img class="adImage" onerror="this.onerror=null; this.src='/UniAds/img/error.png'" src="/UniAds/PrelevaImmaginiServlet?email=<%=annunci.get(i-1).getUtente().getEmail()%>&titolo=<%=annunci.get(i-1).getTitolo()%>">
		     						<div class="adBody">
										<a onclick='selezionaAnnuncio(<%=gtitolo%>,<%=gEmail%>)'>
		     							<span class="titoloAds"> 
		     								<%=annunci.get(i-1).getTitolo()%> 
		     								<img class="preferitiIcon" onclick="aggiungiPreferiti(event)" src="/UniAds/img/heart.png"> 
		     							</span>
		     							<span class="descrizioneAds"><%=annunci.get(i-1).getDescrizione()%></span>
		     						</a>
		     						</div>
		     				</li>
							<%}%>        		
   					<%} %>
   					</ul>
   					<div class="pageButton">
     					<%for(int i=0; i < numeroAnnunci;i=i+5) {%>	  
    	 		 			<a class="active" onclick='paginazione(<%=i/5+1%>,<%=annunciJson%>)'><%=i/5+1 %></a>
    	 				<%} %>
    	 			</div>
     			</div>
       
     	
     
		<% 		}
      
				else{
		%>
				<div class="containerAds">
					<div id="notFound"><img src="/UniAds/img/adsNotFound.png"></div>
				</div>
		<%
				}
		%>
      			
		<%}%>
				
		<%@include file="Footer.jsp" %>
			
		<script src="/UniAds/js/jquery.js"></script>
		<script src="/UniAds/js/funzioni.js"></script>	
	</body>
	
	
</html>