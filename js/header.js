
const hModal = document.querySelector('.hModal');
console.log(hModal);
const menuIcon = document.getElementById('menuicon');


menuIcon.addEventListener('click', (event) => {
        hModal.classList.toggle('show');
});