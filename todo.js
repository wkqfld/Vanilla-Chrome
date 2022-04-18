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
  // 1) 화면에서 요소를 삭제하기
  const li = event.target.parentElement;
  li.remove();

  // 2) localStorage에서 DB 삭제하기
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // parseInt : 문자열을 숫자로 바꿔줌. toDo.id는 숫자, li.id는 문자열이기 때문에 필요한 작업
  saveToDos(); // 새로운 toDo를 localStorage에 저장
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
  paintToDo(newTodoObj); // newTodo 값을 받아서 paintToDo 함수 실행 (paint안의 delete 함수도 text와 id가 있는 newTodoObj를 받음)
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
