window.addEventListener('load', function() {
    let hamburger = document.getElementById('hamburger')
    let hamburgerMenu = document.getElementById('rwdHamburgerMenu')

    hamburger.onclick = function() {
        if (hamburger.classList.contains('is-active')) {
            hamburger.classList.remove('is-active')
            hamburgerMenu.style.left = '100%'
        } else {
            hamburger.classList.add('is-active')
            hamburgerMenu.style.left = '0%'
        }
    }
})
