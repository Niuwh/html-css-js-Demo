const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay span');

runAnimation();

// 数字动画
function runAnimation() {
  nums.forEach((num, index) => {
    // animationend事件在动画完成时触发
    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn') {
        num.setAttribute('class', 'out');
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        // nextElementSibling 返回当前元素在其父元素的子元素节点中的后一个元素节点，如果该元素已经是最后一个元素节点，则返回 null, 该属性是只读的。
        num.nextElementSibling.setAttribute('class', 'in');
      } else {
        counter.classList.add('hide');
        finalMessage.classList.add('show');
      }
    })
  })
}

// 显示隐藏DOM
function resetDOM() {
  counter.classList.remove('hide');
  finalMessage.classList.remove('show');
  nums.forEach((num) => {
    num.classList.remove('out');
  })
  nums[0].setAttribute('class', 'in');
}

replay.addEventListener('click', () => {
  runAnimation();
  resetDOM();
})