<!-- HIDDEN FIELDS THAT STORES VALUES BEFORE SAVE
     ONLY EXITS ON ADD AND EDIT
-->
<!--
	QUESTION 7 HIDDEN CODES DESCRIPTION=======================================
-->
<?=$this -> Form -> input('q7_product_desc_1', array(
                    'label' => FALSE,
                    'value'=>$questionaires[0]['Questionaire']['q7_product_desc_1'],
                    'type'=>'hidden'))
                    ?>
<?=$this -> Form -> input('q7_product_desc_2', array(
                    'label' => FALSE,
                    'value'=>$questionaires[0]['Questionaire']['q7_product_desc_2'],
                    'type'=>'hidden'))
                    ?>
<?=$this -> Form -> input('q7_product_desc_3', array(
                    'label' => FALSE,
                    'value'=>$questionaires[0]['Questionaire']['q7_product_desc_3'],
                    'type'=>'hidden'))
                    ?>
<?=$this -> Form -> input('q7_product_desc_4', array(
                    'label' => FALSE,
                    'value' => $questionaires[0]['Questionaire']['q7_product_desc_4'],
                    'type'=>'hidden'))
                    ?>    


<!--
	QUESTION 7 HIDDEN CODES IS RIGHT=======================================
-->
<?=$this -> Form -> input('q7_product_isright_1', array(
                    'label' => FALSE,
                    'type'=>'hidden',
                    'value'=>$questionaires[0]['Questionaire']['q7_product_isright_1']))
                    ?>
<?=$this -> Form -> input('q7_product_isright_2', array(
                    'label' => FALSE,
                    'type'=>'hidden',
	                'value'=>$questionaires[0]['Questionaire']['q7_product_isright_2']))
                    ?>
<?=$this -> Form -> input('q7_product_isright_3', array(
                    'label' => FALSE,
                    'type'=>'hidden',
                    'value'=>$questionaires[0]['Questionaire']['q7_product_isright_3']))
                    ?>
<?=$this -> Form -> input('q7_product_isright_4', array(
                    'label' => FALSE,
                    'type'=>'hidden',
                    'value'=>$questionaires[0]['Questionaire']['q7_product_isright_4']))
                    ?>                    	





<!--
	QUESTION 7 HIDDEN CODES DESCRIPTION=======================================
-->
<?=$this -> Form -> input('q8_service_desc_1', array(
                    'label' => FALSE,
                    'value'=>$questionaires[0]['Questionaire']['q8_service_desc_1'],
                    'type'=>'hidden'))
                    ?>
<?=$this -> Form -> input('q8_service_desc_2', array(
                    'label' => FALSE,
                    'value'=>$questionaires[0]['Questionaire']['q8_service_desc_2'],
                    'type'=>'hidden'))
                    ?>
<?=$this -> Form -> input('q8_service_desc_3', array(
                    'label' => FALSE,
                    'value'=>$questionaires[0]['Questionaire']['q8_service_desc_3'],
                    'type'=>'hidden'))
                    ?>
<?=$this -> Form -> input('q8_service_desc_4', array(
                    'label' => FALSE,
                    'value'=>$questionaires[0]['Questionaire']['q8_service_desc_4'],
                    'type'=>'hidden'))
                    ?>    



<!--
	QUESTION 8 HIDDEN CODES IS RIGHT=======================================
-->
<?=$this -> Form -> input('q8_service_isright_1', array(
                    'label' => FALSE,
                    'type'=>'hidden',
                    'value' => $questionaires[0]['Questionaire']['q8_service_isright_1']))
                    ?>
<?=$this -> Form -> input('q8_service_isright_2', array(
                    'label' => FALSE,
                    'type'=>'hidden',
                    'value' => $questionaires[0]['Questionaire']['q8_service_isright_2']))
                    ?>
<?=$this -> Form -> input('q8_service_isright_3', array(
                    'label' => FALSE,
                    'type'=>'hidden',
                    'value' => $questionaires[0]['Questionaire']['q8_service_isright_3']))
                    ?>
<?=$this -> Form -> input('q8_service_isright_4', array(
                    'label' => FALSE,
                    'type'=>'hidden',
                    'value' => $questionaires[0]['Questionaire']['q8_service_isright_4']))
                    ?>  	



