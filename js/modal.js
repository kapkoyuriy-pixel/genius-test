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
