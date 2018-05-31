var vHalf;
var hHalf;
//마스????��
$.removeMask = function() {
	$("#mask").hide();
	$("#layerPop").hide();
	showMask = 0;
	$("#moter_photo").remove();
	return false;
};
var showMask = 0;
$.flashWriter = function(el) {
	$("#mask").show();
	showMask = 1;
	var ws = $("#layerPop").width();
	var hs = $("#layerPop").height();


		$(window).resize(function(){ 
			
			vHalf = parseInt(window.innerHeight ? window.innerHeight : window.document.documentElement.clientHeight);
			hHalf = parseInt(window.innerWidth ? window.innerWidth : window.document.documentElement.clientWidth);
			layerT = vHalf / 2 + document.documentElement.scrollTop
			layerL = hHalf / 2 + document.documentElement.scrollLeft
			layerT -= hs / 2;
			layerL -= ws / 2;

			if(vHalf > 560){
				$("#layerPop").css({"top": layerT + "px"}).show();
			} else {
				$("#layerPop").css({"top": "0px"}).show();
			}
			$("#mask").css("height", $("#wrap").height());
			if(hHalf > 800){
				$("#mask").css("width", "100%");
				$("#layerPop").css({"left": layerL + "px"}).show();
			} else {
				$("#mask").css("width", "940px");
				$("#layerPop").css({"left": "0px"}).show();
			}
			if (showMask != 1)
			{
				$("#layerPop").hide();
			}
		}).resize();

	$(document).keyup(function(e) {
		if (e.keyCode == '27') {
			$.removeMask();
			$(document).unbind("keyup");
		}
	});
};

var gelleryNum,gelleryPic,gelleryTotal;
var gelleryUrl = new Array();
function gallery(number,total){
        
        var onOff = document.getElementById("imageOnOff");
        onOff.value = "on";
        
	$.flashWriter();
	gelleryNum = number;
	gelleryTotal = total;
	if (gelleryNum == gelleryTotal){
//		document.getElementById("moter_next").style.display = "none";
	} else {
//		document.getElementById("moter_next").style.display = "block";
	}
	if (gelleryNum == 1){
//		document.getElementById("moter_prev").style.display = "none";
	} else {
//		document.getElementById("moter_prev").style.display = "block";
	}

	// ?��?�??�성
//	gelleryPic = document.createElement("img");
//	gelleryPic.setAttribute('alt','');
//	gelleryPic.setAttribute('id','moter_photo');
//	gelleryPic.setAttribute('src',gelleryUrl[gelleryNum -1]);
//	document.getElementById("layerPop").getElementsByTagName("div")[0].appendChild(gelleryPic);
}

function galleryNext(){
	gelleryNum ++;
	gelleryPic.setAttribute("src",gelleryUrl[gelleryNum -1]);
	if (gelleryNum == gelleryTotal){
//		document.getElementById("moter_next").style.display = "none";
	}
	if (gelleryNum  > 1){
//		document.getElementById("moter_prev").style.display = "block";
	}
}

function galleryPrev(){
	gelleryNum --;
	gelleryPic.setAttribute("src",gelleryUrl[gelleryNum -1]);
	if (gelleryNum < gelleryTotal){
//		document.getElementById("moter_next").style.display = "block";
	}
	if (gelleryNum == 1){
//		document.getElementById("moter_prev").style.display = "none";
	}
}


