var readLineSync = require("readline-sync");
var chalk = require('chalk');

// Questions array consisting of trivia questions and their answers
var questionsArray = [{
    question: "What number is Sheldon's apartment? \n\na.2A \nb.3A \nc.4A\n",
    answer: "c"
}, {
    question: "What does it say on the yellow tape blocking the lift outside Sheldon and Penny's apartments? \n\na.Caution \nb.Out of Order \nc.Danger\n",
    answer: "a"
}, {
    question: "What is Sheldon's catchphrase? \n\na.How you doin'? \nb.Um Bongo \nc.Bazinga\n",
    answer: "c"
}, {
    question: "Which Star Trek star has had numerous cameos as himself in The Big Bang Theory? \n\na.Wil Wheaton \nb.Patrick Stewart \nc.Brent Spiner\n",
    answer: "a"
}, {
    question: "Which band wrote the theme song for the show? \n\na.The Lab kids \nb.The Rembrandts \nc.Barenaked Ladies\n",
    answer: "c"
}, {
    question: "What is Leonard's Last Name? \n\na.Bloom \nb.Kripke \nc.Hofstadter\n",
    answer: "c"
}, {
    question: "What musical instrument does Leonard play? \n\na.Piano \nb.Cello \nc.Bongo\n",
    answer: "b"
}];

var score;
// Array of high scores of this quiz
var highScore = [{
    name:"Mohit",
    score:7
},{
    name:"Bhavesh",
    score:6
}];

var userName = readLineSync.question("What's your name? ");
console.log(chalk.yellow("Welcome ") + chalk.blue(userName) + chalk.yellow("\nLet's play") + chalk.red(" The Big Bang Theory Trivia") + 
            chalk.yellow("\nFor each correct answer you will get") + chalk.red(" 1 pt"));

// Function to check whether answer provided by user is correct or not.
function play_quiz(question, correctAnswer) {
    var userAnswer = readLineSync.question(question);
    if(userAnswer === correctAnswer) {
        score += 1;
        console.log(chalk.green("Correct Answer!!"));
    }
    else {
        console.log(chalk.red("Incorrect:("));
        console.log(chalk.green("Correct answer is: ") + chalk.green(correctAnswer));
    }

    console.log("current Score: " + chalk.yellow(score));
    console.log(chalk.red("--------------------------------"));
}

// Function to play the quiz
function playGame() {
    score = 0;
    for(var i = 0; i<questionsArray.length; i++) {
        var currentQuestion = questionsArray[i];
        play_quiz(currentQuestion.question, currentQuestion.answer);
    }
    console.log(chalk.yellow("Yay!! You SCORED: ") + chalk.blue(score));

    //Display High scores so far
    console.log("Check out the high scores:- ");
    for(var j = 0; j<highScore.length; j++) {
        console.log(chalk.yellow(highScore[j].name) + "  " + ":" + "  " + chalk.red(highScore[j].score));
    }
    //check whether user has registered a high score or not
    check_highScore();
}

//Function to check high score
function check_highScore() {
    for(var i = 0; i<highScore.length; i++) {
        if(score >= highScore[i].score) {
            console.log(chalk.green("Congratulations!! You have registered a high score! Pls send a screenshot to me and I'll update the highscores:)"));
            break;
        }
    }
}

playGame();

if(readLineSync.keyInYN("Do you want to play this quiz again? ")) {
    playGame();
}
else {
    console.log(chalk.blue("Thank you for playing this quiz!!"));
}