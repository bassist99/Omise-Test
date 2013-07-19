//For Index File

var language;

$(function(){

		//Detect browser's language
		$('#content_text').fadeIn();
        var userLang = navigator.language || navigator.userLanguage; 
        if(userLang.toLowerCase().indexOf("th") >= 0){
        	$("form.form-signin p:first").fadeIn().html('ปฏิวัติ .... <br><span>“การช้อปปิ้ง ออนไลน์”</span><br>ที่ทำให้การขาย .... <br><span>“ง่าย”</span><br>ลงทะเบียนเพื่อทดลองใช้ <br>ได้แล้ววันนี้ ');
        	$("form.form-signin p:last").fadeIn().html('คุณเป็นผู้ขาย ?<br>');
        	$('form.form-signin p:first, form.form-signin p:last').animate({opacity: 1}, 750);
			$("#copy a.ln_th").addClass('act');
     		$("#copy a.ln_en").removeClass('act');
		} else {
			$("form.form-signin p:first").fadeIn().html('A new evolution of.... <br> <span>“INTERNET SHOPPING”</span> <br>Where selling can be.... <br><span>“SIMPLE”</span><br>Sign up now! <br>For your trial invitation.');
			$("form.form-signin p:last").fadeIn().html('Are you a merchant?<br>');
			$('form.form-signin p:first, form.form-signin p:last').animate({opacity: 1}, 750);
			$("#copy a.ln_en").addClass('act');
     		$("#copy a.ln_th").removeClass('act');
		}


		$("#copy a.ln_th").bind('click', function(){
			 $("form.form-signin p:first").animate({opacity: 0}, 750, function(){
			 	$(this).html('ปฏิวัติ .... <br><span>“การช้อปปิ้ง ออนไลน์”</span><br>ที่ทำให้การขาย .... <br><span>“ง่าย”</span><br>ลงทะเบียนเพื่อทดลองใช้ <br>ได้แล้ววันนี้ ');
			 });
			 $("form.form-signin p:first").animate({opacity: 1}, 750);
			 
			 $("form.form-signin p:last").animate({opacity: 0}, 750, function(){
			 	$(this).html('คุณเป็นผู้ขาย ?<br>');
			 });

             $("form.form-signin p:last").animate({opacity: 1}, 750);

             $(this).addClass('act');
             $("#copy a.ln_en").removeClass('act');
             
			 $('input[name=language]').val('th');
			 
			 return false;
		 });

		 $("#copy a.ln_en").bind('click',function(){
		 	 $("form.form-signin p:first").animate({opacity: 0}, 750, function(){
		 		$(this).html('A new evolution of.... <br> <span>“INTERNET SHOPPING”</span> <br>Where selling can be.... <br><span>“SIMPLE”</span><br>Sign up now! <br>For your trial invitation.');
		 	 });

		 	 $("form.form-signin p:first").animate({opacity: 1}, 750);

		 	 $("form.form-signin p:last").animate({opacity: 0}, 750, function(){
			 	$(this).html('Are you a merchant?<br>');
			 });

		 	 $("form.form-signin p:last").animate({opacity: 1}, 750);

			 $(this).addClass('act');
             $("#copy a.ln_th").removeClass('act');
             
             $('input[name=language]').val('en');
			 
			 return false;
		 });
});
