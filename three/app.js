async function getRandomMeal() {
    const randomMeal = fetch("https://www.themealdb.com/api/json/v1/1/random.php");
}

async function getMealById(id) {
   const mealById = fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" +id);
}

async function getMealsBySearch(term) {
    const mealsBySearch = fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" +term);
}