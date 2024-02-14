const goCrazyButton   = document.querySelector('#goCrazy')
const planet          = document.querySelector('.circle-wrapper')
const closeCardButton = document.querySelector('.closeCardButton')
const card = document.querySelector('.cardSection')
const avatars = document.querySelectorAll('.avatarButton')
const dialog = document.querySelector('.dialog')

const goCrazy = () => {
  planet.classList.toggle('crazy')
}

goCrazyButton.addEventListener('click', goCrazy)

const handleAvatarClick = () => {
  [...avatars].forEach((avatar) => {
    avatar.addEventListener('click', () => {
      dialog.showModal()
    })
  })
}

handleAvatarClick()

closeCardButton.addEventListener('click', () => {
  card.classList.toggle('show')
})