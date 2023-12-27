const questions = [
        {
                question: "What is the correct way to declare a variable in JavaScript?",
                answers: [
                        { text: "var x;", correct: false },
                        { text: "let x;", correct: false },
                        { text: "const x;", correct: false },
                        { text: "all of the above", correct: true },
                ],
        },
        {
                question: 'How can you add an event listener to a button with the id "myButton" in JavaScript?',
                answers: [
                        {
                                text: 'document.getElementById("myButton").addEventListener("click", myFunction);',
                                correct: true
                        },
                        {
                                text: "myButton.onClick = myFunction;",
                                correct: false
                        },
                        {
                                text: 'addEventListener("click", myFunction);',
                                correct: false
                        },
                        {
                                text: 'myButton.addEventListener("click", myFunction);',
                                correct: false
                        },
                ],
        },
        {
                question: " Which of the following is used for asynchronous programming in JavaScript?",
                answers: [
                        { text: "callbacks", correct: false },
                        { text: "promises", correct: false },
                        { text: "async/await", correct: false },
                        { text: "all of the above", correct: true },
                ],
        },
        {
                question: 'What does the "this" keyword refer to in JavaScript?',
                answers: [
                        { text: "the current function", correct: false },
                        { text: "the global object", correct: false },
                        { text: "the calling object", correct: true },
                        { text: "a reserved keyword", correct: false },
                ],
        },
        
        {
                question: "Which method is used to change the CSS style of an HTML element using JavaScript?",
                answers: [
                        { text: "setAttribute()", correct: false },
                        { text: "style();", correct: true },
                        { text: "setStyle();", correct: false },
                        { text: "setCSS()", correct: false },
                ],
        },
        {
                question: 'What does the "box-sizing: border-box" property in CSS do?',
                answers: [
                        {
                                text: " It includes padding and border in the element's total width and height.",
                                correct: true
                        },
                        {
                                text: "It excludes padding and border from the element's total width and height.",
                                correct: false
                        },
                        {
                                text: "It only applies to the border element.",
                                correct: false
                        },
                        {
                                text: "It has no effect on the box model.",
                                correct: false
                        },
                ],
        },
        {
                question: "Which of the following is not a valid positioning property in CSS?",
                answers: [
                        { text: "static", correct: false },
                        { text: "fixed", correct: false },
                        { text: "absolute", correct: false },
                        { text: "relative", correct: true },
                ],
        },
        {
                question: "How do you center an element horizontally in CSS?",
                answers: [
                        { text: "text-align: center;", correct: false },
                        { text: "align: center;", correct: false },
                        { text: "margin: auto;", correct: true },
                        { text: "justify-content: center;", correct: false },
                ],
        },
        {
                question: 'What is the purpose of the HTML "data-" attribute?',
                answers: [
                        {
                                text: " It is used to store custom data private to the page or application.",
                                correct: true
                        },
                        { text: " It defines a hyperlink.", correct: false },
                        {
                                text: "It specifies the document's character encoding.",
                                correct: false
                        },
                        {
                                text: "It controls the layout of the page.",
                                correct: false
                        },
                ],
        },
        {
                question: "How can you prevent the default behavior of a form submission in JavaScript?",
                answers: [
                        { text: "event.preventDefault();", correct: true },
                        { text: "form.cancelSubmit();", correct: false },
                        { text: "stopSubmission(event);", correct: false },
                        { text: "return false;", correct: false },
                ],
        },
        {
                question: " Which of the following is a valid way to create an array in JavaScript?",
                answers: [
                        { text: "var arr = new Array();", correct: false },
                        { text: "var arr = [];", correct: true },
                        { text: "var arr = array();", correct: false },
                        { text: "var arr = Array.create();", correct: false },
                ],
        },
        {
                question: ' In JavaScript, what is the purpose of the "try...catch" statement?',
                answers: [
                        {
                                text: "It declares a block of code to be executed.",
                                correct: false
                        },
                        { text: " It defines a function.", correct: false },
                        {
                                text: " It handles exceptions and errors.",
                                correct: true
                        },
                        { text: " It creates a loop.", correct: false },
                ],
        },
        {
                question: 'What does the "localStorage" object in JavaScript do?',
                answers: [
                        {
                                text: " It provides access to the browser's session storage.",
                                correct: false
                        },
                        {
                                text: "It allows for asynchronous requests.",
                                correct: false
                        },
                        {
                                text: " It stores key/value pairs in a web browser with no expiration time.",
                                correct: true
                        },
                        {
                                text: " It defines the local file structure.",
                                correct: false
                        },
                ],
        },
        {
                question: "Which method is used to remove the last element from an array in JavaScript?",
                answers: [
                        { text: "arr.pop();", correct: true },
                        { text: "arr.removeLast();", correct: false },
                        { text: "arr.deleteLast();", correct: false },
                        { text: "arr.splice(-1, 1);", correct: false },
                ],
        },
        {
                question: 'What does the CSS property "display: none;" do?',
                answers: [
                        {
                                text: "It makes the element invisible but still occupies space.",
                                correct: false
                        },
                        {
                                text: " It removes the element from the document flow.",
                                correct: true
                        },
                        {
                                text: "It sets the element's display to the default value.",
                                correct: false
                        },
                        {
                                text: " It changes the element's font size to zero.",
                                correct: false
                        },
                ],
        },
        {
                question: "Which of the following is not a valid way to declare a function in JavaScript?",
                answers: [
                        { text: "function myFunction() {}", correct: false },
                        {
                                text: "const myFunction = function() {};",
                                correct: false
                        },
                        { text: "var myFunction = () => {};", correct: false },
                        { text: "function = myFunction() {};", correct: true },
                ],
        },
        {
                question: 'What is the purpose of the "viewport" meta tag in HTML?',
                answers: [
                        {
                                text: "It sets the background color of the viewport.",
                                correct: false
                        },
                        {
                                text: " It defines the size of the viewport for responsive design.",
                                correct: true
                        },
                        {
                                text: " It specifies the font size of the viewport.",
                                correct: false
                        },
                        {
                                text: " It controls the visibility of the viewport.",
                                correct: false
                        },
                ],
        },
        
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function showQuestion(){
	resetState();
	let currentQuestion = questions[currentQuestionIndex];
	let questionNo = currentQuestionIndex + 1;
	questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

	currentQuestion.answers.forEach(answer =>{
		const button = document.createElement("button");
		button.innerHTML = answer.text;
		button.classList.add("btn");
		answerButtons.appendChild(button);
		if(answer.correct){
			button.dataset.correct = answer.correct;
		}
		button.addEventListener("click", selectAnswer);
	});
}

function startQuiz(){
	currentQuestionIndex = 0;
	score = 0; 
	nextButton.innerHTML = "Next";
	showQuestion();
}


function resetState () {
	nextButton.style.display = "none";
	while(answerButtons.firstChild){
		answerButtons.removeChild(answerButtons.firstChild);
	}
}

function selectAnswer (e) {
	const selectedBtn = e.target;
	const isCorrect = selectedBtn.dataset.correct === "true";
	if(isCorrect){
		selectedBtn.classList.add("correct");
		score++;
	} else{
		selectedBtn.classList.add("incorrect");
	}
	Array.from(answerButtons.children).forEach(button=>{
		if(button.dataset.correct === "true"){
			button.classList.add("correct");
		}
		button.disabled = true;
	});
		nextButton.style.display = "block";
}

function showScore () {
	resetState();
	questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
	nextButton.innerHTML = "PLAY AGAIN";
	nextButton.style.display = "block";
}



function handleNextButton () {
	currentQuestionIndex++;
	if(currentQuestionIndex < questions.length){
		showQuestion();
	}else{
		showScore();
	}
}


nextButton.addEventListener("click",()=>{
	if(currentQuestionIndex < questions.length){
		handleNextButton();
	} else{
		startQuiz();
	}
})

startQuiz();