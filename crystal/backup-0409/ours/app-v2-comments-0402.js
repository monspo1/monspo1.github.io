/** ------------------------------------------------------------------------------------
 * Developed by Sung Pil Moon 
 * Any technical qeustion, send me to monspo1@gmail.com
 * Main project operated by collaboration between the MITRE research corporation 
 * 		& Grappa Lab, Indiana University, Indianapolis.
 * Data source: SEER data 
 * Main programming languages & libraries: javascript, Bootstrap, jQuery, highchart, ...
 * ------------------------------------------------------------------------------------ */
var parsedArray = [];
var pArray = [];
var pArrayForDigStage1 = [];
var pArrayForDigStage2 = [];
var pArrayForDigStage3 = [];
var pArrayForDigStage4 = [];
var preParsedArray = [];
var ageRangeMinValue;
var ageRangeMaxValue;
//var selectPickerValueForCondition;
//var selectPickerValueForEthnicity;
//localStorage.pArray = [];

var chart;

var filteredForArrForChemo = [];
var filteredForArrForRadiation = [];
var	filteredForArrForHormonal = [];
var	filteredForArrForSurgery = [];
var	filteredForArrForChemoRad = [];
var	filteredForArrForSurgRad = [];
var	filteredForArrForNoTreatment = [];

var medianForChemo;
var	medianForRadiation;
var	medianForHormonal;
var	medianForSurgery;
var	medianForChemoRad;
var	medianForSurgRad;
var	medianForNoTreatment;
var isModalEditing = false;


/** -------------------------------------------------------------------------------------------- 
 * function GetReady()
 --------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	
	$('.selectpicker').selectpicker();
	$('#alertForPatientInfo').hide();
	/*
	$('#gotoDSBtn').bind('click', function(){
		console.log("DS button clicked");	
		//console.log("seer data: " + seerdata);
		
		for(i=0;i<seerdata.length;i++){
			//var innerArray = [];
			var obj1 = seerdata[i];
			
			//console.log(obj1);
			//console.log(obj1['Age recode with <1 year olds']);
			var ageRecode, sex, csSchema, raceRecode, seerRegistry, primarySite, histologicType, 	
				behaviorCode, eodSize, eodExtent, eodNodes, eodProstate, rxSummSite, 
				reasonNoCancerSurgery, radiation, seerCauseDeath, survivialTime, followUpType, codSite, 
				seerOtherCauseDeath, codToSiteRec, vitalStatus, diagnosisYear, grade;
			
			
			if(obj1['Age recode with <1 year olds']){ ageRecode = obj1['Age recode with <1 year olds']; }
			if(obj1['Sex']){ sex = obj1['Sex']; }
			if(obj1['CS Schema v0203']){ csSchema = obj1['CS Schema v0203']; }
			if(obj1['Race recode (White, Black, Other)']){ raceRecode = obj1['Race recode (White, Black, Other)']; }
			if(obj1['SEER registry']){ seerRegistry = obj1['SEER registry']; }
			if(obj1['Primary Site']){ primarySite = obj1['Primary Site']; }
			if(obj1['Histologic Type ICD-O-3']){ histologicType = obj1['Histologic Type ICD-O-3']; }
			if(obj1['Behavior code ICD-O-3 (1973+)']){ behaviorCode = obj1['Behavior code ICD-O-3 (1973+)']; }
			if(obj1['EOD 10 - size (1988-2003)']){ eodSize = obj1['EOD 10 - size (1988-2003)']; }
			if(obj1['EOD 10 - extent (1988-2003)']){ eodExtent = obj1['EOD 10 - extent (1988-2003)']; }
			if(obj1['EOD 10 - nodes (1988-2003)']){ eodNodes = obj1['EOD 10 - nodes (1988-2003)']; }
			if(obj1['EOD 10 - Prostate path ext (1995-2003)']){ eodProstate = obj1['EOD 10 - Prostate path ext (1995-2003)']; }
			if(obj1['RX Summ--Surg Prim Site (1998+)']){ rxSummSite = obj1['RX Summ--Surg Prim Site (1998+)']; }
			if(obj1['Reason no cancer-directed surgery']){ reasonNoCancerSurgery = obj1['Reason no cancer-directed surgery']; }
			if(obj1['Radiation']){ radiation = obj1['Radiation']; }
			if(obj1['SEER cause-specific death classification']){ seerCauseDeath = obj1['SEER cause-specific death classification']; }
			if(obj1['Survival time recode (total # of months)']){ survivialTime = parseInt(obj1['Survival time recode (total # of months)']); }
			if(obj1['Type of follow-up expected']){ followUpType = obj1['Type of follow-up expected']; }
			if(obj1['COD to site recode']){ codSite = obj1['COD to site recode']; }
			if(obj1['SEER other cause of death classification']){ seerOtherCauseDeath = obj1['SEER other cause of death classification']; }
			if(obj1['COD to site rec KM']){ codToSiteRec = obj1['COD to site rec KM']; }
			if(obj1['Vital status recode (study cutoff used)']){ vitalStatus = obj1['Vital status recode (study cutoff used)']; }
			if(obj1['Year of diagnosis']){ diagnosisYear = parseInt(obj1['Year of diagnosis']); }
			if(obj1['Grade']){ grade = obj1['Grade']; }
			
			parsedArray.push({
					ageRecode: ageRecode, sex: sex, csSchema: csSchema, seerRegistry: seerRegistry, 
					primarySite: primarySite, histologicType: histologicType, behaviorCode: behaviorCode,
					eodSize: eodSize, eodExtent: eodExtent, eodNodes: eodNodes, eodProstate: eodProstate, 
					rxSummSite: rxSummSite, reasonNoCancerSurgery: reasonNoCancerSurgery, radiation: radiation,
					seerCauseDeath: seerCauseDeath, survivialTime: survivialTime, followUpType: followUpType, 
					codSite: codSite, seerOtherCauseDeath: seerOtherCauseDeath, codToSiteRec: codToSiteRec, 
					vitalStatus: vitalStatus, diagnosisYear: diagnosisYear, grade: grade
			});
		}
		//example3();
		console.log( "parsedArray success" + parsedArray); 		// sequence 3
		
		var tmp1 = jlinq.from(parsedArray)
			.sort("survivialTime")
			.select();
		
		console.log("success" + tmp1);			// sequence 2
	});
	*/
	/*
	$('#run3').bind('click', function() {
		example3();
	});
	*/
	
	/*
	$('#updateChartBtn').click(function() {
		//http://jsfiddle.net/gh/get/jquery/1.7.2/highslide-software/highcharts.com/tree/master/samples/highcharts/members/series-update/
		// http://jsfiddle.net/gh/get/jquery/1.7.2/highslide-software/highcharts.com/tree/master/samples/highcharts/members/series-setdata/
		//http://api.highcharts.com/highcharts#Series.setData()
		
		//chart = $('#chart-container').highcharts();
		
		var tempStringForReturningArrayForInlinCheckboxes = "";
		
		if($('#inlineCheckbox1')){
			console.log("inlineCheckbox1 cheched: " + $('#inlineCheckbox1')[0].checked);	
			
			//parsedArray = parsedArray.filter(function(el){ 
			//	return el.dxGrade == "" || return el.dxGrade == "0";
			//});
			
		}
		
		if($('#inlineCheckbox2')){
			console.log("inlineCheckbox2 cheched: " + $('#inlineCheckbox2')[0].checked);	
			if($('#inlineCheckbox2')[0].checked)
				tempStringForReturningArrayForInlinCheckboxes = tempStringForReturningArrayForInlinCheckboxes.concat("el.dxGrade == 'Grade I'");
			
		}
		
		if($('#inlineCheckbox3')){
			console.log("inlineCheckbox3 cheched: " + $('#inlineCheckbox3')[0].checked);	
			if($('#inlineCheckbox3')[0].checked){
				if(tempStringForReturningArrayForInlinCheckboxes == ""){
					tempStringForReturningArrayForInlinCheckboxes = tempStringForReturningArrayForInlinCheckboxes.concat(" el.dxGrade == 'Grade II'");
				} else{
					tempStringForReturningArrayForInlinCheckboxes = tempStringForReturningArrayForInlinCheckboxes.concat(" || el.dxGrade == 'Grade II'");	
				}
				
			}
				
		}
		
		if($('#inlineCheckbox4')){
			console.log("inlineCheckbox4 cheched: " + $('#inlineCheckbox4')[0].checked);
			if($('#inlineCheckbox4')[0].checked)
				if(tempStringForReturningArrayForInlinCheckboxes == ""){
					tempStringForReturningArrayForInlinCheckboxes = tempStringForReturningArrayForInlinCheckboxes.concat(" el.dxGrade == 'Grade III'");
				} else{
					tempStringForReturningArrayForInlinCheckboxes = tempStringForReturningArrayForInlinCheckboxes.concat(" || el.dxGrade == 'Grade III'");	
				}

		}
		
		if($('#inlineCheckbox5')){
			console.log("inlineCheckbox5 cheched: " + $('#inlineCheckbox5')[0].checked);	
			if($('#inlineCheckbox5')[0].checked)
				if(tempStringForReturningArrayForInlinCheckboxes == ""){
					tempStringForReturningArrayForInlinCheckboxes = tempStringForReturningArrayForInlinCheckboxes.concat(" el.dxGrade == 'Grade IV'");
				} else{
					tempStringForReturningArrayForInlinCheckboxes = tempStringForReturningArrayForInlinCheckboxes.concat(" || el.dxGrade == 'Grade IV'");	
				}
		}
		
		console.log("tempStringForReturningArrayForInlinCheckboxes: " + tempStringForReturningArrayForInlinCheckboxes);
					
		console.log("slider 1 value: " + $( "#slider-range" ).slider( "values", 0 ) + " | slider 2 value: " + $( "#slider-range" ).slider( "values", 1 ));
		
		parsedArray = parsedArray.filter(function(el){
			return tempStringForReturningArrayForInlinCheckboxes;
		});
										 
		console.log(parsedArray);
		
		//parsedArray.splice(0, parsedArray.length);
		parsedArray = parsedArray.filter(function(el){ 
			//return el.race == $('#selectPickerForEthnicityInModal').val()	
				
			// USE jLinq	
			// & also
			// http://stackoverflow.com/questions/2722159/javascript-how-to-filter-object-array-based-on-attributes
			return el.ageRecode >= parseInt($( "#slider-range" ).slider( "values", 0 )) 
				&& el.ageRecode <= parseInt($( "#slider-range" ).slider( "values", 1 ))
			;
		});
		
		drawChartWithSeriesData.apply(this, parsedArray);
		
		
		//chart.series[0].setData([  ... ]);
		//chart.series[0].setData([129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4] );
		
		
		//http://api.highcharts.com/highcharts#chart.events.redraw
		//http://jsfiddle.net/gh/get/jquery/1.7.2/highslide-software/highcharts.com/tree/master/samples/highcharts/chart/events-redraw/
		//http://jsfiddle.net/gh/get/jquery/1.7.2/highslide-software/highcharts.com/tree/master/samples/highcharts/plotoptions/series-point-events-update/
		//http://stackoverflow.com/questions/10799943/highcharts-refresh-csv-data-is-duplicating-not-refreshing
		//http://jsfiddle.net/gh/get/jquery/1.7.2/highslide-software/highcharts.com/tree/master/samples/highcharts/members/chart-destroy/
		//http://jsfiddle.net/gh/get/jquery/1.7.2/highslide-software/highcharts.com/tree/master/samples/highcharts/members/series-hide/
		
		// Renderer drawing a line
		//http://api.highcharts.com/highcharts#Renderer
		// http://stackoverflow.com/questions/7727810/drawing-custom-lines-on-highchart-graph
		//http://jsfiddle.net/gh/get/jquery/1.7.2/highslide-software/highcharts.com/tree/master/samples/highcharts/members/renderer-path-on-chart/
		
    });
	//*/
	console.log("0. parsedArray.length: " + parsedArray.length);
	
	$('#checkboxForMedian').click(function() {
		$('.btn-group input[name^="colors"]').each(function(){
			// toggle checkbox
			$(this).prop('checked',!$(this).prop('checked'));
			// toggle class
			$(this).parents('label').toggleClass('active');
		});
	});
	
	/*
	.click(function() {
		$('.btn-group input[name^="colors"]').each(function(){
			// toggle checkbox
			$(this).prop('checked',!$(this).prop('checked'));
			// toggle class
			$(this).parents('label').toggleClass('active');
		});
	});
	*/
	
	$('#modalForPatientInfo').click(function() {
		isModalEditing = true;
	});
									
	
});




/** -------------------------------------------------------------------------------------------- 
 * function GoToDSBtnClick()
 --------------------------------------------------------------------------------------------*/
function gotoDSBtnClick(){
	/*
	console.log("DS button clicked");	
	//console.log("seer data: " + seerdata);
	
	for(i=0;i<seerdata.length;i++){
		//var innerArray = [];
		var obj1 = seerdata[i];
		
		//console.log(obj1);
		//console.log(obj1['Age recode with <1 year olds']);
		var ageRecode, sex, csSchema, raceRecode, seerRegistry, primarySite, histologicType, 	
			behaviorCode, eodSize, eodExtent, eodNodes, eodProstate, rxSummSite, 
			reasonNoCancerSurgery, radiation, seerCauseDeath, survivialTime, followUpType, codSite, 
			seerOtherCauseDeath, codToSiteRec, vitalStatus, diagnosisYear, grade;
		
		
		if(obj1['Age recode with <1 year olds']){ ageRecode = obj1['Age recode with <1 year olds']; }
		if(obj1['Sex']){ sex = obj1['Sex']; }
		if(obj1['CS Schema v0203']){ csSchema = obj1['CS Schema v0203']; }
		if(obj1['Race recode (White, Black, Other)']){ raceRecode = obj1['Race recode (White, Black, Other)']; }
		if(obj1['SEER registry']){ seerRegistry = obj1['SEER registry']; }
		if(obj1['Primary Site']){ primarySite = obj1['Primary Site']; }
		if(obj1['Histologic Type ICD-O-3']){ histologicType = obj1['Histologic Type ICD-O-3']; }
		if(obj1['Behavior code ICD-O-3 (1973+)']){ behaviorCode = obj1['Behavior code ICD-O-3 (1973+)']; }
		if(obj1['EOD 10 - size (1988-2003)']){ eodSize = obj1['EOD 10 - size (1988-2003)']; }
		if(obj1['EOD 10 - extent (1988-2003)']){ eodExtent = obj1['EOD 10 - extent (1988-2003)']; }
		if(obj1['EOD 10 - nodes (1988-2003)']){ eodNodes = obj1['EOD 10 - nodes (1988-2003)']; }
		if(obj1['EOD 10 - Prostate path ext (1995-2003)']){ eodProstate = obj1['EOD 10 - Prostate path ext (1995-2003)']; }
		if(obj1['RX Summ--Surg Prim Site (1998+)']){ rxSummSite = obj1['RX Summ--Surg Prim Site (1998+)']; }
		if(obj1['Reason no cancer-directed surgery']){ reasonNoCancerSurgery = obj1['Reason no cancer-directed surgery']; }
		if(obj1['Radiation']){ radiation = obj1['Radiation']; }
		if(obj1['SEER cause-specific death classification']){ seerCauseDeath = obj1['SEER cause-specific death classification']; }
		if(obj1['Survival time recode (total # of months)']){ survivialTime = parseInt(obj1['Survival time recode (total # of months)']); }
		if(obj1['Type of follow-up expected']){ followUpType = obj1['Type of follow-up expected']; }
		if(obj1['COD to site recode']){ codSite = obj1['COD to site recode']; }
		if(obj1['SEER other cause of death classification']){ seerOtherCauseDeath = obj1['SEER other cause of death classification']; }
		if(obj1['COD to site rec KM']){ codToSiteRec = obj1['COD to site rec KM']; }
		if(obj1['Vital status recode (study cutoff used)']){ vitalStatus = obj1['Vital status recode (study cutoff used)']; }
		if(obj1['Year of diagnosis']){ diagnosisYear = parseInt(obj1['Year of diagnosis']); }
		if(obj1['Grade']){ grade = obj1['Grade']; }
		
		parsedArray.push({
				ageRecode: ageRecode, sex: sex, csSchema: csSchema, seerRegistry: seerRegistry, 
				primarySite: primarySite, histologicType: histologicType, behaviorCode: behaviorCode,
				eodSize: eodSize, eodExtent: eodExtent, eodNodes: eodNodes, eodProstate: eodProstate, 
				rxSummSite: rxSummSite, reasonNoCancerSurgery: reasonNoCancerSurgery, radiation: radiation,
				seerCauseDeath: seerCauseDeath, survivialTime: survivialTime, followUpType: followUpType, 
				codSite: codSite, seerOtherCauseDeath: seerOtherCauseDeath, codToSiteRec: codToSiteRec, 
				vitalStatus: vitalStatus, diagnosisYear: diagnosisYear, grade: grade
		});
		
		globalParsedArray.push({
			ageRecode: ageRecode, sex: sex, csSchema: csSchema, seerRegistry: seerRegistry, 
			primarySite: primarySite, histologicType: histologicType, behaviorCode: behaviorCode,
			eodSize: eodSize, eodExtent: eodExtent, eodNodes: eodNodes, eodProstate: eodProstate, 
			rxSummSite: rxSummSite, reasonNoCancerSurgery: reasonNoCancerSurgery, radiation: radiation,
			seerCauseDeath: seerCauseDeath, survivialTime: survivialTime, followUpType: followUpType, 
			codSite: codSite, seerOtherCauseDeath: seerOtherCauseDeath, codToSiteRec: codToSiteRec, 
			vitalStatus: vitalStatus, diagnosisYear: diagnosisYear, grade: grade
		});
	}
	//example3();
	console.log( "parsedArray success" + parsedArray); 		// sequence 3
	
	var tmp1 = jlinq.from(parsedArray)
		.sort("survivialTime")
		.select();
	
	console.log("success" + tmp1);			// sequence 2
	console.log("parsedArray success: " + parsedArray);
	*/
	
	//selectPickerValueForCondition = $('#selectPickerForCondition').selectpicker('val');	
	//selectPickerValueForEthnicity = $('#selectPickerForEthnicity').selectpicker('val');	
	/*
	console.log("Picker for selectPickerForCondition: " + $("select[id=selectPickerForCondition]").val());
	console.log("Picker for selectPickerForEthnicity: " + $("select[id=selectPickerForEthnicity]").text());	// show entire texts
	console.log("Picker for selectPickerForEthnicity: " + $("select[id=selectPickerForEthnicity]").val());	// show selected value
	*/
	
	if(typeof(Storage)!== "undefined"){
		localStorage.selectPickerValueForCondition = $('#selectPickerForCondition').selectpicker('val');
		localStorage.selectPickerValueForEthnicity = $('#selectPickerForEthnicity').selectpicker('val');
		localStorage.ageOfThePatient = $('#inputForPatientAge').val();
	} else{
		alert("Please use a browser which supports HTML5 (Internet Explorer 8+, Firefox, Opera, Chrome, and Safari)");	
	}
	
	//$('#alertForPatientInfo').is(':visible');;
	
	if( (!$('#inputForPatientAge').val()) || ($('#inputForPatientAge').val() == "undefined")){
		    //$('#alertForPatientInfo').attr('hidden', false);
			//$('#alertForPatientInfo').is(':visible');;
			$('#alertForPatientInfo').show();
			$('#alertForPatientInfo').html("<b>NOTE...</b> Please input the patient's age");
	} else{
		window.location.href = "decisionspace.html";   
	}
//
}




