//generating the global variables//
//global variables//
var wins = 0;
var losses = 0;
var audio = new Audio("assets/raven.mp3")
//generation of random number//
var correctNumberLow = 19;
var correctNumberHigh = 120;
var correctNumber = Math.floor(Math.random() * (correctNumberHigh - correctNumberLow + 1)) + correctNumberLow
//crystal variables//
var crystalLow = 1;
var crystalHigh = 12;
//score counter that crystals add to//
var counter = 0;
var crystalAvailable = 
[`assets\\images\\Crystal1.png`,
 `assets\\images\\Crystal2.png`,
  `assets\\images\\Crystal3.png`,
   `assets\\images\\Crystal4.png`,
    `assets\\images\\Crystal5.png`,
     `assets\\images\\Crystal6.png`,
      `assets\\images\\Crystal7.png`,]
console.log(crystalAvailable);
//displays correct number to guess//
function displayCorrectNumber() {
    $("#numberBox").append(correctNumber)
}
// creates images with classes and sets a random data value of 1-12//
function setCrystalNumber() {
    for (var i = 0; i < crystalAvailable.length; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image img-responsive");
        imageCrystal.attr("src", crystalAvailable[i]);
        imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * (crystalHigh - crystalLow)) + crystalLow);
        $("#crystals").append(imageCrystal);
    };
};

//function on click event that checks win condition on each click so that code is more compact//
function clickedCrystal() {
$(".crystal-image").on("click", function() {
    //troublesome line for me, adds random data value to counter//
    counter += $(this).data("crystalvalue");
    // displays counter on page for user//
    $("#scoreLine").text("score: " + counter);
    // win condition//
        if (counter === correctNumber) {
            alert("You Win!");
            wins++
            // display wins//
            $("#wins").text("wins: " + wins);
            resetRound();
            //lose condition//
        } else if (counter > correctNumber) {
            alert("You Lose!");
            losses++
            //display losses//
            $("#losses").text("losses: " + losses);
            resetRound();
        }

});
}

//calling display functions and what not//
displayCorrectNumber();
setCrystalNumber();
clickedCrystal();
// made a reset for the score counter to change to 0 after win or lose//
function resetRound() {
    counter = 0;
    $("#scoreLine").text("score: " + counter);
    audio.play();
}

