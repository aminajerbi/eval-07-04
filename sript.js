var images = ["background.jpg","inline-Audi.jpg"];
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