/** -------------------------------------------------------------------------------------------- 
 * function GoToDSBtnClick()
 --------------------------------------------------------------------------------------------*/
function updateVisButnClick(){
			//http://jsfiddle.net/gh/get/jquery/1.7.2/highslide-software/highcharts.com/tree/master/samples/highcharts/members/series-update/
		// http://jsfiddle.net/gh/get/jquery/1.7.2/highslide-software/highcharts.com/tree/master/samples/highcharts/members/series-setdata/
		//http://api.highcharts.com/highcharts#Series.setData()
		
		//chart = $('#chart-container').highcharts();
		
		var tempStringForReturningArrayForInlinCheckboxes = "";
		
		if($('#inlineCheckbox1')){
			console.log("inlineCheckbox1 cheched: " + $('#inlineCheckbox1')[0].checked);	
			
			//parsedArray = parsedArray.filter(function(el){ 
			//	return el.dxGrade == "" || return el.dxGrade == "0";
			//});
			
		}
		
		/*	
		if($('#inlineCheckbox2')){
			console.log("inlineCheckbox2 cheched: " + $('#inlineCheckbox2')[0].checked);	
			if($('#inlineCheckbox2')[0].checked)
				tempStringForReturningArrayForInlinCheckboxes = tempStringForReturningArrayForInlinCheckboxes.concat("el.dxGrade == 'Grade I'");
			
		}
		
		if($('#inlineCheckbox3')){
			console.log("inlineCheckbox3 cheched: " + $('#inlineCheckbox3')[0].checked);	
			if($('#inlineCheckbox3')[0].checked){
				if(tempStringForReturningArrayForInlinCheckboxes == ""){
					tempStringForReturningArrayForInlinCheckboxes = tempStringForReturningArrayForInlinCheckboxes.concat(" el.dxGrade == 'Grade II'");
				} else{
					tempStringForReturningArrayForInlinCheckboxes = tempStringForReturningArrayForInlinCheckboxes.concat(" && el.dxGrade == 'Grade II'");	
				}
				
			}
				
		}
		
		if($('#inlineCheckbox4')){
			console.log("inlineCheckbox4 cheched: " + $('#inlineCheckbox4')[0].checked);
			if($('#inlineCheckbox4')[0].checked)
				if(tempStringForReturningArrayForInlinCheckboxes == ""){
					tempStringForReturningArrayForInlinCheckboxes = tempStringForReturningArrayForInlinCheckboxes.concat(" el.dxGrade == 'Grade III'");
				} else{
					tempStringForReturningArrayForInlinCheckboxes = tempStringForReturningArrayForInlinCheckboxes.concat(" && el.dxGrade == 'Grade III'");	
				}

		}
		
		if($('#inlineCheckbox5')){
			console.log("inlineCheckbox5 cheched: " + $('#inlineCheckbox5')[0].checked);	
			if($('#inlineCheckbox5')[0].checked)
				if(tempStringForReturningArrayForInlinCheckboxes == ""){
					tempStringForReturningArrayForInlinCheckboxes = tempStringForReturningArrayForInlinCheckboxes.concat(" el.dxGrade == 'Grade IV'");
				} else{
					tempStringForReturningArrayForInlinCheckboxes = tempStringForReturningArrayForInlinCheckboxes.concat(" && el.dxGrade == 'Grade IV'");	
				}
		}
		
		console.log("tempStringForReturningArrayForInlinCheckboxes: " + tempStringForReturningArrayForInlinCheckboxes);
		*/			
		console.log("slider 1 value: " + $( "#slider-range" ).slider( "values", 0 ) + " | slider 2 value: " + $( "#slider-range" ).slider( "values", 1 ));
		
		console.log("2a. parsedArray.length: " + parsedArray.length);
		/*
		pArray = parsedArray.filter(function(el){
			
			if($('#inlineCheckbox2')){
				if($('#inlineCheckbox2')[0].checked)
					el.dxGrade == "Grade I";
			}
			
			return el;
			
		});
		//*/

		/*
		var a = [];
		
		if($('#inlineCheckbox2')){
			if($('#inlineCheckbox2')[0].checked)
				a = jlinq.from(parsedArray)
					.endsWith("dxGrade", "Grade I")
					//.or()
					//.starts("first", "b")
					.select();
			
		}
			
		console.log("al: " + a);
		*/
	
		/*
		if($('#inlineCheckbox3')){
			console.log("inlineCheckbox3 cheched: " + $('#inlineCheckbox3')[0].checked);	
			if($('#inlineCheckbox3')[0].checked){
				if(tempStringForReturningArrayForInlinCheckboxes == ""){
					tempStringForReturningArrayForInlinCheckboxes = tempStringForReturningArrayForInlinCheckboxes.concat(" el.dxGrade == 'Grade II'");
				} else{
					tempStringForReturningArrayForInlinCheckboxes = tempStringForReturningArrayForInlinCheckboxes.concat(" && el.dxGrade == 'Grade II'");	
				}
				
			}
				
		}
		
		if($('#inlineCheckbox4')){
			console.log("inlineCheckbox4 cheched: " + $('#inlineCheckbox4')[0].checked);
			if($('#inlineCheckbox4')[0].checked)
				if(tempStringForReturningArrayForInlinCheckboxes == ""){
					tempStringForReturningArrayForInlinCheckboxes = tempStringForReturningArrayForInlinCheckboxes.concat(" el.dxGrade == 'Grade III'");
				} else{
					tempStringForReturningArrayForInlinCheckboxes = tempStringForReturningArrayForInlinCheckboxes.concat(" && el.dxGrade == 'Grade III'");	
				}

		}
		
		if($('#inlineCheckbox5')){
			console.log("inlineCheckbox5 cheched: " + $('#inlineCheckbox5')[0].checked);	
			if($('#inlineCheckbox5')[0].checked)
				if(tempStringForReturningArrayForInlinCheckboxes == ""){
					tempStringForReturningArrayForInlinCheckboxes = tempStringForReturningArrayForInlinCheckboxes.concat(" el.dxGrade == 'Grade IV'");
				} else{
					tempStringForReturningArrayForInlinCheckboxes = tempStringForReturningArrayForInlinCheckboxes.concat(" && el.dxGrade == 'Grade IV'");	
				}
		}
		*/
		console.log("tempStringForReturningArrayForInlinCheckboxes: " + tempStringForReturningArrayForInlinCheckboxes);
	
	
		/*
		var a = [];
		a= parsedArray.filter(function(el){
		//pArray = parsedArray.filter(function(el){
			return tempStringForReturningArrayForInlinCheckboxes;
			console.log(a);
		});
		*/						 
		console.log("2b. parsedArray.length: " + pArray.length);
		//console.log("2b2. a: " + a.length);
		//parsedArray.splice(0, parsedArray.length);
		/*
		parsedArray = parsedArray.filter(function(el){ 
			//return el.race == $('#selectPickerForEthnicityInModal').val()	
				
			// USE jLinq	
			// & also
			// http://stackoverflow.com/questions/2722159/javascript-how-to-filter-object-array-based-on-attributes
			return el.ageRecode >= parseInt($( "#slider-range" ).slider( "values", 0 )) 
				&& el.ageRecode <= parseInt($( "#slider-range" ).slider( "values", 1 ))
			;
		});
		*/
		//console.log("parsedArray.length: " + parsedArray.length);
		//drawChartWithSeriesData.apply(this, pArray);
		drawChartWithSeriesData();
		
		
		//chart.series[0].setData([  ... ]);
		//chart.series[0].setData([129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4] );
		
		
		//http://api.highcharts.com/highcharts#chart.events.redraw
		//http://jsfiddle.net/gh/get/jquery/1.7.2/highslide-software/highcharts.com/tree/master/samples/highcharts/chart/events-redraw/
		//http://jsfiddle.net/gh/get/jquery/1.7.2/highslide-software/highcharts.com/tree/master/samples/highcharts/plotoptions/series-point-events-update/
		//http://stackoverflow.com/questions/10799943/highcharts-refresh-csv-data-is-duplicating-not-refreshing
		//http://jsfiddle.net/gh/get/jquery/1.7.2/highslide-software/highcharts.com/tree/master/samples/highcharts/members/chart-destroy/
		//http://jsfiddle.net/gh/get/jquery/1.7.2/highslide-software/highcharts.com/tree/master/samples/highcharts/members/series-hide/
		
		// Renderer drawing a line
		//http://api.highcharts.com/highcharts#Renderer
		// http://stackoverflow.com/questions/7727810/drawing-custom-lines-on-highchart-graph
		//http://jsfiddle.net/gh/get/jquery/1.7.2/highslide-software/highcharts.com/tree/master/samples/highcharts/members/renderer-path-on-chart/
		
    
}

/** -------------------------------------------------------------------------------------------- 
 * function onClick when modifyPatentInfoInModal()
 --------------------------------------------------------------------------------------------*/
