
//Error message functions
	function closeError() {
	$('.error').css('display' , 'none');
	}
	   
	function closeConfirmation() {
	$('.success').css('display' , 'none');
	}
	
	function closeInformation() {
	$('.information').css('display' , 'none');
	}
	
	function closeWarning() {
	$('.warning').css('display' , 'none');
	}

//MOBILE DISCLAIMER MESSAGE - NK

$(document).ready(function(){
	var width = $(window).width();
	if(width < 880){
		$('#modalDisclaimer').modal('show');
	} 
});
$(document).ready(function () {
	$('input[name=serList]').each(function () {
            var checkBox = $(this);               
             checkBox.prop('checked', false);  
	});
	$('#multicheck,#multicheck2').click(function (e) {
		e.stopPropagation();
		var check1=$('#multicheck');
		var check2=$('#multicheck2');
		if(check1.is(":checked")){
			$('.check input[name=serList]').each(function () {
            var checkBox = $(this);               
             checkBox.prop('checked', true);  
			 });
		}
		else {
			$('.check input[name=serList]').each(function () {
            var checkBox = $(this);               
             checkBox.prop('checked', false);  
			 });
		} 
		
		if(check2.is(":checked")){
			$('.border-blue input[name=serList]').each(function () {
            var checkBox = $(this);               
             checkBox.prop('checked', true);  
			 });
		}
		else {
			$('.border-blue input[name=serList]').each(function () {
            var checkBox = $(this);               
             checkBox.prop('checked', false);  
			 });
		}
    });
   $('.check input[name=serList],.border-blue input[name=serList]').click(function () {
         var checked = $(this).is(':checked');            
        $('#multicheck').each(function () {
            var checkBox = $(this);               
            if (!checked) {
              checkBox.prop('checked',false);                
            }
			var check_all =$('.check input[name=serList]');
			if(check_all.length === check_all.filter(":checked").length){
			$("#multicheck").prop('checked',true);
			}
        });
		$('#multicheck2').each(function () {
            var checkBox = $(this);               
            if (!checked) {
              checkBox.prop('checked',false);                
            }
			var check_all =$('.border-blue input[name=serList]');
			if(check_all.length === check_all.filter(":checked").length){
			$("#multicheck2").prop('checked',true);
			}
        });
		
	});
	/*Enable button*/
	$('input[name=serList], #multicheck,#multicheck2').click(function () {
		var check_list=$('.check input[name=serList]');
		var check_service=$('.border-blue input[name=serList]');
		if(check_list.filter(":checked").length >= '1'){
			$('#selectlist').addClass("btn-primary").removeAttr("disabled");
		}
		else {
			$('#selectlist').removeClass("btn-primary").attr("disabled" , "true");
		}
		if(check_service.filter(":checked").length >= '1'){
			$('#selectservice').addClass("btn-primary").removeAttr("disabled");
		}
		else {
			$('#selectservice').removeClass("btn-primary").attr("disabled" , "true");
		}
	});

});
$(window).resize(function(){
	userDisclaimer();
	$('.dataTables_scrollHeadInner').css('width' , '100%');
	$('.dataTable').css('width' , '100%');
});

function userDisclaimer() {
	var width = $(window).width();
	if(width < 880){
	 $('#modalDisclaimer').modal('show');
	}
	if($(this).width() > 880){
	 $('#modalDisclaimer').modal('hide');
	 $('.modal-backdrop').css('display' , 'none');
	}	
} 
