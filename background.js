const images = ['1.jpg', '2.jpg', '3.jpg'];

// images array에서 랜덤 이미지 고르기
const chosenImage = images[Math.floor(Math.random() * images.length)];

// JS에서 새로 만들어서 HTML에 추가하기 -> 랜덤 배경이기 때문에 HTML에서 img src로 바로 추가할 수 없다
const bgImage = document.createElement('img');
bgImage.src = `images/${chosenImage}`;

// JS에서 만든 img 요소를 body에 추가 -> 이제 F12의 element창에서 확인 가능, 새로고침 할 때마다 랜덤 이미지가 들어간다
document.body.appendChild(bgImage);
