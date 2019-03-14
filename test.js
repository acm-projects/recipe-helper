var unirest = require('unirest');


function apiTest1(){
  unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer?q=How+much+vitamin+c+is+in+2+apples%3F")
  .header("X-RapidAPI-Key", "2339bf0c2emsh995354a967f05f3p19543ejsnb553cf83c30f")
  .end(function (result) {
    //console.log(result.body);
    console.log(result.body);
  });
}

function apiTest2(){
  unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=vegetarian%2Cdessert")
  .header("X-RapidAPI-Key", "2339bf0c2emsh995354a967f05f3p19543ejsnb553cf83c30f")
  .end(function (result) {
    //console.log(result.body);
    console.log(result.body.recipes[0].id);
    //console.log(result.body.recipes[1].id);

    
});
}

// unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?diet=vegetarian&excludeIngredients=coconut&intolerances=egg%2C+gluten&number=10&offset=0&type=main+course&query=burger")
// .header("X-RapidAPI-Key", "2339bf0c2emsh995354a967f05f3p19543ejsnb553cf83c30f")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });



// unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=vegetarian%2Cdessert")
//   .header("X-RapidAPI-Key", "2339bf0c2emsh995354a967f05f3p19543ejsnb553cf83c30f")
//     .asJson();
  
//   // retrieve the parsed JSONObject from the response
//   JSONObject myObj = request.getBody().getObject();
  
//   // extract fields from the object
//   String msg = myObj.getString("error_message");
//   JSONArray results = myObj.getJSONArray();
  
  

//apiTest1();
apiTest1();

/* the request from your question


function apiTest1(){
  unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer?q=How+much+vitamin+c+is+in+2+apples%3F")
  .header("X-RapidAPI-Key", "2339bf0c2emsh995354a967f05f3p19543ejsnb553cf83c30f")
  .end(function (result) {
    console.log(result.body);
  });
}

JSONObject abc= new JSONObject(apiTest1());*/

