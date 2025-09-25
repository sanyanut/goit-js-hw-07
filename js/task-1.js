const categories = document.querySelector("#categories");
const allCategoriesItems = categories.querySelectorAll(".item");

console.log(`Number of categories: ${allCategoriesItems.length} `);

allCategoriesItems.forEach((item) => {
  const categoryText = item.querySelector("h2").innerText;
  const innerItems = item.querySelectorAll("li");
  console.log(`Category: ${categoryText} `);
  console.log(`Elements: ${innerItems.length}`);
});
