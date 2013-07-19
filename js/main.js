	var gStrStoreName = "";
		
	$ (function() {

		$('.login_vdo a').hover(function(){
			$(this).siblings().attr('src', 'imgs/play_hover.png');
		},function(){
			$(this).siblings().attr('src', 'imgs/play.png');
		});

        if(window.screen.width > window.screen.height){
			$(".youtube").colorbox({iframe:true, width:"80%", height:"80%"});
		}

		if(window.screen.width < window.screen.height){ 
		    var varheight = (40 * window.screen.height) / 100;
			$(".youtube").colorbox({iframe:true, width:"90%", height:varheight });
		}
		$.vegas('slideshow', {
		backgrounds:[
		{ src:'imgs/background-01.jpg', fade:2000 },
		{ src:'imgs/background-02.jpg', fade:2000 },
		{ src:'imgs/background-03.jpg', fade:2000 }
		] })
		('overlay', {
		    src:'overlays/06.png',
			opacity:0.5 
		  });
		
		$(document).on('click','button[type=submit]', function(){
			if ($(".parsley-error-list").length > 0) {
			 	$(".form-signin input.store-name").next().animate({opacity: 1}, 750);
			 }
		});

		 $(document).on('click','#radio1', function(){
			 $(".form-signin input.store-name").animate({opacity: 1}, 750);
			 if($(".form-signin input.store-name").next('ul').length){
			 	$(".form-signin input.store-name").next().animate({opacity: 1}, 750);
			 }
			 
			 $(".form-signin input.store-name").val(gStrStoreName);
		 });
		 $(document).on('click','#radio2', function(){
			 $(".form-signin input.store-name").animate({opacity: 0}, 750, function(){
			 		$(".form-signin input.store-name").val("-----");
			 	});
			 if($(".form-signin input.store-name").next('ul').length){
			 	$(".form-signin input.store-name").next().animate({opacity: 0}, 750, function(){
			 		$(".form-signin input.store-name").val("-----");
			 	});
			 }
			 gStrStorename = $(".form-signin input.store-name").val();
		 });
      });
