import React, {useEffect,useState} from 'react';
import Recipe from "./Recipe";
import './App.css';


const App = () => {

  //ID si KEY pentru API 
  const APP_ID = '343fbe4a';
  const APP_KEY = 'ed608b14fbaa03e0a214428491c23775	';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('oat');
 
  useEffect( () => {
    getRecipes();
  },[query]);

  const getRecipes = async () => {
    const response = await fetch(`/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);


  }

  const updateSearch = e =>{
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <h1 className='big-title'>Cauta Retete dupa ingredientul favorit</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className = "search-bar" type = "text" 
          value={search} onChange={updateSearch}/> 
        <button className = "search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
          <Recipe 
              key={recipe.recipe.label}
              title={recipe.recipe.label} 
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              nutrients={recipe.recipe.totalNutrients}/>
      ))}
      </div>
    </div>
  );
}

export default App;
