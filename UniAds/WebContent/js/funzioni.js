
function unDisplayAgenzia(form) {
	$("#agenzia").remove();
}

function displayAgenzia(form) {
	var openDiv = "<div id='agenzia'>";
	var label = "<label for='agenzia'> Agenzia </label><br/>";
	var input = "<input type='text' class='input-text' name='agenzia' value='' placeholder='Ups' required>";
	var closeDiv = "</div>";
	$("#agenzia").remove();
	$("#password2").append(openDiv + label + input + closeDiv);

}
var checkPaswd = true;
function checkPassword() {
	var pwd1 = $("input[name='password']").val();
	var pwd2 = $("input[name='password2']").val();
	if (pwd1 == pwd2) {
		$("#registrazione").attr("disabled", false);
		$("#errorePassword").remove();
		checkPaswd = true;
	} else {
		$("#registrazione").attr("disabled", true);
		if (checkPaswd == true) {
			$("#password2").append("<span class='errore' id='errorePassword'><br/>Password errata</span>");
			checkPaswd = false;
		}
	}
}
var checkEmail = true;
function validazione(form) {
	let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (!form["email"].value.match(regex)) {
		if (checkEmail == true) {
			$("#emailRegistrazione").append("<span class='errore' id='erroreEmail'><br/>Email non valida</span>");
			checkEmail = false;
		}
		return false;
	}
	$("#emailRegistrazione").remove();
	checkEmail = true;

	return true;
}


function aggiungiPreferiti(event,emailUtente,emailAnnuncio,titolo,tipo){
	window.location.href="/UniAds/User/AggiungiPreferiti?emailUtente="+mail+"&titoloAnnuncio="+titolo+"&emailAnnuncio="+emailAnnuncio+"&tipo="+tipo;
	event.stopPropagation();
}

