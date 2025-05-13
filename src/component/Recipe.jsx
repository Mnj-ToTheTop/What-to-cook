export default function Recipe({ recipe }) {
  return (
    <div className="recipes-item">
      <img src={recipe.image} />
      <article className="recipe-info">
        <h4 className="recipe-title">Title: {recipe.title}</h4>
      </article>
    </div>
  );
}
