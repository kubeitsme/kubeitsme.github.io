﻿jQuery.easing.motion=function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a};var isPositionFixed=1;var isMobile=0;var isIE6=0;if(navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/Windows CE/i)||navigator.userAgent.match(/Symbian/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)){isMobile=1}if(navigator.userAgent.match(/Android 1.5/i)||navigator.userAgent.match(/Android 2.1/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)){isPositionFixed=0}if(navigator.userAgent.match(/MSIE 6.0/i)){isIE6=1;isPositionFixed=0}function isTouchDevice(){try{document.createEvent("TouchEvent");return true}catch(a){return false}}function touchScroll(c){if(isTouchDevice()){if(document.getElementById(c)){var a=document.getElementById(c);var b=0;document.getElementById(c).addEventListener("touchstart",function(d){b=this.scrollTop+d.touches[0].pageY;d.preventDefault()},false);document.getElementById(c).addEventListener("touchmove",function(d){this.scrollTop=b-d.touches[0].pageY;d.preventDefault()},false)}}}function TrimString(a){if(a.split(" ").join("")==""){return false}else{return true}}$(document).ready(function(){fixedPosition();if(!location.hash||location.hash=="#wrap"||isMobile==0){fixedPositionScroll()}});$(window).load(function(a){scrollAnimation()});$(window).resize(function(c){if(isMobile==0){fixedPosition()}if($(".layer_experience_panorama .large .panorama img").is("img.panorama_large")){var a=$(".layer_experience_panorama .large .panorama img.panorama_large").width();var b=$(".layer_experience_panorama .large .panorama img.panorama_large").height();$(".layer_experience_panorama .large .panorama").css("width",$(window).width()).css("height",parseInt($(window).width()*b/a));$(".layer_experience_panorama .large .panorama img.panorama_large").css("width",$(window).width()).css("height",parseInt($(window).width()*b/a));$(".pano_loading_percent").css("left",parseInt($(".layer_experience_panorama .large .panorama").width()/2-55)+"px").css("top",parseInt($(".layer_experience_panorama .large .panorama").height()/2-50)+"px");$(".pano_loading_start").css("left",parseInt($(".layer_experience_panorama .large .panorama").width()/2-55)+"px").css("top",parseInt($(".layer_experience_panorama .large .panorama").height()/2-50)+"px")}});$(window).scroll(function(a){fixedPosition();fixedPositionScroll()});function scrollAnimation(){if(isMobile==0){$("a[href*=#wrap], a[href*=#slide_content01], a[href*=#slide_content02], a[href*=#slide_content03], a[href*=#slide_content04], a[href*=#slide_content05], a[href*=#slide_content06], a[href*=#slide_content07], a[href*=#slide_content08], area[href*=#wrap], area[href*=#slide_content01], area[href*=#slide_content02], area[href*=#slide_content03], area[href*=#slide_content04], area[href*=#slide_content05], area[href*=#slide_content06], area[href*=#slide_content07], area[href*=#slide_content08]").click(function(){if(navigator.userAgent.match(/MSIE/i)){$(this).addClass("on")}if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=$(this.hash);a=a.length&&a||jQuery("[name="+this.hash.slice(1)+"]");if(a.length){var b=a.offset().top;jQuery("html,body").animate({scrollTop:b},{duration:500,easing:"motion"});return false}else{return true}}else{return true}})}else{$("a[href*=#wrap]").click(function(){goToMyId("wrap")});$("a[href*=#slide_content01]").click(function(){goToMyId("slide_content01")});$("a[href*=#slide_content02]").click(function(){goToMyId("slide_content02")});$("a[href*=#slide_content03]").click(function(){goToMyId("slide_content03")});$("a[href*=#slide_content04]").click(function(){goToMyId("slide_content04")});$("a[href*=#slide_content05]").click(function(){goToMyId("slide_content05")});$("a[href*=#slide_content06]").click(function(){goToMyId("slide_content06")});$("a[href*=#slide_content07]").click(function(){goToMyId("slide_content07")});$("a[href*=#slide_content08]").click(function(){goToMyId("slide_content08")});$("area[href*=#wrap]").click(function(){goToMyId("wrap")});$("area[href*=#slide_content01]").click(function(){goToMyId("slide_content01")});$("area[href*=#slide_content02]").click(function(){goToMyId("slide_content02")});$("area[href*=#slide_content03]").click(function(){goToMyId("slide_content03")});$("area[href*=#slide_content04]").click(function(){goToMyId("slide_content04")});$("area[href*=#slide_content05]").click(function(){goToMyId("slide_content05")});$("area[href*=#slide_content06]").click(function(){goToMyId("slide_content06")});$("area[href*=#slide_content07]").click(function(){goToMyId("slide_content07")});$("area[href*=#slide_content08]").click(function(){goToMyId("slide_content08")});if(!location.hash||location.hash=="#wrap"){setTimeout(scrollTo,0,0,1)}else{if(location.hash=="#slide_content01"){goToMyId("slide_content01")}if(location.hash=="#slide_content02"){goToMyId("slide_content02")}if(location.hash=="#slide_content03"){goToMyId("slide_content03")}if(location.hash=="#slide_content04"){goToMyId("slide_content04")}if(location.hash=="#slide_content05"){goToMyId("slide_content05")}if(location.hash=="#slide_content06"){goToMyId("slide_content06")}if(location.hash=="#slide_content07"){goToMyId("slide_content07")}if(location.hash=="#slide_content08"){goToMyId("slide_content08")}}}}function goToMyId(a){var c=$("div[id="+a+"]");if(c.length){var b=c.offset().top;$("html,body").animate({scrollTop:b},{duration:1000,easing:"motion",complete:function(){fixedPositionScroll();changeSubmenuHighlight()}});return false}}function fixedPosition(){var a=parseInt(($(window).width()-960)/2);if(a<0){a=0}if($(window).scrollTop()>410){if(isPositionFixed==0){$(".wrap .floating_cubemenu").css("position","absolute");$(".wrap .floating_cubemenu").css("left",a+11)}else{$(".wrap .floating_cubemenu").css("position","fixed");$(".wrap .floating_cubemenu").css("left",a+11)}}else{$(".wrap .floating_cubemenu").css("position","absolute");$(".wrap .floating_cubemenu").css("left",a-1+11)}$(".wrap").css("width",$(window).width()).css("overflow","hidden");$(".objects_box").css("width",$("window").width()).css("overflow","hidden");if(a<=0){$(".prevbtn").css("left",17);$(".nextbtn").css("right",17)}if(a>100){$(".prevbtn").css("left",-100);$(".nextbtn").css("right",-100)}else{$(".prevbtn").css("left",a*-1);$(".nextbtn").css("right",a*-1)}}function fixedPositionScroll(){var a=parseInt(($(window).width()-960)/2);if(a<0){a=0}if($(window).scrollTop()>=410){if(isPositionFixed==0){$(".wrap .floating_cubemenu").css("top",$(window).scrollTop()-60)}else{$(".wrap .floating_cubemenu").css("top",0)}}else{$(".wrap .floating_cubemenu").css("top",0)}};