/**
 * Created by cz on 2016/6/3.
 */
//实现手机端页面缩放
/*function resetPage() {
    var deviceWidth = document.documentElement.clientWidth;
    var scale=deviceWidth/640;
    document.body.style.zoom=scale;
}
window.onload = function(){
    resetPage();
}
window.onresize = function(){
    resetPage();
}*/
function pageResponse(d){var c=navigator.userAgent,o=c.match(/Windows Phone ([\d.]+)/),e=c.match(/(Android);?[\s\/]+([\d.]+)?/),b=document.documentElement.clientWidth,n=document.documentElement.clientHeight,g=b/n,q=d.width||320,l=d.height||504,a=q/l,m=document.querySelectorAll(d.selectors),k=m.length,h=d.mode||"auto",j=d.origin||"left top 0",f=(h=="contain")?(g>a?n/l:b/q):(h=="cover")?(g<a?n/l:b/q):b/q;function p(t,s,r){var i=s.style;i.width=q+"px";/*i.height=l+"px";*/i.webkitTransformOrigin=j;i.transformOrigin=j;i.webkitTransform="scale("+r+")";i.transform="scale("+r+")";if(t=="auto"&&e){document.body.style.height=l*r+"px"}else{if(t=="contain"||t=="cover"){i.position="absolute";i.left=(b-q)/2+"px";i.top=(n-l)/2+"px";i.webkitTransformOrigin="center center 0";i.transformOrigin="center center 0";if(o){document.body.style.msTouchAction="none"}else{document.ontouchmove=function(u){u.preventDefault()}}}}}while(--k>=0){p(h,m[k],f)}};
function resetPage(){
    pageResponse({
        selectors : 'html',     //模块选择器，使用querySelectorAll的方法
        mode : 'auto',     // auto || contain || cover ，默认模式为auto
        width : '640',      //输入页面的宽度，只支持输入数值，默认宽度为320px
    })
}
window.onload =function () {
    resetPage();
}
window.onresize = function(){
    resetPage();
}
