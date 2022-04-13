const clock = document.querySelector('h2#clock');

function getClock() {
  const date = new Date(); // date라는 변수에 Date라는 객체 자체를 담아주기 위해 new라는 생성자를 사용 --> new의 역할은 특정 클래스의 인스턴스를 생성!

  // padStart 함수를 이용해서 한자리 숫자를 두자리로 보이게 함(ex:1->01)
  // padStart는 문자열에 대해 사용할 수 있으므로, 현재 시각을 가져오고 String으로 감싸줌
  const hours = String(date.getHours()).padStart(2, '0'); // 최소 2자리 문자열이 되어야 하며, 2자리가 안되면 앞을 '0'으로 채운다.
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock(); // 웹사이트 로드되자마자 시간 세기 시작
setInterval(getClock, 1000);
