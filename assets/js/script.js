// Enabling popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


// Enabling tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// ===== Document ready =====
$(document).ready(function() {

  // ===== Scroll to Top =====
  
  const backToTopButton = document.querySelector("#btn-back-to-top");

  const scrollContainer = () => {
    return document.documentElement || document.body;
  };

  const goToTop = () => {
    document.body.scrollIntoView({
      behavior: "smooth"
    });
  };

  backToTopButton.addEventListener("click", goToTop);

  //Get the button
  mybutton = document.getElementById("btn-back-to-top");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  // Display and hide
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
});

$(function() {
  $(".clickable").click( function() {
    $(this).toggleClass("container-switch");
  } );
} );

$("li").click(function() {
  $(this).toggleClass('stroked');
});

// 1
$(".hide-one").click(function(){
  $(".first-dish").toggle();
});

$(".collapse-one").click(function(){
  $(".first-dish").toggle(0, function(){
    $(".hide-one").toggleClass("container-switch");
  });
})

// 2
$(".hide-two").click(function(){
  $(".second-dish").toggle();
});

$(".collapse-two").click(function(){
  $(".second-dish").toggle(0, function(){
    $(".hide-two").toggleClass("container-switch");
  });
})

// 3
$(".hide-three").click(function(){
  $(".third-dish").toggle();
});

$(".collapse-three").click(function(){
  $(".third-dish").toggle(0, function(){
    $(".hide-three").toggleClass("container-switch");
  });
})

// 4
$(".hide-four").click(function(){
  $(".fourth-dish").toggle();
});

$(".collapse-four").click(function(){
  $(".fourth-dish").toggle(0, function(){
    $(".hide-four").toggleClass("container-switch");
  });
})

// 5
$(".hide-five").click(function(){
  $(".fifth-dish").toggle();
});

$(".collapse-five").click(function(){
  $(".fifth-dish").toggle(0, function(){
    $(".hide-five").toggleClass("container-switch");
  });
})

// 6
$(".hide-six").click(function(){
  $(".sixth-dish").toggle();
});

$(".collapse-six").click(function(){
  $(".sixth-dish").toggle(0, function(){
    $(".hide-six").toggleClass("container-switch");
  });
})

// 7
$(".hide-seven").click(function(){
  $(".seventh-dish").toggle();
});

$(".collapse-seven").click(function(){
  $(".seventh-dish").toggle(0, function(){
    $(".hide-seven").toggleClass("container-switch");
  });
})

// 8
$(".hide-eight").click(function(){
  $(".eight-dish").toggle();
});

$(".collapse-eight").click(function(){
  $(".eight-dish").toggle(0, function(){
    $(".hide-eight").toggleClass("container-switch");
  });
})

// 9
$(".hide-nine").click(function(){
  $(".nine-dish").toggle();
});

$(".collapse-nine").click(function(){
  $(".nine-dish").toggle(0, function(){
    $(".hide-nine").toggleClass("container-switch");
  });
})

// 10
$(".hide-ten").click(function(){
  $(".tenth-dish").toggle();
});

$(".collapse-ten").click(function(){
  $(".tenth-dish").toggle(0, function(){
    $(".hide-ten").toggleClass("container-switch");
  });
})

// 11
$(".hide-eleven").click(function(){
  $(".eleven-dish").toggle();
});

$(".collapse-eleven").click(function(){
  $(".eleven-dish").toggle(0, function(){
    $(".hide-eleven").toggleClass("container-switch");
  });
})

// 12
$(".hide-twelve").click(function(){
  $(".twelve-dish").toggle();
});

$(".collapse-twelve").click(function(){
  $(".twelve-dish").toggle(0, function(){
    $(".hide-twelve").toggleClass("container-switch");
  });
})
