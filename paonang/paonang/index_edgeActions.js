/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
        
        //alert(location.href)
         sym.$("Symbol_3").css("opacity","0")
         /*
         setTimeout(function(){
                  		// 播放音轨。		
         		// Play an audio track 
         		sym.getSymbol("music2").$("music3")[0].play();  	
        
         },100); */
        
        /* if(mus == 1){
        
         	$('body').click(function(){
        
         		sym.getSymbol("music2").$("music3")[0].play();  
         	})
         	mus++;
         }
         */
        
         // Hide an element 
         sym.getSymbol("music2").$("music_stop2").hide();
         sym.getSymbol("music2").$("music").show();
         $('.pall').css("opacity","0")
        
         function init(){
                           	w=$(window).width();//获取浏览器宽
                           	h=$(window).height();//获取浏览器高
                           	bl=h/w
                           	//alert(bl)
                           	w1=w/750;//宽的比例
                           	h1=h/1334;//高的比例
                           	wxx=(w-750)/2;//X坐标位置
                           	wy=(h-1334)/2; //y坐标位置
                           	//判断比例
                           	if(w1<h1){
                           		w0=h1;
                           		h0=w1;
                           	}else{
                           		w0=w1;
                           		h0=h1;
                           	}
                           //	$(".follow").css('left',wxx).css('top',wy).css('transform','scale('+w0+','+w0+')');
                            sym.$("Symbol_1").css('left',wxx).css('top',wy).css('transform','scale('+w0+','+w0+')');
                           	sym.$("Symbol_2").css('left',wxx).css('top',wy+h).css('transform','scale('+w0+','+w0+')');
                           	sym.$("Symbol_4").css('left',wxx).css('top',wy).css('transform','scale('+w0+','+w0+')');
        
							//alert(1)
                           }                               
                           init();
                           window.onresize=function(){ 
                  				init();  
                  			}
							var hei = sym.getSymbol("Symbol_1").$("input").height();
							var wid = sym.getSymbol("Symbol_1").$("input").width();
							var ua = navigator.userAgent.toLowerCase();	
							if (/iphone|ipad|ipod/.test(ua)) {
								sym.getSymbol("Symbol_1").$("input").html('<input placeholder="请输入您的姓名" name="name" id="name" class="name_input" style="border:0;position:absolute;top:-3%;left:-3%;line-height:'+103*w0+'px;text-align:center;width:'+wid+'px;height:'+hei+'px;background-color:transparent;font-size:2.5em; color:#000; border-radius:15px;"></input>');

							} else if (/android/.test(ua)) {
								sym.getSymbol("Symbol_1").$("input").html('<input placeholder="请输入您的姓名" name="name" id="name" class="name_input" style="border:0;position:absolute;top:0;left:0;line-height:'+103*w0+'px;text-align:center;width:'+wid+'px;height:'+hei+'px;background-color:transparent;font-size:2.5em; color:#000; border-radius:15px;"></input>');

							}


                  			Symbol_1 = sym.$("Symbol_1")
                            Symbol_2 = sym.$("Symbol_2")

         						$('img').css('height','auto')

         						// Hide an element 
                  			sym.$("Symbol_2").css("opacity","0")

                  			// Hide an element 
                  			sym.$("top2").css("opacity","0")

         						Symbol_1.animate({top:wy},500)
                           Symbol_2.animate({top:wy+h},0)
                           //sym.getSymbol("Symbol_1").play("s1");

                           sym.getSymbol("Symbol_3").play("s1");


         $(".sb").click(function(){
         	// insert code to be run when a user touches the object (for touch devices only)
         // insert code for mouse click here
         var x = document.getElementById("name");
         var y = $(".selected2").text()
         //alert(y)
         //alert(x.value);


             if(x.value == '') {
                 alert('请输入姓名');
                 return
             }else{


         			sym.getSymbol("Symbol_2").$("name").html(x.value);
         			sym.getSymbol("Symbol_2").$("job").html(y);
         			// Show an element 

         			if($(".selected2").hasClass("p1")){
         				//alert(sssss)
         				pos=1;
         			}else if($(".selected2").hasClass("p2")){
         				pos=2
         			}else if($(".selected2").hasClass("p3")){
         				pos=3
         			}else if($(".selected2").hasClass("p4")){
         				pos=4
         			}else if($(".selected2").hasClass("p5")){
         				pos=5
         			}else if($(".selected2").hasClass("p6")){
         				pos=6
         			}else if($(".selected2").hasClass("p7")){
         				pos=7
         			}else{
         				pos=8
         			}

         			//sym.getSymbol("Symbol_2").$("img2").attr("src","http://open.cztv.com/api/wx_tv/static/2016/foolsday/image.php?name="+x.value+"&pos="+pos);
         			sym.getSymbol("Symbol_2").$("img2").attr("src","http://121.43.96.30/paonang/image.php?name="+x.value+"&pos="+pos);
					  fenxiang('对不起，别找我了，我要去跑男导演组...','让我想想，去跑男节目组干点啥好呢。','都第四季了，跑男你欠我一张工作证！',x.value,pos)


         			sym.$("top2").css("opacity","1")


         			sym.getSymbol("top2").play("s1");



         			Symbol_2.animate({top:wy, opacity:1},500)

         			Symbol_1.animate({top:wy-h, opacity:0},500,function(){

        				sym.$("Symbol_1").remove();
						$('body').scrollTop(0);
						$(".follow").hide();

         			})



         			// Show an element 
         			sym.getSymbol("Symbol_2").play('s1');

         			// Show an element 
         			sym.getSymbol("Symbol_3").play('s1');

             }


         })

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${music2}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.getSymbol("music2").$("play").is(":visible")) {
         	sym.getSymbol("music2").$("play").hide();
         	
         	// Show an element 
         	sym.getSymbol("music2").$("music_stop2").show();
         	
         	// Pause an audio track 
         	sym.getSymbol("music2").$("music3")[0].pause();
         	
         	
         } else {
         	sym.getSymbol("music2").$("play").show();
         	
         	// Hide an element 
         	sym.getSymbol("music2").$("music_stop2").hide();
         	
         	// Play an audio track 
         	sym.getSymbol("music2").$("music3")[0].play();
         	
         }
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // 当组件在此处被完全加载时插入的代码将运行
         sym.getSymbol("music2").$("music3")[0].play();
		 $(".loading").fadeOut(200);
		 //sym.getSymbol("Symbol_1").play("s1");
