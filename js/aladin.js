$(function () {
    //배너
    var showBanner = 0;

    function moveBanner() {
        $(".banner>li").eq(showBanner).fadeIn(500).siblings().fadeOut();
        $(".pager>li").eq(showBanner).addClass("active").siblings().removeClass("active");
    }

    $(".pager>li").click(function () {
        showBanner = $(this).index();
        moveBanner();
    })

    $(".bannerArrow>.left").click(function () {
        if (showBanner > 0) {
            showBanner--;
        }
        else {
            showBanner = 4;
        }
        moveBanner();
    })

    $(".bannerArrow>.right").click(function () {
        if (showBanner < 4) {
            showBanner++;
        }
        else {
            showBanner = 0
        }
        moveBanner();
    })

    var timer = setInterval(function () {
        $(".bannerArrow>.right").trigger("click")
    }, 4000)

    $(".banner").on({
        "mouseenter": function () {
            clearInterval(timer)
        },
        "mouseleave": function () {
            timer = setInterval(function () {
                $(".bannerArrow>.right").trigger("click")
            }, 4000)
        }
    })


    // var timer = setInterval(autoBanner,3000)

    // function autoBanner(){
    //     $(".bannerArrow>.right").trigger("click");
    // }

    // $(".pager>li").click(function(){
    //     var sNum = $(this).index();
    //     $(this).addClass("active").siblings().removeClass("active");
    //     $(".banner>li").eq(sNum).fadeIn(500).siblings().fadeOut();
    // })

    //mobile menu
    $("#nav>li>a").click(function () {
        $(this).next().slideToggle(300)
            .parent()
            .siblings()
            .children(".sub").slideUp(300);
        $(this).parents().toggleClass("active")
            .siblings().removeClass("active")
    })

    //메뉴 나오고 들어가고
    $(".ham").on("click", function () {
        $("#nav, .gnb .close img").stop().animate({
            right: 0
        }, 500)
    })
    $(".close").on("click", function () {
        $("#nav, .gnb .close img").stop().animate({
            right: -100 + "%"
        }, 500)
    })

    //book
    $(function () {
        $(".list").slick({
            slidesToShow: 4, //보여주는 갯수
            slidesToScroll: 4, //움직이는 갯수
            // autoplay: true,
            // autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 625,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]

        })

    })


    //문방구

    var sNum = 0;
    var sBanner = $(".product");
    var sTotalCount = 11;
    var sWidth = $(".product>li").outerWidth();
    console.log(sWidth)

    $(".count").text(sNum + 1);
    $(".totalCount").text(sTotalCount);

    var objSta = $(".product>li:lt(3)").clone();
    sBanner.append(objSta)

    var liSta = $(".produc>li").length;

    // $(".product").width(liSta*sWidth/2.5+"%")
    // $(".product>li").outerWidth(100/liSta+"%")

    function move() {
        sBanner.stop().animate({
            "margin-left": -sWidth * sNum
        }, 500)

        if (sNum == 11) {
            $(".count").text(1);
        } else {
            $(".count").text(sNum + 1);
        }
    }

    $(".staRight").on("click", function () {
        if (sNum == sTotalCount) {
            sNum = 0;
            sBanner.css("margin-left", 0)
        }
        sNum++;
        move();
    })

    $(".staLeft").on("click", function () {
        if (sNum == 0) {
            sNum = sTotalCount;
            sBanner.css("margin-left", -sWidth * sNum)
        }
        sNum--;
        move();
    })

    //브랜드
    $(".bButton>li").click(function () {
        //li의 순서찾기
        var sNum = $(this).index();
        console.log(sNum);
        $(this).addClass("active").siblings().removeClass("active");

        $(".brand li").eq(sNum).fadeIn(500).siblings().fadeOut();
    })

    //캐릭터
    $('#char').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

    });



})
