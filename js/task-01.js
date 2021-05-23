const categoriesTotal = document.querySelectorAll('#categories .item')
    console.log(`В списке ${categoriesTotal.length} категории.`)

categoriesTotal.forEach((item) => { 
    const categoriesName = item.querySelector('#categories h2')
    const categoriesTotalElements = item.querySelectorAll('#categories .item ul li')
    console.log(`Категория: ${categoriesName.textContent}`)
    console.log(`Количество элементов: ${categoriesTotalElements.length}`)
})