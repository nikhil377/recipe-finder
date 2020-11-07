import './App.css';
import SearchRecipe from './SearchRecipe';
import RecipeList from './RecipeList';
function App() {
  return (
    <div className="App">
      <h2>Recipe Finder</h2>
      <SearchRecipe/>
      <RecipeList/>
    </div>
  );
}

export default App;
