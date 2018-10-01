$(document).ready(function () {
    $("#myTab > li > a").click(function (ev) {
        $("#myTab > li >a").not($(this)).removeClass("active");
        $(this).addClass("active");
        let name = $(this).attr("href");
        $("#myContent > div").not(name).removeClass("active");
        $(name).addClass("active");
    })

    $(".toggle").click(function (ev) {
        $(this).find("> span").toggleClass("active");
    })
});