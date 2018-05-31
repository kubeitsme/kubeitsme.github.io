/* motion */
jQuery.easing.motion = function (x, t, b, c, d) {if (t==0) return b;if (t==d) return b+c;if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;}

/* mobile  */
$(document).ready(function() {
	if (navigator.userAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i)) {
		$('body').addClass('mobile');
	};
});

/* current OS */
var isPositionFixed=1; // IE6�?모바??iOS?�서 ?��???Fixed �?무시??
var isMobile=0; // ?�마?�폰?�경??
var isIE6=0; // ?�브?�우??ie6??경우
if (navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Windows CE/i) || navigator.userAgent.match(/Symbian/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)) isMobile=1;
if (navigator.userAgent.match(/Android 1.5/i) || navigator.userAgent.match(/Android 2.1/i) || navigator.userAgent.match(/Android 2.3/i) || navigator.userAgent.match(/Android 2.2/i) || navigator.userAgent.match(/Android 3/i)) isPositionFixed=0;
if (navigator.userAgent.match(/iPhone/i)&&navigator.userAgent.match(/OS 4_/i)) isPositionFixed=0;
if (navigator.userAgent.match(/iPad/i)&&navigator.userAgent.match(/OS 4_/i)) isPositionFixed=0;
if (navigator.userAgent.match(/iPod/i)&&navigator.userAgent.match(/OS 4_/i)) isPositionFixed=0;
if (navigator.userAgent.match(/iPhone/i)&&navigator.userAgent.match(/OS 3_/i)) isPositionFixed=0;
if (navigator.userAgent.match(/iPad/i)&&navigator.userAgent.match(/OS 3_/i)) isPositionFixed=0;
if (navigator.userAgent.match(/iPod/i)&&navigator.userAgent.match(/OS 3_/i)) isPositionFixed=0;
if (navigator.userAgent.match(/MSIE 6.0/i)) {isIE6=1;isPositionFixed=0;}
function isTouchDevice(){try{document.createEvent("TouchEvent");return true;}catch(e){return false;}}
function touchScroll(id){
           if(isTouchDevice()){ //if touch events exist...
                     if (document.getElementById(id)) {
                                var el=document.getElementById(id);
                                var scrollStartPos=0;
                                document.getElementById(id).addEventListener("touchstart", function(event) {
                                          scrollStartPos=this.scrollTop+event.touches[0].pageY;
                                          event.preventDefault();
                                },false);
                                document.getElementById(id).addEventListener("touchmove", function(event) {
                                          this.scrollTop=scrollStartPos-event.touches[0].pageY;
                                          event.preventDefault();
                                },false);
                     }
           }
}
function fn_print() {
	var objBrowse = window.navigator;
	if (objBrowse.appName == "Opera" || objBrowse.appName == "Netscape") {
		setTimeout('window.print()', 1000);
	} else {
		window.print();
	}
}
function TrimString( strVal ) {
	if( strVal.split(" ").join("") == "" ) return false;
	else return true;
}
function gnbToggle(obj,onoff) {
	$(obj).removeAttr('style');
	if(onoff=="off") {
		$(obj).css("visibility","hidden").css("height",0);
	} else {
		$(obj).css("visibility","visible").css("height","auto");
	}
}
// document ready
$(document).ready(function() {
	$('.gnb_layer .sGnb .tab ul a').click(function(){
		var currentTab=$(this).attr('href');
		$('.gnb_layer .sGnb .tab a').removeClass('on');
		gnbToggle('.gnb_layer .sGnb>.list ul','off');
		gnbToggle('.gnb_layer .sGnb .see_all','off');
		$(this).addClass('on'); 
		gnbToggle(currentTab,"on");
		$(".gnb_layer .sGnb>.list").show();
		return false;
	});

	$('.gnb_layer .sGnb .tab .btn_see_all').click(function(){
		$('.gnb_layer .sGnb .tab a').removeClass('on');
		gnbToggle('.gnb_layer .sGnb>.list ul','off');
		gnbToggle('.gnb_layer .sGnb .other_list','off');
		$(".gnb_layer .sGnb>.list").hide();
		$(this).addClass('on');
		gnbToggle('.gnb_layer .sGnb .see_all','on');
		gnbToggle('.header .gnb_layer .sGnb .list ul','on');
		return false;
	});
	$('.gnb_layer .btn_close').click(function(){
		gnbToggle('.gnb_layer','off');
		$('.gnb li a').removeClass('on');
	});
        var userAgent = navigator.userAgent; 
	$('.gnb_layer .showroom .tab ul a').click(function(){
		var currentTab=$(this).attr('href');
		$('.gnb_layer .showroom .tab a').removeClass('on');
		$('.gnb_layer .showroom>.list ul').hide();
		$('.gnb_layer .showroom .carfinder').hide();
		$(this).addClass('on');
		$(currentTab).show();
		$('.gnb_layer .showroom .banners').show();
		return false;
	});
	$('.gnb_layer .showroom .tab .btn_finder').click(function(){
		$('.gnb_layer .showroom .tab a').removeClass('on');
		$('.gnb_layer .showroom>.list ul').hide();
		$('.gnb_layer .showroom .banners').hide();
		$(this).addClass('on');
		$('.gnb_layer .showroom .carfinder').show();
		return false;
	});
	$('.gnb_layer .btn_close').click(function(){$('.gnb_layer').hide();$('.gnb li a').removeClass('on');});
	$('.gnb_layer .carfinder .category li .jqTransformCheckbox').click(function(){
		if($(this).parent().parent().hasClass('select'))
			$(this).parent().parent().removeClass('select');
		else
			$(this).parent().parent().addClass('select');
	});
	$('.gnb_layer .category .case2 span:not(".unable"),.gnb_layer .category .case3 span:not(".unable"),.gnb_layer .configuration span:not(".unable"),.gnb_layer .seats .case2 span:not(".unable"),.gnb_layer .seats .case3 span:not(".unable"),.gnb_layer .fueltype span:not(".unable")').toggle(function(){$(this).addClass('select');},function(){$(this).removeClass('select');});

	readyCube();
	fixedPosition();
	if (!location.hash || location.hash=="#wrap" || isMobile==0) fixedPositionScroll();
	if (document.getElementById("cubebox")) {
		cubeMotionInit();
		if (cubeList.length>0) {
			//$(".floating_cubemenu .cubemenu .information").css("width",619 + (5-cubeList.length)*70);
			//$(".floating_cubemenu .cubemenu ul.cubeitem").css("width",282 - (5-cubeList.length)*70);
		}
	}


	if (document.getElementById("main")) {
		var t = parseInt((940 - $(".carlist ul").width())/2);
		$(".carlist").css("width",940-t).css("paddingLeft",t);
	}
	$(".mainbanner .banners .item a img").mouseover(function() {$(this).animate({opacity: '.4'}, 100, function(){$(this).animate({opacity: '1'}, 300);});});

	$('#slider_deposit').bind("mouseup",function() {
		var deposit = $('#slider_deposit .jslider-value span').text();
		var Price = $('.con_price .price').text();
		var v_num = /[^0-9]/g;
		var c_num = Price.replace(v_num,'');
		var d_price = (c_num*deposit)/100
		$('#deposit_price').val(d_price.toLocaleString());
	});
	$('#slider_month').bind("mouseup",function() {
		var changeMonth = $('#slider_month .jslider-value span').text();
		$('.change_month').text(changeMonth);
	});

	$('.tips_advice .show_btn .expand').click(function(){$('.tips_advice .tips_wrap').addClass('on');$('.tips_advice .show_btn').addClass('off');$(".show_btn .expand").hide();$(".show_btn .collapse").show();return false;});
	$('.tips_advice .show_btn .collapse').click(function(){$('.tips_advice .tips_wrap').removeClass('on');$('.tips_advice .show_btn').removeClass('off');$(".show_btn .expand").show();$(".show_btn .collapse").hide();return false;});
	$('.tips_advice .tips').click(function(){$(this).parent().toggleClass('on');});
	$('.faq .show_btn .expand').click(function(){$('.faq .qna').addClass('on');$(".show_btn .expand").hide();$(".show_btn .collapse").show();return false;});
	$('.faq .show_btn .collapse').click(function(){$('.faq .qna').removeClass('on');$(".show_btn .expand").show();$(".show_btn .collapse").hide();return false;});
	$('.car_compare .show_btn .expand').click(function(){$('.car_compare .con_table').addClass('on');$('.con_table .show_btn').addClass('off');$(".show_btn .expand").hide();$(".show_btn .collapse").show();return false;});
	$('.car_compare .show_btn .collapse').click(function(){$('.car_compare .con_table').removeClass('on');$('.car_compare .show_btn').removeClass('off');$(".show_btn .expand").show();$(".show_btn .collapse").hide();return false;});
	$('.car_compare .title').click(function(){$(this).parent().toggleClass('on');});

	$(".form_table input:text").click(function() {
		var nowV = $(this).val();
		var defV = this.defaultValue;
		if(nowV == defV) { $(this).val("");}
	});
	$(".form_table textarea").click(function() {
		var nowV = $(this).val();
		var defV = this.defaultValue;
		if(nowV == defV) { $(this).val("");}
	});
	$('.faq .q').click(function(){$(this).parent().toggleClass('on');});
	$(".cubebox .cubelist .talkntalk_form form .input textarea").bind("focus",function() {
		$(".cubebox .cubelist .talkntalk_form form .input").css("height",152).css("width",232).css("borderLeft","1px solid #aaaaac").css("borderRight","1px solid #aaaaac").css("borderBottom","1px solid #aaaaac").css("marginRight","2px");
		$(".cubebox .cubelist .talkntalk_form form .input div textarea").css("height",150).css("borderBottom","1px solid #d2d3d4");
	});
	$(".cubebox .cubelist .talkntalk_form form .input textarea").bind("blur",function() {
		$(".cubebox .cubelist .talkntalk_form form .input").css("height",26).css("width",231).css("borderLeft","1px solid #ffffff").css("borderRight","1px solid #ffffff").css("borderBottom",0).css("marginRight","3px");
		$(".cubebox .cubelist .talkntalk_form form .input div textarea").css("height","100%").css("borderBottom",0);
	});
	$(".cubebox .cubelist .experience_seemore .button a").click(function() {var w = parseInt(($(window).width()-600)/2);$(".layer_experience").css("left",w).fadeIn();});
	$(".layer_experience .layer_close a").click(function() {$(".layer_experience").fadeOut();});
	$(".open_layer").click(function() {showTranslucency();$("#layer_popup").css("top",(parseInt($(window).scrollTop())+50) + "px");$("#layer_popup").show();});

	/* CB_popup input del icon */
	$('input.#deposit_price').wrap('<span class="deleteicon" />').after($('<span/>').click(function() {
		$(this).prev('input').val('').focus();
	}));

	/* close layer */
	$("#layer_myplace .close_layer").click(function() {hideTranslucency();$("#layer_myplace").hide();});
	$("#layer_popup .close_layer").click(function() {hideTranslucency();$("#layer_popup").hide();});
	$("#layer_cb01 .close_layer").click(function() {hideTranslucency();$("#layer_cb01").hide();});
	$("#layer_cb02 .close_layer").click(function() {hideTranslucency();$("#layer_cb02").hide();});
	$("#layer_cb03 .close_layer").click(function() {hideTranslucency();$("#layer_cb03").hide();});
	$("#layer_cb04 .close_layer").click(function() {hideTranslucency();$("#layer_cb04").hide();});
	$("#layer_cb05 .close_layer").click(function() {hideTranslucency();$("#layer_cb05").hide();});
	$("#layer_cb06 .close_layer").click(function() {hideTranslucency();$("#layer_cb06").hide();});
	$("#layer_cb07 .close_layer").click(function() {hideTranslucency();$("#layer_cb07").hide();});
	$("#layer_cb08 .close_layer").click(function() {hideTranslucency();$("#layer_cb08").hide();});
	$("#layer_cb09 .close_layer").click(function() {hideTranslucency();$("#layer_cb09").hide();});
	$("#layer_cb10 .close_layer").click(function() {hideTranslucency();$("#layer_cb10").hide();});
	$("#layer_cb11 .close_layer").click(function() {hideTranslucency();$("#layer_cb11").hide();});
	$("#layer_pagenotfound .close_layer").click(function() {hideTranslucency();$("#layer_pagenotfound").hide();});
	$("#compare_popup01 .close_layer").click(function() {hideTranslucency();$("#compare_popup01").hide();});
	$("#compare_popup02 .close_layer").click(function() {hideTranslucency();$("#compare_popup02").hide();});
	$("#package_compare .con_popup .close_layer").click(function() {hideTranslucency();$("#package_compare").hide();});
	$("#compare_car .con_popup .close_layer").click(function() {hideTranslucency();$("#compare_car").hide();});
	$("#compare_option .con_popup .close_layer").click(function() {hideTranslucency();$("#compare_option").hide();});
	$("#code_popup .close_layer").click(function() {hideTranslucency();$("#code_popup").hide();});
	$("#rebuild_pop .close_layer").click(function() {hideTranslucency();$("#rebuild_pop").hide();});
	$("#layer_over140 .close_layer").click(function() {hideTranslucency();$("#layer_over140").hide();});

	$(".ads_list .con_ads li").click(function() {
		var h=$(document).height()
		$('#layer_popup.play_movie').css("height",h);
		$("#layer_popup").show();
		$(".thum_list .car_list").jCarouselLite({btnNext: ".thum_list .arrow_right",btnPrev: ".thum_list .arrow_left",scroll: 1,visible: 4,circular: false});
	});
	$(".car_photo .car_list_sort ul li").css("width","198px");
	$(".car_photo .car_list_sort ul li").css("height","130px");
	var liSize = $(".car_photo .car_list_sort ul li").size();
	var ulWidth = liSize * 198;
	$(".car_photo .car_list_sort ul").css("width", ulWidth);
		$('.gnb>li>a').click(function(){
		var currentTab=$(this).attr('href');
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$(currentTab).hide();
			return false;
		} else {
			$('.gnb>li>a').removeClass('on');
			$('.gnb_layer').hide();
			$(this).addClass('on');
			$(currentTab).show();
			return false;
		}
	});

	/* car bulder option select button */
	$('.car_builder .options_lists .btn').toggle(function(){$(this).addClass('selected');return false;},function(){$(this).removeClass('selected');return false;});
	$('.main_gallery .photo').cycle({fx:     'fade',speed:  'slow',timeout: 0,
		pager:  '.car_list .car_list_sort ul',
		pagerAnchorBuilder: function(idx, slide) {
			return '.car_list .car_list_sort ul li:eq(' + idx + ')';
		}
	});
	$(".car_list .car_list_sort").jCarouselLite({btnNext: ".car_list .list_next",btnPrev: ".car_list .list_prev",scroll: 1,visible: 4,circular: false});
	//$(".car_list .car_list_sort ul li").hover(function(){$(this).addClass('selected');return false;},function(){$(this).removeClass('selected');return false;});
	$('.car_select_list li').hover(function(){
		$(this).find('.thumb').css('background','url(/wcm/images/es/function/txt_item_select_l.gif) no-repeat 0 87px');
		$(this).find('a').css('color','#0a2268');
		$(this).find('.thumb').animate({
			marginTop:'-18px',
			paddingBottom:'18px'
		},400);
	},function(){
		$(this).find('a').css('color','#333333');
		$(this).find('.thumb').animate({
			marginTop:0,
			paddingBottom:0
		},{duration:200,complete:function() {
			$(this).css('background','none');
		}});
	});
	$('.car_selectlist li').hover(function(){
		$(this).addClass('select');
		$(this).find('.thumb').css('background','transparent url(/wcm/images/common/function/bg_carlist_select_on.png) no-repeat 0 65px');
		$(this).find('.thumb').animate({
			marginTop:'-13px',
			paddingBottom:'13px'
		},400);
	},function(){
		$(this).removeClass('select');
		$(this).find('.thumb').animate({
			marginTop:'0',
			paddingBottom:'0'
		},{duration:100,complete:function() {
			$(this).css('backgroundImage','none');
		}});
	});
	// scroll for smart phone // overflow:auto;
	if (isMobile==1) {
		$(".dealerfinder_direction .direction .direction_result").css("height","auto");
		$(".cb_img_table .con_explain").css("height","auto");
		touchScroll('accessory_scroll');
		touchScroll('facebook_scroll');
		touchScroll('twitter_scroll');
		touchScroll('exterior_scroll');
		touchScroll('interior_scroll');
		touchScroll('trim1_scroll');
		touchScroll('trim2_scroll');
		touchScroll('etc_scroll');
		touchScroll('content_package');
		touchScroll('group_explain');
	}
	/* scripts for spec */
	$(".expand_contract a.plus").click(function() {
		// open all
		$(".expand_contract a.plus").hide();
		$(".expand_contract a.minus").show();
		$(".slide_content_last .spec_performance .spec_table").css("height","auto");
		$(".slide_content_last .spec_dimemsion .spec_table").css("height","auto");
		$(".slide_content_last .spec_chassis .spec_table").css("height","auto");
		$(".slide_content_last .spec_dhassis .spec_table").css("height","auto");
		$(".slide_content_last .spec_performance .spec_performance_title a").addClass("on");
		$(".slide_content_last .spec_dimemsion .spec_dimemsion_title a").addClass("on");
		$(".slide_content_last .spec_chassis .spec_chassis_title a").addClass("on");
		$(".slide_content_last .spec_dhassis .spec_dhassis_title a").addClass("on");
		return false;
	});
	$(".expand_contract a.minus").click(function() {
		// close all
		$(".expand_contract a.plus").show();
		$(".expand_contract a.minus").hide();
		$(".slide_content_last .spec_performance .spec_table").css("height","1px");
		$(".slide_content_last .spec_dimemsion .spec_table").css("height","1px");
		$(".slide_content_last .spec_chassis .spec_table").css("height","1px");
		$(".slide_content_last .spec_dhassis .spec_table").css("height","1px");
		$(".slide_content_last .spec_performance .spec_performance_title a").removeClass("on");
		$(".slide_content_last .spec_dimemsion .spec_dimemsion_title a").removeClass("on");
		$(".contents_specification .spec_chassis .spec_chassis_title a").removeClass("on");
		$(".contents_specification .spec_dhassis .spec_dhassis_title a").removeClass("on");
		return false;
	});
	$(".slide_content_last .spec_performance .spec_performance_title a").click(function() {toggleSpecItem("performance");return false;});
	$(".slide_content_last .spec_dimemsion .spec_dimemsion_title a").click(function() {toggleSpecItem("dimemsion");return false;});
	$(".slide_content_last .spec_chassis .spec_chassis_title a").click(function() {toggleSpecItem("chassis");return false;});
	$(".slide_content_last .spec_dhassis .spec_dhassis_title a").click(function() {toggleSpecItem("dhassis");return false;});

	if (document.getElementById("floating_top")) {floating_top();}    
	if(userAgent.indexOf('Mobile')>0||userAgent.indexOf('Android')>0) monileTopBtn();
});

$(window).load(function(e){
	scrollAnimation();
});
/* resize event */
$(window).resize(function(e){
	if (isMobile==0) {fixedPosition();galleryPopup();}
	if($(".layer_experience_panorama .large .panorama img").is("img.panorama_large")) {
		var w=$(".layer_experience_panorama .large .panorama img.panorama_large").width();
		var h=$(".layer_experience_panorama .large .panorama img.panorama_large").height();
		$(".layer_experience_panorama .large .panorama").css("width",$(window).width()).css("height",parseInt($(window).width()*h/w));
		$(".layer_experience_panorama .large .panorama img.panorama_large").css("width",$(window).width()).css("height",parseInt($(window).width()*h/w));
		$(".pano_loading_percent").css("left",parseInt($(".layer_experience_panorama .large .panorama").width()/2-55) + 'px').css("top",parseInt($(".layer_experience_panorama .large .panorama").height()/2-50) + 'px');
		$(".pano_loading_start").css("left",parseInt($(".layer_experience_panorama .large .panorama").width()/2-55) + 'px').css("top",parseInt($(".layer_experience_panorama .large .panorama").height()/2-50) + 'px');
	}
	if (document.getElementById("floating_top")) {floating_top();}
});
/* scroll event */
$(window).scroll(function(e){
	if (!navigator.userAgent.match(/MSIE/i)) {changeSubmenuHighlight();}
	fixedPosition();fixedPositionScroll();
});
/* mousemove event
$(document).mousemove(function(e){
	if(!document.getElementById('gnb')) return false;
	var x = e.pageX;
	var y = e.pageY;
	var w = $(window).width();
	var h = $(window).height();
	var gnbLeft = $('.gnb').position().left;
	var gnbTop = $('.gnb').position().top;
	if(x<gnbLeft || x > gnbLeft+$('.header').width() || y<gnbTop || y>gnbTop+$('.gnb_layer:visible').height()){
		$('.wrap').click(function(){
			$('.gnb>li>a').removeClass('on');
			$('.gnb_layer').hide();
		});
	} else {
		return false;
	}
}); */