function mostraCategorie() {
	   if (window.XMLHttpRequest) {
	    xmlhttp=new XMLHttpRequest();
	  } else { // code for IE6, IE5
	    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	  xmlhttp.onreadystatechange=function() {
	    if (this.readyState==4 && this.status==200) {

			var jsonString = this.responseText;
			var obj = JSON.parse(jsonString);
			var lunghezza=obj.length
			for(var i = 0; i<lunghezza; i++){
				var temp = obj[i];
				var j=i+1;
				var testo= temp.nome;
				var openTag = "<option value="+"'"+temp.nome+"'"+">";
				var closeTag = "</option>"
				$("#selectCategoria").append(openTag+testo+closeTag);
				$("#selectCategoria2").append(openTag+testo+closeTag);
			}
			
	    }
	  }
	  xmlhttp.open("GET","http://localhost:8080/UniAds/PrendiCategorieServlet",true);
	 
	  xmlhttp.send();
	}


function aggiungiCategoria(form, nome) {
	   if (window.XMLHttpRequest) {
	    xmlhttp=new XMLHttpRequest();
	  } else { // code for IE6, IE5
	    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	  xmlhttp.onreadystatechange=function() {
	    if (this.readyState==4 && this.status==200) {
	    	
		}
	  }
	  var valore=$(form["nomeCategoria"]).val();
	  xmlhttp.open("GET","http://localhost:8080/UniAds/InserimentoCategoriaServlet"+"?nome="+valore,true);
	  
	  xmlhttp.send();
	}


function aggiungiUniversita(form, nome) {
	   if (window.XMLHttpRequest) {
	    xmlhttp=new XMLHttpRequest();
	  } else { // code for IE6, IE5
	    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	  xmlhttp.onreadystatechange=function() {
	    if (this.readyState==4 && this.status==200) {
	    	
		}
	  }
	  var siglaUniversita=$(form["siglaUniversita"]).val();
	  var localita=$(form["nomeLocalita"]).val();
	  
	  xmlhttp.open("GET","http://localhost:8080/UniAds/InserimentoUniversitaServlet"+"?siglaUniversita="+siglaUniversita+"&localita="+localita,true);
	  xmlhttp.setRequestHeader("connection","close");
	  xmlhttp.send();
	}


function mostraUniversita() {
	if (window.XMLHttpRequest) {
		xmlhttp=new XMLHttpRequest();
	}
	else {
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function() {
		if (this.readyState==4 && this.status==200) {

			var jsonString = this.responseText;
			var obj = JSON.parse(jsonString);
			var lunghezza=obj.length
			for(var i = 0; i<lunghezza; i++){
				var temp = obj[i];
				var j=i+1;
				var testo= temp.sigla;
				var openTag = "<option value="+"'"+temp.sigla+"'"+">";
				var closeTag = "</option>"
				$("#selectUniversita").append(openTag+testo+closeTag);
				$("#selectUniversita2").append(openTag+testo+closeTag);
			}
			
	    }
	  }
	  xmlhttp.open("GET","http://localhost:8080/UniAds/PrendiUniversitaServlet",true);
	 
	  xmlhttp.send();
	}

function mostraListaUniversita() {
	if (window.XMLHttpRequest) {
		xmlhttp=new XMLHttpRequest();
	}
	else {
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function() {
		if (this.readyState==4 && this.status==200) {

			var jsonString = this.responseText;
			var obj = JSON.parse(jsonString); 
			var lunghezza=obj.length
			for(var i = 0; i<lunghezza; i++){
				var temp = obj[i];
				var j=i+1;
				var testo= temp.sigla;
				var openTag = "<li><a href='"+temp.sigla+"'>";
				var closeTag = "</a>"+"</li>";
				$(".university-list").append(openTag+testo+closeTag);
			}
			
	    }
	  }
	  xmlhttp.open("GET","http://localhost:8080/UniAds/PrendiUniversitaServlet",true);
	 
	  xmlhttp.send();
	}

function mostraListaRegioni() {
	if (window.XMLHttpRequest) {
		xmlhttp=new XMLHttpRequest();
	}
	else {
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function() {
		if (this.readyState==4 && this.status==200) {

			var jsonString = this.responseText;
			var obj = JSON.parse(jsonString);
			var lunghezza=obj.length
			for(var i = 0; i<lunghezza; i++){
				var temp = obj[i];
				
				var testo= temp.nome;
				var path = '/UniAds/Tutti/PrelevaAnnunciServlet?regione='+temp.nome+'&search=';
				var openTag = "<li><a href='"+path+"'>";
				var closeTag = "</a>"+"</li>";
				if(i<lunghezza/2)
					$("#regione-lista1").append(openTag+testo+closeTag);
				else
					$("#regione-lista2").append(openTag+testo+closeTag);
			}
			
	    }
	  }
	  xmlhttp.open("GET","http://localhost:8080/UniAds/PrendiRegioniServlet",true);
	 
	  xmlhttp.send();
	}

//AGGIUNGE L'IMMAGINE IN INSERIMENTO ANNUNCIO.
function aggiungiImmagine(n){
	var i=n+1;	
	$("#uploadImg").trigger("click");	
}

var numeroImg=0;
$(document).ready(() =>{
			$("#uploadImg").change(function(e){
			var files = e.currentTarget.files;
			var file = files[files.length-1];
			var objectUrl = window.URL.createObjectURL(file);
			
			if(numeroImg==0)
				$("#imgCaricata").prop("src", objectUrl);
			else
				$("#imgCaricata"+(numeroImg)).prop("src", objectUrl);
			numeroImg=numeroImg+1;
			var openDiv = '<div class="img" id="divImg'+numeroImg+'">';
			var imgTag = '<img class="nuovaImg" src="/UniAds/img/iconaddphoto.png" onclick="aggiungiImmagine()" id="imgCaricata'+(numeroImg)+'">';
			var imgDelete = '<img src="/UniAds/img/delete.png" onclick="rimuoviImmagine(\'divImg'+numeroImg+'\')" id="img'+numeroImg+'" onmouseout="outImg(\'img'+numeroImg+'\')" onmouseenter="hoverImg(\'img'+numeroImg+'\')"';
			var label = '<label for="imgLabel"></label>';
			var closeDiv ='</div>';
			$("#"+0).append(openDiv+imgTag+imgDelete+label+closeDiv);
		});
		
});

//RIMUOVE L'IMMAGINE DALL'INSERIMENTO ANNUNCIO.
function rimuoviImmagine(idd){
	if(idd=="divImg"){
		$("#imgCaricata").prop("src","/UniAds/img/iconaddphoto.png")
	}
	else{
		$("#"+idd).remove();
		numeroImg = numeroImg-1;
	}
}

function primaLetteraMaiuscola(form, nome){
	var valore = $(form[""+nome]).val();
	valore = valore.charAt(0).toUpperCase() + valore.slice(1);
	$(form[""+nome]).val(valore);
	
}
function maiuscolo(form, nome){
	var valore = $(form[""+nome]).val();
	var maiuscolo =valore.toUpperCase();
	$(form[""+nome]).val(maiuscolo);
}


function eliminaCategorie(form, nome){
	   if (window.XMLHttpRequest) {
		    xmlhttp=new XMLHttpRequest();
		  } else { // code for IE6, IE5
		    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		  xmlhttp.onreadystatechange=function() {
		    if (this.readyState==4 && this.status==200) {
		    	
			}
		  }
		  var nomeCategoria=$(form["nomeCateogira"]).val();
		  
		  xmlhttp.open("GET","http://localhost:8080/UniAds/Admin/EliminaCategoriaServlet"+"?nome="+nomeCategoria,true);
		 
		  xmlhttp.send();
}
function eliminaUniversita(form, nome){
	   if (window.XMLHttpRequest) {
		    xmlhttp=new XMLHttpRequest();
		  } else { // code for IE6, IE5
		    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		  xmlhttp.onreadystatechange=function() {
		    if (this.readyState==4 && this.status==200) {
		    	
			}
		  }
		  var siglaUniversita=$(form["siglaUniversita"]).val();
		  window.alert("CIAO");
		  xmlhttp.open("GET","http://localhost:8080/UniAds/PrendiRegioniServlet",true);
		 
		  xmlhttp.send();
}



function mostraPassword() {
	  var x = document.getElementById("getPassword");
	  if (x.type === "password") {
	    x.type = "text";
	  } else {
	    x.type = "password";
	  }
}

function selectOperazioni(value) {
	if(value == 1)
		window.location.href="/UniAds/Admin/OperazioniAdmin.jsp";
	if(value==5){
		window.location.href="/UniAds/Tutti/PrelevaAnnunciServlet?tutti=-1";
	}
	if(value == 9)
		window.location.href="/UniAds/Corriere/OperazioniCorriere.jsp";
}

function inviaForm(){
	document.getElementById("ricerca").submit();
}




function paginazione(numeroPagina, annunciJson){
	var fine = numeroPagina*5;
	
	for(var i = 5, y = 1; i > 0; i--, y++) {
		if(annunciJson[fine-i] != null) {
			var codice = '<img class="adImage" onerror="this.onerror=null; this.src=\'/UniAds/img/error.png\'" src="/UniAds/PrelevaImmaginiServlet?email='+annunciJson[fine-i].utente.email+'&titolo='+annunciJson[fine-i].titolo+'">';
			codice += '<div class="adBody">';
			codice += '<span class="titoloAds">' + annunciJson[fine-i].titolo;
			codice += '<img onclick="aggiungiPreferiti(event)" class="preferitiIcon" src="/UniAds/img/heart.png">';
			codice += '</span>';
			codice += '<span class="descrizioneAds">' + annunciJson[fine-i].descrizione + '</span>';
			codice += '</div>';

			$("#div" + y).empty();
			$("#div" + y).html(codice);
		} 
		else {
			$("#div" + y).empty();
		}
	}
}

function paginazioneUtente(numeroPagina, annunciJson,emailUser){
	var fine = numeroPagina*5;
	for(var i = 5, y = 1; i > 0; i--, y++) {
		if(annunciJson[fine-i] != null && emailUser == annunciJson[i-1].utente.email) {
			var codice = '<img class="adImage" onerror="this.onerror=null; this.src=\'/UniAds/img/error.png\'" src="/UniAds/PrelevaImmaginiServlet?email='+annunciJson[fine-i].utente.email+'&titolo='+annunciJson[fine-i].titolo+'">';
			codice += '<div class="adBody">';
			codice += '<span class="titoloAds">' + annunciJson[fine-i].titolo;
			codice += '<img class="deleteIcon"  onmouseout="outImg('+i+')" onmouseenter="hoverImg('+i+')" src="/UniAds/img/delete.png" id="'+i+'">';
			codice += '</span>';
			codice += '<span class="descrizioneAds">' + annunciJson[fine-i].descrizione + '</span>';
			codice += '</div>';

			$("#div" + y).empty();
			$("#div" + y).html(codice);
		} 
		else {
			$("#div" + y).empty();
		}
	}
}

var count = 2;



function hoverImg(id){
	$("#"+id).prop('src', '/UniAds/img/deleteHover.png');
	
	
}

function outImg(id){
	$("#"+id).prop('src', '/UniAds/img/delete.png');
	
}

function selezionaAnnuncio(titolo, mail){
	window.location.href="/UniAds/PrelevaAnnuncioSingoloServlet?mail="+mail+"&titolo="+titolo;
}

function displaySelect() 
{
	
	   if (window.XMLHttpRequest) {
		    xmlhttp=new XMLHttpRequest();
		  } else { // code for IE6, IE5
		    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		  xmlhttp.onreadystatechange=function() {
		    if (this.readyState==4 && this.status==200) {

				var jsonString = this.responseText;
				var obj = JSON.parse(jsonString);
				var lunghezza=obj.length;
				$("#acquisto").remove();
				var fieldset = "<fieldset class='risi'> <legend>Acquisto Online</legend>";
				var select = "<select id='corriere' class='select'>";
				var option = "<option value='0' selected>Scegli un corriere</option>";
			
				for(var i = 0; i<lunghezza; i++){
					var temp = obj[i];
				
					var agenzia = temp.agenzia;
					var prezzo = temp.prezzo;
					var valoreOption = "Agenzia:"+agenzia+" Prezzo:"+prezzo;
					option = option +  "<option value='" + agenzia + "'>" + valoreOption + " </option>";
				}	 
					var selectEnd = "</select>";
					var input = "<input type='text' placeholder='Numero Carta' id='carta'>";
					var button = "<button class='btnAnnuncio' onclick='sendData()'>Scegli corriere </button>";
					var fieldEnd = "</fieldset>";
					
					$("#corriere").empty();
					$("#corriere").append(fieldset + select + option + selectEnd + input + button + fieldEnd);
				
		    }
		  }
		  xmlhttp.open("GET","http://localhost:8080/UniAds/PrelevaCorrieriServlet",true);
		 
		  xmlhttp.send();
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
		$("#response").append("I tuoi dati sono stati consegnati al corriere scelto, ");
		$("#response").append("il quale provvederà a contattarti appena possibile");	
	}				
}
