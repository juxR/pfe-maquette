(function(e){var t=e("#gmap"),n=e(".main"),r=e(window).height();$winWidth=e(window).height();e(function(){t&&i();e(".goTo").on("click",function(t){t.preventDefault();o(e(this))})});var i=function(){nHeight=s(r,90)-(e(".banner").height()+e(".addInfos").height());t.css({height:nHeight});n.css({height:"auto","min-height":"100%"})},s=function(e,t){return e/100*t},o=function(t){e("html,body").animate({scrollTop:t.offset().top},"slow")}}).call(this,jQuery);