let ipt = document.querySelector('input');
let face = document.querySelector('.face');

// 改变CSS动画延迟时间
function range(value) {
  value = -value / 100 + 's';
  face.style.setProperty('--delay', value);
  ipt.style.setProperty('--progress', ipt.value);
}

ipt.addEventListener('input', (e) => {
  range(e.target.value)
})