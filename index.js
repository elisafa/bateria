const btn = document.querySelectorAll(".drum")

// Nesse caso em particular n~ao consigo usar o this por ser uma arrow function
// btn.forEach(li => {
//   li.addEventListener('click', e => {
//     const botao = e.target.textContent
//    console.log(botao)
// const audio = new Audio('./sounds/tom-1.mp3')
// audio.play()
//   })
// })

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function () {
    const buttonInnerHTML = this.innerHTML
    makeSound(buttonInnerHTML)
    buttonAnimation(buttonInnerHTML)
  })
}

document.addEventListener('keypress', function(e){
  makeSound(e.key)
  buttonAnimation(e.key)
})

function makeSound(tecla){
  switch (tecla) {
    case "w":
      const audio1 = new Audio('./sounds/tom-1.mp3')
      audio1.play()
      break;
    case "a":
      let audio2 = new Audio('./sounds/tom-2.mp3')
      audio2.play()
      break;
    case "s":
      let audio3 = new Audio('./sounds/tom-3.mp3')
      audio3.play()
      break;
    case "d":
      let audio4 = new Audio('./sounds/tom-4.mp3')
      audio4.play()
      break;
    case "j":
      let audio5 = new Audio('./sounds/snare.mp3')
      audio5.play()
      break;
    case "k":
      let audio6 = new Audio('./sounds/crash.mp3')
      audio6.play()
      break;
    case "l":
      let audio7 = new Audio('./sounds/kick-bass.mp3')
      audio7.play()
      break;
    default: console.log("buttonInnerHTML")
}
}

function buttonAnimation(currentKey){
  const activeButton = document.querySelector(`.${currentKey}`)
  activeButton.classList.add('pressed')
  setTimeout(function(){
  activeButton.classList.remove('pressed')
  },100)
}

// for (let i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("click", (event) => {
//     const clicado = event.target
//     alert(clicado.innerHTML)
//   })
// }



