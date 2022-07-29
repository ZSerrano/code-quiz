
var question1 = "Commonly used data types DO NOT include:";
var choices1 = ["strings", "booleans", "alerts", "numbers"];
var answer1 = "alerts";

var question2 = "The condition in an if/else statement is enclosed within _____.";
var choices2 = ['quotes', 'curly brackets', 'parentheses', 'square brackets'];
var answer2 = 'parentheses';

var question3 = 'Arrays in Javascript can be used to store ____.';
var choices3 = ['numbers and strings', 'other arrays', 'booleans', 'all of the above'];
var answer3 = 'all of the above';

var question4 = 'String values must be enclosed within ____ when being assigned to variables.';
var choices4 = ['commas', 'curly brackets', 'quotes', 'parentheses'];
var answer4 = 'quotes';

var question5 = 'A very useful tool used during development and debugging for printing content to the debugger is:';
var choices5 = ['Javascript', 'terminal/bash', 'for loops', 'console.log'];
var answer5 = 'console.log';

var startPress = document.querySelector('.startButton');
var startPage = document.querySelector('.start-page');
var quizSection = document.querySelector('#quiz-section');

var choiceBlock1 = document.createElement('div');

console.log(choices5);

startPress.addEventListener('click', function() {
    quizStart();
})

function quizStart() {
    // Timer towards the corner starts upon clicking start. Title screen is hidden
    // and first question appears along with four buttons for different answers.
    startPage.setAttribute('class', 'hide');
    choiceBlock1.removeAttribute('class');
    
}


function createButton (item, choiceBlock) {
    var choiceButton = document.createElement('button');
    choiceButton.setAttribute('class', 'buttons');
    choiceButton.setAttribute('value', item);
    choiceButton.textContent = item;
    choiceButton.addEventListener('click', function() {
        
        console.log(this);
        switch(choiceBlock) {
            case 1:
              questionOneClicked(this);
              break;
            case 2:
              // code block
              break;
          }
    })
    switch(choiceBlock) {
        case 1:
          choiceBlock1.append(choiceButton)
          break;
        case 2:
          // code block
          break;
      }
}

var firstq = document.createElement('h3');

firstq.textContent = question1;
firstq.setAttribute('class', 'h3');
choiceBlock1.append(firstq);
choices1.forEach(function(currentValue){
    createButton(currentValue, 1)
});

choiceBlock1.setAttribute('class', 'hide');


choices1.onclick = questionOneClicked;

quizSection.append(choiceBlock1);
// Each button pushes through to the following screen with a new question 
// and a new set of answers.

function questionOneClicked(buttonElement) {
    console.log(buttonElement.value);
    if (buttonElement.value !== answer1) {
        // decrement time
        choiceBlock1.setAttribute('class', 'hide');
        choiceBlock2.removeAttribute('class');
    } else {
        choiceBlock1.setAttribute('class', 'hide');
        choiceBlock2.removeAttribute('class');
    }
}

console.log(choices1);

// If a given answer is correct, the user is notified and a current score is in another corner of the screen
// is increased by a specified increment.  

// If a given answer is incorrect, the user is notified, the current score remains the same, and the timer
// is decreased by a specified increment.

// When the user gets through all questions or the timer reaches 0, quiz ends.

// User is shown their final score and can input their name to populate a
// separate page that includes all scores along with the initials of those
// who obtained them.

// When quiz ends, a 'Try Again' button appears and can be used to restart the quiz
// as a form of a new start button.

// 'Try Again' button also appears on the high score page with the same function.

// There is also a 'Clear Highscores' button that appears on the high score page
// and can be used to clear the local storage and erase all current high scores.

// Need to find a way to keep scores on the high score page utilizing local storage
// and not have them erased upon a refresh of the page.