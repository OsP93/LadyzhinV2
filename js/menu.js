let burger = document.getElementById('burgermenu');
let cross = document.getElementById('crossmenu');
let list = document.getElementById('mobileMenuList');

burger.addEventListener('click', function () {
    burger.classList.add('hidden-d');
    cross.classList.remove('hidden-d');
    list.classList.remove('hidden-d');
    list.classList.add('mobile-menu-list');
});

cross.addEventListener('click', function () {
    cross.classList.add('hidden-d');
    burger.classList.remove('hidden-d');
    list.classList.remove('mobile-menu-list');
    list.classList.add('hidden-d');
});

