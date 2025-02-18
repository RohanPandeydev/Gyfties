
// aos js
AOS.init({
  duration: 1200,
});
// mobile version
AOS.init({disable: 'mobile'});
	AOS.init({
	disable: function() {
	  var maxWidth = 800;
	  return window.innerWidth < maxWidth;
	}
});

// partners slider js

$('#congratulations-top-gallery').slick({
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 0,
  infinite: true,
  speed: 8000,
  slidesToShow: 5,
  slidesToScroll: 1,
  pauseOnHover: false,
  cssEase: 'linear',
  draggable:false,
  focusOnSelect:false,
  pauseOnFocus:false,
  pauseOnHover:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        //infinite: true,
        //dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }

  ]
});

$('#congratulations-bottom-gallery').slick({
  rtl:true,
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 0,
  infinite: true,
  speed: 8000,
  slidesToShow: 5,
  slidesToScroll: 1,
  pauseOnHover: false,
  cssEase: 'linear',
  draggable:false,
    focusOnSelect:false,
    pauseOnFocus:false,
    pauseOnHover:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        //infinite: true,
        //dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }

  ]
});

// testimonials slider js

$('#testimonials-slider').slick({
  dots: false,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 3000,
  //infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  centerMode: false,
  centerPadding: '0px',
  prevArrow: '<button class="slick-prev slick-arrow"><i class="fa-solid fa-left-long"></i></button>',
  nextArrow: '<button class="slick-next slick-arrow"><i class="fa-solid fa-right-long"></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      }
    }

  ]
});

// wishlist link copy
function CopyToClipboard(containerid) {
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("copy");
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
    document.execCommand("copy");
    //alert("Text has been copied, now paste in the text-area")
  }
}