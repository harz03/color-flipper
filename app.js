const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
let color = document.querySelector('.color');
let btn = document.getElementById('btn');
color.textContent = colors[0];
btn.addEventListener('click', function () {
  let randomNumber = Math.floor(Math.random() * 10) % colors.length;
  console.log(randomNumber);
  color.textContent = colors[randomNumber];
  document.body.style.backgroundColor = colors[randomNumber];
});
