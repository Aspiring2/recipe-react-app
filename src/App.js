import Axios from "axios";
import { useState } from "react";
import "./app.css";
import RecipeTile from "./components";

function App() {

  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);

  const YOUR_APP_ID = ``;
  const YOUR_APP_KEY = "";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  const getRecipeInfo = async () => {
    try {
      const result = await Axios.get(url);
      setrecipes(result.data.hits);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  };

  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>RecipeFiesta 🥗</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="enter ingridient"
          autoComplete="Off"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />
      </form>

      <div className="app__recipes">
        {recipes.length === 0 ? (
          <h2>Please enter an ingredient to search for recipes</h2>
        ) : (
          recipes.map((recipe) => {
            return <RecipeTile recipe={recipe} key={recipe.recipe.uri} />;
          })
        )}
      </div>
    </div>
  );
}

export default App;
