import Recipe from "./Recipe";
export default function RecipeList({ recipes }) {
  if (recipes.length == 0) {
    return (
      <div className="sorry">
        <h2>Sorry!! No recipe found!!</h2>
      </div>
    );
  }
  return (
    <div className="recipes-container">
      {recipes.map((eachRecipe) => {
        return <Recipe recipe={eachRecipe} key={eachRecipe.id} />;
      })}
    </div>
  );
}
