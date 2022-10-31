
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
    $("header").addClass("bg_header");
  } else {
    $("header").removeClass("bg_header");
  }
});

$(document).ready(function(){
  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf('/')+1);
  if (filename == "") {
      filename = "index.php"
  }
  $(".nav-item .nav-link").removeClass("active");
  $(`.nav-item .nav-link[href="${filename}"]`).addClass("active")
})
$(document).ready(function(){
    setTimeout(()=>{
        $(".coupon-btn").addClass("active")
    }, 5000);
    setTimeout(()=>{
        $("#couponModal").fadeIn()
    }, 8000);
})
$("#couponModal .close-popup").click(function(){
    $(this).parents("#couponModal").fadeOut();
})
$(".coupon-btn , #couponModal .bg-overlay").click(function(){
    $("#couponModal").fadeIn();
})


AOS.init();


// $('.slider-main').owlCarousel({
//   loop:true,
//   margin:0,
//   autoplay:false,
//   nav:true,
//   responsive:{
//       0:{
//           items:1
//       },
//       600:{
//           items:3
//       },
//       1000:{
//           items:4
//       }
//   }
// })

// $('.banner-slide').slick({
//   dots: false,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 1,
//   adaptiveHeight: true,
//   autoplay: true,
// });






$('.Slider_Sec').slick({
  dots: true,
  infinite: true,
  speed: 300,
  arrow:true,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});




$('.brand-slide').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});