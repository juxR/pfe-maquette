(function(e){var t=e(".map"),n=e(".main"),r=e(window),i,s=100,o=e(window).height(),u=e(window).width(),a=e("html,body"),f=e(".addInfos"),l=e(".banner"),c=e(".mapItem"),h=e("body"),p=e(".kots").outerHeight();e(function(){t&&E();h.on("click",d);c.find(".head").on("click","a",m);e(".lang").on("click","a",v);e(".connection,.register").css({});e("#form-range").ionRangeSlider({min:0,max:1e4,type:"single",postfix:" mètres",prettify:!0,disable:!1,onChange:function(t){e(".label-range").html("Distance ("+t.fromNumber+"m): ")}});g();e(window).resize(function(){E(e(window).height());w()});w();e(".goTo").on("click",function(t){t.preventDefault();x(e("#main"))})});var d=function(e){},v=function(t){t.preventDefault();e(".otherLanguages").slideToggle()},m=function(t){t.preventDefault();var n=e(this).parent().parent(),r=e(this).parent().next();if(n.hasClass("active"))r.slideUp(function(){n.removeClass("active")});else{c.find(".stuff.active .content").slideUp(function(){e(this).parent().removeClass("active")});n.addClass("active");r.slideDown();c.find(".stuff").not(".active")}},g=function(){u>808?e(".kotsByCities").css({height:p}):e(".kotsByCities").css("height","auto")},y=function(){a.scrollTop()>f.height()+l.outerHeight()+i?l.css({position:"fixed",top:0,left:0,right:0}):l.css({position:"relative"})},b=function(){a.scrollTop()>30?f.slideUp():f.slideDown()},w=function(){e(".kot .content").ellipsis()},E=function(r){r?i=S(r,s)-(e(".banner").height()+e(".addInfos").height()):i=S(o,s)-(e(".banner").height()+e(".addInfos").height());t.css({height:i});n.css({height:"auto","min-height":"100%"})},S=function(e,t){return e/100*t},x=function(t){e("html,body").animate({scrollTop:t.offset().top},"slow")}}).call(this,jQuery);