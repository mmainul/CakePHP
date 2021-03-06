<script>


var  zilaCode = new Array();
var  upaZilaCode = new Array();

$(document).ready(function() {
    
    
    
// GET ZILA 
        $('#GeoCodeUnionDivns').change(function() {
            var selectvalue = $(this).val();
            var pathname = window.location.pathname;
            var path = pathname.split('/edit');
            path = path[0] + "/getZilaName";
            //var data = 'id=' + selectvalue;
            $("#GeoCodeUnionGeoCodeZilaId").empty();
            $.ajax({
                url : path,
                type : "POST",
                dataType : 'json',
                data : {
                    geo_code_divn_id : selectvalue
                },
                success : function(data) {
                    
                    $("#GeoCodeUnionGeoCodeZilaId").empty();
                    $("#GeoCodeUnionGeoCodeZilaId").append($("<option />").val("").text(""));
                    zilaCode = new Array();
                    $.each(data, function(index, element) { 
                        $("#GeoCodeUnionGeoCodeZilaId").append($("<option />").val(index).text(element));
                    });
                }
            });
            }); 
            
            
            
//  GET UPAZILA     
            
            $('#GeoCodeUnionGeoCodeZilaId').change(function() {
            var selectvalue = $(this).val();
            var pathname = window.location.pathname;
            var path = pathname.split('/edit');
            path = path[0] + "/getUpaZila";
            //var data = 'id=' + selectvalue;
            $("#GeoCodeUnionGeoCodeUpazilaId").empty();
            $.ajax({
                url : path,
                type : "POST",
                dataType : 'json',
                data : {
                    geo_code_zila_id : selectvalue
                },
                success : function(data) {
                    
                    $("#GeoCodeUnionGeoCodeUpazilaId").empty();
                    $("#GeoCodeUnionGeoCodeUpazilaId").append($("<option />").val("").text(""));
                    upaZilaCode = new Array();
                    $.each(data, function(index, element) { 
                        $("#GeoCodeUnionGeoCodeUpazilaId").append($("<option />").val(element.GeoCodeUpazila.id).text(element.GeoCodeUpazila.upzila_name));
                    });
                }
            });
            }); 

//GET PSA 

      $('#GeoCodeUnionGeoCodeUpazilaId').change(function() {
            var selectvalue = $(this).val();
            var pathname = window.location.pathname;
            var path = pathname.split('/edit');
            path = path[0] + "/getPSA";
            var data = 'id=' + selectvalue;
            $("#GeoCodeUnionGeoCodePsaId").empty();
            $.ajax({
                url : path,
                type : "POST",
                dataType : 'json',
                data : {
                    geo_code_upazila_id : selectvalue,
                },
                success : function(data) {
                    
                    $("#GeoCodeUnionGeoCodePsaId").empty();
                    $("#GeoCodeUnionGeoCodePsaId").append($("<option />").val("").text(""));
                    psaCode = new Array();
                    $.each(data, function(index, element) {
                        
                        psaCode[element.GeoCodePsa.id] = element.GeoCodePsa.psa_code;
                        $("#GeoCodeUnionGeoCodePsaId").append($("<option />").val(element.GeoCodePsa.id).text(element.GeoCodePsa.psa_name));
                    });
                    $("#GeoCodeUnionGeoCodePsaId").append($("<option />").val('NON_PSA').text("NON PSA/CC"));
                }
            });

            
        }); 

});

 
        
</script>



<?php echo $this->Session->flash(); ?>
<div class="geoCodeUnions form">
<?php echo $this->Form->create('GeoCodeUnion'); ?>
	<fieldset>
		<legend><?php echo __('Edit Union'); ?></legend>
	<?php
		echo $this->Form->input('id');
		
		$options = array($this->request->data['GeoCodeUpazila']['id'] => $this->request->data['GeoCodeUpazila']['upzila_name']);
		
		echo $this->Form->input('divns', array('empty' => '','label' => '???????????????', 'options' => $divns,'required' => 'required')); 
        echo $this->Form->input('geo_code_zila_id', array('empty' => '', 'label' => '????????????','required' => 'required'));
       
		echo $this->Form->input('geo_code_upazila_id', array('empty' => '','label' => '?????????????????? ','options' => $options,'required' => 'required', 'value' => ''));
        echo $this -> Form -> input('geo_code_psa_id', array('empty' => '', 'label' => '??????????????????/???????????? ???????????????????????????','required' => 'required'));
		echo $this->Form->input('union_code', array('empty' => '', 'label' => '?????????????????? ????????? ','required' => 'required'));
		echo $this->Form->input('union_name', array('empty' => '', 'label' => '?????????????????? ?????????','required' => 'required'));
		echo $this->Form->input('geo_code_rmo_id', array('empty' => '','label' => '??????.??????.??? ','required' => 'required'));
            $options = array('' => '','UNION' => 'UNION', 'WARD' => 'WARD');
		echo $this->Form->input('union_or_ward', array('label' => '??????????????????/??????????????????', 'options' => $options,'required' => 'required')); 
	?>
	</fieldset>
<?php echo $this->Form->end(__('Submit')); ?>
</div>
<div class="actions">
	<h3><?php echo __('Actions'); ?></h3>
	<ul>
		<li><?php echo $this->Html->link(__('New Geo Code Upazila'), array('controller' => 'GeoCodeUpazilas', 'action' => 'add')); ?> </li>
		<li><?php echo $this->Html->link(__('List Geo Code Upazilas'), array('controller' => 'GeoCodeUpazilas', 'action' => 'index')); ?> </li>
		<li><?php echo $this->Form->postLink(__('Delete'), array('action' => 'delete', $this->Form->value('GeoCodeUnion.id')), null, __('Are you sure you want to delete # %s?', $this->Form->value('GeoCodeUnion.id'))); ?></li>
		<li><?php echo $this->Html->link(__('List Geo Code Unions'), array('action' => 'index')); ?></li>
		
		

	</ul>
</div>
