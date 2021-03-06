$(document).ready(function() {

    // Preventing Autocomplete of Questionnaire
    $('input').attr('autocomplete', 'off');
    $('input,textarea').bind("cut copy paste", function(e) {
        e.preventDefault();
    });

    if(RMO_MAIN_CODE != "") {
        //window.location.reload(true);
    }

    /* *********************************************************************
     * Calling "getProductDesc" function From func.js to get product description
     * For section 7 AND 8
     * *********************************************************************/

    $('#QuestionaireQ7ProductId1').keyup(function() {
        var value = $(this).val();
        $('#QuestionaireQ7ProductDesc1div').html("");
        $('#QuestionaireQ7ProductDesc1').val("");
        $('#QuestionaireQ7ProductIsright1').val(1);
        if(value.length == 5) {

            autoFocus("QuestionaireQ7ProductId2");
            // Call  getProductDesc function for ajax request
            getProductDesc('QuestionaireQ7ProductId1', 'QuestionaireQ7ProductDesc1div', 'QuestionaireQ7ProductDesc1', 'QuestionaireQ7ProductIsright1');
        }
        if(value.length == 2) {
            value = parseInt(value, 10);
            if(value > 53) {
                $(this).val('');
            }
        }
    });

    //Edit from Team viewer

    $('#QuestionaireQ7ProductId2').keyup(function() {
        var value = $(this).val();
        $('#QuestionaireQ7ProductDesc2div').html("");
        $('#QuestionaireQ7ProductDesc2').val("");
        $('#QuestionaireQ7ProductIsright2').val(1);
        if(value.length == 5) {
            autoFocus("QuestionaireQ7ProductId3");
            // Call  getProductDesc function for ajax request
            getProductDesc('QuestionaireQ7ProductId2', 'QuestionaireQ7ProductDesc2div', 'QuestionaireQ7ProductDesc2', 'QuestionaireQ7ProductIsright2');
        }
        if(value.length == 2) {
            value = parseInt(value, 10);
            if(value > 53) {
                $(this).val('');
            }
        }
    });

    $('#QuestionaireQ7ProductId3').keyup(function() {
        var value = $(this).val();
        $('#QuestionaireQ7ProductDesc3div').html("");
        $('#QuestionaireQ7ProductDesc3').val("");
        $('#QuestionaireQ7ProductIsright3').val(1);
        if(value.length == 5) {
            autoFocus("QuestionaireQ7ProductId4");
            // Call  getProductDesc function for ajax request
            getProductDesc('QuestionaireQ7ProductId3', 'QuestionaireQ7ProductDesc3div', 'QuestionaireQ7ProductDesc3', 'QuestionaireQ7ProductIsright3');
        }
        if(value.length == 2) {
            value = parseInt(value, 10);
            if(value > 53) {
                $(this).val('');
            }
        }
    });

    $('#QuestionaireQ7ProductId4').keyup(function() {
        var value = $(this).val();
        $('#QuestionaireQ7ProductDesc4div').html("");
        $('#QuestionaireQ7ProductDesc4').val("");
        $('#QuestionaireQ7ProductIsright4').val(1);
        if(value.length == 5) {
            autoFocus("QuestionaireQ8ServiceId1");
            // Call  getProductDesc function for ajax request
            getProductDesc('QuestionaireQ7ProductId4', 'QuestionaireQ7ProductDesc4div', 'QuestionaireQ7ProductDesc4', 'QuestionaireQ7ProductIsright4');
        }
        if(value.length == 2) {
            value = parseInt(value, 10);
            if(value > 53) {
                $(this).val('');
            }
        }
    });

    $('#QuestionaireQ8ServiceId1').keyup(function() {
        var value = $(this).val();
        $('#QuestionaireQ8ServiceDesc1div').html("");
        $('#QuestionaireQ8ServiceDesc1').val("");
        $('#QuestionaireQ8ServiceIsright1').val(1);
        if(value.length == 5) {
            autoFocus("QuestionaireQ8ServiceId2");
            // Call  getProductDesc function for ajax request
            getProductDesc('QuestionaireQ8ServiceId1', 'QuestionaireQ8ServiceDesc1div', 'QuestionaireQ8ServiceDesc1', 'QuestionaireQ8ServiceIsright1');
        }
        if(value.length == 2) {
            value = parseInt(value, 10);
            if(value < 54) {
                $(this).val('');
            }
        }
    });

    $('#QuestionaireQ8ServiceId2').keyup(function() {
        var value = $(this).val();
        $('#QuestionaireQ8ServiceDesc2div').html("");
        $('#QuestionaireQ8ServiceDesc2').val("");
        $('#QuestionaireQ8ServiceIsright2').val(1);
        if(value.length == 5) {
            autoFocus("QuestionaireQ8ServiceId3");
            // Call  getProductDesc function for ajax request
            getProductDesc('QuestionaireQ8ServiceId2', 'QuestionaireQ8ServiceDesc2div', 'QuestionaireQ8ServiceDesc2', 'QuestionaireQ8ServiceIsright2');
        }
        if(value.length == 2) {
            value = parseInt(value, 10);
            if(value < 54) {
                $(this).val('');
            }
        }
    });

    $('#QuestionaireQ8ServiceId3').keyup(function() {
        var value = $(this).val();
        $('#QuestionaireQ8ServiceDesc3div').html("");
        $('#QuestionaireQ8ServiceDesc3').val("");
        $('#QuestionaireQ8ServiceIsright3').val(1);
        if(value.length == 5) {
            autoFocus("QuestionaireQ8ServiceId4");
            // Call  getProductDesc function for ajax request
            getProductDesc('QuestionaireQ8ServiceId3', 'QuestionaireQ8ServiceDesc3div', 'QuestionaireQ8ServiceDesc3', 'QuestionaireQ8ServiceIsright3');
        }
        if(value.length == 2) {
            value = parseInt(value, 10);
            if(value < 54) {
                $(this).val('');
            }
        }
    });

    $('#QuestionaireQ8ServiceId4').keyup(function() {
        var value = $(this).val();
        $('#QuestionaireQ8ServiceDesc4div').html("");
        $('#QuestionaireQ8ServiceDesc4').val("");
        $('#QuestionaireQ8ServiceIsright4').val(1);
        if(value.length == 5) {
            autoFocus("QuestionaireQ9LegalEntityTypeId");
            // Call 	getProductDesc function for ajax request
            getProductDesc('QuestionaireQ8ServiceId4', 'QuestionaireQ8ServiceDesc4div', 'QuestionaireQ8ServiceDesc4', 'QuestionaireQ8ServiceIsright4');
        }
        if(value.length == 2) {
            value = parseInt(value, 10);
            if(value < 54) {
                $(this).val('');
            }
        }
    });

    /* *******************************************************************************************
    *                      END OF GET PRODUCT DESCRIPTION
    *********************************************************************************************/

    // Section :11 EVENT
    $('#QuestionaireQ11RegistrarId').keyup(function() {
        var value = $(this).val();
        var val2 = parseInt(value, 10);
        if(value.length == 2) {

            // Range cheking
            if($(this).val() < 01 || $(this).val() > 11 && $(this).val() != 99) {
                $(this).val("");
                return false;
            } else {
                autoFocus("QuestionaireQ12YearOfStart");
                $('#q11_1details').html(option_q11[val2]);
            }
        } else {
            $('#q11_1details').html("");
        }
    });

    /* $('#QuestionaireQ12YearOfStart').keyup(function() {
     var value = $(this).val();
     if(value.length == 4) {
     autoFocus("QuestionaireQ13SaleProcedure");
     }
     }); */

    $('#QuestionaireQ17HrMale').keyup(function() {
        var value = $(this).val();
        if(value.length == 2) {
            autoFocus("QuestionaireQ17HrFemale");
        }
    });

    $('#QuestionaireQ17HrFemale').keyup(function() {
        var value = $(this).val();
        if(value.length == 2) {
            autoFocus("QuestionaireQ17HrMaleFoc");
        }
    });

    $('#QuestionaireQ17HrMaleFoc').keyup(function() {
        var value = $(this).val();
        if(value.length == 2) {
            autoFocus("QuestionaireQ17HrFemaleFoc");
        }
    });

    $('#QuestionaireQ17HrFemaleFoc').keyup(function() {
        var value = $(this).val();
        if(value.length == 2) {
            autoFocus("QuestionaireQ17HrMaleFulltime");
        }
    });

    $('#QuestionaireQ17HrMaleFulltime').keyup(function() {
        var value = $(this).val();
        if(value.length == 4) {
            autoFocus("QuestionaireQ17HrFemaleFulltime");
        }
    });

    $('#QuestionaireQ17HrFemaleFulltime').keyup(function() {
        var value = $(this).val();
        if(value.length == 4) {
            autoFocus("QuestionaireQ17HrMaleParttime");
        }
    });

    $('#QuestionaireQ17HrMaleParttime').keyup(function() {
        var value = $(this).val();
        if(value.length == 3) {
            autoFocus("QuestionaireQ17HrFemaleParttime");
        }
    });

    $('#QuestionaireQ17HrFemaleParttime').keyup(function() {
        var value = $(this).val();
        if(value.length == 3) {
            autoFocus("QuestionaireQ17HrMaleIrregular");
        }
    });

    $('#QuestionaireQ17HrMaleIrregular').keyup(function() {
        var value = $(this).val();
        if(value.length == 2) {
            autoFocus("QuestionaireQ17HrFemaleIrregular");
        }
    });

    //END OF AUTO NAVIGATION OF CURSOR BLOCK==========================================

    //Default Input Field Disable

    $("#QuestionaireQ4UnitOrgType").attr("disabled", "disabled");
    $("#QuestionaireQ10NbrAmountInThou").attr("disabled", "disabled");
    $("#QuestionaireQ11RegistrarId").attr("disabled", "disabled");
    $("#QuestionaireQ14AccountableDuration").attr("disabled", "disabled");
    $("#QuestionaireQ22IsFireDeviceMaintained").attr("disabled", "disabled");
    $("#QuestionaireQ24IsLadiesToiletAvailable").attr("disabled", "disabled");
    $("#QuestionaireQ27YearVatRegistered").attr("disabled", "disabled");

    //Default Input Field Disable for Section 6

    /*q7disable();
     q8disable(); */
    q7enable();
    q8enable();
    q24disable();

    // FOR NEUMERIC FIELDS ONLY

    $("#QuestionaireQ1GeoCodeMauzaId, #QuestionaireQ1UnitSerialNo, #QuestionaireQ3UnitHeadEducationId, #QuestionaireQ3UnitHeadAge, #QuestionaireQ5UnitHeadEconomyId, #QuestionaireQ6EconomyId, #QuestionaireQ7ProductId1, #QuestionaireQ7ProductId2, #QuestionaireQ7ProductId3, #QuestionaireQ7ProductId4, #QuestionaireQ8ServiceId1, #QuestionaireQ8ServiceId2, #QuestionaireQ8ServiceId3, #QuestionaireQ8ServiceId4, #QuestionaireQ9LegalEntityTypeId, #QuestionaireQ10IsNbrInvestment, #QuestionaireQ10NbrAmountInThou, #QuestionaireQ11IsRegistered, #QuestionaireQ11RegistrarId, #QuestionaireQ12YearOfStart, #QuestionaireQ17HrMale, #QuestionaireQ17HrFemale, #QuestionaireQ17HrMaleFoc, #QuestionaireQ17HrFemaleFoc, #QuestionaireQ17HrMaleFulltime, #QuestionaireQ17HrFemaleFulltime, #QuestionaireQ17HrMaleParttime, #QuestionaireQ17HrFemaleParttime, #QuestionaireQ17HrMaleIrregular, #QuestionaireQ17HrFemaleIrregular, #QuestionaireQ27YearVatRegistered").live("keydown", function(e) {
        var key = e.charCode || e.keyCode || 0;
        // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
        return (key == 8 || key == 9 || key == 46 || (key >= 37 && key <= 40) || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));
    });

    //PREVENT TYPING ENGLISH===============================================

    $('#QuestionaireQ6EconomyDescription').bind('keypress', function(event) {
        var regex = new RegExp("^[a-zA-Z0-9]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if(regex.test(key)) {
            event.preventDefault();
            return false;
        }
    });
    
//PREVENT TYPING BANGLA===============================================
//http://www.leniel.net/2012/10/javascript-regex-jquery-to-match-only-english-characters-in-input-textbox.html#sthash.j2rF5rXE.dpbs

$('#QuestionaireQ2UnitName,#QuestionaireQ2HomeMarket,#QuestionaireQ2RoadNoName,#QuestionaireQ2HoldingNo,#QuestionaireQ2EmailAddress').bind('keypress', function(event) {
     var englishAlphabetAndWhiteSpace = new RegExp("[ -~]");
      var key = String.fromCharCode(event.which);
      if (event.keyCode == 8 || event.keyCode == 37 ||event.keyCode == 9 || event.keyCode == 46 || event.keyCode == 39 || englishAlphabetAndWhiteSpace.test(key)) {
        return true;
    }
    
    return false;
    
});

    //Input Fields Value Checking (Start Here)==========================================

    //NULL FIELD CHECKING===============================================================

    $("#QuestionaireQ2HoldingNo").blur(function() {
        if($(this).val() == '')
            alert("?????? ???????????? ?????????????????? ???????????? ?????? ??????????????????????");

    });

    $("#QuestionaireQ2RoadNoName").blur(function() {

        if($(this).val() == '') {
            var value = confirm("?????? ???????????? ?????????????????? ???????????? ?????? ??????????????????????");
            if(value) {
                alert("?????? ???????????? ?????????????????? ???????????? ?????? ??????????????? ??????????????????????");
            } else {
                autoFocus("QuestionaireQ2RoadNoName");
            }
        }
    });

    $("#QuestionaireQ2TelephoneNo").blur(function() {

        if($(this).val() == '') {
            var value = confirm("?????? ???????????? ?????????????????? ???????????? ?????? ??????????????????????");
            if(value) {
                alert("?????? ???????????? ?????????????????? ???????????? ?????? ??????????????? ??????????????????????");
            } else {
                autoFocus("QuestionaireQ2TelephoneNo");
            }
        }
    });

    $("#QuestionaireQ2TelephoneNo, #QuestionaireQ2FaxNo").live("keydown", function(e) {
        var key = e.charCode || e.keyCode || 0;
        // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
        return (key == 8 || key == 9 || key == 46 || (key >= 37 && key <= 40) || (key >= 48 && key <= 57) || (key >= 96 && key <= 105) || key == 188 || key == 173 || key == 32);
    });

    $("#QuestionaireQ2EmailAddress").blur(function() {
        email = $(this).val();
        if(validateEmail(email)) {
            autoFocus("QuestionaireQ3UnitHeadGender");
            return false;
        } else {
            alert("???????????? ??????????????? ????????????????????? ????????????");
            $("#QuestionaireQ2EmailAddress").val("");
            autoFocus("QuestionaireQ2EmailAddress");
        }

        autoFocus("QuestionaireQ2EmailAddress");
    });

    //Range Checking for Section 9===========================================================

    $('#QuestionaireQ9LegalEntityTypeId').keyup(function() {
        var value = $(this).val();

        var val2 = parseInt(value, 10);

        if(value.length >= 2 && (val2 < 01 || val2 > 12 )) {

            if(val2 == 99) {

            } else {
                $(this).val("");
                autoFocus("QuestionaireQ9LegalEntityTypeId");
                alert("????????? ?????????");
                return false;
            }

        }

        if(value.length == 2) {
            autoFocus("QuestionaireQ10IsNbrInvestment");
            $('#q9details').html(option_q9[val2]);
        } else {
            $('#q9details').html("");
        }
    });

    $("#QuestionaireQ12YearOfStart").keyup(function() {

        var value = $(this).val();
        var startYear = parseInt(value, 10);

        if(value.length >= 4 && startYear <= 1900) {

            if(startYear == 0000) {
                $('#q12details').html("<div>???????????? ?????????!</div>");
            } else {
                $('#q12details').html("<div id='invalidCode'></div>");
                alert("???????????? ?????? ????????????????????? ?");
            }

        } else if(value.length >= 4 && startYear > 2013) {
            $(this).val("");
            $('#q12details').html("<div id='invalidCode'></div>");
            alert("??????????????? ???????????? ?????????");
            return false;
        }

        if(value.length >= 4) {
            autoFocus("QuestionaireQ13SaleProcedure");
        }
    });

    $("#QuestionaireQ27YearVatRegistered").keyup(function() {
        var startYear = $('#QuestionaireQ12YearOfStart').val();
        var startYear2 = parseInt(startYear, 10);

        var val = $(this).val();
        var val2 = parseInt(val, 10);

        if(val.length >= 4 && (val2 < startYear2 || val2 > 2013 || val2 < 1991)) {
            $(this).val("");
            autoFocus("QuestionaireQ27YearVatRegistered");
            alert("??????????????????????????? ????????? ???????????? ?????????");
            return false;
        } else if(val.length >= 4) {
            autoFocus("saveQusID");
            return false;
        }
    });

    //Input field Enable/Diasable Start Here=========================================

    //Input field Enable/Diasable for Section 4========================================

    $("#QuestionaireQ4UnitType").keyup(function() {
        if($(this).val() == '1' || $(this).val() == "") {
            $("#QuestionaireQ4UnitOrgType").val("");
            $("#QuestionaireQ4UnitOrgType").attr("disabled", "disabled");
            $("#QuestionaireQ9LegalEntityTypeId").attr("disabled", "disabled");
            $("#QuestionaireQ9LegalEntityTypeId").val("");
            $('#q9details').html("");
        } else {
            $("#QuestionaireQ4UnitOrgType").removeAttr("disabled");
            $("#QuestionaireQ9LegalEntityTypeId").removeAttr("disabled");
        }

    });

    $("#QuestionaireQ4UnitType").change(function() {
        if($(this).val() == '1' || $(this).val() == "") {
            $("#QuestionaireQ4UnitOrgType").val("");
            $("#QuestionaireQ4UnitOrgType").attr("disabled", "disabled");
            $("#QuestionaireQ9LegalEntityTypeId").attr("disabled", "disabled");
        } else {
            $("#QuestionaireQ4UnitOrgType").removeAttr("disabled");
            $("#QuestionaireQ9LegalEntityTypeId").removeAttr("disabled");
        }

    });

    //Input Field Enable/Diasable Depends on section 6===============================

    $("#QuestionaireQ9LegalEntityTypeId").keyup(function() {

        var value = $(this).val();
        //var value = parseInt(value, 10);

        if(value == "05") {
            document.getElementById("QuestionaireQ16FixedCapital").readOnly = true;
            $("#QuestionaireQ16FixedCapital").val("9");
            $('#q16details').html("???????????? ?????????!");
        } else {
            document.getElementById("QuestionaireQ16FixedCapital").readOnly = false;
            $("#QuestionaireQ16FixedCapital").val("");
            $('#q16details').html("");
        }

    });

    $('#QuestionaireQ6EconomyId').keyup(function() {

       var value = $(this).val();
        

     
       
       
       if(value.length == 4 && $('#QuestionaireQ4UnitType').val() == '1') {
       	
       	if ((value >= '0111' && value <= '0809') || (value >= '0811' && value <= '0990') )
       	{
       			var value = confirm("????????? ????????? ????????????????????? ??????????????????! ???????????? ?????? ??????????????????????");
            	if(value) 
            	{
            	var value = confirm("?????? ????????????????????? ???????????? ???????????? ??????????????? ?????????, ????????? ????????? ????????????????????? ?????????????????? ?????????");
                submit_form();
                } 
            	else 
            	{
                $(this).val("");
                }
       		return false;
       	}
       	
       	else if ((value >= '1811' && value <= '2029') || (value >= '2104' && value <= '2211') || (value >= '2410' && value <= '2420') || (value >= '2910' && value <= '3011') ||  (value >= '3013' && value <= '3091') || (value >= '4100' && value <= '4530') || value == '4651' || (value >= '4911' && value <= '4912') || (value >= '5223' && value <= '5320') || (value >= '5811' && value <= '6190') || (value >= '6391' && value <= '6621') || (value >= '8411' && value <= '8541') || ((value >= '9101' && value <= '9602') && value != '9523') || value == '9900' )
       	{
       		var value = confirm("????????? ????????? ????????????????????? ??????????????????! ???????????? ?????? ??????????????????????");
            	if(value) 
            	{
            	var value = confirm("?????? ????????????????????? ???????????? ???????????? ??????????????? ?????????, ????????? ????????? ????????????????????? ?????????????????? ?????????");
                submit_form();
                } 
            	else 
            	{
                $(this).val("");
                }
       		return false;
       	}
    }
       	
       	
        if(parseInt(value, 10) >= 111 && parseInt(value, 10) <= 3412) {
            q7enable();
            q8enable();
            q24enable();
            if(value.length == 4) {
                autoFocus("QuestionaireQ7ProductId1");
            }
            autoFocusQ = 18;
            return false;
        }
        
        if((parseInt(value, 10) >= 3413 && parseInt(value, 10) <= 3509) || parseInt(value, 10) > 9900) {

            if(value.length == 4) 
            {
                q7enable();
                q8enable();
                q24disable();
                $(this).val("");
                alert("????????? ??????????????? ?????????");
                autoFocusQ = 25;
            }
        } else {

            if(value.length == 4) {
                q7enable();
                q8enable();
                q24disable();
                autoFocus("QuestionaireQ7ProductId1");
                autoFocusQ = 25;
            }
        }

    });

    $('#QuestionaireQ10IsNbrInvestment').change(function() {
        if($(this).val() == '1')
            $("#QuestionaireQ10NbrAmountInThou").removeAttr("disabled");
        else {
            $("#QuestionaireQ10NbrAmountInThou").attr("disabled", "disabled");
            $("#QuestionaireQ10NbrAmountInThou").val("");
        }

    });

    //Input field Enable/Diasable for Section 11==========================================

    $('#QuestionaireQ11IsRegistered').keyup(function() {
        if($(this).val() == '1')
            $("#QuestionaireQ11RegistrarId").removeAttr("disabled");
        else {
            $("#QuestionaireQ11RegistrarId").attr("disabled", "disabled");
            $("#QuestionaireQ11RegistrarId").val("");
            $('#q11_1details').html("");
        }

    });

    $('#QuestionaireQ11IsRegistered').change(function() {
        if($(this).val() == '1')
            $("#QuestionaireQ11RegistrarId").removeAttr("disabled");
        else
            $("#QuestionaireQ11RegistrarId").attr("disabled", "disabled");
    });

    //Input field Enable/Diasable for Section 14===========================================

    $('#QuestionaireQ14IsAccountable').keyup(function() {
        if($(this).val() == '1')
            $("#QuestionaireQ14AccountableDuration").removeAttr("disabled");
        else {
            $("#QuestionaireQ14AccountableDuration").attr("disabled", "disabled");
            $("#QuestionaireQ14AccountableDuration").val("");
            $('#q14_1details').html("");
        }

    });

    $('#QuestionaireQ14IsAccountable').change(function() {
        if($(this).val() == '1')
            $("#QuestionaireQ14AccountableDuration").removeAttr("disabled");
        else
            $("#QuestionaireQ14AccountableDuration").attr("disabled", "disabled");
    });

    //Input field Enable/Diasable for Section 22==========================================

    $('#QuestionaireQ22IsFireSecured').keyup(function() {
        if($(this).val() == '1')
            $("#QuestionaireQ22IsFireDeviceMaintained").removeAttr("disabled");
        else {
            $("#QuestionaireQ22IsFireDeviceMaintained").attr("disabled", "disabled");
            $("#QuestionaireQ22IsFireDeviceMaintained").val("");
            $('#q22_1details').html("");
        }

    });

    $('#QuestionaireQ22IsFireSecured').change(function() {
        if($(this).val() == '1')
            $("#QuestionaireQ22IsFireDeviceMaintained").removeAttr("disabled");
        else
            $("#QuestionaireQ22IsFireDeviceMaintained").attr("disabled", "disabled");
    });

    //Input field Enable/Diasable for Section 24========================================

    $('#QuestionaireQ24IsToiletAvailable').keyup(function() {
        if($(this).val() == '1')
            $("#QuestionaireQ24IsLadiesToiletAvailable").removeAttr("disabled");
        else {
            $("#QuestionaireQ24IsLadiesToiletAvailable").attr("disabled", "disabled");
            $("#QuestionaireQ24IsLadiesToiletAvailable").val("");
            $('#q24_1details').html("");
        }

    });

    $('#QuestionaireQ24IsToiletAvailable').change(function() {
        if($(this).val() == '1')
            $("#QuestionaireQ24IsLadiesToiletAvailable").removeAttr("disabled");
        else
            $("#QuestionaireQ24IsLadiesToiletAvailable").attr("disabled", "disabled");
    });

    //Input field Enable/Diasable for Section 26=========================================

    $('#QuestionaireQ26IsVatRegistered').keyup(function() {
        if($(this).val() == '1' || $(this).val() == "")
            $("#QuestionaireQ27YearVatRegistered").removeAttr("disabled");
        else {
            $("#QuestionaireQ27YearVatRegistered").attr("disabled", "disabled");
            $("#QuestionaireQ27YearVatRegistered").val("");
        }

    });

    $('#QuestionaireQ26IsVatRegistered').change(function() {
        if($(this).val() == '1' || $(this).val() == "")
            $("#QuestionaireQ27YearVatRegistered").removeAttr("disabled");
        else {
            $("#QuestionaireQ27YearVatRegistered").attr("disabled", "disabled");
            $("#QuestionaireQ27YearVatRegistered").val("");
        }

    });

    $('#QuestionaireQ17HrFemaleIrregular').keyup(function() {
        var value = $(this).val();
        if(value.length == 2) {

            var value = $('#QuestionaireQ17HrMale').val() + $('#QuestionaireQ17HrFemale').val() + $('#QuestionaireQ17HrMaleFoc').val() + $('#QuestionaireQ17HrFemaleFoc').val() + $('#QuestionaireQ17HrMaleFulltime').val() + $('#QuestionaireQ17HrFemaleFulltime').val() + $('#QuestionaireQ17HrMaleParttime').val() + $('#QuestionaireQ17HrFemaleParttime').val() + $('#QuestionaireQ17HrMaleIrregular').val() + $('#QuestionaireQ17HrFemaleIrregular').val();

            sum = parseInt(value, 10);

            if(sum <= 0) {
                autoFocus("QuestionaireQ17HrMale");
                return false;
            }

            if(autoFocusQ == 18)
                autoFocus("QuestionaireQ18MachineUses");

            if(autoFocusQ == 25)
                autoFocus("QuestionaireQ25IsTinRegistered");

        }
    });

    //	All New Events ==============================================================

    // EVENT FOR 10

    $('#QuestionaireQ10IsNbrInvestment').keyup(function() {

        var value = $(this).val();
        var value = parseInt(value, 10);

        if(value == 1) {
            $("#QuestionaireQ10NbrAmountInThou").removeAttr("disabled");
            autoFocus("QuestionaireQ10NbrAmountInThou");
            $('#q10_details').html(option_q10[value]);
            return false;
        } else if(value == 2 || value == 9) {
            $("#QuestionaireQ10NbrAmountInThou").attr("disabled", "disabled");
            autoFocus("QuestionaireQ11IsRegistered");
            $('#q10_details').html(option_q10[value]);
            return false;
        } else {
            $(this).val("");
            $('#q10_details').html("");
            return false;
        }

    });

    // TAB VALIDATION FOR SECTION 10.1 - 7 DIGIT
    $("#QuestionaireQ10NbrAmountInThou").live("keydown", function(e) {

        var key = e.charCode || e.keyCode || 0;
        var val = $(this).val();
        // console.log(val.length);

        if(val.length < 7 || val == 0 && key == 9)
            return (key != 9);

        var key = e.charCode || e.keyCode || 0;
        // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
        return (key == 8 || key == 9 || key == 46 || (key >= 37 && key <= 40) || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));

    });
    $("#QuestionaireQ10NbrAmountInThou").keyup(function() {
        var val = $(this).val();
        // console.log(val.length);

        if(val > 0 && val.length >= 7) {
            autoFocus("QuestionaireQ11IsRegistered");
            return false;
        } else if(val.length >= 7 && val == 0) {
            val = "";
            alert('???????????? ?????????????????? ???????????????');
            autoFocus("QuestionaireQ10NbrAmountInThou");
        }
    });
    //Section 11===========================================

    $('#QuestionaireQ11IsRegistered').keyup(function() {
        var value = $(this).val();
        var val2 = parseInt(value, 10);

        if(value >= 1 && value <= 3 || value == 9) {
            if(value == 1) {
                autoFocus("QuestionaireQ11RegistrarId");
            } else {
                autoFocus("QuestionaireQ12YearOfStart");
            }

            $('#q11details').html(option_q11_1[val2]);
        } else {
            $('#QuestionaireQ11IsRegistered').val("");
            $('#q11details').html("");
        }
    });

    //Section 13===================================================

    option_q13[1] = '???????????????...1';
    option_q13[2] = '?????????????????????...2';
    option_q13[3] = '???????????????????????? ??????...3';
    option_q13[9] = '???????????? ?????????...9';

    $('#QuestionaireQ13SaleProcedure').keyup(function() {
        var value = $(this).val();

        var val2 = parseInt(value, 10);

        if(value >= 1 && value <= 3 || value == 9) {
            autoFocus("QuestionaireQ14IsAccountable");
            $('#q13details').html(option_q13[val2]);
        } else {
            $('#QuestionaireQ13SaleProcedure').val("");
            $('#q13details').html("");
        }
    });

    // Options For Section 14******************************************

    option_q14[1] = '???????????????...1';
    option_q14[2] = '??????...2';
    option_q14[9] = '???????????? ?????????!...9';

    // Section 14 : Event
    $('#QuestionaireQ14IsAccountable').keyup(function() {
        var value = $(this).val();

        var val2 = parseInt(value, 10);

        if(value == 1) {
            $("#QuestionaireQ14AccountableDuration").removeAttr("disabled");
            autoFocus("QuestionaireQ14AccountableDuration");
            $('#q14details').html(option_q14[val2]);
        } else if(value == 2) {
            autoFocus("QuestionaireQ15SalaryInstr");
            $("#QuestionaireQ14AccountableDuration").attr("disabled", "disabled");
            $('#q14details').html(option_q14[val2]);
        } else if(value == 9) {
            autoFocus("QuestionaireQ15SalaryInstr");
            $("#QuestionaireQ14AccountableDuration").attr("disabled", "disabled");
            $('#q14details').html(option_q14[val2]);
        } else {
            $('#QuestionaireQ14IsAccountable').val("");
            $('#q14details').html("");
        }
    });

    // Options For Section 14_1  *******************************************************************
    option_q14_1[1] = '1-???????????????';
    option_q14_1[2] = '2-???????????????';
    option_q14_1[3] = '3-?????????????????????';
    option_q14_1[4] = '4-????????????????????????';
    option_q14_1[9] = '9-???????????? ?????????!';

    // Section 14_1 : Event
    $('#QuestionaireQ14AccountableDuration').keyup(function() {
        var value = $(this).val();

        var val2 = parseInt(value, 10);

        if(value >= 1 && value <= 4 || value == 9) {
            autoFocus("QuestionaireQ15SalaryInstr");
            $('#q14_1details').html(option_q14_1[val2]);
        } else {
            $('#QuestionaireQ14AccountableDuration').val("");
            $('#q14_1details').html("");
        }
    });

    // Options For Section 15_1   ******************************************************************
    option_q15_1[1] = '1-?????????';
    option_q15_1[2] = '2-?????????';
    option_q15_1[3] = '3-????????????????????????';
    option_q15_1[9] = '9-???????????? ?????????!';

    // Section 15_1 : Event
    $('#QuestionaireQ15SalaryInstr').keyup(function() {
        var value = $(this).val();

        var val2 = parseInt(value, 10);

        if(value >= 1 && value <= 3 || value == 9) {
            autoFocus("QuestionaireQ15SalaryPeriod");
            $('#q15_1details').html(option_q15_1[val2]);
        }
        /* else
         if ( value == 9) {
         autoFocus("QuestionaireQ16FixedCapital");
         $('#q15_1details').html(option_q15_1[val2]);
         } */
        else {
            $('#QuestionaireQ15SalaryInstr').val("");
            $('#q15_1details').html("");
        }
    });

    // Options For Section 15_2  ***********************************************************************
    option_q15_2[1] = '1-???????????????';
    option_q15_2[2] = '2-???????????????????????????';
    option_q15_2[3] = '3-???????????????';
    option_q15_2[4] = '4-????????????????????????';
    option_q15_2[5] = '5-???????????????????????? ??????';
    option_q15_2[9] = '9-???????????? ?????????!';

    // Section 15_2 : Event
    $('#QuestionaireQ15SalaryPeriod').keyup(function() {
        var value = $(this).val();

        var val2 = parseInt(value, 10);

        if(value >= 1 && value <= 5 || value == 9) {
            autoFocus("QuestionaireQ16FixedCapital");
            $('#q15_2details').html(option_q15_2[val2]);
        } else {
            $('#QuestionaireQ15SalaryPeriod').val("");
            $('#q15_2details').html("");
        }
    });

    option_q16[1] = '??? ????????? ???????????? ?????????????????????';
    option_q16[2] = '??? - ?????? ????????? ???????????? ?????????????????????';
    option_q16[3] = '?????? ????????? - ??? ???????????? ???????????? ?????????????????????';
    option_q16[4] = '???-?????? ???????????? ???????????? ?????????????????????';
    option_q16[5] = '??????-?????? ???????????? ???????????? ?????????????????????';
    option_q16[6] = '??????-?????? ???????????? ???????????? ?????????????????????';
    option_q16[7] = '?????? ???????????? +';
    option_q16[9] = '???????????? ?????????!';

    //SECTION 16
    $('#QuestionaireQ16FixedCapital').keyup(function() {
        var value = $(this).val();

        var val2 = parseInt(value, 10);

        if(value >= 1 && value <= 7 || value == 9) {
            autoFocus("QuestionaireQ17HrMale");
            $('#q16details').html(option_q16[val2]);
        } else {
            $('#QuestionaireQ16FixedCapital').val("");
            $('#q16details').html("");
        }
    });

    //Table 4==========================================================================

    //SECTION 18=================================================================
    option_q18[1] = '????????????????????? ??????????????? ...1';
    option_q18[2] = '??????????????? ???????????????....2';
    option_q18[3] = '????????????....3';
    option_q18[4] = '???????????????????????????....4';
    option_q18[5] = '???????????????????????? ??????....5';
    option_q18[9] = '???????????? ?????????!....9';

    $('#QuestionaireQ18MachineUses').keyup(function() {
        var value = $(this).val();

        var val2 = parseInt(value, 10);

        if(value >= 1 && value <= 5 || value == 9) {
            autoFocus("QuestionaireQ19Marketing");
            $('#q18details').html(option_q18[val2]);
        } else {
            $('#QuestionaireQ18MachineUses').val("");
            $('#q18details').html("");
        }
    });

    //SECTION 19======================================================================

    option_q19[1] = '???????????????????????? ?????????????????????....1';
    option_q19[2] = '???????????????????????? ????????????????????? ....2';
    option_q19[3] = '????????????????????? ??? ?????????????????????....3';
    option_q19[4] = '???????????????????????? ??????......4';
    option_q19[9] = '???????????? ?????????!....9';

    $('#QuestionaireQ19Marketing').keyup(function() {
        var value = $(this).val();

        var val2 = parseInt(value, 10);

        if(value >= 1 && value <= 4 || value == 9) {
            autoFocus("QuestionaireQ20FuelUses");

            $('#q19details').html(option_q19[val2]);
        } else {
            $('#QuestionaireQ19Marketing').val("");
            $('#q19details').html("");
        }
    });

    //SECTION 20======================================================================

    option_q20[1] = '?????????????????????.....1';
    option_q20[2] = '?????????????????????????????? ....2';
    option_q20[3] = '???????????????.....3';
    option_q20[4] = '????????????????????????????????? ....4';
    option_q20[5] = '????????????......5';
    option_q20[6] = '?????????......6';
    option_q20[7] = '????????????????????????......7';
    option_q20[8] = '???????????????????????? ??????....8';
    option_q20[9] = '???????????? ?????????!......9';

    $('#QuestionaireQ20FuelUses').keyup(function() {
        var value = $(this).val();

        var val2 = parseInt(value, 10);

        if(value >= 1 && value <= 9) {
            autoFocus("QuestionaireQ21IsItEnabled");

            $('#q20details').html(option_q20[val2]);
        } else {
            $('#QuestionaireQ20FuelUses').val("");
            $('#q20details').html("");
        }
    });

    //SECTION 21======================================================================

    option_yes_no[1] = '???????????????.....1';
    option_yes_no[2] = '??????......2';
    option_yes_no[9] = '???????????? ?????????!..9';

    $('#QuestionaireQ21IsItEnabled').keyup(function() {
        var value = $(this).val();

        var val2 = parseInt(value, 10);

        if(value >= 1 && value <= 2 || value == 9) {
            autoFocus("QuestionaireQ22IsFireSecured");

            $('#q21details').html(option_yes_no[val2]);
        } else {
            $('#QuestionaireQ21IsItEnabled').val("");
            $('#q21details').html("");
        }
    });

    //SECTION 22======================================================================

    $('#QuestionaireQ22IsFireSecured').keyup(function() {
        var value = $(this).val();

        var val2 = parseInt(value, 10);

        if(value >= 1 && value <= 2 || value == 9) {
            if(value == 1) {
                autoFocus("QuestionaireQ22IsFireDeviceMaintained");
            } else {
                autoFocus("QuestionaireQ23IsGarbageProper");
            }

            $('#q22details').html(option_yes_no[val2]);
        } else {
            $('#QuestionaireQ22IsFireSecured').val("");
            $('#q22details').html("");
        }
    });

    //SECTION 22_1======================================================================

    $('#QuestionaireQ22IsFireDeviceMaintained').keyup(function() {
        var value = $(this).val();

        var val2 = parseInt(value, 10);

        if(value >= 1 && value <= 2 || value == 9) {
            autoFocus("QuestionaireQ23IsGarbageProper");

            $('#q22_1details').html(option_yes_no[val2]);
        } else {
            $('#QuestionaireQ22IsFireDeviceMaintained').val("");
            $('#q22_1details').html("");
        }
    });

    //SECTION 23======================================================================

    $('#QuestionaireQ23IsGarbageProper').keyup(function() {
        var value = $(this).val();

        var val2 = parseInt(value, 10);

        if(value >= 1 && value <= 2 || value == 9) {
            autoFocus("QuestionaireQ24IsToiletAvailable");

            $('#q23details').html(option_yes_no[val2]);
        } else {
            $('#QuestionaireQ23IsGarbageProper').val("");
            $('#q23details').html("");
        }
    });

    //SECTION 24======================================================================

    $('#QuestionaireQ24IsToiletAvailable').keyup(function() {
        var value = $(this).val();

        var val2 = parseInt(value, 10);

        if(value >= 1 && value <= 2 || value == 9) {
            if(value == 1) {
                autoFocus("QuestionaireQ24IsLadiesToiletAvailable");
            } else {
                autoFocus("QuestionaireQ25IsTinRegistered");
            }

            $('#q24details').html(option_yes_no[val2]);
        } else {
            $('#QuestionaireQ24IsToiletAvailable').val("");
            $('#q24details').html("");
        }
    });

    //SECTION 24_1======================================================================

    $('#QuestionaireQ24IsLadiesToiletAvailable').keyup(function() {
        var value = $(this).val();

        var val2 = parseInt(value, 10);

        if(value >= 1 && value <= 2 || value == 9) {
            autoFocus("QuestionaireQ25IsTinRegistered");
            $('#q24_1details').html(option_yes_no[val2]);
        } else {
            $('#QuestionaireQ24IsLadiesToiletAvailable').val("");
            $('#q24_1details').html("");
        }
    });

    //SECTION 25======================================================================

    $('#QuestionaireQ25IsTinRegistered').keyup(function() {
        var value = $(this).val();

        var val2 = parseInt(value, 10);

        if(value >= 1 && value <= 2 || value == 9) {
            autoFocus("QuestionaireQ26IsVatRegistered");
            $('#q25details').html(option_yes_no[val2]);

        } else {
            $('#QuestionaireQ25IsTinRegistered').val("");
            $('#q25details').html("");
        }
    });

    //SECTION 26======================================================================

    $('#QuestionaireQ26IsVatRegistered').keyup(function() {
        var value = $(this).val();

        var val2 = parseInt(value, 10);

        if(value == 1 || value == 2 || value == 9) {
            if(value == 1) {
                autoFocus("QuestionaireQ27YearVatRegistered");
            } else if(value == 2 || value == 9) {
                autoFocus("saveQusID");
            }

            $('#q26details').html(option_yes_no[val2]);
        } else {
            $('#QuestionaireQ26IsVatRegistered').val("");
            $('#q26details').html("");
        }
    });

    /* =======================================================================================
    *                            ALL AJAX REQUESTS
    *
    ====================================================================================*/

    //GET MUZA NAME

    $('#QuestionaireQ1GeoCodeMauzaId').change(function() {
        IS_CACHE = "YES";
        $('#QuestionaireQ1GeoCodeMauzaName').val("");
        $("#QuestionaireQ2VillageMaholla").empty();

        var selectvalue = $('#QuestionaireQ1GeoCodeMauzaId').val();
        var pathname = window.location.pathname;
        var path = pathname.split('/edit_ques');
        path1 = path[0] + "/getMuzaName";
        path2 = path[0] + "/getVillageName";

        $.ajax({
            url : path1,
            type : "POST",
            dataType : 'json',
            data : {
                mauza_code : selectvalue,
                book_id : $('#QuestionaireBookId').val(),
                rmo_code : $('#QuestionaireRmoCode2').val()
            },
            success : function(data) {
                if($.isEmptyObject(data))
            	{
            		$('#QuestionaireQ1GeoCodeMauzaId').val("");
                    alert("????????? ????????????  ???????????? RMO ?????????");
                    autoFocus("QuestionaireQ1GeoCodeMauzaId");
                    return false;
            	}
              
                $.each(data, function(index, element) {

                    $('#QuestionaireQ1GeoCodeMauzaName').val(element);
                    
                    if($('#QuestionaireRmoCode2').val() == "2" || $('#QuestionaireRmoCode2').val() == "9" || $('#QuestionaireRmoCode2').val() == "5") {
                        $("#QuestionaireQ2VillageMaholla").empty();
                        $("#QuestionaireQ2VillageMaholla").append($("<option />").val(element).text(element));
                        return true;
                    } else {
                        get_village(path2, selectvalue, $('#QuestionaireBookId').val());
                        return true;
                    }

                });

            }
        });
    });

    //SHOW RMO DETAILS====================================================

    $("#QuestionaireRmoCode").change(function() {
        $('#showRMO').html("");
        var selectvalue = $('#QuestionaireRmoCode').val();
        var pathname = window.location.pathname;
        var path = pathname.split('/edit_ques');
        path = path[0] + "/getRmoName";

        $.ajax({
            url : path,
            type : "POST",
            dataType : 'json',
            data : {

                rmo_code : selectvalue,

            },
            success : function(data) {
                $('#showRMO').html("");
                var chk = "NO";
                $.each(data, function(index, element) {
                    $('#showRMO').html(element);
                    chk = "YES";

                });

                if(chk == "NO") {
                    $('#QuestionaireRmoCode').val("");
                }
            }
        });

    });

    //Get Unit Setial Number============================================================

    $('#QuestionaireQ1UnitSerialNo').change(function() {
        IS_CACHE = "YES";
        var selectvalue = $('#QuestionaireQ1UnitSerialNo').val();
        var pathname = window.location.pathname;
        var path = pathname.split('/edit_ques');
        path = path[0] + "/getUnitNumber";

        $.ajax({
            url : path,
            type : "POST",
            dataType : 'json',
            data : {
                unit_number : selectvalue,
                book_id : $('#QuestionaireBookId').val()
            },
            success : function(data) {
                var chk = "NO";
                $.each(data, function(index, element) {
                    console.log('Data Found');
                    $('#QuestionaireQ1UnitSerialNo').val("");
                    alert("?????? ????????????????????? ???????????? ????????? ?????????");
                    autoFocus("QuestionaireQ1UnitSerialNo");

                });
                if(chk == "NO") {
                    console.log('Looks ok');
                    chk = "YES";
                }
            }
        });
    });

    //GET Education Description============================================================

    $('#QuestionaireQ3UnitHeadEducationId').change(function() {
        $('#q3unitheadheducation').html("Please wait...");
        var selectvalue = $('#QuestionaireQ3UnitHeadEducationId').val();
        var pathname = window.location.pathname;
        var path = pathname.split('/edit_ques');
        path = path[0] + "/getEductionDesc";

        $.ajax({
            url : path,
            type : "POST",
            dataType : 'json',
            data : {
                education_code : selectvalue,

            },
            success : function(data) {
                $('#q3unitheadheducation').html("<div id='invalidCode'>????????? ?????????!</div>");
                var chk = "NO";
                $.each(data, function(index, element) {
                    $('#q3unitheadheducation').html("<b>" + element + "</b>");
                    chk = "YES";
                });
                if(chk == "NO") {
                    $('#QuestionaireQ3UnitHeadEducationId').val("");
                    autoFocus("QuestionaireQ3UnitHeadEducationId");
                }
            }
        });
    });

    //Get Economy Desc===================================================================

    $('#QuestionaireQ5UnitHeadEconomyId').change(function() {
        $('#QuestionaireEconomyDescBng').val("");

        var selectvalue = $('#QuestionaireQ5UnitHeadEconomyId').val();
        var pathname = window.location.pathname;
        var path = pathname.split('/edit_ques');
        path = path[0] + "/getEconomyDesc";

        $.ajax({
            url : path,
            type : "POST",
            dataType : 'json',
            data : {
                economy_code : selectvalue,
                //book_id: $('#QuestionaireBookId').val()
            },
            success : function(data) {
                if(data == "") {
                    autoFocus("QuestionaireQ5UnitHeadEconomyId");
                    $('#QuestionaireQ5UnitHeadEconomyId').val("");
                    alert("????????? ??????????????? ?????????");

                }
                $.each(data, function(index, element) {
                    $('#QuestionaireEconomyDescBng').val(element);
                });
            }
        });
    });

    $('#new_question').click(function() {
        window.location.reload(true);
        return false;
    });

    RMO_MAIN_CODE = $('#QuestionaireRmoCode2').val();

    $('#QuestionaireRmoCode').keyup(function() {
        var value2 = $(this).val();
        var value = parseInt(value2, 10);

        $('#QuestionaireRmoCode2').val(value2);

        if(value2.length == 1) {
            if(value == 1 || value == 3 || value == 5 || value == 7) {
                autoFocus("QuestionaireQ1GeoCodeMauzaId");
                $('#QuestionaireRmoCode2').val(value2);

            } else {
                $(this).val("");
                $('#QuestionaireRmoCode2').val(RMO_MAIN_CODE);
                alert("RMO ??????????????? ???????????? ????????? ???????????? ????????? ????????? 1, 3, 5  ????????????  7");
            }
        }
    });

});
