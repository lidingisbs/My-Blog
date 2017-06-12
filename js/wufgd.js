 /*无缝滚动*/
 
 window.onload=function(){
	    var oContent=document.getElementById("djrm-main");
		var oul=document.getElementById("ull");
		var aLi=oul.getElementsByTagName("li");
		var time=null;
		var speed=-2;
		oul.innerHTML+=oul.innerHTML;
		oul.style.width=aLi[0].offsetWidth*aLi.length+"px";
		function move(){
		    if(oul.offsetLeft<-oul.offsetWidth/2)
			{
			    oul.style.left="0";
			}
			if(oul.offsetLeft>0)
			{
			    oul.style.left=-oul.offsetWidth/2+"px";
			}
			
		    oul.style.left=oul.offsetLeft+speed+'px';
		}
		   time=setInterval(move,30);
		
		oContent.onmouseover=function()
		{
		    clearInterval(time);
		}
		oContent.onmouseout=function()
		{
		    time=setInterval(move,30);
		}
		
		 /* document.getElementById("but1").onclick=function()
		  {  
		       speed=-2;
		  }
		  document.getElementById("but2").onclick=function()
		  {
		      speed=2;
		  }*/
		
	 };