const hellos = document.getElementsByClassName('hello');

console.log(hellos);

/* 콘솔창에 아래와 같이 h1 element들을 array로 가져온 것을 확인할 수 있다
즉 hellos는 h1이라는 객체를 담은 array이며, hellos.~~ 로 뭔가를 가져올 수 없다. hellos 자체는 객체가 아니기 때문이다
HTMLCollection(5) [h1.hello, h1.hello, h1.hello, h1.hello, h1.hello]
0: h1.hello
1: h1.hello
2: h1.hello
3: h1.hello
4: h1.hello
length: 5
[[Prototype]]: HTMLCollection
*/

const title = document.querySelector('.hello');
console.log(title);
/* querySelector는 hello라는 class의 요소가 여러개 있어도 첫 번째 하나만 가져온다. 전부다 가져오기 위해서는 querySelectorAll 사용(array 형태로)
<h1 class="hello">Grab me!</h1>
*/

const title2 = document.querySelector('.hello h1');
console.log(title2);
// <h1>Grab me_2!</h1>
// querySelector는 CSS selector로 요소를 찾는다. 즉 getElement series와는 다르게 괄호 안이 클래스인지, ID인지 따로 명시해줘야하며, CSS selector 문법 사용 가능하다

const title3 = document.querySelector('.hello h1:first-child');
// CSS selector 문법 사용
