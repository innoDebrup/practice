$(document).ready(function(){
  $(document).scroll(function(){
    if($(document).scrollTop() > 30){
      $(".topHeader").slideUp(500);
    }
    else{
      $(".topHeader").slideDown(500);
    }
  })
  $("#ham").click(function(){
    $("#navLinks").slideDown(500);
    $("#search").slideDown(500);
    $("#cross").show();
    $(".right").slideDown(500);
    $(this).hide();
  })
  $("#cross").click(function(){
    $("#navLinks").slideUp(500);
    $("#search").slideUp(500);
    $("#ham").show();
    $(".right").slideUp(500);
    $(this).hide();
  })

  $("#cdown").click(function(){
    $(".topHeader").animate({height: "400px"},700);
    $("#cup").show();
    $(this).hide();
  })
  $("#cup").click(function(){
    $(".topHeader").animate({height: "140px"},700);
    $("#cdown").show();
    $(this).hide();
  })
})