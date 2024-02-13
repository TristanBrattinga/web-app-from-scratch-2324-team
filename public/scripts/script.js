const goCrazyButton = document.querySelector('#goCrazy')
const planet        = document.querySelector('.circle-wrapper')
const button = document.querySelector('#button')
const closeButton = document.querySelector('#closeButton')
const modal  = document.querySelector('#dialogTest')

const handleButtonClick = () => {
  modal.showModal()
  if (button.event) {
    modal.showModal()
  } else if (closeButton.event) {
    modal.close()
  }
}

button.addEventListener('click', handleButtonClick)
closeButton.addEventListener('click', handleButtonClick)

const goCrazy = () => {
  planet.classList.toggle('crazy')
}

goCrazyButton.addEventListener('click', goCrazy)