/* ********** functions ********** */

function floating_top() {
	var leftvalue = ($(window).width()-960)/2 + 960;
	$("#floating_top").css("left",leftvalue);
}

$(window).scroll(function(e){
	//if (!navigator.userAgent.match(/MSIE/i)) {changeSubmenuHighlight();}
	fixedPosition();fixedPositionScroll();
            if ($(window).scrollTop() > 410) {$("#floating_top").show();}
            else {$("#floating_top").hide();}
	}

);

function chkInput(obj) {
	var nowV = obj.val();
	var defV = obj[0].defaultValue;
	if(nowV == defV || !TrimString(nowV)) {
		obj.parent().parent().addClass("check");
		return 0;
	} else {
		obj.parent().parent().removeClass("check");
		return 1;
	}
}
function chkSelect(obj) {
	var nowV = obj.val();
	if(nowV == "") {
		obj.parent().parent().parent().addClass("check");
		return 0;
	} else {
		obj.parent().parent().parent().removeClass("check");
		return 1;
	}
}
function toggleSpecItem(va) {
	var cl = $(".slide_content_last .spec_"+va+" .spec_table").css("height");
	if (cl==1 || cl=="1" || cl=="1px") {
		// open
		$(".slide_content_last .spec_"+va+" .spec_table").css("height","auto");
		$(".slide_content_last .spec_"+va+" .spec_"+va+"_title a").addClass("on");
	} else {
		// close
		$(".slide_content_last .spec_"+va+" .spec_table").css("height","1px");
		$(".slide_content_last .spec_"+va+" .spec_"+va+"_title a").removeClass("on");
	}
}
function cubeTalknTalkInit() {
	$(".cubebox .cubelist .talkntalk_list ul li .comment").each(function() {$(this).empty();});
	$(".cubebox .cubelist .talkntalk_list ul li .name").each(function() {$(this).empty();});
}
function cubeTalknTalk(num,socialType,profileImg,name,txt,txtLayer) {
    $(".cubebox .cubelist .talkntalk_list ul li.comment"+num+" .name").append('<img src="/wcm/images/common/icon/icon_cube_talkntalk_'+socialType+'.gif" alt="" /><img src="'+profileImg+'" alt="" class="profile" /> <span>'+name+'</span>');
    if(!txtLayer || txtLayer=="") {
    $(".cubebox .cubelist .talkntalk_list ul li.comment"+num+" .comment").txtloopit(txt);
    } else {
    $(".cubebox .cubelist .talkntalk_list ul li.comment"+num+" .comment").append("<a href=\"#\" onclick=\"displayTalknTalkMore('comment"+num+"','"+txtLayer+"');\"></a>");
    $(".cubebox .cubelist .talkntalk_list ul li.comment"+num+" .comment a").txtloopit(txt);
    }
}
function displayTalknTalkMore(val, alltxt) {
    $(".layer_talkntalk_more").show();
    var author = $("."+val+" span.name").html();
    $(".layer_talkntalk_more .author").html(author);
    $(".layer_talkntalk_more .memo .scroll").html(alltxt);
}
function cubeMostLikeCate(selectNum, profile1, profile2, profile3, name1, name2, name3) {
	$(".mostlike_best3").empty();
	$(".mostlike_best3").append("<ul></ul>");
	if (selectNum==1) {
		$(".mostlike_best3 ul").append('<li class="best1 on"><a href="#"><img src="'+profile1+'" alt="" /><strong>'+name1+'\'s</strong><br />Chosen</a></li>');
		$(".mostlike_best3 ul").append('<li class="best2"><a href="#"><img src="'+profile2+'" alt="" /><strong>'+name2+'\'s</strong><br />Chosen</a></li>');
		$(".mostlike_best3 ul").append('<li class="best3"><a href="#"><img src="'+profile3+'" alt="" /><strong>'+name3+'\'s</strong><br />Chosen</a></li>');
	} else if (selectNum==2) {
		$(".mostlike_best3 ul").append('<li class="best1"><a href="#"><img src="'+profile1+'" alt="" /><strong>'+name1+'\'s</strong><br />Chosen</a></li>');
		$(".mostlike_best3 ul").append('<li class="best2 on"><a href="#"><img src="'+profile2+'" alt="" /><strong>'+name2+'\'s</strong><br />Chosen</a></li>');
		$(".mostlike_best3 ul").append('<li class="best3"><a href="#"><img src="'+profile3+'" alt="" /><strong>'+name3+'\'s</strong><br />Chosen</a></li>');
	} else {
		$(".mostlike_best3 ul").append('<li class="best1 on"><a href="#"><img src="'+profile1+'" alt="" /><strong>'+name1+'\'s</strong><br />Chosen</a></li>');
		$(".mostlike_best3 ul").append('<li class="best2"><a href="#"><img src="'+profile2+'" alt="" /><strong>'+name2+'\'s</strong><br />Chosen</a></li>');
		$(".mostlike_best3 ul").append('<li class="best3"><a href="#"><img src="'+profile3+'" alt="" /><strong>'+name3+'\'s</strong><br />Chosen</a></li>');
	}
}
/*
function cubeMostLike(carName,trim,exteriorColor,interiorColor,carImg,seemoreLink,carbuilderLink,likeCode) {
	$(".mostlike_option .carname").empty();
	$(".mostlike_option .option").empty();
	$(".mostlike_option .car_image").empty();
	$(".mostlike_option .button").empty();
	$(".mostlike_option .like").empty();
	$(".mostlike_option .carname").append('<strong>'+carName+'</strong><br />'+trim);
	$(".mostlike_option .option").append('<img src="/wcm/images/es/cube/mostlike_exteriorcolor.png" alt="Exterior Color" class="option_title" /> <img src="'+exteriorColor+'" alt="" /> <img src="/wcm/images/es/cube/mostlike_interiorcovering.png" alt="Interior Color" class="option_title" /> <img src="'+interiorColor+'" alt="" />');
	$(".mostlike_option .car_image").append('<img src="'+carImg+'" alt="" /><br />');
	$(".mostlike_option .button").append('<a href="'+seemoreLink+'"><img src="/wcm/images/es/btn/btn_seemore.gif" alt="see more" /></a>');
	$(".mostlike_option .button").append('<a href="'+carbuilderLink+'"><img src="/wcm/images/es/btn/btn_carbuilder.gif" alt="Build your own" /></a>');
	$(".mostlike_option .like").append(likeCode);
}
*/
/* 0419 ?÷??? ??? ????
exteriorColor,interiorColor ???
 */
