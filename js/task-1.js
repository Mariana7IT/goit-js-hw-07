"use strict";
const categoriesList = document.querySelectorAll('#categories .item');
console.log(`Total categories: ${categoriesList.length}`);

categoriesList.forEach(category => {

    const categoryName = category.querySelector('h2').textContent;
    const categoryItemsCount = category.querySelectorAll('li').length;

console.log(`Category: ${categoryName}, Items: ${categoryItemsCount}`);
});


// інші приклади
// const categoriesList = document.querySelectorAll("#categories .item");
// console.log();

// const categoriesList = document.querySelector("#categories");
// const categoriesItems = categoriesList.querySelectorAll(".item");

// console.log(`Number of categories: ${categoriesItems.length}`);

// categoriesItems.forEach((item) => {
//   const categoryTitle = item.querySelector("h2").textContent;
//   const categoryElementsCount = item.querySelectorAll("li").length;

//   console.log(`Category: ${categoryTitle}`);
//   console.log(`Elements: ${categoryElementsCount}`);
// });


// // Отримуємо список категорій
// const categoriesList = document.querySelector('#categories');

// // Отримуємо усі елементи категорій
// const categoriesItems = categoriesList.querySelectorAll('li.item');

// // Виводимо кількість категорій у консоль
// console.log('Кількість категорій:', categoriesItems.length);

// // Для кожної категорії виконуємо дії
// categoriesItems.forEach(categoryItem => {
//   // Отримуємо заголовок категорії
//   const categoryTitle = categoryItem.querySelector('h2').textContent;

//   // Отримуємо список елементів у категорії
//   const categoryElements = categoryItem.querySelectorAll('ul > li');

//   // Виводимо назву категорії та кількість елементів у консоль
//   console.log(`Категорія: ${categoryTitle}`);
//   console.log(`Кількість елементів: ${categoryElements.length}`);
// });