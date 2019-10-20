  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCMKmt2KfsVNzKCuF9CepSoUHvV9RGoaTQ",
    authDomain: "fiz-44f2d.firebaseapp.com",
    databaseURL: "https://fiz-44f2d.firebaseio.com",
    projectId: "fiz-44f2d",
    storageBucket: "fiz-44f2d.appspot.com",
    messagingSenderId: "318020846387",
    appId: "1:318020846387:web:d8febd0f9f708c7694f446",
    measurementId: "G-MLJVXBDPHP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  	
	  /*Esqueleto de la BD
	  var db = firebase.database().ref('home').set({
	    led1:true,
	    led2:true
	  });*/
	

	var db = firebase.database().ref('home');
	// último estado

	db.on('value', function(data){

    const {led1, led2, led3, led4} = data.val()
	   $("#checkLed1").prop('checked', led1);
     $("#checkLed2").prop('checked', led2);
     $("#checkLed3").prop('checked', led3);
	   $("#checkLed4").prop('checked', led4);
	});


	$("#checkLed1").click(function(){
	  var estado = $(this).is(':checked');
	  db.update({
	    led1:estado
	  });
	});

	$("#checkLed2").click(function(){
	  var estado = $(this).is(':checked');
	  db.update({
	    led2:estado
	  });
  });
  $("#checkLed3").click(function(){
	  var estado = $(this).is(':checked');
	  db.update({
	    led3:estado
	  });
	});

	$("#checkLed4").click(function(){
	  var estado = $(this).is(':checked');
	  db.update({
	    led4:estado
	  });
	});