function cubeMostLike(carName,trim,exteriorColor,interiorColor,carImg,seemoreLink,carbuilderLink,likeCode,exteriorColorName,interiorColorName) {
	$(".mostlike_option .carname").empty();
	$(".mostlike_option .option").empty();
	$(".mostlike_option .car_image").empty();
	$(".mostlike_option .button").empty();
	$(".mostlike_option .like").empty();
	$(".mostlike_option .carname").append('<strong>'+carName+'</strong><br />'+trim);
	$(".mostlike_option .option").append('<span><img src="'+exteriorColor+'" alt="" width="28" height="28" /> <img src="/wcm/images/'+country+'/cube/mostlike_exteriorcolor.png" alt="Exterior Color" class="option_title" /><br>'+exteriorColorName+'</span> <span><img src="'+interiorColor+'" alt="" width="28" height="28" /> <img src="/wcm/images/'+country+'/cube/mostlike_interiorcovering.png" alt="Interior Color" class="option_title" /><br>'+interiorColorName+'</span>'); // ???? ???? ????
	$(".mostlike_option .car_image").append('<img src="'+carImg+'" alt="" /><br />');
	$(".mostlike_option .button").append('<a href="'+seemoreLink+'"><img src="/wcm/images/'+country+'/btn/btn_seedetail.gif" alt="See Detail" /></a>');
	$(".mostlike_option .button").append('<a href="'+carbuilderLink+'"><img src="/wcm/images/'+country+'/btn/btn_carbuilder.gif" alt="Build Your Own" /></a>');
	$(".mostlike_option .like").append(likeCode);
}
/* 0419 ?÷??? ??? ?? */
function cubeExperience(cate,panoramaImg,largeImg,isColor) {
	var orig_src = "";
	if (isColor=="color") orig_src = $(".experience_panoramabox img").attr("src");
	else orig_src = panoramaImg;
	$(".experience_category").empty();
	$(".experience_panoramabox").empty();
	$(".experience_large").empty();
	$(".experience_option").empty();
	var src_prefix = panoramaImg.substr(0, orig_src.lastIndexOf('_')+1);
	var src_sufix = panoramaImg.substr(orig_src.indexOf(src_number,0)+String(src_number).length);
	var src_number = parseInt(orig_src.substr(orig_src.lastIndexOf('_')+1));
	if (cate=="exterior") {
		$(".experience_category").append('<ul><li><a href="#" class="on">Exterior</a></li><li><a href="#">Interior</a></li></ul>');
		$(".experience_panoramabox.exterior").show();
		$(".experience_panoramabox.interior").hide();
		$(".experience_panoramabox.exterior").append('<img src="'+panoramaImg+'" class="panorama" width="640" height="289" alt="" /><br />');
		$(".exterior img.panorama").panorama({views_number: 36,views_columns: 36});
		$(".experience_large").append('<a href="#" onclick="showPanoramaLargeLayer(\''+largeImg+'\', \'exterior\');return false;"><img src="/wcm/images/common/btn/btn_largeimg.png" alt="+" /></a><br />');
		$(".experience_option").append("<ul></ul>");
		$(".cube_shadow_interior").hide();
	} else {
		$(".experience_category").append('<ul><li><a href="#">Exterior</a></li><li><a href="#" class="on">Interior</a></li></ul>');
		$(".experience_panoramabox.exterior").hide();
		$(".experience_panoramabox.interior").show();
		$(".experience_panoramabox.interior").append('<img src="'+panoramaImg+'" class="panorama" width="640" height="251" alt="" /><br />');
		$(".interior img.panorama").panorama();
		$(".experience_large").append('<a href="#" onclick="showPanoramaLargeLayer(\''+largeImg+'\', \'interior\');return false;"><img src="/wcm/images/common/btn/btn_largeimg.png" alt="+" /></a><br />');
		$(".experience_option").append("<ul></ul>");
		$(".cube_shadow_interior").show();
	}
}
function cubeExperienceColorList(num,onoff,colorImg) {
	if (onoff=="on") {
		$(".experience_option ul").append('<li class="color'+num+'"><a href="#"><img src="'+colorImg+'" alt="" /></a><br /><span><img src="/wcm/images/common/bg/cover_color.png" alt="" /></span></li>');
	} else {
		$(".experience_option ul").append('<li class="color'+num+'"><a href="#"><img src="'+colorImg+'" alt="" /></a></li>');
	}
}
function showPanoramaLargeLayer(imgurl,mode) {
	$(".layer_experience_panorama").empty();
	$(".layer_experience_panorama").append('<div class="layer_panorama_close"><a href="#"><img src="/wcm/images/common/btn/btn_layer_close.png" alt="close" /></a><br /></div>');
	$(".layer_experience_panorama .layer_panorama_close a").click(function(){fadeinout('.layer_experience_panorama','fadeout');return false;});
	if (mode=="exterior") {
		$(".layer_experience_panorama").append('<div class="normal"><div class="box"><img src="'+imgurl+'" width="1024" height="462" class="panorama_large" alt="" /></div></div>');
		if (document.getElementById("pip") || document.getElementById("main")) {
			$(".layer_experience_panorama").append('<div class="experience_category"><ul><li><a href="#" class="on">Exterior</a></li><li><a href="#">Interior</a></li></ul></div>');
		}
		$("img.panorama_large").panorama({views_number: 36,views_columns: 36});
	} else {
		$(".layer_experience_panorama").append('<div class="large"><img src="'+imgurl+'" width="1024" height="590" class="panorama_large" alt="" /></div>');
		$(".layer_experience_panorama").append('<div class="experience_category"><ul><li><a href="#">Exterior</a></li><li><a href="#" class="on">Interior</a></li></ul></div>');
		$("img.panorama_large").attr("width",$(window).width());
		$("img.panorama_large").attr("height",parseInt($(window).width()*590/1024));
		$("img.panorama_large").panorama();
	}
	$(".layer_experience_panorama").append('<div class="experience_desc"><span>The image may differ from the actual product.</span></div>');
	fadeinout('.layer_experience_panorama','fadein');
}
function cubeGalleryLayout(ob,cate) {
	var obj = ob;
	obj.empty();
	if (cate=="all") obj.append('<div class="gallery_category"><ul><li class="on"><a href="#">All</a></li><li><a href="#">Exterior</a></li><li><a href="#">Interior</a></li><li><a href="#">Movies</a></li></ul></div>');
	else if (cate=="exterior") obj.append('<div class="gallery_category"><ul><li><a href="#">All</a></li><li><a href="#" class="on">Exterior</a></li><li><a href="#">Interior</a></li><li><a href="#">Movies</a></li></ul></div>');
	else if (cate=="interior") obj.append('<div class="gallery_category"><ul><li><a href="#">All</a></li><li><a href="#">Exterior</a></li><li><a href="#" class="on">Interior</a></li><li><a href="#">Movies</a></li></ul></div>');
	else obj.append('<div class="gallery_category"><ul><li><a href="#">All</a></li><li><a href="#">Exterior</a></li><li><a href="#">Interior</a></li><li><a href="#" class="on">Movies</a></li></ul></div>');
	obj.append('<ul class="gallerylist"></ul>');
	obj.append('<div class="cube_shadow"><div><img src="/wcm/images/common/bg/bg_cube_shadow.png" alt="" /></div></div>');
}
function cubeGalleryList(cate,listImg,largeImg,titletxt,titleimg,description,mode,download,twitter,facebook,stumbleupon,like) {
	$(".gallerylist").append('<li><a href="#" class="'+cate+'" onclick="showGalleryLargeLayer(\''+largeImg+'\',\''+titletxt+'\',\''+titleimg+'\',\''+description+'\',\''+mode+'\',\''+download+'\',\''+twitter+'\',\''+facebook+'\',\''+stumbleupon+'\',\''+like+'\', \'\');return false;"><img src="'+listImg+'" alt="" /></a></li>');
}
function cubeGalleryPaging(current,all) {
	if (current==1) $(".gallerylist").append('<li class="paging"><strong>'+current+'</strong> of '+all+'</a><a href="#" class="next">next</a></li>');
	else if(current==all) $(".gallerylist").append('<li class="paging"><a href="#" class="prev">previous</a><strong>'+current+'</strong> of '+all+'</a></li>');
	else $(".gallerylist").append('<li class="paging"><a href="#" class="prev">previous</a><strong>'+current+'</strong> of '+all+'</a><a href="#" class="next">next</a></li>');
}
function showGalleryLargeLayer(code,carname,titleimg,description,isImg,download,twitter,facebook,stumbleupon,like,isMain) {
	$(".layer_gallery").empty();
	$(".layer_gallery").append('<div class="layer_gallery_close"><a href="#"><img src="/wcm/images/common/btn/btn_layer_close2.png" alt="close" /></a><br /></div>');
	$(".layer_gallery .layer_gallery_close a").click(function() {fadeinout('.layer_gallery','fadeout');galleryPopup();$(".layer_gallery").empty();return false;});
	$(".layer_gallery").append('<div class="layer_gallery_title"><img src="'+titleimg+'" alt="'+carname+'" /> '+description+'</div>');
	if (isImg=="image") {
		$(".layer_gallery").append('<div class="large"><img src="'+code+'" class="img" alt="" /><br /></div>');
		if (isMobile==0) {
			$(".layer_gallery").append('<div class="layer_gallery_control"><ul><li class="zoomin"><a href="#"><img src="/wcm/images/common/btn/btn_zoomin.png" alt="Zoom In" /></a></li><li class="zoomout" style="display:none;"><a href="#"><img src="/wcm/images/common/btn/btn_zoomout.png" alt="Zoom Out" /></a></li></ul></div>');
			$(".layer_gallery").append('<div class="minimap"><div class="in"><img src="'+code+'" class="small" /><br /><div class="move"><img src="/wcm/images/common/bg/blank.gif" alt="" /></div></div></div>');
			$(".layer_gallery_control .zoomin a").click(function() {galleryZoomIn()});
			$(".layer_gallery_control .zoomout a").click(function() {galleryZoomOut()});
			$(".layer_gallery .minimap .in .move").draggable({containment:".layer_gallery .minimap .in", cursor:"move",
				start:function(event) {},
				stop:function(event) {
					// image size - 1920*1152 // 108 * 64
					var x = parseInt(parseInt($(this).css("left"))*1920/108) * -1;
					var y = parseInt(parseInt($(this).css("top"))*1152/64) * -1;
					$(".layer_gallery .large").css("left",x).css("top",y);
				}
			});
		}
	} else { // movie
		$(".layer_gallery").append('<div class="large_movie"><iframe width="574" height="460" src="'+code+'" frameborder="0" allowfullscreen></iframe></div>');
	}
	if (isMain!="main") {
		$(".layer_gallery").append('<div class="layer_gallery_left"><a href="#"><img src="/wcm/images/common/btn/btn_layer_left.png" alt="previous" /></a><br /></div>');
		$(".layer_gallery").append('<div class="layer_gallery_right"><a href="#"><img src="/wcm/images/common/btn/btn_layer_right.png" alt="next" /></a><br /></div>');
	}
	var tmp_strumbleCode = "";
	if (isImg=="image") {
		tmp_strumbleCode = "";
	}else {
		tmp_strumbleCode = '<a href="'+stumbleupon+'"><img src="/wcm/images/common/icon/icon_su_black.gif" alt="" /></a>';
	}
	$(".layer_gallery").append('<div class="layer_gallery_links"><iframe src="http://www.facebook.com/plugins/like.php?href='+like+'&amp;send=false&amp;layout=button_count&amp;width=120&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font=arial&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:120px; height:21px;" allowTransparency="true"></iframe> <span><img src="/wcm/images/'+country+'/cube/txt_download.png" alt="" /></span> <a href="'+download+'"><img src="/wcm/images/common/btn/btn_cube_gallery_download.png" alt="" /></a> <span><img src="/wcm/images/'+country+'/cube/txt_share.png" alt="" /></span> <a href="'+facebook+'"><img src="/wcm/images/common/btn/btn_cube_gallery_facebook.png" alt="" /></a> <a href="'+twitter+'"><img src="/wcm/images/common/btn/btn_cube_gallery_twitter.png" alt="" /></a> '+tmp_strumbleCode+'</div>');
	galleryPopup();
	fadeinout('.layer_gallery','fadein');
}
function fadeinout(selector, op) {
	if (op=="fadein") {$(selector).fadeIn();} else {$(selector).fadeOut();}
	var h=$(document).height()
	$(selector).css("height",h);
}
function galleryOver() {
	$(".gallerylist img.cover").remove();
	$(".gallerylist li a").each(function() {
		var classname = $(this).attr("class");
		var appendobj="";
		if (classname=="exterior") {
			$(this).append('<img src="/wcm/images/es/cube/gallery_item_cover_exterior.png" class="cover" alt="" />');
		} else if (classname=="interior") {
			$(this).append('<img src="/wcm/images/es/cube/gallery_item_cover_interior.png" class="cover" alt="" />');
		} else if (classname=="movie") {
			$(this).append('<img src="/wcm/images/es/cube/gallery_item_cover_movie2.png" class="cover" alt="" />');
		}
		$(this).bind("mouseover",function(){
			$("img.cover",$(this)).css("zIndex",10);
		});
		$(this).bind("mouseout",function(){
			$("img.cover",$(this)).css("zIndex",8);
		});
	});
}
function galleryPopup() {
	var w = $(window).width();
	var h = $(document).height();
	if (w<960) {w=960};
	$(".layer_gallery").css("width",w).css("height",h);
	$(".layer_gallery .large").css("width",w).css("left",0).css("top",0);
	$(".layer_gallery .minimap .in .move").css("left",0).css("top",0);
}
function galleryZoomIn() { // image size - 1920*1152 // 108 * 64
	var w=parseInt($(".layer_gallery .large img.img").css("width"));
	var h=parseInt($(".layer_gallery .large img.img").css("height"));
	$(".layer_gallery .large img.img").css("left",0);
	$(".layer_gallery .large img.img").animate({"width":1920},{duration:900,easing:"motion"});
	$(".layer_gallery_control .zoomin").hide();
	$(".layer_gallery_control .zoomout").show();
	$(".layer_gallery .minimap").show();
	var all_w = $(window).width();
	var all_h = $(window).height();
	var img_w = 1920;
	var img_h = 1152;
	var ratio_w = parseInt((all_w/img_w)*100) * 108 / 100;
	var ratio_h = parseInt((all_h/img_h)*100) * 64 / 100;
	$(".layer_gallery .minimap .in .move").css("width",ratio_w).css("height",ratio_h).css("left",0).css("top",0);
}
function galleryZoomOut() { // image size - 1920*1152 // 108 * 64
	var w=parseInt($(".layer_gallery .large img.img").css("width"));
	var h=parseInt($(".layer_gallery .large img.img").css("height"));
	$(".layer_gallery .large img.img").css("left",0);
	if ($(window).width()<960) {
		$(".layer_gallery .large img.img").animate({"width":960},{duration:900,easing:"motion"});
	} else {
		$(".layer_gallery .large img.img").animate({"width":$(window).width()},{duration:900,easing:"motion"});
	}
	$(".layer_gallery .large").css("left",0).css("top",0);
	$(".layer_gallery .minimap .in .move").css("left",0).css("top",0);
	$(".layer_gallery_control .zoomin").show();
	$(".layer_gallery_control .zoomout").hide();
	$(".layer_gallery .minimap").hide();
}
/* scroll animation */
function scrollAnimation() {
	if(isMobile==0){
		$('a[href*=#wrap], a[href*=#slide_content01], a[href*=#slide_content02], a[href*=#slide_content03], a[href*=#slide_content04], a[href*=#slide_content05], a[href*=#slide_content06], a[href*=#slide_content07], a[href*=#slide_content08], area[href*=#wrap], area[href*=#slide_content01], area[href*=#slide_content02], area[href*=#slide_content03], area[href*=#slide_content04], area[href*=#slide_content05], area[href*=#slide_content06], area[href*=#slide_content07], area[href*=#slide_content08]').click(function() {

			if (navigator.userAgent.match(/MSIE/i)) {
				initSubmenuHighlight();
				$(this).addClass("on");
			}

			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var $target = $(this.hash);
				$target = $target.length && $target || jQuery('[name=' + this.hash.slice(1) +']');
				if ($target.length) {
					var targetOffset = $target.offset().top;
					jQuery('html,body').animate({scrollTop:targetOffset}, {duration:500, easing:'motion'});
					return false;
				} else {
					return true;
				}
			} else {
				return true;
			}
		});
	} else {
		$('a[href*=#wrap]').click(function() {goToMyId('wrap');});
		$('a[href*=#slide_content01]').click(function() {goToMyId('slide_content01');});
		$('a[href*=#slide_content02]').click(function() {goToMyId('slide_content02');});
		$('a[href*=#slide_content03]').click(function() {goToMyId('slide_content03');});
		$('a[href*=#slide_content04]').click(function() {goToMyId('slide_content04');});
		$('a[href*=#slide_content05]').click(function() {goToMyId('slide_content05');});
		$('a[href*=#slide_content06]').click(function() {goToMyId('slide_content06');});
		$('a[href*=#slide_content07]').click(function() {goToMyId('slide_content07');});
		$('a[href*=#slide_content08]').click(function() {goToMyId('slide_content08');});
		$('area[href*=#wrap]').click(function() {goToMyId('wrap');});
		$('area[href*=#slide_content01]').click(function() {goToMyId('slide_content01');});
		$('area[href*=#slide_content02]').click(function() {goToMyId('slide_content02');});
		$('area[href*=#slide_content03]').click(function() {goToMyId('slide_content03');});
		$('area[href*=#slide_content04]').click(function() {goToMyId('slide_content04');});
		$('area[href*=#slide_content05]').click(function() {goToMyId('slide_content05');});
		$('area[href*=#slide_content06]').click(function() {goToMyId('slide_content06');});
		$('area[href*=#slide_content07]').click(function() {goToMyId('slide_content07');});
		$('area[href*=#slide_content08]').click(function() {goToMyId('slide_content08');});
		if (!location.hash || location.hash=="#wrap") {
			setTimeout(scrollTo, 0, 0, 1);
		} else {
			if (location.hash=="#slide_content01") {goToMyId('slide_content01');}
			if (location.hash=="#slide_content02") {goToMyId('slide_content02');}
			if (location.hash=="#slide_content03") {goToMyId('slide_content03');}
			if (location.hash=="#slide_content04") {goToMyId('slide_content04');}
			if (location.hash=="#slide_content05") {goToMyId('slide_content05');}
			if (location.hash=="#slide_content06") {goToMyId('slide_content06');}
			if (location.hash=="#slide_content07") {goToMyId('slide_content07');}
			if (location.hash=="#slide_content08") {goToMyId('slide_content08');}
		}
	}
}
function goToMyId(myid) { // ????ID값으??직진, ?????�???�? ????????�??
	var target = $('div[id='+myid+']');
	if (target.length){var top = target.offset().top;
		$('html,body').animate({scrollTop:top},{duration:1000,easing:'motion',complete:function() {
			fixedPositionScroll();changeSubmenuHighlight();
		}});
		return false;
	}
}
function banner(imgView){

	bannerSec = document.getElementById("roll");
	bannerLis = bannerSec.getElementsByTagName("li");

	//imgView  //?�번??보여�??��?�?개수
	imgTotal = bannerLis.length;

	// right button hidden 
	/*if(imgTotal<=5) {
		document.getElementById("arr_right").getElementsByTagName("a")[0].removeAttribute("href");
		document.getElementById("arr_right").getElementsByTagName("img")[0].src="/worldwide/images/experience/arr_right2_off.gif";
	}*/

	if(imgTotal<=4) {
		document.getElementById("arr_right").getElementsByTagName("a")[0].removeAttribute("href");
		document.getElementById("arr_right").getElementsByTagName("img")[0].src="../worldwide/images/experience/arr_right_off.html";
	}

	// 초기 hidden
	for(var i=imgView;i<bannerLis.length;i++){
		bannerLis[i].style.display = "none";
	}
	
	// 버튼
	click_num = 1;

	var btn_prev_img = document.getElementById("arr_left").getElementsByTagName("img")[0];
	var btn_prev_a = document.getElementById("arr_left").getElementsByTagName("a")[0];
	var btn_next_img = document.getElementById("arr_right").getElementsByTagName("img")[0];
	var btn_next_a = document.getElementById("arr_right").getElementsByTagName("a")[0];

	// ?�전 버튼
	btn_prev_a.onclick = function(){

		click_num--;

		if(click_num < 1){
			click_num++;
			return;
		}else{		
			for(var k=0;k<imgTotal;k++){
				if(k>(click_num-1)*imgView-1 && k<click_num*imgView)
				{
					bannerLis[k].style.display = "block";
				}else{
					bannerLis[k].style.display = "none";
				}
			}

			if(click_num == 1)
			{
				for(var k=0;k<imgTotal;k++){
					if(k>=0 && k<imgView)
					{
						bannerLis[k].style.display = "block";
					}else{
						bannerLis[k].style.display = "none";
					}
				}
			}
		}

		if( (click_num >= imgTotal/imgView)  && btn_next_img.src.indexOf("_on") >= 0 ){
			btn_next_img.src = btn_next_img.src.replace("_on.html", "_off.html");
		}else if ((click_num < imgTotal/imgView)  && btn_next_img.src.indexOf("_on") < 0){
			btn_next_img.src = btn_next_img.src.replace("_off.html", "_on.html");
		}

		if(click_num >= 1 && btn_prev_img.src.indexOf("_on") < 1){
			btn_prev_img.src =btn_prev_img.src.replace("_off.html", "_on.html");
		}else if (click_num == 1 && btn_prev_img.src.indexOf("_on") >= 1){
			btn_prev_img.src =btn_prev_img.src.replace("_on.html", "_off.html");
		}

		if(btn_prev_img.src.indexOf("_on") >= 0) {
			btn_prev_a.setAttribute('href','#roll');
		}else{
			btn_prev_a.removeAttribute('href');
		}

		if(btn_next_img.src.indexOf("_on") >= 0) {
			btn_next_a.setAttribute('href','#roll');
		}else{
			btn_next_a.removeAttribute('href');
		}
		return false;
	};
	
	// ?�음 버튼
	btn_next_a.onclick = function(){

		click_num++;
		
		if(click_num >= imgTotal/imgView+1){
			click_num--;
			return;
		}else{

			for(var k=0;k<imgTotal;k++){				
				if(k>(click_num-1)*imgView-1 && k<click_num*imgView)
				{
					bannerLis[k].style.display = "block";
				}else{
					bannerLis[k].style.display = "none";
				}			
			}
			/* ?�정 0919
			if(click_num == Math.ceil(imgTotal/imgView))
			{
				for(var k=0;k<imgTotal;k++){
					if(k>imgTotal-imgView-1 && k<imgTotal)
					{
						bannerLis[k].style.display = "block";
					}else{
						bannerLis[k].style.display = "none";
					}
				}
			}*/
		}
		if( (click_num >= imgTotal/imgView)  && btn_next_img.src.indexOf("_on") >= 0 ){
			btn_next_img.src = btn_next_img.src.replace("_on.html", "_off.html");
		}else if ((click_num < imgTotal/imgView)  && btn_next_img.src.indexOf("_on") < 0)
		{
			btn_next_img.src = btn_next_img.src.replace("_off.html", "_on.html");
		}

		if(click_num >= 0 && btn_prev_img.src.indexOf("_on") < 0){
			btn_prev_img.src =btn_prev_img.src.replace("_off.html", "_on.html");
		}else if (click_num == 0 && btn_prev_img.src.indexOf("_on") >= 0)
		{
			btn_prev_img.src =btn_prev_img.src.replace("_on.html", "_off.html");
		}

		if(btn_prev_img.src.indexOf("_on") >= 0) {
			btn_prev_a.setAttribute('href','#roll');
		}else{
			btn_prev_a.removeAttribute('href');
		}

		if(btn_next_img.src.indexOf("_on") >= 0) {
			btn_next_a.setAttribute('href','#roll');
		}else{
			btn_next_a.removeAttribute('href');
		}
		return false;
	};


	
	//photoList
	if(!document.getElementById("photoList")) return false;
	var photoList = document.getElementById("photoList").getElementsByTagName("a");
	var photoTotal = photoList.length;
	for (m=0; m < photoTotal ; m++){
		photoList[m].onclick = function(){
			var source = this.getAttribute ('href');
			var placeholder = document.getElementById('photoView');
			placeholder.setAttribute ('src',source );
			//?�정 0919 start
			//$("#photoList a").removeClass('on');
			//$(this).addClass('on');
			for (l=0; l < photoTotal ; l++){
				photoList[l].setAttribute ('class','' );
			}
			this.setAttribute ('class','on' );
			//?�정 0919 end
			return false;
		}
	}
};
/* fix position:fixed */
function fixedPosition() {
	if ($(window).scrollTop() > 95 && !document.getElementById('special_menu')) {
                 if (isPositionFixed==0) $(".wrap .floating_cubemenu").css("position","absolute");
                 else $(".wrap .floating_cubemenu").css("position","fixed");
       } else if($(window).scrollTop() > 565 && document.getElementById('special_menu')){
                 if (isPositionFixed==0) $(".wrap .floating_cubemenu").css("position","absolute");
                 else $(".wrap .floating_cubemenu").css("position","fixed");
       } else {
                 $(".wrap .floating_cubemenu").css("position","absolute");
       };
	
	var w = parseInt(($(window).width()-960)/2);
	
	if (w<=0) {
		$(".prevbtn").css("left",17);
		$(".nextbtn").css("right",17);
	} else if (w>100) {
		$(".prevbtn").css("left",-100);
		$(".nextbtn").css("right",-100);
	} else {
		$(".prevbtn").css("left",w*-1);
		$(".nextbtn").css("right",w*-1);
	}
};
function fixedPositionScroll() {
	var w = parseInt(($(window).width()-940)/2);
	if (w<0) w=0;
	if ($(window).scrollTop() >= 95) {
		if (isPositionFixed==0) $(".wrap .floating_cubemenu").css("top",$(window).scrollTop()-545);
		else $(".wrap .floating_cubemenu").css("top",0);
	} else {
		$(".wrap .floating_cubemenu").css("top",0);
	}
}
function readyCube() {
	//$(".cubelist").autoSlide('cube'); // option : 'cube' or Paging div's class name
	$(".mainbanner .banners").autoSlide('paging_touch');
}

