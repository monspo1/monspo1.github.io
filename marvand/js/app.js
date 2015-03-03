

var statusdiv;
var log_area;

var appUser;
var runs;
var locations;
var activerun;

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
	//runs.setQueryParams({'filter': "actor='" + appUser.get('username') + "'", 'ql': 'order by created DESC'});

    /*
	runs.get(
		function(){
			// first empty out all the current element in the list
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
    */
 } // end of getRuns
 
 
 /* --------------------------------------------------------------------
 *	newRuns()
 --------------------------------------------------------------------*/
 function newruns(){ 
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
	 var nameForNewRun = appUser.get('username') + '-' + $("#runname").val();
	 //var nameForNewRun = appUser.get('username') + '-' + currentTime;
	 
	 // make the new element
	 var run = new Usergrid.Entity('run');
	 
	 // set its sub-properties 
	 run.set('name', nameForNewRun);
	 run.set('actor', appUser.get('username'));
	 
	 //console.log(nameForNewRun);
	 //console.log(run);
	 
	 // Add new run entity (saving the above entity to the database)
	 runs.addNewEntity(
	 	// the new entity
		run,
		
		function(){
			console.log("created new run: " + nameForNewRun);
			getruns();
		},	
		function(){
			alert('Oops! There was an error adding the new Run entity to DB');	
		}
	 );
 }
 
 
 /* --------------------------------------------------------------------
 *	newLocation()
 --------------------------------------------------------------------*/
 function newlocations(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(
			function(position){
				console.log("calling postLocation() in newlocations()");
				postLocation(position);		// call postLocation() here...
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
	
	var run = new Usergrid.Entity('location');
	run.set(actor);
	run.save(
		function(){
			console.log("lat: " + position.coords.latitude + ", lon: " + position.coords.longitude + ", acc: " + position.coords.accuracy);
			getlocations();
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
	positionTimer = navigator.geolocation.watchPosition(
		function(position){
			postLocation(position);	
		}
	); 
	
	statusdiv.innerHTML = " -- Auto -- ";
 }
 
 /* --------------------------------------------------------------------
 *	location()
 --------------------------------------------------------------------*/
 function stopAutoGetLocation(){
	console.log("stoping autoGetLocation()");
	navigator.geolocation.clearWatch(positionTimer); 
 }