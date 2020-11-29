import { render } from '@redwoodjs/testing'

import RecipeCardPage from './RecipeCardPage'

describe('RecipeCardPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RecipeCardPage />)
    }).not.toThrow()
  })
})
