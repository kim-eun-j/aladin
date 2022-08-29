$(function(){
    $(".loginType>li").click(function(){
        var select = $(this).index();

        $(this).addClass("active").siblings().removeClass("active");
        $(".tabWrap>div").eq(select).css("display", "block").siblings().css("display", "none");
    })
})