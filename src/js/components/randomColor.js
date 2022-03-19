var boxs = document.querySelectorAll('.why__content>div')

// box.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;

for(let i of boxs){
  i.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`
}

function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min)
}

