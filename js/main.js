$(document).ready(function () {

    $(".custom-dropdown > .btn").click(function (event) {
        $(".custom-dropdown.show").not($(this).parent()).removeClass("show");
        $(this).parent().toggleClass("show");
    })

    $(".menu").click(function (event) {
        $(this).find(".sub-menu").toggle();
    });

    $(".list").click(function () {
        $(this).find("button").addClass("active");
        $(".grid").find("button").removeClass("active");
        $(".card-item").parent().addClass("col-sm-12");
        $(".card-item").parent().removeClass("col-sm-3");

    });

    $(".grid").click(function () {
        $(this).find("button").addClass("active");
        $(".list").find("button").removeClass("active");
        $(".card-item").parent().addClass("col-sm-3");
        $(".card-item").parent().removeClass("col-sm-12");
    });


});