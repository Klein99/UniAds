
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

	return true
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
				var openTag = "<li><a href='"+temp.nome+"'>";
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

function aggiungiImmagine(n){
	var i=n+1;
	var openTagDiv ='<div class="img">';	
		
	var tagInput='<input type="file" name="img" size="200" class="uploadImg" onchange=aggiungiImmagine('+i+')>';
	var closeTagDiv = '</div><br/>';
	$("#fieldsetImg").append(openTagDiv+tagInput+closeTagDiv);	
	
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
		  
		  xmlhttp.open("GET","http://localhost:8080/UniAds/EliminaCategoriaServlet"+"?nome="+nomeCategoria,true);
		 
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
		window.location.href="./OperazioniAdmin.jsp";
	if(value == 9)
		window.location.href="./OperazioniCorriere.jsp";
}

function inviaForm(){
	document.getElementById("ricerca").submit();
}




function paginazione(numeroPagina, annunciJson){
	var fine = numeroPagina*5;
	if(annunciJson[fine-5] != null) {
		$("#div1").empty();
		$("#div1").html('<img class="adImage" src="PrelevaImmaginiServlet?email='+annunciJson[fine-5].utente.email+'&titolo='+annunciJson[fine-5].titolo+'"><div class="adBody"><span class="titoloAds">'+annunciJson[fine-5].titolo+'</span><span class="descrizioneAds">'+annunciJson[fine-5].descrizione+'</span></div>');
		
	}
	else{
		$("#div1").empty();
	}

	if(annunciJson[fine-4] != null) {
		$("#div2").empty();
		$("#div2").html('<img class="adImage" src="PrelevaImmaginiServlet?email='+annunciJson[fine-4].utente.email+'&titolo='+annunciJson[fine-4].titolo+'"><div class="adBody"><span class="titoloAds">'+annunciJson[fine-4].titolo+'</span><span class="descrizioneAds">'+annunciJson[fine-4].descrizione+'</span></div>');
	}
	else{
		$("#div2").empty();
	}
	if(annunciJson[fine-3] != null) {
		$("#div3").empty();
		$("#div3").html('<img class="adImage" src="PrelevaImmaginiServlet?email='+annunciJson[fine-3].utente.email+'&titolo='+annunciJson[fine-3].titolo+'"><div class="adBody"><span class="titoloAds">'+annunciJson[fine-3].titolo+'</span><span class="descrizioneAds">'+annunciJson[fine-3].descrizione+'</span></div>');
	}
	else{
		$("#div3").empty();
		
	}
	if(annunciJson[fine-2] != null) {
		$("#div4").empty();
		$("#div4").html('<img class="adImage" src="PrelevaImmaginiServlet?email='+annunciJson[fine-2].utente.email+'&titolo='+annunciJson[fine-2].titolo+'"><div class="adBody"><span class="titoloAds">'+annunciJson[fine-2].titolo+'</span><span class="descrizioneAds">'+annunciJson[fine-2].descrizione+'</span></div>');
	}
	else{
		$("#div4").empty();
		
	}
	if(annunciJson[fine-1] != null) {
		$("#div5").empty();
		$("#div5").html('<img class="adImage" src="PrelevaImmaginiServlet?email='+annunciJson[fine-1].utente.email+'&titolo='+annunciJson[fine-1].titolo+'"><div class="adBody"><span class="titoloAds">'+annunciJson[fine-1].titolo+'</span><span class="descrizioneAds">'+annunciJson[fine-1].descrizione+'</span></div>');

	}
	else{
		$("#div5").empty();
		
	}
}
var count = 2;
function addImg(){
	var container = document.getElementById("divImg");
	
	var divv = document.createElement("div");
	divv.id = "id"+count;
	count++;
	
	var label = document.createElement("label");
	label.htmlFor = "imgLabel";
	divv.appendChild(label);
	
	var element = document.createElement("input");
	element.type = "file";
	element.name = "img";
	
	element.placeholder = "111-1111111";
	divv.appendChild(element);
	
	var input = document.createElement("input");
	input.type = "button";
	input.value = "-";
	input.addEventListener("click", function() {removeImg(divv.id)});
	divv.appendChild(input);
	
	container.appendChild(divv);
}

function removeImg(idd){
	var element = document.getElementById(idd);
	element.parentNode.removeChild(element);

	
}

