const questions = [
    {
        question: "Brass gets discoloured in air because of the presence of which of the following gases in air?",
        answers: ["Oxygen", "Hydrogen sulphide", "Carbon dioxide", "Nitrogen"],
        correct: 1
    },
    {
        question: "Which of the following is a non metal that remains liquid at room temperature?",
        answers: ["Phosphorous","Bromine", "Chlorine", "Helium"],
        correct: 1
    },
    {
        question: "Chlorophyll is a naturally occurring chelate compound in which central metal is",
        answers: ["Copper", "Magnesium", "Iron", "Calcium"],
        correct: 1
    },
    {
        question: "Which of the following metals forms an amalgam with other metals?",
        answers: ["Tin", "Mercury", "Lead", "Zinc"],
        correct: 1
    },
    {
        question: "Which of the following is used in pencils?",
        answers: ["Graphite", "Silicon", "Charcoal", "Phosphorous"],
        correct: 0
    },
    {
        question: "The gas usually filled in the electric bulb is",
        answers: ["Nitrogen", "Hydrogen", "Carbon dioxide", "Oxygen"],
        correct: 0
    },
    {
        question: "Washing soda is the common name for",
        answers: ["Sodium carbonate", "Calcium bicarbonate", "Sodium bicarbonate", "Calcium carbonate"],
        correct: 0
    },
    {
        question: "Quartz crystals normally used in quartz clocks etc. is chemically",
        answers: ["Silicon dioxide", "Germanium oxide", "Silicon carbonate", "Sodium silicate"],
        correct: 0
    },
    {
        question: "Which of the gas is not known as green house gas?",
        answers: ["Methane", "Nitrous oxide", "Carbon dioxide", "Hydrogen"],
        correct: 3
    },
    {
        question: "Bromine is a",
        answers: ["Black solid", "Red liquid", "Colourless gas", "Highly inflammable gas"],
        correct: 1
    }
];

let currentQuestion = 0;
let correctAnswers = 0;
let quizOver = false;

$(document).ready(function(){
    
    displayCurrentQuestion();
    $(this).find(".message").hide();
    
    $(this).find(".next").on("click", function(){
        
        if(!quizOver){
            
            let value = $("input[type=radio]:checked").val();
            
            if (value == undefined){
                
                $(document).find(".message").text("Please select an option!");
                $(document).find(".message").show();   
                
            }else{
                
                $(document).find(".message").hide();
                
                if(value == questions[currentQuestion].correct){
                    correctAnswers++;
                }
                
                currentQuestion++;
                
                if(currentQuestion < questions.length){
                    displayCurrentQuestion();
                }else{
                    displayScore();
                    $(document).find(".next").text("Play again?")
                    quizOver = true;
                }
            }
            
        }else{
            
            quizOver = false;
            $(document).find(".next").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        
        }
    });
});

function displayCurrentQuestion(){
    
    console.log("In displayCurrent Question Function.");
    
    let question = questions[currentQuestion].question;
    let questionClass = $(document).find(".container > .question");
    let listClass = $(document).find(".container > .list");
    let numChoices = questions[currentQuestion].answers.length;
    
    $(questionClass).text(question);
    $(listClass).find("li").remove();
    
    let choice;
    for (let i = 0; i < numChoices; i++){
        choice = questions[currentQuestion].answers[i];
        $('<li><input type="radio" value="' + i + '" name="dynradio" />' + choice + '</li>').appendTo(listClass);
    }
    
}

function resetQuiz(){
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore(){
    $(document).find(".container > .result").text(`You scored ${correctAnswers} out of ${questions.length}.`);
    $(document).find(".container > .result").show();
}

function hideScore(){
    $(document).find(".container > .result").hide();
}