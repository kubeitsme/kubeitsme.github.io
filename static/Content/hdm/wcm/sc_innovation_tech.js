$(document).ready(function(){
	/* innovation */
	$('.engine_summary > ul > li').eq(0).show();
	$('.car_image .image_group img').eq(0).show();
	$('.pointer_group div').eq(0).show();
	$('.mode_summary span').eq(0).show();
	$('.tech_htrack .carousel .visual_section li').eq(0).show();
	$('.tech_2_cont .overlayer li').css('left','-100%');
	$('.tech_2_cont .overlayer li').eq(0).css('left','0');
	$('.tech_2_cont .box_frame .info_box > div').eq(0).show(); 

	if (navigator.userAgent.match(/iPhone|iPad|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i)) {
		$('.new_innovation').addClass('mobile');
	};

	var cLength = $('.visual_section li').length;
	var counterA = 0;

	$('.direction_btn a').click(function(){
		
		if ( $(this).hasClass('prev'))
		{
			counterA--;
			if ( counterA < 0)
			{
				counterA = cLength-1;
			}
			$('.tech_htrack .carousel .visual_section li').hide();
			$('.tech_htrack .carousel .visual_section li').eq(counterA).show();
			$('.mode_summary span').hide();
			$('.mode_summary span').eq(counterA).show();
			$('.tech_htrack .carousel .dot li').removeClass('active');
			$('.tech_htrack .carousel .dot li').eq(counterA).addClass('active');
		} else {
			counterA++;
			if ( counterA >= cLength)
			{
				counterA = 0;
			}
			$('.tech_htrack .carousel .visual_section li').hide();
			$('.tech_htrack .carousel .visual_section li').eq(counterA).show();
			$('.mode_summary span').hide();
			$('.mode_summary span').eq(counterA).show();
			$('.tech_htrack .carousel .dot li').removeClass('active');
			$('.tech_htrack .carousel .dot li').eq(counterA).addClass('active');
		}
		return false;
	});

	$('.new_innovation .tech_section_1 .tech_htrack .carousel .dot li').click(function(){
	
		var f = $(this).index();
		counterA = f;
		$('.tech_htrack .carousel .visual_section li').hide();
		$('.tech_htrack .carousel .visual_section li').eq(f).show();
		$('.mode_summary span').hide();
		$('.mode_summary span').eq(f).show();
		$('.tech_htrack .carousel .dot li').removeClass('active');
		$('.tech_htrack .carousel .dot li').eq(f).addClass('active');
		return false;
	});

	var aiCounter = 0;
	

	
	var v1 = $('.power_ratio .front .num').text();
	var v2 = $('.power_ratio .front .num').text();
	var v3 = v1-15;

	var v4 = $('.power_ratio .rear .num').text();
	var v5 = $('.power_ratio .rear .num').text();
	var v6 = v4-15;

	$('.power_ratio .front .num').html(v3);
	$('.power_ratio .rear .num').html(v6);
	function numberA () {
		var timer = setInterval(function(){
			v2 = $('.power_ratio .front .num').html();
			if ( v2 < v1)
			{
				var a = (((v2*10)+1)/10).toFixed(1);
				$('.power_ratio .front .num').html(a);
				
			} else {
				return false;
			}
		},16);
	}
	function numberB () {
			var timer = setInterval(function(){
				v5 = $('.power_ratio .rear .num').html();
				if ( v5 < v4)
				{
					var a = (((v5*10)+1)/10).toFixed(1);
					$('.power_ratio .rear .num').html(a);
					
				} else {
					return false;
				}
			},16);
	}

	//var b = $('html,body').find('.tech_section_1 .tech_2_cont .content_box').offset().top;
	//var g = $('html,body').find('.tech_section_1 .tech_3_cont').offset().top;
	//var h = $('html,body').find('.rotate_object').offset().top;

	var animateTimer = 1200;
	var animateTimer2 = 300;
	var animateTimer3 = 600;
	//$(window).scroll(function(){
		
	//	if ( $(window).scrollTop() >= b+100)
	//	{
	//		numberA ()
	//		numberB ()
	//	} 

		

	//	if ( $(window).scrollTop() > g+200)
	//	{
	//		$('.tech_section_1 .tech_3_cont .graph1 .img').stop().animate({'width':'377px'},animateTimer,function(){
	//			$('.tech_section_1 .tech_3_cont .graph1 .txt').stop().animate({'opacity':1},animateTimer2,function(){
					
	//			});
	//		});
	//		setTimeout(function(){
	//			$('.tech_section_1 .tech_3_cont .graph2 .img').stop().animate({'width':'364px'},animateTimer,function(){
	//					$('.tech_section_1 .tech_3_cont .graph2 .txt').stop().animate({'opacity':1},animateTimer2);
	//				});
	//		},animateTimer)
	//	}
		
	//	$('.wide_image').each(function(){
	//		var s = (parseInt($(window).height()) - 520)/2;
	//		var n = parseInt($(this).offset().top);
	//		if ( $('body').hasClass('mobile'))
	//		{
	//			$(this).css("background-position", "50% 50%").css('background-attachment','inherit');
	//		} else {
	//			if($(window).scrollTop() > n-parseInt($(window).height()) && $(window).scrollTop() < n+s) {
	//				var a = $(window).scrollTop()-$(this).offset().top+parseInt($(window).height());
	//				var b = 100-parseInt(a*100/parseInt($(window).height()))+7;
	//				$(this).css("background-position", "50% "+b+"%");
	//				$(this).find("div").css("top", (100-b)*3); 
	//			}
	//		}
	//	});

	//	$('.tech_box').each(function(){
	//		var m = parseInt($(this).offset().top);
	//		var l = ($(this).index()/2);
	//		if ( $(window).scrollTop() < 560)
	//		{
	//			$('.floating_cubemenu .lnb_menu li').removeClass('active');
	//		}
	//		if ( $(window).scrollTop() > m-100 )
	//		{
	//			$('.floating_cubemenu .lnb_menu li').removeClass('active');
	//			$('.floating_cubemenu .lnb_menu li').eq(l).addClass('active');
				
	//		} 
			
	//	});

	//	if ( $(window).scrollTop() > h-400 )
	//	{
			
	//		if ($('.rotate_object').attr('data-animate') == 1)
	//		{
				
	//		} else {	
	//			if ( $('html').hasClass('ie8'))
	//			{
	//				$('.rotate_object').attr('data-animate',1)
	//				$('.rotate_object .animate_box div a').stop().animate({'opacity':1},animateTimer3);
	//				setTimeout(function(){$('.rotate_object .animate_box div a').stop().animate({'opacity':0},animateTimer3)},animateTimer3)
	//				setTimeout(function(){$('.rotate_object .pointer_box div a').stop().animate({'opacity':1},animateTimer3,function(){})},animateTimer3)
	//			} else {
	//				$('.rotate_object').attr('data-animate',1)
	//				$('.rotate_object .animate_box > div').stop().animate({'opacity':1},animateTimer3);
	//				setTimeout(function(){$('.rotate_object .animate_box > div').stop().animate({'opacity':0},animateTimer3)},animateTimer3)
	//				setTimeout(function(){$('.rotate_object .pointer_box > div').stop().animate({'opacity':1},animateTimer3,function(){})},animateTimer3)
	//			}
	//		}
	//	}

	//}).scroll();


	
	$('.engine_list li').click(function(){
		$('.engine_list li').removeClass('active');
		$('.engine_summary > ul > li').hide();
		var c = $(this).index();
		$(this).addClass('active');
		$('.engine_summary > ul > li').eq(c).show();
		return false;
	});
	
	function animateObj (from){
		$('.rotate_object').attr('data-animate',0);
		if ( $('html').hasClass('ie8')) {
			$('.rotate_object').attr('data-animate',1);
			$('.rotate_object '+from+' .animate_box > div a').css('opacity',0);
			$('.rotate_object '+from+' .pointer_box > div a').css('opacity',0);
			$('.rotate_object '+from+' .animate_box > div').addClass('active');
			$('.rotate_object '+from+' .animate_box > div a').stop().animate({'opacity':1},animateTimer3);
			setTimeout(function(){
				$('.rotate_object '+from+' .animate_box > div a').stop().animate({'opacity':0},animateTimer3)
			},animateTimer3)
			setTimeout(function(){
				$('.rotate_object '+from+' .pointer_box > div a').stop().animate({'opacity':1},animateTimer3)
			},animateTimer3);
			$('.rotate_object '+from+' .pointer_box span.txt').hide();
		} else {
			$('.rotate_object').attr('data-animate',1);
			$('.rotate_object '+from+' .animate_box > div').css('opacity',0);
			$('.rotate_object '+from+' .pointer_box > div').css('opacity',0);
			$('.rotate_object '+from+' .animate_box > div').addClass('active');
			$('.rotate_object '+from+' .animate_box > div').stop().animate({'opacity':1},animateTimer3);
			setTimeout(function(){
				$('.rotate_object '+from+' .animate_box > div').stop().animate({'opacity':0},animateTimer3)
			},animateTimer3)
			setTimeout(function(){
				$('.rotate_object '+from+' .pointer_box > div').stop().animate({'opacity':1},animateTimer3)
			},animateTimer3);
			$('.rotate_object '+from+' .pointer_box span.txt').hide();
		}
	}

	$(".rotate_slider").slider({
		min: 0,
		max: 12,
		step: 1,
		slide: function( event, ui ) {
			var u=ui.value;
			$('.rotate_object .car_image .image_group img').hide();
			$('.rotate_object .car_image .image_group img').eq(u).show();
			$('.pointer_group div').removeClass('active');

			$('.layer_group .close a').trigger('click');
			if ( u == 0)
			{
				$('.pointer_group > div').hide();
				$('.pointer_group .front_pointers').show();
				animateObj ('.pointer_group .front_pointers');
			} else if ( u == 6)
			{
				$('.pointer_group > div').hide();
				$('.pointer_group .side_pointers').show();
				animateObj ('.pointer_group .side_pointers');
			} else if ( u == 12)
			{
				$('.pointer_group > div').hide();
				$('.pointer_group .rear_pointers').show();
				animateObj ('.pointer_group .rear_pointers');
			} else {
				$('.pointer_group > div').hide();
			}
		}
	});
	
	$('.pointer_group .pointer a').mouseover(function(){
		var e = $('.rotate_object').attr('data-active');
		if ( e == 1 )
		{
			return false;
		}
		$('.pointer_group div').removeClass('active');
		$('.pointer_group .pointer .txt').hide();
		$(this).parent().addClass('active');
		$(this).next().show();
	});

	$('.pointer_group .pointer a').click(function(){
		var e = $('.rotate_object').attr('data-active');
		if ( e == 1 )
		{
			return false;
		} else {
			$('.rotate_object').attr('data-active',1);
			var d = $(this).parent().index();
			$(this).parents('.p_box').find('.layer_group > div').eq(d).show().animate({'opacity':1},200);
		}
		return false;
	});

	$('.layer_group .close a').click(function(){
		$('.rotate_object').attr('data-active',0);
		$(this).parent().parent().stop().animate({'opacity':0},200,function(){$(this).hide();});
		return false;
	});

	var aiLength = $('.tech_2_cont .overlayer img').length;
	var aiCounter;
	
	var autoInterval = setInterval(function(){aiInt()},5000);
	
	function aiInt (){
		var j = $('.tech_2_cont .box_frame').attr('data-slide');
		aiCounter = j;
		aiCounter++;
		if (aiCounter >= aiLength)
		{
			aiCounter = 0;
		}
		
		$('.tech_2_cont .overlayer ul li').stop().animate({'left':'-100%'},400);
		$('.tech_2_cont .overlayer ul li').css('left','100%').eq(aiCounter).stop().animate({'left':'0'},400);
		$('.tech_2_cont .box_frame .info_box > div').hide();
		$('.tech_2_cont .box_frame .info_box > div').eq(aiCounter).show();
		$('.tech_2_cont .dot li').removeClass('active');
		$('.tech_2_cont .dot li').eq(aiCounter).addClass('active');
		$('.tech_2_cont .box_frame').attr('data-slide',aiCounter);
	}

	$('.new_innovation .tech_section_2 .tech_2_cont .dot li').click(function(){
		var t = $(this).index();
		$('.tech_2_cont .box_frame').attr('data-slide',t);
		$('.tech_2_cont .overlayer ul li').stop().animate({'left':'-100%'},400);
		$('.tech_2_cont .overlayer ul li').css('left','100%').eq(t).stop().animate({'left':'0'},400);
		$('.tech_2_cont .box_frame .info_box > div').hide();
		$('.tech_2_cont .box_frame .info_box > div').eq(t).show();
		$('.tech_2_cont .dot li').removeClass('active');
		$('.tech_2_cont .dot li').eq(t).addClass('active');
		clearInterval(autoInterval);
		autoInterval = setInterval(function(){aiInt()},5000);
		
		return false;
	});

	$('.tech_2_cont .wide_box a').click(function(){
		var j = $('.tech_2_cont .box_frame').attr('data-slide');
			j = aiCounter;
		if ( $(this).hasClass('prev') )
		{

			aiCounter--;
			if ( aiCounter < 0)
			{
				aiCounter = aiLength-1;
			}
			$('.tech_2_cont .overlayer ul li').stop().animate({'left':'-100%'},400);
			$('.tech_2_cont .overlayer ul li').css('left','100%').eq(aiCounter).stop().animate({'left':'0'},400);
			$('.tech_2_cont .box_frame .info_box > div').hide();
			$('.tech_2_cont .box_frame .info_box > div').eq(aiCounter).show();
			$('.tech_2_cont .dot li').removeClass('active');
			$('.tech_2_cont .dot li').eq(aiCounter).addClass('active');
			$('.tech_2_cont .box_frame').attr('data-slide',aiCounter);
			clearInterval(autoInterval);
			autoInterval = setInterval(function(){aiInt()},5000);
		} else {
			
			aiCounter++;
			if (aiCounter >= aiLength)
			{
				aiCounter = 0;
			}
			
			$('.tech_2_cont .overlayer ul li').stop().animate({'left':'-100%'},400);
			$('.tech_2_cont .overlayer ul li').css('left','100%').eq(aiCounter).stop().animate({'left':'0'},400);
			$('.tech_2_cont .box_frame .info_box > div').hide();
			$('.tech_2_cont .box_frame .info_box > div').eq(aiCounter).show();
			$('.tech_2_cont .dot li').removeClass('active');
			$('.tech_2_cont .dot li').eq(aiCounter).addClass('active');
			$('.tech_2_cont .box_frame').attr('data-slide',aiCounter);
			
		}
		clearInterval(autoInterval);
		autoInterval = setInterval(function(){aiInt()},5000);
		return false;
	});

	$(window).resize(function(){

		var o = $('.wide_box').width();
		var p = o - 90;
		$('.tech_2_cont .wide_box .next').css('left',p+'px');

		if ( $(window).width() <= 1280 )
		{
			$('.tech_2_cont .wide_box').hide();
		} else {
			$('.tech_2_cont .wide_box').show();
		}
	}).resize();

	

	/* ie8 */

	function ie8_detect(){
	 var IE8 = /MSIE\s([\d.]+)/.test(window.navigator.userAgent),
		version = Number(RegExp.$1);
		if(version === 8) {
			$('html').addClass('ie8');
			return (version);
		}
	}	
	ie8_detect();
});

