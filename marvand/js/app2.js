

var statusdiv;
var log_area;

var appUser;
var runs;
var locations;
var activerun;
var myCurrentPosition;

$(document).ready(function() {
    try{
		// first, set the org and app path.
		Usergrid.ApiClient.init('cchhiinn', 'test');
	}
	catch(e){
		console.log('There was an error initializing');
	}
	
	Usergrid.ApiClient.getOrganizationName();
	
	log_area = document.getElementById("log");			// textarea
	statusdiv = document.getElementById("status");		// The value is 'MANUAL'
	
	$('#run-data li').live('click', function(){	// 'live' method to load dynamic file.html data into an existing element
		$('#run-data li').removeClass('active');
		$(this).addClass('active');
		activerun = $(this).html();	// activerun is the name of run data (such as Chin-Run1, Chin-Run3)..
		getlocations(); 
	});
	
	login();
});


/* --------------------------------------------------------------------
 *	Get location from server
 --------------------------------------------------------------------*/
function getlocations(){
	console.log("in getLocations()");
	console.log("activerun: " + activerun); 
	console.log({ 'ql': "select * where actor='" + appUser.get('username') + "' and run='" + activerun + "' order by created DESC limit 100"});
	
	locations.setQueryParams({ 'limit': 100, 'ql': "select * where actor='" + appUser.get('username') + "' and run='" + activerun + "' order by created DESC"});
	
	locations.get(
		function(){
			// first empty out all the current elements in the list
			$('#location-data').empty();
			
			while(locations.hasNextEntity()){
				// get a reference to the dog
				var location = locations.getNextEntity();
				
				// display the element in the list
				$('#location-data').append('<li> lat: ' + location.get('lat') + ', lng: ' + location.get('lon') + '</li>');
			}
		},
		function(error){
			console.log('error to get locations...' + error);	
		}
	);
}	// end of getLocatino()



