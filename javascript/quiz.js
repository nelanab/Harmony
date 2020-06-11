// Array of 16 Questions and each possible response / answer. The 'question' and each answer will populate the HTML
var questions = [
    {
        "question": 'Who is your favorite character of these four?',
        "fireAnswer": 'Zuko',
        "fireAnswerTotal": "1",
        "waterAnswer": 'Katara',
        "waterAnswerTotal": "2",
        "earthAnswer": 'Toph',
        "earthAnswerTotal": "3",
        "airAnswer": 'Aang',
        "airAnswerTotal": "4"
    },
    {
        "question": 'What type of weather do you prefer?',
        "fireAnswer": 'Hot summer weather',
        "fireAnswerTotal": "1",
        "waterAnswer": 'Snowy winter day',
        "waterAnswerTotal": "2",
        "earthAnswer": 'Any clear, sunny days',
        "earthAnswerTotal": "3",
        "airAnswer": 'Moderate temperature days',
        "airAnswerTotal": "4"
    },
    {
        "question": 'What is your favorite creature?',
        "fireAnswer": 'Eel Hound',
        "fireAnswerTotal": "1",
        "waterAnswer": 'Polar Bear Dog',
        "waterAnswerTotal": "2",
        "earthAnswer": 'Badger Mole',
        "earthAnswerTotal": "3",
        "airAnswer": 'Air Bison',
        "airAnswerTotal": "4"
    },
    {
        "question": 'How would your friends describe you?',
        "fireAnswer": 'Outgoing',
        "fireAnswerTotal": "1",
        "waterAnswer": 'Calm',
        "waterAnswerTotal": "2",
        "earthAnswer": 'Determined',
        "earthAnswerTotal": "3",
        "airAnswer": 'Fun',
        "airAnswerTotal": "4"
    },
    {
        "question": 'What is your favorite color of these four?',
        "fireAnswer": 'Red',
        "fireAnswerTotal": "1",
        "waterAnswer": 'Blue',
        "waterAnswerTotal": "2",
        "earthAnswer": 'Green',
        "earthAnswerTotal": "3",
        "airAnswer": 'Yellow',
        "airAnswerTotal": "4"
    },
    {
        "question": 'What do you like to do in your spare time?',
        "fireAnswer": 'Work on a project',
        "fireAnswerTotal": "1",
        "waterAnswer": 'Do something creative',
        "waterAnswerTotal": "2",
        "earthAnswer": 'Spend time outdoors',
        "earthAnswerTotal": "3",
        "airAnswer": 'Relax',
        "airAnswerTotal": "4"
    },
    {
        "question": 'What type of pizza is your favorite?',
        "fireAnswer": 'I like pineapple on my pizza',
        "fireAnswerTotal": "1",
        "waterAnswer": 'Classic pepperoni and sausage',
        "waterAnswerTotal": "2",
        "earthAnswer": 'Supreme/Everything Pizza',
        "earthAnswerTotal": "3",
        "airAnswer": 'Cheese Pizza',
        "airAnswerTotal": "4"
    },
    {
        "question": 'What genre of music do you listen to most frequently?',
        "fireAnswer": 'Alternative',
        "fireAnswerTotal": "1",
        "waterAnswer": 'Classical',
        "waterAnswerTotal": "2",
        "earthAnswer": 'Rock',
        "earthAnswerTotal": "3",
        "airAnswer": 'Pop',
        "airAnswerTotal": "4"
    },
    {
        "question": 'If you could go on vacation, where would you go?',
        "fireAnswer": 'Somewhere with good shopping/dining',
        "fireAnswerTotal": "1",
        "waterAnswer": 'Somewhere with a beach',
        "waterAnswerTotal": "2",
        "earthAnswer": 'Somewhere with good hiking',
        "earthAnswerTotal": "3",
        "airAnswer": 'Any vacation is a good vacation',
        "airAnswerTotal": "4"
    },
    {
        "question": 'What genre of movies do you prefer?',
        "fireAnswer": 'Science Fiction',
        "fireAnswerTotal": "1",
        "waterAnswer": 'Drama',
        "waterAnswerTotal": "2",
        "earthAnswer": 'Action',
        "earthAnswerTotal": "3",
        "airAnswer": 'Fantasy',
        "airAnswerTotal": "4"
    },
    {
        "question": 'What Hogwarts House are you in?',
        "fireAnswer": 'Slytherin',
        "fireAnswerTotal": "1",
        "waterAnswer": 'Ravenclaw',
        "waterAnswerTotal": "2",
        "earthAnswer": 'Gryffindor',
        "earthAnswerTotal": "3",
        "airAnswer": 'Hufflepuff',
        "airAnswerTotal": "4"
    },
    {
        "question": 'What is your favorite time of day?',
        "fireAnswer": 'Noon',
        "fireAnswerTotal": "1",
        "waterAnswer": 'Night',
        "waterAnswerTotal": "2",
        "earthAnswer": 'Dusk',
        "earthAnswerTotal": "3",
        "airAnswer": 'Dawn',
        "airAnswerTotal": "4"
    },
    {
        "question": 'Which of these personlity traits would you want?',
        "fireAnswer": 'Outgoing',
        "fireAnswerTotal": "1",
        "waterAnswer": 'Calm',
        "waterAnswerTotal": "2",
        "earthAnswer": 'Self Assured',
        "earthAnswerTotal": "3",
        "airAnswer": 'High Energy',
        "airAnswerTotal": "4"
    },
    {
        "question": 'If you were being attacked, what would you do?',
        "fireAnswer": 'Go on the offensive',
        "fireAnswerTotal": "1",
        "waterAnswer": 'Evade their attacks and strike when their is an opening',
        "waterAnswerTotal": "2",
        "earthAnswer": 'Defend until their is an opening',
        "earthAnswerTotal": "3",
        "airAnswer": 'Defend/Evade and hope they stop',
        "airAnswerTotal": "4"
    },
    {
        "question": 'What is your favorite sport to watch or participate in?',
        "fireAnswer": 'Basketball',
        "fireAnswerTotal": "1",
        "waterAnswer": 'Swimming',
        "waterAnswerTotal": "2",
        "earthAnswer": 'Football',
        "earthAnswerTotal": "3",
        "airAnswer": 'Soccer',
        "airAnswerTotal": "4"
    },
    {
        "question": 'What is your zodiac sign?',
        "fireAnswer": 'Leo, Virgo, or Aries',
        "fireAnswerTotal": "1",
        "waterAnswer": 'Aquarius, Cancer, or Capricorn',
        "waterAnswerTotal": "2",
        "earthAnswer": 'Sagittarius, Scorpio, or Taurus',
        "earthAnswerTotal": "3",
        "airAnswer": 'Pisces, Libra, or Gemini',
        "airAnswerTotal": 4
    }
]