function modifyPatientInfoInModal(){

	//selectPickerForCondition
	/*
	var tempDataArrForModal1 = [];
	var tempDataArrForModal2 = [];
	var tempDataArrForModal3 = [];
	var tempDataArrForModal4 = [];
	var tempDataArrForModal5 = [];
	var tempDataArrForModal6 = [];
	var tempDataArrForModal7 = [];
	*/
	
	
	$("#ageValueInDS").html('<b>Age:   </b> ' + $('#inputForPatientAgeInModal').val());
	$("#ethnicityValueInDS").html('<b>Ethnicity:   </b> ' + $('#selectPickerForEthnicityInModal').val());
	
	//parsedArray.splice(0, parsedArray.length);
	parsedArray = preParsedArray.filter(function(el){ 
		return el.race == $('#selectPickerForEthnicityInModal').val();	
	});
	//console.log("parsed" + parsedArray);
	
	drawChartWithSeriesData();
	/*
	filteredForArrForChemo.splice(0, filteredForArrForChemo.length);
	filteredForArrForRadiation.splice(0, filteredForArrForRadiation.length);
	filteredForArrForHormonal.splice(0, filteredForArrForHormonal.length);
	filteredForArrForSurgery.splice(0, filteredForArrForSurgery.length);
	filteredForArrForChemoRad.splice(0, filteredForArrForChemoRad.length);
	filteredForArrForSurgRad.splice(0, filteredForArrForSurgRad.length);
	filteredForArrForNoTreatment.splice(0, filteredForArrForNoTreatment.length);
	
	filteredForArrForChemo = parsedArray.filter(function(el){
		return el.treatmentOption == "Chemo";
	});
	
	filteredForArrForRadiation = parsedArray.filter(function(el){
		return el.treatmentOption == "Radiation";
	});
	
	filteredForArrForHormonal = parsedArray.filter(function(el){
		return el.treatmentOption == "Hormonal";
	});
	
	filteredForArrForSurgery = parsedArray.filter(function(el){
		return el.treatmentOption == "Surgery";
	});
	
	filteredForArrForChemoRad = parsedArray.filter(function(el){
		return el.treatmentOption == "Chemo+Rad";
	});
	
	filteredForArrForSurgRad = parsedArray.filter(function(el){
		return el.treatmentOption == "Surg+Rad";
	});
	
	filteredForArrForNoTreatment = parsedArray.filter(function(el){
		return el.treatmentOption == "No-Treatment";
	});
	
	
	//chart.series[0].setData(filteredForArrForChemo);
	//chart.series[1].setData(filteredForArrForRadiation);
	//chart.series[2].setData(filteredForArrForHormonal);
	//chart.series[3].setData(filteredForArrForSurgery);
	//chart.series[4].setData(filteredForArrForChemoRad);
	//chart.series[5].setData(filteredForArrForSurgRad);
	//chart.series[6].setData(filteredForArrForNoTreatment);
	
	
	chart = $('#chart-container').highcharts();
	
	
	// For filteredForArrForChemo
	for (i = 0; i <= filteredForArrForChemo.length - 1; i++) {
		tempDataArrForModal.push({
			x: 0 + (Math.random() * 50 + 30)/100 - 0.5,
			y: filteredForArrForChemo[i].survivalMonths,
			anemia: filteredForArrForChemo[i].anemia, 
			bowelDys: filteredForArrForChemo[i].bowelDys, 
			chemo: filteredForArrForChemo[i].chemo, 
			chemoRad: filteredForArrForChemo[i].chemoRad, 
			decLibido: filteredForArrForChemo[i].decLibido,
			disease: filteredForArrForChemo[i].disease, 
			dxAge: filteredForArrForChemo[i].dxAge, 
			dxGrade: filteredForArrForChemo[i].dxGrade, 
			dxYear: filteredForArrForChemo[i].dxYear, 
			erectileDys: filteredForArrForChemo[i].erectileDys,
			fatigue: filteredForArrForChemo[i].fatigue, 
			fatigue: filteredForArrForChemo[i].fatigue,	
			hormonal: filteredForArrForChemo[i].hormonal, 
			hotFlash: filteredForArrForChemo[i].hotFlash, 
			isAlive: filteredForArrForChemo[i].isAlive, 
			nV: filteredForArrForChemo[i].nV, 
			noTreatment: filteredForArrForChemo[i].noTreatment, 
			race: filteredForArrForChemo[i].race, 
			radiation: filteredForArrForChemo[i].radiation, 
			surgRad: filteredForArrForChemo[i].surgRad, 
			surgery: filteredForArrForChemo[i].surgery, 
			treatmentOption: filteredForArrForChemo[i].treatmentOption, 	
			urinaryDys:  filteredForArrForChemo[i].urinaryDys, 
			weightLoss: filteredForArrForChemo[i].weightLoss
			//y: Math.random() * 10 + 5
		});
	}
	chart.series[0].setData(tempDataArrForModal);
	tempDataArrForModal.splice(0, tempDataArrForModal.length);
	
	
	// For filteredForArrForChemoRad
	for (i = 0; i <= filteredForArrForChemoRad.length - 1; i++) {
		tempDataArrForModal.push({
			x: 1 + (Math.random() * 50 + 30)/100 - 0.5,
			y: filteredForArrForChemoRad[i].survivalMonths,
			anemia: filteredForArrForChemoRad[i].anemia, 
			bowelDys: filteredForArrForChemoRad[i].bowelDys, 
			chemo: filteredForArrForChemoRad[i].chemo, 
			chemoRad: filteredForArrForChemoRad[i].chemoRad, 
			decLibido: filteredForArrForChemoRad[i].decLibido,
			disease: filteredForArrForChemoRad[i].disease, 
			dxAge: filteredForArrForChemoRad[i].dxAge, 
			dxGrade: filteredForArrForChemoRad[i].dxGrade, 
			dxYear: filteredForArrForChemoRad[i].dxYear, 
			erectileDys: filteredForArrForChemoRad[i].erectileDys,
			fatigue: filteredForArrForChemoRad[i].fatigue, 
			fatigue: filteredForArrForChemoRad[i].fatigue,	
			hormonal: filteredForArrForChemoRad[i].hormonal, 
			hotFlash: filteredForArrForChemoRad[i].hotFlash, 
			isAlive: filteredForArrForChemoRad[i].isAlive, 
			nV: filteredForArrForChemoRad[i].nV, 
			noTreatment: filteredForArrForChemoRad[i].noTreatment, 
			race: filteredForArrForChemoRad[i].race, 
			radiation: filteredForArrForChemoRad[i].radiation, 
			surgRad: filteredForArrForChemoRad[i].surgRad, 
			surgery: filteredForArrForChemoRad[i].surgery, 
			treatmentOption: filteredForArrForChemoRad[i].treatmentOption, 	
			urinaryDys:  filteredForArrForChemoRad[i].urinaryDys, 
			weightLoss: filteredForArrForChemoRad[i].weightLoss
			//y: Math.random() * 10 + 5
		});
	}
	chart.series[1].setData(tempDataArrForModal);
	tempDataArrForModal.splice(0, tempDataArrForModal.length);
	
	
	// For filteredForArrForHormonal
	for (i = 0; i <= filteredForArrForHormonal.length - 1; i++) {
		tempDataArrForModal.push({
			x: 2 + (Math.random() * 50 + 30)/100 - 0.5,
			y: filteredForArrForHormonal[i].survivalMonths,
			anemia: filteredForArrForHormonal[i].anemia, 
			bowelDys: filteredForArrForHormonal[i].bowelDys, 
			chemo: filteredForArrForHormonal[i].chemo, 
			chemoRad: filteredForArrForHormonal[i].chemoRad, 
			decLibido: filteredForArrForHormonal[i].decLibido,
			disease: filteredForArrForHormonal[i].disease, 
			dxAge: filteredForArrForHormonal[i].dxAge, 
			dxGrade: filteredForArrForHormonal[i].dxGrade, 
			dxYear: filteredForArrForHormonal[i].dxYear, 
			erectileDys: filteredForArrForHormonal[i].erectileDys,
			fatigue: filteredForArrForHormonal[i].fatigue, 
			fatigue: filteredForArrForHormonal[i].fatigue,	
			hormonal: filteredForArrForHormonal[i].hormonal, 
			hotFlash: filteredForArrForHormonal[i].hotFlash, 
			isAlive: filteredForArrForHormonal[i].isAlive, 
			nV: filteredForArrForHormonal[i].nV, 
			noTreatment: filteredForArrForHormonal[i].noTreatment, 
			race: filteredForArrForHormonal[i].race, 
			radiation: filteredForArrForHormonal[i].radiation, 
			surgRad: filteredForArrForHormonal[i].surgRad, 
			surgery: filteredForArrForHormonal[i].surgery, 
			treatmentOption: filteredForArrForHormonal[i].treatmentOption, 	
			urinaryDys:  filteredForArrForHormonal[i].urinaryDys, 
			weightLoss: filteredForArrForHormonal[i].weightLoss
			//y: Math.random() * 10 + 5
		});
	}
	chart.series[2].setData(tempDataArrForModal);
	tempDataArrForModal.splice(0, tempDataArrForModal.length);
						
	
	// For filteredForArrForRadiation
	for (i = 0; i <= filteredForArrForRadiation.length - 1; i++) {
		tempDataArrForModal.push({
			x: 3 + (Math.random() * 50 + 30)/100 - 0.5,
			y: filteredForArrForRadiation[i].survivalMonths,
			anemia: filteredForArrForRadiation[i].anemia, 
			bowelDys: filteredForArrForRadiation[i].bowelDys, 
			chemo: filteredForArrForRadiation[i].chemo, 
			chemoRad: filteredForArrForRadiation[i].chemoRad, 
			decLibido: filteredForArrForRadiation[i].decLibido,
			disease: filteredForArrForRadiation[i].disease, 
			dxAge: filteredForArrForRadiation[i].dxAge, 
			dxGrade: filteredForArrForRadiation[i].dxGrade, 
			dxYear: filteredForArrForRadiation[i].dxYear, 
			erectileDys: filteredForArrForRadiation[i].erectileDys,
			fatigue: filteredForArrForRadiation[i].fatigue, 
			fatigue: filteredForArrForRadiation[i].fatigue,	
			hormonal: filteredForArrForRadiation[i].hormonal, 
			hotFlash: filteredForArrForRadiation[i].hotFlash, 
			isAlive: filteredForArrForRadiation[i].isAlive, 
			nV: filteredForArrForRadiation[i].nV, 
			noTreatment: filteredForArrForRadiation[i].noTreatment, 
			race: filteredForArrForRadiation[i].race, 
			radiation: filteredForArrForRadiation[i].radiation, 
			surgRad: filteredForArrForRadiation[i].surgRad, 
			surgery: filteredForArrForRadiation[i].surgery, 
			treatmentOption: filteredForArrForRadiation[i].treatmentOption, 	
			urinaryDys:  filteredForArrForRadiation[i].urinaryDys, 
			weightLoss: filteredForArrForRadiation[i].weightLoss
			//y: Math.random() * 10 + 5
		});
	}
	chart.series[3].setData(tempDataArrForModal);
	tempDataArrForModal.splice(0, tempDataArrForModal.length);
	
	
	// For filteredForArrForSurgery
	for (i = 0; i <= filteredForArrForSurgery.length - 1; i++) {
		tempDataArrForModal.push({
			x: 4 + (Math.random() * 50 + 30)/100 - 0.5,
			y: filteredForArrForSurgery[i].survivalMonths,
			anemia: filteredForArrForSurgery[i].anemia, 
			bowelDys: filteredForArrForSurgery[i].bowelDys, 
			chemo: filteredForArrForSurgery[i].chemo, 
			chemoRad: filteredForArrForSurgery[i].chemoRad, 
			decLibido: filteredForArrForSurgery[i].decLibido,
			disease: filteredForArrForSurgery[i].disease, 
			dxAge: filteredForArrForSurgery[i].dxAge, 
			dxGrade: filteredForArrForSurgery[i].dxGrade, 
			dxYear: filteredForArrForSurgery[i].dxYear, 
			erectileDys: filteredForArrForSurgery[i].erectileDys,
			fatigue: filteredForArrForSurgery[i].fatigue, 
			fatigue: filteredForArrForSurgery[i].fatigue,	
			hormonal: filteredForArrForSurgery[i].hormonal, 
			hotFlash: filteredForArrForSurgery[i].hotFlash, 
			isAlive: filteredForArrForSurgery[i].isAlive, 
			nV: filteredForArrForSurgery[i].nV, 
			noTreatment: filteredForArrForSurgery[i].noTreatment, 
			race: filteredForArrForSurgery[i].race, 
			radiation: filteredForArrForSurgery[i].radiation, 
			surgRad: filteredForArrForSurgery[i].surgRad, 
			surgery: filteredForArrForSurgery[i].surgery, 
			treatmentOption: filteredForArrForSurgery[i].treatmentOption, 	
			urinaryDys:  filteredForArrForSurgery[i].urinaryDys, 
			weightLoss: filteredForArrForSurgery[i].weightLoss
			//y: Math.random() * 10 + 5
		});
	}
	chart.series[4].setData(tempDataArrForModal);
	tempDataArrForModal.splice(0, tempDataArrForModal.length);					
	
	
	// For filteredForArrForSurgRad
	for (i = 0; i <= filteredForArrForSurgRad.length - 1; i++) {
		tempDataArrForModal.push({
			x: 5 + (Math.random() * 50 + 30)/100 - 0.5,
			y: filteredForArrForSurgRad[i].survivalMonths,
			anemia: filteredForArrForSurgRad[i].anemia, 
			bowelDys: filteredForArrForSurgRad[i].bowelDys, 
			chemo: filteredForArrForSurgRad[i].chemo, 
			chemoRad: filteredForArrForSurgRad[i].chemoRad, 
			decLibido: filteredForArrForSurgRad[i].decLibido,
			disease: filteredForArrForSurgRad[i].disease, 
			dxAge: filteredForArrForSurgRad[i].dxAge, 
			dxGrade: filteredForArrForSurgRad[i].dxGrade, 
			dxYear: filteredForArrForSurgRad[i].dxYear, 
			erectileDys: filteredForArrForSurgRad[i].erectileDys,
			fatigue: filteredForArrForSurgRad[i].fatigue, 
			fatigue: filteredForArrForSurgRad[i].fatigue,	
			hormonal: filteredForArrForSurgRad[i].hormonal, 
			hotFlash: filteredForArrForSurgRad[i].hotFlash, 
			isAlive: filteredForArrForSurgRad[i].isAlive, 
			nV: filteredForArrForSurgRad[i].nV, 
			noTreatment: filteredForArrForSurgRad[i].noTreatment, 
			race: filteredForArrForSurgRad[i].race, 
			radiation: filteredForArrForSurgRad[i].radiation, 
			surgRad: filteredForArrForSurgRad[i].surgRad, 
			surgery: filteredForArrForSurgRad[i].surgery, 
			treatmentOption: filteredForArrForSurgRad[i].treatmentOption, 	
			urinaryDys:  filteredForArrForSurgRad[i].urinaryDys, 
			weightLoss: filteredForArrForSurgRad[i].weightLoss
			//y: Math.random() * 10 + 5
		});
	}
	chart.series[5].setData(tempDataArrForModal);
	tempDataArrForModal.splice(0, tempDataArrForModal.length);
	
	
	// For 
	for (i = 0; i <= filteredForArrForNoTreatment.length - 1; i++) {
		tempDataArrForModal.push({
			x: 6 + (Math.random() * 50 + 30)/100 - 0.5,
			y: filteredForArrForNoTreatment[i].survivalMonths,
			anemia: filteredForArrForNoTreatment[i].anemia, 
			bowelDys: filteredForArrForNoTreatment[i].bowelDys, 
			chemo: filteredForArrForNoTreatment[i].chemo, 
			chemoRad: filteredForArrForNoTreatment[i].chemoRad, 
			decLibido: filteredForArrForNoTreatment[i].decLibido,
			disease: filteredForArrForNoTreatment[i].disease, 
			dxAge: filteredForArrForNoTreatment[i].dxAge, 
			dxGrade: filteredForArrForNoTreatment[i].dxGrade, 
			dxYear: filteredForArrForNoTreatment[i].dxYear, 
			erectileDys: filteredForArrForNoTreatment[i].erectileDys,
			fatigue: filteredForArrForNoTreatment[i].fatigue, 
			fatigue: filteredForArrForNoTreatment[i].fatigue,	
			hormonal: filteredForArrForNoTreatment[i].hormonal, 
			hotFlash: filteredForArrForNoTreatment[i].hotFlash, 
			isAlive: filteredForArrForNoTreatment[i].isAlive, 
			nV: filteredForArrForNoTreatment[i].nV, 
			noTreatment: filteredForArrForNoTreatment[i].noTreatment, 
			race: filteredForArrForNoTreatment[i].race, 
			radiation: filteredForArrForNoTreatment[i].radiation, 
			surgRad: filteredForArrForNoTreatment[i].surgRad, 
			surgery: filteredForArrForNoTreatment[i].surgery, 
			treatmentOption: filteredForArrForNoTreatment[i].treatmentOption, 	
			urinaryDys:  filteredForArrForNoTreatment[i].urinaryDys, 
			weightLoss: filteredForArrForNoTreatment[i].weightLoss
			//y: Math.random() * 10 + 5
		});
	}
	chart.series[6].setData(tempDataArrForModal);
	tempDataArrForModal.splice(0, tempDataArrForModal.length);
	
	
	chart.redraw();
	//*/
	$('#modalForPatientInfo').modal('hide');
	isModalEditing = false;
	
}





/** -------------------------------------------------------------------------------------------- 
 * function onClick when modifyPatentInfoInModal()
 --------------------------------------------------------------------------------------------*/
