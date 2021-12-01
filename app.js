$(document).keydown(function (e) {
    switch (e.which) {
        case 37:    //left arrow key
            $(".bike").finish().animate({
                left: "-=200"
            });
            break;
        case 38:    //up arrow key
            $(".bike").finish().animate({
                top: "-=50"
            });
            break;
        case 39:    //right arrow key
            $(".bike").finish().animate({
                left: "+=200"
            });
            break;
        case 40:    //bottom arrow key
            $(".bike").finish().animate({
                top: "+=100"
            });
            break;
    }
});



/* $("body").keydown(function (e) {

    $(".bike").finish().animate({
        left: "450px"
    })

});
 */







/*
$("body").keydown(function (e) {

    if (e.keyCode == 37) { // left
        $("#showroom").animate({
            left: "-=50"
        });
    }
    else if (e.keyCode == 39) { // right
        $("#showroom").animate({
            left: "+=50"
        });
    }
}); */
/* var bike = document.getElementById('bike')
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '39') {
        // right arrow
        bike.style.left = "700px"
    }

    else if (e.keyCode == '37') {
        // left arrow
        bike.style.left = "500px"


    }
    else if (e.keyCode == '38') {
        // left arrow
        bike.style.top = "-50px"

    }


} */