<!-- END OF HIDDEN FIELDS -->




	
<!-- 	TABLE TWO START	 -->
	<table id="table_2" border="1">

    <tr>

        <td>
        <div id = "div_7">
            <h3>???. ?????????????????????????????? ????????????????????? ?????????????????? ?????????????????? ????????????????????? ?????????????????????????????? ??????????????? </h3><hr />

            <table id = "sub_tbl_1">

                <tr>
                	 <td align="center"> ?????????</td>
                	 <td align="center" width="280px"> ???????????????</td>
                   
                   
                </tr>

                <tr>
                	
                	
                    <td><?=$this -> Form -> input('q7_product_id_1', array(
                    'label' => '???.',
                    'value' => $questionaires[0]['Questionaire']['q7_product_id_1'],
                    'type'=>'text',
                    'style'=>'text-align:center;',
                    'maxlength'=>5,
                    'minlength'=>5))
                    ?></td>
                    
                    <td><div id="QuestionaireQ7ProductDesc1div" class="div_seven_message"><?=$questionaires[0]['Questionaire']['q7_product_desc_1']?></div></td>
                    
                    
                   
                </tr>
                	

                <tr>
                    <td><?=$this -> Form -> input('q7_product_id_2', array(
                    'label' => '???.',
                    'value' => $questionaires[0]['Questionaire']['q7_product_id_2'],
                    'type'=>'text',
                    'style'=>'text-align:center;',
                    'maxlength'=>5,
                    'minlength' =>5))
                    ?></td>
                    <td><div id="QuestionaireQ7ProductDesc2div" class="div_seven_message"><?=$questionaires[0]['Questionaire']['q7_product_desc_2']?></div></td>   
                </tr>

                <tr>
                    
                    <td></tdtr><?=$this -> Form -> input('q7_product_id_3', array(
                    'label' => '???.',
                    'value' => $questionaires[0]['Questionaire']['q7_product_id_3'],
                    'type'=>'text',
                    'style'=>'text-align:center;',
                    'maxlength'=>5,
                    'minlength' =>5))
                    ?></td>
                    <td><div id="QuestionaireQ7ProductDesc3div" class="div_seven_message"><?=$questionaires[0]['Questionaire']['q7_product_desc_3']?></div></td>
                </tr>

                <tr>
                   
                    <td><?=$this -> Form -> input('q7_product_id_4', array(
                    'label' => '???.',
                    'value' => $questionaires[0]['Questionaire']['q7_product_id_4'],
                    'type'=>'text',
                    'style'=>'text-align:center;',
                    'maxlength'=>5,
                    'minlength' =>5))
                    ?></td>
                    <td><div id="QuestionaireQ7ProductDesc4div" class="div_seven_message"><?=$questionaires[0]['Questionaire']['q7_product_desc_4']?></div></td>
                </tr>

            </table>

        </div></td>

        <td>
        <div id = "div_8">
            <h3>???. ??????????????????/??????????????????/???????????? ?????????????????????????????? ????????????????????? ??????????????? ???????????????</h3><hr />
            <table id = "sub_tbl_2">

                <tr>
                	<td align="center"> ?????????</td>
                	 <td align="center" width="280px">???????????????</td>
                    
                </tr>

                <tr>
                    
                    <td><?=$this -> Form -> input('q8_service_id_1', array(
                    'label' =>'???.',
                    'value' => $questionaires[0]['Questionaire']['q8_service_id_1'],
                    'type'=>'text',
                    'style'=>'text-align:center;',
                    'maxlength'=>5,
                    'minlength' =>5))
                    ?></td>
                    <td><div id="QuestionaireQ8ServiceDesc1div" class="div_seven_message"><?=$questionaires[0]['Questionaire']['q8_service_desc_1']?></div></td>
                </tr>

                <tr>           
                     
                    
                    
                    <td><?=$this -> Form -> input('q8_service_id_2', array(
                    'label' => '???.',
                    'value' => $questionaires[0]['Questionaire']['q8_service_id_2'],
                    'type'=>'text',
                    'style'=>'text-align:center;',
                    'maxlength'=>5,
                    'minlength' =>5))
                    ?></td>
                    <td><div id="QuestionaireQ8ServiceDesc2div" class="div_seven_message"><?=$questionaires[0]['Questionaire']['q8_service_desc_2']?></div></td>
                </tr>
        
                <tr>
                    
                    <td></tdtr><?=$this -> Form -> input('q8_service_id_3', array(
                    'label' => '???.',
                    'value' => $questionaires[0]['Questionaire']['q8_service_id_3'],
                    'type'=>'text',
                    'style'=>'text-align:center;',
                    'maxlength'=>5,
                    'minlength' =>5))
                    ?></td>
                    <td><div id="QuestionaireQ8ServiceDesc3div" class="div_seven_message">
                       <?=$questionaires[0]['Questionaire']['q8_service_desc_3']?>
                    </div></td>
                </tr>

                <tr>
                   
                    <td><?=$this -> Form -> input('q8_service_id_4', array(
                    'label' => '???.',
                    'value' => $questionaires[0]['Questionaire']['q8_service_id_4'],
                    'type'=>'text',
                    'style'=>'text-align:center;',
                    'maxlength'=>5,
                    'minlength' =>5))
                    ?></td>
                     <td><div id="QuestionaireQ8ServiceDesc4div" class="div_seven_message"><?=$questionaires[0]['Questionaire']['q8_service_desc_4']?></div></td>
                </tr>

            </table>

        </div></td>
        
        
