
// Tab
$(document).ready(function() {
	function tabController (){
		var self = $(this),
			mother = self.parent(),
			current = mother.parent().find(".on");

		if(current.get(0) != mother.get(0)){
			mother.addClass("on");
			current.removeClass("on");

			var currentTab = current.find("a").attr("href"),
				getCurrent = $(currentTab);
			getCurrent.css("display","none");

			var href = self.attr("href"),
				getTab = $(href);
			getTab.css("display","block");
		}
		return false;
	}

	$(".design_section_1 .evolution_box .list > li a").click(tabController);
	$(".design_section_1 .evolution_box .list > li:eq(0) a").trigger("click");

	$(".design_section_2 .future_box .list > li a").click(tabController);
	$(".design_section_2 .future_box .list > li:eq(0) a").trigger("click");
});

// Video
$(document).ready(function() {
	var videoBox = $('.new_innovation .design_section_2 .video_box'),
		videoPlay = videoBox.find('.video_play');

	if($.browser.msie && $.browser.version <= 8) {
		videoPlay.find("video").css("display","none");
	} else {
		$(window).scroll(function() {
			if( $(window).scrollTop() > videoBox.offset().top - 270 ) {
				if(videoBox.data('status')) {
					videoPlay.find("video").get(0).play();
					videoPlay.find("video").bind("ended", function() {
						videoPlay.find("video").get(0).pause();
						videoPlay.find("video").css("display","none");
						videoBox.data('status',false);
					});
				}
			}
		});
	}
});

// Scroll
$(document).ready(function() {
	var designSection = $('.new_innovation .design_section_3'),
		designBg = designSection.find('.fixed_bg'),
		designBox = designSection.find('.design_box'),
		designInner = designBox.find('.design_inner'),
		designCar = designBox.find('.design_car'),
		designFirstCar = designCar.find('.img1'),
		designList1 = designBox.find('.design_list.list1'),
		designList2 = designBox.find('.design_list.list2');

	function secondEnable (currentScrollTop) {
		var secondSectionTop = designList2.offset().top,
			checkTop = currentScrollTop - (secondSectionTop - 346);

		return (checkTop > 0) ? true : false;
	}

	function firstCarMove (currentScrollTop){
		var secondSectionTop = designList2.offset().top,
			checkTop = currentScrollTop - (secondSectionTop - 346);

		designFirstCar.css('top',-checkTop);
	}

	//$(window).scroll(function() {
	//	var currentScrollTop = $(window).scrollTop();

	//	if(navigator.userAgent.indexOf('MSIE 7.0')>0) {
	//		designSection.addClass('ie7');
	//	} else {
	//		if( currentScrollTop > designInner.offset().top + 39) {
	//			designCar.addClass('fixed');
	//			designBg.css('display','block');

	//			if( secondEnable (currentScrollTop) ){
	//				firstCarMove(currentScrollTop);
	//			}else{
	//				designFirstCar.css('top','0');
	//			}
	//		}else{
	//			designCar.removeClass('fixed');
	//			designBg.css('display','none');
	//		}
	//	}
	//});
});
