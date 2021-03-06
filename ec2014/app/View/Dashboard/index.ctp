<?php echo $this -> Session -> flash(); ?>

<style>
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
	$(document).ready(function() {
/*
		$("#DashboardGeoCodePsaNonpsa").change(function() {

			$("#DashboardGeoCodePsaId").empty();
			$("#DashboardGeoCodeUnionId").empty();

			if($(this).val() == '') {

				return false;
			} else if($(this).val() == 1) {
				getUnion(1, $('#DashboardGeoCodeUpazilaId').val());
			} else if($(this).val() == 2) {
				getPsa($('#DashboardGeoCodeUpazilaId').val());
				getUnion(2, $('#DashboardGeoCodeUpazilaId').val());
			}

		});
*/
		$('#DashboardGeoCodeDivnId').change(function() {
			var selectvalue = $(this).val();
			getZila(selectvalue);
		});

		$('#DashboardGeoCodeZilaId').change(function() {
			var selectvalue = $(this).val();
			getUpazila(selectvalue);

		});

		 $('#DashboardGeoCodeUpazilaId').change(function() {
			 var selectvalue = $(this).val();
			 getPsa(selectvalue);
			 //getUnion(selectvalue);
		 });

		$('#DashboardGeoCodeUnionId').change(function() {
			var selectvalue = $(this).val();
			getMuza(selectvalue);
			getBooks(selectvalue);
		});

		$('#DashboardGeoCodeMauzaId').change(function() {
			var selectvalue = $(this).val();
			getVillage(selectvalue);
		});

		$('#DashboardGeoCodePsaId').change(function() {
			var selectvalue = $(this).val();
			$('#DashboardOldGeoCodePsaId').val(selectvalue);

			if(selectvalue == "NON_PSA")
			{
				getUnion(1, $('#DashboardGeoCodeUpazilaId').val());
			}
			else if(selectvalue != "")
			{
				getUnion(2, $('#DashboardGeoCodeUpazilaId').val());
			}
			
		});

		$('#DashboardGeoCodeVillageId').change(function() {
			var selectvalue = $(this).val();
			$('#DashboardOldGeoCodeVillageId').val(selectvalue);
		});

		$('#DashboardBookId').change(function() {
			var selectvalue = $(this).val();
			$("#DashboardOldBookId").val(selectvalue);
		});

		//RELOAD OLD VALUES==============================================================================
		if($('#DashboardOldGeoCodeDivnId').val() != '') {
			getZila($('#DashboardOldGeoCodeDivnId').val());

			if($('#DashboardOldGeoCodeZilaId').val() != '') {
				getUpazila($('#DashboardOldGeoCodeZilaId').val());

				if($('#DashboardOldGeoCodeUpazilaId').val() != '') {
					getPsa($('#DashboardOldGeoCodeUpazilaId').val());

					if($('#DashboardOldGeoCodePsaId').val() != '') {

						if($('#DashboardOldGeoCodePsaId').val() == "NON_PSA")
						{
							getUnion(1, $('#DashboardOldGeoCodeUpazilaId').val());
						}
						else if($('#DashboardOldGeoCodePsaId').val() != "")
						{
							getUnion(2, $('#DashboardOldGeoCodeUpazilaId').val());
						}

					/*if($("#DashboardOldGeoCodePsaNonpsa").val() == 1) {
						getUnion($("#DashboardOldGeoCodePsaNonpsa").val(), $('#DashboardOldGeoCodeUpazilaId').val());
					} else if($("#DashboardOldGeoCodePsaNonpsa").val() == 2) {
						getPsa($('#DashboardOldGeoCodeUpazilaId').val());
						getUnion($("#DashboardOldGeoCodePsaNonpsa").val(), $('#DashboardOldGeoCodeUpazilaId').val());
					}*/

					if($('#DashboardOldGeoCodeUnionId').val() != '') {
						getMuza($('#DashboardOldGeoCodeUnionId').val());
						getBooks($('#DashboardOldGeoCodeUnionId').val());

						if($('#DashboardOldGeoCodeMauzaId').val() != '') {
							getVillage($('#DashboardOldGeoCodeMauzaId').val());
						}
					}

				  }
				}

			}
		}
		//END RELOAD OLD VALUES==============================================================================

	});

	function getZila(selectvalue) {
		$('#DashboardOldGeoCodeDivnId').val(selectvalue);
		var pathname = window.location.pathname;
		var path = pathname.split('/Dashboard');
		path = path[0] + "/Geos/getZila";
		$("#DashboardGeoCodeZilaId").empty();

		$.ajax({
			url : path,
			type : "POST",
			dataType : 'json',
			data : {
				geo_code_divn_id : selectvalue
			},
			success : function(data) {
				$("#DashboardGeoCodeZilaId").empty();
				$("#DashboardGeoCodeZilaId").append($("<option />").val("").text(""));
				$.each(data, function(index, element) {
					$("#DashboardGeoCodeZilaId").append($("<option />").val(element.GeoCodeZila.id).text(element.GeoCodeZila.zila_name));
				});

				$("#DashboardGeoCodeZilaId").val($('#DashboardOldGeoCodeZilaId').val());
			}
		});
	}

	function getUpazila(selectvalue) {
		$('#DashboardOldGeoCodeZilaId').val(selectvalue);
		var pathname = window.location.pathname;
		var path = pathname.split('/Dashboard');
		path = path[0] + "/Geos/getUpaZila";
		$("#DashboardGeoCodeUpazilaId").empty();

		$.ajax({
			url : path,
			type : "POST",
			dataType : 'json',
			data : {
				geo_code_zila_id : selectvalue
			},
			success : function(data) {
				$("#DashboardGeoCodeUpazilaId").empty();
				$("#DashboardGeoCodeUpazilaId").append($("<option />").val("").text(""));
				$.each(data, function(index, element) {
					$("#DashboardGeoCodeUpazilaId").append($("<option />").val(element.GeoCodeUpazila.id).text(element.GeoCodeUpazila.upzila_name));
				});

				$("#DashboardGeoCodeUpazilaId").val($('#DashboardOldGeoCodeUpazilaId').val());
			}
		});

	}

	function getPsa(selectvalue) {
		$('#DashboardOldGeoCodeUpazilaId').val(selectvalue);
		var pathname = window.location.pathname;
		var path = pathname.split('/Dashboard');
		path = path[0] + "/Geos/getPSA";
		$("#DashboardGeoCodePsaId").empty();

		$.ajax({
			url : path,
			type : "POST",
			dataType : 'json',
			data : {
				geo_code_upazila_id : selectvalue
			},
			success : function(data) {
				$("#DashboardGeoCodePsaId").empty();
				$("#DashboardGeoCodePsaId").append($("<option />").val("").text(""));
				$.each(data, function(index, element) {
					$("#DashboardGeoCodePsaId").append($("<option />").val(element.GeoCodePsa.id).text(element.GeoCodePsa.psa_name));
				});
				$("#DashboardGeoCodePsaId").append($("<option />").val('NON_PSA').text("NON PSA/CC"));

				$("#DashboardGeoCodePsaId").val($('#DashboardOldGeoCodePsaId').val());
			}
		});
	}

	function getUnion(selectvalue, upazila_id) {
		if(selectvalue == "" || upazila_id == "")
			return false;
		var pathname = window.location.pathname;
		var path = pathname.split('/Dashboard');
		path = path[0] + "/Geos/getUnionWithNonPSA";
		$("#DashboardGeoCodeUnionId").empty();
		
		if($('#DashboardGeoCodePsaId').val() == "") var psa_id = $('#DashboardGeoCodePsaId').val();
		else var psa_id = $('#DashboardOldGeoCodePsaId').val();
		
		$.ajax({
			url : path,
			type : "POST",
			dataType : 'json',
			data : {
				geo_code_upazila_id : upazila_id,
				geo_code_psa_nonpsa : selectvalue,
				geo_code_psa_id : psa_id
			},
			success : function(data) {
				$("#DashboardGeoCodeUnionId").empty();
				$("#DashboardGeoCodeUnionId").append($("<option />").val("").text(""));
				$.each(data, function(index, element) {
					$("#DashboardGeoCodeUnionId").append($("<option />").val(element.GeoCodeUnion.id).text(element.GeoCodeUnion.union_name));
				});

				$("#DashboardGeoCodeUnionId").val($('#DashboardOldGeoCodeUnionId').val());

			}
		});
	}

	function getMuza(selectvalue) {
		$('#DashboardOldGeoCodeUnionId').val(selectvalue);
		var pathname = window.location.pathname;
		var path = pathname.split('/Dashboard');
		path = path[0] + "/Geos/getMuza";
		$("#DashboardGeoCodeMauzaId").empty();

		$.ajax({
			url : path,
			type : "POST",
			dataType : 'json',
			data : {
				geo_code_union_id : selectvalue
			},
			success : function(data) {
				$("#DashboardGeoCodeMauzaId").empty();
				$("#DashboardGeoCodeMauzaId").append($("<option />").val("").text(""));
				$.each(data, function(index, element) {
					$("#DashboardGeoCodeMauzaId").append($("<option />").val(element.GeoCodeMauza.id).text(element.GeoCodeMauza.mauza_name));
				});

				$("#DashboardGeoCodeMauzaId").val($('#DashboardOldGeoCodeMauzaId').val());

			}
		});
	}

	function getBooks(selectvalue) {
		//$('#DashboardOldGeoCodeUnionId').val(selectvalue);
		var pathname = window.location.pathname;
		var path = pathname.split('/Dashboard');
		path = path[0] + "/Geos/getBooks";
		$("#DashboardBookId").empty();

		$.ajax({
			url : path,
			type : "POST",
			dataType : 'json',
			data : {
				geo_code_union_id : selectvalue
			},
			success : function(data) {
				$("#DashboardBookId").empty();
				$("#DashboardBookId").append($("<option />").val("").text(""));
				$.each(data, function(index, element) {

					$("#DashboardBookId").append($("<option />").val(element).text(element));
				});

				$("#DashboardBookId").val($('#DashboardOldBookId').val());

			}
		});
	}

	function getVillage(selectvalue) {
		$('#DashboardOldGeoCodeMauzaId').val(selectvalue);
		var pathname = window.location.pathname;
		var path = pathname.split('/Dashboard');
		path = path[0] + "/Geos/getVillages";
		$("#DashboardGeoCodeVillageId").empty();

		$.ajax({
			url : path,
			type : "POST",
			dataType : 'json',
			data : {

				geo_code_muza_id : selectvalue
			},
			success : function(data) {
				$("#DashboardGeoCodeVillageId").empty();
				$("#DashboardGeoCodeVillageId").append($("<option />").val("").text(""));
				$.each(data, function(index, element) {
					$("#DashboardGeoCodeVillageId").append($("<option/>").val(element.GeoCodeVillage.village_name).text(element.GeoCodeVillage.village_name));
				});

				$("#DashboardGeoCodeVillageId").val($('#DashboardOldGeoCodeVillageId').val());
			}
		});
	}


