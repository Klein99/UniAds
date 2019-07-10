<div class="navigator"> 
		<img src="/UniAds/img/cercare.png" id="search">
		<form action="<%=response.encodeURL("/UniAds/PrelevaAnnunciServlet")%>" method="GET" id="ricerca">
			<select name="universita" class="select" id="selectUniversita">
				<option value="0" selected="selected">Seleziona Università:</option>
			</select>
			<select name="categorie" class="select" id="selectCategoria">
				<option value="0" selected="selected">Seleziona Categoria:</option>
			</select>
			<span>
				<input id="research" type="text" name="search" placeholder="Titolo..">
				<i class="fas fa-search" id="search-icon" onclick="inviaForm()"></i>
			</span>
		</form>
</div>