<?php echo $this -> Session -> flash(); ?>
<?php echo $this -> Form -> create('Book'); ?>

<style>
	#BookGeoCodeDivnName, #BookGeoCodeZilaName, #BookGeoCodeUpazilaName, #BookGeoCodeRmaName, #BookGeoCodePsaName, #BookGeoCodeUnionName, #BookGeoCodeMauzaName, #BookGeoCodeVillageName {
		border: 1px solid #ccc;
		border-radius: 5px;
		height: 20px;
		width: 200px;
		padding: 2px;
		margin-top: -37px;
		margin-left: 415px;
		text-align: center;
	}

	#book_heading22 {
		margin-left: 228px;
		width: 600px;
	}
	#book_heading22 ul li {
		display: inline-block;
		margin-right: 200px;
	}


</style>
<script>
	var divnCode = new Array();

	divnCode[''] = '';
	divnCode['BARISAL'] = '10';
	divnCode['CHITTAGONG'] = '20';
	divnCode['DHAKA'] = '30';
	divnCode['KHULNA'] = '40';
	divnCode['RAJSHAHI'] = '50';
	divnCode['RANGPUR'] = '55';
	divnCode['SYLHET'] = '60';

	var zilaCode = new Array();
	var upaZilaCode = new Array();
	var unionCode = new Array();
	var psaCode = new Array();
	var muzaCode = new Array();
	var villageCode = new Array();

	//  Collecting data by ajax request using json.
	$(document).ready(function() {

		$('#BookGeoCodeDivnId').change(function() {

			var div = $('#BookGeoCodeDivnId :selected').text();

			$('#BookGeoCodeDivnName').html(divnCode[div]);

			var selectvalue = $(this).val();
			var pathname = window.location.pathname;
			var path = pathname.split('/get_geo');
			path = path[0] + "/getZila";
			var data = 'id=' + selectvalue;
			$("#BookGeoCodeZilaId").empty();
			$.ajax({
				url : path,
				type : "POST",
				dataType : 'json',
				data : {
					geo_code_divn_id : selectvalue
				},
				success : function(data) {
					$("#BookGeoCodeZilaId").empty();
					$("#BookGeoCodeZilaId").append($("<option />").val("").text(""));
					zilaCode = new Array();
					$.each(data, function(index, element) {
						zilaCode[element.GeoCodeZila.id] = element.GeoCodeZila.zila_code;
						$("#BookGeoCodeZilaId").append($("<option />").val(element.GeoCodeZila.id).text(element.GeoCodeZila.zila_name));
					});
				}
			});
		});

		$('#BookGeoCodeZilaId').change(function() {
			var selectvalue = $(this).val();
			var pathname = window.location.pathname;
			var path = pathname.split('/get_geo');
			path = path[0] + "/getUpaZila";
			var data = 'id=' + selectvalue;
			$("#BookGeoCodeUpazilaId").empty();
			$.ajax({
				url : path,
				type : "POST",
				dataType : 'json',
				data : {
					geo_code_zila_id : selectvalue
				},
				success : function(data) {
					$("#BookGeoCodeUpazilaId").empty();
					$('#BookGeoCodeZilaName').html(zilaCode[selectvalue]);
					upaZilaCode = new Array();
					$("#BookGeoCodeUpazilaId").append($("<option />").val("").text(""));
					$.each(data, function(index, element) {
						upaZilaCode[element.GeoCodeUpazila.id] = element.GeoCodeUpazila.upzila_code;
						$("#BookGeoCodeUpazilaId").append($("<option />").val(element.GeoCodeUpazila.id).text(element.GeoCodeUpazila.upzila_name));
					});
				}
			});
		});

		$('#BookGeoCodeUpazilaId').change(function() {
			var selectvalue = $(this).val();
			var pathname = window.location.pathname;
			var path = pathname.split('/get_geo');
			path = path[0] + "/getPSA";
			var data = 'id=' + selectvalue;
			$("#BookGeoCodePsaId").empty();
			$.ajax({
				url : path,
				type : "POST",
				dataType : 'json',
				data : {
					geo_code_upazila_id : selectvalue,
				},
				success : function(data) {
					
					$("#BookGeoCodePsaId").empty();
					$("#BookGeoCodePsaId").append($("<option />").val("").text(""));

					$('#BookGeoCodeUpazilaName').html(upaZilaCode[selectvalue]);
					psaCode = new Array();
					$.each(data, function(index, element) {
						
						psaCode[element.GeoCodePsa.id] = element.GeoCodePsa.psa_code;
						$("#BookGeoCodePsaId").append($("<option />").val(element.GeoCodePsa.id).text(element.GeoCodePsa.psa_name));
					});
					$("#BookGeoCodePsaId").append($("<option />").val('NON_PSA').text("NON PSA/CC"));
				}
			});

			
		});


		$('#BookGeoCodePsaId').change(function() {
			var pathname = window.location.pathname;
			var path = pathname.split('/get_geo');
			path = path[0] + "/getUnionWithNonPSA";
			$("#BookGeoCodeUnionId").empty();
			var psa;
			if($('#BookGeoCodePsaId').val() == "NON_PSA") psa = 1;
			else if($('#BookGeoCodePsaId').val() != "") psa = 2;
			else return false;
			

			$.ajax({
				url : path,
				type : "POST",
				dataType : 'json',
				data : {
					geo_code_upazila_id : $('#BookGeoCodeUpazilaId').val(),
					geo_code_psa_nonpsa : psa,
					geo_code_psa_id : $('#BookGeoCodePsaId').val()
					

				},
				success : function(data) {
					$("#BookGeoCodeUnionId").empty();
					unionCode = new Array();
					$("#BookGeoCodeUnionId").append($("<option />").val("").text(""));
					$.each(data, function(index, element) {
						unionCode[element.GeoCodeUnion.id] = element.GeoCodeUnion.union_code;
						$("#BookGeoCodeUnionId").append($("<option />").val(element.GeoCodeUnion.id).text(element.GeoCodeUnion.union_name));
					});

				}
			});
		});

		$('#BookGeoCodeUnionId').change(function() {
			var selectvalue = $(this).val();
			var pathname = window.location.pathname;
			var path = pathname.split('/get_geo');
			path = path[0] + "/getMuza";
			var data = 'id=' + selectvalue;
			$("#BookGeoCodeMauzaId").empty();

			$.ajax({
				url : path,
				type : "POST",
				dataType : 'json',
				data : {
					geo_code_union_id : selectvalue,
					geo_code_rmo_id : $('#BookGeoCodeRmoId').val()

				},
				success : function(data) {
					$("#BookGeoCodeMauzaId").empty();
					$("#BookGeoCodeMauzaId").append($("<option />").val("").text(""));
					$('#BookGeoCodeUnionName').html(unionCode[selectvalue]);
					muzaCode = new Array();
					$.each(data, function(index, element) {
						muzaCode[element.GeoCodeMauza.id] = element.GeoCodeMauza.mauza_code;
						$("#BookGeoCodeMauzaId").append($("<option />").val(element.GeoCodeMauza.id).text(element.GeoCodeMauza.mauza_name));
					});

				}
			});
		});

		$('#BookGeoCodeMauzaId').change(function() {
			var selectvalue = $(this).val();
			var pathname = window.location.pathname;
			var path = pathname.split('/get_geo');
			path = path[0] + "/getVillages";
			var data = 'id=' + selectvalue;
			$("#BookGeoCodeVillageId").empty();

			$.ajax({
				url : path,
				type : "POST",
				dataType : 'json',
				data : {

					geo_code_muza_id : selectvalue,
					geo_code_rmo_id : $('#BookGeoCodeRmoId').val(),
				},
				success : function(data) {
					$('#BookGeoCodeMauzaName').html(muzaCode[selectvalue]);
					villageCode = new Array();
					$("#BookGeoCodeVillageId").empty();
					$("#BookGeoCodeVillageId").append($("<option />").val("").text(""));
					$.each(data, function(index, element) {

						villageCode[element.GeoCodeVillage.id] = element.GeoCodeVillage.village_code;
						$("#BookGeoCodeVillageId").append($("<option/>").val(element.GeoCodeVillage.id).text(element.GeoCodeVillage.village_name));
					});
				}
			});
		});

		$('#BookGeoCodeVillageId').change(function() {
			$('#BookGeoCodeVillageName').html(villageCode[$('#BookGeoCodeVillageId').val()]);
		});

		$('#BookGeoCodePsaId').change(function() {
			$('#BookGeoCodePsaName').html(psaCode[$('#BookGeoCodePsaId').val()]);
		});
	});


