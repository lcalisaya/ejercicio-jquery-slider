$(document).ready(function(){
//Variables a utilizar:
//Para guardar los elementos <li>, los elementos <img> y la cantidad de imágenes que hay
//Para especificar qué número de imagen hay que mostrar
var $lis = $('li'),
      $imagenes = $lis.find('img'),
      cantidad = $imagenes.length,
      activo = 0;
//Se ocultan todos los <li> con todos los elementos que tienen incluídos
$lis.hide();

//Cada src de <img> se lo coloca como background image de cada <li>
$imagenes.each(function(index, imagen){
  $lis.eq(index).css( {
    'background-image': "url(" + $(imagen).attr('src') + ")",
    'background-position': 'center center',
    'background-size': 'contain',
    'position': 'absolute',
  })

//Se borra el elemento <img>
$(imagen).remove();
})

//Se muestra una imagen
$lis.eq(activo).fadeIn();

//Al hacer click en la flecha de la derecha se muestra una nueva imagen
$('#derecha').click(function(evt){
  evt.preventDefault();
  activo +=1;
  if (activo > cantidad -1) {
    activo = 0;
  }
  mostrarImagen();
});

//All hacer click en la flecha de la izquierda se muestra una nueva imagen
$('#izquierda').click(function(evt){
  evt.preventDefault();
  activo -=1;
  if(activo<0) {
    activo = cantidad - 1;
  }
  mostrarImagen();
})

//Función declarativa que muestra 1 imagen
function mostrarImagen(){
  $lis.hide().eq(activo).fadeIn();
}
});
