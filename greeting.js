const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const loginButton = document.querySelector('#login-form button');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

// 1. 값을 입력받아 submit 할 때의 동작 정해주기

// loginSubmit 함수 정의 : submit event가 발생할 때 호출될 함수
function loginSubmit(event) {
  event.preventDefault();

  // username에 input을 받아서 localstoarge에 저장
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);

  // Form을 hidden처리하고 greeting 문구를 띄운다
  loginForm.classList.add(HIDDEN_CLASSNAME);
  printGreetings(username); // input으로 받은 username을 printGreetings의 argument로 받음
}

// Greeting 문구를 띄우는 함수.
function printGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// submit 이벤트가 발생하면 loginSubmit 실행
loginForm.addEventListener('submit', loginSubmit);

// 2. localStorage 저장 여부에 따라 보이는 화면 다르게 해주기

const savedUsername = localStorage.getItem(USERNAME_KEY);

// 로컬스토리지에 저장된 username이 없으면 입력form을 보여주고, 있으면 greeting 문구를 띄우기
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', loginSubmit);
} else {
  printGreetings(savedUsername); // 로컬스토리지에 저장된 savedUsername을 printGreetings의 argument로 받음
}
