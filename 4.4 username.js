const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const loginButton = document.querySelector('#login-form button');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden'; // string을 저장하는 string만 포함된 변수는 일반적으로 대문자로 표기

function loginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  // 사용자가 입력한 값을 localStorage에 저장
  localStorage.setItem('username', username);
  // submit되면 입력 form을 숨김처리하고, 입력받은 username을 h1태그에 추가하기
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  console.log(username);
  console.log(greeting.innerText);
}

loginForm.addEventListener('submit', loginSubmit);