</script>

<fieldset>
	<legend>
		<?php echo __('Data Entry Status'); ?>
	</legend>

	<?php echo $this -> Form -> create();

	echo $this -> Form -> input('geo_code_divn_id', array('empty' => '', 'options' => $divns, 'label' => '???????????????', 'value' => $old_geo_code_divn_id));
	echo $this -> Form -> input('geo_code_zila_id', array('empty' => '', 'label' => '????????????'));
	echo $this -> Form -> input('geo_code_upazila_id', array('empty' => '', 'label' => '??????????????????/????????????'));
	//echo $this -> Form -> input('geo_code_psa_nonpsa', array('options' => array('' => "", '1' => 'Non-PSA', '2' => 'PSA'), 'label' => 'PSA/Non-PSA'));
	echo $this -> Form -> input('geo_code_psa_id', array('empty' => '', 'label' => '??????????????????/???????????? ???????????????????????????'));
	echo $this -> Form -> input('geo_code_union_id', array('empty' => '', 'label' => '??????????????????/??????????????????'));
	echo $this -> Form -> input('book_id', array('empty' => '', 'label' => '?????? ??????'));

	echo $this -> Form -> input('geo_code_mauza_id', array('empty' => '', 'label' => '????????????'));
	echo $this -> Form -> input('geo_code_village_id', array('empty' => '', 'label' => '???????????????'));

	echo $this -> Form -> input('old_geo_code_divn_id', array('type' => 'hidden', 'label' => false, 'value' => $old_geo_code_divn_id));
	echo $this -> Form -> input('old_geo_code_zila_id', array('type' => 'hidden', 'label' => false, 'value' => $old_geo_code_zila_id));
	echo $this -> Form -> input('old_geo_code_upazila_id', array('type' => 'hidden', 'label' => false, 'value' => $old_geo_code_upazila_id));
	//echo $this -> Form -> input('old_geo_code_psa_nonpsa', array('type' => 'hidden', 'label' => false, 'value' => $old_geo_code_psa_nonpsa));
	echo $this -> Form -> input('old_geo_code_psa_id', array('type' => 'hidden', 'label' => false, 'value' => $old_geo_code_psa_id));
	echo $this -> Form -> input('old_geo_code_union_id', array('type' => 'hidden', 'label' => false, 'value' => $old_geo_code_union_id));
	echo $this -> Form -> input('old_book_id', array('type' => 'hidden', 'label' => false, 'value' => $old_book_id));
	echo $this -> Form -> input('old_geo_code_mauza_id', array('type' => 'hidden', 'label' => false, 'value' => $old_geo_code_mauza_id));
	echo $this -> Form -> input('old_geo_code_village_id', array('type' => 'hidden', 'label' => false, 'value' => $old_geo_code_village_id));

	echo $this -> Form -> end(__('Submit'));
	?>
