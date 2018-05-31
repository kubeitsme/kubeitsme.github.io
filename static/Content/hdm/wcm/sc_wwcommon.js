function chgInput(obj) {
	obj.className='txt';
}

function rollover (obj_img){
 var re = new RegExp('_off');
 obj_img.src = obj_img.src.replace(re,'_on');
}

function rollout (obj_img){
 var re = new RegExp('_on');
 obj_img.src = obj_img.src.replace(re,'_off');
}

function rollover2 (){
 var re = new RegExp('_off');
 
 document.getElementById("car1").src = document.getElementById("car1").src.replace(re,'_on');
 document.getElementById("car2").src = document.getElementById("car2").src.replace(re,'_on');
}

function rollout2 (){
 var re = new RegExp('_on');
 document.getElementById("car1").src = document.getElementById("car1").src.replace(re,'_off');
 document.getElementById("car2").src = document.getElementById("car2").src.replace(re,'_off');
}


var lastLayer ="";
function layer_open(name){
	if(document.getElementById(name).style.display != "none"){
		document.getElementById(name).style.display = "none"
	}
	else{
		document.getElementById(name).style.display = ""
		if(lastLayer != "" && name != lastLayer){
			document.getElementById(lastLayer).style.display = "none";
		}
		lastLayer = name;
	}
}

function dd_toggle(dl_obj){
	var dd_object = dl_obj.getElementsByTagName('dd');
	
	if (dd_object[0].style.display == 'block'){
		dd_object[0].style.display = 'none';
		dl_obj.getElementsByTagName('span')[0].className = 'btn';
	}else{
		dd_object[0].style.display = 'block';
		dl_obj.getElementsByTagName('span')[0].className = 'btn_m';
	}
}

function showMenu(id){
	//document.getElementById("gnb_" + id).style.display = "block";
	//document.getElementById("m" + id).className="on";
}
function hideMenu(id){
	//document.getElementById("gnb_" + id).style.display = "none";
	//document.getElementById("m" + id).className="";
}
var _menuid = '';
function clickMenu(id){
	var menu = document.getElementById("gnb_" + id);
	if (menu.style.display =="block"){
		document.getElementById("gnb_" + id).style.display = "none";
		document.getElementById("m" + id).className="";
	} else {
			document.getElementById("gnb_" + id).style.display = "block";
			document.getElementById("m" + id).className="on";
		if (_menuid.length != 0 && _menuid != id){
			document.getElementById("gnb_" + _menuid).style.display = "none";
			document.getElementById("m" + _menuid).className="";
		}
	}
	_menuid = id;
}

// 0915 ?�정 S  
/* rolling */
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

function banner(imgView){
	bannerSec = document.getElementById("roll");
	bannerLis = bannerSec.getElementsByTagName("li");

	// imgView  
	imgTotal = bannerLis.length;

	// right button hidden 
	if(imgTotal<=5) {
		document.getElementById("arr_right").getElementsByTagName("a")[0].removeAttribute("href");
		document.getElementById("arr_right").getElementsByTagName("img")[0].src="../worldwide/images/experience/arr_right2_off.html";
	}
	
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
// 0916 ?�정

function ucc(url,w,h){
	var uccStr=
	"<object classid='clsid:02bf25d5-8c17-4b23-bc80-d3488abddc6b' codebase='http://www.apple.com/qtactivex/qtplugin.cab' id='mplayer' width='"+ w +"' height='"+ h +"' >"+
	"	<param name='src' value='"+ url +"' />"+
	"	<param name='autoplay' value='true' />"+
	"	<embed src='"+ url +"' type='image/x-macpaint' pluginspage='http://www.apple.com/quicktime/download' id='mplayer' width='"+ w +"' height='"+ h +"' autoplay='true'></embed>"+
	"</object>";
	document.write(uccStr);
}

var mplay_n = 1;
 function mplay(){
	 /*
	document.getElementById('layer_ucc').style.display='block';
	if (mplay_n != 1){
		document.getElementById('mplayer').Play();
	}
	mplay_n++;
	*/
}
function mstop(){
	document.getElementById('layer_ucc').style.display='none';
	document.getElementById('mplayer').Stop();
}

function pop_upl(url,name,w,h) {
    window.open(url,name,'status=no,scrollbars=no,top=400,right=100,width='+ w +',height='+ h +',resizable=no,directories=no,location=no,menubar=no,toolbar=no');
	return false;
}

/* euro gallery */
$(document).ready(function(e){
	//euro movie
	var $euroMovie = $('#euro_movie');
	var $emBtn = $euroMovie.find('.move_list a');
	slideList($euroMovie);
});

function slideList(obj){
	var $moveList = obj.find('.move_list');
	var $moveListBtn = $moveList.find('a');
	var $btn = obj.find('.btn');
	if($moveListBtn.length > 4){
		$btn.eq(0).css({'cursor':'default','background-image':'url(/worldwide/images/experience/arr_s_left_off.gif)'})
		$moveList.width($moveListBtn.length*135).attr('view',1);
		var viewLength = Math.ceil($moveListBtn.length/4);
		$btn.click(function(e) {
			if($(this).hasClass('btn_prev') == true){
				var viewNum = eval(obj.find('.move_list').attr('view'))-1;
				if(viewNum==0) return false;
			} else {
				var viewNum = eval(obj.find('.move_list').attr('view'))+1;
				if(viewNum>viewLength) return false;
			};
			$btn.eq(0).css({'cursor':'pointer','background-image':'url(/worldwide/images/experience/arr_s_left.gif)'});
			$btn.eq(1).css({'cursor':'pointer','background-image':'url(/worldwide/images/experience/arr_s_right.gif)'});
			if(viewLength == viewNum) {
				$btn.eq(1).css({'cursor':'default','background-image':'url(/worldwide/images/experience/arr_s_right_off.gif)'})
			} else if(viewNum==1){
				$btn.eq(0).css({'cursor':'default','background-image':'url(/worldwide/images/experience/arr_s_left_off.gif)'})
			};
			$moveList.attr('view',viewNum).stop().animate({'left':-(135*4)*(viewNum-1)},'slow');
			return false;
		});
	}else{
		$btn.eq(0).css({'cursor':'default','background-image':'url(/worldwide/images/experience/arr_s_left_off.gif)'});
		$btn.eq(1).css({'cursor':'default','background-image':'url(/worldwide/images/experience/arr_s_right_off.gif)'});
		$btn.click(function(e){return false;});
	};
};