function drawChartWithSeriesData(){
	
	console.log("3a, parsedArray.length: " + pArray.length);
	
	pArray.splice(0, pArray.length);
	
	var tempDataArrForModal = [];
	
	if($('#inlineCheckbox2')){
		if($('#inlineCheckbox2')[0].checked){
			pArrayForDigStage1 = parsedArray.filter(function(el){
				return el.dxGrade == "Grade I";
			});			
			pArray = pArray.concat(pArrayForDigStage1);
		}
		
	}
	
	if($('#inlineCheckbox3')){
		if($('#inlineCheckbox3')[0].checked){
			pArrayForDigStage2 = parsedArray.filter(function(el){
				return el.dxGrade == "Grade II";
			});						
			pArray = pArray.concat(pArrayForDigStage2);
		}
	}
	
	if($('#inlineCheckbox4')){
		if($('#inlineCheckbox4')[0].checked){
			pArrayForDigStage3 = parsedArray.filter(function(el){
				return el.dxGrade == "Grade III";
			});		
			pArray = pArray.concat(pArrayForDigStage3);
		}
	}
	
	if($('#inlineCheckbox5')){
		if($('#inlineCheckbox5')[0].checked){
			pArrayForDigStage4 = parsedArray.filter(function(el){
				return el.dxGrade == "Grade IV";
			});						
			pArray = pArray.concat(pArrayForDigStage4);
		}
	}
	
	//
	console.log("3b, parsedArray.length: " + pArray.length);
	
	if(isModalEditing == true){
		pArray = parsedArray;	
	}
	
	
	filteredForArrForChemo.splice(0, filteredForArrForChemo.length);
	filteredForArrForRadiation.splice(0, filteredForArrForRadiation.length);
	filteredForArrForHormonal.splice(0, filteredForArrForHormonal.length);
	filteredForArrForSurgery.splice(0, filteredForArrForSurgery.length);
	filteredForArrForChemoRad.splice(0, filteredForArrForChemoRad.length);
	filteredForArrForSurgRad.splice(0, filteredForArrForSurgRad.length);
	filteredForArrForNoTreatment.splice(0, filteredForArrForNoTreatment.length);
	
	//filteredForArrForChemo = parsedArray.filter(function(el){
	filteredForArrForChemo = pArray.filter(function(el){
		return el.treatmentOption == "Chemo";
	});
	
	//filteredForArrForRadiation = parsedArray.filter(function(el){
	filteredForArrForRadiation = pArray.filter(function(el){
		return el.treatmentOption == "Radiation";
	});
	
	//filteredForArrForHormonal = parsedArray.filter(function(el){
	filteredForArrForHormonal = pArray.filter(function(el){
		return el.treatmentOption == "Hormonal";
	});
	
	//filteredForArrForSurgery = parsedArray.filter(function(el){
	filteredForArrForSurgery = pArray.filter(function(el){
		return el.treatmentOption == "Surgery";
	});
	
	//filteredForArrForChemoRad = parsedArray.filter(function(el){
	filteredForArrForChemoRad = pArray.filter(function(el){
		return el.treatmentOption == "Chemo+Rad";
	});
	
	//filteredForArrForSurgRad = parsedArray.filter(function(el){
	filteredForArrForSurgRad = pArray.filter(function(el){
		return el.treatmentOption == "Surg+Rad";
	});
	
	//filteredForArrForNoTreatment = parsedArray.filter(function(el){
	filteredForArrForNoTreatment = pArray.filter(function(el){
		return el.treatmentOption == "No-Treatment";
	});
	
	/*
	chart.series[0].setData(filteredForArrForChemo);
	chart.series[1].setData(filteredForArrForRadiation);
	chart.series[2].setData(filteredForArrForHormonal);
	chart.series[3].setData(filteredForArrForSurgery);
	chart.series[4].setData(filteredForArrForChemoRad);
	chart.series[5].setData(filteredForArrForSurgRad);
	chart.series[6].setData(filteredForArrForNoTreatment);
	*/
	medianForChemo = getMedian(filteredForArrForChemo);
	medianForRadiation = getMedian(filteredForArrForRadiation);
	medianForHormonal = getMedian(filteredForArrForHormonal);
	medianForSurgery = getMedian(filteredForArrForSurgery);
	medianForChemoRad = getMedian(filteredForArrForChemoRad);
	medianForSurgRad = getMedian(filteredForArrForSurgRad);
	medianForNoTreatment = getMedian(filteredForArrForNoTreatment);
	
	
	
	
	console.log("medianForChemo: " + medianForChemo);
	
	chart = $('#chart-container').highcharts();
	
	
	// For filteredForArrForChemo
	for (i = 0; i <= filteredForArrForChemo.length - 1; i++) {
		tempDataArrForModal.push({
			x: 0 + (Math.random() * 50 + 30)/100 - 0.5,
			y: filteredForArrForChemo[i].survivalMonths,
			anemia: filteredForArrForChemo[i].anemia, 
			bowelDys: filteredForArrForChemo[i].bowelDys, 
			chemo: filteredForArrForChemo[i].chemo, 
			chemoRad: filteredForArrForChemo[i].chemoRad, 
			decLibido: filteredForArrForChemo[i].decLibido,
			disease: filteredForArrForChemo[i].disease, 
			dxAge: filteredForArrForChemo[i].dxAge, 
			dxGrade: filteredForArrForChemo[i].dxGrade, 
			dxYear: filteredForArrForChemo[i].dxYear, 
			erectileDys: filteredForArrForChemo[i].erectileDys,
			fatigue: filteredForArrForChemo[i].fatigue, 
			fatigue: filteredForArrForChemo[i].fatigue,	
			hormonal: filteredForArrForChemo[i].hormonal, 
			hotFlash: filteredForArrForChemo[i].hotFlash, 
			isAlive: filteredForArrForChemo[i].isAlive, 
			nV: filteredForArrForChemo[i].nV, 
			noTreatment: filteredForArrForChemo[i].noTreatment, 
			race: filteredForArrForChemo[i].race, 
			radiation: filteredForArrForChemo[i].radiation, 
			surgRad: filteredForArrForChemo[i].surgRad, 
			surgery: filteredForArrForChemo[i].surgery, 
			treatmentOption: filteredForArrForChemo[i].treatmentOption, 	
			urinaryDys:  filteredForArrForChemo[i].urinaryDys, 
			weightLoss: filteredForArrForChemo[i].weightLoss
			//y: Math.random() * 10 + 5
		});
	}
	chart.series[0].setData(tempDataArrForModal);
	tempDataArrForModal.splice(0, tempDataArrForModal.length);
	
	
	// For filteredForArrForChemoRad
	for (i = 0; i <= filteredForArrForChemoRad.length - 1; i++) {
		tempDataArrForModal.push({
			x: 1 + (Math.random() * 50 + 30)/100 - 0.5,
			y: filteredForArrForChemoRad[i].survivalMonths,
			anemia: filteredForArrForChemoRad[i].anemia, 
			bowelDys: filteredForArrForChemoRad[i].bowelDys, 
			chemo: filteredForArrForChemoRad[i].chemo, 
			chemoRad: filteredForArrForChemoRad[i].chemoRad, 
			decLibido: filteredForArrForChemoRad[i].decLibido,
			disease: filteredForArrForChemoRad[i].disease, 
			dxAge: filteredForArrForChemoRad[i].dxAge, 
			dxGrade: filteredForArrForChemoRad[i].dxGrade, 
			dxYear: filteredForArrForChemoRad[i].dxYear, 
			erectileDys: filteredForArrForChemoRad[i].erectileDys,
			fatigue: filteredForArrForChemoRad[i].fatigue, 
			fatigue: filteredForArrForChemoRad[i].fatigue,	
			hormonal: filteredForArrForChemoRad[i].hormonal, 
			hotFlash: filteredForArrForChemoRad[i].hotFlash, 
			isAlive: filteredForArrForChemoRad[i].isAlive, 
			nV: filteredForArrForChemoRad[i].nV, 
			noTreatment: filteredForArrForChemoRad[i].noTreatment, 
			race: filteredForArrForChemoRad[i].race, 
			radiation: filteredForArrForChemoRad[i].radiation, 
			surgRad: filteredForArrForChemoRad[i].surgRad, 
			surgery: filteredForArrForChemoRad[i].surgery, 
			treatmentOption: filteredForArrForChemoRad[i].treatmentOption, 	
			urinaryDys:  filteredForArrForChemoRad[i].urinaryDys, 
			weightLoss: filteredForArrForChemoRad[i].weightLoss
			//y: Math.random() * 10 + 5
		});
	}
	chart.series[1].setData(tempDataArrForModal);
	tempDataArrForModal.splice(0, tempDataArrForModal.length);
	
	
	// For filteredForArrForHormonal
	for (i = 0; i <= filteredForArrForHormonal.length - 1; i++) {
		tempDataArrForModal.push({
			x: 2 + (Math.random() * 50 + 30)/100 - 0.5,
			y: filteredForArrForHormonal[i].survivalMonths,
			anemia: filteredForArrForHormonal[i].anemia, 
			bowelDys: filteredForArrForHormonal[i].bowelDys, 
			chemo: filteredForArrForHormonal[i].chemo, 
			chemoRad: filteredForArrForHormonal[i].chemoRad, 
			decLibido: filteredForArrForHormonal[i].decLibido,
			disease: filteredForArrForHormonal[i].disease, 
			dxAge: filteredForArrForHormonal[i].dxAge, 
			dxGrade: filteredForArrForHormonal[i].dxGrade, 
			dxYear: filteredForArrForHormonal[i].dxYear, 
			erectileDys: filteredForArrForHormonal[i].erectileDys,
			fatigue: filteredForArrForHormonal[i].fatigue, 
			fatigue: filteredForArrForHormonal[i].fatigue,	
			hormonal: filteredForArrForHormonal[i].hormonal, 
			hotFlash: filteredForArrForHormonal[i].hotFlash, 
			isAlive: filteredForArrForHormonal[i].isAlive, 
			nV: filteredForArrForHormonal[i].nV, 
			noTreatment: filteredForArrForHormonal[i].noTreatment, 
			race: filteredForArrForHormonal[i].race, 
			radiation: filteredForArrForHormonal[i].radiation, 
			surgRad: filteredForArrForHormonal[i].surgRad, 
			surgery: filteredForArrForHormonal[i].surgery, 
			treatmentOption: filteredForArrForHormonal[i].treatmentOption, 	
			urinaryDys:  filteredForArrForHormonal[i].urinaryDys, 
			weightLoss: filteredForArrForHormonal[i].weightLoss
			//y: Math.random() * 10 + 5
		});
	}
	chart.series[2].setData(tempDataArrForModal);
	tempDataArrForModal.splice(0, tempDataArrForModal.length);
						
	
	// For filteredForArrForRadiation
	for (i = 0; i <= filteredForArrForRadiation.length - 1; i++) {
		tempDataArrForModal.push({
			x: 3 + (Math.random() * 50 + 30)/100 - 0.5,
			y: filteredForArrForRadiation[i].survivalMonths,
			anemia: filteredForArrForRadiation[i].anemia, 
			bowelDys: filteredForArrForRadiation[i].bowelDys, 
			chemo: filteredForArrForRadiation[i].chemo, 
			chemoRad: filteredForArrForRadiation[i].chemoRad, 
			decLibido: filteredForArrForRadiation[i].decLibido,
			disease: filteredForArrForRadiation[i].disease, 
			dxAge: filteredForArrForRadiation[i].dxAge, 
			dxGrade: filteredForArrForRadiation[i].dxGrade, 
			dxYear: filteredForArrForRadiation[i].dxYear, 
			erectileDys: filteredForArrForRadiation[i].erectileDys,
			fatigue: filteredForArrForRadiation[i].fatigue, 
			fatigue: filteredForArrForRadiation[i].fatigue,	
			hormonal: filteredForArrForRadiation[i].hormonal, 
			hotFlash: filteredForArrForRadiation[i].hotFlash, 
			isAlive: filteredForArrForRadiation[i].isAlive, 
			nV: filteredForArrForRadiation[i].nV, 
			noTreatment: filteredForArrForRadiation[i].noTreatment, 
			race: filteredForArrForRadiation[i].race, 
			radiation: filteredForArrForRadiation[i].radiation, 
			surgRad: filteredForArrForRadiation[i].surgRad, 
			surgery: filteredForArrForRadiation[i].surgery, 
			treatmentOption: filteredForArrForRadiation[i].treatmentOption, 	
			urinaryDys:  filteredForArrForRadiation[i].urinaryDys, 
			weightLoss: filteredForArrForRadiation[i].weightLoss
			//y: Math.random() * 10 + 5
		});
	}
	chart.series[3].setData(tempDataArrForModal);
	tempDataArrForModal.splice(0, tempDataArrForModal.length);
	
	
	// For filteredForArrForSurgery
	for (i = 0; i <= filteredForArrForSurgery.length - 1; i++) {
		tempDataArrForModal.push({
			x: 4 + (Math.random() * 50 + 30)/100 - 0.5,
			y: filteredForArrForSurgery[i].survivalMonths,
			anemia: filteredForArrForSurgery[i].anemia, 
			bowelDys: filteredForArrForSurgery[i].bowelDys, 
			chemo: filteredForArrForSurgery[i].chemo, 
			chemoRad: filteredForArrForSurgery[i].chemoRad, 
			decLibido: filteredForArrForSurgery[i].decLibido,
			disease: filteredForArrForSurgery[i].disease, 
			dxAge: filteredForArrForSurgery[i].dxAge, 
			dxGrade: filteredForArrForSurgery[i].dxGrade, 
			dxYear: filteredForArrForSurgery[i].dxYear, 
			erectileDys: filteredForArrForSurgery[i].erectileDys,
			fatigue: filteredForArrForSurgery[i].fatigue, 
			fatigue: filteredForArrForSurgery[i].fatigue,	
			hormonal: filteredForArrForSurgery[i].hormonal, 
			hotFlash: filteredForArrForSurgery[i].hotFlash, 
			isAlive: filteredForArrForSurgery[i].isAlive, 
			nV: filteredForArrForSurgery[i].nV, 
			noTreatment: filteredForArrForSurgery[i].noTreatment, 
			race: filteredForArrForSurgery[i].race, 
			radiation: filteredForArrForSurgery[i].radiation, 
			surgRad: filteredForArrForSurgery[i].surgRad, 
			surgery: filteredForArrForSurgery[i].surgery, 
			treatmentOption: filteredForArrForSurgery[i].treatmentOption, 	
			urinaryDys:  filteredForArrForSurgery[i].urinaryDys, 
			weightLoss: filteredForArrForSurgery[i].weightLoss
			//y: Math.random() * 10 + 5
		});
	}
	chart.series[4].setData(tempDataArrForModal);
	tempDataArrForModal.splice(0, tempDataArrForModal.length);					
	
	
	// For filteredForArrForSurgRad
	for (i = 0; i <= filteredForArrForSurgRad.length - 1; i++) {
		tempDataArrForModal.push({
			x: 5 + (Math.random() * 50 + 30)/100 - 0.5,
			y: filteredForArrForSurgRad[i].survivalMonths,
			anemia: filteredForArrForSurgRad[i].anemia, 
			bowelDys: filteredForArrForSurgRad[i].bowelDys, 
			chemo: filteredForArrForSurgRad[i].chemo, 
			chemoRad: filteredForArrForSurgRad[i].chemoRad, 
			decLibido: filteredForArrForSurgRad[i].decLibido,
			disease: filteredForArrForSurgRad[i].disease, 
			dxAge: filteredForArrForSurgRad[i].dxAge, 
			dxGrade: filteredForArrForSurgRad[i].dxGrade, 
			dxYear: filteredForArrForSurgRad[i].dxYear, 
			erectileDys: filteredForArrForSurgRad[i].erectileDys,
			fatigue: filteredForArrForSurgRad[i].fatigue, 
			fatigue: filteredForArrForSurgRad[i].fatigue,	
			hormonal: filteredForArrForSurgRad[i].hormonal, 
			hotFlash: filteredForArrForSurgRad[i].hotFlash, 
			isAlive: filteredForArrForSurgRad[i].isAlive, 
			nV: filteredForArrForSurgRad[i].nV, 
			noTreatment: filteredForArrForSurgRad[i].noTreatment, 
			race: filteredForArrForSurgRad[i].race, 
			radiation: filteredForArrForSurgRad[i].radiation, 
			surgRad: filteredForArrForSurgRad[i].surgRad, 
			surgery: filteredForArrForSurgRad[i].surgery, 
			treatmentOption: filteredForArrForSurgRad[i].treatmentOption, 	
			urinaryDys:  filteredForArrForSurgRad[i].urinaryDys, 
			weightLoss: filteredForArrForSurgRad[i].weightLoss
			//y: Math.random() * 10 + 5
		});
	}
	chart.series[5].setData(tempDataArrForModal);
	tempDataArrForModal.splice(0, tempDataArrForModal.length);
	
	
	// For 
	for (i = 0; i <= filteredForArrForNoTreatment.length - 1; i++) {
		tempDataArrForModal.push({
			x: 6 + (Math.random() * 50 + 30)/100 - 0.5,
			y: filteredForArrForNoTreatment[i].survivalMonths,
			anemia: filteredForArrForNoTreatment[i].anemia, 
			bowelDys: filteredForArrForNoTreatment[i].bowelDys, 
			chemo: filteredForArrForNoTreatment[i].chemo, 
			chemoRad: filteredForArrForNoTreatment[i].chemoRad, 
			decLibido: filteredForArrForNoTreatment[i].decLibido,
			disease: filteredForArrForNoTreatment[i].disease, 
			dxAge: filteredForArrForNoTreatment[i].dxAge, 
			dxGrade: filteredForArrForNoTreatment[i].dxGrade, 
			dxYear: filteredForArrForNoTreatment[i].dxYear, 
			erectileDys: filteredForArrForNoTreatment[i].erectileDys,
			fatigue: filteredForArrForNoTreatment[i].fatigue, 
			fatigue: filteredForArrForNoTreatment[i].fatigue,	
			hormonal: filteredForArrForNoTreatment[i].hormonal, 
			hotFlash: filteredForArrForNoTreatment[i].hotFlash, 
			isAlive: filteredForArrForNoTreatment[i].isAlive, 
			nV: filteredForArrForNoTreatment[i].nV, 
			noTreatment: filteredForArrForNoTreatment[i].noTreatment, 
			race: filteredForArrForNoTreatment[i].race, 
			radiation: filteredForArrForNoTreatment[i].radiation, 
			surgRad: filteredForArrForNoTreatment[i].surgRad, 
			surgery: filteredForArrForNoTreatment[i].surgery, 
			treatmentOption: filteredForArrForNoTreatment[i].treatmentOption, 	
			urinaryDys:  filteredForArrForNoTreatment[i].urinaryDys, 
			weightLoss: filteredForArrForNoTreatment[i].weightLoss
			//y: Math.random() * 10 + 5
		});
	}
	chart.series[6].setData(tempDataArrForModal);
	tempDataArrForModal.splice(0, tempDataArrForModal.length);
	
	
	chart.redraw();
}





/** -------------------------------------------------------------------------------------------- 
 * function to get Median value of Int  array
 --------------------------------------------------------------------------------------------*/
function getMedian(values) {
 
	values.sort( function(a,b) {return a.survivalMonths - b.survivalMonths;} );
	 
	var half = Math.floor(values.length/2);
	 
	if(values.length % 2){
		if(typeof(values[half].survivalMonths)!== 'undefined'){
			return values[half].survivalMonths;
		} else{
			return null;	
		}
	}
	else if(values.length == 0){
		return null;
	} else{
		if(typeof(values[half].survivalMonths) !== 'undefined'){
			return (values[half-1].survivalMonths + values[half].survivalMonths) / 2.0;	
		}else{
			return null;	
		}
		
	}
}
 



var hasMedian = false;

/** -------------------------------------------------------------------------------------------- 
 * function to show Median value 
 --------------------------------------------------------------------------------------------*/
