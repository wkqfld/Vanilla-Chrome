const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const loginButton = document.querySelector('#login-form button');

function loginSubmit(event) {
  // event라는 object를 argument로 주면서(즉 event의 정보를 불러와서) loginSubmit 함수를 호출 --> loginSubmit 함수 안에서 event에 대한 속성인 preventDefault를 사용하기 위함
  // event 자리엔 뭐가 들어가든 상관 없음. 함수를 호출하면서 event 정보를 받아올 공간만 만들어주면 됨 (e든 potato든 tomato든...)
  event.preventDefault(); // event의 기본 동작을 막음 (submit의 경우 새로고침)
  console.log(event);
  console.log(loginInput.value); // 이제 사라지지 않음
}
/* submit하면 아래와 같이 콘솔에 출력됨
 SubmitEvent {isTrusted: true, submitter: input, type: 'submit', target: form#login-form, currentTarget: form#login-form, …}
*/

loginForm.addEventListener('submit', loginSubmit);
// submit이라는 event의 정보를 넘겨주면서 함수를 호출. JS가 우리 대신 loginSubmit(submit)라는 함수를 실행시키는 것과 같으며, 그 안에서 submit.preventDefault 등을 실행
// => loginSubmit({information about the event that just happened}) -> 이 info를 첫번째 argument로 전달

// 아래는 링크 이동하는 기본 동작 막기
const link = document.querySelector('a');

function linkClick(event) {
  event.preventDefault();
  console.dir(event);
}

link.addEventListener('click', linkClick);
