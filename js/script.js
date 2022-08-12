const navbar = document.querySelector(".site-header__menu-btn");
var head = document.querySelector(".site-header");
var list = document.querySelector(".sitenav");
navbar.addEventListener("click" , function(){
  head.classList.toggle("sitenav-on")
});