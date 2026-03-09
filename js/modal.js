const backdrop = document.querySelector(".backdrop");
const closeBtn = document.querySelector(".modal-btn-close");
const openBtn = document.querySelector(".modal-button-open");

// Открыть модал
openBtn.addEventListener("click", () => {
  backdrop.classList.remove("is-hidden");
});

// Закрыть модал по кнопке Close
closeBtn.addEventListener("click", () => {
  backdrop.classList.add("is-hidden");
});

// Дополнительно: закрыть по клику на фон
backdrop.addEventListener("click", (e) => {
  if (e.target === backdrop) {
    backdrop.classList.add("is-hidden");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const menuOpenBtn = document.querySelector(".menu-btn-open");
  const menuCloseBtn = document.querySelector(".menu-btn-close");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (menuOpenBtn && menuCloseBtn && mobileMenu) {
    menuOpenBtn.addEventListener("click", () => {
      mobileMenu.classList.add("is-open");
    });

    menuCloseBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
    });
  } else {
    console.warn("Не знайдено елементи меню у DOM");
  }
});
