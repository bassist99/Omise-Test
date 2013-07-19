//For Index File

var language;

$(function(){

        $('#content_text').fadeIn();
        var userLang = navigator.language || navigator.userLanguage; 
        if(userLang.toLowerCase().indexOf("th") >= 0){
        	$("form.form-signin p").fadeIn().html('ขอบคุณที่ลงทะเบียน เพื่อทดลองใช้ <br><span>Omise.co</span><br><br>คุณจะได้รับการติดต่อกลับ<br><span>เร็วๆ นี้</span><br>');
        	$('form.form-signin p').animate({opacity: 1}, 750);
			$("#copy a.ln_th").addClass('act');
     		$("#copy a.ln_en").removeClass('act');
		} else {
			$("p.thank").fadeIn().html('Thank you for lining up with <br><span>Omise.co</span><br><br>We will get back to you shortly.<br><span>Please stay tuned!</span><br>');
			$('form.form-signin p').animate({opacity: 1}, 750);
			$("#copy a.ln_en").addClass('act');
     		$("#copy a.ln_th").removeClass('act');
		}

		$("#copy a.ln_th").bind('click', function(){
			 $("form.form-signin p").animate({opacity: 0}, 750, function(){
			 	$(this).html('ขอบคุณที่ลงทะเบียน เพื่อทดลองใช้ <br><span>Omise.co</span><br><br>คุณจะได้รับการติดต่อกลับ<br><span>เร็วๆ นี้</span><br>');
			 });
			 $("form.form-signin p").animate({opacity: 1}, 750);

             $(this).addClass('act');
             $("#copy a.ln_en").removeClass('act');
             
			 $('input[name=language]').val('th');
			 
			 return false;
		 });
		 $("#copy a.ln_en").bind('click',function(){
		 	 $("form.form-signin p").animate({opacity: 0}, 750, function(){
		 		$(this).html('Thank you for lining up with <br><span>Omise.co</span><br><br>We will get back to you shortly.<br><span>Please stay tuned!</span><br>');
		 	 });

		 	 $("form.form-signin p").animate({opacity: 1}, 750);

			 $(this).addClass('act');
             $("#copy a.ln_th").removeClass('act');
             
             $('input[name=language]').val('en');
			 
			 return false;
		 });
});