$.fn.autoSlide = function(op) {
	var settings = {duration: 300,direction: "horizontal",minimumDrag: 20, easing: "motion" ,beforeStart: function(){},afterStart: function(){},beforeStop: function(){},afterStop: function(){}};
	var isCube=0;
	if (op=="cube") {isCube=1;}
	return this.each(function() {
		var originalList = $(this);
		var pages = originalList.children();
		var width = originalList.width();
		var height = originalList.height();

		var containerCss = {position: "relative", overflow: "hidden", width: width, height: height};
		var listCss = {position: "relative", padding: "0", margin: "0", listStyle: "none", width: pages.length * width};
		var listItemCss = {width: width, height: height};
		var container = $("<div>").attr("class",originalList.attr("class")).css(containerCss);
		var list = $("<div class='items'>").css(listCss);
		var currentPage = 1, start, stop;
		if (settings.direction.toLowerCase() === "horizontal") {
			list.css({float: "left"});
			$.each(pages, function(i) {
				var li = $("<div>").attr("class", "item")
					//.css($.extend(listItemCss, {float: "left"}))
					.html($(this).html());
				list.append(li);
			});
			list.draggable({
				axis: "x",
				start: function(event) {
					settings.beforeStart.apply(list, arguments);
					var data = event.originalEvent.touches ? event.originalEvent.touches[0] : event;
					start = {coords: [ data.pageX, data.pageY ]};
					settings.afterStart.apply(list, arguments);
				},
				stop: function(event) {
					settings.beforeStop.apply(list, arguments);
					var data = event.originalEvent.touches ? event.originalEvent.touches[0] : event;
					stop = {coords: [ data.pageX, data.pageY ]};

					if (op=="cube") {
						var h=0,v=0,hs=0,vs=0;
						h = start.coords[0] - stop.coords[0];
						if (h<0) hs=h*-1;
						else hs=h;
						v = start.coords[1] - stop.coords[1];
						if (v<0) vs=v*-1;
						else vs=v;
						if (hs>vs) {
							function moveLeft() {
								if (currentPage === pages.length || dragDelta() < settings.minimumDrag) {list.animate({ left: "+=" + dragDelta()}, settings.duration, settings.easing);return;}
								var new_width = -1 * width * currentPage;
								list.animate({ left: new_width}, settings.duration, settings.easing);
								currentPage++;
							}
							function moveRight() {
								if (currentPage === 1 || dragDelta() < settings.minimumDrag) {list.animate({ left: "-=" + dragDelta()}, settings.duration, settings.easing);return;}
								var new_width = -1 * width * (currentPage - 1);
								list.animate({ left: -1 * width * (currentPage - 2)}, settings.duration, settings.easing);
								currentPage--;
							}
							function dragDelta() {return Math.abs(start.coords[0] - stop.coords[0]);}
							function adjustment() {return width - dragDelta();}
							start.coords[0] > stop.coords[0] ? moveLeft() : moveRight();
							settings.afterStop.apply(list, arguments);
							if (currentPage > pages.length) currentPage=pages.length;
							view_cube(currentPage,originalList);
						} else {
							if (v>10) {
								$('html,body').animate({scrollTop:vs*3}, 1000, 'motion');
							} else if (v<-10) {
								$('html,body').animate({scrollTop:vs*3}, 1000, 'motion');
							}
						}
					} else {
						function moveLeft() {
							if (currentPage === pages.length || dragDelta() < settings.minimumDrag) {list.animate({ left: "+=" + dragDelta()}, settings.duration, settings.easing);return;}
							var new_width = -1 * width * currentPage;
							list.animate({ left: new_width}, settings.duration, settings.easing);
							currentPage++;
						}
						function moveRight() {
							if (currentPage === 1 || dragDelta() < settings.minimumDrag) {list.animate({ left: "-=" + dragDelta()}, settings.duration, settings.easing);return;}
							var new_width = -1 * width * (currentPage - 1);
							list.animate({ left: -1 * width * (currentPage - 2)}, settings.duration, settings.easing);
							currentPage--;
						}
						start.coords[0] > stop.coords[0] ? moveLeft() : moveRight();
						function dragDelta() {return Math.abs(start.coords[0] - stop.coords[0]);}
						function adjustment() {return width - dragDelta();}
						settings.afterStop.apply(list, arguments);
						if (currentPage > pages.length) currentPage=pages.length;
						view_cube(currentPage,originalList);
					}
				}
			});
		}
		container.append(list);
		originalList.replaceWith(container);
		$(window).load(function(e){
			scrollAnimation();
			if (isCube==1) {
				if (!firstCube) firstCube = 1;
				view_cube(firstCube, originalList);
			}
		});
		$(".carlist ul li.on a").click(function() {
			view_cube(1, originalList);return false;
		});
		function view_cube(num,obj) {
			cubeMotionJS(num);
			//if (currentPage!=num) {
				if (num>0 && num <= pages.length) {
					$(".items", "."+obj.attr("class")).animate({left:-1* width * (num-1) + "px"},900, 'motion',function() {
						change_button(num,obj);
					});
				}
				if (num==0 || currentPage==0) {
					$(".items", "."+obj.attr("class")).animate({left:0},900,'motion',function() {
						change_button(1,obj);
					});
				}
			//}
		}
		function change_button(num,obj) {
			if (num>0 && num<=pages.length) {
				//alert("c:"+num+"/"+pages.length);
				currentPage=num;
				if (isCube==1) {

					// change cubemenu's style
					for (var i=0; i<=$(".floating_cubemenu .cubemenu ul.cubeitem li a").length; i++) {
						if (i==num-2) {
							$(".floating_cubemenu .cubemenu ul.cubeitem li a").eq(i).addClass("on");
						} else {
							$(".floating_cubemenu .cubemenu ul.cubeitem li a").eq(i).removeClass("on");
						}
					}
					// change left & right button
					/*
					if (num==1) $("div.prevbtn a img").attr("src","/wcm/images/common/bg/blank.gif");
					else $("div.prevbtn a img").attr("src","/wcm/images/"+country+"/cube/left_"+cubeList[num-2]+".png");
					if (num==pages.length) $("div.nextbtn a img").attr("src","/wcm/images/common/bg/blank.gif");
					else $("div.nextbtn a img").attr("src","/wcm/images/"+country+"/cube/right_"+cubeList[num]+".png");
					*/
					if (num==1) $("div.prevbtn a img").attr("src","wcm/images/main/blank.html");
					else $("div.prevbtn a img").attr("src","wcm/images/main/btn_cube_left.html");
					if (num==pages.length) $("div.nextbtn a img").attr("src","wcm/images/main/blank.html");
					else $("div.nextbtn a img").attr("src","wcm/images/main/btn_cube_right.html");

					/*
					motionBtn();
					$("div.prevbtn").bind("mouseover",function() {$("div.prevbtn").stop();});
					$("div.nextbtn").bind("mouseover",function() {$("div.prevbtn").stop();});
					*/

					/*
					var TempTxtCarcube = "";
					if (pages.length > 1) {
						for (var i=1; i<=pages.length; i++) {
							if (i==num) TempTxtCarcube = TempTxtCarcube + '<img src="/wcm/images/common/bg/cube_carlist_on.gif" alt="">';
							else  TempTxtCarcube = TempTxtCarcube + '<img src="/wcm/images/common/bg/cube_carlist_off.gif" alt="">';
						}
						TempTxtCarcube = TempTxtCarcube + "<br />";
						$(".carcube").empty();
						$(".carcube").append(TempTxtCarcube);
					}
					*/

					// cube motion
					cubeStart(num);
				}
				//if (isCube==0) {
					var tmpTxt = "";
					pages.each(function(i) {
						var now=i-1+2;
						if (currentPage==now) {
							if (isCube==1) tmpTxt = tmpTxt + '<a href="#"><img src="./wcm/images/main/bg_pagingtouch_on2.png" alt="'+now+'" /></a>';
							else tmpTxt = tmpTxt + '<a href="#"><img src="./wcm/images/main/bg_pagingtouch_on.png" alt="'+now+'" /></a>';
						} else {
							tmpTxt = tmpTxt + '<a href="#"><img src="./wcm/images/main/bg_pagingtouch_off.png" alt="'+now+'" /></a>';
						}
					});
					tmpTxt = tmpTxt + '<br />';
					$("."+op).replaceWith('<div class="'+op+'">'+tmpTxt+'</div>');
					$("."+op).css("width",pages.length*26);
					if (isCube==0) {
						$("."+op).css("margin","0 auto");
					} else {
						$("."+op).css("paddingLeft",parseInt((960-pages.length*26)/2));
					}
					if (op=="paging_touch") {
						if (num==1) {
							$(".mainbanner a.prev").replaceWith('<span class="prev">prev</span>');
						} else {
							$(".mainbanner a.prev").replaceWith('<a class="prev" href="#">prev</a>');
							$(".mainbanner span.prev").replaceWith('<a class="prev" href="#">prev</a>');
							$(".mainbanner a.prev").bind("click",function(e) {
								view_cube(currentPage-1,originalList);return false;
							});
						}
						if (num==pages.length) {
							$(".mainbanner a.next").replaceWith('<span class="next">next</span>');
						} else {
							$(".mainbanner a.next").replaceWith('<a class="next" href="#">next</a>');
							$(".mainbanner span.next").replaceWith('<a class="next" href="#">next</a>');
							$(".mainbanner a.next").bind("click",function(e) {
								view_cube(currentPage-1+2,originalList);return false;
							});
						}
					}
					$("a", "."+op).click(function() {
						view_cube($("img", this).attr("alt"),originalList);return false;
					});
				//}
			}
		}
		function LeftBtn() {var nowcube = currentPage;if (!nowcube) nowcube=1;view_cube(nowcube-1,  originalList);return false;}
		function RightBtn() {var nowcube = currentPage;if (!nowcube) nowcube=1;view_cube(nowcube-1+2,  originalList);return false;}
		if (isCube==1) {
			$(".cubebox .prevbtn a").click(function() {LeftBtn();});
			$(".cubebox .nextbtn a").click(function() {RightBtn();});
			$(".floating_cubemenu .cubemenu ul.cubeitem li a").click(function(e) {
				var num = $("span", $(this)).html();
                                alert(num);
				num=num-1+1;
				$(".cubelist .items").animate({
					left:"-940" * num - "-940" + "px"
				},900,'motion');
				//change_button(num);
				view_cube(num, originalList);
				$(".floating_cubemenu .cubemenu .information").removeClass("on");
				initSubmenuHighlight();
			});
			$(".floating_cubemenu .cubemenu .information .home a").click(function() {
				view_cube(1,originalList);
				$(".floating_cubemenu .cubemenu .information").addClass("on");
				initSubmenuHighlight();
			});

			$(".cubebox .cubelist .item .info .vr360").click(function() {view_cube(3,originalList);return false;});
		}
	});
};
function initSubmenuHighlight() {
	/*
	for (var i=0; i< highlightItemName.length; i++) {
		$(".submenu a").eq(i).removeClass("on");
	}
	*/
	for (var i=0; i< $(".submenu a").length; i++) {
		$(".submenu a").eq(i).removeClass("on");
	}
}
function changeSubmenuHighlight() {
	if($(".menu_cencept").is("div")) {
		if (document.getElementById("pip") || document.getElementById("general")) {
			for (var i=0; i< $(".submenu a").length; i++) {
				if ($(".submenu a").eq(i).attr("href") != "#") {
					var tmp = $(".submenu a").eq(i).attr("href").split("#");
					var tmpz = $(".submenu a").eq(0).attr("href").split("#");
					if ($(window).scrollTop() >= $("#"+tmp[1]).offset().top - 95) {
						initSubmenuHighlight();
						if ($(window).scrollTop() >= 95) {
							$(".submenu a").eq(i).addClass("on");
						}
					}
				}
			}
		} 
	}
}
$.fn.panorama = function(options) {
	this.each(function(){
		var settings = {views_number: 180,views_columns: 20};
		var pano_element = this;
		var orig_src = $(this).attr("src");
		var loaded = 0;
		var pano_mouse_position_x;
		var pano_mouse_position_y;
		var pano_mouse_delta_x = 0;
		var pano_mouse_delta_y = 0;
		var pano_mouse_down = false;
		var pano_current_number;
		var pano_timer;
		var pano_loading_stop = false;
		var pano_width = parseInt($(pano_element).attr("width"));
		pano_mouse_position_x = parseInt(pano_width/2);
		var pano_height = parseInt($(pano_element).attr("height"));
		pano_mouse_position_y = parseInt(pano_height/2);
		$(pano_element).css("margin", "0 0 0 0").css("padding", "0 0 0 0").wrap('<div class="panorama" style="position: relative; margin: 0; padding: 0; height: '+pano_height+'px; width: '+pano_width+'px; overflow: hidden;"></div>');
		if(options) $.extend(settings, options);
		$(pano_element).after('<a class="pano_loading_stop" href="#" style="display: none; color: white; position: absolute; top: 5px; right: 5px; text-decoration: none;">[stop]</a>');
		if (settings.views_columns==settings.views_number) { // exterior
			$(pano_element).after('<p class="pano_loading_percent" style="position: absolute; display: none; top: '+parseInt(pano_height/2-45)+'px; left: '+parseInt(pano_width/2-45)+'px; text-align: center; width:90px; height:90px;"><img src="/wcm/images/'+country+'/loading.gif" alt="loading" /><span style="display:block;width:45px;margin:-29px auto 0 auto;font-size:12px;color:#333;background:url(/wcm/images/common/bg/bg_loading_txt.gif) repeat-x 0 0;">loading</span></p>');
		} else { // interior
			$(pano_element).after('<p class="pano_loading_percent" style="position: absolute; display: none; top: '+parseInt(pano_height/2-45)+'px; left: '+parseInt(pano_width/2-45)+'px; text-align: center; width:90px; height:90px;"><img src="/wcm/images/'+country+'/loading.gif" alt="loading" /><span style="display:block;width:45px;margin:-29px auto 0 auto;font-size:12px;color:#333;background:url(/wcm/images/common/bg/bg_loading_txt.gif) repeat-x 0 0;">loading</span></p>');
		}
		var src_prefix = orig_src.substr(0, orig_src.lastIndexOf('_')+1);
		var src_number = parseInt(orig_src.substr(orig_src.lastIndexOf('_')+1));
		pano_current_number = src_number;
		var src_sufix = orig_src.substr(orig_src.indexOf(src_number,0)+String(src_number).length);
		if (settings.views_columns==settings.views_number) { // exterior
			$(pano_element).after('<p class="pano_loading_start" style="position: absolute; top: '+parseInt(pano_height/2-45)+'px; left: '+parseInt(pano_width/2-45)+'px;text-align: center; width:90px; height:90px;"><a href="#"><img src="/wcm/images/'+country+'/btn/btn_start.png" alt="Start" /></a></p>');
		} else { // interior
			$(pano_element).after('<p class="pano_loading_start" style="position: absolute; top: '+parseInt(pano_height/2-45)+'px; left: '+parseInt(pano_width/2-45)+'px;text-align: center; width:90px; height:90px;"><a href="#"><img src="/wcm/images/'+country+'/btn/btn_start2.png" alt="Start" /></a></p>');
		}
		$(pano_element).after('<div class="pano_loading_masque" style="position: absolute; top: 0; left: 0; width: '+pano_width+'px; height: '+pano_height+'px; opacity: .5; filter:alpha(opacity=50);"></div>');
		$(pano_element).parent().find(".pano_loading_stop").bind('click', function(){
			pano_loading_stop = true;
			return false;
		});
		$(pano_element).parent().find(".pano_loading_start a").bind('click', function(){
			$(pano_element).parent().css("cursor", "wait");
			$(pano_element).parent().find(".pano_loading_start").hide();
			$(pano_element).parent().find(".pano_loading_percent").show();
			$(pano_element).parent().find(".pano_loading_animation").show();
			$(pano_element).parent().find(".pano_vues").remove();
			pano_timer = setTimeout(function(){
				clearTimeout(pano_timer);
				for (var i=0; i<settings.views_number; i++) {
					if (i!=src_number){
						$(pano_element).after('<img class="pano_vues vue'+i+'" src="'+src_prefix+i+src_sufix+'" style="visibility: hidden;" />');
						$(pano_element).parent().find("img.vue"+i).bind('load', function(){
							//if ($(pano_element).parent().find(".pano_loading_stop").css("display")=="none") $(pano_element).parent().find(".pano_loading_stop").show();
							loaded++;
							if (pano_loading_stop) {
								pano_loading_stop=false;
								//$(pano_element).parent().find(".pano_loading_stop").hide();
								$(pano_element).parent().css("cursor", "default");
								$(pano_element).parent().find(".pano_loading_percent").hide();
								$(pano_element).parent().find(".pano_loading_start").show();
								$(pano_element).parent().find(".pano_loading_percent span").html('loading');
								pano_timer = setTimeout(function(){
									 clearTimeout(pano_timer); window.stop();
								});

							}
							//if (loaded >= (settings.views_number-1)) {
							if (parseInt((loaded/settings.views_number)*100) > 90) {
								$(pano_element).parent().css("cursor", "pointer");
								//$(pano_element).parent().find(".pano_loading_stop").hide();
								$(pano_element).parent().find(".pano_loading_percent").hide();
								$(pano_element).parent().find(".pano_loading_animation").hide();
								$(pano_element).parent().find(".pano_loading_masque").hide();
								$(pano_element).bind('mousedown', function(e){
									pano_mouse_down = true;
									pano_mouse_position_x = e.clientX;
									pano_mouse_position_y = e.clientY;
									$(pano_element).parent().css("cursor", "move");
									return false;
								});
								$(pano_element).bind('mouseup', function(){
									pano_mouse_down = false;
									$("div.panorama").css("cursor", "pointer");
									return false;
								});
								$(pano_element).bind('mousemove', function(e){
										if (pano_mouse_down) {
										pano_mouse_delta_x = parseInt((pano_mouse_position_x - e.clientX)/20);
										pano_mouse_delta_y = parseInt((pano_mouse_position_y - e.clientY)/20);
										if (pano_mouse_delta_x!=0||pano_mouse_delta_y!=0) {
											var pageCoords = "( " + e.pageX + ", " + e.pageY + " )";
												var clientCoords = "( " + e.clientX + ", " + e.clientY + " )";
												//src_number1=parseInt((settings.views_columns/pano_width)*pano_mouse_delta_x);
												//src_number=pano_current_number+src_number1+settings.views_number-settings.views_columns*parseInt(-5+((settings.views_number/settings.views_columns)/pano_height)*pano_mouse_delta_y);
											pano_current_number=pano_current_number+pano_mouse_delta_x+settings.views_columns*pano_mouse_delta_y;
											if (pano_current_number<0)
												//pano_current_number = 0;
												pano_current_number = settings.views_columns-1;
											if (pano_current_number>(settings.views_number-1))
												pano_current_number = settings.views_number-settings.views_columns;
											$(pano_element).attr('src', src_prefix+pano_current_number+src_sufix);
											pano_mouse_position_x= e.clientX;
											pano_mouse_position_y= e.clientY;
										}

									}
									return false;
								});
							}
							else {
								$(pano_element).parent().find(".pano_loading_percent span").html(parseInt((loaded/settings.views_number)*100) + " %");
							}
						});
					}
				}
			}, 500);
			return false;
		});
	});
};
$.fn.txtloopit = function(op) {
	this.each(function(){
		//var my_chars=["h", "y", "u", "n", "d", "a", "i","e", "w","t","h", "k","g","p", "o","s","b","l"];
		var my_chars=[" "," "];
		var my_array=[];
		var my_position=0;
		var temp_str=""
		var end_str="";
		var charNumber=0;
		var p;
		var t;
		if (op) {loopit($(this),op);}
		function loopit(thediv, my_str) {
			var my_array = my_str.split("");
			if(my_position < my_array.length+1){
				for (var i = 0; i<(my_array.length - end_str.length); i++) {
					charNumber = Math.floor(Math.random()*my_chars.length);
					temp_str += my_chars[charNumber];
				}
				thediv.empty();
				thediv.append(end_str+temp_str);
				temp_str = "";
				end_str += my_array[my_position];
				my_position++;
				p=setTimeout(function(){loopit(thediv,my_str)}, 20);
			}else{
				my_position = 0;
				temp_str = "";
				end_str = "";
				clearTimeout(p);
			}
			thediv.css("visibility","visible");
		}
	});
};
function showTranslucency() { // show translucency layer
	var obj = document.getElementById("translucency");
	setOpacity(obj, 50);
	obj.style.display="block";
	var h=$(document).height() + 30;
	$("#translucency").css("height",h);
}
function hideTranslucency() { // hide translucency layer
	var obj = document.getElementById("translucency");
	obj.style.display="none";
}
function setOpacity(id, op) { // set opacity
	var obj = id.style;
	obj.opacity = (op/100);
	obj.filter = "alpha(opacity="+op+")";
	obj.MozOpacity=(op/100);
	obj.KhtmlOpacity=(op/100);
}

$(function(){
	if (!document.getElementById("search_select")) return false;
	$('.find_accessories .search').jqTransform({imgPath:'/wcm/images/common/jqtransform/'});
	$('.usedcar_top').jqTransform({imgPath:'/wcm/images/common/jqtransform/'});
	$('.inquiry_table .select_title').jqTransform({imgPath:'/wcm/images/common/jqtransform/'});
	$('.form_table .select_title').jqTransform({imgPath:'/wcm/images/common/jqtransform/'});
	$('.inquiry_table .select_topic').jqTransform({imgPath:'/wcm/images/common/jqtransform/'});
	$('#form .select_design').jqTransform({imgPath:'/wcm/images/common/jqtransform/'});
	$('.contents_accessories #search_select').jqTransform({imgPath:'/wcm/images/common/jqtransform/'});
	$('.slide_content_last .select_trim #selectbox').jqTransform({imgPath:'/wcm/images/common/jqtransform/'});
	$('.most_like .sort').jqTransform({imgPath:'/wcm/images/common/jqtransform/'});
	$('#layer_popup .select_topic').jqTransform({imgPath:'/wcm/images/common/jqtransform/'});
	$('.con_popup .select_topic').jqTransform({imgPath:'/wcm/images/common/jqtransform/'});
	$('.car_builder .options_lists').jqTransform({imgPath:'/wcm/images/common/jqtransform/'});
	$('.choose_trim').jqTransform({imgPath:'/wcm/images/common/jqtransform/'});
	$('.list_package').jqTransform({imgPath:'/wcm/images/common/jqtransform/'});
	$('.carfinder .category').jqTransform({imgPath:'/wcm/images/common/jqtransform/'});
	$('.accessories_options .search').jqTransform({imgPath:'/wcm/images/common/jqtransform/'});
	$('.campaign_sns').jqTransform({imgPath:'/wcm/images/common/jqtransform/'});
	
});

