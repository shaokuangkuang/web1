// 修改金额
function changenum1(v){
	var x=document.getElementById('m6p2');
	x.innerHTML="￥"+v;
}
window.onload=function(){

	var cover = document.getElementsByClassName("topbig")[0];
	window.onscroll=function(){

		var st =document.documentElement.scrollTop||document.body.scrollTop;
		if (st>180) {

			cover.style.position ='fixed'
		}else{
			cover.style.position ='static'
		}
	}
	





//广告滚动条
var jud;
function begin1(){
	jud=setInterval(function(){ 
    var o2=document.getElementById("o2");
    var p1=document.getElementById("o2p1");
    var p2=document.getElementById("o2p2");
    p2.innerHTML=p1.innerHTML;	
        o2.scrollTop++;
        if(o2.scrollTop>=p1.offsetHeight){
        o2.scrollTop=0;
        }
    },50)
}
begin1();
o2.onmouseover=function(){
    clearInterval(jud);
} 
o2.onmouseout=function(){
    begin1();
}

var box = document.getElementById('n3');
var oNavlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var index = 1;
var timer;
var isMoving = false;
		box.onmouseover = function(){
			animate(left,{opacity:50})
			animate(right,{opacity:50})
			clearInterval(timer)
		}
		box.onmouseout = function(){
			animate(left,{opacity:0})
			animate(right,{opacity:0})
			timer = setInterval(next, 3000);
		}
		right.onclick = next;
		left.onclick = prev;
		for( var i=0; i<oNavlist.length; i++ ){
			oNavlist[i].index = i;
			oNavlist[i].onclick = function(){
				index = this.index+1;
				navmove();
				animate(slider,{left:-800*index});
			}
		}
		function next(){
			if(isMoving){
				return;
			}
			isMoving = true;
			index++;
			navmove();
			animate(slider,{left:-800*index},function(){
				if(index==7){
					slider.style.left = '-800px';
					index = 1;
				}
				isMoving = false;
			});
		}//第六张和第五张一样，做个判断第二章
		function prev(){
			if(isMoving){
				return;
			}
			isMoving = true;
			index--;
			navmove();
			animate(slider,{left:-800*index},function(){
				if(index==0){
					slider.style.left = '-6400px';
					index = 6;
				}
				isMoving = false;
			});
		}
		function navmove(){
			for( var i=0; i<oNavlist.length; i++ ){
				oNavlist[i].className = "";
			}
			if(index >6 ){
				oNavlist[0].className = "active";
			}else if(index<=0){
				oNavlist[5].className = "active";
			}else {
				oNavlist[index-1].className = "active";
			}
		}
		timer = setInterval(next, 3000);


   var div4=document.getElementById("div4");
   var div1=document.getElementById("div1");
   var div2=document.getElementById("div2");
   var div3=document.getElementById("div3");
   div4.onmouseover=function(){
	   div4.style.right="0px";
   }
   div4.onmouseout=function(){
   	   div4.style.right="-90px";
   }
   
   div1.onmouseover=function(){
	   div1.style.right="0px";
   }
   div1.onmouseout=function(){
   	   div1.style.right="-90px";
   }
   div2.onmouseover=function(){
	   div2.style.right="0px";
   }
   div2.onmouseout=function(){
   	   div2.style.right="-90px";
   }
   div3.onmouseover=function(){
	   div3.style.right="0px";
   }
   div3.onmouseout=function(){
   	   div3.style.right="-90px";
   }

}
