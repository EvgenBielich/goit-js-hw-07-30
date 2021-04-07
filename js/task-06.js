// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const input = document.querySelector('#validation-input');

input.addEventListener('input', () => {
  input.value.length !== +input.getAttribute('data-length')
    ? input.classList.add('invalid')
    : input.classList.remove('invalid');
});

input.addEventListener('input', () => {
  input.value.length === +input.getAttribute('data-length')
    ? input.classList.add('valid')
    : input.classList.remove('valid');
});


input.addEventListener('input', () => {
  if (input.value.length === 0) {
    input.classList.remove('valid');
    input.classList.remove('invalid');
  }
});