</fieldset>
</br>
<!--
END OF FORM
-->

<fieldset>
	<legend>
		Result
	</legend>
	<br>
	<table style="width: 50%; font-size: 14px;">

		<tbody>
			<tr>
				<td><b>Number of DEO worked</b></td><td>:</td>
				<td><?=$totalDeoWork
				?>&nbsp;</td>
				<td> &nbsp;</td>
			</tr>
			<tr>
				<td><b>Total EA Entered</b></td><td>:</td>
				<td><?=$totalEAs
				?>&nbsp;</td>
				<td> &nbsp;</td>
			</tr>
			<tr>
				<td><b>Number of Books Entered</b></td><td>:</td>
				<td><?=$totalBookEntered
				?>&nbsp;</td>
				<td> &nbsp;</td>
			</tr>

			<tr>
				<td><b>Parmanent Establishment</b></td><td>:</td>
				<td><?=$totalParmanentEstablishment
				?>&nbsp;</td>
				<td><?=round((($totalParmanentEstablishment * 100) / $totalUnit), 2)
?>% &nbsp;</td>
</tr>

<tr>
<td><b>Temporary Establishment</b></td><td>:</td>
<td><?=$totalTemporaryEstablishment
				?>&nbsp;</td>
				<td><?=round((($totalTemporaryEstablishment * 100) / $totalUnit), 2)
?>% &nbsp;</td>
</tr>

<tr>
<td><b>Economic Household</b></td><td>:</td>
<td><?=$totalEconomicHousehold
				?>&nbsp;</td>
				<td><?=round((($totalEconomicHousehold * 100) / $totalUnit), 2)
?>% &nbsp;</td>
</tr>

<tr>
<td><b>Total Economic Unit</b></td><td>:</td>
<td><?=$totalUnit
				?>&nbsp;</td>
				<td> &nbsp;</td>
			</tr>

			<tr>
				<td><b>Agricultural Establishments</b></td><td>:</td>
				<td><?=$totalAgriculturalEstablishments
				?>&nbsp;</td>
				<td><?=round((($totalAgriculturalEstablishments * 100) / $totalUnit), 2) ?>% &nbsp;</td>
</tr>

<tr>
<td><b>Total Out of Scope</b></td><td>:</td>
<td><?=$totalUnit_oos ?>&nbsp;</td>
				<td> &nbsp;</td>
			</tr>

		</tbody>

	</table>
</fieldset>
<br/>
