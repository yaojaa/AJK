function loadImg (imgArr, callback, current) {
  var total=imgArr.length;
  var c=0;
  for (var i = total - 1; i >= 0; i--) {
  var imgObj=new Image;
  var load = function(){
      c++;
      var percent=c/total;
      current.call(imgObj,percent)
      if(c == total) { callback.call(imgObj) }
  }
      imgObj.onload=load;
      imgObj.onerror=load;
      imgObj.src=imgArr[i]
  };
} 

var KKslider={};
var SwiperConfig={
  bgSound:'img/midi2.mp3',
  
}

KKslider.sliderData=[

{
bg:'img/akj1.jpg',
text:[
       {
          textValue:'中国大陆知名另类金属乐队',
          animateType:'bounceInLeft',
          delay:800,
          position:['4%','13%'],
          style:'font-size:48px;text-align:left'
        },
        {
          textValue:'玉林军喻意为玉麒麟的军队,“玉”字始于我国最古的文字，比喻和形容一切美好的人或事物。"麒麟"集中了人们珍爱的动物全部所具备的优点,它被古人视为神兽、仁兽，长寿，象征着无坚不摧的意志与信念 ',
          animateType:'bounceInRight',
          delay:800,
          position:['4%','22%'],
          style:'font-size:22px;text-align:left;padding:0 15px'
        },
        {
          textValue:'A GREAT BIG ROCK HEART',
          animateType:'bounceInUp',
          delay:1500,
          position:['4%','86%'],
          style:'font-size:44px;text-align:left'
        }
        

    ],
photo:[
      {
        src:'img/akj1_1.jpg',
        animateType:'bounceIn ',
        delay:0,
        position:['2%','3%'],
        style:'width:20%'
      }
    ]
   },

{
bg:'img/akj2.jpg',
text:[
        {
          textValue:'乐队阵容',
          animateType:'bounceInLeft',
          delay:0,
          position:['0%','0%'],
          style:'font-size:30px;background:#c00;padding:3px 10px'
        },

        {
          textValue:'主唱-袁琪',
          animateType:'rotateIn',
          position:['15%','20%'],
          delay:1000,
          style:'font-size:88px;color:#dd5e00'
        },

        {
          textValue:'英俊潇洒，就是脸大!',
          animateType:'bounceInLeft',
          position:['15%','34%'],
          delay:2000,
          style:''
        },
         {
          textValue:'声音磁性爆发强！',
          animateType:'bounceInRight',
          position:['40%','40%'],
          delay:2500,
          style:''
        },
        {
          textValue:'坚定你的信念,并跟随你的梦想.',
          animateType:'bounceInRight',
          position:['10%','50%'],
          delay:3500,
          style:'font-size:40px'
        },
        {
          textValue:'那么任何地狱都不能阻止',
          animateType:'bounceInLeft',
          position:['5%','60%'],
          delay:4000,
          style:'font-size:42px'
        },
          {
          textValue:'你们的前进!!!',
          animateType:'bounceInUp',
          position:['20%','69%'],
          delay:4200,
          style:'font-size:76px;'
        }


       
    ],
photo:[
      {
        src:'img/icon1.png',
        animateType:'bounceInUp',
        delay:6000,
        position:['5%','82%'],
        style:'width:20%'
      },
      {
        src:'img/icon1.png',
        animateType:'bounceInUp',
        delay:6200,
        position:['30%','82%'],
        style:'width:20%'
      },
      {
        src:'img/icon1.png',
        animateType:'bounceInUp',
        delay:6400,
        position:['50%','82%'],
        style:'width:20%'
      },
      {
        src:'img/icon1.png',
        animateType:'bounceInUp',
        delay:6500,
        position:['75%','82%'],
        style:'width:20%'
      }
     
    ]
   },

   {
bg:'img/akj3.jpg',
text:[
       {
          textValue:'乐队阵容',
          animateType:'bounceInLeft',
          delay:0,
          position:['0%','0%'],
          style:'font-size:30px;background:#c00;padding:3px 10px'
        },

        {
          textValue:'Sampler-肖迪',
          animateType:'rotateIn',
          position:['5%','25%'],
          delay:1000,
          style:'font-size:88px;color:#dd5e00'
        },

        {
          textValue:'魔鬼的面孔!',
          animateType:'bounceInLeft',
          position:['25%','44%'],
          delay:2000,
          style:''
        },
        
        {
          textValue:'妖娆的身姿！',
          animateType:'bounceInRight',
          position:['10%','50%'],
          delay:3500,
          style:'font-size:45px'
        },
         {
          textValue:'让女人为之疯狂！',
          animateType:'bounceInRight',
          position:['40%','60%'],
          delay:5000,
          style:''
        },
        {
          textValue:'内心纯爷们！',
          animateType:'bounceInLeft',
          position:['5%','66%'],
          delay:5000,
          style:'font-size:32px'
        },
          {
          textValue:'来!!帅哥,合个影！',
          animateType:'bounceInUp',
          position:['5%','75%'],
          delay:5500,
          style:'font-size:66px;'
        }


       
    ],
photo:[
      {
        src:'img/icon1.png',
        animateType:'bounceInUp',
        delay:6200,
        position:['15%','85%'],
        style:'width:20%'
      }
     
    ]
   },

      {
bg:'img/akj4.jpg',
text:[
        {
          textValue:'乐队阵容',
          animateType:'bounceInLeft',
          delay:0,
          position:['0%','0%'],
          style:'font-size:30px;background:#c00;padding:3px 10px'
        },
     
        {
          textValue:'吉他手-吴彦澍',
          animateType:'rotateIn',
          position:['3%','5%'],
          delay:1000,
          style:'font-size:80px;color:#dd5e00'
        },

        {
          textValue:'“现实” 就TM是一个 Bitch！',
          animateType:'bounceInLeft',
          position:['5%','60%'],
          delay:1500,
          style:'font-size:48px'
        },

        {
          textValue:'做音乐如同做人',
          animateType:'bounceInLeft',
          position:['15%','34%'],
          delay:2000,
          style:''
        },
         {
          textValue:'不断的突破与创新 才是生存的王道！',
          animateType:'bounceInRight',
          position:['5%','40%'],
          delay:2500,
          style:''
        },
        {
          textValue:'让暴雨来洗礼这些罪孽！',
          animateType:'bounceInRight',
          position:['10%','50%'],
          delay:3500,
          style:'font-size:40px'
        },
      
          {
          textValue:'喜欢在家装聋子，出门装哑巴!!',
          animateType:'bounceInUp',
          position:['2%','75%'],
          delay:5000,
          style:'font-size:40px;'
        }


       
    ],
photo:[
      {
        src:'img/icon1.png',
        animateType:'bounceInLeft',
        delay:6000,
        position:['8%','15%'],
        style:'width:20%'
      }
     
    ]
   },

      {
bg:'img/akj5.jpg',
text:[
       {
          textValue:'乐队阵容',
          animateType:'bounceInLeft',
          delay:0,
          position:['0%','0%'],
          style:'font-size:30px;background:#c00;padding:3px 10px'
        },

        {
          textValue:'鼓手-申子俊',
          animateType:'rotateIn',
          position:['15%','10%'],
          delay:1000,
          style:'font-size:88px;color:#dd5e00'
        },

        {
          textValue:'北朝鲜神童鼓手!',
          animateType:'bounceInLeft',
          position:['30%','24%'],
          delay:2000,
          style:''
        },
         {
          textValue:'前零壹乐队、现玉麟军、ice moon鼓手',
          animateType:'bounceInRight',
          position:['5%','40%'],
          delay:2500,
          style:''
        },
        {
          textValue:'恨世嫉俗,喜欢爆自己的头！',
          animateType:'bounceInRight',
          position:['23%','50%'],
          delay:3500,
          style:'font-size:40px'
        },
          {
          textValue:'学鼓就来绝对打击乐！',
          animateType:'bounceInUp',
          position:['2%','75%'],
          delay:4800,
          style:'font-size:58px;'
        },
        {
          textValue:'<a href="http://weibo.com/qjselu01">-->来！访问申子俊微博  </a>',
          animateType:'bounceInLeft',
          position:['5%','60%'],
          delay:4000,
          style:'font-size:32px'
        },


       
    ],
photo:[
      {
        src:'img/icon1.png',
        animateType:'bounceInUp',
        delay:5500,
        position:['55%','65%'],
        style:'width:20%'
      }
     
    ]
   }
,

{
bg:'img/akj6.jpg',
text:[
        {
          textValue:'现场英姿',
          animateType:'bounceInLeft',
          delay:0,
          position:['0%','0%'],
          style:'font-size:30px;background:#c00;padding:3px 10px'
        },
        {
          textValue:'我来唱你来和! ',
          animateType:'rotateIn',
          delay:500,
          position:['60%','18%'],
          style:'font-size:32px'
        },
        {
          textValue:'让世界听到我们的歌! ',
          animateType:'bounceInRight',
          delay:1300,
          position:['45%','24%'],
          style:'font-size:32px'
        }
       
    ]
}
,

{
bg:'img/akj7.jpg',
text:[
        {
          textValue:'现场英姿',
          animateType:'bounceInLeft',
          delay:0,
          position:['0%','0%'],
          style:'font-size:30px;background:#c00;padding:3px 10px'
        },
        {
          textValue:'纵然时间流逝会冲淡我们记忆！ ',
          animateType:'rotateIn',
          delay:900,
          position:['19%','18%'],
          style:'font-size:32px'
        }
       
    ]
}

,

{
bg:'img/akj8.jpg',
text:[{
          textValue:'现场英姿',
          animateType:'bounceInLeft',
          delay:0,
          position:['0%','0%'],
          style:'font-size:30px;background:#c00;padding:3px 10px'
        },
        {
          textValue:'纵然年华老去会带走我们的身体！ ',
          animateType:'bounceIn',
          delay:800,
          position:['7%','83%'],
          style:'font-size:36px'
        }
       
    ]
}
,

{
bg:'img/akj9.jpg',
text:[
        {
          textValue:'我会留在原地',
          animateType:'rotateIn',
          delay:300,
          position:['65%','51%'],
          style:'font-size:32px'
        },
         {
          textValue:'不会放弃！',
          animateType:'rotateIn',
          delay:900,
          position:['65%','60%'],
          style:'font-size:32px'
        },
        {
          textValue:'依然唱着属于我们的歌！',
          animateType:'bounceIn',
          delay:1500,
          position:['42%','66%'],
          style:'font-size:32px'
        }

        
       
    ]
}
,

{
bg:'img/akj10.jpg',
text:[
        {
          textValue:'直到世界最后的尽头！ ',
          animateType:'bounceIn-slow',
          delay:200,
          position:['3%','20%'],
          style:'font-size:60px'
        },
         {
          textValue:'翻过了青春才发现你流连过的篇章永不凋谢!<br/>捱过了四季才明白你就是我追随不落的日月! ',
          animateType:'bounceIn-slow',
          delay:3000,
          position:['3%','50%'],
          style:'font-size:18px'
        },

        {
          textValue:'设计制作：玉麟军FANS 红叶舞秋山（微信:yaojaa）纯属娱乐 以上言论只代表个人，时间原因先到这里！',
          animateType:'bounceInLeft',
          delay:1500,
          position:['0%','95%'],
          style:'font-size:12px; background:#000; padding:10px'
        },

        {
          textValue:'<a href="http://weibo.com/rockajk">-->玉麟军官方微博</a>',
          animateType:'bounceInLeft',
          delay:3500,
          position:['0%','65%'],
          style:'font-size:18px; background:#000; padding:10px'
        },
         {
          textValue:'<a href="http://site.douban.com/ajk/">-->玉麟军豆瓣小站</a>',
          animateType:'bounceInLeft',
          delay:3500,
          position:['0%','75%'],
          style:'font-size:18px; background:#000; padding:10px'
        },

       
    ],
  photo:[
      {
        src:'img/icon3.png',
        animateType:'rotate360',
        delay:1000,
        position:['5%','5%'],
        style:'width:20%'
      }
  
  ]  
},
{
bg:'img/akj11.jpg',
text:[
        {
          textValue:'THE END',
          animateType:'bounceIn-slow',
          delay:000,
          position:['10%','15%'],
          style:'font-size:60px;color#c00'
        }
        ]
}        
]

  //解析配置文件

  KKslider.init = function(){

    loadImg(['img/page.png','img/audio-on.png','img/akj11.jpg','img/audio-off.png','img/gua-font.jpg','img/gua-bg.jpg','img/akj1.jpg','img/akj2.jpg','img/akj3.jpg','img/akj4.jpg','img/akj5.jpg','img/akj6.jpg','img/akj7.jpg','img/akj8.jpg','img/akj9.jpg','img/akj10.jpg'],
      function(){
       $('#loading').hide();
       KKslider.setScrach();
       KKslider.playMusic()

    }
    ,function(percent){
      var percent=percent*100+'%';
      $('#loading').find('span').css({
        width:percent
      })

    })



  }

  //创建涂抹

   KKslider.setScrach = function(){
    //创建刮刮卡dom
     $('<div class="swiper-slide"><div id="scrach"></div></div>').prependTo('.swiper-wrapper');
     $('#scrach').Scratch({
                    fontImg:'img/gua-font.jpg',
                    bgImg :'img/gua-bg.jpg',
                    percent:0.8,
                    callback:function(){
                      $('#scrach').addClass('bounceIn');
                      KKslider.setSwiper();
                      $('#page').show();
                    }
                  })
   }



   KKslider.playMusic=function(){

     var isplay;
    var audio = document.createElement("audio");
        audio.src =SwiperConfig.bgSound;
        audio.autobuffer=true;
        audio.play();

        audio.addEventListener("canplaythrough", function () {
            isplay=true;
           $('#music').show().addClass('on').on('touchstart',function(){
                       if(isplay){ 
                      //audio.currentTime = 0;
                      $(this).removeClass('on').addClass('off');
                      isplay=false;
                      audio.pause();
                      }
                       else{
                      $(this).removeClass('off').addClass('on');
                      audio.play();
                       isplay=true
                      }

           });
          
        }, false); 
        audio.addEventListener('ended', function () {
        setTimeout(function () { audio.play(); }, 500);
        }, false);

  

   }

  

        
  
  KKslider.setSwiper = function(){
       var $swiperWrapper=$('.swiper-wrapper');
       $.each(KKslider.sliderData,function(k,v){
       var $swiperSlide=$('<div class="swiper-slide"></div>');
            //写入文字
            $(v.text).each(function(k,text){
                $('<h1 rel="anim" delay="'+text.delay+'" animateType="'+text.animateType+'" style="'+text.style+'">')
                .css({
                  left:text.position[0],
                  top :text.position[1]
                })
                .html(text.textValue)
                .appendTo($swiperSlide)
                  
            })
             //写入图片
            $(v.photo).each(function(k,photo){
                $('<img rel="anim" delay="'+photo.delay+'" animateType="'+photo.animateType+'" style="'+photo.style+'">')
                .css({
                  left:photo.position[0],
                  top :photo.position[1]
                })
                .attr('src',photo.src)
                .appendTo($swiperSlide)
                  
            })

       $swiperSlide.css({
         background:'url('+v.bg+')',
         backgroundSize:'cover',
         backgroundRepeat:'no-repeat',
         backgroundPosition:'center center',
       }).appendTo($swiperWrapper);
       })

      $swiperWrapper.appendTo($('.swiper-container'));
        (function(){
         if($('.swiper-wrapper').size()>0){
          var swiperEg= $('.swiper-container').swiper({
                mode: 'vertical',
                onSlideChangeEnd:function(){
                  //删除所有class
                  $('.swiper-slide').find('[rel="anim"]').each(function(){
                    $(this).removeClass();
                  })
                  var cIndex=swiperEg.activeIndex;
                  $('.swiper-slide').eq(cIndex).find('[rel="anim"]').each(function(){
                    var _$this=$(this);
                    var className=$(this).attr('animateType');
                    var delay=$(this).attr('delay') || 0;

                    setTimeout(function(){
                      _$this.addClass(className);
                    },delay)
                  }) 
                }
              })
          }
          else{
            window.setTimeout(aguments.callee,10)
          }
        })()


  }      

