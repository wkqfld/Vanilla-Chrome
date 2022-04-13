const title = document.getElementById('title');
// title이란 ID를 가진 element를 찾아서 title이란 const에 대입
// 이 다음부터 title은 const title로, 여러가지 속성을 지닌 객체처럼 사용할 수 있다
// 자바스크립트로 HTML의 title이란 ID 가진 element의 여러 속성을 찾고 바꿀 수 있다

console.dir(title);
// 콘솔에서 title이란 ID 가진 element의 속성들 확인 가능
// dir은 console의 속성 중 하나로, 객체의 속성 확인하는 함수

title.innerText = 'Got you!';
// 자바스크립트로 HTML title이란 ID가진 element의 Text 내용 바꾸기

console.log(title.id);
console.log(title.className);
// 자바스크립트로 HTML title이란 ID가진 element의 id, classname을 찾아서 콘솔에 출력하기
