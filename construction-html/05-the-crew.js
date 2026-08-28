(function(){
  var cards=document.querySelectorAll(".crew__card[data-animate]");
  cards.forEach(function(c,i){c.style.transitionDelay=(i*0.08)+"s"});
  if("IntersectionObserver" in window){
    var o=new IntersectionObserver(function(entries){
      entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add("is-visible");o.unobserve(e.target)}});
    },{threshold:0.12});
    cards.forEach(function(c){o.observe(c)});
  }else{cards.forEach(function(c){c.classList.add("is-visible")})}
})();
