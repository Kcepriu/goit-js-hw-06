const arrayCategories = document.querySelectorAll(".item");

console.log(`Number of categories: ${arrayCategories.length}`);

arrayCategories.forEach((category) => {
  const titleCategory = category.querySelector("h2");
  const arrayElements = category.querySelectorAll("li");

  console.log(`Category: ${titleCategory.textContent}`);
  console.log(`Elements: ${arrayElements.length}`);
});
