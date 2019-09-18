//generating the global variables//
//target//
var wins = 0;
var losses = 0;
var audio = new Audio("assets/raven.mp3")
var correctNumberLow = 19;
var correctNumberHigh = 120;
var correctNumber = Math.floor(Math.random() * (correctNumberHigh - correctNumberLow + 1)) + correctNumberLow
//crystal//
var crystalLow = 1;
var crystalHigh = 12;
var counter = 0;
var crystalAvailable = ["assets/images/crystal1.png", "assets/images/crystal2.png", "assets/images/crystal3.png", "assets/images/crystal4.png", "assets/images/crystal5.png", "assets/images/crystal6.png", "assets/images/crystal7.png",]

function displayCorrectNumber() {
    $("#numberBox").append(correctNumber)
}

function setCrystalNumber() {
    for (var i = 0; i < crystalAvailable.length; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image img-responsive");
        imageCrystal.attr("src", crystalAvailable[i]);
        imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * (crystalHigh - crystalLow)) + crystalLow);
        $("#crystals").append(imageCrystal);
    };
};

//function//
function clickedCrystal() {
$(".crystal-image").on("click", function() {
    counter += $(this).data("crystalvalue");
    $("#scoreLine").text("score: " + counter);
        if (counter === correctNumber) {
            alert("You Win!");
            wins++
            $("#wins").text("wins: " + wins);
            resetRound();
        } else if (counter > correctNumber) {
            alert("You Lose!");
            losses++
            $("#losses").text("losses: " + losses);
            resetRound();
        }

});
}

//ending line//
displayCorrectNumber();
setCrystalNumber();
clickedCrystal();
function resetRound() {
    counter = 0;
    $("#scoreLine").text("score: " + counter);
    audio.play();
}

