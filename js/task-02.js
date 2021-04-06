// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
   'Картошка',
   'Грибы',
   'Чеснок',
   'Помидоры',
   'Зелень',
   'Приправы',
];

const navEl = document.querySelector('#ingredients');

const createNavItem = ingredients.map(ingredient => {
   const navItemEl = document.createElement('li');
   navItemEl.textContent = ingredient;

   return navItemEl;
});

navEl.append(...createNavItem);