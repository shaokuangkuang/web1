

function jia(){
    var jia =document.getElementById("num-jia");
    var jian =document.getElementById("num-jian");
    var num =document.getElementById("input-num");
    if(num.value<5){
        jia.style.cursor="pointer";
        jian.style.cursor="pointer";
        num.value.innerHTML=num.value++;
        if(num.value==5){
            jia.style.cursor="not-allowed";
        }
    }
}
function jian(){
    var jia =document.getElementById("num-jia");
    var jian =document.getElementById("num-jian");
    var num =document.getElementById("input-num");
    if(num.value>=1){
        jian.style.cursor="pointer";
        jia.style.cursor="pointer";
        num.value.innerHTML=num.value--;
        if(num.value<1){
            num.value.innerHTML=0;
            jian.style.cursor="not-allowed";
        }
    }
}

function changeml0(){
    var ml150=document.getElementById("150ml");
    var ml200=document.getElementById("200ml");
    var p=document.getElementById("mid2mrp6");
    ml150.style.border="1px solid red";
    ml150.style.background="url(任务所需小图/img/duigou.png) no-repeat 50px 18px";
    ml200.style.border=" 1px solid #ffffff";
    ml200.style.background="none";
    p.innerHTML='"150ml"';
}
function changeml(){
    var ml150=document.getElementById("150ml");
    var ml200=document.getElementById("200ml");
    var p=document.getElementById("mid2mrp6");
    ml200.style.border="1px solid red";
    ml200.style.background="url(任务所需小图/img/duigou.png) no-repeat 50px 18px";
    ml150.style.border="1px solid #ffffff";
    ml150.style.background="none";
    p.innerHTML='"200ml"';
}

function gouwuche(){
    var a =document.getElementById("midbo2");
    var big11 =document.getElementById("big11");
    var small =document.getElementById("small");
    big11.style.display='none';
    small.style.display="none";
}
function gouwuche1(){
    var a =document.getElementById("midbo2");
    var big11 =document.getElementById("big11");
    var small =document.getElementById("small");
    big11.style.display='block';
    small.style.display="block";
}
function huantu(){
    var midp=document.getElementById("mid2ml1");
    var sp=document.getElementById("little");
    var sp1=document.getElementById("little1");
    var Bimg = document.getElementById("Bimg");
    midp.src ="任务所需小图/img/pp0.jpeg";
    Bimg.src="任务所需小图/img/pp2.png";
    sp.style.border="2px solid #ff9003";
    sp1.style.border="none";

}
function huantu1(){
     var midp=document.getElementById("mid2ml1");
     var sp=document.getElementById("little");
     var sp1=document.getElementById("little1");
     var Bimg = document.getElementById("Bimg");
     midp.src ="任务所需小图/img/pp1.jpeg";
     Bimg.src="任务所需小图/img/pp4.png";
     sp1.style.border="2px solid #ff9003";
     sp.style.border="none";
}

window.onload=function(){
var img1=document.getElementById("img1");
var img2 = document.getElementById("img2");
    var slider = document.getElementById("slider");
    var Bimg = document.getElementById("Bimg");
    var box = document.getElementById('mid2ml'); 
    console.log(box.offsetLeft,box.offsetTop);
    img1.onmouseover=function(){
        slider.style.display='block';
        img2.style.display='block';
    }
    img1.onmouseout=function(){
        slider.style.display='none';
        img2.style.display='none';
    }
    img1.onmousemove=function(ev){
        var ev=ev||event;
        var oL=ev.clientX-box.offsetLeft-slider.offsetWidth/2;//滑块left
        var oT=ev.clientY-box.offsetTop-slider.offsetHeight/2;//滑块top
        var oMaxw=260;
        var oMaxh=260;
        oL=oL>oMaxw?oMaxw:oL<0?0:oL;
        oT=oT>oMaxh?oMaxh:oT<0?0:oT;
        slider.style.left = oL+'px';
        slider.style.top = oT+'px' ;
        var oBmaxw = img2.offsetWidth - Bimg.offsetWidth; 
        var oBmaxh = img2.offsetHeight - Bimg.offsetHeight; 
        Bimg.style.left = ( oL/oMaxw ) * oBmaxw +'px';
        Bimg.style.top = ( oT/oMaxh ) * oBmaxh + 'px';
    }

    var cover = document.getElementsByClassName("topbig")[0];
    window.onscroll=function(){
        var st =document.documentElement.scrollTop||document.body.scrollTop;
        if (st>180) {
            cover.style.position ='fixed'
        }else{
            cover.style.position ='static'
        }
    }    
}





