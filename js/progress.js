let t = 0
let bar
bar.style.width = 0
const barAnimation = setInterval(() => {
  bar.style.width =  t + '%'
  t++ >= totalMinwon && clearInterval(barAnimation)
}, 100)

document.querySelector('.progress').onclick = progress.restart;
