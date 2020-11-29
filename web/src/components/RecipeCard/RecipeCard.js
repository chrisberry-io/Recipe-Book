import { Link, routes } from '@redwoodjs/router'

const RecipeCard = ({ recipe }) => {
  return (
    <article key={recipe.id}>
      <header>
        <h2>
          <Link to={routes.recipeCard({ id: recipe.id })}>{recipe.name}</Link>
        </h2>
      </header>
      <p>{recipe.description}</p>
      <div>Posted at: {recipe.createdAt}</div>
    </article>
  )
}

export default RecipeCard
