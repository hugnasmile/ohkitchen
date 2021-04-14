$('.banner').slick({
    dots: true, // 하단 paging 버튼 노출 (true는 노출/false 노출안됨)
    autoplay: false, //자동 플레이 
    autoplaySpeed:3000, // 자동플레이 1000 = 1초
    arrows: true, //좌우 화살 버튼 비노출(false는 비노출 / true는 노출)
  });

  $('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  // $('.slider').slick({
  //   centerMode: true,
  //   centerPadding: '60px',
  //   slidesToShow: 3,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '40px',
  //         slidesToShow: 3
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '40px',
  //         slidesToShow: 1
  //       }
  //     }
  //   ]
  // });
          