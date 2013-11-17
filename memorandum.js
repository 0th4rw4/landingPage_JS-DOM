var colores = [ '#000000' , '#761616' , '#1f7616' , '#234d82' ] ;
var fuentes = [ 'Arial' , 'Times New Roman' , 'Verdana' , 'Tahoma' ] ;
var newsletters = [ 'DV News' , 'Cursos de cocina de mviola' , 'Origami' , 'Ikebana' , 'Tecnicas de Marketing' , 'DV Interactivo' ] ;

var nombre_TP = document.getElementsByTagName('h1')[0];
nombre_TP.innerHTML = "Sebastián Arca";

//PRIMER DIV #tabs

var contenedor = document.getElementById('contenedor');
var div1 = document.getElementById('tabs');

var div_articulos = document.getElementsByTagName('div');
var enlacesH3 = [];
var parrafosP = [];

enlacesH3[0] = document.createTextNode(document.getElementsByTagName('h3')[0].innerHTML);
enlacesH3[1] = document.createTextNode(document.getElementsByTagName('h3')[1].innerHTML);
enlacesH3[2] = document.createTextNode(document.getElementsByTagName('h3')[2].innerHTML);
				
parrafosP[0] = document.getElementsByTagName('p')[0];
parrafosP[1] = document.getElementsByTagName('p')[1];
parrafosP[2] = document.getElementsByTagName('p')[2];

div1.removeChild(div_articulos[2]);
div1.removeChild(div_articulos[2]);
div1.removeChild(div_articulos[2]);

div1.setAttribute('id','tabNavigator');
var div_tab = document.createElement('div');
div1.appendChild(div_tab);

for (i in enlacesH3){		
		var pestania=[];
		pestania[i] = 	document.createElement('a');
		pestania[i].setAttribute('href','#');
		pestania[i].setAttribute('id',i);
		pestania[i].onclick = cambiar;
		pestania[i].appendChild(enlacesH3[i]);
		div_tab.appendChild(pestania[i]);
	}
//var parrafo1 = document.createElement('p');
//div1.appendChild(parrafo1);
//parrafo1.appendChild(parrafosP[0]);
div1.appendChild(parrafosP[0]);

function cambiar (){
	var parrafo = document.getElementsByTagName('p')[0];
	div1.removeChild(parrafo);
		
	//parrafo1 = document.createElement('p');
	//div1.appendChild(parrafo1);
	
	var numero = parseInt(this.getAttribute('id'));
	//parrafo1.appendChild(parrafosP[numero]);
	div1.appendChild(parrafosP[numero]);
	
	return false;
	}

//SEGUNDO DIV #suscripcion

var formulario = document.getElementById('suscripcion');
var div2 = document.getElementsByTagName('div')[3];
var boton = document.getElementsByTagName('button')[0];
var mail = document.getElementsByTagName('input')[0];
boton.disabled = true;
mail.onblur = validar;
div2.parentNode.removeChild(div2);

for(i in newsletters){
	var chequeo = document.createElement('input');
	var label = document.createElement('label');	
	
	chequeo.type = 'checkbox';
	chequeo.onclick = validar;
	chequeo.name = newsletters[i];
	
	formulario.appendChild(label);
	label.appendChild(chequeo);
	
	var texto = document.createTextNode(newsletters[i]);
	label.appendChild(texto);
	}

function validar(){
		var opcion = document.getElementsByTagName('input');
		var cuantos=0;
				
		if((mail.value.indexOf(' ') < 0) && (mail.value.indexOf('@') >= 0) )
		{	
			boton.disabled = false;
			for(var i=1; i < opcion.length; i++){
				if(opcion[i].checked){ cuantos++; }
			}
			if(cuantos>1){ 
				boton.disabled = false;
			}
			else{ boton.disabled=true; }
		}
		else{ boton.disabled = true; }
}

//TERCER DIV #noticias

var div_img = document.getElementById('galeria');
var img = document.getElementsByTagName('img');

for (i in img){
	img[i].onclick = agregarModal;
}
function agregarModal() {
	var modal_div = document.createElement('div');
	modal_div.setAttribute('id','modal');
	modal_div.onclick = quitarModal;
	var imagen = document.createElement('img');
	imagen.setAttribute('src',this.getAttribute('src'));
	imagen.setAttribute('height','75%');
	imagen.style.marginLeft = '30%';

	document.body.appendChild(modal_div);

	modal_div.appendChild(imagen);
}
function quitarModal(){
	var modal_div = document.getElementById('modal');
	this.parentNode.removeChild(this);
}

//cambiando tipografia #noticias

var noticias = document.getElementById('noticia');
var barraHerramientas = document.getElementById('toolbar');
var lista = document.getElementsByTagName('select')[0];

for(i in fuentes){
	var tipografia = document.createElement('option');
	tipografia.innerHTML = fuentes[i];
	lista.appendChild(tipografia);
	tipografia.onclick=cambiar_texto;
}
var list_option = document.getElementsByTagName('option');
list_option[0].disabled = true;

var p1 = document.getElementsByTagName('p')[1];
var p2 = document.getElementsByTagName('p')[2];

function cambiar_texto() {
		var indice = (lista.selectedIndex)-1;
		
		p1.style.fontFamily = fuentes[indice];
		p2.style.fontFamily = fuentes[indice];
}
//cambiando colores #noticias

var botonColor = document.getElementById('color');
botonColor.onclick = cambiarColor;

function cambiarColor(){
	//var divColor = [];
	var colorContenedor = document.createElement('div');
	colorContenedor.setAttribute('id','colorContenedor');
	barraHerramientas.appendChild(colorContenedor);
	for(i in colores){
		var divColor = document.createElement('div');
		divColor.style.backgroundColor = colores[i];
		divColor.style.height = '15px';
		colorContenedor.appendChild(divColor);
		divColor.onclick = aplicarColor;
	}
	
	botonColor.onclick = function(){ 
												barraHerramientas.removeChild(colorContenedor); 
												botonColor.onclick = cambiarColor; 
											 }
}
function aplicarColor(){
	var colorActual = this.style.backgroundColor;
	noticias.style.color = colorActual;
	
	var colorContenedor = document.getElementById('colorContenedor');
	barraHerramientas.removeChild(colorContenedor);
	botonColor.onclick = cambiarColor;
}
 
//cambiando tamanio de fuente #noticias

var botonMas = document.getElementById('agrandarFuente');
var botonMenos = document.getElementById('achicarFuente');
botonMas.onclick = agrandar;
botonMenos.onclick = achicar;

function agrandar(){
	var tamanioActual = parseInt(p1.style.fontSize);
	if(!tamanioActual){ p1.style.fontSize = '12px'; }
	if(tamanioActual<=17){ p1.style.fontSize = parseInt(tamanioActual)+1+'px'; }
}
function achicar(){
	var tamanioActual = parseInt(p1.style.fontSize);
	if(!tamanioActual){ p1.style.fontSize = '12px'; }
	if(tamanioActual>=9){ p1.style.fontSize = parseInt(tamanioActual)-1+'px'; }
}
function c(){console.log('prueba')}