const answers = {
    q1: "서울",
    q2: "냉면",
    q3: "태극기",
    q4: "스키",
    q5: "겨울",
    q6: "추석"
  };
  
  function startQuiz() {
    document.getElementById("start").style.display = "none";
    document.getElementById("quizForm").style.display = "block";
  }
  
  function checkAnswers() {
    let score = 0;
    let total = Object.keys(answers).length;
  
    for (let key in answers) {
      let selected = document.querySelector(`input[name='${key}']:checked`);
      if (selected && selected.value === answers[key]) {
        score++;
      }
    }
  
    const modal = document.getElementById("resultModal");
    modal.style.display = "flex";
    document.getElementById("scoreDisplay").innerHTML =
      `<h2>${score} / ${total} 정답입니다</h2>
       <button onclick='location.reload()'>다시 시작</button>`;
  }
  
  
  
  
  function checkAnswers() {
    let score = 0;
    let total = Object.keys(answers).length;
  
    for (let key in answers) {
      let selected = document.querySelector(`input[name="${key}"]:checked`);
      if (selected && selected.value === answers[key]) {
        score++;
      }
    }
  
    showScore(score, total);
  }
  
  function showScore(score, total) {
    const modal = document.getElementById("resultModal");
    const display = document.getElementById("scoreDisplay");
    modal.style.display = "flex";
  
    let current = 0;
    let interval = setInterval(() => {
      display.innerHTML = `<h2>점수: ${current} / ${total}</h2>`;
      if (current >= score) {
        clearInterval(interval);
        setTimeout(showForm, 2000);
      }
      current++;
    }, 200);
  }
  
  function showForm() {
    document.getElementById("modalContent").innerHTML = `
      <h2>경품 응모</h2>
      <form onsubmit="submitEntry(event)">
        <input type="text" id="name" placeholder="이름">
        <input type="email" id="email" placeholder="이메일">
        <input type="text" id="phone" placeholder="전화번호">
        <button type="submit">응모하기</button>
      </form>
    `;
  }
  
  function submitEntry(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
  
    if (!name || !email || !phone) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
  
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("올바른 이메일 형식을 입력해주세요.");
      return;
    }
  
    alert("응모가 완료되었습니다! 감사합니다.");
    document.getElementById("resultModal").style.display = "none";
  }
  