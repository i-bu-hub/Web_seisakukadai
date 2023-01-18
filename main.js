$(function () {

    $(".buttons").on("click", function () {
        $(this).closest("div").css("display", "none");
        id = $(this).attr("href");
        $(id).addClass("first").fadeIn("slow").show();
    });

    var countY1;
    var countN1;
    var countY2;
    var countN2;
    var countY3;
    var countN3;
    var box = [];
    $(".buttons").each(function () {
        $(this).on('click', function () {
            var value = $(this).data("value");
            box.push(value);

            countY1 = box.filter(function (x) {
                return x === "y1"
            }).length;
            countN1 = box.filter(function (y) {
                return y === "n1"
            }).length;
            countY2 = box.filter(function (x) {
                return x === "y2"
            }).length;
            countN2 = box.filter(function (y) {
                return y === "n2"
            }).length;
            countY3 = box.filter(function (x) {
                return x === "y3"
            }).length;
            countN3 = box.filter(function (y) {
                return y === "n3"
            }).length;
        });
    });

    $('.end').on('click', function () {
        if (countY1==1 && countY2==1 && countY3==1) {
            $('#a1').css("display", "");
        } else if(countY1==1 && countY2==1 && countN3==1){
            $('#a2').css("display", "");
        } else if(countY1==1 && countN2==1 && countY3==1){
            $('#a3').css("display", "");
        } else if(countN1==1 && countY2==1 && countY3==1){
            $('#a4').css("display", "");
        } else if(countY1==1 && countN2==1 && countN3==1){
            $('#a5').css("display", "");
        } else if(countN1==1 && countN2==1 && countY3==1){
            $('#a6').css("display", "");
        } else if(countN1==1 && countY2==1 && countN3==1){
            $('#a7').css("display", "");
        } else if(countN1==1 && countN2==1 && countN3==1){
            $('#a8').css("display", "");
        }
    });

});

