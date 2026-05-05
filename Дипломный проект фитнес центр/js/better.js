const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
    circle.addEventListener('mouseenter', () => {
        console.log(`Наведён на кружок №${circle.dataset.num}`);
    });

    circle.addEventListener('click', () => {
        alert(`Клик на кружок №${circle.dataset.num}`);
    });
});





document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.container-pulse [data-tab]');
    const contentContainers = document.querySelectorAll('.container-best .tab-container');

    function switchContent(tab) {
        const tabId = tab.dataset.tab;

        tabs.forEach(t => t.classList.remove('active'));
        contentContainers.forEach(c => c.classList.remove('active'));

        // Добавляем активный класс текущему табу
        tab.classList.add('active');

        // Находим соответствующий контент и делаем его активным
        const targetContent = document.querySelector(`.tab-container#${tabId}-content`);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    }

    // Обработчик для li элементов
    document.querySelector('.container-pulse ul li').addEventListener('click', function (e) {
        e.preventDefault();
        switchContent(this);
    });

    // Обработчики для p элементов
    document.querySelectorAll('.plan-relative .plan-text').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            switchContent(this);
        });
    });

    // Инициализация - показываем первый контент при загрузке
    const initialTab = document.querySelector('.container-pulse .pulse-relative.active');
    if (initialTab) {
        switchContent(initialTab);
    }
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


// -----------tab-------------

document.addEventListener('DOMContentLoaded', function () {
    const tabLinks = document.querySelectorAll('.tabs-nav a');
    const tabContents = document.querySelectorAll('.tab-pane');

    tabLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Убираем активный класс у всех вкладок и контента
            tabLinks.forEach(item => item.classList.remove('active'));
            tabContents.forEach(item => item.classList.remove('active'));

            // Активируем текущую вкладку и контент
            this.classList.add('active');
            const tabId = this.getAttribute('href');
            document.querySelector(tabId).classList.add('active');
        });
    });

    // По умолчанию активируем первую вкладку
    if (!document.querySelector('.tabs-nav a.active')) {
        tabLinks.click();
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