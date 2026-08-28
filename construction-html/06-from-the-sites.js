(function(){
  var figs=document.querySelectorAll(".sites__fig[data-animate]");
  figs.forEach(function(f,i){f.style.transitionDelay=(i*0.05)+"s"});
  if("IntersectionObserver" in window){
    var o=new IntersectionObserver(function(entries){
      entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add("is-visible");o.unobserve(e.target)}});
    },{threshold:0.15});
    figs.forEach(function(f){o.observe(f)});
  }else{figs.forEach(function(f){f.classList.add("is-visible")})}
})();
