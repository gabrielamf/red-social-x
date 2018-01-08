$(document).ready(function() {
  // funccion para inicializar el formulario materialize
	$('select').material_select();
	$(".button-collapse").sideNav();

	// splash
	$('#content').toggle();
  setTimeout(function() {
    $('#splash').delay().fadeOut(1000);
    $('#content').toggle();
  }, 5000);
})