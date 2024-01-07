$(function () {
	$('.btn-gNav').on("click", function () {
    $('.gNav').toggleClass('open');  // メニューにopenクラスをつけ外しする
        // メニュー項目のリンクがクリックされたときのイベント
        $('.gNav-menu a').on("click", function () {
          $('.gNav').removeClass('open');  // メニューからopenクラスを削除する
      });
	});
});

//scroll fix header
$(function () {
	"use strict";
	var flag = "view";

  $(window).on("scroll", function () {
    // scrollTop()が「200」より大きい場合
   //画面トップから、ナビゲーションメニューまでの高さ（ピクセル）を指定すれば、メニュースクロールで
   //消えていくタイミングでヘッダが表示されて固定される。  
    
    if ($(this).scrollTop() > 100) {
      if (flag === "view") {
        $(".fix-header").stop().css({opacity: '1.0'}).animate({
   //”▲.fix-header”の部分は固定ヘッダとして表示させるブロックのID名もしくはクラス名に
          top: 0
        }, 500);
        flag = "hide";
      }
    } else {
      if (flag === "hide") {
        $(".fix-header").stop().animate({top:"-66px",opacity: 0}, 500);
		//上にあがり切ったら透過度を0%にして背景が生きるように
        //”▲.fix-header”の部分は固定ヘッダとして表示させるブロックのID名もしくはクラス名に
        flag = "view";
      }
    }
  });
});