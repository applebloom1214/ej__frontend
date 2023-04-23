const modal = document.querySelector('.modal');

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.toggle('show');

            if (!modal.classList.contains('show')) {
                body.style.overflow = 'auto';
            }
        }
    });

    function modalClose(){
        modal.classList.toggle('show');
        if (!modal.classList.contains('show')) {
            body.style.overflow = 'auto';
        }
    }

    function detailBtn(btn){
        modal.classList.toggle('show');

        if (modal.classList.contains('show')) {
            body.style.overflow = 'hidden';
        }
    }