import RecipeCard from 'src/components/RecipeCard'

export const QUERY = gql`
  query RecipeCardQuery($id: Int!) {
    recipe(id: $id) {
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

export const Success = ({ recipe }) => {
  return <RecipeCard recipe={recipe} />
}
