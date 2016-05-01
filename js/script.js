$(document).ready(function(){

  /* Dropdown Toggles */
  $("#toggle1").click(function(){
    $("#fl1").slideToggle("slow");
  });

  $("#toggle2").click(function(){
    $(".fl2").slideToggle("slow");
  });

  $("#toggle3").click(function(){
    $(".fl3").slideToggle("slow");
  });

  $("#toggle4").click(function(){
    $(".fl4").slideToggle("slow");
  });

  $("#toggle5").click(function(){
    $(".fl5").slideToggle("slow");
  });

  $(".box").hover(function(){
    $(this).css({"background-color": "rgba(255, 255, 255, 0.7)"});
    }, function(){
      $(this).css({"background-color": "rgba(255, 255, 255, 0.5)", "color": "black"});
    });
});

