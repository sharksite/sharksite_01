// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// ハンバーガー
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

$(function () {
    $(".btn-gNav").on("click", function () {
        $(".gNav").toggleClass("open"); // メニューにopenクラスをつけ外しする
        $(".btn-gNav").toggleClass("open"); // メニューにopenクラスをつけ外しする
        // メニュー項目のリンクがクリックされたときのイベント
        $(".gNav-menu a").on("click", function () {
            $(".gNav").removeClass("open"); // メニューからopenクラスを削除する
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
                $(".fix-header").stop().css({ opacity: "1.0" }).animate(
                    {
                        //”▲.fix-header”の部分は固定ヘッダとして表示させるブロックのID名もしくはクラス名に
                        top: 0,
                    },
                    500
                );
                flag = "hide";
            }
        } else {
            if (flag === "hide") {
                $(".fix-header").stop().animate({ top: "-66px", opacity: 0 }, 500);
                //上にあがり切ったら透過度を0%にして背景が生きるように
                //”▲.fix-header”の部分は固定ヘッダとして表示させるブロックのID名もしくはクラス名に
                flag = "view";
            }
        }
    });
});

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// page top
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        //上から200pxスクロールしたら
        $("#page-top").removeClass("DownMove"); //#page-topについているDownMoveというクラス名を除く
        $("#page-top").addClass("UpMove"); //#page-topについているUpMoveというクラス名を付与
    } else {
        if ($("#page-top").hasClass("UpMove")) {
            //すでに#page-topにUpMoveというクラス名がついていたら
            $("#page-top").removeClass("UpMove"); //UpMoveというクラス名を除き
            $("#page-top").addClass("DownMove"); //DownMoveというクラス名を#page-topに付与
        }
    }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
    PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$("#page-top a").click(function () {
    $("body,html").animate(
        {
            scrollTop: 0, //ページトップまでスクロール
        },
        500
    ); //ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false; //リンク自体の無効化
});

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// スムーズスクロール
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

$(function () {
    // ヘッダーの高さを動的に設定
    let headerHeight;
    if ($(window).width() <= 768) {
        // スマホビューの判定
        headerHeight = 63;
    } else if ($("body").hasClass("gallery") || $("body").hasClass("learn")) {
        headerHeight = 144;
    } else {
        headerHeight = 67;
    }

    let speed = 600;

    $('a[href^="#"]').click(function () {
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top - headerHeight;
        $("html, body").stop().animate(
            {
                scrollTop: position,
            },
            speed,
            "linear"
        );
        return false;
    });
});

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// ふわっ
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
function fadeAnime() {
    // 右からふわっ
    $(".fadeRightTrigger").each(function () {
        var elemPos = $(this).offset().top - 50; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass("fadeRight"); // 画面内に入ったらfadeUpというクラス名を追記
        } else {
            $(this).removeClass("fadeRight"); // 画面外に出たらfadeUpというクラス名を外す
        }
    });
    // したからふわっ
    $(".fadeUpTrigger").each(function () {
        var elemPos = $(this).offset().top - 50; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass("fadeUp"); // 画面内に入ったらfadeUpというクラス名を追記
        } else {
            $(this).removeClass("fadeUp"); // 画面外に出たらfadeUpというクラス名を外す
        }
    });
    // 左からふわっ
    $(".fadeLeftTrigger").each(function () {
        var elemPos = $(this).offset().top - 50; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass("fadeLeft"); // 画面内に入ったらfadeUpというクラス名を追記
        } else {
            $(this).removeClass("fadeLeft"); // 画面外に出たらfadeUpというクラス名を外す
        }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
    fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述
