const quizData = [
    {
        question: "How many stars are in the sky?",
        a: "24",
        b: "6",
        c: "100000",
        d: "A lot",
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
        question: "Which blue is best?",
        a: "Ocean",
        b: "Sky",
        c: "Crayon",
        d: "Sad vibes",
        correct: "b",
    },
    {
        question: "Which is prime?",
        a: "0",
        b: "1",
        c: "4",
        d: "Optimus",
        correct: "d",
    },
    {
        question: "How many questions are left?",
        a: "0",
        b: "1",
        c: "2",
        d: "3",
        correct: "a",
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
