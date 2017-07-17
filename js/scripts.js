
        var move = {};


        move.init = function(){
            move.resize(); //设置每屏动画
            move.music(); //音乐控制器
            move.events(); //配置事件
            move.move1();
        }

        $(document).ready(function() { move.init() });

        /*slick*/
        $('.autoplay').slick({
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            arrows: false //false隐藏左右按钮
        });
       
       //增加切换页面方法 $('.autoplay').slick('slickGoTo',"1");
        // swipe
        $('.autoplay').on('swipe', function(event, slick, direction){
          console.log(direction);
         // left
        });

        // On edge hit
        $('.autoplay').on('edge', function(event, slick, direction){
          console.log('edge was hit')
        });

        // slide change
        $('.autoplay').on('beforeChange', function(event, slick, currentSlide, nextSlide){
          //console.log(nextSlide);
        });

        $('.autoplay').on('afterChange', function(event, slick, currentSlide){
            console.log(currentSlide);
            if(currentSlide == 0){
              $("#music").removeClass("opnone")

              move.timeline1.play();
              if( move.timeline2 ){
                  move.timeline2.tweenTo("pages2")
                  move.timeline2.seek(0,true);
              }
            }
            if(currentSlide == 1){
              $("#music").addClass("opnone")

              move.timeline1.tweenTo("pages1")
              move.timeline1.seek(0,false);

              move.move2();//执行动画二
            }
            if(currentSlide == 2){
              move.timeline2.tweenTo("pages2")
              move.timeline2.seek(0,true);
              
            }
           if(currentSlide == 3){
            }
           if(currentSlide == 4){
            }
           if(currentSlide == 5){
            }
           if(currentSlide == 6){
            }
            if(currentSlide == 6){
            }
            if(currentSlide == 6){
            }
            if(currentSlide == 7){
            }
            if(currentSlide == 8){
              $("#music").addClass("opnone")

              move.timeline1.tweenTo("pages1")
              move.timeline1.seek(0,false);
            }
        });

        //音乐控制器
        move.music = function(){
              var oMusic = document.getElementById("bgmedia");
              oMusic.play();
              var onoff = false;
              $("#music")[0].onmousedown = function(){
                if( onoff ){
                      this.src = "data:image/png;base64,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"
                      onoff = false;
                      oMusic.play();  
                }else{
                      this.src = "data:image/png;base64,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"
                      onoff = true;
                      oMusic.pause();  
                };
              };
        };
      

        //配置事件
        move.events = function(){
            $(window).resize( move.resize )
        };

        move.resize = function(){
            //console.log(99)
            var oHeight = $(window).height();
            // alert(oHeight)
            var oWidth = $(window).width();
            if(oWidth>=414){
                oWidth = 414;
             }
            $(".content").css({"height":oHeight-41.6});
            $(".slick-list").css({"height":oHeight-41.6});
            $(".first").parent().css({"height":oHeight-41.6});
            $(".first_bg").css({"width":oWidth,"height":oHeight*.72,"top":oHeight-oHeight*.72});
        };

        //配置第一页动画
        
        move.move1 = function(){
          move.timeline1 = new TimelineMax();
          move.timeline1.add("pages1")//添加状态
          move.timeline1.to(".first_mba",0.3,{opacity:1,left:"27px"},0);
          move.timeline1.to(".first_mba2",0.3,{opacity:1,left:"21%"},.2);
          move.timeline1.to(".first_phbs",.5,{opacity:1,left:"27px"},.3);
          move.timeline1.to(".first_book",.5,{opacity:1,left:"63%"},.4);
          move.timeline1.to(".first_2018",.5,{opacity:1},.4);
        }
        
         //配置第二页动画
        
        move.move2= function(){
          move.timeline2 = new TimelineMax();
          move.timeline2.add("pages2")//添加状态
          move.timeline2.to(".second_bgred",.5,{opacity:1 },0);                                      
          move.timeline2.to("second_bgred",0,{onComplete:function(){
                $(".second_bgred").addClass('bounceIn' + ' animated infinite');//添加class动画
                setTimeout(function(){$(".second_bgred").removeClass('bounceIn'+ ' animated infinite')},900);//清理动画
          }},0);
          move.timeline2.to(".second_text",.5,{opacity:1},.8);
        }


    





       
           /*导航*/

        $("#open_co").click(function(){
            move.open.play()
            move.open.seek(0,true);
         })
         $("#mOrC").click(function(){
            move.close.play();
            move.close.seek(0,true);
         })
         $(".slideout li a").bind("click",function(){
            move.close.play();
            move.close.seek(0,true);
         })
         move.close = new TimelineMax();
         move.close.to(".slideout",.5,{right:"-12.8rem" },0);
         move.close.stop()
         move.open = new TimelineMax();
         move.open.to(".slideout",.5,{right:"0rem" },0);
         move.open.stop()

