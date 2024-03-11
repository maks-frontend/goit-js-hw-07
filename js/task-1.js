const categorys = document.querySelectorAll('li.item');
console.log('Number of categories:', categorys.length);

categorys.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categorysItem = category.querySelectorAll('li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categorysItem}`);
});