function showMedians(){
	chart = $('#chart-container').highcharts();
	
	/* http://stackoverflow.com/questions/11413930/highcharts-remove-renderer-path#
	* This works... But, path x & y position is absolute value, not x & y value.
	
	if(!isVis){
		console.log("Show");
		console.log("meN: " + medianForNoTreatment);
		//chart.renderer.path(['M', 50, 70, 'L', 100, 70])
		chart.renderer.path(['M', 50, medianForNoTreatment, 'L', 100, medianForNoTreatment])
            .attr({
                'stroke-width': 2,
                stroke: 'red',
				id :'myPath1'
            })
            .add();
        	
	} else{
		console.log("D");
		//$('path[d="M 0 0 L 100 100 200 50 300 100"]').remove() ;
        //$('path[d="M 50 70 L 100 70"]').remove() ;
		
		// Or you can use removeById
		$("#myPath1").remove();
	}
	isVis = !isVis;
	//*/
	
	/* Regarding add / remove PlotLine 
	http://jsfiddle.net/gh/get/jquery/1.7.2/highslide-software/highcharts.com/tree/master/samples/highcharts/members/axis-addplotline/
	http://api.highcharts.com/highcharts#Axis.addPlotLine%28%29
	http://jsfiddle.net/gh/get/jquery/1.7.2/highslide-software/highcharts.com/tree/master/samples/highcharts/members/axis-addplotband/
	http://jsfiddle.net/gh/get/jquery/1.7.2/highslide-software/highcharts.com/tree/master/samples/highcharts/members/chart-addaxis/
	*/
	if(!hasMedian){
		/*
		chart.yAxis[0].addPlotLine({
			value: 5.5,
			color: 'red',
			width: 2,
			id: 'plot-line-1'
		});
		*/
		chart.addSeries({
			id: 'median-lines',
			name: 'Medians',
			type: 'line',
			//color: '#08F',
			color: '#C22D48',
			//color: '#00FF00',
			lineWidth: 5,
			marker: {
				enabled: false
			},
	
            //data: [194.1, null, 95.6, 54.4, 29.9, 71.5, 106.4, 33]
			//data: [chart.plotTop, chart.plotTop/2, chart.plotLeft, chart.plotRight, chart.plotBottom, 71.5, 106.4, 33]
			data: [
				[-0.2, medianForChemo], [0.3, medianForChemo], null,
				[0.8, medianForChemoRad], [1.3, medianForChemoRad], null,
				[1.8, medianForHormonal], [2.3, medianForHormonal], null,
				[2.8, medianForRadiation], [3.3, medianForRadiation], null,
				[3.8, medianForSurgery], [4.3, medianForSurgery], null,
				[4.8, medianForSurgRad], [5.3, medianForSurgRad], null,
				[5.8, medianForNoTreatment], [6.3, medianForNoTreatment], null
				
			]
			
        });
		
		/*
		if(chart.series.length > 7){
			//chart.series[7].plotOptions.marker.enabled = false;	
			console.log(chart.series[7].chart.options.plotOptions.scatter.marker.radius);
			chart.series[7].chart.options.plotOptions.scatter.marker.radius = 0;
		}
		*/
		
	} else{
		//chart.yAxis[0].removePlotLine('plot-line-1');						   
		if(chart.series.length > 7){
			chart.series[7].remove('median-lines');
		}
			
	}
	hasMedian = !hasMedian;
}


/** -------------------------------------------------------------------------------------------- 
 * function fired when decisionspace.html loaded
 --------------------------------------------------------------------------------------------*/
