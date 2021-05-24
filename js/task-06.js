// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const validation = document.querySelector("#validation-input");

const validationInput = (event) => {
    validation.classList.add('invalid');
    Number(validation.dataset.length) === event.target.value.length
        ? validation.classList.replace('invalid', 'valid')
        : validation.classList.replace('valid', 'invalid')
};

validation.addEventListener("blur", validationInput);