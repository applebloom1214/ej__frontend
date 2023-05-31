
const hModal = document.querySelector('.hModal');
const menuIcon = document.getElementById('menuicon');

const sidebar_test = document.querySelector(".sidebar_test");
const side_closeBtn = document.querySelector('.side_closeBtn');


side_closeBtn.addEventListener('click', () => {
        sidebar_test.style.left = "-300px";
});

menuIcon.addEventListener('click', (event) => {
        hModal.classList.toggle('show');
});
