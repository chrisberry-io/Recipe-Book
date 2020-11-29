import RecipeCardCell from 'src/components/RecipeCardCell'
import RecipeLayout from 'src/layouts/RecipeLayout'

const RecipeCardPage = ({ id }) => {
  return (
    <RecipeLayout>
      <RecipeCardCell id={id} />
    </RecipeLayout>
  )
}

export default RecipeCardPage
