// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

const inputName = (event) => {
    nameOutputEl.textContent = event.currentTarget.value !== ''
        ? nameOutputEl.textContent = event.currentTarget.value
        : nameOutputEl.textContent = 'незнакомец'
}

nameInputEl.addEventListener('input', inputName);