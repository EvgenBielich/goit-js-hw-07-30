
const refs = {
  selectedListId: document.querySelector('#categories'),
  getListElem: document.querySelectorAll('#categories li[class="item"]'),
};

console.log(`В списке ${refs.selectedListId.childElementCount} категории`);

refs.getListElem.forEach(element => {
  console.log(`Категория: ${element.firstElementChild.textContent}`);
  console.log(
    `Количество элементов: ${element.lastChild.previousSibling.childElementCount}`,
  );
});