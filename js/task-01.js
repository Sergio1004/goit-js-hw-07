// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега h2)
// и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const categoriesTotal = document.querySelectorAll('.item');

const categoriesCount = () => console.log(`В списке ${categoriesTotal.length} категории.`);

const categoriesConsole = () => {
categoriesTotal.forEach((item) => { 
    const categoriesName = item.querySelector('h2')
    const categoriesTotalElements = item.querySelectorAll('.item ul li')
    console.log(`Категория: ${categoriesName.textContent}`)
    console.log(`Количество элементов: ${categoriesTotalElements.length}`)
})
}

categoriesCount();
categoriesConsole();