/* --------------------------------------------------------------------
 *	Login to Usergrid
 --------------------------------------------------------------------*/
 function login(){
	var username = 'Chin';
	var password = 'chinchin';
	//var username = 'monspo2@gmail.com';
	//var password = 'gmlakda1234';
	//console.log("Logging");
	
	Usergrid.ApiClient.logInAppUser(username, password, 
		function(response, user){
			// login succeeded
			appUser = Usergrid.ApiClient.getLoggedInUser();
			console.log("Login successfully: " + appUser+ " | user: " + username);
			init();
		}, function(){
			console.log("login failed to Usergrid");	
		}
	);
 }
 
 
 /* --------------------------------------------------------------------
 *	logout()
 --------------------------------------------------------------------*/
 function logout(){
	Usergrid.ApiClient.logoutAppUser();
	log("Log out"); 
 }	
 
 
 /* --------------------------------------------------------------------
 *	init()
 --------------------------------------------------------------------*/
 function init(){
	runs = new Usergrid.Collection('runs');
	locations = new Usergrid.Collection('locations');
		
	getruns();
	
 }
 
 
 /* --------------------------------------------------------------------
 *	GetRuns
 --------------------------------------------------------------------*/
 function getruns(){
	runs.setQueryParams({'filter': "actor='" + appUser.get('username') + "'", 'ql': 'order by created DESC', 'limit': 100 });
	//*
	runs.get(
		function(){
			// first empty out all the current element in the list
			console.log("in getruns()");
			$('#run-data').empty();
			
			while(runs.hasNextEntity()){
				// get a reference to the dog
				var run = runs.getNextEntity();
				
				// display the dog in the list
				$('#run-data').append('<li>' + run.get('name') + '</li>');	
			}
			
		},
		function(error){
			console.log('error in getting runs: ' + error);	
		}
 	);
	//*/
 } // end of getRuns
 
 
 /* --------------------------------------------------------------------
 *	newRuns()
 --------------------------------------------------------------------*/
 function newruns(){ 
	 console.log("clicking 'newruns()");
	 
	 var dt = new Date();				// Result: Thu Dec 06 2012 19:17:11 GMT-0500 (EST)
	 var year = dt.getFullYear();
	 var month = dt.getMonth() + 1;
	 var day = dt.getDate();
	 var hour = dt.getHours();
	 var minutes = dt.getMinutes();
	 var seconds = dt.getSeconds();
	 
	 if(month < 10) month = "0" + month;
	 if(day < 10) day = "0" + day;
	 if(hour < 10) day = "0" + hour;
	 if(minutes < 10) minutes = "0" + minutes;
	 if(seconds < 10) seconds = "0" + seconds;
	 	
	 //console.log("current time: " + year + "-"+ month + "" + day + "-" + hour + ":" + minutes + ":" + seconds + " | dt: " + dt);
	 var currentTime = year + "-"+ month + "" + day + "-" + hour + ":" + minutes + ":" + seconds;
	 
	 //var name = appUser.get('username') + '-' + $("#runname").val();
	 //var nameForNewRun = appUser.get('username') + '-' + $("#runname").val();
	 var nameForNewRun = appUser.get('username') + '-' + currentTime;
	 //var name = appUser.get('username') + '-' + currentTime;
	 
	 // make the new element
	 var run = new Usergrid.Entity('run');
	 
	 // set its sub-properties 
	 //run.set('name', name);
	 run.set('name', nameForNewRun);
	 run.set('actor', appUser.get('username'));
	 
	 console.log(nameForNewRun);
	 //console.log(run);
	 
	 // Add new run entity (saving the entity to the database)
	 runs.addNewEntity(
	 	// the new entity
		run,
		
		function(){
			console.log("CREATED new run: " + nameForNewRun + run);
			console.log(run);

			getruns();
			//$('#run-data').empty();
		},	
		function(error){
			alert('Oops! There was an error adding the new Run entity to DB: ' + error);	
		}
	 );
	 
     activerun = nameForNewRun;
     
	 startAutoGetLocation()
 }
 
 
 /* --------------------------------------------------------------------
 *	newLocation()
 --------------------------------------------------------------------*/
 function newlocations(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(
			function(position){
				console.log("calling postLocation() in newlocations()");
				
				postLocation(position);		// actual function to get locations...
			}, 
			function(error){
				console.log("Something went wrong to get current geolocation: " + error);
			},
			{
				timeout: (5 * 100),	// 5 sec
				maximumAge: (1000 * 60 * 15),
				enableHighAccuracy: true
			}
		);
	} else{
		console.log("Geolocation is NOT supported by this browser.");
	}	// end of if-else
 }
 
 
  /* --------------------------------------------------------------------
 *	postLocation()
 --------------------------------------------------------------------*/
 function postLocation(position){
	if(!Usergrid.ApiClient.isLoggedInAppUser()){
		console.log("You haven't log in yet");
		return false;
	} // end of if
	
	if(activerun){		
		// activerun is the name of run data (such as Chin-Run1, Chin-Run3)..
		console.log("You have to select run first");
	}
	
	
	appUser = Usergrid.ApiClient.getLoggedInUser();
	
	var now = new Date();
	var content = "Post at: " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
	var actor = {
		"actor": appUser.get('username'),
		"run": activerun,
		"lat": position.coords.latitude,
		"lon": position.coords.longitude,
		"posted": content	
	};
	
	var location = new Usergrid.Entity('location');
	location.set(actor);
    console.log("location: " + location);
    
	location.save(
		function(){
			console.log("lat: " + position.coords.latitude + ", lon: " + position.coords.longitude + ", acc: " + position.coords.accuracy);
			getlocations();	// Why getlocations???
		},
		function(){
			console.log('Position posted');	
		}
	);
	 
	return true;
}
 
 /* --------------------------------------------------------------------
 *	startAutoGetLocaton()
 --------------------------------------------------------------------*/
 function startAutoGetLocation(){
	myCurrentPosition = navigator.geolocation.watchPosition(
		function(position){
			postLocation(position);	
		}
		/*, 
		funcion(error){
			console.log("error get auto locations")	
		},	
		{
			timeout: (5 * 100),	// 5 sec
			maximumAge: (1000 * 60 * 15),
			enableHighAccuracy: true
		}
		*/
	); 
	
	//statusdiv.innerHTML = " -- Auto -- ";
 }
 
 /* --------------------------------------------------------------------
 *	location()
 --------------------------------------------------------------------*/
 function stopAutoGetLocation(){
	console.log("stoping autoGetLocation()");
	navigator.geolocation.clearWatch(myCurrentPosition); 
 }