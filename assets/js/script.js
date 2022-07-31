
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
var startTime = 30;

var choiceBlock1 = document.createElement('div');
var choiceBlock2 = document.createElement('div');
var choiceBlock3 = document.createElement('div');
var choiceBlock4 = document.createElement('div');
var choiceBlock5 = document.createElement('div');


startPress.addEventListener('click', function() {
    quizStart();
})

function quizStart() {
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
              questionTwoClicked(this);
              break;
            case 3:
              questionThreeClicked(this);
              break;
            case 4: 
              questionFourClicked(this);
              break;
            case 5:
              questionFiveClicked(this);
              break;
          }
    })
    switch(choiceBlock) {
        case 1:
          choiceBlock1.append(choiceButton)
          break;
        case 2:
          choiceBlock2.append(choiceButton)
          break;
        case 3:
          choiceBlock3.append(choiceButton)
          break;
        case 4:
          choiceBlock4.append(choiceButton)
          break;
        case 5:
          choiceBlock5.append(choiceButton)
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


var secondq = document.createElement('h3');
secondq.textContent = question2;
secondq.setAttribute('class', 'h3');
choiceBlock2.append(secondq);
choices2.forEach(function(currentValue){
    createButton(currentValue, 2)
});

choiceBlock2.setAttribute('class', 'hide');
quizSection.append(choiceBlock2);
// Each button pushes through to the following screen with a new question 
// and a new set of answers.
function questionTwoClicked(buttonElement) {
    console.log(buttonElement.value);
    if (buttonElement.value !== answer2) {
        // decrement time
        choiceBlock2.setAttribute('class', 'hide');
        choiceBlock3.removeAttribute('class');
    } else {
        choiceBlock2.setAttribute('class', 'hide');
        choiceBlock3.removeAttribute('class');
    }
}


var thirdq = document.createElement('h3');
thirdq.textContent = question3;
thirdq.setAttribute('class', 'h3');
choiceBlock3.append(thirdq);
choices3.forEach(function(currentValue){
    createButton(currentValue, 3)
});

choiceBlock3.setAttribute('class', 'hide');
quizSection.append(choiceBlock3);
// Each button pushes through to the following screen with a new question 
// and a new set of answers.
function questionThreeClicked(buttonElement) {
    console.log(buttonElement.value);
    if (buttonElement.value !== answer3) {
        // decrement time
        choiceBlock3.setAttribute('class', 'hide');
        choiceBlock4.removeAttribute('class');
    } else {
        choiceBlock3.setAttribute('class', 'hide');
        choiceBlock4.removeAttribute('class');
    }
}


var fourthq = document.createElement('h3');
fourthq.textContent = question4;
fourthq.setAttribute('class', 'h3');
choiceBlock4.append(fourthq);
choices4.forEach(function(currentValue){
    createButton(currentValue, 4)
});

choiceBlock4.setAttribute('class', 'hide');
quizSection.append(choiceBlock4);
// Each button pushes through to the following screen with a new question 
// and a new set of answers.
function questionFourClicked(buttonElement) {
    console.log(buttonElement.value);
    if (buttonElement.value !== answer4) {
        // decrement time
        choiceBlock4.setAttribute('class', 'hide');
        choiceBlock5.removeAttribute('class');
    } else {
        choiceBlock4.setAttribute('class', 'hide');
        choiceBlock5.removeAttribute('class');
    }
}


var fifthq = document.createElement('h3');
fifthq.textContent = question5;
fifthq.setAttribute('class', 'h3');
choiceBlock5.append(fifthq);
choices5.forEach(function(currentValue){
    createButton(currentValue, 5)
});

choiceBlock5.setAttribute('class', 'hide');
quizSection.append(choiceBlock5);
// Each button pushes through to the following screen with a new question 
// and a new set of answers.
function questionFiveClicked(buttonElement) {
    console.log(buttonElement.value);
    if (buttonElement.value !== answer5) {
        // decrement time
        choiceBlock5.setAttribute('class', 'hide');
        // choiceBlock5.removeAttribute('class');
    } else {
        choiceBlock5.setAttribute('class', 'hide');
        // choiceBlock5.removeAttribute('class');
    }
}





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