Ось мінімальний набір для base.scss, який закриває 99% проблем з версткою:

1. Універсальний скид (Box-sizing)
SCSS
*,
*::before,
*::after {
  box-sizing: border-box;
}
2. Основа сторінки (Body)
SCSS
body {
  margin: 0;
  font-family: "Poppins", sans-serif; // Твій шрифт
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-primary-dark);
  background-color: var(--color-primary-light);
  -webkit-font-smoothing: antialiased; // Робить шрифт плавнішим
}
3. Списки та посилання
SCSS
ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit; // Наслідує колір тексту від батька
  display: inline-block;
}
4. Заголовки та текст
SCSS
h1, h2, h3, h4, h5, h6, p {
  margin: 0;
}
5. Зображення
SCSS
img {
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}
6. Кнопки (Скидання дефолту)
SCSS
button {
  cursor: pointer;
  border: none;
  background: transparent;
  padding: 0;
  font-family: inherit;
}
Цей файл імпортується в main.scss першим після змінних.