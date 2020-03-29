//variables to store correct or incorrect
var right = 0;
var wrong = 0;
var timeCounter; 
//Create a variable to hold the time interval once the question begins
var timeAmount; 
//Count will keep track of the index of the displayed questions
var count = 0;
//Create an array of question objects that hold your trivia questions
var questions = [{
    "question": "Which of the following birds is a raptor ?",
    "option1": "Black Capped Chickadee",
    "option2": "Red-Tail Hawk",
    "option3": "Great Blue Heron",
    "option4": "Canada Goose",
    "answer": "option2",
    "wrongAns": "Wrong! The answer is 'Red-Tail Hawk'.",
    "image": src = "assets/images/redtailhawk.jpg"

}, {
    "question": "Which of the following makes raptors unique among birds ?",
    "option1": "They eat meat.",
    "option2": "They have sharp, hooked beaks.",
    "option3": "They catch and kill their food with their feet.",
    "option4": "All of the above.",
    "answer": "option4",
    "wrongAns": "Wrong! The answer is 'All of the above'.",
    "image": src = "assets/images/hawkchasing.jpg"

}, {
    "question": "Which raptor eats live fish almost exclusively (98-99% of its diet) ?",
    "option1": "Bald Eagle",
    "option2": "Harris Hawk",
    "option3": "Osprey",
    "option4": "Peregrine Falcon",
    "answer": "option3",
    "wrongAns": "Wrong! The answer is 'Osprey'.",
    "image": src = "assets/images/osprey.jpg"
}, {
    "question": "What makes up the primary prey of the falcon species ?",
    "option1": "Other Birds",
    "option2": "Rabbits",
    "option3": "Small Children",
    "option4": "House Cats",
    "answer": "option1",
    "wrongAns": "Wrong! The answer is 'Other Birds'.",
    "image": src = "assets/images/peregrinechasing.jpg"
}, {
    "question": "Which raptor species will commonly hunt in packs ?",
    "option1": "Golden Eagles",
    "option2": "Harris Hawks",
    "option3": "Gyrfalcons",
    "option4": "Goshawks",
    "answer" : "option2",
    "wrongAns": "Wrong! The answer is 'Harris Hawks'.",
    "image": src = "assets/images/harrishawk.jpg"
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
        $("#correctImage").attr("src","");
        $("#endGame").show();
        $("#gameHolder").hide();
        if (right >= wrong){
            $("#resultText").html("You know your raptors! Great Job!!");
        }
        else {
            $("#resultText").html("Raptors are awesome! Study More!!");
        }
        //What else happens at game over
    }
    else{
        $("#questionResponse").html("");
        $("#correctImage").attr("src","");
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
    if (timeAmount == 0) 
    {   
        // $("#questionResponse").html("Out of Time");
        // count++;
        // wrong++;
        // setTimeout(nextQuestion, 1000);
        //nextQuestion();
        buttonClick("outoftime")
    }
}
//When buttons are clicked run this function
function buttonClick(button) {
    if(button == (questions[count])["answer"]){
        $("#questionResponse").html("That is correct!");
        $("#correctImage").attr("src", (questions[count])["image"]);
        count++;
        right++;
        $("#amountCorrect").html(right);
        setTimeout(nextQuestion, 2000);
        //nextQuestion();
    }
    else if (button == "outoftime") {

        $("#questionResponse").html("Out of time...." + (questions[count])["wrongAns"]);
        $("#correctImage").attr("src", (questions[count])["image"]);
        count++;
        wrong++;
        $("#amountIncorrect").html(wrong);
        setTimeout(nextQuestion, 2000);

    }
    else{
        $("#questionResponse").html((questions[count])["wrongAns"]);
        $("#correctImage").attr("src", (questions[count])["image"]);
        count++;
        wrong++;
        $("#amountIncorrect").html(wrong);
        setTimeout(nextQuestion, 2000);
        //nextQuestion();
    }
}