//微信分享
var imgUrl = 'http://atomstone.com/fileuploads/ajk/img/akj9.jpg';  
var lineLink = 'http://atomstone.com/fileuploads/ajk/';  
var descContent = "翻过了青春才发现你流连过的篇章永不凋谢,捱过了四季才明白你就是我追随不落的日月";  
var shareTitle = '他们是玉麒麟的军队';  
  
function shareFriend() {  
    WeixinJSBridge.invoke('sendAppMessage',{  
                            "img_url": imgUrl,  
                            "img_width": "640",  
                            "img_height": "640",  
                            "link": lineLink,  
                            "desc": descContent,  
                            "title": shareTitle  
                            }, function(res) {  
                            _report('send_msg', res.err_msg);  
                            })  
}  
function shareTimeline() {  
    WeixinJSBridge.invoke('shareTimeline',{  
                            "img_url": imgUrl,  
                            "img_width": "640",  
                            "img_height": "640",  
                            "link": lineLink,  
                            "desc": descContent,  
                            "title": shareTitle  
                            }, function(res) {  
                            _report('timeline', res.err_msg);  
                            });  
}  
function shareWeibo() {  
    WeixinJSBridge.invoke('shareWeibo',{  
                            "content": descContent,  
                            "url": lineLink,  
                            }, function(res) {  
                            _report('weibo', res.err_msg);  
                            });  
}  
// 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。  
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {  
  
        // 发送给好友  
        WeixinJSBridge.on('menu:share:appmessage', function(argv){  
            shareFriend();  
            });  
  
        // 分享到朋友圈  
        WeixinJSBridge.on('menu:share:timeline', function(argv){  
            shareTimeline();  
            });  
  
        // 分享到微博  
        WeixinJSBridge.on('menu:share:weibo', function(argv){  
            shareWeibo();  
            });  

        }, false);  


 
  
    