// Sets currentQuestion to 0 so it always renders the first in the array on laod
let currentQuestion = 0;
// Initializes the score and selectedAnswers array to store the current score and which answer a user chose on each question
let score = [];
let selectedAnswers = [];
// Sets the total amount of questions to however many are in the array
const totalQuestions = questions.length;

// Sets each variable to a class tag in the HTML. This will allow the HTML to be populated by the array, and
// for buttons to be clickable and responsive
const container = document.querySelector('.question_box');
const questionText = document.querySelector('.question');
const fire_option = document.querySelector('.fire_option');
const water_option = document.querySelector(".water_option");
const earth_option = document.querySelector(".earth_option");
const air_option = document.querySelector(".air_option");
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector(".restart");
const result = document.querySelector(".results");


// Generates the questions and pushes the text to HTML
function generateQuestions (index) {
    console.log(index);
    // Select each question by giving it an index
    const fireOptionTotal = questions[index].fireAnswerTotal;
    const waterOptionTotal = questions[index].waterAnswerTotal;
    const earthOptionTotal = questions[index].earthAnswerTotal;
    const airOptionTotal = questions[index].airAnswerTotal;
    // Push questions to HTML
    questionText.innerHTML = questions[index].question;
    // Gives the total variables a data type so they can be stored as numbers
    fire_option.setAttribute('data-total', `${fireOptionTotal}`);
    water_option.setAttribute('data-total', `${waterOptionTotal}`);
    earth_option.setAttribute('data-total', `${earthOptionTotal}`);
    air_option.setAttribute('data-total', `${airOptionTotal}`);
    // Pushes possible answers to HTML
    fire_option.innerHTML = questions[index].fireAnswer;
    water_option.innerHTML = questions[index].waterAnswer;
    earth_option.innerHTML = questions[index].earthAnswer;
    air_option.innerHTML = questions[index].airAnswer;
}

