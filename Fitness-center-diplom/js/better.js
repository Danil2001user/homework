document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentSlide = 0;
    let autoSlideInterval;

    // Функция показа слайда
    function showSlide(n) {
        // Скрываем все слайды
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Убираем активный класс у всех точек
        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        // Корректируем индекс, если он выходит за границы
        currentSlide = (n + slides.length) % slides.length;

        // Показываем нужный слайд
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');

    }

    // Функция для перехода к следующему слайду
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Функция для перехода к предыдущему слайду
    function prevSlide() {
        showSlide(currentSlide - 1);
    }



    // Обработчики для кнопок навигации
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Обработчики для точек навигации
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });




});


// ----------------------------


document.addEventListener('DOMContentLoaded', function () {
    const trigger = document.querySelector('.lightbox-trigger');
    const lightbox = document.getElementById('video-lightbox');
    const closeButton = document.querySelector('.close-lightbox');

    // Функция для отключения скролла с сохранением позиции
    function disableScroll() {
        const scrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.overflow = 'hidden';
    }


    // Функция для включения скролла с восстановлением позиции
    function enableScroll() {
        // Получаем сохранённую позицию скролла
        const savedPosition = document.body.style.top;

        // Сбрасываем стили
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.overflow = '';

        // Восстанавливаем позицию скролла, если она была
        if (savedPosition) {
            const scrollPosition = parseInt(savedPosition.slice(1)); // Убираем минус и преобразуем в число
            window.scrollTo(0, scrollPosition);
        }
    }

    // Открытие лайтбокса + блокировка скролла
    trigger.addEventListener('click', function (e) {
        e.preventDefault();
        lightbox.classList.add('show');
        disableScroll();
    });

    // Закрытие лайтбокса + восстановление скролла
    closeButton.addEventListener('click', function (e) {
        e.preventDefault();
        lightbox.classList.remove('show');
        enableScroll();
    });

    // Закрытие при клике на фон лайтбокса
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('show');
            enableScroll();
        }
    });

    // Закрытие по клавише Esc
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && lightbox.classList.contains('show')) {
            lightbox.classList.remove('show');
            enableScroll();
        }
    });
});


// -----------tab-pulse-------------

document.addEventListener('DOMContentLoaded', function () {
    // Получаем все элементы табов и их содержимое
    const tabLinks = document.querySelectorAll('.pulse-relative, .plan-text');
    const tabContainers = document.querySelectorAll('.tab-container');

    // Функция для переключения табов
    function switchTab(tabId) {
        // Скрываем все контейнеры с содержимым
        tabContainers.forEach(container => {
            container.classList.remove('active');
        });

        // Убираем активный класс у всех ссылок/пунктов табов
        tabLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Показываем нужный контейнер с содержимым
        const targetContainer = document.getElementById(tabId + '-content');
        if (targetContainer) {
            targetContainer.classList.add('active');
        }

    }

    // Добавляем обработчики событий для всех элементов табов
    tabLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Предотвращаем стандартное поведение ссылки

            // Получаем ID таба из атрибута data-tab
            const tabId = this.getAttribute('data-tab');

            // Переключаем таб
            switchTab(tabId);
        });
    });

    // Активируем первый таб по умолчанию при загрузке страницы
    if (tabLinks.length > 0) {
        const firstTabId = tabLinks[0].getAttribute('data-tab');
        switchTab(firstTabId);
    }
});



// -------------------burger-menu--------------


document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';

    // Копируем меню в мобильное меню
    const menuList = document.querySelector('.menu__list').cloneNode(true);
    menuList.className = 'mobile-menu__list';
    menuList.querySelectorAll('a').forEach(link => {
        link.className = 'mobile-menu__link';
    });
    mobileMenu.appendChild(menuList);
    document.querySelector('.header__container').appendChild(mobileMenu);

    burgerMenu.addEventListener('click', function () {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');

        // Меняем атрибут aria-expanded
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
    });

    // Закрытие меню при клике на ссылку
    mobileMenu.querySelectorAll('.mobile-menu__link').forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            mobileMenu.classList.remove('active');
            burgerMenu.setAttribute('aria-expanded', 'false');
        });
    });

    // Закрытие меню при клике вне его области
    document.addEventListener('click', (e) => {
        if (!burgerMenu.contains(e.target) && !mobileMenu.contains(e.target)) {
            burgerMenu.classList.remove('active');
            mobileMenu.classList.remove('active');
            burgerMenu.setAttribute('aria-expanded', 'false');
        }
    });
});