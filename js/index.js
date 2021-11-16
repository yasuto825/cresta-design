$(function () {
  // ファーストビュー切り替え
  $("#fv").bgSwitcher({
    images: [
      "img/fv-bgi_01@2x.jpg",
      "img/fv-bgi_02@2x.jpg",
      "img/fv-bgi_03@2x.jpg",
    ],
    interval: 5000,
    loop: true,
    shuffle: false,
    effect: "fade",
    duration: 2000,
    easing: "swing",
  });

  // headerの色がfvを過ぎると変わる
  const fvArea = $("#fv,#cp-fv");
  const fvHeight = fvArea.outerHeight(true);

  $(window).on("scroll", function () {
    if (fvHeight < $(this).scrollTop()) {
      $("#header").addClass("change-color");
    } else {
      $("#header").removeClass("change-color");
    }
  });

  // ページ内リンクのアニメーション
  $('a[href^="#"]').click(function () {
    const speed = 500;
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? "html" : href);
    const position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  //ハンバーガーメニューのアニメーション
  $(".burger-btn").on("click", function () {
    $(".burger-btn").toggleClass("close");
    $(".nav-wrapper").fadeToggle(300);
    $("body").toggleClass("noscroll");
  });
});
