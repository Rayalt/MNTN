"use strict";window.onload=function(){window.addEventListener("scroll",(function(){let e,t,n,o,l,s,c;for(e=this.pageYOffset,t=document.querySelectorAll('[data-type="parallax"]'),o=0,length=t.length;o<length;o++)n=t[o],l=n.getAttribute("data-depth"),s=-e*l,c="translate3d(0, "+s+"px, 0)",n.style.transform=c}));let e=document.querySelector(".header__menu"),t=document.querySelector(".side-nav__close"),n=document.querySelector(".page__darker"),o=document.querySelector("body");e.addEventListener("click",(function(){o.classList.toggle("open-nav")})),t.addEventListener("click",(function(){o.classList.toggle("open-nav")})),n.addEventListener("click",(function(){o.classList.toggle("open-nav")}));let l=document.querySelectorAll(".nav-steps__item");window.addEventListener("scroll",e=>{let t=window.scrollY;l.forEach(e=>{let n=document.querySelector(e.hash);n.offsetTop<=t&&n.offsetTop+n.offsetHeight>t?e.classList.add("nav-steps__item_active"):e.classList.remove("nav-steps__item_active")})})};