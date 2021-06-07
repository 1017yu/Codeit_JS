/* 최종 급여(total)을 계산하는 함수 작성 */
function calcWage(name, time, wage) {
  let total = time * wage;

/* backtick 이용하기 */ /* ${변수 or 연산식} */
  console.log(`${name}님의 근무 시간은 총 ${time}시간이며, 최종 급여는 ${total}원 입니다.`); 
}

calcWage('유희태', 208, 11340);
calcWage('신지호', 175, 12160);
calcWage('민동욱', 161, 13070);
calcWage('송기홍', 222, 10980);