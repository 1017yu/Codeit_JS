
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


// 주어진 height에 맞게 '*'로 삼각형을 그려주는 함수 printTriangle
function printTriangle(height) {
  let message = '';  // '*'을 담을 변수 message 생성
  for (let i = 1; i <= height; i++) {  
    message += '*'  // for문이 반복될 때 마다, '*'의 개수 증가
    console.log(message);  // 누적된 '*'을 출력
  }
}

// 테스트 코드
console.log('높이: 1');  
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);


// while 반복문을 통해 1~100 사이의 홀수를 출력
let i = 1;

while (i <= 100) {
  console.log(i);
  i += 2;
}


// while 반복문을 통해 180의 약수와, 그 개수를 계산하여 출력
const N = 180;
let j = 1;
let count = 0;

while (j <= N) {
  if (N % j == 0) {
    console.log(j)
    count++;
  }
  j++;
}

console.log(`${N}의 약수는 총 ${count}개입니다.`)



// 빈 객체에 3가지 메소드(단어 추가, 단어 삭제, 단어 출력) 만들기
let myVoca = {
  addVoca: function (key, value) { // addVoca라는 이름의 프로퍼티에다가, 프로퍼티 값으로 myVoca객체에 새로운 프로퍼티를 추가하는 동작을 가진 함수를 선언
    myVoca[key] = value;  //  파라미터로 다른 변수에 담긴 값을 가져올 때는 대괄호 표기법을 사용
  },
  deleteVoca: function(key) {  //  myVoca객체에 있던 프로퍼티를 삭제하는 동작을 가진 함수를 선언
    delete myVoca[key];
  },
  printVoca: function(x) {  // 프로퍼티 값을 조합해서 특별한 포맷을 갖춘 문자열로 출력하는 메소드
    console.log(`"${x}"의 뜻은 "${myVoca[x]}"입니다.`)
  }
};


// addVoca 메소드 테스트 코드
myVoca.addVoca('parameter', '매개 변수');
myVoca.addVoca('element', '요소');
myVoca.addVoca('property', '속성');
console.log(myVoca);

// deleteVoca 메소드 테스트 코드
myVoca.deleteVoca('parameter');
myVoca.deleteVoca('element');
console.log(myVoca);

// printVoca 메소드 테스트 코드
myVoca.printVoca('property');  // "property"의 뜻은 "속성"입니다.


// 나의 코딩 공부 기간을 계산하는 코드
let start = new Date(2021, 5, 1);  // 공부를 시작한 날짜

function studyDayCalc(start) {  // 공부한 기간을 도출하는 함수 선언
  let timeDiff = Date.now() - start.getTime();  // 날짜의 차이를 저장할 변수 선언
  let dayDiff = timeDiff / 1000 / 60 / 60 / 24;  // ms를 day 단위로 변환
  
  console.log(`오늘은 공부한 지 ${parseInt(dayDiff) + 1}일째 되는 날 입니다.`);  // parseInt로 소수점 이하는 버림
}

studyDayCalc(start);


//  splice 메소드 활용하기 array.splice(삭제할index, 삭제할개수, 추가할요소, 추가할요소, ...);
//  3개의 배열 (array) 생성 
let fruits = ['레몬', '토마토', '딸기', '바나나'];
let ages = [20, 24, 25, 29, 30, 33];
let numbers = [];

// fruits 배열에 '토마토'를 삭제하고 그 자리에 '사과', '청포도' 를 추가
fruits.splice(1, 1, '사과', '청포도');


// fruits 배열의 첫 번째 요소를 삭제
fruits.splice(0, 1);


// ages 배열에 마지막 요소를 삭제
ages.splice(5, 1);
/* ages.splice(ages.length - 1, 1); */


// ages 배열의 2번, 3번 인덱스를 26, 28로 변경
ages.splice(2, 2, 26, 28);


// numbers 배열에 1, 2, 3, 5, 8, 9를 순서대로 추가
numbers.splice(0, 0, 1, 2, 3, 5, 8, 9);


// 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 1) {
    numbers.splice(i, 1);
    i--;  // 요소가 삭제될 때 i를 미리 한 번 감소
  } 
}

// 테스트 코드
console.log(fruits[1]);
console.log(fruits[0]);
console.log(ages[ages.length - 1]);
console.log(ages[3]);
console.log(numbers[3]);
console.log(numbers);


// 이율이 4.3%인 2년 만기 적금의 이자 계산해보기
function interestCalculator(rate, payment, term) {
  let interest = (payment * term * (term + 1) / 2 * rate / 12);  // interest(이자) 변수에 값을 저장
  //let interest = +(payment * term * (term + 1) / 2 * rate / 12).toFixed();  // toFixed 메소드를 사용하여 어림수를 만들고, +를 이용하여 숫자형으로 형변환
  console.log(Math.round(interest));  // interest를 반올림하여 출력
}

// 이율이 4.3%일 때 매월 80만원씩 24개월 납입할 경우
interestCalculator(0.043, 800000, 24);  // 860000

// 이율이 4.3%일 때 매월 60만원씩 24개월 납입할 경우
interestCalculator(0.043, 600000, 24);  // 645000


