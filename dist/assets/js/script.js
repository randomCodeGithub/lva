$(".banner-slider").slick({
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  // centerMode: true,
  variableWidth: true,
  prevArrow:
    '<span class="prev d-flex justify-content-center align-items-center"><img class="d-block" src="./assets/img/arrow.svg" alt=""></span>',
  nextArrow:
    '<span class="next d-flex justify-content-center align-items-center"><img class="d-block" src="./assets/img/arrow.svg" alt=""></span>',
  responsive: [
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
      },
    },
  ],
});

$(".content-body ul").prev("p").addClass("before-list");
$(".overlay-menu .additional-links a.btn-custom-lg")
  .prev("a")
  .attr("style", "margin-bottom: 1.8rem;");

let toggle = false;
const menu = $(".menu-btn");
const overlayMenu = $(".overlay-menu");
const overlayArea = $(".overlay-menu__area");
const toggler = $(".toggler");

menu.click(function () {
  toggle = !toggle;

  if (toggle) {
    overlayMenu.addClass("open");
    toggler.addClass("open");
    overlayArea.addClass("open");
  } else {
    overlayMenu.removeClass("open");
    toggler.removeClass("open");
    overlayArea.removeClass("open");
  }
});

function emailRegularExpression(email, regularExpression) {
  let re = regularExpression;
  return re.test(email);
}

// VALIDATE EMAIL
function emailValidate() {
  // EMAIL CHECK INPUT VALUE
  const email = document.querySelector("input[type=email]").value;

  // IF INPUT EMAIL NOT EMPTY
  if (!(email == "")) {
    // CHECK EMAIL REGULAR EXPRESSION VALIDATION
    if (
      !emailRegularExpression(
        email,
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      return false;
    }
  } else {
    return false;
  }
  return true;
}

function fieldLength(fieldName) {
  if ($(fieldName).val().length == 0) {
    return false;
  }
  return true;
}

function inputIconShow(el, functionName, functionParam = false) {
  if (functionName(functionParam)) {
    $(el).parent().children(".icon-checkmark1").removeClass("d-none");
    $(el).parent().children(".icon-warning").addClass("d-none");
  } else {
    $(el).parent().children(".icon-checkmark1").addClass("d-none");
    $(el).parent().children(".icon-warning").removeClass("d-none");
  }
}

const emailInput = $("input[type=email]");
const passwordInput = $("input[type=password]");
const textInput = $("input[type=text]");

emailInput.on("input", function () {
  inputIconShow(this, emailValidate);
});

passwordInput.on("input", function () {
  inputIconShow(this, fieldLength, this);
});

textInput.on("input", function () {
  inputIconShow(this, fieldLength, this);
});

/*
PAGE VIEW CHANGE CODE
*/

$(".view-change button").on("click", function () {
  $(".view-change .dropdown-wrap")
    .not($(this).parent().children(".dropdown-wrap"))
    .addClass("d-none");
  $(this).parent().children(".dropdown-wrap").toggleClass("d-none");
});

// PAGE CONTRAST
$(".view-change .view .dropdown-wrap button").on("click", function () {
  $("body").removeClass().addClass($(this).attr("class"));
  localStorage.setItem("page-contrast", $(this).attr("class"));
});

// PAGE FONT SIZE

$(".view-change .text-size .dropdown-wrap button").on("click", function () {
  $("body").attr("page-font-size", $(this).attr("data-size"));
  localStorage.setItem("site-font-size", $(this).attr("data-size"));

  $(".view-change .text-size .dropdown-wrap button").removeClass("active");
  $(this).addClass("active");
});

// USER LOCAL STORAGE

if (localStorage.getItem("page-contrast")) {
  $("body").addClass(localStorage.getItem("page-contrast"));
}

if (localStorage.getItem("site-font-size")) {
  $(".view-change .text-size .dropdown-wrap button").each(function () {
    if ($(this).attr("data-size") == localStorage.getItem("site-font-size")) {
      $(this).addClass("active");
    }
  });

  $("body").attr("page-font-size", localStorage.getItem("site-font-size"));
}

$("ul.current-events__categories-mobile li").click(function () {
  $("ul.current-events__categories-mobile li").toggleClass("d-block");
  $("ul.current-events__categories-mobile li i").toggleClass("open");
  // $(this).siblings().addBack().children().remove();
  // var a = $(this).siblings().toggle();
  // $(this).parent().prepend(this);
});


// TIMELINE EFFECTS

var items = document.querySelectorAll(".timeline .col-12");

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("resize", callbackFunc);
window.addEventListener("scroll", callbackFunc);