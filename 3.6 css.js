const h1 = document.querySelector('div > h1');

// click할때마다 클래스 이름 생겼다 없어졌다가...
function handleTitleClick() {
  const clickedClass = 'active';
  // active라는 class name은 아래에서 오류가 나도 JS가 에러코드로 알려주지 않지만 clickedClass라는 const는 아래에서 typo가 나면 JS가 에러코드로 알려준다. 따라서 이렇게 변수나 상수에 저장하는 것이 유용함
  if (h1.className === 'clickedClass') {
    h1.className = '';
  } else {
    h1.className = 'clickedClass'; // CSS에서 만든 active class를 h1의 class name으로 전달받음. JS는 html을 변경
  }

  console.log(h1.className);
}

h1.addEventListener('click', handleTitleClick);

// 선생님은 style을 아래처럼 js로 쓰는걸 별로 좋아하지 않으신다고 합니다..
/*
function handleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === 'blue') {
    newColor = 'tomato'; // currentColor는 const 라서 바로 새로운 값을 대입할 수는 없음
  } else {
    newColor = 'blue';
  }
  h1.style.color = newColor;
}

h1.addEventListener('click', handleClick);
*/
