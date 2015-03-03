$(document).ready(function() {
			
	
	$('#run1').bind('click', function() {
		example1();
	});
	
	$('#run2').bind('click', function() {
		example2();
	});
	
	$('#run3').bind('click', function() {
		example3();
	});
	
	
	
});


function example1() {
	// http://jquery-csv.googlecode.com/git/examples/basic-usage.html
	//var input = $('#input1').val();
	var input = seerdata;
	var data = $.csv.toArray(input);
	var html = generateTable(data);
	$('#result1').empty();
	$('#result1').html(html);
}


function example2() {
	var input = $('#input2').val();
	var data = $.csv.toArrays(input);
	var html = generateTable(data);
	$('#result2').empty();
	$('#result2').html(html);
}

/*
function example3() {
	var input = $('#input3').val();
	var data = $.csv.toObjects(input);
	var html = generateTable(data);
	$('#result3').empty();
	$('#result3').html(html);
}
*/


function example3() {
	//http://api.jquery.com/jQuery.get/
	//http://www.cparker15.com/code/utilities/csv-to-json/
	//http://www.html5rocks.com/en/tutorials/file/filesystem/#toc-file-readingbyname
	//http://www.html5rocks.com/en/tutorials/file/filesystem/#toc-file-readingbyname
	
	// Do following script
	// open /Applications/Google\ Chrome.app --args --allow-file-access-from-files
	
	var parsedArray = [];
	/*
	var users = [
				{ first: "John", last: "Smith", age: 45, admin: false, locationId:2, gender: "m", lastLogin: new Date("1/3/2007 1:05 PM"), permissions: ["read"] },
				{ first: "Margret", last: "Lynn", age: 32, admin: true, locationId:1, gender: "f", lastLogin: new Date("12/11/2006 3:25 PM"), permissions: ["read", "write"] },
				{ first: "Ryan", last: "Aston", age: 22, admin: false, locationId:3, gender: "M", lastLogin: new Date("3/7/2008 1:31 AM"), permissions: ["read", "write"] },
				{ first: "Zoe", last: "Brown", age: 21, admin: true, locationId:2, gender: "f", lastLogin: new Date("6/5/2008 2:02 PM"), permissions: ["read"] },
				{ first: "Haley", last: "Baker", age: 14, admin: true, locationId:3, gender: "f", lastLogin: new Date("9/28/2007 1:01 AM"), permissions: ["read", "write", "delete"] },
				{ first: "Chase", last: "Herbert", age: 17, admin: false, locationId:7, gender: "m", lastLogin: new Date("6/22/2008 3:12 PM"), permissions: ["read"] },
				{ first: "Mary", last: "Godard", age: 65, admin: true, locationId:2, gender: "f", lastLogin: new Date("7/9/2008 1:52 AM"), permissions: ["read"] },
				{ first: "Oliva", last: "Sellick", age: 44, admin: true, locationId:6, gender: "f", lastLogin: new Date("3/5/2006 1:55 PM"), permissions: ["read"] },
				{ first: "Justin", last: "Stanwood", age: 21, admin: true, locationId:5, gender: "M", lastLogin: new Date("12/18/2008 7:31 AM"), permissions: ["READ"] },
				{ first: "Adam", last: "Smith", age: 45, admin: false, locationId:5, gender: "m", lastLogin: new Date("5/14/2008 8:28 AM"), permissions: ["read"] },
				{ first: "Audrey", last: "Worth", age: 32, admin: false, locationId:2, gender: "f", lastLogin: new Date("2/23/2008 1:24 PM"), permissions: ["read"] },
				{ first: "Owen", last: "Walter", age: 61, admin: false, locationId:1, gender: "m", lastLogin: new Date("3/14/2007 9:23 AM"), permissions: ["read"] },
				{ first: "Seth", last: "Morgan", age: 45, admin: false, locationId:2, gender: "m", lastLogin: new Date("7/2/2008 11:52 PM"), permissions: ["read", "write"] },
				{ first: "Carter", last: "Fry", age: 38, admin: false, locationId:3, gender: "m", lastLogin: new Date("2/7/2008 1:34 AM"), permissions: ["read", "write"] },
				{ first: "Justin", last: "Cromwell", age: 25, admin: true, locationId:4, gender: "M", lastLogin: new Date("1/17/2006 1:33 PM"), permissions: ["read"] },
				{ first: "Brian", last: "Martin", age: 32, admin: false, locationId:7, gender: "m", lastLogin: new Date("7/11/2005 1:32 AM"), permissions: ["read"] },
				{ first: "Ava", last: "Barton", age: 14, admin: false, locationId:7, gender: "f", lastLogin: new Date("9/6/2008 12:41 PM"), permissions: ["READ", "WRITE", "delete"] },
				{ first: "David", last: "Baum", age: 18, admin: false, locationId:2, gender: "m", lastLogin: new Date("11/3/2008 3:54 AM"), permissions: ["read"] },
				{ first: "Daniel", last: "Ashford", age: 56, admin: false, locationId:2, gender: "m", lastLogin: new Date("10/12/2008 2:23 AM"), permissions: ["read", "write", "delete"] },
				{ first: "Lilly", last: "Edwin", age: 73, admin: true, locationId:3, gender: "f", lastLogin: new Date("4/22/2007 1:41 AM"), permissions: ["read", "write"] },
				{ first: "Logan", last: "Lee", age: 23, admin: false, locationId:4, gender: "m", lastLogin: new Date("7/25/2006 7:43 PM"), permissions: ["read", "write"] },
				{ first: "James", last: "Haff", age: 24, admin: false, locationId:4, gender: "m", lastLogin: new Date("8/21/2008 8:21 AM"), permissions: ["read"] },
				{ first: "Zach", last: "Lane", age: 67, admin: false, locationId:1, gender: "m", lastLogin: new Date("3/11/2007 1:45 PM"), permissions: ["read"] },
				{ first: "Abby", last: "Bartin", age: 73, admin: false, locationId:7, gender: "F", lastLogin: new Date("5/12/2008 6:45 AM"), permissions: ["read"] },
				{ first: "Paige", last: "Darrow", age: 38, admin: true, locationId:6, gender: "f", lastLogin: new Date("9/17/2006 11:21 PM"), permissions: ["read"] },
				{ first: "Matt", last: "Raymond", age: 12, admin: false, locationId:7, gender: "m", lastLogin: new Date("11/14/2008 4:33 AM"), permissions: ["read", "write"] },
				{ first: "Daniel", last: "Oswald", age: 29, admin: true, locationId:4, gender: "m", lastLogin: new Date("4/4/2007 8:55 PM"), permissions: ["READ", "WRITE"] },
				{ first: "Abigail", last: "Weller", age: 40, admin: false, locationId:5, gender: "f", lastLogin: new Date("10/12/2008 2:12 AM"), permissions: ["READ", "WRITE", "DELETE"] },
				{ first: "Madison", last: "Smith", age: 21, admin: false, locationId:3, gender: "F", lastLogin: new Date("1/22/2005 9:34 AM"), permissions: ["read"] },
				{ first: "Emma", last: "Yager", age: 20, admin: true, locationId:1, gender: "f", lastLogin: new Date("10/4/2008 1:21 PM"), permissions: ["read", "write"] },
				{ first: "Luke", last: "Heaton", age: 16, admin: false, locationId:2, gender: "m", lastLogin: new Date("3/2/2008 10:56 PM"), permissions: ["read"] },
				{ first: "Chris", last: "Everard", age: 34, admin: false, locationId:4, gender: "m", lastLogin: new Date("6/23/2006 12:32 PM"), permissions: ["read"] }
			];
	*/
	
	var jqxhr = $.getJSON("data/seerdata2.json", function(json){
		//console.log("success" + json.value);			// sequence 2
		
		$.each(json, function(key, value){
			//console.log(key + ": " + value);	
			var ab = value;
			var ageRecode, sex, csSchema, raceRecode, seerRegistry, primarySite, histologicType, 	
					behaviorCode, eodSize, eodExtent, eodNodes, eodProstate, rxSummSite, 
					reasonNoCancerSurgery, radiation, seerCauseDeath, survivialTime, followUpType, codSite, 
					seerOtherCauseDeath, codToSiteRec, vitalStatus, diagnosisYear, grade;
			
			
			$.each(ab, function(key, value){
				
				if(key == "Age recode with <1 year olds"){ ageRecode = value; }
				if(key == "Sex"){ sex = value; }
				if(key == "CS Schema v0203"){ csSchema = value;	}
				if(key == "Race recode (White, Black, Other)"){ raceRecode = value;	}
				if(key == "SEER registry"){ seerRegistry = value; }
				if(key == "Primary Site"){ primarySite = value; }
				if(key == "Histologic Type ICD-O-3"){ histologicType = value; }
				if(key == "Behavior code ICD-O-3 (1973+)"){ behaviorCode = value; }
				if(key == "EOD 10 - size (1988-2003)"){ eodSize = value; }
				if(key == "EOD 10 - extent (1988-2003)"){ eodExtent = value; }
				if(key == "EOD 10 - nodes (1988-2003)"){ eodNodes = value; }
				if(key == "EOD 10 - Prostate path ext (1995-2003)"){ eodProstate = value; }
				if(key == "RX Summ--Surg Prim Site (1998+)"){ rxSummSite = value; }
				if(key == "Reason no cancer-directed surgery"){ reasonNoCancerSurgery = value; }
				if(key == "Radiation"){ radiation = value; }
				if(key == "SEER cause-specific death classification"){ seerCauseDeath = value; }
				if(key == "Survival time recode (total # of months)"){ survivialTime = parseInt(value); }
				if(key == "Type of follow-up expected"){ followUpType = value; }
				if(key == "COD to site recode"){ codSite = value; }
				if(key == "SEER other cause of death classification"){ seerOtherCauseDeath = value; }
				if(key == "COD to site rec KM"){ codToSiteRec = value; }
				if(key == "Vital status recode (study cutoff used)"){ vitalStatus = value; }
				if(key == "Year of diagnosis"){ diagnosisYear = parseInt(value); }
				if(key == "Grade"){ grade = value; }
				
			});
			
			parsedArray.push({
					ageRecode: ageRecode, sex: sex, csSchema: csSchema, seerRegistry: seerRegistry, 
					primarySite: primarySite, histologicType: histologicType, behaviorCode: behaviorCode,
					eodSize: eodSize, eodExtent: eodExtent, eodNodes: eodNodes, eodProstate: eodProstate, 
					rxSummSite: rxSummSite, reasonNoCancerSurgery: reasonNoCancerSurgery, radiation: radiation,
					seerCauseDeath: seerCauseDeath, survivialTime: survivialTime, followUpType: followUpType, 
					codSite: codSite, seerOtherCauseDeath: seerOtherCauseDeath, codToSiteRec: codToSiteRec, 
					vitalStatus: vitalStatus, diagnosisYear: diagnosisYear, grade: grade
			});
			
		});
		
		console.log( "second success" + parsedArray); 		// sequence 3
		
		var tmp1 = jlinq.from(parsedArray)
			.sort("survivialTime")
			.select();
		
		console.log("success" + tmp1);			// sequence 2
		//console.log("success" + users);			// sequence 2
	})
	.done(function() { 							// for success
		console.log( "second success" ); 		// sequence 3
	})
	.fail(function(error) { 
		console.log( "error"); 
	})
	.always(function() { 						// for completion, whether success or error (ALWAYS)
		console.log( "complete" ); 				// sequence 4
	});;
	
	//console.log("data loaded");	// sequence 1 // read first before getting JSON
	
	
	
}




// build HTML table data from an array (one or two dimensional)
function generateTable(data) {
	var html = '';
	
	if(typeof(data[0]) === 'undefined') {
		return null;
	}
	
	if(data[0].constructor === String) {
		html += '<tr>\r\n';
			for(var item in data) {
				html += '<td>' + data[item] + '</td>\r\n';
			}
		html += '</tr>\r\n';
	}
	
	if(data[0].constructor === Array) {
		for(var row in data) {
			html += '<tr>\r\n';
			
			for(var item in data[row]) {
				html += '<td>' + data[row][item] + '</td>\r\n';
			}
			html += '</tr>\r\n';
		}
	}
	
	if(data[0].constructor === Object) {
		for(var row in data) {
			html += '<tr>\r\n';
			
			for(var item in data[row]) {
				html += '<td>' + item + ':' + data[row][item] + '</td>\r\n';
			}
			html += '</tr>\r\n';
		}
	}
	
	return html;
}