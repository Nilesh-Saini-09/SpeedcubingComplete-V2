const flipCard = document.querySelector('.allcards');
const navbar = document.querySelector('#navbar');
const footer = document.querySelector('.footer');
flipCard.addEventListener('mouseover', () => {
  bgChange('black');
  navbar.classList.add('hoverNav');
  footer.classList.add('hoverFoot');
  // navbarBgChange('#ccff00');
})

flipCard.addEventListener('mouseout', () => {
  bgChange('#ccff00');
  navbar.classList.remove('hoverNav');
  footer.classList.remove('hoverFoot');
  // navbarBgChange('#000000');
})

function bgChange(bg) {
  document.body.style.background = bg;
}

function navbarBgChange(bg) {
  const navbar = document.querySelector('.nav-container');
  navbar.style.background = bg;
}

