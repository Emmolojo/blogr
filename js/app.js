let ham = document.querySelector('.hamburger');
let menu = document.querySelector('.menu_mobile_links');

ham.onclick = function () {
    menu.classList.toggle('active');
    ham.classList.toggle('close');
    if (menu.className === ('hamburger')) {
        console.log('vvvv')
    }
}

