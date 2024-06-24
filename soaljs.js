document.addEventListener('DOMContentLoaded', function() {
    const questionText = document.getElementById('question-text');
    const choiceA = document.getElementById('choiceA');
    const choiceB = document.getElementById('choiceB');
    const choiceC = document.getElementById('choiceC');
    const choiceD = document.getElementById('choiceD');
    const answerForm = document.getElementById('answer-form');
    const resultText = document.getElementById('result');

    let currentQuestion = 0;
    let score = 0;

    // Replace with your JSON data containing questions and choices
    const questions = [
        {
            question: "Manakah yang merupakan bukti yang mendukung Teori Makkah tentang masuknya Islam ke Indonesia?",
            choices: {
                A: "Kerajaan Samudra Pasai menganut mazhab Syafi'i.",
                B: "Adanya perkampungan Islam di pantai barat Sumatra pada abad ke-7.",
                C: "Raja-raja Samudra Pasai menggunakan gelar al-Malik.",
                D: "Ditemukannya makam Fatimah binti Malmun di Leran, Jawa Timur."
            },
            correctAnswer: "B"
        },
        // Add more questions as needed
    ];

    function loadQuestion() {
        const q = questions[currentQuestion];
        questionText.textContent = q.question;
        choiceA.textContent = q.choices.A;
        choiceB.textContent = q.choices.B;
        choiceC.textContent = q.choices.C;
        choiceD.textContent = q.choices.D;
    }

    function checkAnswer(answer) {
        const q = questions[currentQuestion];
        if (answer === q.correctAnswer) {
            score++;
            resultText.textContent = "Correct!";
        } else {
            resultText.textContent = "Incorrect!";
        }
        currentQuestion++;

        // Check if quiz is finished
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        answerForm.style.display = 'none';
        resultText.textContent = `Quiz completed! Your score is ${score} out of ${questions.length}.`;
    }

    // Event listener for form submission
    answerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (!selectedAnswer) {
            alert("Please select an answer.");
            return;
        }
        const answerValue = selectedAnswer.value;
        checkAnswer(answerValue);
    });

    // Load first question
    loadQuestion();
});
