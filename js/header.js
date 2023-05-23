const modal = document.querySelector('.modal');
const menuIcon = document.getElementById('menuicon');

menuIcon.addEventListener('click', (event) => {
        modal.classList.toggle('show');
});