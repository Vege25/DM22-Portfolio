// When website loads navbar script hide one navbar depending of the current window size
if(window.innerWidth < 576){
    $("#navbar2").show();
    $("#navbar1").hide();
}
else{
    $("#navbar2").hide();
    $("#navbar1").show();
}

// When window is being rezised hide one navbar depending of the current window size
$( window ).resize(function() {
    if(window.innerWidth < 576){
        $("#navbar2").show();
        $("#navbar1").hide();
    }
    else{
        $("#navbar2").hide();
        $("#navbar1").show();
    }
  });
