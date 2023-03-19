function bv7()
{
 var s=new Array({w:1024,h:768},{w:640,h:480},{w:480,h:640});
 var i=document.location.search.substr(1,1);
 var w=s[i].w,h=s[i].h;
 with(window)
 {
  moveTo(0,0);
  resizeTo(screen.width,screen.height);
  with(document)
   with(body)
   {
    var cw=Math.min(w,clientWidth),ch=Math.min(h,clientHeight);
    var iw=Math.min(cw,ch*w/h),ih=Math.min(ch,cw*h/w);
    with(document)
     write("<img src='ib"+location.search.substr(1,3)+".jpg' width='"+iw+"px' height='"+ih+"px'>");
    iw-=clientWidth;
    ih-=clientHeight;
   };
  resizeBy(iw,ih);
  moveBy(-iw/2,-ih/2)
 }
};
bv7()
