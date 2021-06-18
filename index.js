// 직사각형 넓이를 계산하는 함수 작성하기
function calculateRectangleArea(width,height) {
  return width * height;
}

// 테스트 코드
let area1 = calculateRectangleArea(3, 4); // 가로 3, 세로 4인 직사각형의 넓이 계산
let area2 = calculateRectangleArea(5, 8); // 가로 5, 세로 8인 직사각형의 넓이 계산
let area3 = calculateRectangleArea(7, 2); // 가로 7, 세로 2인 직사각형의 넓이 계산

console.log(`Area1: ${area1}, Area2: ${area2}, Area3: ${area3}`);


// 옵셔널 파라미터 (Optional Parameters)
function orderSetMenu(sandwitch, soda ='스프라이트') {
  console.log(`주문하신 ${sandwitch}, ${soda} 세트메뉴 나왔습니다!`)
}

// 테스트 코드
orderSetMenu('코드웨잇 클럽');
orderSetMenu('터키베이컨 아보카도', '코카콜라');
orderSetMenu('코드웨잇 멜트');
orderSetMenu('이탈리안 비엠티', '닥터페퍼');
orderSetMenu('에그마요', '환타 오렌지');

/* 주문하신 코드웨잇 클럽, 스프라이트 세트메뉴 나왔습니다!
주문하신 터키베이컨 아보카도, 코카콜라 세트메뉴 나왔습니다!
주문하신 코드웨잇 멜트, 스프라이트 세트메뉴 나왔습니다!
주문하신 이탈리안 비엠티, 닥터페퍼 세트메뉴 나왔습니다!
주문하신 에그마요, 환타 오렌지 세트메뉴 나왔습니다! */


// 종류에 따른 출력 소리 변수
let adultTag = '삑!';
let teenagerTag = '삑삑!';
let errorTag = '삑삑삑!';
let transferTag = '환승입니다.';

// tagCase파라미터를 가지는 tagNotification 함수
function tagNotification(tagCase) {
  console.log(tagCase);
}

// 테스트 코드
tagNotification(adultTag);  // 삑!
tagNotification(teenagerTag);  // 삑삑!
tagNotification(transferTag);  // 환승입니다.
tagNotification(errorTag);  // 삑삑삑!


// 파라미터 height에 따라 if문을 사용하여 탑승을 제한하는 함수
function checkHeight(height) {
  const LIMIT = 140;
  let passMessage = '탑승이 가능합니다.';
  let failMessage = '탑승이 불가능합니다.';

  if (height >= LIMIT) {
    console.log(passMessage);
  } else {
    console.log(failMessage);
  }
}


// 학점 계산기
function printGrade(midtermScore, finalScore) {
  let totalScore = midtermScore + finalScore;

  if (totalScore >= 90) {
    console.log('A');
  } else if (totalScore >= 80) {
    console.log('B');
  } else if (totalScore >= 70) {
    console.log('C');
  } else if (totalScore >= 60) {
    console.log('D');
  } else {
    console.log('F');
  }
}

// 테스트 코드
printGrade(25, 35);  // D
printGrade(50, 45);  // A
printGrade(29, 24);  // F
printGrade(37, 42);  // C


// 나의 나이와, 나의 성별을 저장하는 변수
let myAge = 26;
let myGender = 'male';

// 호칭을 담은 변수
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall
function whatShouldICallYou(yourAge, yourGender) {
  if (myAge == yourAge) {
    return (callFriend);
  }
  else if(myAge >= yourAge && myGender == yourGender) {
    return (callYoungerBrother);
  }
  else if(myAge >= yourAge && myGender != yourGender) {
    return (callYoungerSister);
  }
  else if(myAge <= yourAge && myGender == yourGender) {
    return (callOlderBrother);
  }
  else {
    return (callOlderSister);
  }
}

// 테스트 코드
let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1);  // 여동생
console.log(result2);  // 남동생
console.log(result3);  // 친구
console.log(result4);  // 형
console.log(result5);  // 누나


// 각 등급별 가격
let VIPPrice = 15;
let RPrice = 13;
let SPrice = 10;
let APrice = 8;

// 각 등급에 맞는 가격을 출력하는 함수 checkPrice
function checkPrice(grade) {
	switch(grade) {
    case 'R':
      console.log(`${grade}석은 ${RPrice}만원 입니다.`);
      break;
    case 'VIP':
      console.log(`${grade}석은 ${VIPPrice}만원 입니다.`);
      break;
    case 'S':
      console.log(`${grade}석은 ${SPrice}만원 입니다.`);
      break;
    case 'A':
      console.log(`${grade}석은 ${APrice}만원 입니다.`);
      break;
    default:
      console.log('VIP, R, S, A 중에서 하나를 선택해주세요.')
  }
}

// 테스트 코드
checkPrice('R');  // R석은 13만원 입니다.
checkPrice('VIP');  // VIP석은 15만원 입니다.
checkPrice('S');  // S석은 10만원 입니다.
checkPrice('A');  // A석은 8만원 입니다.
checkPrice('B');  // VIP, R, S, A 중에서 하나를 선택해 주세요.