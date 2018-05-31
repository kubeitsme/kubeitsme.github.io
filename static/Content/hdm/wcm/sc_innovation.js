$(document).ready(function(){
	
	$('.lnb_sns .show').mouseover(function(){
		$(this).hide();
		$(this).next().show();
	});
	$('.lnb_sns').mouseleave(function(){
		$(this).find('.hide').hide();
		$(this).find('.show').show();
	});

	$('.lnb_menu > ul li').click(function(){
		var chkid = $(this).find('a').attr('href');
		var chkid2 = chkid.split('#');
		var scrollt = $('#'+chkid2[1]).offset().top;
		$('html,body').animate({scrollTop:scrollt+89}, {duration:500, easing:'motion'});
		return false;
	});

	$(window).scroll(function(){
		if ($(window).scrollTop() > 95)
		{
			$('.new_innovation .floating_wrap').show();
		} else {
			$('.new_innovation .floating_wrap').hide();
			
		}

	}).scroll();
	
	
});


