// event 검색하기 => MDN (Mozilla)
// HTMLHeadingElement : JS 관점에서 listen할 수 있는 HTML element
// console.dir를 통해 event 찾기 => 앞에 on이 붙어있는 속성으로, addEventListener를 통해 사용할 때는 on을 빼고 쓴다

const h1 = document.querySelector('div.hello h1');

function handleh1Click() {
  h1.style.color = 'blue';
}

function handleMouseEnter() {
  h1.innerText = '잡음?!';
}

function handleMouseLeave() {
  h1.innerText = '도망가버림....';
}

function handleWindowResize() {
  document.body.style.backgroundcolor = 'red';
}

function handleWindowCopy() {
  alert('copier!');
}

function handleWindowOffline() {
  alert('no WIFI');
}
function handleWindowOnline() {
  alert('WIFI Good');
}

h1.addEventListener('click', handleh1Click);
h1.addEventListener('mouseenter', handleMouseEnter);
h1.addEventListener('mouseleave', handleMouseLeave);

window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offline', handleWindowOffline);
window.addEventListener('online', handleWindowOnline);
