//variables to store correct or incorrect
var right = 0;
var wrong = 0;
var timeCounter; 
//Create a variable to hold the time interval once the question begins
var timeAmount=30; 
//Count will keep track of the index of the displayed questions
var count = 0;
//Create an array of question objects that hold your trivia questions
var questions = [{
    "question": "What does the 'J' stand for in David J. Matthews ?",
    "option1": "Jeff",
    "option2": "John",
    "option3": "Jerry",
    "option4": "Jack",
    "answer": "option2"  
}, {
    "question": "What is the name of Dave Matthews Band's drummer ?",
    "option1": "Carter Beauford",
    "option2": "Carter Banks",
    "option3": "Banks Carter",
    "option4": "Joe Carter",
    "answer": "option1"
}, {
    "question": "What is the name of Dave Matthews Band's FIRST recorded album ?",
    "option1": "Two Step",
    "option2": "Remember Two Things",
    "option3": "Crash",
    "option4": "Away From the World",
    "answer": "option2"
}, {
    "question": "Who is the Dave Matthews Band's saxophonist who died tragically in 2008 ?",
    "option1": "Stefan Lessard",
    "option2": "Jeff Coffin",
    "option3": "Leroi Moore",
    "option4": "Boyd Tinsley",
    "answer": "option4"
}, {
    "question": "In what country was Dave Matthews born ?",
    "option1": "United States",
    "option2": "England",
    "option3": "Australia",
    "option4": "South Africa",
    "answer" : "option4"
}];
//Hide gameHolder div so only startButton shows
$("#gameHolder").hide();
$("#endGame").hide();
//Create start button to initialize trivia game
$("#startButton").click(function () {startGame()});
//Create answer buttons and make them register clicks
$("#answer1").on("click", function () { buttonClick("option1") });
$("#answer2").on("click", function () { buttonClick("option2") });
$("#answer3").on("click", function () { buttonClick("option3") });
$("#answer4").on("click", function () { buttonClick("option4") });
//Start the gmae when this funcion is called
function startGame() {
    timeCounter = setInterval(timer, 1000); //starts timer
    //show gameHolder div on click
    $("#gameHolder").show();
    //hide startDiv div on click
    $("#startDiv").hide();
    //start game by calling nextQuestion function
    nextQuestion();
}
//Run this function to populate Questions and Answers on startup or to populate with next questions/answers
function nextQuestion() {
    if(count > questions.length - 1){
        clearInterval(timeCounter);
        $("#endGame").show();
        $("#gameHolder").hide();
        if (right >= wrong){
            $("#resultText").html("Great Job!!")
        }
        else (
            $("#resultText").html("You Suck!!")
        )
        //What else happens at game over
    }
    else{
        $("#questionResponse").html("");
        timeAmount=10;
        timer();
        $("#question").html((questions[count])["question"]);
        $("#answer1").html((questions[count])["option1"]);
        $("#answer2").html((questions[count])["option2"]);
        $("#answer3").html((questions[count])["option3"]);
        $("#answer4").html((questions[count])["option4"]);
    }
}
//Run the timer countdown when nextQuestion is run and display countdown
function timer() {
    $("#timeRemaining").html(timeAmount);
    timeAmount--;
    if (timeAmount < -1) //if it is 0 it will not show 0 on countdown
    {   
        $("#questionResponse").html("Out of Time");
        count++;
        wrong++;
        setTimeout(nextQuestion, 1000);
        //nextQuestion();
    }
}
//When buttons are clicked run this function
function buttonClick(button) {
    if(button == (questions[count])["answer"]){
        count++;
        right++;
        $("#questionResponse").html("That is correct!");
        $("#amountCorrect").html(right);
        setTimeout(nextQuestion, 1000);
        //nextQuestion();
    }
    else{
        count++;
        wrong++;
        $("#questionResponse").html("That is incorrect!");
        $("#amountIncorrect").html(wrong);
        setTimeout(nextQuestion, 1000);
        //nextQuestion();
    }
}
