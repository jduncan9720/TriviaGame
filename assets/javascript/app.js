//Create an array of question objects that hold your trivia questions 
$("#gameHolder").hide();

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
    "answer": "option4",
}, {
    "question": "In what country was Dave Matthews born ?",
    "option1": "United States",
    "option2": "England",
    "option3": "Australia",
    "option4": "South Africa",
}];
//Create a variable to hold the time interval once the question begins
var showQuestion;
//Count will keep track of the index of the displayed questions
var count = 0;
//Create start button to initialize trivia game
$("#startButton").click(function () {startGame()});

function startGame() {
    //show gameHolder div on click
    $("#gameHolder").show();
    //hide startDiv div on click
    $("#startDiv").hide();
    nextQuestion();
}

function nextQuestion() {
    $("#question").html((questions[count])["question"]);
    $("#answer1").html((questions[count])["option1"]);
    $("#answer2").html((questions[count])["option2"]);
    $("#answer3").html((questions[count])["option3"]);
    $("#answer4").html((questions[count])["option4"]);
    count++;

//Replace the question in the question-holder div with the question in the array at position count
//Replace the button text with new answers
}
//$("#test").click(function () {nextQuestion()});**********************
//Check if correct option is chosen then call a function correct() or function incorrect()
$("#answer1").on("click", function () { buttonClick("option1") });
$("#answer2").on("click", function () { buttonClick("option2") });
$("#answer3").on("click", function () { buttonClick("option3") });
$("#answer4").on("click", function () { buttonClick("option4") });

function buttonClick(color) {
    if (color == "blue") {
        currentScore = crystal1 + currentScore;
        $("#score").html(currentScore);
    }
    else if (color == "green") {
        currentScore = crystal2 + currentScore;
        $("#score").html(currentScore);
    }
    else if (color == "red") {
        currentScore = crystal3 + currentScore;
        $("#score").html(currentScore);
    }
    else if (color == "yellow") {
        currentScore = crystal4 + currentScore;
        $("#score").html(currentScore);
    }
//function correct()
    //show "That is correct!"
    //show image for answer
    //timer here
    //call function nextQuestion()

//function incorrect()
//show "That is incorrect"
    //show image for answer
    //timer here
    //call function nextQuestion()


function buttonClick(buttonAttribute){
//Check the element at count, compare it's attribute with buttonAttribute, if they are the same, it's correct.
//nameOfTopArray[1].element("question")
//Increment Count
//If count is the same as the length of the question array, end the game
//Else, call nextQuestion after timer
}
//Use showQuestion to hold the setInterval to run nextQuestion

}