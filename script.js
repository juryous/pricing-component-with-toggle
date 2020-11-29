const toggle = document.getElementById("toggle-1");
const toggleLabel = document.querySelector(".toggle-label");
const pricesMon = document.querySelectorAll(".price--mon");
const pricesAnn = document.querySelectorAll(".price--ann");

toggleLabel.addEventListener("click", () => {
  if (toggle.checked) {
    pricesMon.forEach((price) => (price.style.display = "none"));
    pricesAnn.forEach((price) => (price.style.display = "block"));
  } else {
    pricesMon.forEach((price) => (price.style.display = "block"));
    pricesAnn.forEach((price) => (price.style.display = "none"));
  }
});
