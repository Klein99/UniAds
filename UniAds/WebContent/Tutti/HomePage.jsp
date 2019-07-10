<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>

<!doctype html>
<html lang="en" class="no-js">
	<head>
    	<meta charset="utf-8">
    	<meta http-equiv="x-ua-compatible" content="ie=edge">
    	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    	<link rel="stylesheet" href="/UniAds/css/style.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css">
  		<title>UniAds</title>
	</head>
	<body onload=mostraCategorie();mostraUniversita();mostraListaRegioni()>
		<%@include file="/Tutti/Header.jsp" %>
		<%@include file="/Tutti/BarraNavigazione.jsp" %>
		<div class="container">
			<article id="grigliaCategorie">
				<a href="/UniAds/PrelevaAnnunciServlet?universita=0&categorie=Appunti&search=" style="height: 123px"><img id="appunti" class="icon-categorie" ></a>
				<a href="/UniAds/PrelevaAnnunciServlet?universita=0&categorie=CarSharing&search=" style="height: 123px"><img id="car" class="icon-categorie" ></a>
				<a href="/UniAds/PrelevaAnnunciServlet?universita=0&categorie=Lavoro&search=" style="height: 123px"><img id="lavoro" class="icon-categorie" ></a>
				<a href="/UniAds/PrelevaAnnunciServlet?universita=0&categorie=Ripetizioni&search=" style="height: 123px"><img id="ripetizioni" class="icon-categorie"></a>  
				<a href="/UniAds/PrelevaAnnunciServlet?universita=0&categorie=Libri&search=" style="height: 123px"><img id="libri" class="icon-categorie"></a>
				<a href="/UniAds/PrelevaAnnunciServlet?universita=0&categorie=Affitti&search=" style="height: 123px"><img id="affitti" class="icon-categorie"></a>
			</article>
			<article id="regioni">
				<ul class="regione-lista" id="regione-lista1"></ul>
				<ul class="regione-lista" id="regione-lista2"></ul>
			</article>
		</div>
		<%@include file="/Tutti/Footer.jsp" %>
		<script src="/UniAds/js/jquery.js"></script>
		<script src="/UniAds/js/funzioni.js"></script>
	</body>
</html>