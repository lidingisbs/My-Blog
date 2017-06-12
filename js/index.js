/*javascript*/

$(function(){
	//微信显示隐藏开始
	$(".right .weixiecode").hover(function(){
		$("#weixie_Id").show();
	},function(){
		$("#weixie_Id").hide();
	});
	//去除搜索框默认绿色边框
	$("#input").focus(function(){
		$(this).css("outline","none");
	});
	//图片轮播开始
	
	          var i=0;
		      var timer=null;
		      timer=setInterval(showTimer,2000);
		      $("#bannerPic .borderRiduse ul li").hover(function(){
			      i = $(this).index();
				  clearInterval(timer);
				  show();
			     
			    },function(){
			      timer=setInterval(showTimer,3000);
			 
			  });
			  $(".picture").mouseover(function(){
				  clearInterval(timer);
			  });
			   $(".picture").mouseout(function(){
				  timer=setInterval(showTimer,3000);
			  });
			 
			   $(".but").hover(function(){
			     
			       clearInterval(timer);
			   },function(){
			  
			       timer=setInterval(showTimer,3000);
			  
			  });
			  $(".but1").click(function(){
			       clearInterval(timer);
				   if(i==5)
				   {
				     i=-1;  
				   }else if(i==0){
				      i=5;
				   }
				   i--;
				  show(); 
			  });
		   $(".but2").click(function(){
			       clearInterval(timer);
				   if(i==0)
				   {
				     i=5;  
				   }else if(i==5){
				      i=0;
				   }
				   i++;
				  show(); 
			  });
	 
	  $("#bannerPic").mouseover(function(){
	      $(this).find("but").animate({opactiy:1},1000);
	  });
	 
	
	 function show(){
	 
		  $(".picture img").eq(i).stop(true).fadeIn(3000).siblings().stop(true).fadeOut(3000);
		  $("#bannerPic .borderRiduse ul li").eq(i).addClass("active").siblings().removeClass("active");
	 };
 
	 function showTimer()
	 {
			 i++;
			if(i==5)
			{
			i=0;
			}
						  
			show();
	 };
  
	//图片轮播结束
	/*中间下拉菜单开始*/
	$(".leftDown-mnue ul li.mnue").hover(function(){
		$(this).find("div.Down-mnue").show();
	},function(){
		$(this).find("div.Down-mnue").hide();
	});
	/*中间下拉菜单结束*/
	/* 达人旅游开始*/
	$(".drly-main-l .list-item ul li ").hover(function(){
           	  var i = $(this).index();
           	  $(this).addClass('active').siblings().removeClass('active');
           	  /*$(".drly-main-r").eq(i).show().siblings().hide();*/
           });

           
	
	/*达人旅游结束*/
});

