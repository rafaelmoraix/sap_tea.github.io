const menuItems = document.querySelectorAll('.sidebar li');

menuItems.forEach(item => {
    if (item.querySelector('.submenu')) {
        const arrow = document.createElement('span');
        arrow.textContent = '▼';
        arrow.style.marginLeft = '5px';
        item.querySelector('a').appendChild(arrow);
    }
});