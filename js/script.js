$(window).on('load', function(){    // On Page Load

  $('html').removeClass('hidden');

  //Responsivity for Screen Orientation
  var height = $(window).height();
  var width = $(window).width();

  //Calling function on Page Load
  sec1_screen_mode(width,height);

  //Calling function on Page Resize without Refresh
  $(window).resize(function () {
    var height = $(window).height();
    var width = $(window).width();
    sec1_screen_mode(width,height); 
  });

});

//Function to Reorient Section 1 Icons
function sec1_screen_mode(width,height){

  //  if (height < 300 && width > height){
  //   $(".icons-fa").css("display","none")
  // }

  if (height < width && width < 768 && width > 576) {
    $("#icons-sec1").addClass("flex-column");
    $("#icons-sec1").addClass("align-items-end").removeClass("justify-content-between");
  }

  if (height < width && width >= 768 && width < 992 && height < 600) {
    $("#icons-sec1").addClass("flex-column");
    $("#icons-sec1").addClass("align-items-end").removeClass("justify-content-between");
  }

  if ((height > width) || (height < width && width > 750 && height < 500 )) {
     $(".icons-fa").css("display","inline-block")
    $("#icons-sec1").removeClass("flex-column");
    $("#icons-sec1").addClass("justify-content-between").removeClass("align-items-end");
  }

  //Hide Toggler on losing focus
  $(".navbar-toggler").blur(function(event){
    var screenWidth = window.innerWidth;
    if (screenWidth < 768){
      $("#navbar-opt").collapse('hide');
    }
  });

  //Changing Delay for Mobile Version
  if(width < 768) { 
    $("#dl-1").addClass("delay-5").removeClass("delay-1");
    $("#dl-2").addClass("delay-6").removeClass("delay-2");
    $("#dl-3").addClass("delay-7").removeClass("delay-3");
    $("#dl-4").addClass("delay-8").removeClass("delay-4");
  }

  //Changing Content for Section 1 for mobile devices
  if(width < 768) { 
    var h1_sec1 = $("#h1-sec1");
    h1_sec1.html("<span class='highlight' id='highlight-1'>Aditya Singh</span>");
    var h4_sec1 = $("#h4-sec1");
    h4_sec1.html("Front End Web Developer");
  }

  //Resetting for Orientation Change without Page Refresh
  if(width > 768) { 
    var h1_sec1 = $("#h1-sec1");
    h1_sec1.html("Hello, I'm <span class='highlight' id='highlight-1'>Aditya Singh</span>");
    var h4_sec1 = $("#h4-sec1");
    h4_sec1.html("I'm a Front End Web Developer");
  }

}
