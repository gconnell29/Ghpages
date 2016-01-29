$( document ).ready(function() {
	$(".phrases").hide();

	$( ".profile-pic" ).click(function() {
		$(".phrases").toggle();
		$(".name").css(["color: red;"]);
	});

	// nav tab color
	var tabs = ["index.html", "people.html", "work.html", "interests.html", "about.html"];

	if (window.location.pathname == "/gmoney-c/" + tabs[0]) {
		$(".home_tab").addClass("active");
	} else if (window.location.pathname == "/gmoney-c/" + tabs[1]) {
		$(".people_tab").addClass("active");
	} else if (window.location.pathname == "/gmoney-c/" + tabs[2]) {
		$(".work_tab").addClass("active");
	} else if (window.location.pathname == "/gmoney-c/" + tabs[3]) {
		$(".interests_tab").addClass("active");
	} else if (window.location.pathname == "/gmoney-c/" + tabs[4]) {
		$(".about_tab").addClass("active");
	} else {
		$(".home_tab").addClass("active");
	};

	$( ".form_tab" ).click(function() {
		$(this).next().toggle();
	});

	$( ".showmore_distant" ).click(function() {
		$(".more_distant").show();
		$(".showless_distant").show();
		$(this).hide();
	});

	$( ".showless_distant" ).click(function() {
		$(".more_distant").hide();
		$(".showmore_distant").show();
		$(this).hide();
	});

	$(window).scroll(function() {
		if ($(window).scrollTop() >= 350) {
			$('.aside').css({
				'position': 'fixed',
				'top': '20px', 
				'width': '150px' 
			});
		};

		if ($(window).scrollTop() <= 349) {
			$('.aside').css({
				'position': 'initial',
				'top': 'initial' 
			});
		};

		console.log($(window).scrollTop());
	});
});


function validateSignUp() {
	if(validatePassword() == false){
        return false;
    }
    alert("yo");
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var fname = document.getElementById("fname").value;


    if (typeof(Storage) != "undefined") {
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("password", password);
        sessionStorage.setItem("firstName", firstName);

        alert("REGISTER SUCCESSFUL");
        setErrorMessage("signUpErrorMessage","Successfully Registered");
    	document.getElementById('signUpErrorMessage').innerHTML= "SignUp not Successful";
        return true;
    }

    alert("REGISTER UNSUCCESSFUL");
    document.getElementById('signUpErrorMessage').innerHTML= "SignUp not Successful";
    return false;
}

function validPass(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var p = document.getElementById("password").value;
    var vp = document.getElementById("vpassword").value;
    var email = document.getElementById("email").value;

	if(p!=vp){
		document.getElementById('errorMessage').innerHTML="Passwords do not match!";
		return false;
	 }

	if (typeof(Storage) != "undefined") {
		sessionStorage.setItem("email", email);
		sessionStorage.setItem("password", p);
		sessionStorage.setItem("fname", fname);
	}

	document.getElementById('errorMessage').innerHTML="";
		return true;
}