/* Start the Plugin */
(function($){
	var defaultOptions = {preloadImg:true};
	var jqTransformImgPreloaded = false;
	var jqTransformPreloadHoverFocusImg = function(strImgUrl) {
		//guillemets to remove for ie
		strImgUrl = strImgUrl.replace(/^url\((.*)\)/,'$1').replace(/^\"(.*)\"$/,'$1');
		var imgHover = new Image();
		imgHover.src = strImgUrl.replace(/\.([a-zA-Z]*)$/,'-hover.$1');
		var imgFocus = new Image();
		imgFocus.src = strImgUrl.replace(/\.([a-zA-Z]*)$/,'-focus.$1');
	};
	/***************************
	  Labels
	***************************/
	var jqTransformGetLabel = function(objfield){
		var selfForm = $(objfield.get(0).form);
		var oLabel = objfield.next();
		if(!oLabel.is('label')) {
			oLabel = objfield.prev();
			if(oLabel.is('label')){
				var inputname = objfield.attr('id');
				if(inputname){
					oLabel = selfForm.find('label[for="'+inputname+'"]');
				}
			}
		}
		if(oLabel.is('label')){return oLabel.css('cursor','pointer');}
		return false;
	};
	/* Hide all open selects */
	var jqTransformHideSelect = function(oTarget){
		var ulVisible = $('.jqTransformSelectWrapper ul:visible');
		ulVisible.each(function(){
			var oSelect = $(this).parents(".jqTransformSelectWrapper:first").find("select").get(0);
			//do not hide if click on the label object associated to the select
			if( !(oTarget && oSelect.oLabel && oSelect.oLabel.get(0) == oTarget.get(0)) ){$(this).hide();}
		});
	};
	/* Check for an external click */
	var jqTransformCheckExternalClick = function(event) {
		if ($(event.target).parents('.jqTransformSelectWrapper').length === 0) { jqTransformHideSelect($(event.target)); }
	};
	/* Apply document listener */
	var jqTransformAddDocumentListener = function (){
		$(document).mousedown(jqTransformCheckExternalClick);
	};
	/* Add a new handler for the reset action */
	var jqTransformReset = function(f){
		var sel;
		$('.jqTransformSelectWrapper select', f).each(function(){sel = (this.selectedIndex<0) ? 0 : this.selectedIndex; $('ul', $(this).parent()).each(function(){$('a:eq('+ sel +')', this).click();});});
		$('a.jqTransformCheckbox, a.jqTransformRadio', f).removeClass('jqTransformChecked');
		$('input:checkbox, input:radio', f).each(function(){if(this.checked){$('a', $(this).parent()).addClass('jqTransformChecked');}});
	};
	/***************************
	  Check Boxes
	 ***************************/
	$.fn.jqTransCheckBox = function(){
		return this.each(function(){
			if($(this).hasClass('jqTransformHidden')) {return;}

			var $input = $(this);
			var inputSelf = this;

			//set the click on the label
			var oLabel=jqTransformGetLabel($input);
			oLabel && oLabel.click(function(){aLink.trigger('click');});

			var aLink = $('<a href="#" class="jqTransformCheckbox"></a>');
			//wrap and add the link
			$input.addClass('jqTransformHidden').wrap('<span class="jqTransformCheckboxWrapper"></span>').parent().prepend(aLink);
			//on change, change the class of the link
			$input.change(function(){
				this.checked && aLink.addClass('jqTransformChecked') || aLink.removeClass('jqTransformChecked');
				return true;
			});
			// Click Handler, trigger the click and change event on the input
			aLink.click(function(){
				//do nothing if the original input is disabled
				if($input.attr('disabled')){return false;}
				//trigger the envents on the input object
				$input.trigger('click').trigger("change");
				return false;
			});

			// set the default state
			this.checked && aLink.addClass('jqTransformChecked');
		});
	};
	/***************************
	  Radio Buttons
	 ***************************/
	$.fn.jqTransRadio = function(){
		return this.each(function(){
			if($(this).hasClass('jqTransformHidden')) {return;}

			var $input = $(this);
			var inputSelf = this;

			oLabel = jqTransformGetLabel($input);
			oLabel && oLabel.click(function(){aLink.trigger('click');});

			var aLink = $('<a href="#" class="jqTransformRadio" rel="'+ this.name +'"></a>');
			$input.addClass('jqTransformHidden').wrap('<span class="jqTransformRadioWrapper"></span>').parent().prepend(aLink);

			$input.change(function(){
				inputSelf.checked && aLink.addClass('jqTransformChecked') || aLink.removeClass('jqTransformChecked');
				return true;
			});
			// Click Handler
			aLink.click(function(){
				if($input.attr('disabled')){return false;}
				$input.trigger('click').trigger('change');

				// uncheck all others of same name input radio elements
				$('input[name="'+$input.attr('name')+'"]',inputSelf.form).not($input).each(function(){
					$(this).attr('type')=='radio' && $(this).trigger('change');
				});

				return false;
			});
			// set the default state
			inputSelf.checked && aLink.addClass('jqTransformChecked');
		});
	};

	/***************************
	  Select
	 ***************************/
	$.fn.jqTransSelect = function(){
		return this.each(function(index){
			var $select = $(this);
			if($select.hasClass('jqTransformHidden')) {return;}
			if($select.attr('multiple')) {return;}
			var oLabel  =  jqTransformGetLabel($select);
			/* First thing we do is Wrap it */
			var $wrapper = $select
				.addClass('jqTransformHidden')
				.wrap('<div class="jqTransformSelectWrapper"></div>')
				.parent()
			/* Now add the html for the select */
			$wrapper.prepend('<div><span></span><a href="#" class="jqTransformSelectOpen"></a></div><ul></ul>');
			var $ul = $('ul', $wrapper).hide();
			/* Now we add the options */
			$('option', this).each(function(i){
				var oLi = $('<li><a href="#" index="'+ i +'">'+ $(this).html() +'</a></li>');
				$ul.append(oLi);
			});
			var obj = $(".jqTransformSelectWrapper");
			var objNum = obj.length;
			for(var i=0 ; i<objNum ;i++) {
				$(".jqTransformSelectWrapper").eq(i).css({zIndex: 10-i});
			}

			/* Add click handler to the a */
			$ul.find('a').click(function(){
					$('a.selected', $wrapper).removeClass('selected');
					$(this).addClass('selected');
					/* Fire the onchange event */
					if ($select[0].selectedIndex != $(this).attr('index') && $select[0].onchange) { $select[0].selectedIndex = $(this).attr('index'); $select[0].onchange(); }
					$select[0].selectedIndex = $(this).attr('index');
					$('span:eq(0)', $wrapper).html($(this).html());
					$ul.hide();
					return false;
			});
			/* Set the default */
			$('a:eq('+ this.selectedIndex +')', $ul).click();
			$('span:first', $wrapper).click(function(){$("a.jqTransformSelectOpen",$wrapper).trigger('click');});
			oLabel && oLabel.click(function(){$("a.jqTransformSelectOpen",$wrapper).trigger('click');});
			this.oLabel = oLabel;
			/* Apply the click handler to the Open */
			var oLinkOpen = $('a.jqTransformSelectOpen', $wrapper)
				.click(function(){
					//Check if box is already open to still allow toggle, but close all other selects
					if( $ul.css('display') == 'none' ) {jqTransformHideSelect();}
					if($select.attr('disabled')){return false;}
					$ul.slideToggle('fast', function(){
						/*
						var offSet = ($('a.selected', $ul).offset().top - $ul.offset().top);
						$ul.animate({scrollTop: offSet});
						*/
					});
					return false;
				});
			// Set the new width
			var iSelectWidth = $select.outerWidth();
			var oSpan = $('span:first',$wrapper);
			var newWidth = (iSelectWidth > oSpan.innerWidth())?iSelectWidth+oLinkOpen.outerWidth():$wrapper.width();
			$wrapper.css('width',newWidth);
			$ul.css('width',newWidth-2);
			oSpan.css({width:iSelectWidth});
			// Calculate the height if necessary, less elements that the default height
			//show the ul to calculate the block, if ul is not displayed li height value is 0
			$ul.css({display:'block',visibility:'hidden'});
			var iSelectHeight = ($('li',$ul).length)*($('li:first',$ul).height());//+1 else bug ff
			(iSelectHeight < $ul.height()) && $ul.css({height:iSelectHeight,'overflow':'hidden'});//hidden else bug with ff
			$ul.css({display:'none',visibility:'visible'});
			
		});
	};
	$.fn.jqTransform = function(options){
		var opt = $.extend({},defaultOptions,options);
		/* each form */
		 return this.each(function(){
			var selfForm = $(this);
			if(selfForm.hasClass('jqtransformdone')) {return;}
			selfForm.addClass('jqtransformdone');
			$('input:checkbox', this).jqTransCheckBox();
			$('input:radio', this).jqTransRadio();

			if( $('select', this).jqTransSelect().length > 0 ){jqTransformAddDocumentListener();}
			selfForm.bind('reset',function(){var action = function(){jqTransformReset(this);}; window.setTimeout(action, 10);});
		}); /* End Form each */
	};
})(jQuery);;/* End the Plugin */

// 0915 ????S  
$(window).scroll(function(e){
  var allHeight = $(document).height();
  var scrollHeight = $(window).scrollTop();
  
  if (allHeight-scrollHeight < 800) {    //645???? 700???? ????
    $("#side_floating").hide();
  } else if(allHeight-scrollHeight < 830) {
    $("#side_floating2").hide();
  }else {
    $("#side_floating2").show();
    $("#side_floating").show();
  }
});
// 0915 ????E 

/* main visual */
	var country = "es";
	var cubeList = new Array();
	var firstCube = 1;
	cubeList = ["home","gallery", "experience", "mostlike", "talkntalk"];
	function cubeMotionInit() {
		// ???????고유 모션???????줍니?? ?????로딩??최초 1??????????
		// ex) azera????????????모양????�????출력??�??		
                var tmpString = "";
		var tmpLeft = parseInt(($(window).width()-960)/2);
		tmpString = tmpString + '<div class="objects">';
		tmpString = tmpString + '	<img src="/es/img_tmp/object_1.png" id="object1" alt="" style="position:absolute;left:'+(tmpLeft+823)+'px;top:-80px;" /><br />';
		tmpString = tmpString + '	<img src="/es/img_tmp/object_2.png" id="object2" alt="" style="position:absolute;left:'+(tmpLeft+512)+'px;top:-80px;" /><br />';
		tmpString = tmpString + '	<img src="/es/img_tmp/object_3.png" id="object3" alt="" style="position:absolute;left:'+(tmpLeft+633)+'px;top:57px;" /><br />';
		tmpString = tmpString + '	<img src="/es/img_tmp/object_4.png" id="object4" alt="" style="position:absolute;left:'+(tmpLeft+1143)+'px;top:0;" /><br />';
		tmpString = tmpString + '	<img src="/es/img_tmp/object_5.png" id="object5" alt="" style="position:absolute;left:'+(tmpLeft-290)+'px;top:55px;" /><br />';
		tmpString = tmpString + '	<img src="/es/img_tmp/object_6.png" id="object6" alt="" style="position:absolute;left:'+(tmpLeft-256)+'px;top:208px;" /><br />';
		tmpString = tmpString + '	<img src="/es/img_tmp/object_7.png" id="object7" alt="" style="position:absolute;left:'+(tmpLeft+1171)+'px;top:175px;" /><br />';
		tmpString = tmpString + '</div>';
		$(".objects_box").append(tmpString);
	}
	function cubeMotionJS(va) {
		// ???????고유 모션???????줍니?? ??�?????????�????�??�? ??�???????? 1~5 ????????
		// 모션??처리??�????? cubeStart?????처리?????
		if (va==1)		{object_left = {1:823, 2:512, 3:633, 4:1143, 5:-290, 6:-256, 7:1171};object_top = {1:-80, 2:-80, 3:57, 4:0, 5:55, 6:208, 7:175};}
		else if(va==2)	{object_left = {1:-283, 2:231, 3:-351, 4:636, 5:1004, 6:959, 7:188};object_top = {1:-80, 2:-100, 3:80, 4:34, 5:-5, 6:-16, 7:185};}
		else if(va==3)	{object_left = {1:757, 2:448, 3:703, 4:570, 5:448, 6:878, 7:-133};object_top = {1:-160, 2:-157, 3:-45, 4:-45, 5:142, 6:68, 7:247};}
		else if(va==4)	{object_left = {1:-1000, 2:-280, 3:382, 4:768, 5:901, 6:927, 7:714};object_top = {1:0, 2:100, 3:32, 4:-5, 5:0, 6:152, 7:-13};}
		else			{object_left = {1:-200, 2:131, 3:351, 4:636, 5:1304, 6:959, 7:138};object_top = {1:-210, 2:-100, 3:180, 4:34, 5:-55, 6:16, 7:185};}
		for (var i=0; i<=6; i++) {
			tmpleft = object_left[i+1] + parseInt(($(window).width()-960)/2);
			$(".objects_box .objects img").eq(i).css("position","absolute").css("zIndex",10-i);
			$(".objects_box .objects img").eq(i).animate({left:tmpleft,top:object_top[i+1]},900, 'motion');
		}
	}
	function cubeStart(va) {
		// ?????�??????컨텐츠는 ?????????ajax ???????????�??뿌려주도????�????
		// ???�그?�거??버튼????�??????�??좌우 ???�롤????�? ?????????�??????1~5)???????받아 ???????????????
		// ???????�?????? 1:1 ??????�?? ???????
		// ??�??�?? 5개까??출력??�? ????????????/pip???? general??????????3개만 출력????경우?????????
		//alert("Cube"+va+" is Ready.");

		if (va==1) { // main
			// 메인 ??�??????????????처리??????
			$(".cubebox .cubelist .items a img.movie").click(function() {
				// 1)	?????URL (youtube????iframe?????찾아 iframe??src??????
				// 2)	???????�?(?????
				// 3)	???????�?(??????
				// 4)	???????????????				// 5)	movie (????)
				// 6)	???�로??링크
				// 7)	?????링크 (추후 ?????? 구현?????? ????????
				// 8)	?????�?링크 (추후 ?????? 구현?????? ????????
				// 9)   Stumble Upon 버튼URL (추후 ?????? 구현?????? ????????
				// 10)	Like 버튼 URL
				// 11)	main (????)
				showGalleryLargeLayer("http://www.youtube.com/embed/vtb2XLpAMBw?rel=0","azera","../es/img_tmp/txt_azera_layer.html","High Glass Sun Roof","movie","downloadurl","twitter link","facebook link","stumbleupon link","http://test.com/","main");
			});
		} else if (va==2) { // gallery
			// cubeStart() ???????�???�마??DB????????받아??????뿌려주도????�????
			// all,exterior,interior,movies ???????????????받아??뿌려 주세??

			// cubeGalleryLayout()??????????출력?????????�? category??바꿔 주시???????????????  all / interior / exterior / movies ????
			cubeGalleryLayout($(".cubebox .item .gallerybox"),"all");

			for (var i=1; i<=20; i++) { // 목록 20??출력
				// cubeGalleryList()??리스???? 출력??�?주는 ?????�? ?????�?? ???? ?????같습???? 반복????�?? 20??출력???????�??주세??
				// 1)	카테고리 (all / interior / exterior / movies ????)
				// 2)	목록????????????? ??????				// 3)	???? ???????????URL ???? ?????URL (youtube????iframe?????찾아 iframe??src??????
				// 4)	???????�?(?????
				// 5)	???????�?(??????
				// 6)	????????????�?
				// 7)	image or movie ?? (???????경우????코드????�??출력?? ??1)????????? ???? �?? all??경우 ??�?????
				// 8)	???�로??링크
				// 9)	?????링크 (추후 ?????? 구현?????? ????????
				// 10)	?????�?링크 (추후 ?????? 구현?????? ????????
				// 11)	Stumble Upon링크 (추후 ?????? 구현?????? ????????
				// 12)	Like 버튼 URL /* 2011-07-11 */
				if (i<10) t="0"+i; else t=i;
				// ??�??경우
				cubeGalleryList("interior","/es/img_tmp/cube_gallery_small_"+t+".jpg","../es/img_tmp/gallery_popup.html","azera","../es/img_tmp/txt_azera_layer.html","High Glass Sun Roof","image","downloadurl","twitter link","facebook link","stumbleupon link",'http://test.com/');

				// ???????경우
				//cubeGalleryList("interior","/es/img_tmp/cube_gallery_small_"+t+".jpg","http://www.youtube.com/embed/vtb2XLpAMBw?rel=0","azera","/es/img_tmp/txt_azera_layer.png","High Glass Sun Roof","movie","downloadurl","twitter link","facebook link","stumbleupon link",'http://test.com');
			}

			//cubeGalleryPaging()??목록 출력 ????�??막에 ???????????출력????????????
			//?????바꿔 주시??????? ?????각각 ???????�??????번호 ?????.
			cubeGalleryPaging(1,4); // ?????출력

			// prev/next 버튼 링크 거는 방법
			//$(".gallerylist ul li.paging a.prev").click(function() {?????�??)
			//$(".gallerylist ul li.paging a.next").click(function() {?????�??)

			galleryOver();galleryPopup();

		} else if (va==3) { // experience

			// Experience ?????? 출력???????????? ?????�?????? ?????같습????
			// 1) exterior or interior
			// 2) 처음 보여????????URL
			// 3) ???? ????????????처음 보여????????URL
			// 4) 기존??????????????? color??바꾸??경우????color ??�??????주시?? exterior ???? interior 메뉴???????????반드??빈칸("")???????주세?? ??????? 기존 ??????? ?????color??�??????�???�??????;;
			cubeExperience("exterior","wcm/images/exterior/HG_small/HG_S_0.html","wcm/images/exterior/HG_small/HG_S_0.html","");
			//cubeExperience("interior","./wcm/images/interior/cmin/cmin_0.PNG","./wcm/images/interior/cmin/cmin_0.jpg","color");

			for (var i=1; i<= 12; i++) {
				// cubeExperienceColorList() ?????컬러??출력???????????? 1~18번까???????�??반복 ?????�?줍니??
				// 1) 번호 - 1???? �?? 18�?? ??????? ?????주세??
				// 2) on or off - ???????????????컬러??경우 on 그렇?????? 경우 off ????????�??�????
				// 3) 컬러 ??????				
                                if (i==1) cubeExperienceColorList(i,'on',"/es/img_tmp/color_"+i+".png");
				else cubeExperienceColorList(i,'off',"/es/img_tmp/color_"+i+".png");
			}

		} else if (va==4) { // mostlike

			// 최초 로딩??뿐만 ????? ??1/2/3??링크 ??�?????????????????????????

			// cubeMostLikeCate()??카테고리??출력????????????
			// 1) ?????번호, 1~3 ??????
			// 2) 첫번????�????????			// 3) ??�????�????????			// 4) ??�????�????????			// 5) 첫번????�?
			// 6) ??�????�?
			// 7) ??�????�?
			cubeMostLikeCate(1,'../es/img_tmp/profile30.html','../es/img_tmp/profile30.html','../es/img_tmp/profile30.html','Jeff','Antonio','Jane');

			// cubeMostLike 버튼????�???????�????????????
			// 1) ???????�?
			// 2) Trim (??�??.)
			// 3) ??????????�????????(???????????경로)
			// 4) ????????�리????????(???????????경로)
			// 5) ???????????			// 6) See More 링크
			// 7) Car Builder 링크
			// 8) Link버튼 코드
			cubeMostLike('AZERA','1.6 CRDi GLS FDU','../es/img_tmp/color_1.html','../es/img_tmp/color_interior_1.html','../es/img_tmp/car_mostlike.html','#','#','<a href="#"><img src="/es/img_tmp/like.gif" alt="" /></a>');


		} else if (va==5) { // talk n talk
			// 초기???????????
			cubeTalknTalkInit();

			// 각각????????? 뿌려 줍니??
			// 1) 번호 1~6
			// 2) facebook or twitter
			// 3) ??�????????			// 4) ??�?
			// 5) ????
			cubeTalknTalk(1,'facebook','../es/img_tmp/profile25.html','Dabby whistler','I can\'t belive my eyes. AZERA is so nice');
			cubeTalknTalk(2,'twitter','../es/img_tmp/profile25.html','Dabby whistler','I can\'t belive my eyes. AZERA is so nice');
			cubeTalknTalk(3,'facebook','../es/img_tmp/profile25.html','Dabby whistler','AZERA has a good performance to drive. It\'s really interesting for me');
			cubeTalknTalk(4,'twitter','../es/img_tmp/profile25.html','Dabby whistler','I can\'t belive my eyes. AZERA is so nice');
			cubeTalknTalk(5,'facebook','../es/img_tmp/profile25.html','Dabby whistler','AZERA has a good performance to drive. It\'s really interesting for me');
			cubeTalknTalk(6,'facebook','../es/img_tmp/profile25.html','Dabby whistler','I can\'t belive my eyes. AZERA is so nice');

		}
	}

/* jQuery cycle.lite.min */
(function($){var ver="2.88";if($.support==undefined){$.support={opacity:!($.browser.msie)};}function debug(s){if($.fn.cycle.debug){log(s);}}function log(){if(window.console&&window.console.log){window.console.log("[cycle] "+Array.prototype.join.call(arguments," "));}}$.fn.cycle=function(options,arg2){var o={s:this.selector,c:this.context};if(this.length===0&&options!="stop"){if(!$.isReady&&o.s){log("DOM not ready, queuing slideshow");$(function(){$(o.s,o.c).cycle(options,arg2);});return this;}log("terminating; zero elements found by selector"+($.isReady?"":" (DOM not ready)"));return this;}return this.each(function(){var opts=handleArguments(this,options,arg2);if(opts===false){return;}opts.updateActivePagerLink=opts.updateActivePagerLink||$.fn.cycle.updateActivePagerLink;if(this.cycleTimeout){clearTimeout(this.cycleTimeout);}this.cycleTimeout=this.cyclePause=0;var $cont=$(this);var $slides=opts.slideExpr?$(opts.slideExpr,this):$cont.children();var els=$slides.get();if(els.length<2){log("terminating; too few slides: "+els.length);return;}var opts2=buildOptions($cont,$slides,els,opts,o);if(opts2===false){return;}var startTime=opts2.continuous?10:getTimeout(els[opts2.currSlide],els[opts2.nextSlide],opts2,!opts2.rev);if(startTime){startTime+=(opts2.delay||0);if(startTime<10){startTime=10;}debug("first timeout: "+startTime);this.cycleTimeout=setTimeout(function(){go(els,opts2,0,(!opts2.rev&&!opts.backwards));},startTime);}});};function handleArguments(cont,options,arg2){if(cont.cycleStop==undefined){cont.cycleStop=0;}if(options===undefined||options===null){options={};}if(options.constructor==String){switch(options){case"destroy":case"stop":var opts=$(cont).data("cycle.opts");if(!opts){return false;}cont.cycleStop++;if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);}cont.cycleTimeout=0;$(cont).removeData("cycle.opts");if(options=="destroy"){destroy(opts);}return false;case"toggle":cont.cyclePause=(cont.cyclePause===1)?0:1;checkInstantResume(cont.cyclePause,arg2,cont);return false;case"pause":cont.cyclePause=1;return false;case"resume":cont.cyclePause=0;checkInstantResume(false,arg2,cont);return false;case"prev":case"next":var opts=$(cont).data("cycle.opts");if(!opts){log('options not found, "prev/next" ignored');return false;}$.fn.cycle[options](opts);return false;default:options={fx:options};}return options;}else{if(options.constructor==Number){var num=options;options=$(cont).data("cycle.opts");if(!options){log("options not found, can not advance slide");return false;}if(num<0||num>=options.elements.length){log("invalid slide index: "+num);return false;}options.nextSlide=num;if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);cont.cycleTimeout=0;}if(typeof arg2=="string"){options.oneTimeFx=arg2;}go(options.elements,options,1,num>=options.currSlide);return false;}}return options;function checkInstantResume(isPaused,arg2,cont){if(!isPaused&&arg2===true){var options=$(cont).data("cycle.opts");if(!options){log("options not found, can not resume");return false;}if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);cont.cycleTimeout=0;}go(options.elements,options,1,(!opts.rev&&!opts.backwards));}}}function removeFilter(el,opts){if(!$.support.opacity&&opts.cleartype&&el.style.filter){try{el.style.removeAttribute("filter");}catch(smother){}}}function destroy(opts){if(opts.next){$(opts.next).unbind(opts.prevNextEvent);}if(opts.prev){$(opts.prev).unbind(opts.prevNextEvent);}if(opts.pager||opts.pagerAnchorBuilder){$.each(opts.pagerAnchors||[],function(){this.unbind().remove();});}opts.pagerAnchors=null;if(opts.destroy){opts.destroy(opts);}}function buildOptions($cont,$slides,els,options,o){var opts=$.extend({},$.fn.cycle.defaults,options||{},$.metadata?$cont.metadata():$.meta?$cont.data():{});if(opts.autostop){opts.countdown=opts.autostopCount||els.length;}var cont=$cont[0];$cont.data("cycle.opts",opts);opts.$cont=$cont;opts.stopCount=cont.cycleStop;opts.elements=els;opts.before=opts.before?[opts.before]:[];opts.after=opts.after?[opts.after]:[];opts.after.unshift(function(){opts.busy=0;});if(!$.support.opacity&&opts.cleartype){opts.after.push(function(){removeFilter(this,opts);});}if(opts.continuous){opts.after.push(function(){go(els,opts,0,(!opts.rev&&!opts.backwards));});}saveOriginalOpts(opts);if(!$.support.opacity&&opts.cleartype&&!opts.cleartypeNoBg){clearTypeFix($slides);}if($cont.css("position")=="static"){$cont.css("position","relative");}if(opts.width){$cont.width(opts.width);}if(opts.height&&opts.height!="auto"){$cont.height(opts.height);}if(opts.startingSlide){opts.startingSlide=parseInt(opts.startingSlide);}else{if(opts.backwards){opts.startingSlide=els.length-1;}}if(opts.random){opts.randomMap=[];for(var i=0;i<els.length;i++){opts.randomMap.push(i);}opts.randomMap.sort(function(a,b){return Math.random()-0.5;});opts.randomIndex=1;opts.startingSlide=opts.randomMap[1];}else{if(opts.startingSlide>=els.length){opts.startingSlide=0;}}opts.currSlide=opts.startingSlide||0;var first=opts.startingSlide;$slides.css({position:"absolute",top:0,left:0}).hide().each(function(i){var z;if(opts.backwards){z=first?i<=first?els.length+(i-first):first-i:els.length-i;}else{z=first?i>=first?els.length-(i-first):first-i:els.length-i;}$(this).css("z-index",z);});$(els[first]).css("opacity",1).show();removeFilter(els[first],opts);if(opts.fit&&opts.width){$slides.width(opts.width);}if(opts.fit&&opts.height&&opts.height!="auto"){$slides.height(opts.height);}var reshape=opts.containerResize&&!$cont.innerHeight();if(reshape){var maxw=0,maxh=0;for(var j=0;j<els.length;j++){var $e=$(els[j]),e=$e[0],w=$e.outerWidth(),h=$e.outerHeight();if(!w){w=e.offsetWidth||e.width||$e.attr("width");}if(!h){h=e.offsetHeight||e.height||$e.attr("height");}maxw=w>maxw?w:maxw;maxh=h>maxh?h:maxh;}if(maxw>0&&maxh>0){$cont.css({width:maxw+"px",height:maxh+"px"});}}if(opts.pause){$cont.hover(function(){this.cyclePause++;},function(){this.cyclePause--;});}if(supportMultiTransitions(opts)===false){return false;}var requeue=false;options.requeueAttempts=options.requeueAttempts||0;$slides.each(function(){var $el=$(this);this.cycleH=(opts.fit&&opts.height)?opts.height:($el.height()||this.offsetHeight||this.height||$el.attr("height")||0);this.cycleW=(opts.fit&&opts.width)?opts.width:($el.width()||this.offsetWidth||this.width||$el.attr("width")||0);if($el.is("img")){var loadingIE=($.browser.msie&&this.cycleW==28&&this.cycleH==30&&!this.complete);var loadingFF=($.browser.mozilla&&this.cycleW==34&&this.cycleH==19&&!this.complete);var loadingOp=($.browser.opera&&((this.cycleW==42&&this.cycleH==19)||(this.cycleW==37&&this.cycleH==17))&&!this.complete);var loadingOther=(this.cycleH==0&&this.cycleW==0&&!this.complete);if(loadingIE||loadingFF||loadingOp||loadingOther){if(o.s&&opts.requeueOnImageNotLoaded&&++options.requeueAttempts<100){log(options.requeueAttempts," - img slide not loaded, requeuing slideshow: ",this.src,this.cycleW,this.cycleH);setTimeout(function(){$(o.s,o.c).cycle(options);},opts.requeueTimeout);requeue=true;return false;}else{log("could not determine size of image: "+this.src,this.cycleW,this.cycleH);}}}return true;});if(requeue){return false;}opts.cssBefore=opts.cssBefore||{};opts.animIn=opts.animIn||{};opts.animOut=opts.animOut||{};$slides.not(":eq("+first+")").css(opts.cssBefore);if(opts.cssFirst){$($slides[first]).css(opts.cssFirst);}if(opts.timeout){opts.timeout=parseInt(opts.timeout);if(opts.speed.constructor==String){opts.speed=$.fx.speeds[opts.speed]||parseInt(opts.speed);}if(!opts.sync){opts.speed=opts.speed/2;}var buffer=opts.fx=="shuffle"?500:250;while((opts.timeout-opts.speed)<buffer){opts.timeout+=opts.speed;}}if(opts.easing){opts.easeIn=opts.easeOut=opts.easing;}if(!opts.speedIn){opts.speedIn=opts.speed;}if(!opts.speedOut){opts.speedOut=opts.speed;}opts.slideCount=els.length;opts.currSlide=opts.lastSlide=first;if(opts.random){if(++opts.randomIndex==els.length){opts.randomIndex=0;}opts.nextSlide=opts.randomMap[opts.randomIndex];}else{if(opts.backwards){opts.nextSlide=opts.startingSlide==0?(els.length-1):opts.startingSlide-1;}else{opts.nextSlide=opts.startingSlide>=(els.length-1)?0:opts.startingSlide+1;}}if(!opts.multiFx){var init=$.fn.cycle.transitions[opts.fx];if($.isFunction(init)){init($cont,$slides,opts);}else{if(opts.fx!="custom"&&!opts.multiFx){log("unknown transition: "+opts.fx,"; slideshow terminating");return false;}}}var e0=$slides[first];if(opts.before.length){opts.before[0].apply(e0,[e0,e0,opts,true]);}if(opts.after.length>1){opts.after[1].apply(e0,[e0,e0,opts,true]);}if(opts.next){$(opts.next).bind(opts.prevNextEvent,function(){return advance(opts,opts.rev?-1:1);});}if(opts.prev){$(opts.prev).bind(opts.prevNextEvent,function(){return advance(opts,opts.rev?1:-1);});}if(opts.pager||opts.pagerAnchorBuilder){buildPager(els,opts);}exposeAddSlide(opts,els);return opts;}function saveOriginalOpts(opts){opts.original={before:[],after:[]};opts.original.cssBefore=$.extend({},opts.cssBefore);opts.original.cssAfter=$.extend({},opts.cssAfter);opts.original.animIn=$.extend({},opts.animIn);opts.original.animOut=$.extend({},opts.animOut);$.each(opts.before,function(){opts.original.before.push(this);});$.each(opts.after,function(){opts.original.after.push(this);});}function supportMultiTransitions(opts){var i,tx,txs=$.fn.cycle.transitions;if(opts.fx.indexOf(",")>0){opts.multiFx=true;opts.fxs=opts.fx.replace(/\s*/g,"").split(",");for(i=0;i<opts.fxs.length;i++){var fx=opts.fxs[i];tx=txs[fx];if(!tx||!txs.hasOwnProperty(fx)||!$.isFunction(tx)){log("discarding unknown transition: ",fx);opts.fxs.splice(i,1);i--;}}if(!opts.fxs.length){log("No valid transitions named; slideshow terminating.");return false;}}else{if(opts.fx=="all"){opts.multiFx=true;opts.fxs=[];for(p in txs){tx=txs[p];if(txs.hasOwnProperty(p)&&$.isFunction(tx)){opts.fxs.push(p);}}}}if(opts.multiFx&&opts.randomizeEffects){var r1=Math.floor(Math.random()*20)+30;for(i=0;i<r1;i++){var r2=Math.floor(Math.random()*opts.fxs.length);opts.fxs.push(opts.fxs.splice(r2,1)[0]);}debug("randomized fx sequence: ",opts.fxs);}return true;}function exposeAddSlide(opts,els){opts.addSlide=function(newSlide,prepend){var $s=$(newSlide),s=$s[0];if(!opts.autostopCount){opts.countdown++;}els[prepend?"unshift":"push"](s);if(opts.els){opts.els[prepend?"unshift":"push"](s);}opts.slideCount=els.length;$s.css("position","absolute");$s[prepend?"prependTo":"appendTo"](opts.$cont);if(prepend){opts.currSlide++;opts.nextSlide++;}if(!$.support.opacity&&opts.cleartype&&!opts.cleartypeNoBg){clearTypeFix($s);}if(opts.fit&&opts.width){$s.width(opts.width);}if(opts.fit&&opts.height&&opts.height!="auto"){$slides.height(opts.height);}s.cycleH=(opts.fit&&opts.height)?opts.height:$s.height();s.cycleW=(opts.fit&&opts.width)?opts.width:$s.width();$s.css(opts.cssBefore);if(opts.pager||opts.pagerAnchorBuilder){$.fn.cycle.createPagerAnchor(els.length-1,s,$(opts.pager),els,opts);}if($.isFunction(opts.onAddSlide)){opts.onAddSlide($s);}else{$s.hide();}};}$.fn.cycle.resetState=function(opts,fx){fx=fx||opts.fx;opts.before=[];opts.after=[];opts.cssBefore=$.extend({},opts.original.cssBefore);opts.cssAfter=$.extend({},opts.original.cssAfter);opts.animIn=$.extend({},opts.original.animIn);opts.animOut=$.extend({},opts.original.animOut);opts.fxFn=null;$.each(opts.original.before,function(){opts.before.push(this);});$.each(opts.original.after,function(){opts.after.push(this);});var init=$.fn.cycle.transitions[fx];if($.isFunction(init)){init(opts.$cont,$(opts.elements),opts);}};function go(els,opts,manual,fwd){if(manual&&opts.busy&&opts.manualTrump){debug("manualTrump in go(), stopping active transition");$(els).stop(true,true);opts.busy=false;}if(opts.busy){debug("transition active, ignoring new tx request");return;}var p=opts.$cont[0],curr=els[opts.currSlide],next=els[opts.nextSlide];if(p.cycleStop!=opts.stopCount||p.cycleTimeout===0&&!manual){return;}if(!manual&&!p.cyclePause&&!opts.bounce&&((opts.autostop&&(--opts.countdown<=0))||(opts.nowrap&&!opts.random&&opts.nextSlide<opts.currSlide))){if(opts.end){opts.end(opts);}return;}var changed=false;if((manual||!p.cyclePause)&&(opts.nextSlide!=opts.currSlide)){changed=true;var fx=opts.fx;curr.cycleH=curr.cycleH||$(curr).height();curr.cycleW=curr.cycleW||$(curr).width();next.cycleH=next.cycleH||$(next).height();next.cycleW=next.cycleW||$(next).width();if(opts.multiFx){if(opts.lastFx==undefined||++opts.lastFx>=opts.fxs.length){opts.lastFx=0;}fx=opts.fxs[opts.lastFx];opts.currFx=fx;}if(opts.oneTimeFx){fx=opts.oneTimeFx;opts.oneTimeFx=null;}$.fn.cycle.resetState(opts,fx);if(opts.before.length){$.each(opts.before,function(i,o){if(p.cycleStop!=opts.stopCount){return;}o.apply(next,[curr,next,opts,fwd]);});}var after=function(){$.each(opts.after,function(i,o){if(p.cycleStop!=opts.stopCount){return;}o.apply(next,[curr,next,opts,fwd]);});};debug("tx firing; currSlide: "+opts.currSlide+"; nextSlide: "+opts.nextSlide);opts.busy=1;if(opts.fxFn){opts.fxFn(curr,next,opts,after,fwd,manual&&opts.fastOnEvent);}else{if($.isFunction($.fn.cycle[opts.fx])){$.fn.cycle[opts.fx](curr,next,opts,after,fwd,manual&&opts.fastOnEvent);}else{$.fn.cycle.custom(curr,next,opts,after,fwd,manual&&opts.fastOnEvent);}}}if(changed||opts.nextSlide==opts.currSlide){opts.lastSlide=opts.currSlide;if(opts.random){opts.currSlide=opts.nextSlide;if(++opts.randomIndex==els.length){opts.randomIndex=0;}opts.nextSlide=opts.randomMap[opts.randomIndex];if(opts.nextSlide==opts.currSlide){opts.nextSlide=(opts.currSlide==opts.slideCount-1)?0:opts.currSlide+1;}}else{if(opts.backwards){var roll=(opts.nextSlide-1)<0;if(roll&&opts.bounce){opts.backwards=!opts.backwards;opts.nextSlide=1;opts.currSlide=0;}else{opts.nextSlide=roll?(els.length-1):opts.nextSlide-1;opts.currSlide=roll?0:opts.nextSlide+1;}}else{var roll=(opts.nextSlide+1)==els.length;if(roll&&opts.bounce){opts.backwards=!opts.backwards;opts.nextSlide=els.length-2;opts.currSlide=els.length-1;}else{opts.nextSlide=roll?0:opts.nextSlide+1;opts.currSlide=roll?els.length-1:opts.nextSlide-1;}}}}if(changed&&opts.pager){opts.updateActivePagerLink(opts.pager,opts.currSlide,opts.activePagerClass);}var ms=0;if(opts.timeout&&!opts.continuous){ms=getTimeout(els[opts.currSlide],els[opts.nextSlide],opts,fwd);}else{if(opts.continuous&&p.cyclePause){ms=10;}}if(ms>0){p.cycleTimeout=setTimeout(function(){go(els,opts,0,(!opts.rev&&!opts.backwards));},ms);}}$.fn.cycle.updateActivePagerLink=function(pager,currSlide,clsName){$(pager).each(function(){$(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);});};function getTimeout(curr,next,opts,fwd){if(opts.timeoutFn){var t=opts.timeoutFn.call(curr,curr,next,opts,fwd);while((t-opts.speed)<250){t+=opts.speed;}debug("calculated timeout: "+t+"; speed: "+opts.speed);if(t!==false){return t;}}return opts.timeout;}$.fn.cycle.next=function(opts){advance(opts,opts.rev?-1:1);};$.fn.cycle.prev=function(opts){advance(opts,opts.rev?1:-1);};function advance(opts,val){var els=opts.elements;var p=opts.$cont[0],timeout=p.cycleTimeout;if(timeout){clearTimeout(timeout);p.cycleTimeout=0;}if(opts.random&&val<0){opts.randomIndex--;if(--opts.randomIndex==-2){opts.randomIndex=els.length-2;}else{if(opts.randomIndex==-1){opts.randomIndex=els.length-1;}}opts.nextSlide=opts.randomMap[opts.randomIndex];}else{if(opts.random){opts.nextSlide=opts.randomMap[opts.randomIndex];}else{opts.nextSlide=opts.currSlide+val;if(opts.nextSlide<0){if(opts.nowrap){return false;}opts.nextSlide=els.length-1;}else{if(opts.nextSlide>=els.length){if(opts.nowrap){return false;}opts.nextSlide=0;}}}}var cb=opts.onPrevNextEvent||opts.prevNextClick;if($.isFunction(cb)){cb(val>0,opts.nextSlide,els[opts.nextSlide]);}go(els,opts,1,val>=0);return false;}function buildPager(els,opts){var $p=$(opts.pager);$.each(els,function(i,o){$.fn.cycle.createPagerAnchor(i,o,$p,els,opts);});opts.updateActivePagerLink(opts.pager,opts.startingSlide,opts.activePagerClass);}$.fn.cycle.createPagerAnchor=function(i,el,$p,els,opts){var a;if($.isFunction(opts.pagerAnchorBuilder)){a=opts.pagerAnchorBuilder(i,el);debug("pagerAnchorBuilder("+i+", el) returned: "+a);}else{a='<a href="#">'+(i+1)+"</a>";}if(!a){return;}var $a=$(a);if($a.parents("body").length===0){var arr=[];if($p.length>1){$p.each(function(){var $clone=$a.clone(true);$(this).append($clone);arr.push($clone[0]);});$a=$(arr);}else{$a.appendTo($p);}}opts.pagerAnchors=opts.pagerAnchors||[];opts.pagerAnchors.push($a);$a.bind(opts.pagerEvent,function(e){e.preventDefault();opts.nextSlide=i;var p=opts.$cont[0],timeout=p.cycleTimeout;if(timeout){clearTimeout(timeout);p.cycleTimeout=0;}var cb=opts.onPagerEvent||opts.pagerClick;if($.isFunction(cb)){cb(opts.nextSlide,els[opts.nextSlide]);}go(els,opts,1,opts.currSlide<i);});if(!/^click/.test(opts.pagerEvent)&&!opts.allowPagerClickBubble){$a.bind("click.cycle",function(){return false;});}if(opts.pauseOnPagerHover){$a.hover(function(){opts.$cont[0].cyclePause++;},function(){opts.$cont[0].cyclePause--;});}};$.fn.cycle.hopsFromLast=function(opts,fwd){var hops,l=opts.lastSlide,c=opts.currSlide;if(fwd){hops=c>l?c-l:opts.slideCount-l;}else{hops=c<l?l-c:l+opts.slideCount-c;}return hops;};function clearTypeFix($slides){debug("applying clearType background-color hack");function hex(s){s=parseInt(s).toString(16);return s.length<2?"0"+s:s;}function getBg(e){for(;e&&e.nodeName.toLowerCase()!="html";e=e.parentNode){var v=$.css(e,"background-color");if(v.indexOf("rgb")>=0){var rgb=v.match(/\d+/g);return"#"+hex(rgb[0])+hex(rgb[1])+hex(rgb[2]);}if(v&&v!="transparent"){return v;}}return"#ffffff";}$slides.each(function(){$(this).css("background-color",getBg(this));});}$.fn.cycle.commonReset=function(curr,next,opts,w,h,rev){$(opts.elements).not(curr).hide();opts.cssBefore.opacity=1;opts.cssBefore.display="block";if(w!==false&&next.cycleW>0){opts.cssBefore.width=next.cycleW;}if(h!==false&&next.cycleH>0){opts.cssBefore.height=next.cycleH;}opts.cssAfter=opts.cssAfter||{};opts.cssAfter.display="none";$(curr).css("zIndex",opts.slideCount+(rev===true?1:0));$(next).css("zIndex",opts.slideCount+(rev===true?0:1));};$.fn.cycle.custom=function(curr,next,opts,cb,fwd,speedOverride){var $l=$(curr),$n=$(next);var speedIn=opts.speedIn,speedOut=opts.speedOut,easeIn=opts.easeIn,easeOut=opts.easeOut;$n.css(opts.cssBefore);if(speedOverride){if(typeof speedOverride=="number"){speedIn=speedOut=speedOverride;}else{speedIn=speedOut=1;}easeIn=easeOut=null;}var fn=function(){$n.animate(opts.animIn,speedIn,easeIn,cb);};$l.animate(opts.animOut,speedOut,easeOut,function(){if(opts.cssAfter){$l.css(opts.cssAfter);}if(!opts.sync){fn();}});if(opts.sync){fn();}};$.fn.cycle.transitions={fade:function($cont,$slides,opts){$slides.not(":eq("+opts.currSlide+")").css("opacity",0);opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.opacity=0;});opts.animIn={opacity:1};opts.animOut={opacity:0};opts.cssBefore={top:0,left:0};}};$.fn.cycle.ver=function(){return ver;};$.fn.cycle.defaults={fx:"fade",timeout:4000,timeoutFn:null,continuous:0,speed:1000,speedIn:null,speedOut:null,next:null,prev:null,onPrevNextEvent:null,prevNextEvent:"click.cycle",pager:null,onPagerEvent:null,pagerEvent:"click.cycle",allowPagerClickBubble:false,pagerAnchorBuilder:null,before:null,after:null,end:null,easing:null,easeIn:null,easeOut:null,shuffle:null,animIn:null,animOut:null,cssBefore:null,cssAfter:null,fxFn:null,height:"auto",startingSlide:0,sync:1,random:0,fit:0,containerResize:1,pause:0,pauseOnPagerHover:0,autostop:0,autostopCount:0,delay:0,slideExpr:null,cleartype:!$.support.opacity,cleartypeNoBg:false,nowrap:0,fastOnEvent:0,randomizeEffects:1,rev:0,manualTrump:true,requeueOnImageNotLoaded:true,requeueTimeout:250,activePagerClass:"activeSlide",updateActivePagerLink:null,backwards:false};})(jQuery);
(function($){$.fn.cycle.transitions.none=function($cont,$slides,opts){opts.fxFn=function(curr,next,opts,after){$(next).show();$(curr).hide();after();};};$.fn.cycle.transitions.scrollUp=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var h=$cont.height();opts.cssBefore={top:h,left:0};opts.cssFirst={top:0};opts.animIn={top:0};opts.animOut={top:-h};};$.fn.cycle.transitions.scrollDown=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var h=$cont.height();opts.cssFirst={top:0};opts.cssBefore={top:-h,left:0};opts.animIn={top:0};opts.animOut={top:h};};$.fn.cycle.transitions.scrollLeft=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var w=$cont.width();opts.cssFirst={left:0};opts.cssBefore={left:w,top:0};opts.animIn={left:0};opts.animOut={left:0-w};};$.fn.cycle.transitions.scrollRight=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var w=$cont.width();opts.cssFirst={left:0};opts.cssBefore={left:-w,top:0};opts.animIn={left:0};opts.animOut={left:w};};$.fn.cycle.transitions.scrollHorz=function($cont,$slides,opts){$cont.css("overflow","hidden").width();opts.before.push(function(curr,next,opts,fwd){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.left=fwd?(next.cycleW-1):(1-next.cycleW);opts.animOut.left=fwd?-curr.cycleW:curr.cycleW;});opts.cssFirst={left:0};opts.cssBefore={top:0};opts.animIn={left:0};opts.animOut={top:0};};$.fn.cycle.transitions.scrollVert=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push(function(curr,next,opts,fwd){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.top=fwd?(1-next.cycleH):(next.cycleH-1);opts.animOut.top=fwd?curr.cycleH:-curr.cycleH;});opts.cssFirst={top:0};opts.cssBefore={left:0};opts.animIn={top:0};opts.animOut={left:0};};$.fn.cycle.transitions.slideX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$(opts.elements).not(curr).hide();$.fn.cycle.commonReset(curr,next,opts,false,true);opts.animIn.width=next.cycleW;});opts.cssBefore={left:0,top:0,width:0};opts.animIn={width:"show"};opts.animOut={width:0};};$.fn.cycle.transitions.slideY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$(opts.elements).not(curr).hide();$.fn.cycle.commonReset(curr,next,opts,true,false);opts.animIn.height=next.cycleH;});opts.cssBefore={left:0,top:0,height:0};opts.animIn={height:"show"};opts.animOut={height:0};};$.fn.cycle.transitions.shuffle=function($cont,$slides,opts){var i,w=$cont.css("overflow","visible").width();$slides.css({left:0,top:0});opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);});if(!opts.speedAdjusted){opts.speed=opts.speed/2;opts.speedAdjusted=true;}opts.random=0;opts.shuffle=opts.shuffle||{left:-w,top:15};opts.els=[];for(i=0;i<$slides.length;i++){opts.els.push($slides[i]);}for(i=0;i<opts.currSlide;i++){opts.els.push(opts.els.shift());}opts.fxFn=function(curr,next,opts,cb,fwd){var $el=fwd?$(curr):$(next);$(next).css(opts.cssBefore);var count=opts.slideCount;$el.animate(opts.shuffle,opts.speedIn,opts.easeIn,function(){var hops=$.fn.cycle.hopsFromLast(opts,fwd);for(var k=0;k<hops;k++){fwd?opts.els.push(opts.els.shift()):opts.els.unshift(opts.els.pop());}if(fwd){for(var i=0,len=opts.els.length;i<len;i++){$(opts.els[i]).css("z-index",len-i+count);}}else{var z=$(curr).css("z-index");$el.css("z-index",parseInt(z)+1+count);}$el.animate({left:0,top:0},opts.speedOut,opts.easeOut,function(){$(fwd?this:curr).hide();if(cb){cb();}});});};opts.cssBefore={display:"block",opacity:1,top:0,left:0};};$.fn.cycle.transitions.turnUp=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.cssBefore.top=next.cycleH;opts.animIn.height=next.cycleH;});opts.cssFirst={top:0};opts.cssBefore={left:0,height:0};opts.animIn={top:0};opts.animOut={height:0};};$.fn.cycle.transitions.turnDown=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssFirst={top:0};opts.cssBefore={left:0,top:0,height:0};opts.animOut={height:0};};$.fn.cycle.transitions.turnLeft=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.cssBefore.left=next.cycleW;opts.animIn.width=next.cycleW;});opts.cssBefore={top:0,width:0};opts.animIn={left:0};opts.animOut={width:0};};$.fn.cycle.transitions.turnRight=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.animIn.width=next.cycleW;opts.animOut.left=curr.cycleW;});opts.cssBefore={top:0,left:0,width:0};opts.animIn={left:0};opts.animOut={width:0};};$.fn.cycle.transitions.zoom=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,false,true);opts.cssBefore.top=next.cycleH/2;opts.cssBefore.left=next.cycleW/2;opts.animIn={top:0,left:0,width:next.cycleW,height:next.cycleH};opts.animOut={width:0,height:0,top:curr.cycleH/2,left:curr.cycleW/2};});opts.cssFirst={top:0,left:0};opts.cssBefore={width:0,height:0};};$.fn.cycle.transitions.fadeZoom=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,false);opts.cssBefore.left=next.cycleW/2;opts.cssBefore.top=next.cycleH/2;opts.animIn={top:0,left:0,width:next.cycleW,height:next.cycleH};});opts.cssBefore={width:0,height:0};opts.animOut={opacity:0};};$.fn.cycle.transitions.blindX=function($cont,$slides,opts){var w=$cont.css("overflow","hidden").width();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.width=next.cycleW;opts.animOut.left=curr.cycleW;});opts.cssBefore={left:w,top:0};opts.animIn={left:0};opts.animOut={left:w};};$.fn.cycle.transitions.blindY=function($cont,$slides,opts){var h=$cont.css("overflow","hidden").height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssBefore={top:h,left:0};opts.animIn={top:0};opts.animOut={top:h};};$.fn.cycle.transitions.blindZ=function($cont,$slides,opts){var h=$cont.css("overflow","hidden").height();var w=$cont.width();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssBefore={top:h,left:w};opts.animIn={top:0,left:0};opts.animOut={top:h,left:w};};$.fn.cycle.transitions.growX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.cssBefore.left=this.cycleW/2;opts.animIn={left:0,width:this.cycleW};opts.animOut={left:0};});opts.cssBefore={width:0,top:0};};$.fn.cycle.transitions.growY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.cssBefore.top=this.cycleH/2;opts.animIn={top:0,height:this.cycleH};opts.animOut={top:0};});opts.cssBefore={height:0,left:0};};$.fn.cycle.transitions.curtainX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true,true);opts.cssBefore.left=next.cycleW/2;opts.animIn={left:0,width:this.cycleW};opts.animOut={left:curr.cycleW/2,width:0};});opts.cssBefore={top:0,width:0};};$.fn.cycle.transitions.curtainY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false,true);opts.cssBefore.top=next.cycleH/2;opts.animIn={top:0,height:next.cycleH};opts.animOut={top:curr.cycleH/2,height:0};});opts.cssBefore={left:0,height:0};};$.fn.cycle.transitions.cover=function($cont,$slides,opts){var d=opts.direction||"left";var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);if(d=="right"){opts.cssBefore.left=-w;}else{if(d=="up"){opts.cssBefore.top=h;}else{if(d=="down"){opts.cssBefore.top=-h;}else{opts.cssBefore.left=w;}}}});opts.animIn={left:0,top:0};opts.animOut={opacity:1};opts.cssBefore={top:0,left:0};};$.fn.cycle.transitions.uncover=function($cont,$slides,opts){var d=opts.direction||"left";var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);if(d=="right"){opts.animOut.left=w;}else{if(d=="up"){opts.animOut.top=-h;}else{if(d=="down"){opts.animOut.top=h;}else{opts.animOut.left=-w;}}}});opts.animIn={left:0,top:0};opts.animOut={opacity:1};opts.cssBefore={top:0,left:0};};$.fn.cycle.transitions.toss=function($cont,$slides,opts){var w=$cont.css("overflow","visible").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);if(!opts.animOut.left&&!opts.animOut.top){opts.animOut={left:w*2,top:-h/2,opacity:0};}else{opts.animOut.opacity=0;}});opts.cssBefore={left:0,top:0};opts.animIn={left:0};};$.fn.cycle.transitions.wipe=function($cont,$slides,opts){var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.cssBefore=opts.cssBefore||{};var clip;if(opts.clip){if(/l2r/.test(opts.clip)){clip="rect(0px 0px "+h+"px 0px)";}else{if(/r2l/.test(opts.clip)){clip="rect(0px "+w+"px "+h+"px "+w+"px)";}else{if(/t2b/.test(opts.clip)){clip="rect(0px "+w+"px 0px 0px)";}else{if(/b2t/.test(opts.clip)){clip="rect("+h+"px "+w+"px "+h+"px 0px)";}else{if(/zoom/.test(opts.clip)){var top=parseInt(h/2);var left=parseInt(w/2);clip="rect("+top+"px "+left+"px "+top+"px "+left+"px)";}}}}}}opts.cssBefore.clip=opts.cssBefore.clip||clip||"rect(0px 0px 0px 0px)";var d=opts.cssBefore.clip.match(/(\d+)/g);var t=parseInt(d[0]),r=parseInt(d[1]),b=parseInt(d[2]),l=parseInt(d[3]);opts.before.push(function(curr,next,opts){if(curr==next){return;}var $curr=$(curr),$next=$(next);$.fn.cycle.commonReset(curr,next,opts,true,true,false);opts.cssAfter.display="block";var step=1,count=parseInt((opts.speedIn/13))-1;(function f(){var tt=t?t-parseInt(step*(t/count)):0;var ll=l?l-parseInt(step*(l/count)):0;var bb=b<h?b+parseInt(step*((h-b)/count||1)):h;var rr=r<w?r+parseInt(step*((w-r)/count||1)):w;$next.css({clip:"rect("+tt+"px "+rr+"px "+bb+"px "+ll+"px)"});(step++<=count)?setTimeout(f,13):$curr.css("display","none");})();});opts.cssBefore={display:"block",opacity:1,top:0,left:0};opts.animIn={left:0};opts.animOut={left:0};};})(jQuery);
(function($){$.fn.jCarouselLite=function(o){o=$.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:false,auto:null,speed:200,easing:null,vertical:false,circular:true,visible:4,start:0,scroll:1,beforeStart:null,afterEnd:null},o||{});return this.each(function(){var b=false,animCss=o.vertical?"top":"left",sizeCss=o.vertical?"height":"width";var c=$(this),ul=$("ul",c),tLi=$("li",ul),tl=tLi.size(),v=o.visible;if(o.circular){ul.prepend(tLi.slice(tl-v-1+1).clone()).append(tLi.slice(0,v).clone());o.start+=v}var f=$("li",ul),itemLength=f.size(),curr=o.start;c.css("visibility","visible");f.css({overflow:"hidden",float:o.vertical?"none":"left"});ul.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});c.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var g=o.vertical?height(f):width(f);var h=g*itemLength;var j=g*v;f.css({width:f.width(),height:f.height()});ul.css(sizeCss,h+"px").css(animCss,-(curr*g));c.css(sizeCss,j+"px");if(o.btnPrev)$(o.btnPrev).click(function(){return go(curr-o.scroll)});if(o.btnNext)$(o.btnNext).click(function(){return go(curr+o.scroll)});if(o.btnGo)$.each(o.btnGo,function(i,a){$(a).click(function(){return go(o.circular?o.visible+i:i)})});if(o.mouseWheel&&c.mousewheel)c.mousewheel(function(e,d){return d>0?go(curr-o.scroll):go(curr+o.scroll)});if(o.auto)setInterval(function(){go(curr+o.scroll)},o.auto+o.speed);function vis(){return f.slice(curr).slice(0,v)};function go(a){if(!b){if(o.beforeStart)o.beforeStart.call(this,vis());if(o.circular){if(a<=o.start-v-1){ul.css(animCss,-((itemLength-(v*2))*g)+"px");curr=a==o.start-v-1?itemLength-(v*2)-1:itemLength-(v*2)-o.scroll}else if(a>=itemLength-v+1){ul.css(animCss,-((v)*g)+"px");curr=a==itemLength-v+1?v+1:v+o.scroll}else curr=a}else{if(a<0||a>itemLength-v)return;else curr=a}b=true;ul.animate(animCss=="left"?{left:-(curr*g)}:{top:-(curr*g)},o.speed,o.easing,function(){if(o.afterEnd)o.afterEnd.call(this,vis());b=false});if(!o.circular){$(o.btnPrev+","+o.btnNext).removeClass("disabled");$((curr-o.scroll<0&&o.btnPrev)||(curr+o.scroll>itemLength-v&&o.btnNext)||[]).addClass("disabled")}}return false}})};function css(a,b){return parseInt($.css(a[0],b))||0};function width(a){return a[0].offsetWidth+css(a,'marginLeft')+css(a,'marginRight')};function height(a){return a[0].offsetHeight+css(a,'marginTop')+css(a,'marginBottom')}})(jQuery);

