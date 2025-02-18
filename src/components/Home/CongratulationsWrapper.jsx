import React from 'react'
import Slider from 'react-slick';

const CongratulationsWrapper = () => {
  const settingstop = {
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
    draggable: false,
    focusOnSelect: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
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
  };
  const settingbottom = {
    rtl: true,
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
    draggable: false,
    focusOnSelect: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
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
  };


  return (
    <section className="congratulations-wrapper">
    <div className="congratulations-top">
    <Slider {...settingstop}>
      {/* <div id="congratulations-top-gallery"> */}
        <div className="gallery-items">
          <img className="img-fluid" src="/assets/images/gallery-img1.jpg" alt />
        </div>
        <div className="gallery-items">
          <img className="img-fluid" src="/assets/images/gallery-img2.jpg" alt />
        </div>
        <div className="gallery-items">
          <img className="img-fluid" src="/assets/images/gallery-img3.jpg" alt />
        </div>
        <div className="gallery-items">
          <img className="img-fluid" src="/assets/images/gallery-img4.jpg" alt />
        </div>
        <div className="gallery-items">
          <img className="img-fluid" src="/assets/images/gallery-img5.jpg" alt />
        </div>
        <div className="gallery-items">
          <img className="img-fluid" src="/assets/images/gallery-img6.jpg" alt />
        </div>
        <div className="gallery-items">
          <img className="img-fluid" src="/assets/images/gallery-img7.jpg" alt />
        </div>
        <div className="gallery-items">
          <img className="img-fluid" src="/assets/images/gallery-img8.jpg" alt />
        </div>
        <div className="gallery-items">
          <img className="img-fluid" src="/assets/images/gallery-img9.jpg" alt />
        </div>
        <div className="gallery-items">
          <img className="img-fluid" src="/assets/images/gallery-img10.jpg" alt />
        </div>
      {/* </div> */}
      </Slider>
    </div>
    <div className="congratulations-bottom">
      <Slider {...settingbottom} id="congratulations-bottom-gallery">
      {/* <div id="congratulations-bottom-gallery" dir="rtl"> */}
        <div className="gallery-items">
          <img className="img-fluid" src="/assets/images/gallery-img10.jpg" alt />
        </div>
        <div className="gallery-items">
          <img className="img-fluid" src="/assets/images/gallery-img9.jpg" alt />
        </div>
        <div className="gallery-items">
          <img className="img-fluid" src="/assets/images/gallery-img8.jpg" alt />
        </div>
        <div className="gallery-items">
          <img className="img-fluid" src="/assets/images/gallery-img7.jpg" alt />
        </div>
        <div className="gallery-items">
          <img className="img-fluid" src="/assets/images/gallery-img6.jpg" alt />
        </div>
        <div className="gallery-items">
          <img className="img-fluid" src="/assets/images/gallery-img5.jpg" alt />
        </div>
        <div className="gallery-items">
          <img className="img-fluid" src="/assets/images/gallery-img4.jpg" alt />
        </div>
        <div className="gallery-items">
          <img className="img-fluid" src="/assets/images/gallery-img3.jpg" alt />
        </div>
        <div className="gallery-items">
          <img className="img-fluid" src="/assets/images/gallery-img2.jpg" alt />
        </div>
        <div className="gallery-items">
          <img className="img-fluid" src="/assets/images/gallery-img1.jpg" alt />
        </div>
      {/* </div> */}
      </Slider>
    </div>
    <div className="congratulations-content">
      <h3>Congratulations!</h3>
      <p>
        You made it to the ultimate wishlist platform, your favourite person already made wishlist with all the products they love. Find the wishlist and get them a gift they actually want.
      </p>
      <a className="btn purple-btn" href="/wishlist/search">
        Find A Wishlist
      </a>
    </div>
  </section>
  )
}

export default CongratulationsWrapper