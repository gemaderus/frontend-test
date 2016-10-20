var $ = require('jquery');

var btnList = $('.js-btn-list');
var btnGrid = $('.js-btn-grid');
var mainContent = $('.js-main-content');

// var actionItemList = btnList.parent();
// var actionItemGrid = btnGrid.parent();

// Variable que define el estado
var isList = false;

function handleClick (e) {
 // cambiamos el estado
 isList = !isList;

 //  Desactivamos el botón para evitar volver a hacer click en el mismo
 //  Si no es list, disabled
 //  Si no es list, añadimos la clase is-active al padre
 btnGrid.prop('disabled', !isList);
 btnGrid.parent().toggleClass('is-active', !isList);

 //  Si es list, disabled
 //  Si es list, añadimos la clase is-active al padre
 btnList.prop('disabled', isList);
 btnList.parent().toggleClass('is-active', isList);
 // Añadimos la clase is-list si es list.
 mainContent.toggleClass('is-list', isList);
}

// Ambos botones tienen responden al evento click con la misma función
btnList.on('click', handleClick);
btnGrid.on('click', handleClick);
