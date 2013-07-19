//For Index File

$(function(){

		//Detect browser's language
		$('#content_text').fadeIn();
        var userLang = navigator.language || navigator.userLanguage; 
        if(userLang.toLowerCase().indexOf("th") >= 0){
        	$("form.form-signin p").fadeIn().html('อีเมล์ยืนยันการ "Line Up"<br>ได้ถูกส่งไปให้คุณแล้ว<br>โปรดยืนยัน เพื่อ "Line Up"<br><br>หมายเหตุ: อีเมล์ยืนยันของคุณ<br>อาจอยู่ใน junk box<br>');
        	$('form.form-signin p').animate({opacity: 1}, 750);
			$("#copy a.ln_th").addClass('act');
     		$("#copy a.ln_en").removeClass('act');

		} else {
			$("form.form-signin p").fadeIn().html('The "Line Up" email confirmation <br>has been sent!<br>Please confirm to "Line Up".<br><br>Remark: Confirmation email<br>might be sent to junk box.<br>');
			$('form.form-signin p').animate({opacity: 1}, 750);
			$("#copy a.ln_en").addClass('act');
     		$("#copy a.ln_th").removeClass('act');
		}

		$("#copy a.ln_th").bind('click', function(e){
			
			 $("form.form-signin p").animate({opacity: 0}, 750, function(){
			 	$(this).html('อีเมล์ยืนยันการ "Line Up"<br>ได้ถูกส่งไปให้คุณแล้ว<br>โปรดยืนยัน เพื่อ "Line Up"<br><br>หมายเหตุ: อีเมล์ยืนยันของคุณ<br>อาจอยู่ใน junk box<br>');
			 });
			 $("form.form-signin p").animate({opacity: 1}, 750);

             $(this).addClass('act');

             $("#copy a.ln_en").removeClass('act');
             
			 $('input[name=language]').val('th');

			 return false;
			 
		 });

		 $("#copy a.ln_en").bind('click',function(){
		 	
			 	 $("form.form-signin p").animate({opacity: 0}, 750, function(){
			 		$(this).html('The "Line Up" email confirmation <br>has been sent!<br>Please confirm to "Line Up".<br><br>Remark: Confirmation email<br>might be sent to junk box.<br>');
			 	 });

			 	 $("form.form-signin p").animate({opacity: 1}, 750);

				 $(this).addClass('act');

	             $("#copy a.ln_th").removeClass('act');
	             
	             $('input[name=language]').val('en');
			 
			 	return false;
		 });
});