/* pip small movie layer */
function pipMovieLayer(obj,code,position) {
	if(document.getElementById('pipMovieLayer')) {
		$("#pipMovieLayer").empty();$("#pipMovieLayer").remove();
	}
	$("#wrap .container").append('<div id="pipMovieLayer" class="pip_movielayer"></div>');
	if (code.indexOf("www.youtube.com") != -1) {
		$("#pipMovieLayer").append('<div class="pip_movie"><div class="close"><a href="#"><img src="/wcm/images/common/btn/btn_layer_close2.png" alt="close"></a></div><iframe width="613" height="460" src="'+code+'" frameborder="0" allowfullscreen></iframe></div>');
	} else {
		VideoJS.setupAllWhenReady();
		var tmp_code = '<div class="pip_movie">';
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
            $("#pipMovieLayer").css("top",parseInt($(window).scrollTop())+45).append(tmp_code);					
        }
	$("#pipMovieLayer .pip_movie .close a").click(function() {
                if (navigator.userAgent.match(/MSIE 8.0/i)){$("#pipMovieLayer iframe").attr("src","about:blank");}
		$("#pipMovieLayer").remove();
		return false;
	});
	return false;
}

function monileTopBtn(){
    $('#floating_top').remove();
    if($('#pip').hasClass('hyundai_main')==false){
        if($('.pip').length>0 || $('.general').length>0){
            $('.pip').each(function(index, element) {
                $(this).append('<div class="mobile_topbtn"><a href="#wrap">Top</a></div>'); });
                 $('.general').each(function(index, element) {
                $(this).append('<div class="mobile_topbtn"><a href="#wrap">Top</a></div>'); });
        }else if ($('body').hasClass('new_innovation')){ 
            $('.content').append('<div class="mobile_topbtn"><a href="#wrap">Top</a></div>'); 
        }else { 
            $('.container').append('<div class="mobile_topbtn"><a href="#wrap">Top</a></div>'); 
        } 
        $('.mobile_topbtn').click(function(e) { 
            setTimeout(scrollTo, 0, 0, 1); return false;
        }); 
    }

}

