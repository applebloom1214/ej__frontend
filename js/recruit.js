const modal = document.querySelector('.modal');
const body = document.querySelector('body');

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.toggle('show');
            document.querySelector('#modal_body').scrollTo(0,0);

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
        document.querySelector('#modal_body').scrollTo(0,0);
        if (modal.classList.contains('show')) {
            body.style.overflow = 'hidden';
        }
    }