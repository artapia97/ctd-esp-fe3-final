import { Link } from 'react-router-dom'
import { useContextGlobal } from "../Context/Context";

const Navbar = () => {
  const { state, dispatch } = useContextGlobal();
  const themeIcon = state.theme === "dark" ? "☀️" : "🌙";

  return (
    <nav>
      <div className="navbar">
        <div className="navbar-left">
          <h1>DH Odonto</h1>
        </div>

        <div className="navbar-right">
          <Link to="/">
            <h4>Home</h4>
          </Link>

          <Link to="/contact">
            <h4>Contact</h4>
          </Link>
          
          <Link to="/favs">
            <h4>Favs</h4>
          </Link>
          
          <button className="themeButton" onClick={
            () =>
              dispatch({
                type: "TOGGLE_THEME"
              })
          }>
            {themeIcon}
          </button>
        </div>
      </div>  
    </nav>
  )
}

export default Navbar;