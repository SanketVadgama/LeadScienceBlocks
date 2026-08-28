(function(){
  var cards=document.querySelectorAll(".acc-card");
  cards.forEach(function(card){
    card.addEventListener("mouseenter",function(){setOpen(card)});
    card.addEventListener("click",function(){setOpen(card)});
  });
  function setOpen(el){
    cards.forEach(function(c){c.classList.remove("is-open")});
    el.classList.add("is-open");
  }
})();
