function register() {
  // var input = document.getElementsByTagName('input');
  var fName = document.getElementById('fName');
  var lName = document.getElementById('lName');
  var email = document.getElementById('email');
  var alias = document.getElementById('alias');

  // alert(fName.value)
  if (fName.value.length == 0 || lName.value.length == 0 || email.value.length == 0 || alias.value.length == 0) {
    alert('please fill out the entire form');
    // alert(fName.value);
  } else {
    var newFriend = {fName:'fName.value', lName:'lName.value', email:'email.value', alias:'alias.value'}
    alert('you have been registered');
  }
}


$( document ).ready(function() {
  $('#work').removeClass("preload");

  // nav tab color
  var tabs = ["index.html", "people.html", "work.html", "hobbies.html", "about.html", "contact.html"];

  if (window.location.pathname == "/gordon/" + tabs[1]) {
    $(".people_tab").addClass("active");
  } else if (window.location.pathname == "/gordon/" + tabs[2]) {
    $(".work_tab").addClass("active");
  } else if (window.location.pathname == "/gordon/" + tabs[3]) {
    $(".hobbies_tab").addClass("active");
  } else if (window.location.pathname == "/gordon/" + tabs[4]) {
    $(".about_tab").addClass("active");
  } else if (window.location.pathname == "/gordon/" + tabs[4] + "#smash") {
    $(".about_tab").addClass("active");
  } else if (window.location.pathname == "/gordon/" + tabs[4] + "#skate") {
    $(".about_tab").addClass("active");
  } else if (window.location.pathname == "/gordon/" + tabs[5]) {
    $(".contact_tab").addClass("active");
  };


  $('#simple-menu').sidr({
    name: 'sidr-right',
    side: 'right'
  });

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


    //WORK PAGE

    var ul = $("<ul></ul>");

    var data = [
      'Created sleek designs with HTML/CSS',
      'Created responsive designs for mobile',
      'Lead front end development for all projects',
      'Tested functionality across all browsers',
      'Managed and collaborated codebases via Git',
      'Formatted weekly email newsletters in html'
    ];

    for (var i = 0; i < data.length; i++) {
      var li_list = $("<li></li>").html(data[i]);
      ul.append(li_list);
    };

    $("#duties").prepend(ul);


    if ($(window).width() >= 1025) {
      $('.work_content').hover(function(){
        $('.project').fadeTo(100, 0.33);
      }, function(){
        $('.project').fadeTo(100, 1);
      });
    } else if ($(window).width() <= 1025) {
      $('.work_content').hover(function(){
        // $('.project').fadeTo(100, 0.33);
      }, function(){
        // $('.project').fadeTo(100, 1);
      });
    };


    // HOBBIES PAGE
    $('.show_video').click(function() {
      $('.video_container').show(1000);
      $('.hide_video').show();
      $('.show_video').hide();
    });

    $('.hide_video').click(function() {
      $('.video_container').hide(1000);
      $('.show_video').show();
      $('.hide_video').hide();
    });


    // ABOUT PAGE
    // slider
      $("#owl-demo").owlCarousel({
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        stopOnHover: true,
        pagination: false,
        navigationText: ["<img src='images/owl-prev.png' />","<img src='images/owl-next.png' />"]
        // autoPlay: 1000
   
        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
      });



});