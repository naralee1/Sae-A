gsap.registerPlugin(ScrollTrigger);
// GSAP의 TimelineMax 인스턴스 생성
var timeline = gsap.timeline();
// 각 박스에 대한 애니메이션을 순차적으로 추가
timeline
  .from(".trading", { y: 500, opacity: 0, duration: 1 })
  .from(".fabric", { y: 500, opacity: 0, duration: 1 })
  .from(".manufacture", { y: 500, opacity: 0, duration: 1 })
  .from(".design", { y: 500, opacity: 0, duration: 1 });

gsap.from("#society", {
  scrollTrigger: {
    trigger: "#business", //객체기준범위
    start: "0% 40%", //시작 지점
    end: "100% 90%", //끝 지점
    // end: "+=500"//시작 부분부터 500px까지 스크롤 한 후종료
    scrub: 5, //부드러운 스크러빙
    markers: false, //개발가이드선
  },
  x: -800,
});
gsap.from("#news", {
  scrollTrigger: {
    trigger: "#society", //객체기준범위
    start: "0% 40%", //시작 지점
    end: "100% 90%", //끝 지점
    // end: "+=500"//시작 부분부터 500px까지 스크롤 한 후종료
    scrub: 5, //부드러운 스크러빙
    markers: false, //개발가이드선
  },
  x: -800,
});
var timeline2 = gsap.timeline();
// 각 박스에 대한 애니메이션을 순차적으로 추가
timeline2.from(".slide_txt", { y: 500, opacity: 0, duration: 1 });

$("#gnb_1depth li").mouseenter(function () {
  $(".gnb_2depth li").slideDown();
  $(".gnb_bg").slideDown();
});
$(".gnb_2depth").mouseleave(function () {
  $(".gnb_2depth li").hide();
  $(".gnb_bg").hide();
});
$(".gnb_2depth li").mouseenter(function () {
  $(this).css({ color: "var(--mainColor)", "font-weight": "bold" });
});
$(".gnb_2depth li").mouseleave(function () {
  $(this).css({ color: "", "font-weight": "" });
});
$(".ham_btn").click(function () {
  $(".allmenu_wrap_bg").show();
});
$(".btn_allmenu_close").click(function () {
  $(".allmenu_wrap_bg").hide();
});
$(" #allmenu_1depth>li").click(function () {
  $(this).find(".allmenu_2depth li").toggle();
});

$(".business_container li.trading").mouseenter(function () {
  $(".trading_descrip").show();
  $(".business_container li.trading h2").css({
    position: "absolute",
    top: "30%",
  });
});
$(".business_container li.trading").mouseleave(function () {
  $(".trading_descrip").hide();
  $(".business_container li.trading h2").css({
    position: "absolute",
    top: "50%",
  });
});

$(".business_container li.fabric").mouseenter(function () {
  $(".fabric_descrip").show();
  $(".business_container li.fabric h2").css({
    position: "absolute",
    top: "30%",
  });
});
$(".business_container li.fabric").mouseleave(function () {
  $(".fabric_descrip").hide();
  $(".business_container li.fabric h2").css({
    position: "absolute",
    top: "50%",
  });
});
$(".business_container li.manufacture").mouseenter(function () {
  $(".manufacture_descrip").show();
  $(".business_container li.manufacture h2").css({
    position: "absolute",
    top: "30%",
  });
});
$(".business_container li.manufacture").mouseleave(function () {
  $(".manufacture_descrip").hide();
  $(".business_container li.manufacture h2").css({
    position: "absolute",
    top: "50%",
  });
});
$(".business_container li.design").mouseenter(function () {
  $(".design_descrip").show();
  $(".business_container li.design h2").css({
    position: "absolute",
    top: "30%",
  });
});
$(".business_container li.design").mouseleave(function () {
  $(".design_descrip").hide();
  $(".business_container li.design h2").css({
    position: "absolute",
    top: "50%",
  });
});
$(".society_charac div").mouseenter(function () {
  $(this).css({ transform: "scale(1.2)" });
  $(".society_charac span p").hide(); // 모든 p 요소를 숨깁니다.
  $(this).children("p").show(); // 현재 span의 자식인 p 요소만 표시합니다.
});
$(".society_charac div").mouseleave(function () {
  $(this).css({ transform: "" });
  $(".society_charac div p").hide(); // 모든 p 요소를 숨깁니다.
});
$(".society_charac .vision").mouseenter(function () {
  $(".society_container").css({
    background: "url(../img/society.png) center/cover",
    transition: "background 1s",
  });
});
$(".society_charac .group").mouseenter(function () {
  $(".society_container").css({
    background: "url(../img/society2.png) center/cover",
    transition: "background 1s",
  });
});
$(".society_charac .career").mouseenter(function () {
  $(".society_container").css({
    background: "url(../img/society5.png) center/cover",
    transition: "background 1s",
  });
});
$(".society_charac .env").mouseenter(function () {
  $(".society_container").css({
    background: "url(../img/society3.png) center/cover",
    transition: "background 1s",
  });
});
$(".society_charac .eth").mouseenter(function () {
  $(".society_container").css({
    background: "url(../img/society4.png) center/cover",
    transition: "background 1s",
  });
});

$("#footer button").click(function () {
  $(".fam_site_bg").toggle();
});
$(".fam_site").mouseover(function () {
  $(this).css({ "font-weight": "bold", color: "#FFF" });
});
$(".fam_site").mouseout(function () {
  $(this).css({ "font-weight": "", color: "" });
});

const swiper = new Swiper(".swiper-container1", {
  // Optional parameters
  autoplay: {
    delay: 3000, // 자동 플레이 간격 (3초로 설정)
    disableOnInteraction: false, // 유저 상호작용 시 자동 플레이 일시 중지 여부
  },
  direction: "horizontal",
  loop: true,
  delay: 1000,
  pauseOnMouseEnter: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
const swiper2 = new Swiper(".swiper-container2", {
  // Optional parameters
  breakpoints: {
    // 화면 1023이상일 때
    1023: {
      slidesPerView: 3,
      spaceBetween: 50,
      on: {
        slideChangeTransitionEnd: function () {
          const centerIndex = Math.floor(this.slides.length / 2); // 중앙에 위치한 슬라이드의 인덱스

          // 모든 슬라이드 크기를 원래 크기로 초기화
          for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.transform = "scale(0.8)";
          }
          // 중앙에 위치한 슬라이드만 크기를 크게 조절
          this.slides[centerIndex].style.transform = "scale(1.0)";
        },
      },
    },
  },
  autoplay: {
    delay: 3000, // 자동 플레이 간격 (3초로 설정)
    disableOnInteraction: false, // 유저 상호작용 시 자동 플레이 일시 중지 여부
  },
  centeredSlides: true,
  spaceBetween: 30,
  direction: "horizontal",
  loop: true,

  delay: 1000,
  pauseOnMouseEnter: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