function showMessageLayer(utubeUrl) {
	messageMovieLayer(this,utubeUrl,0);
}

function messageMovieLayer(obj,code,position) {
	if(document.getElementById('MovieLayer')) {
		$("#MovieLayer").empty();$("#MovieLayer").remove();
	}
	$("#wrap .container").append('<div id="dimmed_layer" style="display:block"></div>');
	$("#wrap .container").append('<div id="MovieLayer" class="movielayer"></div>');
	$(".container").css("z-index","100");
	if (code.indexOf("www.youtube.com") != -1) {
		$("#MovieLayer").append('<div class="layer_movie"><div class="close"><a href="#"><img src="/wcm/images/common/btn/btn_layer_close2.png" alt="close"></a></div><iframe width="613" height="400" src="'+code+'" frameborder="0" allowfullscreen></iframe></div>');
	} else {
		VideoJS.setupAllWhenReady();
		var tmp_code = '<div class="message_movie">';
		tmp_code=tmp_code+'	<div class="close"><a href="#"><img src="/wcm/images/common/btn/btn_layer_close2.png" alt="close"></a></div>';
		tmp_code=tmp_code+'	<div class="video-js-box">';
		tmp_code=tmp_code+'		<video id="example_video_1" class="video-js" width="640" height="460" controls="controls" preload="auto" poster="'+code+'.jpg">';
		tmp_code=tmp_code+'			<source src="'+code+'.mp4" type=\'video/mp4; codecs="avc1.42E01E, mp4a.40.2"\' />';
		tmp_code=tmp_code+'			<source src="'+code+'.webm" type=\'video/webm; codecs="vp8, vorbis"\' />';
		tmp_code=tmp_code+'			<source src="'+code+'.ogv" type=\'video/ogg; codecs="theora, vorbis"\' />';
		tmp_code=tmp_code+'			<object id="flash_fallback_1" class="vjs-flash-fallback" width="613" height="460" type="application/x-shockwave-flash" data="/wcm/flash/mp4Player.swf">';
		tmp_code=tmp_code+'				<param name="movie" value="/wcm/flash/mp4Player.swf" />';
		tmp_code=tmp_code+'				<param name="autostart" value="false" />';
		tmp_code=tmp_code+'				<param name="allowfullscreen" value="true" />';
		tmp_code=tmp_code+'				<param name="allowScriptAccess" value="sameDomain" />';
		tmp_code=tmp_code+'				<param name="wmode" value="opaque" />';
		tmp_code=tmp_code+'				<param name="flashvars" value="mp4_path='+code+'.mp4&default_volume=0.5&play_delay=0&on_loadbar=1&poster='+code+'.jpg" />';
		tmp_code=tmp_code+'				<img src="'+code+'.jpg" width="613" height="460" alt="Poster Image" title="" />';
		tmp_code=tmp_code+'			</object>';
		tmp_code=tmp_code+'		</video>';
		tmp_code=tmp_code+'		<p class="vjs-no-video"><img src="'+code+'.jpg" width="613" height="460" alt="Poster Image" title="" /></p>';
		tmp_code=tmp_code+'	</div>';
		tmp_code=tmp_code+'</div>';
	}

	if ($(window).scrollTop() > 75 ){
		$("#MovieLayer").css("top",parseInt($(window).scrollTop())+100).append(tmp_code);
	}

	$("#MovieLayer .layer_movie .close a").click(function() {
		if (navigator.userAgent.match(/MSIE 8.0/i)){$("#MovieLayer iframe").attr("src","about:blank");}
		$("#dimmed_layer").remove();
		$("#MovieLayer").remove();
		$(".container").css("z-index","100");
		return false;
	});
	return false;
}

$(function(){
	function layerOpen(self){
		var target = $(self).data('addr');
		var targetLayer = $(target);
		targetLayer.css("display","block");
	}

	function layerClose(self){
		var target = $(self).data('addr');
		$(target).css("display","none");
	}

});
