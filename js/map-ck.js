(function(e){"use strict";var t,n=[],r=[],i,s,o,u,a,f=!1,l=[],c=[],h=new google.maps.LatLng,p=[],d,u,v=new google.maps.Circle,m=new google.maps.Rectangle,g=[],y=[],b=new RegExp("[,]"),w=new google.maps.Geocoder,E,S=new google.maps.Marker,x=document.getElementById("map"),T,N=e(".loading"),C=e(".mapItem");e(function(){e("#rapide input").on("click",A);var t={types:["(cities)"],componentRestrictions:{country:"be"}}});var k=function(){A();R();C.css("display","block");e(".label-range").on("click",function(){console.log(e(".irs-slider.single"));e(".irs-slider.single").focus()})},L=function(){e("#filtrer").click(function(){var t=document.getElementById("distance").value;e.isNumeric(t)?u=t:u=0;var n=document.getElementById("map").value;f?B(u):z(n,u)});e("#map").change(function(){var t=document.getElementById("distance").value;e.isNumeric(t)?u=t:u=0;var n=document.getElementById("map").value;f=!1;f?B(u):z(n,u)})},A=function(){e("label.map1").text("Ecole ciblée");e("input#map").attr("placeholder","Ecole");if(e("#rapide input:checked").val()==="aucun")I();else{q();e("label.map1").text("Indiquez l'adresse ou clickez sur une école");e("input#map").attr("placeholder","Ville, école")}L()},O=function(){e.ajax({dataType:"json",url:"dataKot",success:function(e){o=e.data;_(o)}})},M=function(){e.ajax({dataType:"json",url:"dataEcole",success:function(e){a=e.data;D(a)}})},_=function(e){var t=new google.maps.MarkerImage("http://www.google.com/intl/en_us/mapfiles/ms/micons/red-dot.png");for(var n=0;n<=e.length-1;n++){var r=e[n].lat,i=e[n].lng,s=[r,i];g.push(s);P(Number(g[n][0]),Number(g[n][1]),e[n].adresse,t)}},D=function(e){var t=new google.maps.MarkerImage("http://www.google.com/intl/en_us/mapfiles/ms/micons/blue-dot.png");for(var n=0;n<=e.length-1;n++){var r=e[n].lat,i=e[n].lng,s=[r,i];y.push(s);H(Number(y[n][0]),Number(y[n][1]),e[n].nom,t)}},P=function(e,r,s,o){var u=new google.maps.LatLng(e,r);i=new google.maps.Marker({position:u,map:t,animation:google.maps.Animation.DROP,title:s,icon:o});n.push(i)},H=function(n,o,u,l){var d=new google.maps.LatLng(n,o);s=new google.maps.Marker({position:d,map:t,animation:google.maps.Animation.DROP,title:u,icon:l});r.push(i);google.maps.event.addListener(s,"click",function(n){f=!0;console.log(f);p=[];t.setZoom(12);t.panTo(s.getPosition());for(var r=0;r<=a.length-1;r++){p={latlng:new google.maps.LatLng(a[r].lat,a[r].lng),nom:a[r].nom};c.push(p)}for(var r=0;r<=c.length-1;r++)if(n.latLng.lat()===c[r].latlng.lat()&&n.latLng.lng()===c[r].latlng.lng()){e("#map").attr("value",c[r].nom);h=new google.maps.LatLng(c[r].latlng.lat(),c[r].latlng.lng())}})},B=function(e){U("ecole",h,u)},j=function(e,n,r){return{strokeColor:r,strokeOpacity:.8,strokeWeight:2,fillColor:r,fillOpacity:.35,map:t,center:e,radius:n}},F=function(r,i){l=[];var s=j(r,i);v.setOptions(s);var u=v.getBounds();for(var a=0;a<=o.length-1;a++)if(!u.contains(new google.maps.LatLng(o[a].lat,o[a].lng)))n[a].setMap(null);else{l.push(o[a]);n[a].setMap(t);t.fitBounds(u);e("#listKot").attr("value",JSON.stringify(l))}},I=function(){e("#gmap").css({display:"none"});e(".mapInfo").css({height:"auto",marginLeft:0,"float":"none"})},q=function(){e("#gmap").css({display:"block"});e(".mapInfo").css({height:"auto",marginLeft:0,"float":"left"})},R=function(){var e=[{featureType:"administrative.country",elementType:"geometry.stroke",stylers:[{color:"#00006f"},{lightness:-5},{visibility:"on"},{weight:3},{hue:"#ff0091"}]},{featureType:"all",elementType:"all",stylers:[{invert_lightness:!0},{saturation:0},{lightness:25},{gamma:.6},{hue:"#435158"}]}],n={disableDefaultUI:!0,scrollwheel:!1,zoom:7,mapTypeId:google.maps.MapTypeId.ROADMAP,center:new google.maps.LatLng(50.5,4.6),styles:e};t=new google.maps.Map(document.getElementById("gmap"),n);M()},U=function(e,n,r){v&&v.setMap(null);u=Number(r);var i=n,s=gSpherical.computeOffset(i,u,0);if(e==="ville"){S.setPosition(i);S.setMap(t);var o="#FF0000"}else e==="ecole";var o="#0000FF",u=google.maps.geometry.spherical.computeDistanceBetween(i,s),a=j(n,u,o);v.setOptions(a);F(n,u)},z=function(n,r){var i=Number(r),s={disableDefaultUI:!0,scrollwheel:!1,zoom:8,mapTypeId:google.maps.MapTypeId.HYBRID,center:w.geocode({address:n,region:"BE"},function(n,s){if(s===google.maps.GeocoderStatus.OK){var o=n[0].geometry.location;t.setZoom(9);t.panTo(o);e("#coords").attr("value",o);var u=gSpherical.computeOffset(o,i,360);S.setPosition(o);S.setMap(t);U("ville",o,r)}else s===google.maps.GeocoderStatus.ZERO_RESULTS?alert("La google map n'a rien trouvé car aucune donnée n'a été entré"):s===google.maps.GeocoderStatus.INVALID_REQUEST&&alert("La google map n'a rien trouvé car la requête est incorrect")})}};google.maps.event.addDomListener(window,"load",k)}).call(this,jQuery);