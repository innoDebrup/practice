$(document).ready(function(){
  $(document).scroll(function(){
    if($(document).scrollTop() > 30){
      $(".topHeader").slideUp(500);
    }
    else{
      $(".topHeader").slideDown(500);
    }
  })
})