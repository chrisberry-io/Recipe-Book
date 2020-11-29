import { render } from '@redwoodjs/testing'

import RecipeCard from './RecipeCard'

describe('RecipeCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RecipeCard />)
    }).not.toThrow()
  })
})
