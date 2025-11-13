// 주사위 굴리는 함수 정의
function rollDice() {
    // 1~6 랜덤 정수 생성 (0<=x<1 → 0~5.xxx → floor로 0~5 → +1로 1~6)
    const randomNumber1 = Math.floor(Math.random() * 6) + 1; // Player 1 결과
    const randomNumber2 = Math.floor(Math.random() * 6) + 1; // Player 2 결과

    // Player 1 이미지 요소 선택
    const img1 = document.querySelector(".img1"); // class="img1" 첫 요소
    // Player 2 이미지 요소 선택
    const img2 = document.querySelector(".img2"); // class="img2" 첫 요소

    // Player 1 주사위 이미지 변경 (예: images/dice3.png)
    img1.setAttribute("src", `images/dice${randomNumber1}.png`); // src 속성 교체
    // Player 2 주사위 이미지 변경
    img2.setAttribute("src", `images/dice${randomNumber2}.png`); // src 속성 교체

    // 결과 텍스트를 표시할 h1 요소 선택(한 번만 찾고 재사용)
    const titleEl = document.querySelector("h1"); // 결과 표시 영역

    // 승자 판정해서 h1 내용 변경
    if (randomNumber1 > randomNumber2) {                // Player1이 더 클 때
        titleEl.textContent = "🚩 Player 1 Wins!";      // Player1 승리 표시
    } else if (randomNumber2 > randomNumber1) {         // Player2가 더 클 때
        titleEl.textContent = "Player 2 Wins! 🚩";      // Player2 승리 표시
    } else {                                            // 값이 같으면
        titleEl.textContent = "Draw!";                  // 무승부 표시
    }
}

// 모든 주사위 영역(.dice)에 클릭 이벤트 연결
document.querySelectorAll(".dice")          // .dice 요소들(NodeList) 가져오기
    .forEach((diceEl) => {                  // 각 dice 요소에 대해 반복
        diceEl.addEventListener(            // 이벤트 리스너 등록
            "click",                        // 이벤트 타입: click
            rollDice                        // 콜백: rollDice 함수(참조 전달)
        );
    });



// function rollDice() {
    // 1 ~ 6 랜덤 숫자
    // let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    // let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // 주사위 이미지 바꾸기
    // document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    // document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

    // 승자 표시
//     if (randomNumber1 > randomNumber2) {
//         document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
//     } else if (randomNumber2 > randomNumber1) {
//         document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
//     } else {
//         document.querySelector("h1").textContent = "Draw!";
//     }
// }

// 시작할 때는 rollDice() 실행 안 함 → dice6.png 고정
// 클릭하면 주사위 굴러감
// document.querySelectorAll(".dice").forEach(dice => {
//     dice.addEventListener("click", rollDice);
// });
