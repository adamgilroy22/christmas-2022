document.addEventListener('DOMContentLoaded', function () {
    // sidenav initialization
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
});

// Christmas Countdown
var countDownDate = new Date("Dec 25, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("xmasCountdown").innerHTML = "There's only <p>" + days + " days " + hours + " hours<p>" +
        minutes + " minutes and " + seconds + " seconds <p>until Christmas!";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("xmasCountdown").innerHTML = "TODAY IS CHRISTMAS!";
    }
}, 1000);

// Christmas Jokes
var cards = document.querySelectorAll('.joke-card');

[...cards].forEach((card) => {
    card.addEventListener('click', function () {
        card.classList.toggle('is-flipped');
        if (card.classList.contains('red')) {
            card.classList.toggle('red');
            card.classList.toggle('darken-3');
            card.classList.toggle('green');
            card.classList.toggle('darken-4');
        } else if (card.classList.contains('green')) {
            card.classList.toggle('green');
            card.classList.toggle('darken-4');
            card.classList.toggle('red');
            card.classList.toggle('darken-3');
        }
    });
});