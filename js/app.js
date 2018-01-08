$(document).ready(function() {
  // funccion para inicializar el formulario materialize
	$('select').material_select();
	$(".button-collapse").sideNav();

	// splash
	$('#content').toggle();
  setTimeout(function() {
    $('#splash').delay().fadeOut(1000);
    $('#content').toggle();
	}, 500);
})

// Initialize Firebase
var config = {
	apiKey: "AIzaSyDMVNDGvDhZkg01PFE-C7M7n4ECLldmS_k",
	authDomain: "red-social-x-dd836.firebaseapp.com",
	databaseURL: "https://red-social-x-dd836.firebaseio.com",
	projectId: "red-social-x-dd836",
	storageBucket: "red-social-x-dd836.appspot.com",
	messagingSenderId: "1018099404290"
};
firebase.initializeApp(config);

// Obtener los elementos
var textEmail = document.getElementById('email');
var textPassword = document.getElementById('password');
var btnLogIn = document.getElementById('log-in');
var btnSignUp = document.getElementById('sign-up');
var btnLogOut = document.getElementById('log-out');

// Agregar un evento a login
btnLogIn.addEventListener('click', e => {
	// Obtener email y pass
	const email = textEmail.value;
	const pass = textPassword.value;
	const auth = firebase.auth();
	// Sign in
	const promise = auth.signInWithEmailAndPassword(email,pass);
	// catch detecta errores
	promise.catch(e => console.log(e.message));
});

// Agregar un evento a signup
btnSignUp.addEventListener('click', e => {
	// Obtener email y pass
	// TODO: verificar si es un email real
	const email = textEmail.value;
	const pass = textPassword.value;
	const auth = firebase.auth();
	// Sign in
	const promise = auth.createUserWithEmailAndPassword(email,pass);
	promise.catch(e => console.log(e.message));
});

//Add a realtime listener
btnLogIn.addEventListener("click", function(){
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      self.location="user-index.html";
    } else {
      console.log('no logueado');
    }
  });
});

btnLogOut.addEventListener("click", e => {
  firebase.auth().signOut();
});