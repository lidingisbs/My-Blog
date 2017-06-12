function getLength(str){
	return str.replace(/[^\x00-xff]/g,"xx").length;
}

function findStr(str,n){
	var tmp=0;
	for(var i=0;i<str.length;i++){
		if(str.charAt(i)==n){
			tmp++
		}
    }
    return tmp;
}

window.onload=function(){
	var aLnput=document.getElementsByTagName("input");
	var oName=aLnput[0];
	var pwd=aLnput[1];
	var pwd2=aLnput[2];
	var aP=document.getElementsByTagName("P");
	var name_msg=aP[0];
	var pwd_msg=aP[1];
	var pwd2_msg=aP[2];
	var count=document.getElementById("count");
	var aEm=document.getElementsByTagName("em");
	var name_length=0;
	// 数字，下划线，字母（不区分大小写），汉字
	// 5-25字符，推荐使用字母下划线
   
	// var re=/[^\w\u4e00-\u9fa5]/g;
	// 用户名
	oName.onfocus=function(){
		name_msg.style.display="block";
		name_msg.innerHTML='<i class="iconfont font">&#xe6bc;</i>用户名应在5-25个字符，一个汉字为两个字符，由中文字母数字下划线组成';
	}
	oName.onkeyup=function(){
		count.style.visibility="visible";
		name_length=getLength(this.value);
		count.innerHTML=name_length+"个字符";
		if(name_length==0){
		  count.style.visibility="hidden";	
		}
	}
	oName.onblur=function(){
		//含有非法字符
		var re=/[^\w\u4e00-\u9fa5]/g;
		if(re.test(this.value)){
			name_msg.innerHTML='<i class="iconfont error">&#xe61d;</i>用户名含有非法字符';
		}
		//不能为空
		else if(this.value==""){
			name_msg.innerHTML='<i class="iconfont error">&#xe61d;</i>用户名不能为空';
		}
		//长度超过25个字符
		else if(name_length>25){
			name_msg.innerHTML='<i class="iconfont error">&#xe61d;</i>用户名长度超过25个字符';
		}
		//长度小于5个字符
		else if(name_length<6){
			name_msg.innerHTML='<i class="iconfont error">&#xe61d;</i>用户名长度少于6个字符';
		}
		//ok
		else{
			name_msg.innerHTML='<i class="iconfont">&#xe616;</i>ok!';
		}
	}
	//密码
	pwd.onfocus=function(){
      pwd_msg.style.display="block";
      pwd_msg.innerHTML='<i class="iconfont font">&#xe6bc;</i>密码应在5-25个字符，由字母数字下划线组成';
	}
	pwd.onkeyup=function(){
      //大于5个字符
      if(this.value.length>5){
      	aEm[1].className="active";
      	pwd2.removeAttribute("disabled");
      	pwd2_msg.style.display="block";
      }else{
      	aEm[1].className="";
      	pwd2.setAttribute("disabled");
      	pwd2_msg.style.display="none";
      }
      //大于10个字符强
      if(this.value.length>10){
      	aEm[2].className="active";
      	
      }else{
      	aEm[2].className="";
      }
	}
	// 失去焦点时候
	pwd.onblur=function(){
		var m=findStr(pwd.value[0]);
		var re_n=/[^\d]/g;
		var re_t=/[^a-zA-Z]/g;
     //不能为空
     if(this.value==""){
     	pwd_msg.innerHTML='<i class="iconfont error">&#xe61d;</i>密码不能为空';
     }
     //不能使用相同字符
     else if(m==this.value.length){
     	pwd_msg.innerHTML='<i class="iconfont error">&#xe61d;</i>密码不能用相同字符';
     }
     //长度在6-16个字符
     else if(this.value.length<6||this.value.length>16){
     	pwd_msg.innerHTML='<i class="iconfont error">&#xe61d;</i>密码长度应在6-16个字符';
     }
     //不能全为数字
     else if(!re_n.test(this.value)){
       pwd_msg.innerHTML='<i class="iconfont error">&#xe61d;</i>密码不能全为数字';
     }
     //不能全为字母
     else if(!re_t.test(this.value)){
       pwd_msg.innerHTML='<i class="iconfont error">&#xe61d;</i>密码不能全为数字';
     }
     //ok！
     else{
     	pwd_msg.innerHTML='<i class="iconfont">&#xe616;</i>ok！';
     }
	}
	// 确认密码
	pwd2.onblur=function(){
       if(this.value!=pwd.value){
      	pwd2_msg.innerHTML='<i class="iconfont error">&#xe61d;</i>两次输入密码不一致';
       }
      else{
      	pwd2_msg.innerHTML='<i class="iconfont">&#xe616;</i>ok！';
      } 
	}
};