$(document).ready(function(){

  /*--- Display information modal box ---*/
    $(".what").click(function(){
      $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
    });

//declaring variables
var i = 0;
var $guessButton = $("#guessButton");
var $userGuess = $("#userGuess");
var $guessList = $("#guessList");
var $feedback = $("#feedback");
var $count = $("#count");
var $playAgain = $(".playAgain");
var secretNum

//randomly generated secret number
function numGenerator() {
  secretNum = Math.floor((Math.random() * 100) + 1);
  console.log("Shh, the secret number is " +secretNum);
};

numGenerator();



//guess counter
function guessCount() {
  i++;
  $count.text(i);
  $guessList.prepend("<li>"+$('input[id=userGuess]').val()+"</li>");
  $userGuess.val("");
};


//feedback text response
function temperature(num) {
  if (num == 0) {
    $feedback.text("I'm a happy snowman! You got it! ");
    $guessButton.attr("disabled", true);
    $userGuess.attr("disabled", true);
    $playAgain.show();
  } else if(num <= 2) {
    $feedback.text("It's so hot, I'm sweating! Wait...that IS sweat, right?");
  } else if(num <= 5) {
    $feedback.text("Getting hot! Summer is around the corner, I can feel it! ");
  } else if(num <= 10) {
    $feedback.text("It's warming up! ");
  } else if(num <= 25) {
    $feedback.text("Still chilly, but the summer breeze is beginning to blow away the winter storm! ");
  } else if(num <= 35) {
    $feedback.text("It's chilly out here... ");  
 } else if(num <= 50) {
    $feedback.text("It's cold now, but just imagine how much cooler I'll be in summer! ");  
  } else {
    $feedback.text("I'm FROZEN!");
  };
};

//hide new game link on click
$playAgain.on('click', function() {
  $(this).hide();
});


//play game
$guessButton.click(function() {
  var guess = $("#userGuess").val();

  if (guess > 0 && guess < 101) {
    guessCount();
    temperature(Math.abs(guess - secretNum));
    return false;
  } else {
    alert('Please enter a number between 1 and 100');
    $userGuess.val('');
    return false;
  };
});


//new game
function newGame() {
  i = 0;
  numGenerator();
  $feedback.text("Let's play again!");
  $guessButton.attr("disabled", false);
  $userGuess.attr("disabled", false);
  $guessList.empty();
  $count.text(i);
};

$(".new").click(function() {
  newGame();
});


});
