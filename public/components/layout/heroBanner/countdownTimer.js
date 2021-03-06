"use strict";

angular.module("epgpApp").component("countdownTimer", {
  bindings: {},
  templateUrl: "public/components/layout/heroBanner/countdownTimer.html",
  controller: function() {
    let ctrl = this;

    ctrl.$onInit = function() {
      startTimer();
    };

    ctrl.$onChanges = function(changes) {};

    function startTimer() {
      // Set the date we're counting down to
      var countDownDate = new Date("Aug 26, 2019 23:59:59").getTime();

      // Update the count down every 1 second
      var x = setInterval(function() {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("timer").innerHTML = "See you in Azeroth!";
        }
      }, 1000);
    }
  }
});
