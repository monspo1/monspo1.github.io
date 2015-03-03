/** ------------------------------------------------------------------------------------
 * Developed by Sung Pil Moon 
 * Any technical qeustion, send me to monspo1@gmail.com
 * Main project operated by collaboration between the MITRE research corporation 
 * 		& Grappa Lab, Indiana University, Indianapolis.
 * Data source: SEER data 
 * Main programming languages & libraries: javascript, Bootstrap, jQuery, highchart, ...
 
 * Last modification: 4/5/2013
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
var	filteredArrForSideEffect = [];
var	filteredArrForSideEffect2 = [];

var medianForChemo;
var	medianForRadiation;
var	medianForHormonal;
var	medianForSurgery;
var	medianForChemoRad;
var	medianForSurgRad;
var	medianForNoTreatment;
var isModalEditing = false;
var currentSideEffectSelected = "";


/** -------------------------------------------------------------------------------------------- 
 * function GetReady()
 --------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	
	$('.selectpicker').selectpicker();
	$('.selectPickerForSideEffects').selectpicker();
	$('#alertForPatientInfo').hide();
	
	console.log("0. parsedArray.length: " + parsedArray.length);
	
	$('#checkboxForMedian').click(function() {
		$('.btn-group input[name^="colors"]').each(function(){
			// toggle checkbox
			$(this).prop('checked',!$(this).prop('checked'));
			// toggle class
			$(this).parents('label').toggleClass('active');
		});
	});
	
	
	$('#modalForPatientInfo').click(function() {
		isModalEditing = true;
	});
									
	
});




/** -------------------------------------------------------------------------------------------- 
 * function GoToDSBtnClick()
 --------------------------------------------------------------------------------------------*/
function gotoDSBtnClick(){
	
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
			
		var tempStringForReturningArrayForInlinCheckboxes = "";
		
	
		console.log("slider 1 value: " + $( "#slider-range" ).slider( "values", 0 ) + " | slider 2 value: " + $( "#slider-range" ).slider( "values", 1 ));
		
		console.log("2a. parsedArray.length: " + parsedArray.length);
		
		console.log("tempStringForReturningArrayForInlinCheckboxes: " + tempStringForReturningArrayForInlinCheckboxes);
	
		currentSideEffectSelected = $('#selectPickerForSideEffects').selectpicker('val');
		console.log("currentSideEffectSelected: " + currentSideEffectSelected);
	
		pArray.splice(0, pArray.length);
		//console.log("2b. pArray.length: " + pArray.length);
		
		parsedArray = preParsedArray.filter(function(el){
			return el.race == $('#selectPickerForEthnicityInModal').val();	
		});
		
		
		if($('#inlineCheckbox2')){
			if($('#inlineCheckbox2')[0].checked){
				
				pArrayForDigStage1 = parsedArray.filter(function(el){
				//pArrayForDigStage1 = pArray.filter(function(el){
					return el.dxGrade == "Grade I";
				});		
				
				if(pArray.length == 0){
					pArray = pArrayForDigStage1;
				} else{
					
					pArray = pArray.concat(pArrayForDigStage1);	
				}
				
				console.log("'#inlineCheckbox2')[0].checked | pArray.length: " + pArray.length);
				console.log("pArrayForDigStage1: " + pArrayForDigStage1.length);
			}
			
		}
		
		if($('#inlineCheckbox3')){
			if($('#inlineCheckbox3')[0].checked){
				
				pArrayForDigStage2 = parsedArray.filter(function(el){
				//pArrayForDigStage2 = pArray.filter(function(el){
					return el.dxGrade == "Grade II";
				});						
				
				if(pArray.length == 0){
					pArray = pArrayForDigStage2;
				} else{
					pArray = pArray.concat(pArrayForDigStage2);
				}
				
				console.log("'#inlineCheckbox3')[0].checked | pArray.length: " + pArray.length);
				console.log("pArrayForDigStage2: " + pArrayForDigStage2.length);
			}
		}
		
		if($('#inlineCheckbox4')){
			if($('#inlineCheckbox4')[0].checked){
				
				pArrayForDigStage3 = parsedArray.filter(function(el){
				//pArrayForDigStage3 = pArray.filter(function(el){
					return el.dxGrade == "Grade III";
				});		
				
				if(pArray.length == 0){
					pArray = pArrayForDigStage3;
				} else{
					pArray = pArray.concat(pArrayForDigStage3);
				}
				
				
				console.log("'#inlineCheckbox4')[0].checked | pArray.length: " + pArray.length);
				console.log("pArrayForDigStage3: " + pArrayForDigStage3.length);
			}
		}
		
		if($('#inlineCheckbox5')){
			
			if($('#inlineCheckbox5')[0].checked){
				pArrayForDigStage4 = parsedArray.filter(function(el){
				//pArrayForDigStage4 = pArray.filter(function(el){
					return el.dxGrade == "Grade IV";
				});						
				
				if(pArray.length == 0){
					pArray = pArrayForDigStage4;
				} else{
					pArray = pArray.concat(pArrayForDigStage4);
				}
				
				console.log("'#inlineCheckbox5')[0].checked | pArray.length: " + pArray.length);
				console.log("pArrayForDigStage4: " + pArrayForDigStage4.length);
			}
		}
		console.log("2c. pArray.length: " + pArray.length);
	
		console.log("selectPickerValueForSideEffects: " + localStorage.selectPickerValueForSideEffects);
		drawChartWithSeriesData();
		
		
}

/** -------------------------------------------------------------------------------------------- 
 * function onClick when modifyPatentInfoInModal()
 --------------------------------------------------------------------------------------------*/
function modifyPatientInfoInModal(){
	chart = $('#chart-container').highcharts();
	
	if(chart.series.length > 7){
		if(typeof(chart.series[7].name)!== 'undefined'){
			if(chart.series[7].name == "SideEffect"){	
				chart.series[7].remove();
				console.log("remove series[7] SideEffect");
			}
		}	
		
		else if(typeof(chart.series[7].name)!== 'undefined'){
			if(chart.series[8].name == "SideEffect"){
				//chart.series[8].setData(dataForSideEffect);	
				chart.series[8].remove(true);
				console.log("remove series[8] SideEffect");
			}
		}
	}
	
	if(chart.series.length > 7){
		if(typeof(chart.series[7].name)!== 'undefined'){
			if(chart.series[7].name == "Medians"){	
				chart.series[7].remove();
				console.log("remove series[7] Medians");
			}
		}	
		
		else if(typeof(chart.series[7].name)!== 'undefined'){
			if(chart.series[8].name == "Medians"){
				//chart.series[8].setData(dataForSideEffect);	
				chart.series[8].remove(true);
				console.log("remove series[8] Medians");
			}
		}
	}
	
	$("#ageValueInDS").html('<b>Age:   </b> ' + $('#inputForPatientAgeInModal').val());
	$("#ethnicityValueInDS").html('<b>Ethnicity:   </b> ' + $('#selectPickerForEthnicityInModal').val());
	
	currentSideEffectSelected = "";
	
	
	//parsedArray.splice(0, parsedArray.length);
	parsedArray = preParsedArray.filter(function(el){ 
		return el.race == $('#selectPickerForEthnicityInModal').val();	
	});
	//console.log("parsed" + parsedArray);
	
	//$('#inlineCheckbox2')[0].isChecked = "checked";
	$('#inlineCheckbox2').prop('checked', true);
	$('#inlineCheckbox3').prop('checked', true);
	$('#inlineCheckbox4').prop('checked', true);
	$('#inlineCheckbox5').prop('checked', true);
	
	drawChartWithSeriesData();
	
	$('#modalForPatientInfo').modal('hide');
	isModalEditing = false;
	
}



