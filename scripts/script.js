$( document ).ready(function() {
  // nav tab color
  var tabs = ["index.html", "people.html", "work.html", "hobbies.html", "about.html"];

  if (window.location.pathname == "/gmoney/" + tabs[1]) {
    $(".people_tab").addClass("active");
  } else if (window.location.pathname == "/gmoney/" + tabs[2]) {
    $(".work_tab").addClass("active");
  } else if (window.location.pathname == "/gmoney/" + tabs[3]) {
    $(".hobbies_tab").addClass("active");
  } else if (window.location.pathname == "/gmoney/" + tabs[4]) {
    $(".about_tab").addClass("active");
  };

	$(".smash_slide").hover(function(){
       $(".smash_icon").show();
       $(".smash_icon").animate({
       	'margin-left': '100%'
       });
       $(".left_red_arrow").show();
       $(".left_arrow").hide();
    }, function(){
       $(".smash_icon").animate({
       	'margin-left': '0'
       });
       $(".left_red_arrow").hide();
       $(".left_arrow").show();

       $(".smash_icon").hide(500);
    });

    $(".skate_slide").hover(function(){
       $(".skate_icon").show();
       $(".skate_icon").animate({
       	'margin-left': '-100%'
       });
       $(".right_arrow").hide();      
       $(".right_red_arrow").show();      
    }, function(){
    	$(".skate_icon").animate({
    		'margin-left': '0'
    	});
      $(".right_arrow").show();       
       $(".right_red_arrow").hide();      
    	$(".skate_icon").hide(500);
    });
});