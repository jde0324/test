function startQuiz() {
  let startScreen = document.getElementById("start");
  let quizForm = document.getElementById("quizForm");
  startScreen.style.display = "none";
  quizForm.style.display = "block";
}

function checkAnswers() {
  let score = 0;
  let total = 6;

  let q1 = document.querySelector("input[name='q1']:checked");
  if (q1 && q1.value == "서울") score++;

  let q2 = document.querySelector("input[name='q2']:checked");
  if (q2 && q2.value == "냉면") score++;

  let q3 = document.querySelector("input[name='q3']:checked");
  if (q3 && q3.value == "태극기") score++;

  let q4 = document.querySelector("input[name='q4']:checked");
  if (q4 && q4.value == "스키") score++;

  let q5 = document.querySelector("input[name='q5']:checked");
  if (q5 && q5.value == "겨울") score++;

  let q6 = document.querySelector("input[name='q6']:checked");
  if (q6 && q6.value == "추석") score++;

  showScore(score, total);
}

function showScore(score, total) {
  let modal = document.getElementById("resultModal");
  let display = document.getElementById("score");
  modal.style.display = "flex";

  let current = 0;
  let interval = setInterval(function () {
    display.innerHTML = "<h2>점수: " + current + " / " + total + "</h2>";
    if (current >= score) {
      clearInterval(interval);
      setTimeout(showForm, 2000); 
    }
    current++;
  }, 150);
}

function showForm() {
  let modalContent = document.getElementById("modalContent");
  modalContent.innerHTML = ""
    + "<h2>경품 응모</h2>"
    + "<form onsubmit='submitEntry(event)'>"
    + "<input type='text' id='name' placeholder='이름'>"
    + "<input type='email' id='email' placeholder='이메일'>"
    + "<input type='text' id='phone' placeholder='전화번호'>"
    + "<button type='submit'>응모하기</button>"
    + "</form>";
}

function submitEntry(e) {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();

  if (name === "") {
    alert("이름을 입력해주세요.");
    return;
  }
  if (email === "") {
    alert("이메일을 입력해주세요.");
    return;
  }
  if (phone === "") {
    alert("전화번호를 입력해주세요.");
    return;
  }

  if (!email.includes("@")) {
    alert("이메일에 '@'가 빠졌어요.");
    return;
  }
  if (!email.includes(".")) {
    alert("이메일에 '.'이 빠졌어요.");
    return;
  }

  alert("응모가 완료되었습니다! 감사합니다.");
  document.getElementById("resultModal").style.display = "none";
}
