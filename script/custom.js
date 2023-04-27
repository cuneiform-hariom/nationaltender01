var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}


$(document).ready(function(){
  $(".ClsBtn").click(function(){
    $(".dropdown-menu,.dropdown-toggle").removeClass("show");
  });
});

/*********side nav toggle for mobile ***********/

function openNav() {
  document.getElementById("mySidenav").style.width = "320px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/*********************/

/*********filter tab of tender info***********/

function FilterTab(evt, TabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontentfilter");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinksfilter");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(TabName).style.display = "block";
  evt.currentTarget.className += " active";
}

/*********************************/

/*********sidebar tab menu for bid result page***********/

function MenuTab(evt, TabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("menucontentfilter");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("menulinksfilter");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(TabName).style.display = "block";
  evt.currentTarget.className += " active";
}

/***************************************************/


/*********Event page tab box ***********/

function EventTab(evt, TabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("eventcontentfilter");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("eventlinksfilter");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(TabName).style.display = "block";
  evt.currentTarget.className += " active";
}




/***************************************************/

/*********side nav close on sidebar tab menu click***********/

$(document).ready(function () {
  $(window).on("resize", function (e) {
    checkScreenSize();
  });

  checkScreenSize();

  function checkScreenSize() {
    var newWindowWidth = $(window).width();
    if (newWindowWidth < 991) {
      $("#InnerPage .DashBoardWrap .VerticleMenuWrap li .TabBoxMenu .menulinksfilter").click(function () {
        $("#mySidenav").css("width", "0");
      });
    } else {
      $("#InnerPage .DashBoardWrap .VerticleMenuWrap li .TabBoxMenu .menulinksfilter").click(function () {
        $("#mySidenav").css("width", "100%");
      });
    }
  }
});


$('.review').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    smartSpeed:750,
    nav:true,
    dots:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
           
        },
        600:{
            items:1,
           
        },
        1000:{
            items:1,
          
        }
    }
});



$(function () {
  $("#date").datepicker({
    dateFormat: "dd-M",
    minDate: 1
  });

  $(".date-icon").on("click", function () {
    $("#date").focus();
  });
});


$(document).ready(function(){
  $("#InnerPage .SubmissionListBox .BottomBox .LoadMoreBtnBox .LoadMoreBtn").click(function(){
    $(this).parent().parent().toggleClass('Active');
    $(this).parent().toggleClass("Active");
  });
});


/**********review*************/
$('.review').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    smartSpeed:750,
    nav:true,
    dots:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
           
        },
        600:{
            items:1,
           
        },
        1000:{
            items:1,
          
        }
    }
});


$(document).ready(function(){
$( ".owl-carousel .owl-next").html('<i class="fas fa-chevron-right"></i>');
   $( ".owl-carousel .owl-prev").html('<i class="fas fa-chevron-left"></i>');
});

document.getElementById("uploadBtn").onchange = function () {
  
  document.getElementById("uploadFile").value = this.value.replace(
    "C:\\fakepath\\",
    ""
  );
};

document.getElementById("uploadBtn2").onchange = function () {
  document.getElementById("uploadFile2").value = this.value.replace(
    "C:\\fakepath\\",
    ""
  );
};

document.getElementById("uploadBtn3").onchange = function () {
  document.getElementById("uploadFile3").value = this.value.replace(
    "C:\\fakepath\\",
    ""
  );
};








