$( document ).ready(function() {
  // nav tab color
  var tabs = ["index.html", "people.html", "work.html", "hobbies.html", "about.html"];

  if (window.location.pathname == "/gmoney/" + tabs[1]) {
    $(".people_tab").addClass("active");
  } else if (window.location.pathname == "/gmoney/" + tabs[2]) {
    $(".work_tab").addClass("active");
  } else if (window.location.pathname == "/gmoney/" + tabs[3]) {
    $('body').css({'background': '#000'});
    $(".hobbies_tab").addClass("active");
  } else if (window.location.pathname == "/gmoney/" + tabs[4]) {
    $(".about_tab").addClass("active");
  };

	$(".smash_slide").hover(function(){
       $(".smash_slide img").show();
       $(".smash_slide img").animate({
       	'margin-left': '100%'
       }); 
    }, function(){
       $(".smash_slide img").animate({
       	'margin-left': '0'
       });

       $(".smash_slide img").hide(500);
    });

    $(".skate_slide").hover(function(){
       $(".skate_slide img").show();
       $(".skate_slide img").animate({
       	'margin-left': '-100%'
       });
    }, function(){
    	$(".skate_slide img").animate({
    		'margin-left': '0'
    	});
    	$(".skate_slide img").hide(500);
    });
});