function decisionspaceOnLoad(){
	//console.log("parsedArray success: " + parsedArray);
	//console.log("global globalParsedArray: " + window.globalParsedArray);
	//*
	console.log("page onLoad");	
	/*console.log("Picker for selectPickerForCondition 1: " + $('#selectPickerForCondition').selectpicker('val'));	// result: 'Cancer, Prostate
	console.log("Picker for selectPickerForEthnicity 1: " + $("select[id=selectPickerForEthnicity]").text());	// show entire texts
	console.log("Picker for selectPickerForCondition 2: " + $("select[id=selectPickerForCondition]").val());
	console.log("Picker for selectPickerForEthnicity 2: " + $("select[id=selectPickerForEthnicity]").val());	// show selected value
	console.log("Picker for selectPickerValueForCondition 3: " + selectPickerValueForCondition);
	console.log("Picker for selectPickerForEthnicity 3: " + selectPickerValueForEthnicity);
	*/
	console.log("Picker for selectPickerValueForCondition: " + localStorage.selectPickerValueForCondition);
	console.log("Picker for selectPickerForEthnicity: " + localStorage.selectPickerValueForEthnicity);
	
	//console.log("seer data: " + seerdata);
	//$("#ageValueInDS").innerHTML = '<b>Age: </b> ' + localStorage.ageOfThePatient;
	//$("#ethnicityValueInDS").innerHTML = '<b>Ethnicity: </b> ' + localStorage.selectPickerValueForEthnicity;
	$("#ageValueInDS").html('<b>Age:   </b> ' + localStorage.ageOfThePatient);
	$("#ethnicityValueInDS").html('<b>Ethnicity:   </b> ' + localStorage.selectPickerValueForEthnicity);
	
	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 110,
		values: [ 35, 70 ],
		slide: function( event, ui ) {
			$( "#amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
		}
	});
	$( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) + " - " + $( "#slider-range" ).slider( "values", 1 ) );
	/*
	console.log("Second ----------------------");	
	if($('#inlineCheckbox1')){
		console.log("2---inlineCheckbox1 cheched: " + $('#inlineCheckbox1')[0].checked);	
	}
	
	if($('#inlineCheckbox2')){
		console.log("2---inlineCheckbox2 cheched: " + $('#inlineCheckbox2')[0].checked);	
	}
	
	if($('#inlineCheckbox3')){
		console.log("2---inlineCheckbox3 cheched: " + $('#inlineCheckbox3')[0].checked);	
	}
	
	if($('#inlineCheckbox4')){
		console.log("2---inlineCheckbox4 cheched: " + $('#inlineCheckbox4')[0].checked);	
	}
	
	if($('#inlineCheckbox5')){
		console.log("2---inlineCheckbox5 cheched: " + $('#inlineCheckbox5')[0].checked);	
	}
	*/
	
	for(i=0;i<seerdata.length;i++){
		//var innerArray = [];
		var obj = seerdata[i];
		
		//console.log(obj1);
		//console.log(obj1['Age recode with <1 year olds']);
	
		
		/* For old variables
		var ageRecode, sex, csSchema, raceRecode, seerRegistry, primarySite, histologicType, 	
			behaviorCode, eodSize, eodExtent, eodNodes, eodProstate, rxSummSite, 
			reasonNoCancerSurgery, radiation, seerCauseDeath, survivialTime, followUpType, codSite, 
			seerOtherCauseDeath, codToSiteRec, vitalStatus, diagnosisYear, grade;
		*/
		var anemia, bowelDys, chemo, chemoRad, decLibido, disease, dxAge, dxGrade, dxYear, 
			erectileDys, fatigue, fatigue, hormonal, hotFlash, isAlive, nV, noTreatment, race,
			radiation, surgRad, surgery, survivalMonths, treatmentOption, urinaryDys, weightLoss;
		
		
		/* For old variables
		if(obj1['Age recode with <1 year olds']){ ageRecode = obj1['Age recode with <1 year olds']; }
		if(obj1['Sex']){ sex = obj1['Sex']; }
		if(obj1['CS Schema v0203']){ csSchema = obj1['CS Schema v0203']; }
		if(obj1['Race recode (White, Black, Other)']){ raceRecode = obj1['Race recode (White, Black, Other)']; }
		if(obj1['SEER registry']){ seerRegistry = obj1['SEER registry']; }
		if(obj1['Primary Site']){ primarySite = obj1['Primary Site']; }
		if(obj1['Histologic Type ICD-O-3']){ histologicType = obj1['Histologic Type ICD-O-3']; }
		if(obj1['Behavior code ICD-O-3 (1973+)']){ behaviorCode = obj1['Behavior code ICD-O-3 (1973+)']; }
		if(obj1['EOD 10 - size (1988-2003)']){ eodSize = obj1['EOD 10 - size (1988-2003)']; }
		if(obj1['EOD 10 - extent (1988-2003)']){ eodExtent = obj1['EOD 10 - extent (1988-2003)']; }
		if(obj1['EOD 10 - nodes (1988-2003)']){ eodNodes = obj1['EOD 10 - nodes (1988-2003)']; }
		if(obj1['EOD 10 - Prostate path ext (1995-2003)']){ eodProstate = obj1['EOD 10 - Prostate path ext (1995-2003)']; }
		if(obj1['RX Summ--Surg Prim Site (1998+)']){ rxSummSite = obj1['RX Summ--Surg Prim Site (1998+)']; }
		if(obj1['Reason no cancer-directed surgery']){ reasonNoCancerSurgery = obj1['Reason no cancer-directed surgery']; }
		if(obj1['Radiation']){ radiation = obj1['Radiation']; }
		if(obj1['SEER cause-specific death classification']){ seerCauseDeath = obj1['SEER cause-specific death classification']; }
		if(obj1['Survival time recode (total # of months)']){ survivialTime = parseInt(obj1['Survival time recode (total # of months)']); }
		if(obj1['Type of follow-up expected']){ followUpType = obj1['Type of follow-up expected']; }
		if(obj1['COD to site recode']){ codSite = obj1['COD to site recode']; }
		if(obj1['SEER other cause of death classification']){ seerOtherCauseDeath = obj1['SEER other cause of death classification']; }
		if(obj1['COD to site rec KM']){ codToSiteRec = obj1['COD to site rec KM']; }
		if(obj1['Vital status recode (study cutoff used)']){ vitalStatus = obj1['Vital status recode (study cutoff used)']; }
		if(obj1['Year of diagnosis']){ diagnosisYear = parseInt(obj1['Year of diagnosis']); }
		if(obj1['Grade']){ grade = obj1['Grade']; }
		*/
		if(obj['Anemia']){ anemia = obj['Anemia']; }
		if(obj['Bowel-Dys']){ bowelDys = obj['Bowel-Dys']; }
		if(obj['Chemo']){ chemo = obj['Chemo']; }
		if(obj['Chemo+Rad']){ chemoRad = obj['Chemo+Rad']; }
		if(obj['Dec-Libido']){ decLibido = obj['Dec-Libido']; }
		if(obj['Disease']){ disease = obj['Disease']; }
		if(obj['Dx-Age']){ dxAge = obj['Dx-Age']; }
		if(obj['Dx-Grade']){ dxGrade = obj['Dx-Grade']; }
		if(obj['Dx-Year']){ dxYear = obj['Dx-Year']; }
		if(obj['Erectile-Dys']){ erectileDys = obj['Erectile-Dys']; }
		if(obj['Fatigue']){ fatigue = obj['Fatigue']; }
		if(obj['Hormonal']){ hormonal = obj['Hormonal']; }
		if(obj['Hot-Flash']){ hotFlash = obj['Hot-Flash']; }
		if(obj['Is-Alive']){ isAlive = obj['Is-Alive']; }
		if(obj['N/V']){ nV = obj['N/V']; }
		if(obj['No-Treatment']){ noTreatment = obj['No-Treatment']; }
		if(obj['Race']){ race = obj['Race']; }
		if(obj['Radiation']){ radiation = obj['Radiation']; }
		if(obj['Surg+Rad']){ surgRad = obj['Surg+Rad']; }
		if(obj['Surgery']){ surgery = obj['Surgery']; }
		if(obj['Survival-months']){ survivalMonths = obj['Survival-months']; }
		if(obj['Treat-option']){ treatmentOption = obj['Treat-option']; }
		if(obj['Urinary-Dys']){ urinaryDys = obj['Urinary-Dys']; }
		if(obj['Weight-Loss']){ weightLoss = obj['Weight-Loss']; }
		
		
		/* For old variables 
		parsedArray.push({
				ageRecode: ageRecode, sex: sex, csSchema: csSchema, seerRegistry: seerRegistry, 
				primarySite: primarySite, histologicType: histologicType, behaviorCode: behaviorCode,
				eodSize: eodSize, eodExtent: eodExtent, eodNodes: eodNodes, eodProstate: eodProstate, 
				rxSummSite: rxSummSite, reasonNoCancerSurgery: reasonNoCancerSurgery, radiation: radiation,
				seerCauseDeath: seerCauseDeath, survivialTime: survivialTime, followUpType: followUpType, 
				codSite: codSite, seerOtherCauseDeath: seerOtherCauseDeath, codToSiteRec: codToSiteRec, 
				vitalStatus: vitalStatus, diagnosisYear: diagnosisYear, grade: grade
		});
		*/
			
		preParsedArray.push({
				anemia: anemia, bowelDys: bowelDys, chemo: chemo, chemoRad: chemoRad, decLibido: decLibido,
				disease: disease, dxAge: dxAge, dxGrade: dxGrade, dxYear: dxYear, erectileDys: erectileDys,
				fatigue: fatigue, fatigue: fatigue,	hormonal: hormonal, hotFlash: hotFlash, isAlive: isAlive, 
				nV: nV, noTreatment: noTreatment, race: race, radiation: radiation, surgRad: surgRad, 
				surgery: surgery, survivalMonths: survivalMonths, treatmentOption: treatmentOption, 	
				urinaryDys:  urinaryDys, weightLoss: weightLoss
		});
	}
		
		
	//example3();
	console.log( "preParsedArray success" + preParsedArray); 		// sequence 3
	/* For old variables 
	var tmp1 = jlinq.from(parsedArray)
		.sort("survivalMonths")
		.select();

	var arrForNotRecommendedContraindicated = jlinq.from(parsedArray)
		.starts("reasonNoCancerSurgery", "Not")
		.ends("reasonNoCancerSurgery", "recommended")
		;
	
	var arrForNotRecommended = jlinq.from(parsedArray)
		.starts("reasonNoCancerSurgery", "Not recommended, contraindicated due to other conditions")
		;	
	
	var arrForRecommendedNotPerformedPatientRefused = jlinq.from(parsedArray)
		.starts("reasonNoCancerSurgery", "Recommended but")
		.ends("reasonNoCancerSurgery", "refused");

	var arrForRecommendedNotPerformedUnknownReason = jlinq.from(parsedArray)
		.starts("reasonNoCancerSurgery", "Recommended but")
		.ends("reasonNoCancerSurgery", "unknown reason");
	
	var arrForRecommendedUnknownPerformed = jlinq.from(parsedArray)
		.starts("reasonNoCancerSurgery", "Recommended, ")
		.ends("reasonNoCancerSurgery", "unknown if performed");

	var arrForSurgeryPerformed = jlinq.from(parsedArray)
		.starts("reasonNoCancerSurgery", "Surgery performed");
	
	var arrForUnknownDeathCertificate = jlinq.from(parsedArray)
		.starts("reasonNoCancerSurgery", "Unknown");
	*/
	/*
	var tmp4 = jlinq.from(parsedArray)
		.select("reasonNoCancerSurgery", "Not recommended")
	*/
	/*
	console.log("success" + tmp1);			// sequence 2
	console.log("Count - NotRecommended: " + arrForNotRecommended.count());
	console.log("Count - NotRecommendedContraindicated: " + arrForNotRecommendedContraindicated.count());
	console.log("Count - recommended But Not Performed Patient Refused: " + arrForRecommendedNotPerformedPatientRefused.count());
	console.log("Count - recommendedNotPerformed UnknownReason : " + arrForRecommendedNotPerformedUnknownReason.count());
	console.log("Count - recommended Unknown if Performed  : " + arrForRecommendedUnknownPerformed.count());
	console.log("Count - Surgery Performed  : " + arrForSurgeryPerformed.count());
	console.log("Count - unknown Death Certificate  : " + arrForUnknownDeathCertificate.count());
	console.log("Unknown Death Certificate  : " + arrForUnknownDeathCertificate);
	//console.log("parsedArray success: ");
	//*/
	
	
	//http://stackoverflow.com/questions/2722159/javascript-how-to-filter-object-array-based-on-attributes
	//http://stackoverflow.com/questions/1694717/javascript-how-to-create-an-object-and-filter-on-those-attributes
	/* For old variables
	var filteredForArrForNotRecommended = parsedArray.filter(function(el){
		return el.reasonNoCancerSurgery == "Not recommended";
	});
	
	var filteredForArrForNotRecommendedContraindicated = parsedArray.filter(function(el){
		return el.reasonNoCancerSurgery == "Not recommended, contraindicated due to other conditions";
	});
	
	var filteredForArrForRecommendedNotPerformedPatientRefused = parsedArray.filter(function(el){
		return el.reasonNoCancerSurgery == "Recommended but not performed, patient refused";
	});
	
	var filteredForArrForRecommendedNotPerformedUnknownReason = parsedArray.filter(function(el){
		return el.reasonNoCancerSurgery == "Recommended but not performed, unknown reason";
	});
	
	var filteredForArrForRecommendedUnknownPerformed = parsedArray.filter(function(el){
		return el.reasonNoCancerSurgery == "Recommended, unknown if performed";
	});
	
	var filteredForArrForSurgeryPerformed = parsedArray.filter(function(el){
		return el.reasonNoCancerSurgery == "Surgery performed";
	});
	
	var filteredForArrForUnknownDeathCertificate = parsedArray.filter(function(el){
		return el.reasonNoCancerSurgery == "Unknown; death certificate or autopsy only case";
	});
	
	console.log("filteredForArrForNotRecommendedContraindicated  : " + filteredForArrForNotRecommendedContraindicated);
	*/
	/*
	Chemo	
	Radiation	
	Hormonal	
	Surgery	
	Chemo+Rad	
	Surg+Rad	
	No-Treatment */
	
	parsedArray = preParsedArray.filter(function(el){
		return el.race == localStorage.selectPickerValueForEthnicity;	
	});
	
	filteredForArrForChemo = parsedArray.filter(function(el){
		return el.treatmentOption == "Chemo";
	});
	
	filteredForArrForRadiation = parsedArray.filter(function(el){
		return el.treatmentOption == "Radiation";
	});
	
	filteredForArrForHormonal = parsedArray.filter(function(el){
		return el.treatmentOption == "Hormonal";
	});
	
	filteredForArrForSurgery = parsedArray.filter(function(el){
		return el.treatmentOption == "Surgery";
	});
	
	filteredForArrForChemoRad = parsedArray.filter(function(el){
		return el.treatmentOption == "Chemo+Rad";
	});
	
	filteredForArrForSurgRad = parsedArray.filter(function(el){
		return el.treatmentOption == "Surg+Rad";
	});
	
	filteredForArrForNoTreatment = parsedArray.filter(function(el){
		return el.treatmentOption == "No-Treatment";
	});
	
	console.log("1. parsedArray.length: " + parsedArray.length);
	//console.log("filtered1  : " + parsedArray);
	
	medianForChemo = getMedian(filteredForArrForChemo);
	medianForRadiation = getMedian(filteredForArrForRadiation);
	medianForHormonal = getMedian(filteredForArrForHormonal);
	medianForSurgery = getMedian(filteredForArrForSurgery);
	medianForChemoRad = getMedian(filteredForArrForChemoRad);
	medianForSurgRad = getMedian(filteredForArrForSurgRad);
	medianForNoTreatment = getMedian(filteredForArrForNoTreatment);
	
	// HighChart related
	//http://jsfiddle.net/Fishman/5aNEf/1/
	//http://stackoverflow.com/questions/15246796/highcharts-scatter-plot-with-time-only
	//http://jsfiddle.net/gh/get/jquery/1.7.2/highslide-software/highcharts.com/tree/master/samples/highcharts/plotoptions/series-color-specific/
	//http://jsfiddle.net/gh/get/jquery/1.7.2/highslide-software/highcharts.com/tree/master/samples/highcharts/plotoptions/series-cursor-scatter/
	
	$('#chart-container').highcharts({
            chart: {
            	type: 'scatter',
				events: {
                    load: function() {
    
                        // set up the updating of the chart each second
						/*
						var series = this.series[0];
						setInterval(function() {
							var x = (new Date()).getTime(), // current time
								y = Math.random();
							series.addPoint([x, y], true, true);
                        }, 1000);
                    	*/
					}
                }	
            },
            title: {
                text: 'SEER Prostrate Chart'
            },
            subtitle: {
                text: 'Source: SEER data'
            },
            xAxis: {
                title: {
                    enabled: true,
                    //text: 'Reason no cancer-directed surgery'
					text: 'Treatment Option'
                },
				//http://stackoverflow.com/questions/8189921/how-to-set-a-static-minimum-value-for-axes-in-highcharts#
				min: -0.3,
				max: 6.3,
				/*
				labels: {
					formatter: function() {
						if (this.value > 0)
							return this.value;
						else if (this.value == 0)
							return null;
						else
							return this.value;
						
					}
				},*/
				/* for old variables
				categories: ['Not recommended', 'Not recommended, contraindicated due to other conditions', 
							 'Recommended but not performed, patient refused', 'Recommended but not performed, unknown reason',
							 'Recommended, unknown if performed', 'Surgery performed', 'Unknown; death certificate or autopsy only case']
				*/
				// Chemo	Radiation	Hormonal	Surgery	Chemo+Rad	Surg+Rad	No-Treatment
				categories: ['Chemo Therapy', 'Chemo therapy & Radiation', 'Hormonal Therapy', 'Radiation', 'Surgery', 'Surgery & Radiation', 'None (Active monitorying)']
				//*/
				
            },
            yAxis: {
                title: {
                    text: 'Survival time recode (total # of months)'
                },
				min: 0
            },
			
			legend: {
				enabled: false	
				/*
				layout: 'vertical',
				align: 'left',
				verticalAlign: 'top',
				x: 100,
				y: 70,
				floating: true,
				backgroundColor: '#00FF00',
				borderWidth: 1
				*/
			},
            //*
			plotOptions: {
				scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: true
                            }
                        }
                    },
                    tooltip: {
                        /*
						headerFormat: '<b>{series.name}</b><br>',
                        pointFormat: 'Survival Time (months): {point.y}'
						*/
						//http://www.highcharts.com/demo/column-basic
						/*
						headerFormat: '<span >{series.name}</span>',
						pointFormat: '<table><tr><td></td><td style="color:{series.color};padding:0">Survival Time: </td>' + '<td style="padding:0"><b>{point.y}</b></td></tr>',
						footerFormat: '</table>',
						shared: false,
						useHTML: true
						*/
						 /*
						 formatter: function() {
							return '<b>' + this.series.name + '</b><br/>'+ 'Survival Time: ' + this.y +'<br/>'+ 'Total: '+ this.y;
						}*/
						/* For old variables
						headerFormat: '<span style="color:{series.color}"><b style="color:{series.color}">{series.name}</b></span><table>',
						pointFormat: '<tr><td></td><td style="color:{series.color};padding:0">'
						+'</b><br/>'+'<b>Survival Time</b>: </td>' + '<td style="padding:0">{point.y}</td></tr>'
						+'</b><br/>'+'<b>Age</b>: </td>' + '<td style="padding:0">{point.age}</td></tr>'
						+'</b><br/>'+'<b>Sex</b>: </td>' + '<td style="padding:0">{point.sex}</td></tr>'
						+'</b><br/>'+'<b>Radiation</b>: </td>' + '<td style="padding:0">{point.radiation}</td></tr>',
						useHTML: true
						*/
						
						/*
						headerFormat: '<span style="color:{series.color}"><b style="color:{series.color}">{series.name}</b></span><table>',
						pointFormat: '<tr><td></td><td style="color:{series.color};padding:0">'
						+'</b><br/>'+'<b>is Alive</b>: </td>' + '<td style="padding:0">{point.isAlive}</td></tr>'
						+'</b><br/>'+'<b>Survival Months</b>: </td>' + '<td style="padding:0">{point.y}</td></tr>'
						+'</b><br/></b><br/>'+'<b>Side effects</b>: </td></tr>'
						+'</b><br/>'+'<b>Urinary Dysfunction</b>: </td>' + '<td style="padding:0">{point.urinaryDys}</td></tr>'
						+'</b><br/>'+'<b>Bowel Dysfunction</b>: </td>' + '<td style="padding:0">{point.bowelDys}</td></tr>'
						+'</b><br/>'+'<b>Hot Flash</b>: </td>' + '<td style="padding:0">{point.hotFlash}</td></tr>'
						+'</b><br/>'+'<b>Decreased Libido</b>: </td>' + '<td style="padding:0">{point.decLibido}</td></tr>'
						+'</b><br/>'+'<b>Nausea/Vomiting</b>: </td>' + '<td style="padding:0">{point.nV}</td></tr>'
						+'</b><br/>'+'<b>Weight Loss</b>: </td>' + '<td style="padding:0">{point.weightLoss}</td></tr>'
						+'</b><br/>'+'<b>Fatigue</b>: </td>' + '<td style="padding:0">{point.fatigue}</td></tr>'
						+'</b><br/>'+'<b>Anemia</b>: </td>' + '<td style="padding:0">{point.anemia}</td></tr>'
						+'</b><br/>'+'<b>Erectile Dysfunction</b>: </td>' + '<td style="padding:0">{point.erectileDys}</td></tr>'
						*/
						crosshairs: true,
						formatter: function(){
            				//return '<b>'+ this.x +'</b>: '+ roundVal(this.y);
							//http://stackoverflow.com/questions/10535549/highchart-stock-tooltip-formatter-for-both-series-and-flags
							return '<b>'+ roundVal(this.x) +'</b>: '+ roundVal(this.y);
            			}
						,
						useHTML: true
                    }
                }
				/*
				series: {
					cursor: 'pointer',
					events: {
						click: function() {
							alert('You just clicked the graph');
						}
					}
				}
				*/
			},
			//*/
			
            series: [
				//categories: ['Chemo Therapy', 'Chemo therapy & Radiation', 'Hormonal Therapy', 'Radiation', 'Surgery', 'Surgery & Radiation', 'None (Active monitorying)']
				
				{	// data for 'Not recommended'
					//name: 'Female',
					//name: 'Not recommended',
					name: 'Chemo Therapy',
					color: 'rgba(223, 83, 83, .5)',
					
					data: 
						(function() {
							var time,
								data = [],
								i;
							/* For old variables 
							for (i = 0; i <= filteredForArrForNotRecommended.length - 1; i++) {
								console.log("filtered1[" + i + "]: " + filteredForArrForNotRecommended[i].survivialTime);
								data.push({
									x: 0 + (Math.random() * 50 + 30)/100 - 0.5,
									y: filteredForArrForNotRecommended[i].survivialTime,
									age: filteredForArrForNotRecommended[i].ageRecode,
									sex: filteredForArrForNotRecommended[i].sex, 
									csSchema: filteredForArrForNotRecommended[i].csSchema, 
									seerRegistry: filteredForArrForNotRecommended[i].seerRegistry, 
									primarySite: filteredForArrForNotRecommended[i].primarySite, 
									histologicType: filteredForArrForNotRecommended[i].histologicType, 
									behaviorCode: filteredForArrForNotRecommended[i].behaviorCode,
									eodSize: filteredForArrForNotRecommended[i].eodSize, 
									eodExtent: filteredForArrForNotRecommended[i].eodExtent, 
									eodNodes: filteredForArrForNotRecommended[i].eodNodes, 
									eodProstate: filteredForArrForNotRecommended[i].eodProstate, 
									rxSummSite: filteredForArrForNotRecommended[i].rxSummSite, 
									reasonNoCancerSurgery: filteredForArrForNotRecommended[i].reasonNoCancerSurgery, 
									radiation: filteredForArrForNotRecommended[i].radiation,
									seerCauseDeath: filteredForArrForNotRecommended[i].seerCauseDeath, 
									survivialTime: filteredForArrForNotRecommended[i].survivialTime, 
									followUpType: filteredForArrForNotRecommended[i].followUpType, 
									codSite: filteredForArrForNotRecommended[i].codSite, 
									seerOtherCauseDeath: filteredForArrForNotRecommended[i].seerOtherCauseDeath, 
									codToSiteRec: filteredForArrForNotRecommended[i].codToSiteRec, 
									vitalStatus: filteredForArrForNotRecommended[i].vitalStatus, 
									diagnosisYear: filteredForArrForNotRecommended[i].diagnosisYear, 
									grade: filteredForArrForNotRecommended[i].grade
									//y: Math.random() * 10 + 5
								});
							}
							*/
							for (i = 0; i <= filteredForArrForChemo.length - 1; i++) {
								//console.log("filtered1[" + i + "]: " + filteredForArrForChemo[i].survivalMonths);
								data.push({
									x: 0 + (Math.random() * 50 + 30)/100 - 0.5,
									y: filteredForArrForChemo[i].survivalMonths,
									anemia: filteredForArrForChemo[i].anemia, 
									bowelDys: filteredForArrForChemo[i].bowelDys, 
									chemo: filteredForArrForChemo[i].chemo, 
									chemoRad: filteredForArrForChemo[i].chemoRad, 
									decLibido: filteredForArrForChemo[i].decLibido,
									disease: filteredForArrForChemo[i].disease, 
									dxAge: filteredForArrForChemo[i].dxAge, 
									dxGrade: filteredForArrForChemo[i].dxGrade, 
									dxYear: filteredForArrForChemo[i].dxYear, 
									erectileDys: filteredForArrForChemo[i].erectileDys,
									fatigue: filteredForArrForChemo[i].fatigue, 
									fatigue: filteredForArrForChemo[i].fatigue,	
									hormonal: filteredForArrForChemo[i].hormonal, 
									hotFlash: filteredForArrForChemo[i].hotFlash, 
									isAlive: filteredForArrForChemo[i].isAlive, 
									nV: filteredForArrForChemo[i].nV, 
									noTreatment: filteredForArrForChemo[i].noTreatment, 
									race: filteredForArrForChemo[i].race, 
									radiation: filteredForArrForChemo[i].radiation, 
									surgRad: filteredForArrForChemo[i].surgRad, 
									surgery: filteredForArrForChemo[i].surgery, 
									treatmentOption: filteredForArrForChemo[i].treatmentOption, 	
									urinaryDys:  filteredForArrForChemo[i].urinaryDys, 
									weightLoss: filteredForArrForChemo[i].weightLoss
									//y: Math.random() * 10 + 5
								});
							}
							
							console.log("data: " + data);
							return data;
						})()
						//[[0, 29], [0, 34], [0, 14], [0, 24], [0, 41]
						  /*
						[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
						[170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
						[172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
						[147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
						[159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
						[174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
						[154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
						[162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6],
						[168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3],
						[167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8],
						[167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3],
						[168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3],
						[156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0],
						[162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7],
						[151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5],
						[164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2],
						[170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8],
						[163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9],
						[161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2],
						[159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4],
						[161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4],
						[171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2],
						[166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
						[159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0],
						[162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
						[172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4],
						[162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5],
						[158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5],
						[167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2],
						[170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2],
						[160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3],
						[166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5],
						[170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4],
						[167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6],
						[160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8],
						[177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1],
						[172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5],
						[175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2],
						[165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6],
						[168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0],
						[162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0],
						[157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9],
						[172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1],
						[161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
						[152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
						[160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
						[167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
						[175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
						[174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
						[156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
						[169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
						[176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]
					*/
						
						
						
					//]
				}
				//*		 
				, {
					//name: 'Male',
					//name: 'Not recommended, contraindicated due to other conditions',
					name: 'Chemo therapy & Radiation',
					color: 'rgba(119, 152, 191, .5)',
					data: (function() {
							var time,
								data = [],
								i;
							/* For old variables
							for (i = 0; i <= filteredForArrForNotRecommendedContraindicated.length - 1; i++) {
								console.log("filtered1[" + i + "]: " + filteredForArrForNotRecommendedContraindicated[i].survivialTime);
								data.push({
									x: 1 + (Math.random() * 50 + 30)/100 - 0.5,//+ (Math.random() * 20 + 50)/100 - 0.5,
									y: filteredForArrForNotRecommendedContraindicated[i].survivialTime,
									age: filteredForArrForNotRecommendedContraindicated[i].ageRecode,
									sex: filteredForArrForNotRecommendedContraindicated[i].sex, 
									csSchema: filteredForArrForNotRecommendedContraindicated[i].csSchema, 
									seerRegistry: filteredForArrForNotRecommendedContraindicated[i].seerRegistry, 
									primarySite: filteredForArrForNotRecommendedContraindicated[i].primarySite, 
									histologicType: filteredForArrForNotRecommendedContraindicated[i].histologicType, 
									behaviorCode: filteredForArrForNotRecommendedContraindicated[i].behaviorCode,
									eodSize: filteredForArrForNotRecommendedContraindicated[i].eodSize, 
									eodExtent: filteredForArrForNotRecommendedContraindicated[i].eodExtent, 
									eodNodes: filteredForArrForNotRecommendedContraindicated[i].eodNodes, 
									eodProstate: filteredForArrForNotRecommendedContraindicated[i].eodProstate, 
									rxSummSite: filteredForArrForNotRecommendedContraindicated[i].rxSummSite, 
									reasonNoCancerSurgery: filteredForArrForNotRecommendedContraindicated[i].reasonNoCancerSurgery, 
									radiation: filteredForArrForNotRecommendedContraindicated[i].radiation,
									seerCauseDeath: filteredForArrForNotRecommendedContraindicated[i].seerCauseDeath, 
									survivialTime: filteredForArrForNotRecommendedContraindicated[i].survivialTime, 
									followUpType: filteredForArrForNotRecommendedContraindicated[i].followUpType, 
									codSite: filteredForArrForNotRecommendedContraindicated[i].codSite, 
									seerOtherCauseDeath: filteredForArrForNotRecommendedContraindicated[i].seerOtherCauseDeath, 
									codToSiteRec: filteredForArrForNotRecommendedContraindicated[i].codToSiteRec, 
									vitalStatus: filteredForArrForNotRecommendedContraindicated[i].vitalStatus, 
									diagnosisYear: filteredForArrForNotRecommendedContraindicated[i].diagnosisYear, 
									grade: filteredForArrForNotRecommendedContraindicated[i].grade
									//y: Math.random() * 10 + 5
								});
							}
							*/
						//*
							for (i = 0; i <= filteredForArrForChemoRad.length - 1; i++) {
								//console.log("filtered1[" + i + "]: " + filteredForArrForChemoRad[i].survivalMonths);
								data.push({
									x: 1 + (Math.random() * 50 + 30)/100 - 0.5,
									y: filteredForArrForChemoRad[i].survivalMonths,
									anemia: filteredForArrForChemoRad[i].anemia, 
									bowelDys: filteredForArrForChemoRad[i].bowelDys, 
									chemo: filteredForArrForChemoRad[i].chemo, 
									chemoRad: filteredForArrForChemoRad[i].chemoRad, 
									decLibido: filteredForArrForChemoRad[i].decLibido,
									disease: filteredForArrForChemoRad[i].disease, 
									dxAge: filteredForArrForChemoRad[i].dxAge, 
									dxGrade: filteredForArrForChemoRad[i].dxGrade, 
									dxYear: filteredForArrForChemoRad[i].dxYear, 
									erectileDys: filteredForArrForChemoRad[i].erectileDys,
									fatigue: filteredForArrForChemoRad[i].fatigue, 
									fatigue: filteredForArrForChemoRad[i].fatigue,	
									hormonal: filteredForArrForChemoRad[i].hormonal, 
									hotFlash: filteredForArrForChemoRad[i].hotFlash, 
									isAlive: filteredForArrForChemoRad[i].isAlive, 
									nV: filteredForArrForChemoRad[i].nV, 
									noTreatment: filteredForArrForChemoRad[i].noTreatment, 
									race: filteredForArrForChemoRad[i].race, 
									radiation: filteredForArrForChemoRad[i].radiation, 
									surgRad: filteredForArrForChemoRad[i].surgRad, 
									surgery: filteredForArrForChemoRad[i].surgery, 
									treatmentOption: filteredForArrForChemoRad[i].treatmentOption, 	
									urinaryDys:  filteredForArrForChemoRad[i].urinaryDys, 
									weightLoss: filteredForArrForChemoRad[i].weightLoss
									//y: Math.random() * 10 + 5
								});
							}
							console.log("data: " + data);
							return data;
						})()
						
					// [[1, 29], [1, 44], [1, 19], [1, 4], [1, 41]
					/*data: [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
						[181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6],
						[180.0, 76.6], [177.8, 83.6], [192.0, 90.0], [176.0, 74.6], [174.0, 71.0],
						[184.0, 79.6], [192.7, 93.8], [171.5, 70.0], [173.0, 72.4], [176.0, 85.9],
						[176.0, 78.8], [180.5, 77.8], [172.7, 66.2], [176.0, 86.4], [173.5, 81.8],
						[178.0, 89.6], [180.3, 82.8], [180.3, 76.4], [164.5, 63.2], [173.0, 60.9],
						[183.5, 74.8], [175.5, 70.0], [188.0, 72.4], [189.2, 84.1], [172.8, 69.1],
						[170.0, 59.5], [182.0, 67.2], [170.0, 61.3], [177.8, 68.6], [184.2, 80.1],
						[186.7, 87.8], [171.4, 84.7], [172.7, 73.4], [175.3, 72.1], [180.3, 82.6],
						[182.9, 88.7], [188.0, 84.1], [177.2, 94.1], [172.1, 74.9], [167.0, 59.1],
						[169.5, 75.6], [174.0, 86.2], [172.7, 75.3], [182.2, 87.1], [164.1, 55.2],
						[163.0, 57.0], [171.5, 61.4], [184.2, 76.8], [174.0, 86.8], [174.0, 72.2],
						[177.0, 71.6], [186.0, 84.8], [167.0, 68.2], [171.8, 66.1], [182.0, 72.0],
						[167.0, 64.6], [177.8, 74.8], [164.5, 70.0], [192.0, 101.6], [175.5, 63.2],
						[171.2, 79.1], [181.6, 78.9], [167.4, 67.7], [181.1, 66.0], [177.0, 68.2],
						[174.5, 63.9], [177.5, 72.0], [170.5, 56.8], [182.4, 74.5], [197.1, 90.9],
						[180.1, 93.0], [175.5, 80.9], [180.6, 72.7], [184.4, 68.0], [175.5, 70.9],
						[180.6, 72.5], [177.0, 72.5], [177.1, 83.4], [181.6, 75.5], [176.5, 73.0],
						[175.0, 70.2], [174.0, 73.4], [165.1, 70.5], [177.0, 68.9], [192.0, 102.3],
						[176.5, 68.4], [169.4, 65.9], [182.1, 75.7], [179.8, 84.5], [175.3, 87.7],
						[184.9, 86.4], [177.3, 73.2], [167.4, 53.9], [178.1, 72.0], [168.9, 55.5],
						[157.2, 58.4], [180.3, 83.2], [170.2, 72.7], [177.8, 64.1], [172.7, 72.3],
						[165.1, 65.0], [186.7, 86.4], [165.1, 65.0], [174.0, 88.6], [175.3, 84.1],
						[185.4, 66.8], [177.8, 75.5], [180.3, 93.2], [180.3, 82.7], [177.8, 58.0],
						[177.8, 79.5], [177.8, 78.6], [177.8, 71.8], [177.8, 116.4], [163.8, 72.2],
						[188.0, 83.6], [198.1, 85.5], [175.3, 90.9], [166.4, 85.9], [190.5, 89.1],
						[166.4, 75.0], [177.8, 77.7], [179.7, 86.4], [172.7, 90.9], [190.5, 73.6],
						[185.4, 76.4], [168.9, 69.1], [167.6, 84.5], [175.3, 64.5], [170.2, 69.1],
						[190.5, 108.6], [177.8, 86.4], [190.5, 80.9], [177.8, 87.7], [184.2, 94.5],
						[176.5, 80.2], [177.8, 72.0], [180.3, 71.4], [171.4, 72.7], [172.7, 84.1],
						[172.7, 76.8], [177.8, 63.6], [177.8, 80.9], [182.9, 80.9], [170.2, 85.5],
						[167.6, 68.6], [175.3, 67.7], [165.1, 66.4], [185.4, 102.3], [181.6, 70.5],
						[172.7, 95.9], [190.5, 84.1], [179.1, 87.3], [175.3, 71.8], [170.2, 65.9],
						[193.0, 95.9], [171.4, 91.4], [177.8, 81.8], [177.8, 96.8], [167.6, 69.1],
						[167.6, 82.7], [180.3, 75.5], [182.9, 79.5], [176.5, 73.6], [186.7, 91.8],
						[188.0, 84.1], [188.0, 85.9], [177.8, 81.8], [174.0, 82.5], [177.8, 80.5],
						[171.4, 70.0], [185.4, 81.8], [185.4, 84.1], [188.0, 90.5], [188.0, 91.4],
						[182.9, 89.1], [176.5, 85.0], [175.3, 69.1], [175.3, 73.6], [188.0, 80.5],
						[188.0, 82.7], [175.3, 86.4], [170.5, 67.7], [179.1, 92.7], [177.8, 93.6],
						[175.3, 70.9], [182.9, 75.0], [170.8, 93.2], [188.0, 93.2], [180.3, 77.7],
						[177.8, 61.4], [185.4, 94.1], [168.9, 75.0], [185.4, 83.6], [180.3, 85.5],
						[174.0, 73.9], [167.6, 66.8], [182.9, 87.3], [160.0, 72.3], [180.3, 88.6],
						[167.6, 75.5], [186.7, 101.4], [175.3, 91.1], [175.3, 67.3], [175.9, 77.7],
						[175.3, 81.8], [179.1, 75.5], [181.6, 84.5], [177.8, 76.6], [182.9, 85.0],
						[177.8, 102.5], [184.2, 77.3], [179.1, 71.8], [176.5, 87.9], [188.0, 94.3],
						[174.0, 70.9], [167.6, 64.5], [170.2, 77.3], [167.6, 72.3], [188.0, 87.3],
						[174.0, 80.0], [176.5, 82.3], [180.3, 73.6], [167.6, 74.1], [188.0, 85.9],
						[180.3, 73.2], [167.6, 76.3], [183.0, 65.9], [183.0, 90.9], [179.1, 89.1],
						[170.2, 62.3], [177.8, 82.7], [179.1, 79.1], [190.5, 98.2], [177.8, 84.1],
						[180.3, 83.2], [180.3, 83.2]]*/
					//]
				
				}
				,{	// data for '
					//name: 'Female',
					//name: 'Recommended but not performed, patient refused',
					name: 'Hormonal Therapy',
					color: 'rgba(50, 205, 50, .5)',
					
					data: 
						(function() {
							var time,
								data = [],
								i;
							
							/* For old variables 
							for (i = 0; i <= filteredForArrForRecommendedNotPerformedPatientRefused.length - 1; i++) {
								console.log("filtered1[" + i + "]: " + filteredForArrForRecommendedNotPerformedPatientRefused[i].survivialTime);
								data.push({
									x: 2 + (Math.random() * 50 + 30)/100 - 0.5,// + (Math.random() * 20 + 50)/100 - 0.5,
									y: filteredForArrForRecommendedNotPerformedPatientRefused[i].survivialTime,
									age: filteredForArrForRecommendedNotPerformedPatientRefused[i].ageRecode,
									sex: filteredForArrForRecommendedNotPerformedPatientRefused[i].sex, 
									csSchema: filteredForArrForRecommendedNotPerformedPatientRefused[i].csSchema, 
									seerRegistry: filteredForArrForRecommendedNotPerformedPatientRefused[i].seerRegistry, 
									primarySite: filteredForArrForRecommendedNotPerformedPatientRefused[i].primarySite, 
									histologicType: filteredForArrForRecommendedNotPerformedPatientRefused[i].histologicType, 
									behaviorCode: filteredForArrForRecommendedNotPerformedPatientRefused[i].behaviorCode,
									eodSize: filteredForArrForRecommendedNotPerformedPatientRefused[i].eodSize, 
									eodExtent: filteredForArrForRecommendedNotPerformedPatientRefused[i].eodExtent, 
									eodNodes: filteredForArrForRecommendedNotPerformedPatientRefused[i].eodNodes, 
									eodProstate: filteredForArrForRecommendedNotPerformedPatientRefused[i].eodProstate, 
									rxSummSite: filteredForArrForRecommendedNotPerformedPatientRefused[i].rxSummSite, 
									reasonNoCancerSurgery: filteredForArrForRecommendedNotPerformedPatientRefused[i].reasonNoCancerSurgery, 
									radiation: filteredForArrForRecommendedNotPerformedPatientRefused[i].radiation,
									seerCauseDeath: filteredForArrForRecommendedNotPerformedPatientRefused[i].seerCauseDeath, 
									survivialTime: filteredForArrForRecommendedNotPerformedPatientRefused[i].survivialTime, 
									followUpType: filteredForArrForRecommendedNotPerformedPatientRefused[i].followUpType, 
									codSite: filteredForArrForRecommendedNotPerformedPatientRefused[i].codSite, 
									seerOtherCauseDeath: filteredForArrForRecommendedNotPerformedPatientRefused[i].seerOtherCauseDeath, 
									codToSiteRec: filteredForArrForRecommendedNotPerformedPatientRefused[i].codToSiteRec, 
									vitalStatus: filteredForArrForRecommendedNotPerformedPatientRefused[i].vitalStatus, 
									diagnosisYear: filteredForArrForRecommendedNotPerformedPatientRefused[i].diagnosisYear, 
									grade: filteredForArrForRecommendedNotPerformedPatientRefused[i].grade
									//y: Math.random() * 10 + 5
								});
							}
							*/
							for (i = 0; i <= filteredForArrForHormonal.length - 1; i++) {
								//console.log("filtered1[" + i + "]: " + filteredForArrForHormonal[i].survivalMonths);
								data.push({
									x: 2 + (Math.random() * 50 + 30)/100 - 0.5,
									y: filteredForArrForHormonal[i].survivalMonths,
									anemia: filteredForArrForHormonal[i].anemia, 
									bowelDys: filteredForArrForHormonal[i].bowelDys, 
									chemo: filteredForArrForHormonal[i].chemo, 
									chemoRad: filteredForArrForHormonal[i].chemoRad, 
									decLibido: filteredForArrForHormonal[i].decLibido,
									disease: filteredForArrForHormonal[i].disease, 
									dxAge: filteredForArrForHormonal[i].dxAge, 
									dxGrade: filteredForArrForHormonal[i].dxGrade, 
									dxYear: filteredForArrForHormonal[i].dxYear, 
									erectileDys: filteredForArrForHormonal[i].erectileDys,
									fatigue: filteredForArrForHormonal[i].fatigue, 
									fatigue: filteredForArrForHormonal[i].fatigue,	
									hormonal: filteredForArrForHormonal[i].hormonal, 
									hotFlash: filteredForArrForHormonal[i].hotFlash, 
									isAlive: filteredForArrForHormonal[i].isAlive, 
									nV: filteredForArrForHormonal[i].nV, 
									noTreatment: filteredForArrForHormonal[i].noTreatment, 
									race: filteredForArrForHormonal[i].race, 
									radiation: filteredForArrForHormonal[i].radiation, 
									surgRad: filteredForArrForHormonal[i].surgRad, 
									surgery: filteredForArrForHormonal[i].surgery, 
									treatmentOption: filteredForArrForHormonal[i].treatmentOption, 	
									urinaryDys:  filteredForArrForHormonal[i].urinaryDys, 
									weightLoss: filteredForArrForHormonal[i].weightLoss
									//y: Math.random() * 10 + 5
								});
							}
							
							console.log("data: " + data);
							return data;
						})()
				}
				,{	// data for '
					//name: 'Female',
					//name: 'Recommended but not performed, unknown reason',
					name: 'Radiation',
					color: 'rgba(255, 215, 0, .5)',
					
					data: 
						(function() {
							var time,
								data = [],
								i;
							
							/* For old variables 
							for (i = 0; i <= filteredForArrForRecommendedNotPerformedUnknownReason.length - 1; i++) {
								console.log("filtered1[" + i + "]: " + filteredForArrForRecommendedNotPerformedUnknownReason[i].survivialTime);
								data.push({
									x: 3 + (Math.random() * 50 + 30)/100 - 0.5,//+ (Math.random() * 20 + 50)/100 - 0.5,
									y: filteredForArrForRecommendedNotPerformedUnknownReason[i].survivialTime,
									age: filteredForArrForRecommendedNotPerformedUnknownReason[i].ageRecode,
									sex: filteredForArrForRecommendedNotPerformedUnknownReason[i].sex, 
									csSchema: filteredForArrForRecommendedNotPerformedUnknownReason[i].csSchema, 
									seerRegistry: filteredForArrForRecommendedNotPerformedUnknownReason[i].seerRegistry, 
									primarySite: filteredForArrForRecommendedNotPerformedUnknownReason[i].primarySite, 
									histologicType: filteredForArrForRecommendedNotPerformedUnknownReason[i].histologicType, 
									behaviorCode: filteredForArrForRecommendedNotPerformedUnknownReason[i].behaviorCode,
									eodSize: filteredForArrForRecommendedNotPerformedUnknownReason[i].eodSize, 
									eodExtent: filteredForArrForRecommendedNotPerformedUnknownReason[i].eodExtent, 
									eodNodes: filteredForArrForRecommendedNotPerformedUnknownReason[i].eodNodes, 
									eodProstate: filteredForArrForRecommendedNotPerformedUnknownReason[i].eodProstate, 
									rxSummSite: filteredForArrForRecommendedNotPerformedUnknownReason[i].rxSummSite, 
									reasonNoCancerSurgery: filteredForArrForRecommendedNotPerformedUnknownReason[i].reasonNoCancerSurgery, 
									radiation: filteredForArrForRecommendedNotPerformedUnknownReason[i].radiation,
									seerCauseDeath: filteredForArrForRecommendedNotPerformedUnknownReason[i].seerCauseDeath, 
									survivialTime: filteredForArrForRecommendedNotPerformedUnknownReason[i].survivialTime, 
									followUpType: filteredForArrForRecommendedNotPerformedUnknownReason[i].followUpType, 
									codSite: filteredForArrForRecommendedNotPerformedUnknownReason[i].codSite, 
									seerOtherCauseDeath: filteredForArrForRecommendedNotPerformedUnknownReason[i].seerOtherCauseDeath, 
									codToSiteRec: filteredForArrForRecommendedNotPerformedUnknownReason[i].codToSiteRec, 
									vitalStatus: filteredForArrForRecommendedNotPerformedUnknownReason[i].vitalStatus, 
									diagnosisYear: filteredForArrForRecommendedNotPerformedUnknownReason[i].diagnosisYear, 
									grade: filteredForArrForRecommendedNotPerformedUnknownReason[i].grade
									//y: Math.random() * 10 + 5
								});
							}
							*/
							
							for (i = 0; i <= filteredForArrForRadiation.length - 1; i++) {
								//console.log("filtered1[" + i + "]: " + filteredForArrForRadiation[i].survivalMonths);
								data.push({
									x: 3 + (Math.random() * 50 + 30)/100 - 0.5,
									y: filteredForArrForRadiation[i].survivalMonths,
									anemia: filteredForArrForRadiation[i].anemia, 
									bowelDys: filteredForArrForRadiation[i].bowelDys, 
									chemo: filteredForArrForRadiation[i].chemo, 
									chemoRad: filteredForArrForRadiation[i].chemoRad, 
									decLibido: filteredForArrForRadiation[i].decLibido,
									disease: filteredForArrForRadiation[i].disease, 
									dxAge: filteredForArrForRadiation[i].dxAge, 
									dxGrade: filteredForArrForRadiation[i].dxGrade, 
									dxYear: filteredForArrForRadiation[i].dxYear, 
									erectileDys: filteredForArrForRadiation[i].erectileDys,
									fatigue: filteredForArrForRadiation[i].fatigue, 
									fatigue: filteredForArrForRadiation[i].fatigue,	
									hormonal: filteredForArrForRadiation[i].hormonal, 
									hotFlash: filteredForArrForRadiation[i].hotFlash, 
									isAlive: filteredForArrForRadiation[i].isAlive, 
									nV: filteredForArrForRadiation[i].nV, 
									noTreatment: filteredForArrForRadiation[i].noTreatment, 
									race: filteredForArrForRadiation[i].race, 
									radiation: filteredForArrForRadiation[i].radiation, 
									surgRad: filteredForArrForRadiation[i].surgRad, 
									surgery: filteredForArrForRadiation[i].surgery, 
									treatmentOption: filteredForArrForRadiation[i].treatmentOption, 	
									urinaryDys:  filteredForArrForRadiation[i].urinaryDys, 
									weightLoss: filteredForArrForRadiation[i].weightLoss
									//y: Math.random() * 10 + 5
								});
							}
							
							console.log("data: " + data);
							return data;
						})()
				}
				,{	// data for '
					//name: 'Female',
					//name: 'Recommended, unknown if performed',
					name: 'Surgery',
					color: 'rgba(199, 21, 133, .5)',
					
					data: 
						(function() {
							var time,
								data = [],
								i;
							
							/* For old variables 
							for (i = 0; i <= filteredForArrForRecommendedUnknownPerformed.length - 1; i++) {
								console.log("filtered1[" + i + "]: " + filteredForArrForRecommendedUnknownPerformed[i].survivialTime);
								data.push({
									x: 4 + (Math.random() * 50 + 30)/100 - 0.5,//+ (Math.random() * 20 + 50)/100 - 0.5,
									y: filteredForArrForRecommendedUnknownPerformed[i].survivialTime,
									age: filteredForArrForRecommendedUnknownPerformed[i].ageRecode,
									sex: filteredForArrForRecommendedUnknownPerformed[i].sex, 
									csSchema: filteredForArrForRecommendedUnknownPerformed[i].csSchema, 
									seerRegistry: filteredForArrForRecommendedUnknownPerformed[i].seerRegistry, 
									primarySite: filteredForArrForRecommendedUnknownPerformed[i].primarySite, 
									histologicType: filteredForArrForRecommendedUnknownPerformed[i].histologicType, 
									behaviorCode: filteredForArrForRecommendedUnknownPerformed[i].behaviorCode,
									eodSize: filteredForArrForRecommendedUnknownPerformed[i].eodSize, 
									eodExtent: filteredForArrForRecommendedUnknownPerformed[i].eodExtent, 
									eodNodes: filteredForArrForRecommendedUnknownPerformed[i].eodNodes, 
									eodProstate: filteredForArrForRecommendedUnknownPerformed[i].eodProstate, 
									rxSummSite: filteredForArrForRecommendedUnknownPerformed[i].rxSummSite, 
									reasonNoCancerSurgery: filteredForArrForRecommendedUnknownPerformed[i].reasonNoCancerSurgery, 
									radiation: filteredForArrForRecommendedUnknownPerformed[i].radiation,
									seerCauseDeath: filteredForArrForRecommendedUnknownPerformed[i].seerCauseDeath, 
									survivialTime: filteredForArrForRecommendedUnknownPerformed[i].survivialTime, 
									followUpType: filteredForArrForRecommendedUnknownPerformed[i].followUpType, 
									codSite: filteredForArrForRecommendedUnknownPerformed[i].codSite, 
									seerOtherCauseDeath: filteredForArrForRecommendedUnknownPerformed[i].seerOtherCauseDeath, 
									codToSiteRec: filteredForArrForRecommendedUnknownPerformed[i].codToSiteRec, 
									vitalStatus: filteredForArrForRecommendedUnknownPerformed[i].vitalStatus, 
									diagnosisYear: filteredForArrForRecommendedUnknownPerformed[i].diagnosisYear, 
									grade: filteredForArrForRecommendedUnknownPerformed[i].grade
									//y: Math.random() * 10 + 5
								});
							}
							*/
							for (i = 0; i <= filteredForArrForSurgery.length - 1; i++) {
								//console.log("filtered1[" + i + "]: " + filteredForArrForSurgery[i].survivalMonths);
								data.push({
									x: 4 + (Math.random() * 50 + 30)/100 - 0.5,
									y: filteredForArrForSurgery[i].survivalMonths,
									anemia: filteredForArrForSurgery[i].anemia, 
									bowelDys: filteredForArrForSurgery[i].bowelDys, 
									chemo: filteredForArrForSurgery[i].chemo, 
									chemoRad: filteredForArrForSurgery[i].chemoRad, 
									decLibido: filteredForArrForSurgery[i].decLibido,
									disease: filteredForArrForSurgery[i].disease, 
									dxAge: filteredForArrForSurgery[i].dxAge, 
									dxGrade: filteredForArrForSurgery[i].dxGrade, 
									dxYear: filteredForArrForSurgery[i].dxYear, 
									erectileDys: filteredForArrForSurgery[i].erectileDys,
									fatigue: filteredForArrForSurgery[i].fatigue, 
									fatigue: filteredForArrForSurgery[i].fatigue,	
									hormonal: filteredForArrForSurgery[i].hormonal, 
									hotFlash: filteredForArrForSurgery[i].hotFlash, 
									isAlive: filteredForArrForSurgery[i].isAlive, 
									nV: filteredForArrForSurgery[i].nV, 
									noTreatment: filteredForArrForSurgery[i].noTreatment, 
									race: filteredForArrForSurgery[i].race, 
									radiation: filteredForArrForSurgery[i].radiation, 
									surgRad: filteredForArrForSurgery[i].surgRad, 
									surgery: filteredForArrForSurgery[i].surgery, 
									treatmentOption: filteredForArrForSurgery[i].treatmentOption, 	
									urinaryDys:  filteredForArrForSurgery[i].urinaryDys, 
									weightLoss: filteredForArrForSurgery[i].weightLoss
									//y: Math.random() * 10 + 5
								});
							}
							
							console.log("data: " + data);
							return data;
						})()
				}
				,{	// data for '
					//name: 'Female',
					//name: 'Surgery performed',
					name: 'Surgery & Radiation',
					color: 'rgba(148, 0, 211, .5)',
					
					data: 
						(function() {
							var time,
								data = [],
								i;
							
							/* For old variables 
							for (i = 0; i <= filteredForArrForSurgeryPerformed.length - 1; i++) {
								console.log("filtered1[" + i + "]: " + filteredForArrForSurgeryPerformed[i].survivialTime);
								data.push({
									x: 5 + (Math.random() * 50 + 30)/100 - 0.5,//+ (Math.random() * 20 + 50)/100 - 0.5,
									y: filteredForArrForSurgeryPerformed[i].survivialTime,
									age: filteredForArrForSurgeryPerformed[i].ageRecode,
									sex: filteredForArrForSurgeryPerformed[i].sex, 
									csSchema: filteredForArrForSurgeryPerformed[i].csSchema, 
									seerRegistry: filteredForArrForSurgeryPerformed[i].seerRegistry, 
									primarySite: filteredForArrForSurgeryPerformed[i].primarySite, 
									histologicType: filteredForArrForSurgeryPerformed[i].histologicType, 
									behaviorCode: filteredForArrForSurgeryPerformed[i].behaviorCode,
									eodSize: filteredForArrForSurgeryPerformed[i].eodSize, 
									eodExtent: filteredForArrForSurgeryPerformed[i].eodExtent, 
									eodNodes: filteredForArrForSurgeryPerformed[i].eodNodes, 
									eodProstate: filteredForArrForSurgeryPerformed[i].eodProstate, 
									rxSummSite: filteredForArrForSurgeryPerformed[i].rxSummSite, 
									reasonNoCancerSurgery: filteredForArrForSurgeryPerformed[i].reasonNoCancerSurgery, 
									radiation: filteredForArrForSurgeryPerformed[i].radiation,
									seerCauseDeath: filteredForArrForSurgeryPerformed[i].seerCauseDeath, 
									survivialTime: filteredForArrForSurgeryPerformed[i].survivialTime, 
									followUpType: filteredForArrForSurgeryPerformed[i].followUpType, 
									codSite: filteredForArrForSurgeryPerformed[i].codSite, 
									seerOtherCauseDeath: filteredForArrForSurgeryPerformed[i].seerOtherCauseDeath, 
									codToSiteRec: filteredForArrForSurgeryPerformed[i].codToSiteRec, 
									vitalStatus: filteredForArrForSurgeryPerformed[i].vitalStatus, 
									diagnosisYear: filteredForArrForSurgeryPerformed[i].diagnosisYear, 
									grade: filteredForArrForSurgeryPerformed[i].grade
									//y: Math.random() * 10 + 5
								});
							}
							*/
							
							for (i = 0; i <= filteredForArrForSurgRad.length - 1; i++) {
								//console.log("filtered1[" + i + "]: " + filteredForArrForSurgRad[i].survivalMonths);
								data.push({
									x: 5 + (Math.random() * 50 + 30)/100 - 0.5,
									y: filteredForArrForSurgRad[i].survivalMonths,
									anemia: filteredForArrForSurgRad[i].anemia, 
									bowelDys: filteredForArrForSurgRad[i].bowelDys, 
									chemo: filteredForArrForSurgRad[i].chemo, 
									chemoRad: filteredForArrForSurgRad[i].chemoRad, 
									decLibido: filteredForArrForSurgRad[i].decLibido,
									disease: filteredForArrForSurgRad[i].disease, 
									dxAge: filteredForArrForSurgRad[i].dxAge, 
									dxGrade: filteredForArrForSurgRad[i].dxGrade, 
									dxYear: filteredForArrForSurgRad[i].dxYear, 
									erectileDys: filteredForArrForSurgRad[i].erectileDys,
									fatigue: filteredForArrForSurgRad[i].fatigue, 
									fatigue: filteredForArrForSurgRad[i].fatigue,	
									hormonal: filteredForArrForSurgRad[i].hormonal, 
									hotFlash: filteredForArrForSurgRad[i].hotFlash, 
									isAlive: filteredForArrForSurgRad[i].isAlive, 
									nV: filteredForArrForSurgRad[i].nV, 
									noTreatment: filteredForArrForSurgRad[i].noTreatment, 
									race: filteredForArrForSurgRad[i].race, 
									radiation: filteredForArrForSurgRad[i].radiation, 
									surgRad: filteredForArrForSurgRad[i].surgRad, 
									surgery: filteredForArrForSurgRad[i].surgery, 
									treatmentOption: filteredForArrForSurgRad[i].treatmentOption, 	
									urinaryDys:  filteredForArrForSurgRad[i].urinaryDys, 
									weightLoss: filteredForArrForSurgRad[i].weightLoss
									//y: Math.random() * 10 + 5
								});
							}
							console.log("data: " + data);
							return data;
						})()
				}
				,{	// data for '
					//name: 'Female',
					//name: 'Unknown; death certificate or autopsy only case',
					name: 'No-Treatment',
					color: 'rgba(106, 90, 205, .5)',
					
					data: 
						(function() {
							var time,
								data = [],
								i;
							/* For old variables 
							for (i = 0; i <= filteredForArrForUnknownDeathCertificate.length - 1; i++) {
								console.log("filtered1[" + i + "]: " + filteredForArrForUnknownDeathCertificate[i].survivialTime);
								data.push({
									x: 6 + (Math.random() * 50 + 30)/100 - 0.5,//+ (Math.random() * 20 + 50)/100 - 0.5,
									y: filteredForArrForUnknownDeathCertificate[i].survivialTime,
									age: filteredForArrForUnknownDeathCertificate[i].ageRecode,
									sex: filteredForArrForUnknownDeathCertificate[i].sex, 
									csSchema: filteredForArrForUnknownDeathCertificate[i].csSchema, 
									seerRegistry: filteredForArrForUnknownDeathCertificate[i].seerRegistry, 
									primarySite: filteredForArrForUnknownDeathCertificate[i].primarySite, 
									histologicType: filteredForArrForUnknownDeathCertificate[i].histologicType, 
									behaviorCode: filteredForArrForUnknownDeathCertificate[i].behaviorCode,
									eodSize: filteredForArrForUnknownDeathCertificate[i].eodSize, 
									eodExtent: filteredForArrForUnknownDeathCertificate[i].eodExtent, 
									eodNodes: filteredForArrForUnknownDeathCertificate[i].eodNodes, 
									eodProstate: filteredForArrForUnknownDeathCertificate[i].eodProstate, 
									rxSummSite: filteredForArrForUnknownDeathCertificate[i].rxSummSite, 
									reasonNoCancerSurgery: filteredForArrForUnknownDeathCertificate[i].reasonNoCancerSurgery, 
									radiation: filteredForArrForUnknownDeathCertificate[i].radiation,
									seerCauseDeath: filteredForArrForUnknownDeathCertificate[i].seerCauseDeath, 
									survivialTime: filteredForArrForUnknownDeathCertificate[i].survivialTime, 
									followUpType: filteredForArrForUnknownDeathCertificate[i].followUpType, 
									codSite: filteredForArrForUnknownDeathCertificate[i].codSite, 
									seerOtherCauseDeath: filteredForArrForUnknownDeathCertificate[i].seerOtherCauseDeath, 
									codToSiteRec: filteredForArrForUnknownDeathCertificate[i].codToSiteRec, 
									vitalStatus: filteredForArrForUnknownDeathCertificate[i].vitalStatus, 
									diagnosisYear: filteredForArrForUnknownDeathCertificate[i].diagnosisYear, 
									grade: filteredForArrForUnknownDeathCertificate[i].grade
									//y: Math.random() * 10 + 5
								});
							}
							*/
							for (i = 0; i <= filteredForArrForNoTreatment.length - 1; i++) {
								//console.log("filtered1[" + i + "]: " + filteredForArrForNoTreatment[i].survivalMonths);
								data.push({
									x: 6 + (Math.random() * 50 + 30)/100 - 0.5,
									y: filteredForArrForNoTreatment[i].survivalMonths,
									anemia: filteredForArrForNoTreatment[i].anemia, 
									bowelDys: filteredForArrForNoTreatment[i].bowelDys, 
									chemo: filteredForArrForNoTreatment[i].chemo, 
									chemoRad: filteredForArrForNoTreatment[i].chemoRad, 
									decLibido: filteredForArrForNoTreatment[i].decLibido,
									disease: filteredForArrForNoTreatment[i].disease, 
									dxAge: filteredForArrForNoTreatment[i].dxAge, 
									dxGrade: filteredForArrForNoTreatment[i].dxGrade, 
									dxYear: filteredForArrForNoTreatment[i].dxYear, 
									erectileDys: filteredForArrForNoTreatment[i].erectileDys,
									fatigue: filteredForArrForNoTreatment[i].fatigue, 
									fatigue: filteredForArrForNoTreatment[i].fatigue,	
									hormonal: filteredForArrForNoTreatment[i].hormonal, 
									hotFlash: filteredForArrForNoTreatment[i].hotFlash, 
									isAlive: filteredForArrForNoTreatment[i].isAlive, 
									nV: filteredForArrForNoTreatment[i].nV, 
									noTreatment: filteredForArrForNoTreatment[i].noTreatment, 
									race: filteredForArrForNoTreatment[i].race, 
									radiation: filteredForArrForNoTreatment[i].radiation, 
									surgRad: filteredForArrForNoTreatment[i].surgRad, 
									surgery: filteredForArrForNoTreatment[i].surgery, 
									treatmentOption: filteredForArrForNoTreatment[i].treatmentOption, 	
									urinaryDys:  filteredForArrForNoTreatment[i].urinaryDys, 
									weightLoss: filteredForArrForNoTreatment[i].weightLoss
									//y: Math.random() * 10 + 5
								});
							}
							
							console.log("data: " + data);
							return data;
						})()
				}//*/
			]
	
        });
	
    
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

/** -------------------------------------------------------------------------------------------- 
 * function to parse Json using jQuery getJSON function
 --------------------------------------------------------------------------------------------*/
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
		
		//console.log("success" + tmp1);			// sequence 2
		//console.log("success" + users);			// sequence 2
		
		var html = generateTable(tmp1);
		//window.location='decisionspace.html';
		$('#result3').empty();
		$('#result3').html(html);
		//window.location='decisionspace.html';
		
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
	/*
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
	*/
	
	if(data[0].constructor === Object) {
		
		for(var row in data) {
			html += '<tr>\r\n';
			
			for(var item in data[row]) {
				//html += '<td>' + item + ':' + data[row][item] + '</td>\r\n';
				html += '<td>' + data[row][item] + '</td>\r\n';
			}
			html += '</tr>\r\n';
		}
	}
	
	return html;
}