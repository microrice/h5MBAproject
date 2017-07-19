
        var move = {};


        move.init = function(){
            move.resize(); //设置每屏动画
            move.music(); //音乐控制器
            move.events(); //配置事件
            move.move1();
        };

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
              $("#music").removeClass("opnone");

              move.timeline1.play();
              if( move.timeline2 ){
                  move.timeline2.tweenTo("pages2");
                  move.timeline2.seek(0,true);
              };
              if(move.timeline9){
                  move.timeline9.tweenTo("pages9");
                  move.timeline9.seek(0,true);
              };
            };
            if(currentSlide == 1){
              $("#music").addClass("opnone");

              move.timeline1.tweenTo("pages1");
              move.timeline1.seek(0,false);

              move.move2();//执行动画二

              if(move.timeline3){
                move.timeline3.tweenTo("pages3");
                move.timeline3.seek(0,true);
              };
              
            };
            if(currentSlide == 2){
              if( move.timeline2 ){
                  move.timeline2.tweenTo("pages2");
                  move.timeline2.seek(0,true);
              };
              
              move.move3();//执行动画三
            
            };
           if(currentSlide == 3){
             if(move.timeline3){
                move.timeline3.tweenTo("pages3");
                move.timeline3.seek(0,true);
              };
            move.move4();
            if(move.timeline5){
              move.timeline5.tweenTo("pages5");
              move.timeline5.seek(0,true);
            };
           };
           if(currentSlide == 4){
            move.move5();
                if(move.timeline6){
                  move.timeline6.tweenTo("pages6");
                  move.timeline6.seek(0,true);
                };
            };
           if(currentSlide == 5){
             if(move.timeline5){
                move.timeline5.tweenTo("pages5");
                move.timeline5.seek(0,true);
              };
            move.move6();
                if(move.timeline7){
                  move.timeline7.tweenTo("pages7");
                  move.timeline7.seek(0,true);
                };
            };
           if(currentSlide == 6){
               if(move.timeline6){
                  move.timeline6.tweenTo("pages6");
                  move.timeline6.seek(0,true);
                };
            move.move7();
            if(move.timeline8){
                  move.timeline8.tweenTo("pages8");
                  move.timeline8.seek(0,true);
             };
            }
            if(currentSlide == 7){
              if(move.timeline7){
                  move.timeline7.tweenTo("pages7");
                  move.timeline7.seek(0,true);
                };
                move.move8();
                if(move.timeline9){
                  move.timeline9.tweenTo("pages9");
                  move.timeline9.seek(0,true);
                };
            };
            if(currentSlide == 8){
              $("#music").addClass("opnone");
              if(move.timeline8){
                  move.timeline8.tweenTo("pages8");
                  move.timeline8.seek(0,true);
              };
              move.move9();

              move.timeline1.tweenTo("pages1");
              move.timeline1.seek(0,false);
            };
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
        };
        
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
        };

       //配置第三页动画
        
        move.move3= function(){
          move.timeline3 = new TimelineMax();
          move.timeline3.add("pages3")//添加状态
          move.timeline3.to(".third_squire1",.5,{opacity:1,left:"11%"},0);                 
          move.timeline3.to(".third_01",.5,{opacity:1,left:"13%"},.3);                    
          move.timeline3.to(".third_line1",.5,{opacity:1,left:"14%"},.3);   
          move.timeline3.to(".third_text1_bg",.6,{opacity:1,left:"27%"},.5); 
          move.timeline3.to(".third_text1",.6,{opacity:1,left:"33%"},.6);   

          move.timeline3.to(".third_02",.5,{opacity:1,left:"13%"},.8);                    
          move.timeline3.to(".third_line2",.5,{opacity:1,left:"14%"},.9);   
          move.timeline3.to(".third_text2_bg",.6,{opacity:1,left:"27%"},1.1); 
          move.timeline3.to(".third_squire2",.5,{opacity:1,left:"11%"},1.1);   
          move.timeline3.to(".third_text2",.6,{opacity:1,left:"33%"},1.1); 

        };

        //配置第四页动画
        
        move.move4= function(){
          move.timeline4 = new TimelineMax();
          move.timeline4.add("pages4")//添加状态
          move.timeline4.to(".fourth_apply_text",0,{onComplete:function(){
                $(".fourth_apply_text").addClass('flipInX' + ' animated infinite');//添加class动画
                setTimeout(function(){$(".fourth_apply_text").removeClass('flipInX'+ ' animated infinite')},900);//清理动画
          }},0);


        };

        //配置第五页动画
        
        move.move5= function(){
          move.timeline5 = new TimelineMax();
          move.timeline5.add("pages5")//添加状态
          move.timeline5.to(".fifth_bg",0,{onComplete:function(){
                $(".fifth_bg").addClass('bounceIn' + ' animated infinite');//添加class动画
                setTimeout(function(){$(".fifth_bg").removeClass('bounceIn'+ ' animated infinite')},900);//清理动画
          }},0);
          move.timeline5.to(".fifth_text2",0,{onComplete:function(){
                $(".fifth_text2").addClass('bounceIn' + ' animated infinite');//添加class动画
                setTimeout(function(){$(".fifth_text2").removeClass('bounceIn'+ ' animated infinite')},900);//清理动画
          }},.6);
          move.timeline5.to(".fifth_text1",.5,{opacity:1},.7); 

        };
        //配置第六页动画
        
        move.move6= function(){
          move.timeline6 = new TimelineMax();
          move.timeline6.add("pages6")//添加状态
          move.timeline6.to(".sixth_bg2",.5,{opacity:1,left:"0%"},0); 
          move.timeline6.to(".sixth_text1",.5,{opacity:1,left:"9%"},.2); 
          move.timeline6.to(".sixth_text2",.5,{opacity:1,left:"9%"},.4); 
          move.timeline6.to(".sixth_text3",.5,{opacity:1,left:"9%"},.6); 
          move.timeline6.to(".sixth_text4",.5,{opacity:1,left:"59%"},.8); 
          move.timeline6.to(".sixth_text5",.5,{opacity:1,left:"59%"},1); 
          move.timeline6.to(".sixth_text6",.5,{opacity:1,left:"59%"},1.2); 
        };

       //配置第七页动画
        
        move.move7= function(){
          move.timeline7 = new TimelineMax();
          move.timeline7.add("pages7")//添加状态
          move.timeline7.to(".seven_text1",.5,{opacity:1,left:"55%"},0); 
          move.timeline7.to(".seven_text2",.5,{opacity:1,left:"7%"},.2); 
          move.timeline7.to(".seven_text3",.5,{opacity:1,left:"6%"},.4); 
          move.timeline7.to(".seven_text4",.5,{opacity:1,left:"6%"},.6); 
          move.timeline7.to(".seventh_number",.5,{opacity:1},.7);
          move.timeline7.to(".seven_png",1,{opacity:1},.8); 
        };

       //配置第八页动画
        
        move.move8= function(){
          move.timeline8 = new TimelineMax();
          move.timeline8.add("pages8")//添加状态
          move.timeline8.to(".eighth_bg",.8,{opacity:1},0); 
          move.timeline8.to(".eighth_text1",.5,{opacity:1,left:"5%"},.2); 
          move.timeline8.to(".eighth_text2",.5,{opacity:1,left:"5%"},.3); 
          move.timeline8.to(".eighth_text3",.8,{opacity:1,left:"63%"},.4); 
        };
       //配置第九页动画
        
        move.move9= function(){
          move.timeline9 = new TimelineMax();
          move.timeline9.add("pages9")//添加状态
          move.timeline9.to(".ninth_Qrcode",0,{onComplete:function(){
                $(".ninth_Qrcode").addClass('scalea');//添加class动画
                setTimeout(function(){$(".ninth_Qrcode").removeClass('scalea')},1000);//清理动画
          }},0);
          move.timeline9.to(".ninth_Qrcode",.8,{opacity:1},0);

          move.timeline9.to(".ninth_Qrcode",.2,{onComplete:function(){
                $(".ninth_Qrcode").addClass('shake');//添加class动画
                setTimeout(function(){$(".ninth_Qrcode").removeClass('shake')},1000);//清理动画
          }},.3)
        };

       
           /*导航*/

        $("#open_co").click(function(){
            move.open.play();
            move.open.seek(0,true);
         });
         $("#mOrC").click(function(){
            move.close.play();
            move.close.seek(0,true);
         });
         $(".slideout li a").bind("click",function(){
            move.close.play();
            move.close.seek(0,true);
         });
         move.close = new TimelineMax();
         move.close.to(".slideout",.5,{right:"-12.8rem" },0);
         move.close.stop();
         move.open = new TimelineMax();
         move.open.to(".slideout",.5,{right:"0rem" },0);
         move.open.stop();

