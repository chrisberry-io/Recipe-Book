// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/contact" page={ContactPage} name="contact" />
      <Route path="/recipe-card/{id:Int}" page={RecipeCardPage} name="recipeCard" />
      <Route path="/admin/recipes/new" page={NewRecipePage} name="newRecipe" />
      <Route path="/admin/recipes/{id:Int}/edit" page={EditRecipePage} name="editRecipe" />
      <Route path="/admin/recipes/{id:Int}" page={RecipePage} name="recipe" />
      <Route path="/admin/recipes" page={RecipesPage} name="recipes" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