</script>

<fieldset>
	<legend>
		?????????&nbsp;?????????
	</legend>

	<div id="book_heading22">
		<ul>
			<li>
				?????????
			</li>
			<li>
				?????????
			</li>
		</ul>
	</div>

	<?php echo $this -> Form -> input('geo_code_divn_id', array('empty' => '', 'options' => $divns, 'label' => '???????????????')); ?>
	<div id="BookGeoCodeDivnName" class="message"></div>

	<?php echo $this -> Form -> input('geo_code_zila_id', array('empty' => '', 'label' => '????????????')); ?>

	<div id="BookGeoCodeZilaName" class="message"></div>

	<?php echo $this -> Form -> input('geo_code_upazila_id', array('empty' => '', 'label' => '??????????????????/????????????')); ?>

	<div id="BookGeoCodeUpazilaName" class="message"></div>

	<!--<div id="BookGeoCodeRmaName" class="message"></div>-->

	<?php echo $this -> Form -> input('geo_code_psa_id', array('empty' => '', 'label' => '??????????????????/???????????? ???????????????????????????')); ?>

	<div id="BookGeoCodePsaName" class="message"></div>

	<?php echo $this -> Form -> input('geo_code_union_id', array('empty' => '', 'label' => '??????????????????/??????????????????')); ?>

	<div id="BookGeoCodeUnionName" class="message"></div>

	<?php echo $this -> Form -> input('geo_code_mauza_id', array('empty' => '', 'label' => '????????????')); ?>
	<div id="BookGeoCodeMauzaName" class="message"></div>

	<?php

	echo $this -> Form -> input('geo_code_village_id', array('empty' => '', 'label' => '???????????????'));
	?>
	<div id="BookGeoCodeVillageName" class="message">

	</div>

</fieldset>
</br>

