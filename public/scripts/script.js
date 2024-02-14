const goCrazyButton   = document.querySelector('#goCrazy')
const planet          = document.querySelector('.circle-wrapper')
const closeCardButton = document.querySelector('.closeCardButton')
const card = document.querySelector('.cardSection')
const avatars = document.querySelectorAll('.avatarButton')
const circles = document.querySelector('.circle')
const dialog = circles.querySelector('.dialog')

const goCrazy = () => {
  planet.classList.toggle('crazy')
}

goCrazyButton.addEventListener('click', goCrazy)

const handleAvatarClick = (index) => {
  const dialog = document.querySelectorAll('.dialog')[index];
  if (dialog) {
    dialog.showModal()
  }
}

[...avatars].forEach((avatar, index) => {
  avatar.addEventListener('click', () => handleAvatarClick(index))
})

closeCardButton.addEventListener('click', () => {
  card.classList.toggle('show')
})