var hasMedian = false;
var hasSideEffectAlready = false;
var hasSideEffectAlready2 = false;



/** -------------------------------------------------------------------------------------------- 
 * function onClick when modifyPatentInfoInModal()
 --------------------------------------------------------------------------------------------*/
function drawChartWithSeriesData(){
	
	console.log("currentSideEffectSelected: " + currentSideEffectSelected);
	
	//console.log("3a, parsedArray.length: " + pArray.length);
	console.log("3a, parsedArray.length: " + parsedArray.length);
	
	//pArray.splice(0, pArray.length);
	
	var tempDataArrForModal = [];
	
	/*
	
	if($('#inlineCheckbox2')){
		if($('#inlineCheckbox2')[0].checked){
			
			pArrayForDigStage1 = parsedArray.filter(function(el){
				return el.dxGrade == "Grade I";
			});			
			pArray = pArray.concat(pArrayForDigStage1);
			console.log("'#inlineCheckbox2')[0].checked | pArray.length: " + pArray.length);
		}
		
	}
	
	if($('#inlineCheckbox3')){
		if($('#inlineCheckbox3')[0].checked){
			
			pArrayForDigStage2 = parsedArray.filter(function(el){
				return el.dxGrade == "Grade II";
			});						
			pArray = pArray.concat(pArrayForDigStage2);
			console.log("'#inlineCheckbox3')[0].checked | pArray.length: " + pArray.length);
		}
	}
	
	if($('#inlineCheckbox4')){
		if($('#inlineCheckbox4')[0].checked){
			
			pArrayForDigStage3 = parsedArray.filter(function(el){
				return el.dxGrade == "Grade III";
			});		
			var pArray = pArray.concat(pArrayForDigStage3);
			console.log("'#inlineCheckbox4')[0].checked | pArray.length: " + pArray.length);
		}
	}
	
	if($('#inlineCheckbox5')){
		
		if($('#inlineCheckbox5')[0].checked){
			pArrayForDigStage4 = parsedArray.filter(function(el){
				return el.dxGrade == "Grade IV";
			});						
			pArray = pArray.concat(pArrayForDigStage4);
			console.log("'#inlineCheckbox5')[0].checked | pArray.length: " + pArray.length);
		}
	}
	*/
	
	//
	
	
	if(isModalEditing == true){
		pArray = parsedArray;	
	}
	
	//pArray = parsedArray;	
	//*/
	console.log("3c, pArray.length: " + pArray.length);
	//status('info', pArray.length + ' data rows about ethnicity(' + localStorage.selectPickerValueForEthnicity + ') retrieved | total ' + preParsedArray.length + ' rows');		// <-- no problem...
	//status('info', pArray.length + ' data rows retrieved  |  total ' + preParsedArray.length + ' rows');
		
	filteredForArrForChemo.splice(0, filteredForArrForChemo.length);
	filteredForArrForRadiation.splice(0, filteredForArrForRadiation.length);
	filteredForArrForHormonal.splice(0, filteredForArrForHormonal.length);
	filteredForArrForSurgery.splice(0, filteredForArrForSurgery.length);
	filteredForArrForChemoRad.splice(0, filteredForArrForChemoRad.length);
	filteredForArrForSurgRad.splice(0, filteredForArrForSurgRad.length);
	filteredForArrForNoTreatment.splice(0, filteredForArrForNoTreatment.length);
	filteredArrForSideEffect.splice(0, filteredArrForSideEffect.length);
	
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
	
	
	
	//*
	if(currentSideEffectSelected == "Anemia"){
		console.log("currentSideEffectSelected in UpdateVis -- Anemia");	
		filteredArrForSideEffect = pArray.filter(function(el){
			return el.anemia == "YES";
		});
		
		status('info', "Side effect (Anemia): " + filteredArrForSideEffect.length + " data retrieved |  " + pArray.length + ' in this ethnicity group |  total ' + preParsedArray.length + ' rows');
		
	} else if(currentSideEffectSelected == "Bowel Dysfunction"){
		console.log("currentSideEffectSelected in UpdateVis -- Bowel Dysfunction");
		filteredArrForSideEffect = pArray.filter(function(el){
			return el.bowelDys == "YES";
		});
		
		status('info', "Side effect (Bowel Dysfunction): " + filteredArrForSideEffect.length + " data retrieved |  " + pArray.length + ' in this ethnicity group |  total ' + preParsedArray.length + ' rows');
		
	} else if(currentSideEffectSelected == "Decreased Libido"){
		console.log("currentSideEffectSelected in UpdateVis -- Decreased Libido");
		filteredArrForSideEffect = pArray.filter(function(el){
			return el.decLibido == "YES";
		});
		
		status('info', "Side effect (Decreased Libido): " + filteredArrForSideEffect.length + " data retrieved |  " + pArray.length + ' in this ethnicity group |  total ' + preParsedArray.length + ' rows');
		
	} else if(currentSideEffectSelected == "Erectile Dysfunction"){
		console.log("currentSideEffectSelected in UpdateVis -- Erectile Dysfunction");
		filteredArrForSideEffect = pArray.filter(function(el){
			return el.erectileDys == "YES";
		});
		
		status('info', "Side effect (Erectile Dysfunction): " + filteredArrForSideEffect.length + " data retrieved  | " + pArray.length + ' in this ethnicity group |  total ' + preParsedArray.length + ' rows');
		
	} else if(currentSideEffectSelected == "Fatigue"){
		console.log("currentSideEffectSelected in UpdateVis -- Fatigue");
		filteredArrForSideEffect = pArray.filter(function(el){
			return el.fatigue == "YES";
		});
		
		status('info', "Side effect (Fatigue): " + filteredArrForSideEffect.length + " data retrieved |  " + pArray.length + ' in this ethnicity group |  total ' + preParsedArray.length + ' rows');
		
	} else if(currentSideEffectSelected == "Hot Flash"){
		console.log("currentSideEffectSelected in UpdateVis -- Hot Flash");
		filteredArrForSideEffect = pArray.filter(function(el){
			return el.hotFlash == "YES";
		});
		
		status('info', "Side effect (Hot Flash): " + filteredArrForSideEffect.length + " data retrieved |  " + pArray.length + ' in this ethnicity group |  total ' + preParsedArray.length + ' rows');
		
	} else if(currentSideEffectSelected == "Nausea / Vomiting"){
		console.log("currentSideEffectSelected in UpdateVis -- Nausea / Vomiting");
		filteredArrForSideEffect = pArray.filter(function(el){
			return el.nV == "YES";
		});
		
		status('info', "Side effect (Nausea / Vomiting): " + filteredArrForSideEffect.length + " data retrieved |  " + pArray.length + ' in this ethnicity group |  total ' + preParsedArray.length + ' rows');
		
	} else if(currentSideEffectSelected == "Urinary Dysfunction"){
		console.log("currentSideEffectSelected in UpdateVis -- Urinary Dysfunction");
		filteredArrForSideEffect = pArray.filter(function(el){
			return el.urinaryDys == "YES";
		});
		
		status('info', "Side effect (Urinary Dysfunction): " + filteredArrForSideEffect.length + " data retrieved |  " + pArray.length + ' in this ethnicity group |  total ' + preParsedArray.length + ' rows');
		
	} else if(currentSideEffectSelected == "Weight Loss"){
		console.log("currentSideEffectSelected in UpdateVis -- Weight Loss");
		filteredArrForSideEffect = pArray.filter(function(el){
			return el.weightLoss == "YES";
		});
		
		status('info', "Side effect (Weight Loss): " + filteredArrForSideEffect.length + " data retrieved |  " + pArray.length + ' in this ethnicity group |  total ' + preParsedArray.length + ' rows');
		
	}
	
	console.log('filteredArrForSideEffect: ' + filteredArrForSideEffect.length);
	//*/
	
	medianForChemo = getMedian(filteredForArrForChemo);
	medianForRadiation = getMedian(filteredForArrForRadiation);
	medianForHormonal = getMedian(filteredForArrForHormonal);
	medianForSurgery = getMedian(filteredForArrForSurgery);
	medianForChemoRad = getMedian(filteredForArrForChemoRad);
	medianForSurgRad = getMedian(filteredForArrForSurgRad);
	medianForNoTreatment = getMedian(filteredForArrForNoTreatment);
	
	console.log("medianForChemo: " + medianForChemo);
	
	chart = $('#chart-container').highcharts();
	
	var pArrayForSideEffect = [];
	
	// For filteredForArrForChemo
	for (i = 0; i < filteredForArrForChemo.length; i++) {
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
	pArrayForSideEffect = pArrayForSideEffect.concat(tempDataArrForModal);
	tempDataArrForModal.splice(0, tempDataArrForModal.length);
	
	console.log("pArrayForSideEffect.length 1: " + pArrayForSideEffect.length);
	
	
	// For filteredForArrForChemoRad
	for (i = 0; i < filteredForArrForChemoRad.length; i++) {
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
	pArrayForSideEffect = pArrayForSideEffect.concat(tempDataArrForModal);
	tempDataArrForModal.splice(0, tempDataArrForModal.length);
	
	console.log("pArrayForSideEffect.length 2: " + pArrayForSideEffect.length);
	
	
	// For filteredForArrForHormonal
	for (i = 0; i < filteredForArrForHormonal.length; i++) {
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
	pArrayForSideEffect = pArrayForSideEffect.concat(tempDataArrForModal);
	tempDataArrForModal.splice(0, tempDataArrForModal.length);
						
	console.log("pArrayForSideEffect.length 3: " + pArrayForSideEffect.length);
	
	
	// For filteredForArrForRadiation
	for (i = 0; i < filteredForArrForRadiation.length; i++) {
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
	pArrayForSideEffect = pArrayForSideEffect.concat(tempDataArrForModal);
	tempDataArrForModal.splice(0, tempDataArrForModal.length);
	
	console.log("pArrayForSideEffect.length 4: " + pArrayForSideEffect.length);
	
	
	// For filteredForArrForSurgery
	for (i = 0; i < filteredForArrForSurgery.length; i++) {
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
	pArrayForSideEffect = pArrayForSideEffect.concat(tempDataArrForModal);
	tempDataArrForModal.splice(0, tempDataArrForModal.length);					
	
	console.log("pArrayForSideEffect.length 5: " + pArrayForSideEffect.length);
	
	
	// For filteredForArrForSurgRad
	for (i = 0; i < filteredForArrForSurgRad.length; i++) {
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
	pArrayForSideEffect = pArrayForSideEffect.concat(tempDataArrForModal);
	tempDataArrForModal.splice(0, tempDataArrForModal.length);
	
	console.log("pArrayForSideEffect.length 6: " + pArrayForSideEffect.length);
	
	// For 
	for (i = 0; i < filteredForArrForNoTreatment.length; i++) {
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
	pArrayForSideEffect = pArrayForSideEffect.concat(tempDataArrForModal);
	tempDataArrForModal.splice(0, tempDataArrForModal.length);
		
	console.log("pArrayForSideEffect.length 7: " + pArrayForSideEffect.length);
	
	
	//* For filteredArrForSideEffect2
	if(currentSideEffectSelected == "Anemia"){
		console.log("currentSideEffectSelected in UpdateVis -- Anemia");	
		filteredArrForSideEffect2 = pArrayForSideEffect.filter(function(el){
			return el.anemia == "YES";
		});
		
	} else if(currentSideEffectSelected == "Bowel Dysfunction"){
		console.log("currentSideEffectSelected in UpdateVis -- Bowel Dysfunction");
		filteredArrForSideEffect2 = pArrayForSideEffect.filter(function(el){
			return el.bowelDys == "YES";
		});
		
	} else if(currentSideEffectSelected == "Decreased Libido"){
		console.log("currentSideEffectSelected in UpdateVis -- Decreased Libido");
		filteredArrForSideEffect2 = pArrayForSideEffect.filter(function(el){
			return el.decLibido == "YES";
		});
		
	} else if(currentSideEffectSelected == "Erectile Dysfunction"){
		console.log("currentSideEffectSelected in UpdateVis -- Erectile Dysfunction");
		filteredArrForSideEffect2 = pArrayForSideEffect.filter(function(el){
			return el.erectileDys == "YES";
		});
		
	} else if(currentSideEffectSelected == "Fatigue"){
		console.log("currentSideEffectSelected in UpdateVis -- Fatigue");
		filteredArrForSideEffect2 = pArrayForSideEffect.filter(function(el){
			return el.fatigue == "YES";
		});
		
	} else if(currentSideEffectSelected == "Hot Flash"){
		console.log("currentSideEffectSelected in UpdateVis -- Hot Flash");
		filteredArrForSideEffect2 = pArrayForSideEffect.filter(function(el){
			return el.hotFlash == "YES";
		});
		
	} else if(currentSideEffectSelected == "Nausea / Vomiting"){
		console.log("currentSideEffectSelected in UpdateVis -- Nausea / Vomiting");
		filteredArrForSideEffect2 = pArrayForSideEffect.filter(function(el){
			return el.nV == "YES";
		});
		
	} else if(currentSideEffectSelected == "Urinary Dysfunction"){
		console.log("currentSideEffectSelected in UpdateVis -- Urinary Dysfunction");
		filteredArrForSideEffect2 = pArrayForSideEffect.filter(function(el){
			return el.urinaryDys == "YES";
		});
		
	} else if(currentSideEffectSelected == "Weight Loss"){
		console.log("currentSideEffectSelected in UpdateVis -- Weight Loss");
		filteredArrForSideEffect2 = pArrayForSideEffect.filter(function(el){
			return el.weightLoss == "YES";
		});
		
	} 
	//*/
	
	console.log('filteredArrForSideEffect22: ' + filteredArrForSideEffect2.length);
	//*/
	
	var dataForSideEffect = [],
		i;
	
	for (i = 0; i < filteredArrForSideEffect2.length; i++) {
		//console.log("filtered1[" + i + "]: " + filteredForArrForChemo[i].survivalMonths);
		dataForSideEffect.push({
			//x: 0 + (Math.random() * 50 + 30)/100 - 0.5,
			x: filteredArrForSideEffect2[i].x,
			//y: filteredArrForSideEffect2[i].survivalMonths,
			y: filteredArrForSideEffect2[i].y,
			anemia: filteredArrForSideEffect2[i].anemia, 
			bowelDys: filteredArrForSideEffect2[i].bowelDys, 
			chemo: filteredArrForSideEffect2[i].chemo, 
			chemoRad: filteredArrForSideEffect2[i].chemoRad, 
			decLibido: filteredArrForSideEffect2[i].decLibido,
			disease: filteredArrForSideEffect2[i].disease, 
			dxAge: filteredArrForSideEffect2[i].dxAge, 
			dxGrade: filteredArrForSideEffect2[i].dxGrade, 
			dxYear: filteredArrForSideEffect2[i].dxYear, 
			erectileDys: filteredArrForSideEffect2[i].erectileDys,
			fatigue: filteredArrForSideEffect2[i].fatigue, 
			hormonal: filteredArrForSideEffect2[i].hormonal, 
			hotFlash: filteredArrForSideEffect2[i].hotFlash, 
			isAlive: filteredArrForSideEffect2[i].isAlive, 
			nV: filteredArrForSideEffect2[i].nV, 
			noTreatment: filteredArrForSideEffect2[i].noTreatment, 
			race: filteredArrForSideEffect2[i].race, 
			radiation: filteredArrForSideEffect2[i].radiation, 
			surgRad: filteredArrForSideEffect2[i].surgRad, 
			surgery: filteredArrForSideEffect2[i].surgery, 
			treatmentOption: filteredArrForSideEffect2[i].treatmentOption, 	
			urinaryDys:  filteredArrForSideEffect2[i].urinaryDys, 
			weightLoss: filteredArrForSideEffect2[i].weightLoss
			//y: Math.random() * 10 + 5
		});	
	}
	
	console.log("data: " + dataForSideEffect);
	
	if(chart.series.length >= 6){
		
		if(chart.series.length > 7){
			if(typeof(chart.series[7].name)!== 'undefined'){
				if(chart.series[7].name == "SideEffect"){	
					chart.series[7].remove();		
					console.log("removed");
				}
			}	
			
			else if(typeof(chart.series[7].name)!== 'undefined'){
				if(chart.series[8].name == "SideEffect"){
					chart.series[8].remove();
					console.log("removed");
				}
			}
		}

		chart.addSeries({
			id: 'side-effects',
			name: 'SideEffect',
			//type: 'line',
			//lineWidth: 5,
			//color: '#08F',
			//color: '#0000CC',
			color: 'rgba(224, 27, 47, .8)',
			marker: {
				enabled: true,
				radius: 7,
				symbol: "circle"
			},
			tooltip: {
				crosshairs: true,
				/*
				headerFormat: '<span style="color:{series.color}"><b style="color:{series.color}">{series.name}</b></span><table>',
				pointFormat: '<tr><td></td><td style="color:{series.color};padding:0">'
				+'</b><br/>'+'<b>Survival Months</b>: </td>' + '<td style="padding:0">{point.y}</td></tr>'
				*/
				//headerFormat: '<span style="color:{series.color}"><strong style="color:{series.color}">{point.treatmentOption}</strong></span><table>',
				headerFormat: '<table>',
				pointFormat: '<tr><td></td><td style="color:{series.color};padding:0">'
				+'</b><br/>'+'<b>is Alive</b>: </td>' + '<td style="padding:0">{point.isAlive}</td></tr>'
				+'</b><br/>'+'<b>Survival Months</b>: </td>' + '<td style="padding:0">{point.y}</td></tr>'
				
				+'</b><br/></b><br/>'+'<b style="color:{series.color}; ">Side effects</b>: </td></tr>'
				+'</b><br/>'+'<b>Urinary Dysfunction</b>: </td>' + '<td style="padding:0">{point.urinaryDys}</td></tr>'
				+'</b><br/>'+'<b>Bowel Dysfunction</b>: </td>' + '<td style="padding:0">{point.bowelDys}</td></tr>'
				+'</b><br/>'+'<b>Hot Flash</b>: </td>' + '<td style="padding:0">{point.hotFlash}</td></tr>'
				+'</b><br/>'+'<b>Decreased Libido</b>: </td>' + '<td style="padding:0">{point.decLibido}</td></tr>'
				+'</b><br/>'+'<b>Nausea/Vomiting</b>: </td>' + '<td style="padding:0">{point.nV}</td></tr>'
				+'</b><br/>'+'<b>Weight Loss</b>: </td>' + '<td style="padding:0">{point.weightLoss}</td></tr>'
				+'</b><br/>'+'<b>Fatigue</b>: </td>' + '<td style="padding:0">{point.fatigue}</td></tr>'
				+'</b><br/>'+'<b>Anemia</b>: </td>' + '<td style="padding:0">{point.anemia}</td></tr>'
				+'</b><br/>'+'<b>Erectile Dysfunction</b>: </td>' + '<td style="padding:0">{point.erectileDys}</td></tr></table>'
				,
				useHTML: true
			},
	
			data: {}
			
		});	// end of 'chart.addSeries'
		//}
	}
	
	if(chart.series.length > 7){
		if(typeof(chart.series[7].name)!== 'undefined'){
			if(chart.series[7].name == "SideEffect"){	
				chart.series[7].setData(dataForSideEffect);		
				console.log("here");
			}
		}	
		
		else if(typeof(chart.series[7].name)!== 'undefined'){
			if(chart.series[8].name == "SideEffect"){
				chart.series[8].setData(dataForSideEffect);	
				console.log("here");
			}
		}
	}
	
	hasSideEffectAlready2 = true;
	
	if(currentSideEffectSelected == ""){
		console.log("Nothing selected");
		
		status('info', pArray.length + 'data rows retrived in this ethnicity group |  total ' + preParsedArray.length + ' rows');
		
		if(chart.series.length > 7){
			if(typeof(chart.series[7].name)!== 'undefined'){
				if(chart.series[7].name == "SideEffect"){	
					//chart.series[7].setData(dataForSideEffect);	
					chart.series[7].remove();
					console.log("here series[7]");
				}
			}	
			
			else if(typeof(chart.series[7].name)!== 'undefined'){
				if(chart.series[8].name == "SideEffect"){
					//chart.series[8].setData(dataForSideEffect);	
					chart.series[8].remove(true);
					console.log("here series[8]");
				}
			}
		}
	}	
	
	chart.redraw();
	//showSideEffect();
	//showSideEffect2();
	
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
 



/** -------------------------------------------------------------------------------------------- 
 * function to show Median value 
 --------------------------------------------------------------------------------------------*/
function showMedians(){
	chart = $('#chart-container').highcharts();
	
	
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
			//color: '#C22D48',
			//color: '#00FF00',
			color: 'rgba(121, 128, 23, .9)',
			lineWidth: 5,
			marker: {
				enabled: false
			},
			tooltip: {
				crosshairs: true,
				headerFormat: '<span style="color:{series.color}"><b style="color:{series.color}">{series.name}</b></span><table>',
				pointFormat: '<tr><td></td><td style="color:{series.color};padding:0">'
				+'</b><br/>'+'<b>Survival Months</b>: </td>' + '<td style="padding:0">{point.y}</td></tr>'
				,
				useHTML: true
			},
            //data: [194.1, null, 95.6, 54.4, 29.9, 71.5, 106.4, 33]
			//data: [chart.plotTop, chart.plotTop/2, chart.plotLeft, chart.plotRight, chart.plotBottom, 71.5, 106.4, 33]
			//*
			data: [
				[-0.2, medianForChemo], [0.3, medianForChemo], null,
				[0.8, medianForChemoRad], [1.3, medianForChemoRad], null,
				[1.8, medianForHormonal], [2.3, medianForHormonal], null,
				[2.8, medianForRadiation], [3.3, medianForRadiation], null,
				[3.8, medianForSurgery], [4.3, medianForSurgery], null,
				[4.8, medianForSurgRad], [5.3, medianForSurgRad], null,
				[5.8, medianForNoTreatment], [6.3, medianForNoTreatment], null
				
			]
			//*/
			
		
        });
		
		
		
	} else{
		//chart.yAxis[0].removePlotLine('plot-line-1');						   
		
		if(chart.series.length > 7){
			if(chart.series[7].name == "Medians"){
				chart.series[7].remove('median-lines');
			} else if(chart.series[8].name == "Medians"){
				chart.series[8].remove('median-lines');
			} else{
				// side effects		
			}
		}
			
	}
	hasMedian = !hasMedian;
}



/** -------------------------------------------------------------------------------------------- 
 * function to show side effect
 --------------------------------------------------------------------------------------------*/
function showSideEffect3(){
	chart = $('#chart-container').highcharts();
	
	if(hasSideEffectAlready2 == true){
		
		if(chart.series.length > 7){
			if(chart.series[7].name == "SideEffect"){
				chart.series[7].remove('side-effects');
				hasSideEffectAlready2 = false;
				
				
			} else if(chart.series[8].name == "SideEffect"){
				chart.series[8].remove('side-effects');
				hasSideEffectAlready2 = false;
				
			} else{
				// side effects		
			}
		}
	} 
	
	
	//chart.series[8].setData(tempDataArrForModal);
	/*
	chart.addSeries({
		id: 'side-effects',
		name: 'SideEffect',
		//type: 'line',
		//lineWidth: 5,
		//color: '#08F',
		color: '#0000CC',
		marker: {
			enabled: true,
			radius: 5,
			//symbol: "circle"
		},
		tooltip: {
			crosshairs: true,
			headerFormat: '<span style="color:{series.color}"><b style="color:{series.color}">{series.name}</b></span><table>',
			pointFormat: '<tr><td></td><td style="color:{series.color};padding:0">'
			+'</b><br/>'+'<b>Survival Months</b>: </td>' + '<td style="padding:0">{point.y}</td></tr>'
			,
			useHTML: true
		},

		data: {}
			
	});	// end of 'chart.addSeries'
	//*/	
	
	/*
	var data = [],
		i;
	
	for (i = 0; i < filteredArrForSideEffect2.length; i++) {
		//console.log("filtered1[" + i + "]: " + filteredForArrForChemo[i].survivalMonths);
		data.push({
			//x: 0 + (Math.random() * 50 + 30)/100 - 0.5,
			x: filteredArrForSideEffect2[i].x,
			y: filteredArrForSideEffect2[i].survivalMonths,
			anemia: filteredArrForSideEffect2[i].anemia, 
			bowelDys: filteredArrForSideEffect2[i].bowelDys, 
			chemo: filteredArrForSideEffect2[i].chemo, 
			chemoRad: filteredArrForSideEffect2[i].chemoRad, 
			decLibido: filteredArrForSideEffect2[i].decLibido,
			disease: filteredArrForSideEffect2[i].disease, 
			dxAge: filteredArrForSideEffect2[i].dxAge, 
			dxGrade: filteredArrForSideEffect2[i].dxGrade, 
			dxYear: filteredArrForSideEffect2[i].dxYear, 
			erectileDys: filteredArrForSideEffect2[i].erectileDys,
			fatigue: filteredArrForSideEffect2[i].fatigue, 
			hormonal: filteredArrForSideEffect2[i].hormonal, 
			hotFlash: filteredArrForSideEffect2[i].hotFlash, 
			isAlive: filteredArrForSideEffect2[i].isAlive, 
			nV: filteredArrForSideEffect2[i].nV, 
			noTreatment: filteredArrForSideEffect2[i].noTreatment, 
			race: filteredArrForSideEffect2[i].race, 
			radiation: filteredArrForSideEffect2[i].radiation, 
			surgRad: filteredArrForSideEffect2[i].surgRad, 
			surgery: filteredArrForSideEffect2[i].surgery, 
			treatmentOption: filteredArrForSideEffect2[i].treatmentOption, 	
			urinaryDys:  filteredArrForSideEffect2[i].urinaryDys, 
			weightLoss: filteredArrForSideEffect2[i].weightLoss
			//y: Math.random() * 10 + 5
		});	
	}
	
	console.log("data: " + data);
	
	if(chart.series.length > 7){
		if(chart.series[7].name == "SideEffect2"){
			chart.series[7].setData(data);		
		} else if(chart.series[8].name == "SideEffect"){
			chart.series[8].setData(data);
		} else{
			// side effects		
		}
	}

	hasSideEffectAlready2 = true;
	//chart.redraw();
	//*/
}


/** -------------------------------------------------------------------------------------------- 
 * function to show side effect
 --------------------------------------------------------------------------------------------*/
/*
function showSideEffect(){
	chart = $('#chart-container').highcharts();
	
	if(hasSideEffectAlready == true){
		
		if(chart.series.length > 7){
			if(chart.series[7].name == "SideEffect"){
				chart.series[7].remove('side-effects');
				hasSideEffectAlready = false;
				
			} else if(chart.series[8].name == "SideEffect"){
				chart.series[8].remove('side-effects');
				hasSideEffectAlready = false;
				
			} else{
				// side effects		
			}
		}
	} 
	
	chart.addSeries({
		id: 'side-effects',
		name: 'SideEffect',
		//type: 'line',
		//lineWidth: 5,
		//color: '#08F',
		color: '#CC0000',
		marker: {
			enabled: true,
			radius: 5,
			symbol: "circle"
		},
		tooltip: {
			crosshairs: true,
			headerFormat: '<span style="color:{series.color}"><b style="color:{series.color}">{series.name}</b></span><table>',
			pointFormat: '<tr><td></td><td style="color:{series.color};padding:0">'
			+'</b><br/>'+'<b>Survival Months</b>: </td>' + '<td style="padding:0">{point.y}</td></tr>'
			,
			useHTML: true
		},

		data: (function() {
			var tempData = [], i;
		
			for (i = 0; i < filteredArrForSideEffect.length; i++) {
				
				if(filteredArrForSideEffect[i].treatmentOption == "Chemo"){
					tempData.push({
						x: 0 + (Math.random() * 50 + 30)/100 - 0.5,
						//x: filteredArrForSideEffect[i].x,
						y: filteredArrForSideEffect[i].survivalMonths
					});
					
				} else if(filteredArrForSideEffect[i].treatmentOption == "Chemo+Rad"){
					tempData.push({
						x: 1 + (Math.random() * 50 + 30)/100 - 0.5,
						//x: filteredArrForSideEffect[i].x,
						y: filteredArrForSideEffect[i].survivalMonths
					});
					
				} else if(filteredArrForSideEffect[i].treatmentOption == "Hormonal"){
					tempData.push({
						x: 2 + (Math.random() * 50 + 30)/100 - 0.5,
						//x: filteredArrForSideEffect[i].x,
						y: filteredArrForSideEffect[i].survivalMonths
					});
					
				} else if(filteredArrForSideEffect[i].treatmentOption == "Radiation"){
					tempData.push({
						x: 3 + (Math.random() * 50 + 30)/100 - 0.5,
						//x: filteredArrForSideEffect[i].x,
						y: filteredArrForSideEffect[i].survivalMonths
					});
				} else if(filteredArrForSideEffect[i].treatmentOption == "Surgery"){
					tempData.push({
						x: 4 + (Math.random() * 50 + 30)/100 - 0.5,
						//x: filteredArrForSideEffect[i].x,
						y: filteredArrForSideEffect[i].survivalMonths
					});
					
				} else if(filteredArrForSideEffect[i].treatmentOption == "Surg+Rad"){
					tempData.push({
						x: 5 + (Math.random() * 50 + 30)/100 - 0.5,
						//x: filteredArrForSideEffect[i].x,
						y: filteredArrForSideEffect[i].survivalMonths
					});
					
				} else if(filteredArrForSideEffect[i].treatmentOption == "No-Treatment"){
					tempData.push({
						x: 6 + (Math.random() * 50 + 30)/100 - 0.5,
						//x: filteredArrForSideEffect[i].x,
						y: filteredArrForSideEffect[i].survivalMonths
					});
					
				}
			}
			return tempData;
		})()
		
	});
	
	hasSideEffectAlready = true;
	//chart.redraw();
	
}
//*/


/** -------------------------------------------------------------------------------------------- 
 * function to show side effect
 --------------------------------------------------------------------------------------------*/
/*
function showSideEffect2(){
	chart = $('#chart-container').highcharts();
	
	if(hasSideEffectAlready2 == true){
		
		if(chart.series.length > 7){
			if(chart.series[7].name == "SideEffect2"){
				chart.series[7].remove('side-effects2');
				hasSideEffectAlready2 = false;
				
				
			} else if(chart.series[8].name == "SideEffect2"){
				chart.series[8].remove('side-effects2');
				hasSideEffectAlready2 = false;
				
			} else{
				// side effects		
			}
		}
	} 
	
	
	//chart.series[8].setData(tempDataArrForModal);
	
	chart.addSeries({
		id: 'side-effects2',
		name: 'SideEffect2',
		//type: 'line',
		//lineWidth: 5,
		//color: '#08F',
		color: '#0000CC',
		marker: {
			enabled: true,
			radius: 5,
			//symbol: "circle"
		},
		tooltip: {
			crosshairs: true,
			headerFormat: '<span style="color:{series.color}"><b style="color:{series.color}">{series.name}</b></span><table>',
			pointFormat: '<tr><td></td><td style="color:{series.color};padding:0">'
			+'</b><br/>'+'<b>Survival Months</b>: </td>' + '<td style="padding:0">{point.y}</td></tr>'
			,
			useHTML: true
		},

		data: {}
			
	});	// end of 'chart.addSeries'
		
	
	var data = [],
		i;
	
	for (i = 0; i < filteredArrForSideEffect2.length; i++) {
		//console.log("filtered1[" + i + "]: " + filteredForArrForChemo[i].survivalMonths);
		data.push({
			//x: 0 + (Math.random() * 50 + 30)/100 - 0.5,
			x: filteredArrForSideEffect2[i].x,
			y: filteredArrForSideEffect2[i].survivalMonths,
			anemia: filteredArrForSideEffect2[i].anemia, 
			bowelDys: filteredArrForSideEffect2[i].bowelDys, 
			chemo: filteredArrForSideEffect2[i].chemo, 
			chemoRad: filteredArrForSideEffect2[i].chemoRad, 
			decLibido: filteredArrForSideEffect2[i].decLibido,
			disease: filteredArrForSideEffect2[i].disease, 
			dxAge: filteredArrForSideEffect2[i].dxAge, 
			dxGrade: filteredArrForSideEffect2[i].dxGrade, 
			dxYear: filteredArrForSideEffect2[i].dxYear, 
			erectileDys: filteredArrForSideEffect2[i].erectileDys,
			fatigue: filteredArrForSideEffect2[i].fatigue, 
			hormonal: filteredArrForSideEffect2[i].hormonal, 
			hotFlash: filteredArrForSideEffect2[i].hotFlash, 
			isAlive: filteredArrForSideEffect2[i].isAlive, 
			nV: filteredArrForSideEffect2[i].nV, 
			noTreatment: filteredArrForSideEffect2[i].noTreatment, 
			race: filteredArrForSideEffect2[i].race, 
			radiation: filteredArrForSideEffect2[i].radiation, 
			surgRad: filteredArrForSideEffect2[i].surgRad, 
			surgery: filteredArrForSideEffect2[i].surgery, 
			treatmentOption: filteredArrForSideEffect2[i].treatmentOption, 	
			urinaryDys:  filteredArrForSideEffect2[i].urinaryDys, 
			weightLoss: filteredArrForSideEffect2[i].weightLoss
			//y: Math.random() * 10 + 5
		});	
	}
	
	console.log("data: " + data);
	
	if(chart.series.length > 7){
		if(chart.series[7].name == "SideEffect2"){
			chart.series[7].setData(data);		
		} else if(chart.series[8].name == "SideEffect"){
			chart.series[8].setData(data);
		} else{
			// side effects		
		}
	}

	hasSideEffectAlready2 = true;
	//chart.redraw();
	
}
//*/



/** -------------------------------------------------------------------------------------------- 
 * function fired when decisionspace.html loaded
 --------------------------------------------------------------------------------------------*/
function decisionspaceOnLoad(){
	
	console.log("page onLoad");	
	
	console.log("Picker for selectPickerValueForCondition: " + localStorage.selectPickerValueForCondition);
	console.log("Picker for selectPickerForEthnicity: " + localStorage.selectPickerValueForEthnicity);
	
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
	
	
	for(i=0;i<seerdata.length;i++){
		//var innerArray = [];
		var obj = seerdata[i];
		
		
		var anemia, bowelDys, chemo, chemoRad, decLibido, disease, dxAge, dxGrade, dxYear, 
			erectileDys, fatigue, fatigue, hormonal, hotFlash, isAlive, nV, noTreatment, race,
			radiation, surgRad, surgery, survivalMonths, treatmentOption, urinaryDys, weightLoss;
		
		
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
		
	
		
		if(anemia == "no"){ anemia = "NO"; } else{ anemia = "YES"; }
		if(bowelDys == "no"){ bowelDys = "NO"; } else{ bowelDys = "YES"; }
		if(decLibido == "no"){ decLibido = "NO"; } else{ decLibido = "YES"; }
		if(erectileDys == "no"){ erectileDys = "NO"; } else{ erectileDys = "YES"; }
		if(fatigue == "no"){ fatigue = "NO"; } else{ fatigue = "YES"; }
		if(hotFlash == "no"){ hotFlash = "NO"; } else{ hotFlash = "YES"; }
		if(nV == "no"){ nV = "NO"; } else{ nV = "YES"; }
		if(urinaryDys == "no"){ urinaryDys = "NO"; } else{ urinaryDys = "YES"; }
		if(weightLoss == "no"){ weightLoss = "NO"; } else{ weightLoss = "YES"; }
		
		
		preParsedArray.push({
				anemia: anemia, bowelDys: bowelDys, chemo: chemo, chemoRad: chemoRad, decLibido: decLibido,
				disease: disease, dxAge: dxAge, dxGrade: dxGrade, dxYear: dxYear, erectileDys: erectileDys,
				fatigue: fatigue, hormonal: hormonal, hotFlash: hotFlash, isAlive: isAlive, 
				nV: nV, noTreatment: noTreatment, race: race, radiation: radiation, surgRad: surgRad, 
				surgery: surgery, survivalMonths: survivalMonths, treatmentOption: treatmentOption, 	
				urinaryDys:  urinaryDys, weightLoss: weightLoss
		});
	}
		
		
	//example3();
	//console.log( "preParsedArray success" + preParsedArray); 		// sequence 3
	console.log( "preParsedArray.length: " + preParsedArray.length); 		// sequence 3
	
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
	//status('info', 'total ' + parsedArray.length + ' rows retrieved');
	//status('info', parsedArray.length + ' data rows about ethnicity (' + localStorage.selectPickerValueForEthnicity + ') retrieved  |  total ' + preParsedArray.length + ' rows');		// <-- no problem...
	status('info', parsedArray.length + ' data rows retrieved  |  total ' + preParsedArray.length + ' rows');		// <-- no problem...
	
	medianForChemo = getMedian(filteredForArrForChemo);
	medianForRadiation = getMedian(filteredForArrForRadiation);
	medianForHormonal = getMedian(filteredForArrForHormonal);
	medianForSurgery = getMedian(filteredForArrForSurgery);
	medianForChemoRad = getMedian(filteredForArrForChemoRad);
	medianForSurgRad = getMedian(filteredForArrForSurgRad);
	medianForNoTreatment = getMedian(filteredForArrForNoTreatment);
	
	
	$('#chart-container').highcharts({
            chart: {
            	type: 'scatter',
				events: {
                    load: function() {
    
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
						
						//*
						headerFormat: '<span style="color:{series.color}"><strong style="color:{series.color}">{series.name}</strong></span><table>',
						pointFormat: '<tr><td></td><td style="color:{series.color};padding:0">'
						+'</b><br/>'+'<b>is Alive</b>: </td>' + '<td style="padding:0">{point.isAlive}</td></tr>'
						+'</b><br/>'+'<b>Survival Months</b>: </td>' + '<td style="padding:0">{point.y}</td></tr>'
						
						+'</b><br/></b><br/>'+'<b style="color:{series.color}; ">Side effects</b>: </td></tr>'
						+'</b><br/>'+'<b>Urinary Dysfunction</b>: </td>' + '<td style="padding:0">{point.urinaryDys}</td></tr>'
						+'</b><br/>'+'<b>Bowel Dysfunction</b>: </td>' + '<td style="padding:0">{point.bowelDys}</td></tr>'
						+'</b><br/>'+'<b>Hot Flash</b>: </td>' + '<td style="padding:0">{point.hotFlash}</td></tr>'
						+'</b><br/>'+'<b>Decreased Libido</b>: </td>' + '<td style="padding:0">{point.decLibido}</td></tr>'
						+'</b><br/>'+'<b>Nausea/Vomiting</b>: </td>' + '<td style="padding:0">{point.nV}</td></tr>'
						+'</b><br/>'+'<b>Weight Loss</b>: </td>' + '<td style="padding:0">{point.weightLoss}</td></tr>'
						+'</b><br/>'+'<b>Fatigue</b>: </td>' + '<td style="padding:0">{point.fatigue}</td></tr>'
						+'</b><br/>'+'<b>Anemia</b>: </td>' + '<td style="padding:0">{point.anemia}</td></tr>'
						+'</b><br/>'+'<b>Erectile Dysfunction</b>: </td>' + '<td style="padding:0">{point.erectileDys}</td></tr>'
						,
						//*/
						crosshairs: true,
						/*
						formatter: function(){
            				//return '<b>'+ this.x +'</b>: '+ roundVal(this.y);
							//http://stackoverflow.com/questions/10535549/highchart-stock-tooltip-formatter-for-both-series-and-flags
							//return '<b>'+ roundVal(this.x) +'</b>: '+ roundVal(this.y);
							return '<span style="color:{series.color}"><b style="color:{series.color}">{series.name}</b></span><table><tr><td></td><td style="color:{series.color};padding:0"></b><br/><b>is Alive</b>: </td><td style="padding:0">{this.isAlive}</td></tr>'
							;
            			},
						//*/
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
					color: 'rgba(223, 83, 83, .6)',
					marker: {
						enabled: true,
						//radius: 8,
						symbol: "circle"
					},
					data: 
						(function() {
							var time,
								data = [],
								i;
						
							for (i = 0; i <= filteredForArrForChemo.length - 1; i++) {
								//console.log("filtered1[" + i + "]: " + filteredForArrForChemo[i].survivalMonths);
								//* Original
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
							
							//console.log("data: " + data);
							return data;
						})()
						
						
						
					//]
				}
				//*		 
				, {
					//name: 'Male',
					//name: 'Not recommended, contraindicated due to other conditions',
					name: 'Chemo therapy & Radiation',
					color: 'rgba(119, 152, 191, .6)',
					marker: {
						enabled: true,
						//radius: 8,
						symbol: "circle"
					},
					data: (function() {
							var time,
								data = [],
								i;
							
						
							for (i = 0; i <= filteredForArrForChemoRad.length - 1; i++) {
								//console.log("filtered1[" + i + "]: " + filteredForArrForChemoRad[i].survivalMonths);
								//*
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
							
							//console.log("data: " + data);
							return data;
						})()
						
					
				
				}
				,{	// data for '
					//name: 'Female',
					//name: 'Recommended but not performed, patient refused',
					name: 'Hormonal Therapy',
					color: 'rgba(50, 205, 50, .6)',
					marker: {
						enabled: true,
						//radius: 8,
						symbol: "circle"
					},
					data: 
						(function() {
							var time,
								data = [],
								i;
							
							
							for (i = 0; i <= filteredForArrForHormonal.length - 1; i++) {
								//console.log("filtered1[" + i + "]: " + filteredForArrForHormonal[i].survivalMonths);
								//*
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
								//*/
								
							}
							
							//console.log("data: " + data);
							return data;
						})()
				}
				,{	// data for '
					//name: 'Female',
					//name: 'Recommended but not performed, unknown reason',
					name: 'Radiation',
					color: 'rgba(245, 146, 17, .7)',
					marker: {
						enabled: true,
						//radius: 8,
						symbol: "circle"
					},
					data: 
						(function() {
							var time,
								data = [],
								i;
							
							
							for (i = 0; i <= filteredForArrForRadiation.length - 1; i++) {
								//console.log("filtered1[" + i + "]: " + filteredForArrForRadiation[i].survivalMonths);
								//*
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
							
							//console.log("data: " + data);
							return data;
						})()
				}
				,{	// data for '
					//name: 'Female',
					//name: 'Recommended, unknown if performed',
					name: 'Surgery',
					color: 'rgba(199, 21, 133, .6)',
					marker: {
						enabled: true,
						//radius: 8,
						symbol: "circle"
					},
					data: 
						(function() {
							var time,
								data = [],
								i;
							
						
							
							for (i = 0; i <= filteredForArrForSurgery.length - 1; i++) {
								//console.log("filtered1[" + i + "]: " + filteredForArrForSurgery[i].survivalMonths);
								//*
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
								//*/
								
							}
							
							//console.log("data: " + data);
							return data;
						})()
				}
				,{	// data for '
					//name: 'Female',
					//name: 'Surgery performed',
					name: 'Surgery & Radiation',
					color: 'rgba(17, 101, 245, .5)',
					marker: {
						enabled: true,
						//radius: 8,
						symbol: "circle"
					},
					data: 
						(function() {
							var time,
								data = [],
								i;
							
							
							
							for (i = 0; i <= filteredForArrForSurgRad.length - 1; i++) {
								//console.log("filtered1[" + i + "]: " + filteredForArrForSurgRad[i].survivalMonths);
								//*
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
							//console.log("data: " + data);
							return data;
						})()
				}
				,{	// data for '
					//name: 'Female',
					//name: 'Unknown; death certificate or autopsy only case',
					name: 'No-Treatment',
					color: 'rgba(148, 0, 211, .6)',
					marker: {
						enabled: true,
						//radius: 8,
						symbol: "circle"
					},
					data: 
						(function() {
							var time,
								data = [],
								i;
							
							for (i = 0; i <= filteredForArrForNoTreatment.length - 1; i++) {
								//console.log("filtered1[" + i + "]: " + filteredForArrForNoTreatment[i].survivalMonths);
								//*
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
							
							//console.log("data: " + data);
							return data;
						})()
				}
				/*/
				,
				{
					id: 'side-effects',
					name: 'SideEffect',
					//type: 'line',
					//lineWidth: 5,
					//color: '#08F',
					color: '#0000CC',
					marker: {
						enabled: true,
						radius: 8,
						symbol: "circle"
					},
					tooltip: {
						crosshairs: true,
						headerFormat: '<span style="color:{series.color}"><b style="color:{series.color}">{series.name}</b></span><table>',
						pointFormat: '<tr><td></td><td style="color:{series.color};padding:0">'
						+'</b><br/>'+'<b>Survival Months</b>: </td>' + '<td style="padding:0">{point.y}</td></tr>'
						,
						useHTML: true
					},
			
					data: {}
			
				}
				*/
			]
	
        });
	
	/*
	chart.addSeries({
		id: 'side-effects',
		name: 'SideEffect',
		//type: 'line',
		//lineWidth: 5,
		//color: '#08F',
		color: '#0000CC',
		marker: {
			enabled: true,
			radius: 5,
			//symbol: "circle"
		},
		tooltip: {
			crosshairs: true,
			headerFormat: '<span style="color:{series.color}"><b style="color:{series.color}">{series.name}</b></span><table>',
			pointFormat: '<tr><td></td><td style="color:{series.color};padding:0">'
			+'</b><br/>'+'<b>Survival Months</b>: </td>' + '<td style="padding:0">{point.y}</td></tr>'
			,
			useHTML: true
		},

		data: {}
		
	});	// end of 'chart.addSeries'
    //*/
}


/** -------------------------------------------------------------------------------------------- 
// Function to update status message
 --------------------------------------------------------------------------------------------*/
function status (type, msg){
	$('#status').text(msg);
};




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