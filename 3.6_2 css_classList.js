const h1 = document.querySelector('div > h1');

function handleTitleClick() {
  const clickedClass = 'active';
  // className은 기존에 가지고 있던 다른 class를 무시해버림, 즉 sexyfont class는 사라져버림 --> classList 사용 (element의 class 내용을 조작)
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass); // >> <h1 class="sexyfont">Color change</h1>
  } else {
    h1.classList.add(clickedClass); // >> <h1 class="sexyfont active">Color change</h1>
  }

  console.log(h1.className);
}

h1.addEventListener('click', handleTitleClick);
