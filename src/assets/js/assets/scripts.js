let burgerBtn = document.querySelector('.navigation__burger'),
  sideBar = document.querySelector('.sidebar')

burgerBtn.addEventListener('click', function (evt) {
  evt.preventDefault()
  sideBar.classList.toggle('active-sidebar')
})
