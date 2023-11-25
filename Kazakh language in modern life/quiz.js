function submitQuiz() {
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
        q3: document.querySelector('input[name="q3"]:checked').value
    };

    const correctAnswers = { q1: 'b', q2: 'c', q3: 'b' };
    let score = 0;

    for (const question in answers) {
        if (answers[question] === correctAnswers[question]) {
            score++;
        }
    }

    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = `<p>Your score: ${score} out of 3</p>`;
}
