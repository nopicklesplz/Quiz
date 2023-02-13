const quizData = [
    {
        question: "How old is Ray?",
        a: "23",
        b: "24",
        c: "25",
        d: "6",
        correct: "d",
    },
    {
        question: "Are aliens real?",
        a: "Yes",
        b: "No",
        c: "shi- maybe",
        d: "hell yeah",
        correct: "c",
    },
    {
        question: "Which camps are best?",
        a: "Concentration Camps",
        b: "Internment Camps",
        c: "Coding bootcamps",
        d: "Camping with da homies",
        correct: "d",
    },
    {
        question: "What happened in My Lai, Vietnam?",
        a: "Earthquake",
        b: "Mass Murder",
        c: "Massive Earthquake",
        d: "Typhoon",
        correct: "b",
    },
    {
        question: "What is Cantua's mascot?",
        a: "Wolf",
        b: "Bagder",
        c: "Tiger",
        d: "A lion jumping in and out of backyards",
        correct: "d",
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // Show results
            quiz.innerHTML = `<h2> You answered ${score}/${quizData.length} questions correctly.</h2>
            <button onclick="location.reload()">Reload</button>`;
        }
    }
});