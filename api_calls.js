var unirest = require('unirest');


//Search - Search Recipes by Ingredients
function apiTest1(){
  unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ingredients=apples%2Cflour%2Csugar")
.header("X-RapidAPI-Key", "2339bf0c2emsh995354a967f05f3p19543ejsnb553cf83c30f")
.end(function (result) {
  console.log(result.body);
});
}

//Search - Get Random Recipes
function apiTest2(){
  unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=vegetarian%2Cdessert")
  .header("X-RapidAPI-Key", "2339bf0c2emsh995354a967f05f3p19543ejsnb553cf83c30f")
  .end(function (result) {
    console.log(result.body);
    console.log(result.body.recipes[0].id);
    //console.log(result.body.recipes[1].id);

    
});
}

//Search - Search Recipes by Nutrients
function apiTest3(){
  unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByNutrients?minCarbs=0&minProtein=0&offset=0&number=10&maxCalories=250&maxCarbs=100&maxFat=20&maxProtein=100&minFat=5&minCalories=0&minAlcohol=0&maxAlcohol=50&minCaffeine=0&maxCaffeine=50&minCopper=0&maxCopper=50&minCalcium=0&maxCalcium=50&minCholine=0&maxCholine=50&minCholesterol=0&maxCholesterol=50&minFluoride=0&maxFluoride=50&minSaturatedFat=0&maxSaturatedFat=50&minVitaminA=0&maxVitaminA=50&minVitaminC=0&maxVitaminC=50&minVitaminD=0&maxVitaminD=50&minVitaminE=0&maxVitaminE=50&minVitaminK=0&maxVitaminK=50&minVitaminB1=0&maxVitaminB1=50&minVitaminB2=0&maxVitaminB2=50&minVitaminB5=0&maxVitaminB5=50&minVitaminB3=0&maxVitaminB3=50&minVitaminB6=0&maxVitaminB6=50&minVitaminB12=0&maxVitaminB12=50&minFiber=0&maxFiber=50&minFolate=0&maxFolate=50&minFolicAcid=0&maxFolicAcid=50&minIodine=0&maxIodine=50&minIron=0&maxIron=50&maxMagnesium=50&minManganese=0&maxManganese=50&minPhosphorus=0&maxPhosphorus=50&minPotassium=0&maxPotassium=50&minSelenium=0&maxSelenium=50&minSodium=0&maxSodium=50&minSugar=0&maxSugar=50&minZinc=0&maxZinc=50")
  .header("X-RapidAPI-Key", "2339bf0c2emsh995354a967f05f3p19543ejsnb553cf83c30f")
  .end(function (result) {
    console.log(result.body);
 });
}

//Search - Autocomplete Recipe Search
function apiTest4(){
  unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/autocomplete?number=10&query=chicken")
.header("X-RapidAPI-Key", "2339bf0c2emsh995354a967f05f3p19543ejsnb553cf83c30f")
.end(function (result) {
  console.log(result.body);
});
}

//Search - Autocomplete Ingredient Search
function apiTest5(){
  unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/autocomplete?number=10&intolerances=egg&query=appl")
.header("X-RapidAPI-Key", "2339bf0c2emsh995354a967f05f3p19543ejsnb553cf83c30f")
.end(function (result) {
  console.log(result.body);
});
}

//Data - Get Recipe Information
function apiTest6(){
  unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information")
.header("X-RapidAPI-Key", "2339bf0c2emsh995354a967f05f3p19543ejsnb553cf83c30f")
.end(function (result) {
  console.log(result.body);
});
}

//Compute - Summarize Recipe
function apiTest7(){
  unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/4632/summary")
.header("X-RapidAPI-Key", "2339bf0c2emsh995354a967f05f3p19543ejsnb553cf83c30f")
.end(function (result) {
  console.log(result.body);
});
}

//Compute - Visualize Recipe Nutrition by id (outputs html)
function apiTest8(){
  unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/1003464/nutritionWidget")
.header("X-RapidAPI-Key", "2339bf0c2emsh995354a967f05f3p19543ejsnb553cf83c30f")
.header("Accept", "text/html")
.end(function (result) {
  console.log(result.body);
});
}

//API Calls

//apiTest1();
//apiTest2();
//apiTest3();
//apiTest4();
//apiTest5();
//apiTest6();
//apiTest7();
apiTest8();



