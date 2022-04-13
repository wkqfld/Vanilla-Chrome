const loginForm = document.getElementById('login-form');
const loginInput = loginForm.querySelector('input');
const loginButton = loginForm.querySelector('button');

/* 아래처럼도 가능
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
*/

function loginBtnClick() {
  console.log('click');
  // loginInput 객체 안의 정보들 보여줌
  // value: "input에 입력한 값"
  console.dir(loginInput);
  console.log(loginInput.value);

  const username = loginInput.value;
  if (username === '') {
    alert('Please write your name!!');
  } else if (username.length > 15) {
    alert('Too long');
    // JS로 글자수 제한 but HTML input태그의 기능을 바로 이용하는 쪽이 더 선호됨 : <input required maxlength="15" ~~~> --> 이렇게 input의 validation 기능을 사용하기 위해서는, form 태그를 사용해줘야함
  }
}

loginButton.addEventListener('click', loginBtnClick);
