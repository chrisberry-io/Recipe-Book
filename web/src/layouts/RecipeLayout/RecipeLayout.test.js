import { render } from '@redwoodjs/testing'

import RecipeLayout from './RecipeLayout'

describe('RecipeLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RecipeLayout />)
    }).not.toThrow()
  })
})
