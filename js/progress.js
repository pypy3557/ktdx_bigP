let t = 0
bar.style.width = 0
const barAnimation = setInterval(() => {
  bar.style.width =  t + '%'
  t++ >= totalMinwon && clearInterval(barAnimation)
}, 100)

document.querySelector('.progress').onclick = progress.restart;