/*
mediaboxAdvanced v1.5.4 - The ultimate extension of Slimbox and Mediabox; an all-media script
updated 2011.2.19
	(c) 2007-2011 John Einselen - http://iaian7.com
based on Slimbox v1.64 - The ultimate lightweight Lightbox clone
	(c) 2007-2008 Christophe Beyls - http://www.digitalia.be

description: The ultimate extension of Slimbox and Mediabox; an all-media script

license: MIT-style

authors:
- John Einselen
- Christophe Beyls
- Contributions from many others

requires:
- core/1.3.2: [Core, Array, String, Number, Function, Object, Event, Browser, Class, Class.Extras, Slick.*, Element.*, FX.*, DOMReady, Swiff]
- Quickie/2.1: '*'

provides: [Mediabox.open, Mediabox.close, Mediabox.recenter, Mediabox.scanPage]
*/

var Easymedia;var scripts=document.getElementsByTagName("script");var thisScript=scripts[scripts.length-1];var ajaxpath=thisScript.src.split("/").slice(0,-3).join("/")+"/ajax.php";(function(){function q(){v.setStyles({top:window.getScrollTop(),left:window.getScrollLeft()})}function R(){f=window.getWidth();l=window.getHeight();v.setStyles({width:f,height:l})}function U(t){if(Browser.firefox){["object",window.ie?"select":"embed"].forEach(function(e){Array.forEach($$(e),function(e){if(t)e._easymedia=e.style.visibility;e.style.visibility=t?"hidden":e._easymedia})})}v.style.display=t?"":"none";var n=t?"addEvent":"removeEvent";if(Browser.Platform.ios||Browser.ie6)window[n]("scroll",q);window[n]("resize",R);if(e.keyboard)document[n]("keydown",z)}function z(t){if(e.keyboardAlpha){switch(t.code){case 27:case 88:case 67:G();break;case 37:case 80:W();break;case 39:case 78:X()}}else{switch(t.code){case 27:G();break;case 37:W();break;case 39:X()}}if(e.keyboardStop){return false}}function W(){return V(r)}function X(){return V(i)}function V(s){if(s>=0){g.set("html","");n=s;r=(n||!e.loop?n:t.length)-1;i=n+1;if(i==t.length)i=e.loop?0:-1;Q();m.className="mbLoading";if(h&&H=="inline"&&!e.inlineClone)h.adopt(g.getChildren());if(!t[s][2])t[s][2]="";A=t[s][2].split(" ");O=A.length;if(O>1){D=A[O-2].match("%")?window.getWidth()*A[O-2].replace("%","")*.01:A[O-2];P=A[O-1].match("%")?window.getHeight()*A[O-1].replace("%","")*.01:A[O-1]}else{D="";P=""}L=t[s][0];_=t[s][3];var o=new Request.JSON({url:ajaxpath,method:"post",onRequest:function(){},onComplete:function(t){function n(){if(L.match(/quietube\.com/i)){B=L.split("v.php/");L=B[1]}else if(L.match(/\/\/yfrog/i)){H=L.substring(L.length-1);if(H.match(/b|g|j|p|t/i))H="image";if(H=="s")H="flash";if(H.match(/f|z/i))H="video";L=L+":iphone"}if(L.match(/\.gif|\.jpg|\.jpeg|\.png|twitpic\.com/i)||H=="image"){H="img";L=L.replace(/twitpic\.com/i,"twitpic.com/show/full");h=new Image;h.onload=$;h.src=L}else if(L.match(/\.flv|\.mp4/i)||H=="video"){H="obj";D=D||e.defaultWidth;P=P||e.defaultHeight;h=new Swiff(""+e.playerpath+"?mediaURL="+L+"&allowSmoothing=true&autoPlay="+e.autoplay+"&buffer=6&showTimecode="+e.showTimecode+"&loop="+e.medialoop+"&controlColor="+e.controlColor+"&controlBackColor="+e.controlBackColor+"&playerBackColor="+e.playerBackColor+"&defaultVolume="+e.volume+"&scaleIfFullScreen=true&showScalingButton=true&crop=false",{id:"mbVideo",width:D,height:P,params:{wmode:e.wmodeNB,bgcolor:e.bgcolor,allowscriptaccess:e.scriptaccess,allowfullscreen:e.fullscreen}});$()}else if(L.match(/\.mp3|\.aac|tweetmic\.com|tmic\.fm/i)||H=="audio"){H="obj";D=D||e.defaultWidth;P=P||"17";if(L.match(/tweetmic\.com|tmic\.fm/i)){L=L.split("/");L[4]=L[4]||L[3];L="http://media4.fjarnet.net/tweet/tweetmicapp-"+L[4]+".mp3"}h=new Swiff(""+e.playerpath+"?mediaURL="+L+"&allowSmoothing=true&autoPlay="+e.autoplay+"&buffer=6&showTimecode="+e.showTimecode+"&loop="+e.medialoop+"&controlColor="+e.controlColor+"&controlBackColor="+e.controlBackColor+"&defaultVolume="+e.volume+"&scaleIfFullScreen=true&showScalingButton=true&crop=false",{id:"mbAudio",width:D,height:P,params:{wmode:e.wmode,bgcolor:e.bgcolor,allowscriptaccess:e.scriptaccess,allowfullscreen:e.fullscreen}});$()}else if(L.match(/\.swf/i)||H=="flash"){H="obj";D=D||e.defaultWidth;P=P||e.defaultHeight;h=new Swiff(L,{id:"mbFlash",width:D,height:P,params:{wmode:e.wmode,bgcolor:e.bgcolor,allowscriptaccess:e.scriptaccess,allowfullscreen:e.fullscreen}});$()}else if(L.match(/\.mov|\.m4v|\.m4a|\.aiff|\.avi|\.caf|\.dv|\.mid|\.m3u|\.mp3|\.mp2|\.mp4|\.qtz/i)||H=="qt"){H="qt";D=D||e.defaultWidth;P=parseInt(P,10)+16||e.defaultHeight;h=new Quickie(L,{id:"EasymediaQT",width:D,height:P,attributes:{controller:e.controller,autoplay:e.autoplay,volume:e.volume,loop:e.medialoop,bgcolor:e.bgcolor}});$()}else if(L.match(/blip\.tv/i)){H="obj";D=D||"640";P=P||"390";h=new Swiff(L,{src:L,width:D,height:P,params:{wmode:e.wmode,bgcolor:e.bgcolor,allowscriptaccess:e.scriptaccess,allowfullscreen:e.fullscreen}});$()}else if(L.match(/break\.com/i)){H="obj";D=D||"464";P=P||"376";j=L.match(/\d{6}/g);h=new Swiff("http://embed.break.com/"+j,{width:D,height:P,params:{wmode:e.wmode,bgcolor:e.bgcolor,allowscriptaccess:e.scriptaccess,allowfullscreen:e.fullscreen}});$()}else if(L.match(/dailymotion\.com/i)){H="obj";D=D||"480";P=P||"381";h=new Swiff(L,{id:j,width:D,height:P,params:{wmode:e.wmode,bgcolor:e.bgcolor,allowscriptaccess:e.scriptaccess,allowfullscreen:e.fullscreen}});$()}else if(L.match(/facebook\.com/i)){H="obj";D=D||"320";P=P||"240";B=L.split("v=");B=B[1].split("&");j=B[0];h=new Swiff("http://www.facebook.com/v/"+j,{movie:"http://www.facebook.com/v/"+j,classid:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",width:D,height:P,params:{wmode:e.wmode,bgcolor:e.bgcolor,allowscriptaccess:e.scriptaccess,allowfullscreen:e.fullscreen}});$()}else if(L.match(/flickr\.com(?!.+\/show\/)/i)){H="obj";D=D||"500";P=P||"375";B=L.split("/");j=B[5];h=new Swiff("http://www.flickr.com/apps/video/stewart.swf",{id:j,classid:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",width:D,height:P,params:{flashvars:"photo_id="+j+"&show_info_box="+e.flInfo,wmode:e.wmode,bgcolor:e.bgcolor,allowscriptaccess:e.scriptaccess,allowfullscreen:e.fullscreen}});$()}else if(L.match(/gametrailers\.com/i)){H="obj";D=D||"480";P=P||"392";j=L.match(/\d{5}/g);h=new Swiff("http://www.gametrailers.com/remote_wrap.php?mid="+j,{id:j,width:D,height:P,params:{wmode:e.wmode,bgcolor:e.bgcolor,allowscriptaccess:e.scriptaccess,allowfullscreen:e.fullscreen}});$()}else if(L.match(/google\.com\/videoplay/i)){H="obj";D=D||"400";P=P||"326";B=L.split("=");j=B[1];h=new Swiff("http://video.google.com/googleplayer.swf?docId="+j+"&autoplay="+e.autoplayNum,{id:j,width:D,height:P,params:{wmode:e.wmode,bgcolor:e.bgcolor,allowscriptaccess:e.scriptaccess,allowfullscreen:e.fullscreen}});$()}else if(L.match(/megavideo\.com/i)){H="obj";D=D||"640";P=P||"360";B=L.split("=");j=B[1];h=new Swiff("http://wwwstatic.megavideo.com/mv_player.swf?v="+j,{id:j,width:D,height:P,params:{wmode:e.wmode,bgcolor:e.bgcolor,allowscriptaccess:e.scriptaccess,allowfullscreen:e.fullscreen}});$()}else if(L.match(/metacafe\.com\/watch/i)){H="obj";D=D||"400";P=P||"345";B=L.split("/");j=B[4];h=new Swiff("http://www.metacafe.com/fplayer/"+j+"/.swf?playerVars=autoPlay="+e.autoplayYes,{id:j,width:D,height:P,params:{wmode:e.wmode,bgcolor:e.bgcolor,allowscriptaccess:e.scriptaccess,allowfullscreen:e.fullscreen}});$()}else if(L.match(/vids\.myspace\.com/i)){H="obj";D=D||"425";P=P||"360";h=new Swiff(L,{id:j,width:D,height:P,params:{wmode:e.wmode,bgcolor:e.bgcolor,allowscriptaccess:e.scriptaccess,allowfullscreen:e.fullscreen}});$()}else if(L.match(/revver\.com/i)){H="obj";D=D||"480";P=P||"392";B=L.split("/");j=B[4];h=new Swiff("http://flash.revver.com/player/1.0/player.swf?mediaId="+j+"&affiliateId="+e.revverID+"&allowFullScreen="+e.revverFullscreen+"&autoStart="+e.autoplay+"&backColor=#"+e.revverBack+"&frontColor=#"+e.revverFront+"&gradColor=#"+e.revverGrad+"&shareUrl=revver",{id:j,width:D,height:P,params:{wmode:e.wmode,bgcolor:e.bgcolor,allowscriptaccess:e.scriptaccess,allowfullscreen:e.fullscreen}});$()}else if(L.match(/rutube\.ru/i)){H="obj";D=D||"470";P=P||"353";B=L.split("=");j=B[1];h=new Swiff("http://video.rutube.ru/"+j,{movie:"http://video.rutube.ru/"+j,width:D,height:P,params:{wmode:e.wmode,bgcolor:e.bgcolor,allowscriptaccess:e.scriptaccess,allowfullscreen:e.fullscreen}});$()}else if(L.match(/tudou\.com/i)){H="obj";D=D||"400";P=P||"340";B=L.split("/");j=B[5];h=new Swiff("http://www.tudou.com/v/"+j,{width:D,height:P,params:{wmode:e.wmode,bgcolor:e.bgcolor,allowscriptaccess:e.scriptaccess,allowfullscreen:e.fullscreen}});$()}else if(L.match(/twitcam\.com/i)){H="obj";D=D||"320";P=P||"265";B=L.split("/");j=B[3];h=new Swiff("http://static.livestream.com/chromelessPlayer/wrappers/TwitcamPlayer.swf?hash="+j,{width:D,height:P,params:{wmode:e.wmode,bgcolor:e.bgcolor,allowscriptaccess:e.scriptaccess,allowfullscreen:e.fullscreen}});$()}else if(L.match(/twitvid\.com/i)){H="obj";D=D||"600";P=P||"338";B=L.split("/");j=B[3];h=new Swiff("http://www.twitvid.com/player/"+j,{width:D,height:P,params:{wmode:e.wmode,bgcolor:e.bgcolor,allowscriptaccess:e.scriptaccess,allowfullscreen:e.fullscreen}});$()}else if(L.match(/ustream\.tv/i)){H="obj";D=D||"400";P=P||"326";h=new Swiff(L+"&viewcount="+e.usViewers+"&autoplay="+e.autoplay,{width:D,height:P,params:{wmode:e.wmode,bgcolor:e.bgcolor,allowscriptaccess:e.scriptaccess,allowfullscreen:e.fullscreen}});$()}else if(L.match(/youku\.com/i)){if(e.html5){H="url";D=D||"510";P=P||"498";B=L.replace(/.*id_([^&]*)\.html.*/,"$1");h=new Element("iframe",{src:"http://player.youku.com/embed/"+B,id:j,width:D,height:P,frameborder:0});$()}else{H="obj";D=D||"480";P=P||"400";B=L.split("id_");j=B[1];h=new Swiff("http://player.youku.com/player.php/sid/"+j+"=/v.swf",{width:D,height:P,params:{wmode:e.wmode,bgcolor:e.bgcolor,allowscriptaccess:e.scriptaccess,allowfullscreen:e.fullscreen}});$()}}else if(L.match(/youtube\.com\/watch/i)){B=L.split("v=");if(e.html5){H="url";D=D||"640";P=P||"385";j="mediaId_"+(new Date).getTime();h=new Element("iframe",{src:"http://www.youtube.com/embed/"+B[1]+"?rel="+e.ytRel+e.ytautoplay,id:j,width:D,height:P,frameborder:0});$()}else{H="obj";j=B[1];D=D||"480";P=P||"385";h=new Swiff("http://www.youtube.com/v/"+j+"&autoplay="+e.ytautoplay+"&fs="+e.fullscreenNum+"&border="+e.ytBorder+"&color1=0x"+e.ytColor1+"&color2=0x"+e.ytColor2+"&rel="+e.ytRel+"&showinfo="+e.ytInfo+"&showsearch="+e.ytSearch,{id:j,width:D,height:P,params:{wmode:e.wmode,bgcolor:e.bgcolor,allowscriptaccess:e.scriptaccess,allowfullscreen:e.fullscreen}});$()}}else if(L.match(/youtube\.com\/embed/i)){B=L.split("embed/");if(e.html5){H="url";D=D||"640";P=P||"385";j="mediaId_"+(new Date).getTime();h=new Element("iframe",{src:"http://www.youtube.com/embed/"+B[1]+"?rel="+e.ytRel+e.ytautoplay,id:j,width:D,height:P,frameborder:0});$()}else{H="obj";j=B[1];D=D||"480";P=P||"385";h=new Swiff("http://www.youtube.com/v/"+j+"&autoplay="+e.ytautoplay+"&fs="+e.fullscreenNum+"&border="+e.ytBorder+"&color1=0x"+e.ytColor1+"&color2=0x"+e.ytColor2+"&rel="+e.ytRel+"&showinfo="+e.ytInfo+"&showsearch="+e.ytSearch,{id:j,width:D,height:P,params:{wmode:e.wmode,bgcolor:e.bgcolor,allowscriptaccess:e.scriptaccess,allowfullscreen:e.fullscreen}});$()}}else if(L.match(/youtube\.com\/view/i)){H="obj";B=L.split("p=");j=B[1];D=D||"480";P=P||"385";h=new Swiff("http://www.youtube.com/p/"+j+"&autoplay="+e.ytautoplay+"&fs="+e.fullscreenNum+"&border="+e.ytBorder+"&color1=0x"+e.ytColor1+"&color2=0x"+e.ytColor2+"&rel="+e.ytRel+"&showinfo="+e.ytInfo+"&showsearch="+e.ytSearch,{id:j,width:D,height:P,params:{wmode:e.wmode,bgcolor:e.bgcolor,allowscriptaccess:e.scriptaccess,allowfullscreen:e.fullscreen}});$()}else if(L.match(/veoh\.com/i)){H="obj";D=D||"410";P=P||"341";L=L.replace("%3D","/");B=L.split("watch/");j=B[1];h=new Swiff("http://www.veoh.com/swf/webplayer/WebPlayer.swf?version=AFrontend.5.7.0.1396&permalinkId="+j+"&player=videodetailsembedded&videoAutoPlay="+e.autoplayNum+"&id=anonymous",{id:j,width:D,height:P,params:{wmode:e.wmode,bgcolor:e.bgcolor,allowscriptaccess:e.scriptaccess,allowfullscreen:e.fullscreen}});$()}else if(L.match(/viddler\.com/i)){H="obj";D=D||"437";P=P||"370";B=L.split("/");j=B[4];h=new Swiff(L,{id:"viddler_"+j,movie:L,classid:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",width:D,height:P,params:{wmode:e.wmode,bgcolor:e.bgcolor,allowscriptaccess:e.scriptaccess,allowfullscreen:e.fullscreen,id:"viddler_"+j,movie:L}});$()}else if(L.match(/vimeo\.com/i)){D=D||"640";P=P||"360";B=L.split("/");j=B[3];if(e.html5){H="url";j="mediaId_"+(new Date).getTime();h=new Element("iframe",{src:"http://player.vimeo.com/video/"+B[3]+e.vmautoplay,id:j,width:D,height:P,frameborder:0});$()}else{H="obj";h=new Swiff("http://www.vimeo.com/moogaloop.swf?clip_id="+j+"&server=www.vimeo.com&fullscreen="+e.fullscreenNum+"&autoplay="+e.vmautoplay+"&show_title="+e.vmTitle+"&show_byline="+e.vmByline+"&show_portrait="+e.vmPortrait+"&color="+e.vmColor,{id:j,width:D,height:P,params:{wmode:e.wmode,bgcolor:e.bgcolor,allowscriptaccess:e.scriptaccess,allowfullscreen:e.fullscreen}});$()}}else if(L.match(/\#mb_/i)){H="inline";D=D||e.defaultWidth;P=P||e.defaultHeight;URLsplit=L.split("#");h=document.id(URLsplit[1]);$()}else{H="url";D=D||e.defaultWidth;P=P||e.defaultHeight;j="mediaId_"+(new Date).getTime();h=new Element("iframe",{src:L,id:j,width:D,height:P,frameborder:0});$()}}y=[t[0],t[1]];n()},onFailure:function(){y=["Data not available.","Data not available.","Data not available.","Data not available."];alert("Ajax request failed, please refresh your browser window.")}});(function(){o.send({data:{id:_}});return false}).delay(100,this)}return false}function $(){H=="img"?g.addEvent("click",X):g.removeEvent("click",X);if(H=="img"){D=h.width;P=h.height;g.setStyles({cursor:"pointer"});if(e.imgBackground){g.setStyles({backgroundImage:"url("+L+")",display:""})}else{if(P>=l-e.imgPadding&&P/l>=D/f){P=l-e.imgPadding;D=h.width=parseInt(P/h.height*D,10);h.height=P}else if(D>=f-e.imgPadding&&P/l<D/f){D=f-e.imgPadding;P=h.height=parseInt(D/h.width*P,10);h.width=D}if(Browser.ie)h=document.id(h);if(e.clickBlock)h.addEvent("mousedown",function(e){e.stop()}).addEvent("contextmenu",function(e){e.stop()});g.setStyles({backgroundImage:"none",display:""});h.inject(g)}}else if(H=="inline"){g.setStyles({backgroundImage:"none",display:""});e.inlineClone?g.grab(h.get("html")):g.adopt(h.getChildren())}else if(H=="qt"){g.setStyles({backgroundImage:"none",display:""});h.inject(g)}else if(H=="url"){g.setStyles({backgroundImage:"none",display:""});h.inject(g)}else if(H=="obj"){if(Browser.Plugins.Flash.version<"8"){g.setStyles({backgroundImage:"none",display:""});g.set("html",'<div id="mbError"><b>Error</b><br/>Adobe Flash is either not installed or not up to date, please visit <a href="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" title="Get Flash" target="_new">Adobe.com</a> to download the free player.</div>');D=e.DefaultWidth;P=e.DefaultHeight}else{g.setStyles({backgroundImage:"none",display:""});h.inject(g)}}else{g.setStyles({backgroundImage:"none",display:""});g.set("html",e.flashText);D=e.defaultWidth;P=e.defaultHeight}E.set("text",e.showCaption?y[0]:"");S.set("html",y[1]);N.set("html",e.showCounter&&t.length>1?e.counterText.replace(/\{x\}/,e.countBack?t.length-n:n+1).replace(/\{y\}/,t.length):"");if(r>=0&&t[r][0].match(/\.gif|\.jpg|\.jpeg|\.png|twitpic\.com/i))p.src=t[r][0].replace(/twitpic\.com/i,"twitpic.com/show/full");if(i>=0&&t[i][0].match(/\.gif|\.jpg|\.jpeg|\.png|twitpic\.com/i))d.src=t[i][0].replace(/twitpic\.com/i,"twitpic.com/show/full");if(r>=0)C.style.display="";if(i>=0)k.style.display="";g.setStyles({width:D+"px",height:P+"px"});b.setStyles({width:D-I+"px"});x.setStyles({width:D-I+"px"});D=g.offsetWidth;P=g.offsetHeight+b.offsetHeight;if(P>=s+s){o=-s}else{o=-(P/2)}if(D>=u+u){a=-u}else{a=-(D/2)}if(e.resizeOpening){c.resize.start({width:D,height:P,marginTop:o-F,marginLeft:a-F})}else{m.setStyles({width:D,height:P,marginTop:o-F,marginLeft:a-F});J()}(function(){var e=document.getElementById("mbMedia").offsetHeight;var t=document.getElementById("mbTitle").offsetHeight;var n=document.getElementById("mbCaption").offsetHeight;var r=document.getElementById("mbSosmeddiv").offsetHeight;var i=document.getElementById("mbCloseLink").offsetHeight;var s=document.getElementById("mbSbtitle").offsetHeight;var o=document.getElementById("mbNumber").offsetHeight;var u=e+t+n+r+i+s+o+43;m.setStyle("height",u)}).delay(500,this)}function J(){c.media.start(1)}function K(){m.className="";c.bottom.start(1)}function Q(){if(h){if(H=="inline"&&!e.inlineClone)h.adopt(g.getChildren());h.onload=function(){}}c.resize.cancel();c.media.cancel().set(0);c.bottom.cancel().set(0);$$(C,k).setStyle("display","none");$$(N).setStyle("display","none")}function G(){if(n>=0){if(H=="inline"&&!e.inlineClone)h.adopt(g.getChildren());h.onload=function(){};g.empty();for(var t in c)c[t].cancel();m.setStyle("display","none");c.overlay.chain(U).start(0)}return false}var e,t,n,r,i,s,o,u,a,f,l,c,h,p=new Image,d=new Image,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H="none",B,j="easyMedia",F,I;window.addEvent("domready",function(){document.id(document.body).adopt($$([v=(new Element("div",{id:"mbOverlay"})).addEvent("click",G),m=new Element("div",{id:"mbCenter"})]).setStyle("display","none"));container=(new Element("div",{id:"mbContainer"})).inject(m,"inside");g=(new Element("div",{id:"mbMedia"})).inject(container,"inside");b=(new Element("div",{id:"mbBottom"})).inject(m,"inside").adopt(k=(new Element("a",{id:"mbNextLink",href:"#"})).addEvent("click",X),C=(new Element("a",{id:"mbPrevLink",href:"#"})).addEvent("click",W),E=new Element("div",{id:"mbTitle"}),S=new Element("div",{id:"mbSbtitle"}),N=new Element("div",{id:"mbNumber"}),x=new Element("div",{id:"mbCaption"}),T=new Element("div",{id:"mbSosmeddiv"}),closeLink=(new Element("a",{id:"mbCloseLink",href:"#"})).addEvent("click",G));c={overlay:(new Fx.Tween(v,{property:"opacity",duration:360})).set(0),media:new Fx.Tween(g,{property:"opacity",duration:360,onComplete:K}),bottom:(new Fx.Tween(b,{property:"opacity",duration:240})).set(0)}});Easymedia={close:function(){G()},recenter:function(){if(m&&!Browser.Platform.ios){u=window.getScrollLeft()+window.getWidth()/2;m.setStyles({left:u,marginLeft:-(D/2)-F});s=window.getScrollTop()+window.getHeight()/2;F=m.getStyle("padding-left").toInt()+g.getStyle("margin-left").toInt()+g.getStyle("padding-left").toInt();m.setStyles({top:s,left:u,marginTop:-(P/2)-F,marginLeft:-(D/2)-F})}},open:function(n,r,i){e={buttonText:["<big>«</big>","<big>»</big>","<big></big>"],counterText:"({x} of {y})",linkText:'<a href="{x}" target="_new">{x}</a><br/>open in a new tab</div>',flashText:'<b>Error</b><br/>Adobe Flash is either not installed or not up to date, please visit <a href="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" title="Get Flash" target="_new">Adobe.com</a> to download the free player.',center:true,loop:true,keyboard:false,keyboardAlpha:false,keyboardStop:false,overlayOpacity:cpanel[0],resizeOpening:true,resizeDuration:240,initialWidth:90,initialHeight:90,defaultWidth:640,defaultHeight:360,showCaption:true,showCounter:false,countBack:false,clickBlock:true,iOShtml:true,imgBackground:false,imgPadding:100,overflow:"auto",inlineClone:false,html5:"true",scriptaccess:"true",fullscreen:"true",fullscreenNum:"1",autoplay:audiosett[2],autoplayNum:videosett[2],autoplayYes:"yes",volume:audiosett[1],medialoop:audiosett[3],bgcolor:"#000000",wmode:"transparent",playerpath:audiosett[0],showTimecode:"false",controlColor:"0xFFFFFF",controlBackColor:"0x0000000",playerBackColor:"",wmodeNB:"transparent",controller:"true",flInfo:"true",revverID:"187866",revverFullscreen:"true",revverBack:"000000",revverFront:"ffffff",revverGrad:"000000",usViewers:"true",ytBorder:"0",ytColor1:"000000",ytColor2:"333333",ytRel:"0",ytInfo:"1",ytSearch:"0",ytautoplay:videosett[0],vuPlayer:"basic",vmTitle:"1",vmByline:"1",vmPortrait:"1",vmautoplay:videosett[1],vmColor:"ffffff"};if(Browser.firefox2){e.overlayOpacity=1;v.className="mbOverlayOpaque"}if(Browser.Platform.ios){e.keyboard=false;e.resizeOpening=false;v.className="mbMobile";b.className="mbMobile";q()}if(Browser.ie6){e.resizeOpening=false;v.className="mbOverlayAbsolute";q()}if(typeof n=="string"){n=[[n,r,i]];r=0}t=n;e.loop=e.loop&&t.length>1;R();U(true);s=window.getScrollTop()+window.getHeight()/2;u=window.getScrollLeft()+window.getWidth()/2;F=m.getStyle("padding-left").toInt()+g.getStyle("margin-left").toInt()+g.getStyle("padding-left").toInt();I=b.getStyle("margin-left").toInt()+b.getStyle("padding-left").toInt()+b.getStyle("margin-right").toInt()+b.getStyle("padding-right").toInt();m.setStyles({top:s,left:u,width:e.initialWidth,height:e.initialHeight,marginTop:-(e.initialHeight/2)-F,marginLeft:-(e.initialWidth/2)-F,display:""});c.resize=new Fx.Morph(m,{duration:e.resizeDuration,onComplete:J});c.overlay.start(e.overlayOpacity);return V(r)}};Element.implement({easymedia:function(e,t){$$(this).easymedia(e,t);return this}});Elements.implement({easymedia:function(e,t,n,r){t=t||function(e){M=e.rel.split(/[\[\]]/);M=M[1];return[e.get("href"),e.title,M,e.get("class")]};n=n||function(){return true};var i=this;i.addEvent("contextmenu",function(e){if(this.toString().match(/\.gif|\.jpg|\.jpeg|\.png/i))e.stop()});i.removeEvents("click").addEvent("click",function(){var r=i.filter(n,this);var s=[];var o=[];r.each(function(e,t){if(o.indexOf(e.toString())<0){s.include(r[t]);o.include(r[t].toString())}});return Easymedia.open(s.map(t),o.indexOf(this.toString()),e)});return i}})})();Browser.Plugins.QuickTime=function(){if(navigator.plugins){for(var e=0,t=navigator.plugins.length;e<t;e++){if(navigator.plugins[e].name.indexOf("QuickTime")>=0){return true}}}else{var n;try{n=new ActiveXObject("QuickTime.QuickTime")}catch(r){}if(n){return true}}return false}();Easymedia.scanPage=function(){var e=$$("a").filter(function(e){return e.rel&&e.rel.test(/^easymedia/i)});e.easymedia({},null,function(e){var t=this.rel.replace(/[\[\]|]/gi," ");var n=t.split(" ");var r="\\["+n[1]+"[ \\]]";var i=new RegExp(r);return this==e||this.rel.length>8&&e.rel.match(i)})};window.addEvents({domready:Easymedia.scanPage,resize:Easymedia.recenter})