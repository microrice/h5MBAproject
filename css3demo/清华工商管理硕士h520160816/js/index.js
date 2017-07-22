$().ready(function(){
   var _init={};
   _init.image=new Image();
   _init.image.src="img/sybg-01.jpg";
   _init.image.onload=function(){
       var guide=$("#guide .guidebg");
        var width=guide.width();
      /*  var window_width=$(window).width();*/
        var left=-width/2+"px";
        /* guide.css("margin-left",left);*/
       
    setTimeout(function(){
     /* guide.css("left","50%");*/
       guide.addClass("pageOneBg");
    }, 3000);

}

$(".menu").on('click',function(){
  var theF=$(this);
  var bool= theF.hasClass("active");
  if (bool) {
     theF.removeClass("active");

 }else{
     theF.addClass("active");
 }
});
/*处理导航栏高度*/
function nListsHeight(){
  var wHeight=$(window).height();
  var nLists=$(".nav .lists");
  nLists.height(wHeight-50-66);
  var li=nLists.find("li");
  var a=li.find("a");
  a.height(li.height());
}
nListsHeight();
window.onresize =nListsHeight;


$(".lts").click(function(){
  var num=parseInt($(this).attr('data-num'));
  swiper.slideTo(num,1000,false);
});

	/*
URL: http://m.amap.com/navi/?dest=116.332248,40.000043&destName=清华大学经济管理学院&hideRouteIcon=&key=7f8833509a27789aab52b3df0b4b8699
	mySwiper.activeIndex
	onSlideChangeEnd
	*/
/*function iframeHeader(){
    debugger;
    $("#map").find(".header").css("display","none");
}
iframeHeader();
*/

});
function play_music(){
    if ($('#mc_play').hasClass('on')){
        $('#mc_play audio').get(0).pause();
        $('#mc_play').attr('class','stop');
    }else{
        $('#mc_play audio').get(0).play();
        $('#mc_play').attr('class','on');
    }
    $('#music_play_filter').hide();
        event.stopPropagation(); //阻止冒泡 
    }
    function just_play(id){
        $('#mc_play audio').get(0).play();
        $('#mc_play').attr('class','on');
        if (typeof(id)!='undefined'){
            $('#music_play_filter').hide();
        }
        event.stopPropagation(); //阻止冒泡 
    } 
    function is_weixn(){
        return false;
        var ua = navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i)=="micromessenger") {
            return true;
        } else {
            return false;
        }
    }
   /* var play_filter=document.getElementById('music_play_filter');
    play_filter.addEventListener('click', function(){
        just_play(1);
    });
    play_filter.addEventListener('touchstart', function(){
        just_play(1);
    });
    play_filter.addEventListener('touchend', function(){
        just_play(1);
    });
    play_filter.addEventListener('touchmove', function(){
        just_play(1);
    });
    play_filter.addEventListener('mousedown', function(){
        just_play(1);
    });
    play_filter.addEventListener('mouseup', function(){
        just_play(1);
    });
    play_filter.addEventListener('mousemove',function(){
        just_play(1);
    });*/
    window.onload=function(){
        if (!is_weixn()){
            just_play();
        }
    } 