// 문자열 심화
let myString = 'Hi Codeit';

// 대소문자 변환
console.log(myString.toUpperCase());  // 대문자
console.log(myString.toLowerCase());  // 소문자

// 요소 탐색
console.log(myString.indexOf('a'));  // 앞 부터 탐색
console.log(myString.lastIndexOf('i'));  // 뒤 부터 탐색

// 요소 접근
console.log(myString[3]);  // 대괄호 표기법
console.log(myString.charAt(3));  // charAt 메소드

// 문자열 길이
console.log(myString.length);  // length 프로퍼티

// 양 끝 공백 제거
console.log(myString.trim());  // trim 메소드

// 부분 문자열 접근 slice(start, end)
console.log(myString.slice(0,2));  // Hi
console.log(myString.slice(3));  // Codeit
console.log(myString.slice());  // Hi Codeit


//  참조형 복사하기 (Reference Type Copy)
function cloneObject(object) {  // 객체형을 복사하는 함수 생성
  let temp = {};

  for (let key in object) {
    temp[key] = object[key];
  }

  return temp;
};

let course1 = {  // course1 객체 생성
  title: '자바스크립트 기초',
  language: 'JavaScript'
};

let course2 = cloneObject(course1);  // course2에 course1 복사
let course3 = cloneObject(course1);  // course3에 course1 복사

course2.title = '알고리즘의 정석';  // course2의 title 키 값 변경
course3.title = '객체 지향 프로그래밍';  // course3의 title 키 값 변경

console.log(course1);  // {title: "자바스크립트 기초". language: "Javascript"}
console.log(course2);  // {title: "알고리즘의 정석". language: "Javascript"}
console.log(course3);  // {title: "객체 지향 프로그래밍". language: "Javascript"}


// 참조형 실습해보기
// 객체와 배열은 변수에 할당할 때 해당 값이 직접 저장되는 것이 아니라, 주소 값이 저장이 되는 참조형(Reference Type)임을 생각하기
let espresso = ['espresso'];

//slice 메소드를 호출할 때 파라미터로 아무런 값도 전달하지 않을 경우에 배열 전체를 그대로 리턴하는 메소드의 특징을 활용
let americano = espresso.slice();
americano.push('water');  // push 메소드를 통해 'water'를 배열 맨 뒤에 추가

let caffeLatte = espresso.slice();
caffeLatte.push('milk');

// 테스트 코드
console.log(espresso);  // [ 'espresso' ]
console.log(americano);  // [ 'espresso', 'water' ]
console.log(caffeLatte);  // [ 'espresso', 'milk' ]


// 팩토리얼 함수 만들기
function factorial(n) {
  let result = 1;  // 0! = 1 초기화

	for (let i = 1; i <= n; i++) {   // n이 1 이상일 때 for 반복문을 통해 팩토리얼 계산하기(1)
    result = result * i;
  }

  /* for (let i = n; i >= 1; i--) {  // i를 n부터 시작해서 1이 될 때까지 for 반복문을 통해 팩토리얼 계산하기(2)
    result = result + i;
  }
  */

  return result;
}

// 테스트 코드
console.log(factorial(12));  // 479001600
console.log(factorial(6));  // 720
console.log(factorial(3));  // 6
console.log(factorial(0));  // 1


// 거스름돈 구하기
function calculateChange(payment, cost) {
  let change = payment - cost;
  let fiftyCount = Math.floor(change / 50000);
  let tenCount = Math.floor((change % 50000) / 10000);
  let fiveCount = Math.floor(((change % 50000) % 10000) / 5000);
  let oneCount = Math.floor((((change % 50000) % 10000) % 5000) / 1000);

  console.log(`50000원 지폐: ${fiftyCount}장`);
  console.log(`10000원 지폐: ${tenCount}장`);
  console.log(`5000원 지폐: ${fiveCount}장`);
  console.log(`1000원 지폐: ${oneCount}장`);
}

// 테스트 코드
calculateChange(100000, 33000);
/* 
50000원 지폐: 1장
10000원 지폐: 1장
5000원 지폐: 1장
1000원 지폐: 2장 */

calculateChange(500000, 378000);
/*
50000원 지폐: 2장
10000원 지폐: 2장
5000원 지폐: 0장
1000원 지폐: 2장 */


// 팰린드롬 (Palindrome)
// 첫번쩨 원소의 인덱스는 0, 마지막 원소의 인덱스는 word.length - 1 임을 이용
function isPalindrome(word) {
  for (let i = 0; i < Math.floor(word.length / 2); i++) {  // 반대쪽과 비교하는 동작이므로 배열 길이의 절반까지만 반복해도 가능
    let left = word[i];
    let right = word[word.length - 1 - i];

    if (left !== right) {  // 양 끝 원소가 서로 다를 경우 false를 리턴
      return false;
    }
  }
  return true;  // for 반복문을 반복할 동안, 비교원소가 모두 같을 경우 true를 리턴
}

// 테스트 코드
console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("stars"));  // false
console.log(isPalindrome("기러기"));  // true
console.log(isPalindrome("123321"));  // true
console.log(isPalindrome("hello"));  // false
console.log(isPalindrome("kayak"));  // true