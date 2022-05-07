const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

// Connection to the database "recipe-app"

async function init() {
  try {
    const connection = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Conectado ao banco", connection.connections[0].name);

    // Before adding any recipes to the database, let's remove all existing ones
    // return Recipe.deleteMany();
    //***************ATENÇAO - LIMPAR NOSSO BANCO DE DADOS  */
    connection.connections[0].dropDatabase();

    // Run your code here, after you have insured that the connection was made
    // Iteration 2 - Create a recipe
    const recipeCreated = recipeSchema.create({
      title: "Chocolate Cake",
      level: "Easy Peasy",
      ingredients:
        "all-purpose flour, sugar, unsweetened cocoa powder, baking powder, baking soda, salt, espresso powder, milk, oil, eggs, vanilla extract and boiling water",
      cuisine: "Worldwide",
      dishType: "dessert",
      image: "https://images.media-allrecipes.com/images/75131.jpg",
      duration: 60,
      creator: "Camila",
      created: "06/05/2022",
    });
    console.log("recipeCreated", recipeCreated);
  } catch (error) {
    console.error("Error connecting to the database", error);
  }
}

init();
