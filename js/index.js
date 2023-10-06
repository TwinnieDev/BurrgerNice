let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds

}

$(document).ready(function () {
  $("#close").click(function () {
    $("#showsear").slideUp();
  });
  $("#txtsearch").click(function () {
    $("#showsear").slideDown();
  });
});

function scrollToTop() {
  window.scrollTo(0, 0);
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("scrollTop").style.bottom = "5px";
  } else {
    document.getElementById("scrollTop").style.bottom = "-50px";
  }
}


// animation

$(document).ready(function () {
  $(window).scroll(function () {
    $(".slideanim").each(function () {
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide")
      }
    })
  })
})

$(document).ready(function () {
  $(window).scroll(function () {
    $(".slideanim1").each(function () {
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide1")
      }
    })
  })
})
$(document).ready(function () {
  $(window).scroll(function () {
    $(".slideanim2").each(function () {
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide2")
      }
    })
  })
})

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}