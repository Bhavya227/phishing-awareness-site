function checkAnswers() {
    const q1 = document.querySelector('input[name="q1"]:checked')?.value;
    const q2 = document.querySelector('input[name="q2"]:checked')?.value;
  
    let score = 0;
  
    if (q1 === "c") score++;
    if (q2 === "b") score++;
  
    const resultBox = document.getElementById("results");
  
    if (!q1 || !q2) {
      resultBox.textContent = "Please answer all questions!";
      resultBox.style.color = "red";
    } else {
      resultBox.textContent = `You got ${score}/2 correct.`;
      resultBox.style.color = score === 2 ? "green" : "orange";
    }
  }
  