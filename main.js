$(document).ready((function(){$(window).outerWidth(),$(window).outerHeight();var e=window.navigator.userAgent,t=(e.indexOf("MSIE "),{Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return t.Android()||t.BlackBerry()||t.iOS()||t.Opera()||t.Windows()}});function o(){return(e=navigator.userAgent).indexOf("MSIE ")>-1||e.indexOf("Trident/")>-1}if(o()&&$("body").addClass("ie"),t.any()&&$("body").addClass("touch"),(t={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return t.Android()||t.BlackBerry()||t.iOS()||t.Opera()||t.Windows()}}).any()){document.body.classList.add("_mobile");let e=document.querySelectorAll(".menu__arrow");if(e.length>0)for(let t=0;t<e.length;t++){const o=e[t];o.addEventListener("click",(function(e){o.parentElement.classList.toggle("_active")}))}}else document.body.classList.add("_pc");const n=document.querySelector(".menu__icon"),i=document.querySelector(".menu__body");n&&n.addEventListener("click",(function(e){document.body.classList.toggle("_lock"),n.classList.toggle("_active"),i.classList.toggle("_active")}));var r=document.getElementById("nav");window.onscroll=function(){"use strict";document.body.scrollTop>=1||document.documentElement.scrollTop>=1?r.classList.add("header__burger_scroll"):r.classList.remove("header__burger_scroll")};const a=document.querySelectorAll(".menu__link[data-goto]");if(a.length>0){function c(e){const t=e.target;if(t.dataset.goto&&document.querySelector(t.dataset.goto)){const o=document.querySelector(t.dataset.goto).getBoundingClientRect().top+pageYOffset-document.querySelector(".header__container").offsetHeight;n.classList.contains("_active")&&(document.body.classList.remove("_lock"),n.classList.remove("_active"),i.classList.remove("_active")),window.scrollTo({top:o,behavior:"smooth"}),e.preventDefault()}}a.forEach((e=>{e.addEventListener("click",c)}))}function s(){$(".popup").removeClass("active").fadeOut(300),$(".menu__body").hasClass("active")||(t.any()?$("body").removeClass("lock"):(setTimeout((function(){$("body").css({paddingRight:0}),$(".pdb").css({paddingRight:0})}),200),setTimeout((function(){$("body").removeClass("lock")}),200))),$(".popup-video__value").html(""),history.pushState("","",window.location.href.split("#")[0])}$(".pl").click((function(e){return function(e,o){$(".popup").removeClass("active").hide(),$(".menu__body").hasClass("active");t.any()?setTimeout((function(){$("body").addClass("lock")}),300):($("body").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()}).addClass("lock"),$(".pdb").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()}));history.pushState("","","#"+e),""!=o&&null!=o&&$(".popup-"+e+" .popup-video__value").html('<iframe src="https://www.youtube.com/embed/'+o+'?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>');$(".popup-"+e).fadeIn(300).delay(300).addClass("active"),$(".popup-"+e).find(".slick-slider").length>0&&$(".popup-"+e).find(".slick-slider").slick("setPosition")}($(this).attr("href").replace("#",""),$(this).data("vid")),!1})),$(".popup-close,.popup__close").click((function(e){return s(),!1})),$(".popup").click((function(e){if(!$(e.target).is(".popup>.popup-table>.cell *")||$(e.target).is(".popup-close")||$(e.target).is(".popup__close"))return s(),!1})),$(document).on("keydown",(function(e){27==e.which&&s()})),$(".goto").click((function(){var e=$(this).attr("href").replace("#","");return $("body,html").animate({scrollTop:$("."+e).offset().top+0},500,(function(){})),$(".menu__body").hasClass("active")&&($(".menu__body,.icon-menu").removeClass("active"),$("body").removeClass("lock")),!1})),function(){if(o()){let t=document.querySelectorAll(".ibg");for(var e=0;e<t.length;e++)t[e].querySelector("img")&&null!=t[e].querySelector("img").getAttribute("src")&&(t[e].style.backgroundImage="url("+t[e].querySelector("img").getAttribute("src")+")")}}()}));