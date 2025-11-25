(function () {


    document.addEventListener('click', burgerInit)

    function burgerInit(e) {



        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav-link')




        if (!burgerIcon && !burgerNavLink) return

        if (document.documentElement.clientWidth > 900) return


        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')

        }


    }

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about-img_button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal-cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }

    }

    // Первый вариант модалки!
    
    // const openButton = document.querySelector('.about-img_button');
    // const modal = document.querySelector('.modal');
    // const closeButton = document.querySelector('.modal-cancel');
    
    // function openModal() {
    //   modal.classList.add('modal--opened');
    //   document.body.classList.add('body--opened-modal'); 
    // }
    
    
    // function closeModal() {
    //   modal.classList.remove('modal--opened');
    //   document.body.classList.remove('body--opened-modal');
    // }
    
    // if (openButton) {
    //   openButton.addEventListener('click', openModal);
    // }
    
    // if (closeButton) {
    //   closeButton.addEventListener('click', closeModal);
    // }
    
    // modal.addEventListener('click', (e) => {
    //   if (e.target === modal) {
    //     closeModal();
    //   }
    // });
    
    // document.addEventListener('keydown', (e) => {
    //   if (e.key === 'Escape' && modal.classList.contains('modal--opened')) {
    //     closeModal();
    //   }
    // });

})()
