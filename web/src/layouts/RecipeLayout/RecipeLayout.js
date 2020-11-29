import { Link, routes } from '@redwoodjs/router'

const RecipeLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Recipe Book</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default RecipeLayout
