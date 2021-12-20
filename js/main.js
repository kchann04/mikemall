$(document).ready(function(){//시작

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }); // swiper 끝

  $(".tab_title li").click(function(){
    event.preventDefault();
    var idx = $(this).index();

   $(".tab_title li").removeClass("on");
   $(".tab_title li").eq(idx).addClass("on");
   $(".tab_con > .cont").hide();
   $(".tab_con > .cont").eq(idx).show();
  });// tab 끝

  $(".btn_box .menu").click(function(){
    $(this).hide(500);
    $(".btn_box .close").show(500);
    $("header .gnb").animate({"right":"0"},500);
  });

  $(".btn_box .close").click(function(){
    $(this).hide(500);
    $(".btn_box .menu").show(500);
    $("header .gnb").animate({"right":"-200px"},500)
  });

});//끝