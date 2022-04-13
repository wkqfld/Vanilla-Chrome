const toDoForm = document.getElementById('todo-form');
const toDoList = document.getElementById('todo-list');
const toDoInput = toDoForm.querySelector('input');

const TODOS_KEY = 'todos'; // localStorage key 이름 저장

// array : paintToDo로 새로운 리스트가 생길 때마다 저장하는 배열로, event 발생할 때마다 array가 초기화되므로 let으로 만들어서 이전 값을 복원할 수 있도록 한다
let toDos = [];

// toDos의 내용을 localStorage에 넣음
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// toDoList 삭제하는 함수
function deleteToDo(event) {
  const li = event.target.parentElement;
  console.log(li.id);
  li.remove();
}

// ul 안에 li/span/button 만들어주는 함수 (createElement)
function paintToDo(newTodo) {
  // li, span 요소 만들기 및 span 태그에 내용 넣기
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text;

  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);

  li.appendChild(span);
  li.appendChild(button);

  // todo-list ul요소 안에 li 넣어주기
  toDoList.appendChild(li);
}

// 1. Todo input 입력하면 발생할 일들에 대한 함수 -> 새로고침 방지, Input값 newTodo 변수에 저장, input 입력하는 란 비우기
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), // id로 각각의 li item 구별해서, 사용자가 선택한 list를 지울 수 있게 도와준다
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj); // newTodo 값을 받아서 paintToDo 함수 실행
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

// 2. LocalStoarge에 저장된 toDos가 있으면 화면에 바로 로딩해주기

const savedToDos = localStorage.getItem(TODOS_KEY);

// savedToDos가 존재하면, 즉 localStorage에 저장된 TODOS_KEY의 아이템이 있다면 string 처리된 해당 값을 다시 배열로 살려준다
// 저장된 값을 newToDo 값으로 받아 paintToDo 함수를 실행
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); // forEach((item) => paintToDo)), 배열 안의 요소들 각각을 paintToDo가 받는 인자인 newToDo로 전달해줘서 painToDo 함수 실행
}

// 기존 배열에서 특정 요소를 제외하고 새로운 배열 만들기
// 기존 배열의 object를 유지하기 위해서는 true를 리턴해야함, false는 제외됨
function filterAll() {
  return true;
}

[1, 2, 3, 4].filter(filterAll); // foreach 함수처럼 filterFunc 함수를 각 요소에 대해 한번씩 돌아가면서 불러준다

console.log([1, 2, 3, 4].filter(filterAll)); // >> [1, 2, 3, 4]

function filterPart(item) {
  return item !== 3;
}
// item이 3이 아니면 True를 return

console.log([1, 2, 3, 4].filter(filterPart)); // >> [1, 2, 4]

const arr = ['pizza', 'banana', 'tomato'];
function filterBanana(food) {
  return food !== 'banana';
}
console.log(arr.filter(filterBanana)); // >> ['pizza', 'tomato']

const todoArr = [
  { text: 'hello', id: 1649890178074 },
  { text: 'bye', id: 1649890613642 },
];

function filterTodo(todo) {
  return todo.id !== 1649890178074;
}
console.log(todoArr.filter(filterTodo));
/* >>
0: {text: 'bye', id: 1649890613642}
length: 1
[[Prototype]]: Array(0)
*/

const anyArr = [{ text: 'lalala' }, { text: 'hahaha' }];
function filterAny(any) {
  return any.text !== 'lalala';
}
console.log(anyArr.filter(filterAny));
/*
0: {text: 'hahaha'}
length: 1
[[Prototype]]: Array(0)
*/
