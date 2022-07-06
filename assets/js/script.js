// Code Quiz Pseudocode

// Home screen with title, explanation of rules, and start button.

// Timer towards the corner starts upon clicking start. Title screen is hidden
// and first question appears along with four buttons for different answers.

// Each button pushes through to the following screen with a new question 
// and a new set of answers.

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