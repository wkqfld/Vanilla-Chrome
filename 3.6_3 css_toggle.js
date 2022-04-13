const h1 = document.querySelector('div > h1');

// toggle 함수 이용 : active라는 className이 존재하는지 확인
function handleTitleClick() {
  h1.classList.toggle('active');
  // 3.6_2의 classList.remove&add와 같은 역할
}

h1.addEventListener('click', handleTitleClick);
