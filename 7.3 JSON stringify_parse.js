const toDoForm = document.getElementById('todo-form');
const toDoList = document.getElementById('todo-list');
const toDoInput = toDoForm.querySelector('input');
const TODOS_KEY = 'todos';
// array : paintToDo로 새로운 리스트가 생길 때마다 저장하는 배열
const toDos = [];

// toDos의 내용을 localStorage에 넣음
function saveToDos() {
  localStorage.setItem('todos', toDos); // >> a, b, c : localStorage에는 array의 값만 저장됨 --> stringify 이용
  localStorage.setItem('todos', JSON.stringify(toDos)); // >> ["a", "b", "c"] : 이 자체가 string화되어 저장됨 (이제 더 이상 배열이 아님) --> Javascript Object로 바꿔줘야 함(Json.parse)
}

// stringify : JS object, array, 어떤 코드던 간에 string으로 바꿔줌
const player = { name: 'nico' }; // 콘솔창에 player 입력 >> {name: 'nico'}
JSON.stringify(player); // 콘솔창에는 string화 되어 출력됨 >> '{"name":"nico"}'

// parse : 문자열을 JS object로 바꿈
JSON.parse('[1, 2, 3, 4]'); // >> [1, 2, 3, 4] : 배열로 바뀜

// 아래는 parse 예시
localStorage.getItem('todos');
('["a","b","c"]');
JSON.parse(localStorage.getItem('todos'))(3)[('a', 'b', 'c')];

// Todo input 입력하면 발생할 일들에 대한 함수 -> 새로고침 방지, Input값 newTodo 변수에 저장, input 입력하는 란 비우기
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

// 2. LocalStoarge에 저장된 toDos가 있으면 화면에 바로 로딩해주기

// 'item'을 받는 함수로, 아래 foreach와 같이 쓰여서 배열의 각 원소들을 받게 된다
function sayHello(item) {
  console.log(item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

// savedToDos가 존재하면, 즉 localStorage에 저장된 TODOS_KEY의 아이템이 있다면 string 처리된 해당 값을 다시 배열로 살려준다
// if(savedToDos !== null)과 같음
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  console.log(parsedToDos); // array에 있는 각각의 item에 대해 function을 실행 : forEach 이용
  parsedToDos.forEach(sayHello);
  // 각각의 Item이 sayHello 함수를 실행, 어떤 배열 item이 실행되는 것인지 확인하기 위해 sayHello는 item을 받는다
  // 즉 sayHello('Parse 첫번째 요소'), sayHello('Parse 두번째 요소'), ... 를 JS가 실행해주는 것
}

/* Arrow function (Shortcut) : 함수를 정의하고 사용하는 대신 아래와 같이 쓸 수 있음 (sayHello를 정의할 필요 없음)
parsedToDos.forEach((item)=>console.log(item));
*/