$(document).ready(function() {
	$(".floating_cubemenu .smenu > ul > li").find("ul").parent().find("a").eq(0).click(function(){
		if($(this).parent().hasClass("on")) {
			return false;
		} else {
			if($(this).parent().find("ul").css("display")=="none") $(this).parent().find("ul").show();
			else $(this).parent().find("ul").hide();
			return false;
		}
	});
});


/* add 2013-10-07 */
$.fn.jGallery = function() {
	return this.each(function() {
		var allNum = 0;
		var currImage = 0;
		var targetObj = $(this);
		var autoRolling;
		var autoRolling_Large;
		var type;
		var thumbnailWidth=136;

		// select design
		$(".sponsorship_search", targetObj).jqTransform({imgPath:'/worldwide/images/common/jqtransform/'});

		// make html
		makeHTML("all", targetObj);
		function makeHTML(cate, targetObj) {
			if($(".jgallery_wrap .data ul",targetObj).attr("data-type") != "movie") type="photo"; else type="movie";
			$(".jgallery_wrap .jgallery",targetObj).empty();
			if(type=="movie") {
				$(".jgallery_wrap .jgallery",targetObj).append('<div class="photo"><div class="movie_view"></div><div class="description"><div class="caption"><a href="#" class="on">On</a><a href="#" class="off">Off</a></div><strong></strong><span></span></div><div class="direction_nav"><div class="prev"><a href="#">Prev</a></div><div class="next"><a href="#">Next</a></div></div></div>');
				$(".jgallery_wrap .jgallery",targetObj).append('<div class="roll"><p class="arr_left"><a>Prev</a></p><div class="thumnailList"><ul class="movieList"></ul></div><p class="arr_right"><a>Next</a></p></div>');
			} else {
				$(".jgallery_wrap .jgallery",targetObj).append('<div class="photo"><div class="photo_view"></div><div class="function"><div class="share"><span>Share</span> <div class="sns_share"><a href="#" class="facebook"><img src="/worldwide/images/experience/sponsorship/new_sponsorships/icon_social_facebook.png" alt=""></a> <a href="#" class="twitter"><img src="/worldwide/images/experience/sponsorship/new_sponsorships/icon_social_twitter.png" alt=""></a>  <a href="#" class="pinterest"><img src="/worldwide/images/experience/sponsorship/new_sponsorships/icon_social_pinterest.png" alt=""></a></div><div class="facebook_like"></div></div><a class="viewmore" href="#"><img alt="" src="../worldwide/images/experience/sponsorship/new_sponsorships/icon_viewmore.html"></a></div><div class="description"><strong></strong><span></span></div><div class="direction_nav"><div class="prev"><a href="#">Prev</a></div><div class="next"><a href="#">Next</a></div></div></div>');
				$(".jgallery_wrap .jgallery",targetObj).append('<div class="roll"><p class="arr_left"><a>Prev</a></p><div class="thumnailList"><ul class="photoList"></ul></div><p class="arr_right"><a>Next</a></p></div>');
			}
			if(cate != "all") {
				for(var i=0; i<$(".jgallery_wrap .data ul li",targetObj).length; i++) {
					if($(".jgallery_wrap .data ul li",targetObj).eq(i).attr("class") == cate) {
						$(".jgallery_wrap .jgallery .roll ul",targetObj).append("<li>"+$(".jgallery_wrap .data li",targetObj).eq(i).html()+"</li>");
					}
				}
				if(type=="movie") $(".jgallery_wrap .jgallery .roll ul",targetObj).find("li").addClass(type);
				allNum = $(".jgallery_wrap .jgallery .roll ul li",targetObj).length;
			} else {
				$(".jgallery_wrap .jgallery .roll ul",targetObj).html($(".jgallery_wrap .data ul",targetObj).html());
				if(type=="movie") $(".jgallery_wrap .jgallery .roll ul",targetObj).find("li").addClass(type);
				allNum = $(".jgallery_wrap .jgallery .roll ul li",targetObj).length;
			}
			$(".jgallery_wrap .jgallery .roll ul",targetObj).css("width", thumbnailWidth*allNum);
			$(".jgallery_wrap .data",targetObj).hide();
			$(".jgallery_wrap .jgallery .roll ul",targetObj).css("margin-left",0);
			$(".jgallery_wrap .jgallery .roll ul li a", targetObj).click(function() {
				currImage = $(this).parent().index();
				if(type=="movie") {
					$(".photo .movie_view", targetObj).html('<iframe src="//www.youtube.com/embed/'+$(this).attr("href").split("../embed/index.html")[1]+'?wmode=opaque" width="669" height="492" border="0"></iframe>');
				} else {
					$(".photo .photo_view", targetObj).html('<img alt="" src="'+$(this).attr("href")+'">');
					$(".facebook_like", targetObj).html('<iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href=http%3A%2F%2F'+encodeURIComponent(document.location.href.match(/http[s]*:\/\/([a-zA-Z0-9\-\.]*)/)[1]+$(this).attr("href"))+'&amp;width=78&amp;height=21&amp;colorscheme=light&amp;layout=button_count&amp;action=like&amp;show_faces=true&amp;send=false&amp;" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:78px; height:21px;" allowTransparency="true"></iframe>');
				}
				if($(this).find("img").attr("alt")=="" || $(this).find("img").attr("alt") == " ") {
					$(".description", targetObj).hide();
				} else  {
					$(".description", targetObj).show();
					if($(this).attr("href").indexOf("../embed/index.html") != -1) {
						$(".description", targetObj).hide();
					} else {
						$(".photo .description",targetObj).html("<strong>"+$(this).find("img").attr("alt")+"</strong>");
					}
				}
				$(".jgallery_wrap .jgallery .roll ul li", targetObj).removeClass("on");
				$(this).parent().addClass("on");
				if(currImage==0) {$(".photo .direction_nav .prev",targetObj).hide();$(".photo .direction_nav .next",targetObj).show();}
				else if(currImage==allNum-1) {$(".photo .direction_nav .prev",targetObj).show();$(".photo .direction_nav .next",targetObj).hide();}
				else {$(".photo .direction_nav .prev",targetObj).show();$(".photo .direction_nav .next",targetObj).show();}
				return false;
			});
			$(".photo .direction_nav .prev a",targetObj).click(function() {
				$(".jgallery_wrap .jgallery .roll ul li",targetObj).eq(currImage-1).find("a").trigger('click');
				if($(".jgallery_wrap .jgallery .roll ul li",targetObj).eq(currImage).css("display")=="none") {
					viewJGallery(currImage+1);
				}
				return false;
			});
			$(".photo .direction_nav .next a",targetObj).click(function() {
				$(".jgallery_wrap .jgallery .roll ul li",targetObj).eq(currImage+1).find("a").trigger('click');
				if($(".jgallery_wrap .jgallery .roll ul li",targetObj).eq(currImage).css("display")=="none") {
					viewJGallery(currImage-2);
				}
				return false;
			});
			if(type=="photo") {
				$(".function .share .sns_share a.facebook", targetObj).click(function() {snsShare("facebook","small");return false;});
				$(".function .share .sns_share a.twitter", targetObj).click(function() {snsShare("twitter","small");return false;});
				$(".function .share .sns_share a.google", targetObj).click(function() {snsShare("google","small");return false;});
				$(".function .share .sns_share a.pinterest", targetObj).click(function() {snsShare("pinterest","small");return false;});
			}

			viewJGallery(1);

			$(".jgallery_wrap .jgallery .roll ul li",targetObj).eq(0).find("a").trigger('click');
			$(".photo .direction_nav .prev",targetObj).hide();
			$(".photo .direction_nav .next",targetObj).show();
			$(".photo .description .caption a.on",targetObj).hide().click(function() {
				$(".photo .description",targetObj).removeClass("caption_off");
				$(".photo .description .caption a.on",targetObj).hide();
				$(".photo .description .caption a.off",targetObj).show();
				return false;
			});
			$(".photo .description .caption a.off",targetObj).show().click(function() {
				$(".photo .description",targetObj).addClass("caption_off");
				$(".photo .description .caption a.on",targetObj).show();
				$(".photo .description .caption a.off",targetObj).hide();
				return false;
			});
			// + button
			$(".function a.viewmore",targetObj).click(function() {
				clearTimeout(autoRolling);
				clearTimeout(autoRolling_Large);
				if(!$("#sponsorship_layer_gallery").is("div")) {$("body").append('<div id="sponsorship_layer_gallery" class="sponsorship_layer_gallery"></div>');}
				$("#sponsorship_layer_gallery").empty().show();
				var t = $(window).scrollTop();
				$("#wrap").css("position","fixed");
				var largeImg_plus = $(".jgallery_wrap .jgallery .roll ul li", targetObj).eq(currImage).find("a").attr("href");
				if($(".jgallery_wrap .jgallery .roll ul li", targetObj).eq(currImage).find("a").find("img").attr("large-img") != undefined && $(".jgallery_wrap .jgallery .roll ul li", targetObj).eq(currImage).find("a").find("img").attr("large-img") != "") {
					largeImg_plus = $(".jgallery_wrap .jgallery .roll ul li", targetObj).eq(currImage).find("a").find("img").attr("large-img");
				}
				$("#sponsorship_layer_gallery").append('<div class="layer_gallery_photo_view"><img alt="" src="'+largeImg_plus+'"></div>');
				$("#sponsorship_layer_gallery").append('<div class="layer_gallery_title"><div class="layer_gallery_link"><div class="download"><span>Download</span> <a href="'+largeImg_plus+'" target="_blank"><img alt="" src="/worldwide/images/experience/sponsorship/new_sponsorships/icon_download_link.png" /></a></div><div class="share"><span>Share</span> <a href="#" class="facebook"><img src="/worldwide/images/experience/sponsorship/new_sponsorships/icon_social_facebook.png" alt=""></a> <a href="#" class="twitter"><img src="/worldwide/images/experience/sponsorship/new_sponsorships/icon_social_twitter.png" alt=""></a> <a href="#" class="pinterest"><img src="/worldwide/images/experience/sponsorship/new_sponsorships/icon_social_pinterest.png" alt=""></a><div class="facebook_like"></div></div></div></div>');
				$("#sponsorship_layer_gallery").append('<div class="direction_nav"><div class="prev"><a href="#">Prev</a></div><div class="next"><a href="#">Next</a></div></div>');
				$("#sponsorship_layer_gallery").append('<div class="btn_slideshow"><a href="#"><img src="/worldwide/images/experience/sponsorship/new_sponsorships/btn_slideshow.png" alt="" /></a></div>');
				$("#sponsorship_layer_gallery").append('<div class="layer_gallery_close"><a href="#"><img alt="close" src="../worldwide/images/experience/sponsorship/new_sponsorships/btn_layer_close2.html"></a></div>');
				if(currImage==0) {$("#sponsorship_layer_gallery .direction_nav .prev").hide();$("#sponsorship_layer_gallery .direction_nav .next").show();}
				else if(currImage==allNum-1) {$("#sponsorship_layer_gallery .direction_nav .prev").show();$("#sponsorship_layer_gallery .direction_nav .next").hide();}
				else {$("#sponsorship_layer_gallery .direction_nav .prev").show();$("#sponsorship_layer_gallery .direction_nav .next").show();}
				var p = ($(window).height()-$("#sponsorship_layer_gallery .layer_gallery_photo_view img").height())/2; if(p<0) p=0;
				var b = ($(window).height()-66)/2; if(b<0) b=0;
				if($(".jgallery_wrap .jgallery .roll ul li", targetObj).eq(currImage).find("a").find("img").attr("large-img") != undefined && $(".jgallery_wrap .jgallery .roll ul li", targetObj).eq(currImage).find("a").find("img").attr("large-img") != "") {
					p=0;
				}
				$("#sponsorship_layer_gallery .layer_gallery_title .layer_gallery_link > div.share a.facebook").click(function() {snsShare("facebook","large");return false;});
				$("#sponsorship_layer_gallery .layer_gallery_title .layer_gallery_link > div.share a.twitter").click(function() {snsShare("twitter","large");return false;});
				$("#sponsorship_layer_gallery .layer_gallery_title .layer_gallery_link > div.share a.pinterest").click(function() {snsShare("pinterest","large");return false;});
				$("#sponsorship_layer_gallery .layer_gallery_title .facebook_like").html('<iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href=http%3A%2F%2F'+encodeURIComponent(document.location.href.match(/http[s]*:\/\/([a-zA-Z0-9\-\.]*)/)[1]+$(".jgallery_wrap .jgallery .roll ul li", targetObj).eq(currImage).find("a").attr("href"))+'&amp;width=78&amp;height=21&amp;colorscheme=light&amp;layout=button_count&amp;action=like&amp;show_faces=true&amp;send=false&amp;" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:78px; height:21px;" allowTransparency="true"></iframe>');
				$("#sponsorship_layer_gallery .direction_nav .prev a").css("top",b).click(function() {
					clearTimeout(autoRolling);
					$("#sponsorship_layer_gallery .layer_gallery_photo_view img").remove();
					var largeImg_plus = $(".jgallery_wrap .jgallery .roll ul li", targetObj).eq(currImage-1).find("a").attr("href");
					var isLarge = false;
					if($(".jgallery_wrap .jgallery .roll ul li", targetObj).eq(currImage-1).find("a").find("img").attr("large-img") != undefined && $(".jgallery_wrap .jgallery .roll ul li", targetObj).eq(currImage-1).find("a").find("img").attr("large-img") != "") {
						largeImg_plus = $(".jgallery_wrap .jgallery .roll ul li", targetObj).eq(currImage-1).find("a").find("img").attr("large-img");
						isLarge = true;
					}
					//var p = ($(window).height()-$("#sponsorship_layer_gallery .layer_gallery_photo_view img").height())/2; if(p<0) p=0;
					var p = ($(window).height()-370)/2; if(p<0) p=0;
					if(isLarge) {p=0;}
					$("#sponsorship_layer_gallery .layer_gallery_photo_view").append('<img src="'+largeImg_plus+'" alt="" style="margin-top: '+p+'px;">');
					$("#sponsorship_layer_gallery .layer_gallery_title .layer_gallery_link .download a").eq(0).attr("href",$(".jgallery_wrap .jgallery .roll ul li", targetObj).eq(currImage-1).find("a").attr("href"));
					if(currImage==1) {$("#sponsorship_layer_gallery .direction_nav .prev").hide();$("#sponsorship_layer_gallery .direction_nav .next").show();}
					else if(currImage==allNum) {$("#sponsorship_layer_gallery .direction_nav .prev").show();$("#sponsorship_layer_gallery .direction_nav .next").hide();}
					else {$("#sponsorship_layer_gallery .direction_nav .prev").show();$("#sponsorship_layer_gallery .direction_nav .next").show();}
					$(".jgallery_wrap .jgallery .roll ul li",targetObj).eq(currImage-1).find("a").trigger('click');
					if($(".jgallery_wrap .jgallery .roll ul li",targetObj).eq(currImage).css("display")=="none") {
						viewJGallery(currImage+1);
					}
					$("#sponsorship_layer_gallery .layer_gallery_title .facebook_like").html('<iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href=http%3A%2F%2F'+encodeURIComponent(document.location.href.match(/http[s]*:\/\/([a-zA-Z0-9\-\.]*)/)[1]+$(".jgallery_wrap .jgallery .roll ul li", targetObj).eq(currImage).find("a").attr("href"))+'&amp;width=78&amp;height=21&amp;colorscheme=light&amp;layout=button_count&amp;action=like&amp;show_faces=true&amp;send=false&amp;" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:78px; height:21px;" allowTransparency="true"></iframe>');
					return false;
				});
				$("#sponsorship_layer_gallery .direction_nav .next a").css("top",b).click(function() {
					clearTimeout(autoRolling);
					$("#sponsorship_layer_gallery .layer_gallery_photo_view img").remove();
					var largeImg_plus = $(".jgallery_wrap .jgallery .roll ul li", targetObj).eq(currImage+1).find("a").attr("href");
					var isLarge = false;
					if($(".jgallery_wrap .jgallery .roll ul li", targetObj).eq(currImage+1).find("a").find("img").attr("large-img") != undefined && $(".jgallery_wrap .jgallery .roll ul li", targetObj).eq(currImage+1).find("a").find("img").attr("large-img") != "") {
						largeImg_plus = $(".jgallery_wrap .jgallery .roll ul li", targetObj).eq(currImage+1).find("a").find("img").attr("large-img");
						isLarge = true;
					}
					//var p = ($(window).height()-$("#sponsorship_layer_gallery .layer_gallery_photo_view img").height())/2; if(p<0) p=0;
					var p = ($(window).height()-370)/2; if(p<0) p=0;
					if(isLarge) {p=0;}
					$("#sponsorship_layer_gallery .layer_gallery_photo_view").append('<img src="'+largeImg_plus+'" alt="" style="margin-top: '+p+'px;">');
					$("#sponsorship_layer_gallery .layer_gallery_title .layer_gallery_link .download a").eq(0).attr("href",$(".jgallery_wrap .jgallery .roll ul li", targetObj).eq(currImage+1).find("a").attr("href"));
					if(currImage==-1) {$("#sponsorship_layer_gallery .direction_nav .prev").hide();$("#sponsorship_layer_gallery .direction_nav .next").show();}
					else if(currImage==allNum-2) {$("#sponsorship_layer_gallery .direction_nav .prev").show();$("#sponsorship_layer_gallery .direction_nav .next").hide();}
					else {$("#sponsorship_layer_gallery .direction_nav .prev").show();$("#sponsorship_layer_gallery .direction_nav .next").show();}
					$(".jgallery_wrap .jgallery .roll ul li",targetObj).eq(currImage+1).find("a").trigger('click');
					if($(".jgallery_wrap .jgallery .roll ul li",targetObj).eq(currImage).css("display")=="none") {
						viewJGallery(currImage-2);
					}
					$("#sponsorship_layer_gallery .layer_gallery_title .facebook_like").html('<iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href=http%3A%2F%2F'+encodeURIComponent(document.location.href.match(/http[s]*:\/\/([a-zA-Z0-9\-\.]*)/)[1]+$(".jgallery_wrap .jgallery .roll ul li", targetObj).eq(currImage).find("a").attr("href"))+'&amp;width=78&amp;height=21&amp;colorscheme=light&amp;layout=button_count&amp;action=like&amp;show_faces=true&amp;send=false&amp;" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:78px; height:21px;" allowTransparency="true"></iframe>');
					return false;
				});
				$("#sponsorship_layer_gallery .layer_gallery_photo_view img").css("margin-top",p);
				var slidePlaying = false;
				$("#sponsorship_layer_gallery .btn_slideshow").css("opacity",1).animate({opacity:0.3},1500,function() {
					slideToggle();
				});
				function slideToggle() {
					if(slidePlaying) {
						$("#sponsorship_layer_gallery .btn_slideshow").css("opacity",1).unbind("click").unbind("mouseenter").unbind("mouseleave").bind("click", function() {
							slidePlaying = false;
							clearTimeout(autoRolling);
							clearTimeout(autoRolling_Large);
							slideToggle();
						});
					} else {
						$("#sponsorship_layer_gallery .btn_slideshow").css("opacity",0.3).unbind("click").bind("click", function() {
							slidePlaying = true;
							autoRolling_Large = setTimeout(autoRollingFun_Large, 3000);
							slideToggle();
						});
					}
				}
				$("#sponsorship_layer_gallery .layer_gallery_close a").unbind("click").bind("click",function() {
					$("#wrap").css("position","static");
					$('html,body').animate({scrollTop:t}, {duration:100});
					$("#sponsorship_layer_gallery").empty().hide();
					return false;
				});
				//$('html,body').animate({scrollTop:$(window).scrollTop()-sNaviH});
				return false;
			});
		}

		// select category
		$(".sponsorship_search .jqTransformSelectWrapper ul li a", targetObj).click(function(){
			var category = $(".sponsorship_search .jqTransformSelectWrapper select.jqTransformHidden option", targetObj).eq($(this).parent().index()).attr("value");
			if(category == "all") makeHTML("all", targetObj);
			else makeHTML(category, targetObj);
			// 초기화 함수 필요한지 확인할것.
			return false;
		});

		function snsShare(va,va2) {
			var url = document.location.href;
			var pic = $(".jgallery_wrap .jgallery .roll ul li", targetObj).eq(currImage).find("a").attr("href");
			if(va2=="large") pic = $("#sponsorship_layer_gallery .layer_gallery_photo_view img").attr("src");
			if(pic.indexOf("http")==-1) pic=document.location.protocol+"//"+document.location.host+pic;
			//var tit = encodeURIComponent($("head title").html());
			var desc = encodeURIComponent($("meta[name='description']").attr("content"));
			if(va=="facebook") {
				FB.ui({
					method: 'feed',
					picture: pic,
					link : url
				});
				/*FB.ui({
					method: 'feed',
					link: url,
					picture: pic,
					name: tit,
					description: desc
				}, function(response){});*/
			} else if (va=="twitter") {
				//window.open("http://twitter.com/share?url="+url+"&text="+tit,"");
				window.open("http://twitter.com/share?url="+url+"&text=");
			} else if (va=="google") {
				window.open('https://plus.google.com/share?url='+url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
			} else if (va=="pinterest") {
				//var str = "http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(url) + "&media=" + pic + "&description=" + tit;
				var str = "http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(url) + "&media=" + pic + "&description=";
				window.open(str, "_blank");
			}
			return false;
		}
		
		function viewJGallery(va) {
			if(allNum>4) {
				if(va < allNum-2) $(".jgallery_wrap .jgallery .roll ul",targetObj).css("margin-left",-1*thumbnailWidth*(va-1));
				else  $(".jgallery_wrap .jgallery .roll ul",targetObj).css("margin-left",-1*thumbnailWidth*(allNum-3));
			}
			if(va==1) {
				$(".arr_left",targetObj).addClass("dim").find("a").removeAttr("href");
			} else {
				$(".arr_left",targetObj).removeClass("dim").find("a").attr("href","#none");
				$(".arr_left a",targetObj).unbind("click").bind("click",function() {viewJGallery(va-1);});
			}
			if(va==allNum-3 || allNum<=4) {
				$(".arr_right",targetObj).addClass("dim").find("a").removeAttr("href");
			} else {
				$(".arr_right",targetObj).removeClass("dim").find("a").attr("href","#none");
				$(".arr_right a",targetObj).unbind("click").bind("click",function() {viewJGallery(va+1);});
			}
		}
		// auto Rolling 
		if(type=="photo") {
			if(allNum>1) {
				autoRolling = setTimeout(autoRollingFun, 3000);
				targetObj.hover(function(){clearTimeout(autoRolling);},function(){clearTimeout(autoRolling);autoRolling = setTimeout(autoRollingFun, 3000);})
			}
		}
		function autoRollingFun() {
			if(currImage==allNum-1) {
				$(".jgallery_wrap .jgallery .roll ul li",targetObj).eq(0).find("a").trigger('click');
				viewJGallery(1);
			} else {
				$(".jgallery_wrap .jgallery .roll ul li",targetObj).eq(currImage+1).find("a").trigger('click');
				if(currImage>3) viewJGallery(currImage-2);
				else viewJGallery(1);
			}
			autoRolling = setTimeout(autoRollingFun, 3000);
		}
		function autoRollingFun_Large() {
			if(currImage==allNum-1) {
				$(".jgallery_wrap .jgallery .roll ul li",targetObj).eq(0).find("a").trigger('click');
				viewJGallery(1);
			} else {
				$(".jgallery_wrap .jgallery .roll ul li",targetObj).eq(currImage).find("a").trigger('click');
				if(currImage>3) viewJGallery(currImage-2);
				else viewJGallery(1);
				autoRolling_Large = setTimeout(autoRollingFun_Large, 3000);
				$("#sponsorship_layer_gallery .direction_nav .next a").trigger('click');
			}
		}
	});
};
