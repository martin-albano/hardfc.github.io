const toggleBtn = document.querySelector('.header-toggle');
const toggleBtnIcon = document.querySelector('.header-toggle i');
const toggleMenuResponsive = document.querySelector('.header-menu-responsive');

toggleBtn.onclick = function() {
    toggleMenuResponsive.classList.toggle('open');
}