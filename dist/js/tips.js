!function(t){return"object"==typeof module&&module.exports?module.exports=t(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){return t.extend({tips:function(e){var o,n,i,u,f;return u={action:"focus",debug:!1,element:".error",fadeSpeed:200,html5:!0,preventDefault:!1,removeAll:!1,removeSpecific:!1,tailLength:14,tooltipClass:""},u=t.extend(u,e),n=function(t){return u.debug&&"undefined"!=typeof console&&null!==console?console.info(t):void 0},i=function(t){var e,o,n,i,u,f,c;n=[],f=[],o=[],u=[],e=t.split("");for(i in e)c=e[i],"^"===c&&n.push(i),"*"===c&&f.push(i),"~"===c&&o.push(i),"`"===c&&u.push(i),"|"===c&&(e[i]="<br />"),"{"===c&&(e[i]="<ul>"),"}"===c&&(e[i]="</ul>");for(;n.length>1;)e[n[0]]="<h1>",e[n[1]]="</h1>",n.splice(0,2);for(;f.length>1;)e[f[0]]="<strong>",e[f[1]]="</strong>",f.splice(0,2);for(;o.length>1;)e[o[0]]="<em>",e[o[1]]="</em>",o.splice(0,2);for(;u.length;)e[u[0]]="<li>",u.splice(0,1);return e.join("")},f=function(e){var f,c,l,r,s,d,p,a,m,h,b;if(e.attr("data-tooltip")){switch(o(),r=i(e.attr("data-tooltip")),f=e.attr("data-tooltip-direction"),a=u.html5?"<aside>":"<div>",t(a).addClass("tooltip "+u.tooltipClass).html(r).appendTo("body"),l=e.outerWidth(),c=e.outerHeight(),h=t(".tooltip:last").outerWidth(),m=t(".tooltip:last").outerHeight(),d=e.offset(),b=d.top,s=0,p=0,f){case"left":p=d.left-h-u.tailLength,b=b-m/2+c/2,t(".tooltip:last").css({left:p,top:b}).addClass("left").fadeIn(u.fadeSpeed);break;case"bottom":b=d.top+c+u.tailLength,s=d.left+l/2-h/2,t(".tooltip:last").css({left:s,top:b}).addClass("bottom").fadeIn(u.fadeSpeed);break;case"top":b=d.top-m-u.tailLength,s=d.left+l/2-h/2,t(".tooltip:last").css({left:s,top:b}).addClass("top").fadeIn(u.fadeSpeed);break;default:s=d.left+l+u.tailLength,b=b-m/2+c/2,t(".tooltip:last").css({left:s,top:b}).fadeIn(u.fadeSpeed)}if(u.debug&&(n("Tooltip Content: "+r),l&&n("Element Width: "+l),c&&n("Element Height: "+c),b&&n("Element Top Position: "+b),s&&n("Element Left Position: "+s),p&&n("Element Right Position: "+p),h&&n("Tooltip Width: "+h),m))return n("Tooltip Height: "+m)}},o=function(){return t(".tooltip").fadeOut(u.fadeSpeed,function(){return t(this).remove()})},this(function(){var e;if(e=u.element,u.removeSpecific&&!u.removeAll&&(u.debug&&n("unbinding tooltip"),u.action&&e))switch(u.action){case"click":t(document).off("click.tips.cd",e),t(document).off("blur.tips.bc",e);break;case"hover":t(document).off("click.tips.hc",e),t(document).off("mouseenter.tips.he",e),t(document).off("mouseout.tips.ho",e);break;default:t(document).off("click.tips.fc",e),t(document).off("focus.tips.ff",e),t(document).off("blur.tips.fb",e),t(document).off("change.tips.fch",e)}if(u.removeAll&&(u.debug&&n("removing all tooltip binding"),t(document).off("click.tips"),t(document).off("blur.tips"),t(document).off("mouseenter.tips"),t(document).off("mouseout.tips"),t(document).off("change.tips")),!u.removeAll&&!u.removeSpecific)switch(u.action){case"click":return t(document).on("click.tips.cc",e,function(e){return u.preventDefault&&e.preventDefault(),t(this).is(":input")||t(this).attr("tabindex")||t(this).attr("tabindex",0).focus(),f(t(this))}),t(document).on("blur.tips.bc",e,function(e){return t(this).is(":input")||t(this).attr("tabindex")||t(this).removeAttr("tabindex"),o()});case"hover":return t(document).on("click.tips.hc",e,function(t){return u.preventDefault?t.preventDefault():void 0}),t(document).on("mouseenter.tips.he",e,function(e){return f(t(this))}),t(document).on("mouseout.tips.ho",e,function(t){return o()});default:return t(document).on("click.tips.fc",e,function(t){return u.preventDefault?t.preventDefault():void 0}),t(document).on("focus.tips.ff",e,function(e){return f(t(this))}),t(document).on("blur.tips.fb",e,function(t){return o()}),t(document).on("change.tips.fch",e,function(t){return o()})}})}})});