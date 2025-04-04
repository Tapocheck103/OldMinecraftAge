document.addEventListener("DOMContentLoaded", () => {
    console.log("Old Minecraft Age загружен!");

    // Эффект фликера (мигание всего сайта)
    setInterval(() => {
        document.body.style.opacity = 0.98 + Math.random() * 0.02;
    }, 100);

    // Открытие изображения в модальном окне
    const images = document.querySelectorAll('.image-link img');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-btn');

    images.forEach(image => {
        image.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = "flex";
            modalImage.src = image.src;
        });
    });

    // Функция для закрытия модального окна и сброса изображения
    function closeModal() {
        modal.style.display = "none";
        modalImage.removeAttribute("src"); // Полностью удаляем атрибут src
    }

    // Закрытие модального окна по кнопке
    closeBtn.addEventListener('click', closeModal);

    // Закрытие при клике вне изображения
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Закрытие модального окна при смене вкладки
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            closeModal();
        }
    });

    // Закрытие перед обновлением страницы
    window.addEventListener("beforeunload", closeModal);
});
