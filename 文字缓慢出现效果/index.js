const h1 = document.getElementById('text');
const ipt = document.getElementById('speed');
const text = 'We Love Programming!'
let idx = 1;
let speed = 300 / ipt.value;

writrText();
// 先制作一个根据时间快慢返回字符串快慢的函数
function writrText() {
  h1.innerText = text.slice(0, idx);
  idx++;

  if (idx > text.length) {
    idx = 1
  }
  setTimeout(writrText, speed);
}


// 监听输入框点击输入事件
ipt.addEventListener('input', function (e) {
  speed = 300 / e.target.value;
})