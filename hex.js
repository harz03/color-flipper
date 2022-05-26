const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const color = document.querySelector('.color');
const btn = document.getElementById('btn');

function getRandomString() {
  let s = '#';
  for (let i = 0; i < 6; i++) {
    s += hex[Math.floor(Math.random() * 100) % hex.length];
  }

  return s;
}

btn.addEventListener('click', () => {
  const randomHex = getRandomString();
  console.log(randomHex);
  color.textContent = randomHex;
  document.body.style.backgroundColor = randomHex;
});
