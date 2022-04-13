const toDoForm = document.getElementById('todo-form');
const toDoList = document.getElementById('todo-list');
const toDoInput = toDoForm.querySelector('input');

// toDoList 삭제하는 함수
function deleteToDo(event) {
  console.dir(event.target.parentElement.innerText);
  // target : 클릭된 HTML 요소 >> button
  // parentElement : 클릭된 요소의 parent 요소>> li
  // parent 요소 li의 innerText >> 입력값x --> <li><span>입력값<span><button>x</button></li> 이므로, 특정 버튼을 클릭했을 때 어느 내용의 버튼을 클릭했는지 알기 위해선 결국 span 태그 사이에 들어가는 입력값을 알아야 함. 따라서 부모요소의 innerText 속성을 통해 그 내용을 추적해갈 수 있다. 궁극적으로는 li 자체를 삭제해야함
  const li = event.target.parentElement;
  li.remove();
  // span, button 포함해서 li 자체를 지워버림
}

// ul 안에 li/span/button 만들어주는 함수 (createElement)
function paintToDo(newTodo) {
  // li, span 요소 만들기 및 span 태그에 내용 넣기
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = newTodo;

  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);

  li.appendChild(span);
  li.appendChild(button);

  // todo-list ul요소 안에 li 넣어주기
  toDoList.appendChild(li);
}

// Todo input 입력하면 발생할 일들에 대한 함수 -> 새로고침 방지, Input값 newTodo 변수에 저장, input 입력하는 란 비우기
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  paintToDo(newTodo); // newTodo 값을 받아서 newToDo 함수 실행
}

toDoForm.addEventListener('submit', handleToDoSubmit);