<!--  SECTION NINE-->
        <td>
        <div id = "div_9">
            <h3>???. ????????????????????? (??????????????????????????????) ??????????????? ????????????????????????</h3><hr />

            <br />
            <label>(????????? ???????????????)</label>
            <?=$this -> Form -> input('q9_legal_entity_type_id', array(
            'label' => false,
            'value' => $questionaires[0]['Questionaire']['q9_legal_entity_type_id'], 
            'type' => 'text',
            'style'=>'width: 65px; text-align:center;', 
            'maxlength'=>2,
            'minlength' =>2 ))?>
            
             <div id="q9details"></div>
            
        </div> 
        </td> 
        
        
        
        <td>

        <div id = "div_10">
            <h3>??????. ?????????????????? ????????????????????? ???????????????????????????????????? ????????????????????? ????????? ?????? ? </h3><hr />
            <table id = 'tbl_10_1' border = '1'>

                <tr>

                    <?php echo $this -> Form -> input('q10_is_nbr_investment', array(
                    'label' => false,
                    'value' => $questionaires[0]['Questionaire']['q10_is_nbr_investment'],
                    'type' => 'text',
                    'style'=>'width: 65px; text-align:center;', 
                    'options' => $option_yes_no)); ?>
                    <div id="q10_details"></div>
                </tr>

                <tr>
                    <div id = "div_10_1"><hr />
                        <h3>??????.???  ??????????????? ????????? ??????????????????????????? ??????????????????(??????????????? ???????????????)</h3>
                         
                        <?=$this -> Form -> input('q10_nbr_amount_in_thou', array(
                        'label' => false,
                        'value' => $questionaires[0]['Questionaire']['q10_nbr_amount_in_thou'],
                        'style'=>'width: 85px; text-align:center;',
                        'type' => 'text'))
                        ?>
                    </div>
                </tr>
            </table>
        </td>

       
     	<!--    Start table 11  -->
        <td>
        <table id = 'tbl_11_1' border= '1'>

            <tr>
                <td><h3>??????.????????????????????? ???????????????????????? ?????? ? </h3><hr />
    
                    <?=$this -> Form->input('q11_is_registered', array(
                    'label' => false,
                    'value' => $questionaires[0]['Questionaire']['q11_is_registered'], 
                    'type' => 'text',
                    'style'=>'width: 65px; text-align:center;',
                    'maxlength'=>2,
                    'minlength' =>2 ))?>
                    <div id="q11details"></div>
            </tr>
            <tr>
            	
          
<!--   SECTION  BE EDITED -->
            	
                <td>
                	<div id = "div_11_1">
                	<h3>??????.???. ??????????????? ????????? ??????????????? ????????????????????????? </h3><hr />
                    <label>(????????? ???????????????)</label>
                    <?=$this -> Form -> input('q11_registrar_id', array(
                    'label' => false,
                    'value' => $questionaires[0]['Questionaire']['q11_registrar_id'], 
                    'type' => 'text',
                    'style'=>'width: 65px; text-align:center;',
                    'maxlength'=>2,
                    'minlength' =>2 ))?>
                    <div id="q11_1details"></div>
                
                </div>
                </td>
            	
            	
            	
            	
            </tr>
        </table></td>
    
    </tr>
</table>