//alert(location.href)
		//var str=  location.href.split("?")[2].split("=")[0]
		function GetQueryString(name){
			 var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
			 var r = window.location.search.substr(1).match(reg);
			 if(r!=null)return r[2]; return null;
		}
		var name =	decodeURI(GetQueryString('name'))
		var pos = GetQueryString('pos')
		//alert(name+'             '+pos)
		if(name==null||pos==null){
		
			sym.$("Symbol_4").hide();
			sym.getSymbol("Symbol_1").play("s1");
			fenxiang('对不起，别找我了，我要去跑男导演组...','让我想想，去跑男节目组干点啥好呢。','都第四季了，跑男你欠我一张工作证！','','')

			
		}else{
			//alert(1)
			//sym.getSymbol("Symbol_4").$("img2").hide()
			sym.getSymbol("Symbol_4").$("img2").attr("src","http://121.43.96.30/paonang/image.php?name="+name+"&pos="+pos);
			//sym.getSymbol("Symbol_4").$("img2").attr("src","http://open.cztv.com/api/wx_tv/static/2016/foolsday/image.php?name="+name+"&pos="+pos);
			fenxiang('对不起，别找我了，我要去跑男导演组...','让我想想，去跑男节目组干点啥好呢。','都第四季了，跑男你欠我一张工作证！','','')


		}
	/*	
	  sym.getSymbol("Symbol_4").$("img2").click(function(){
		  alert(1)
		  sym.getSymbol("Symbol_4").$("img2").attr("src","http://open.cztv.com/api/wx_tv/static/2016/foolsday/image.php?name=222222&pos=2");
		  
	  })
		
*/
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "touchmove", function(sym, e) {
         // 当用户触摸拖拽对象时插入的代码将运行（仅用于触摸设备）
         event.preventDefault();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Symbol_1}", "touchstart", function(sym, e) {
         // 当用户开始触摸对象时插入的代码将运行（仅用于触摸设备）
        /* 
         // 设置音轨播放停止切换
         if (sym.getSymbol("music2").$("music3")[0].paused) {
         	sym.getSymbol("music2").$("play").show();
         	
         	// Hide an element 
         	sym.getSymbol("music2").$("music_stop2").hide();
         	
         	// Play an audio track 
         	sym.getSymbol("music2").$("music3")[0].play();
         }
*/
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         $('.blue').show();
         sym.$("luhan").hide();
         $('.all').hide();
         sym.$("luhan2").show();

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${luhan}", "click", function(sym, e) {
         if (sym.$("luhan").is(":visible")) {	
         	$('.pall').removeClass("selected2");
         	$(".p1").addClass("selected2");	
         	$(".all").hide().removeClass("selected");
         	$(".blue").show();
         	sym.$("luhan").hide();
         	sym.$("luhan2").show().addClass("selected");
         } 

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${chenghe}", "click", function(sym, e) {
         if (sym.$("chenghe").is(":visible")) {
         	$('.pall').removeClass("selected2");
         	$(".p2").addClass("selected2");	
         	$(".all").hide().removeClass("selected");
         	$(".blue").show();
         	sym.$("chenghe").hide();
         	sym.$("chenghe2").show().addClass("selected");
         } 

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${dengchao}", "click", function(sym, e) {
         if (sym.$("dengchao").is(":visible")) {
         	$('.pall').removeClass("selected2");
         	$(".p3").addClass("selected2");	
         	$(".all").hide().removeClass("selected");
         	$(".blue").show();
         	sym.$("dengchao").hide();
         	sym.$("dengchao2").show().addClass("selected");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${baby}", "click", function(sym, e) {
         if (sym.$("baby").is(":visible")) {
         	$('.pall').removeClass("selected2");
         	$(".p4").addClass("selected2");	
         	$(".all").hide().removeClass("selected");
         	$(".blue").show();
         	sym.$("baby").hide();
         	sym.$("baby2").show().addClass("selected");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${zhengkai}", "click", function(sym, e) {
         if (sym.$("zhengkai").is(":visible")) {
         	$('.pall').removeClass("selected2");
         	$(".p5").addClass("selected2");	
         	$(".all").hide().removeClass("selected");
         	$(".blue").show();
         	sym.$("zhengkai").hide();
         	sym.$("zhengkai2").show().addClass("selected");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${licheng}", "click", function(sym, e) {
         if (sym.$("licheng").is(":visible")) {
         	$('.pall').removeClass("selected2");
         	$(".p6").addClass("selected2");	
         	$(".all").hide().removeClass("selected");
         	$(".blue").show();
         	sym.$("licheng").hide();
         	sym.$("licheng2").show().addClass("selected");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${wangzulan}", "click", function(sym, e) {
         if (sym.$("wangzulan").is(":visible")) {
         	$('.pall').removeClass("selected2");
         	$(".p7").addClass("selected2");	
         	$(".all").hide().removeClass("selected");
         	$(".blue").show();
         	sym.$("wangzulan").hide();
         	sym.$("wangzulan2").show().addClass("selected");	
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${yiren}", "click", function(sym, e) {
         if (sym.$("yiren").is(":visible")) {
         	$('.pall').removeClass("selected2");
         	$(".p8").addClass("selected2");	
         	$(".all").hide().removeClass("selected");
         	$(".blue").show();
         	sym.$("yiren").hide();
         	sym.$("yiren2").show().addClass("selected");
         }

      });
      //Edge binding end

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'Symbol_2'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         

      });
      //Edge binding end

   })("Symbol_2");
   //Edge symbol end:'Symbol_2'

   //=========================================================
   
   //Edge symbol: 'music'
   (function(symbolName) {   
   
   })("music");
   //Edge symbol end:'music'

   //=========================================================
   
   //Edge symbol: 'following'
   (function(symbolName) {   
   
   })("following");
   //Edge symbol end:'following'

   //=========================================================
   
   //Edge symbol: 'top'
   (function(symbolName) {   
   
   })("top");
   //Edge symbol end:'top'

   //=========================================================
   
   //Edge symbol: 'top2'
   (function(symbolName) {   
   
   })("top2");
   //Edge symbol end:'top2'

   //=========================================================
   
   //Edge symbol: 'Symbol_3'
   (function(symbolName) {   
   
   })("Symbol_3");
   //Edge symbol end:'Symbol_3'

   //=========================================================
   
   //Edge symbol: 'play'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("play");
   //Edge symbol end:'play'

   //=========================================================
   
   //Edge symbol: 'Symbol_4'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${playgame}", "click", function(sym, e) {
         
         if(isSubscribe == true){
			 
			 follow();
			 
			 sym.getSymbolElement().hide();
         
			 sym.getComposition().getStage().getSymbol("Symbol_1").play('s1');
		 }
         

      });
      //Edge binding end

   })("Symbol_4");
   //Edge symbol end:'Symbol_4'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-26251823");