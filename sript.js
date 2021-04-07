var images = ["background.jpg","car-audi.webp","car-ajo.webp"];
$(function () {
    var i = 0;
    $(".card").attr('src',"images/" + images[i]);
    setInterval(function () {
        i++;
        if (i == images.length) {
            i = 0;
        }
        $(".card").attr('src',"images/" + images[i]);
    }, 5000);
});