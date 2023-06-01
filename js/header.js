
const hModal = document.querySelector('.hModal');

const sidebar = document.querySelector(".sidebar");
const side_closeBtn = document.querySelector('.side_closeBtn');
const side_openBtn = document.querySelector('.side_openBtn');


side_closeBtn.addEventListener('click', () => {
        sidebar.style.left = "-300px";
        hModal.classList.toggle('show');
});

side_openBtn.addEventListener('click', () => {
        sidebar.style.left = "0px";
        hModal.classList.toggle('show');
});