// Loads next questions when the next button is clicked
function loadNextQuestion() {
    
    // Sets selectedOption equal to whatever radio button was checked when next is clicked
    const selectedOption = document.querySelector('input[type="radio"]:checked');

    //Check if a radio button is checked, if not an alert pops up
    if(!selectedOption) {
        alert('Please select an answer to continue');
        return;
    }

    // Get value of selected answer
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    //Add the answer to the score array
    score.push(answerScore);
    selectedAnswers.push()

    // Makes sure totalScore is equal to one number by reducing the score array to a sum of all answered questions
    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    //Increment current question number to display
    currentQuestion++;

        //clear checked answers
        selectedOption.checked = false;

    // If on final questions, the next button's text changes to say FINISH
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }

    //If quiz is finished then hide questions and show results
    // Displays the Fire Nation result if the totalScore is within the stated range
    if(currentQuestion == totalQuestions ) {
        container.style.display = "none";
        if(totalScore > 0 && totalScore <= 16) {
            result.innerHTML = 
            `<h3>You are from the Fire Nation!</h3>
            <a href="firenation.html" id="fire_nation_result"><p>Read more about the Fire Nation...</p></a>
            <button class="restart">Restart Quiz</button>`;
            return;
        }
        
        // Displays the Water Tribes resilt if the totalScore is within the stated range
        else if(totalScore > 16 && totalScore < 40) {
            result.innerHTML = 
            `<h3>You are from the Water Tribes!</h3>
            <a href="watertribes.html" id="water_tribes_result"><p>Read more about the Water Tribes...</p></a>
            <button class="restart">Restart Quiz</button>`;
            return;
        }

        // Displays the Avatar result only if the totalScore is = 34
        else if(totalScore == 40) {
            result.innerHTML = 
            `<h3 id="avatar">You are the Avatar!</h3>
            <p>Congratulations, you have control of all four elements!</p>
            <button class="restart">Restart Quiz</button>`;
            return;
        }

        // Displays the Earth Kingdom result if the totalScore is within the stated range
        else if(totalScore > 40 && totalScore <= 48) {
            result.innerHTML = 
            `<h3>You are from the Earth Kingdom!</h3>
            <a href="earthkingdom.html" id="earth_kingdom_result"><p>Read more about the Earth Kingdom...</p></a>
            <button class="restart">Restart Quiz</button>`;
            return;
        }

        // Displays the Air Temples result if the totalScore is within the stated range
        else if(totalScore > 48 && totalScore <= 64) {
            result.innerHTML = 
            `<h3>You are from the Air Temples!</h3>
            <a href="airtemples.html" id="air_temples_result"><p>Read more about the Air Temples...</p></a>
            <button class="restart">Restart Quiz</button>`;
            return;
        }
    }
    // Executes the function generateQuestions with the current question in the index
    generateQuestions(currentQuestion);
}   

// Loads previous question when the PREVIOUS button is clicked
function loadPreviousQuestion() {
    currentQuestion--;
    //remove last value
    score.pop();
    //generate question
    generateQuestions(currentQuestion);
}

// Reloads the page and resets score and selectedAnswers arrays
function restartQuiz(e) {
    if(e.target.matches('button')) {
        //reset array and score
        currentQuestion = 0;
        score = [];
        //Reload
        location.reload();
    }
}

// On load, loads first question
generateQuestions(currentQuestion);

// adds event listeners for all buttons so that when they are clicked, a function executes
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click', loadPreviousQuestion);
result.addEventListener('click', restartQuiz);