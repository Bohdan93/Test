$(document).ready(function(){
   
	var touch = $('#touth_menu');
	var menu = $('.nav');

	$(touch).on('click', function(e){
		e.preventDefault();
		menu.slideToggle();
	});

	$(window).resize(function(){
		var wid = $(window).width();
		if(wid >768 && menu.is(':hidden')){
			menu.removeAttr('style');
			$('.visible_block').css({display:"none"});
		}
	});

	$('.burger').click(function(){
			$(this).toggleClass('open');
		});

	$('#open_left').click(function(){
		$(".sidebar_left").toggleClass("open");
	});

	$(document).mouseup(function (e) {
		var div = $(".sidebar_left");
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) {
			div.removeClass("open");
		}
	});
	$('#open_right').click(function(){
		$(".sidebar_right").toggleClass("open");
	});

	$(document).mouseup(function (e) {
		var div = $(".sidebar_right");
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) {
			div.removeClass("open");
		}
	});
	var $scrollingDiv = $(".visible_block");
        $(window).scroll(function(){            
            $scrollingDiv
            	.stop()
				$(window).scroll(function(){            
            $scrollingDiv
                .stop()
				.animate({"marginTop": ($(window).scrollTop() )}, "slow" );         
        	});  
			// var wid = $(window).width();
			// if(wid >768){
            // 	$scrollingDiv
            //     .stop()
			// 	.animate({"marginTop": "0"});         
        	//   }  
        });
});