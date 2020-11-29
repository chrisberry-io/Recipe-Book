import RecipeCard from 'src/components/RecipeCard'

export const QUERY = gql`
  query RecipeCardQuery {
    recipes {
      id
      name
      description
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ recipes }) => {
  return recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
}
