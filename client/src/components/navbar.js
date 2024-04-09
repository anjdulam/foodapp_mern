// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie";

// export const Navbar = () => {
//   const [cookies, setCookies] = useCookies(["access_token"]);
//   const navigate = useNavigate();

//   const logout = () => {
//     setCookies("access_token", "");
//     window.localStorage.clear();
//     navigate("/auth");
//   };
//   return (
//     <div className="navbar navbar-expand-lg bg-body-tertiary">
//       <Link to="/">Home</Link>
//       <Link to="/create-recipe">Create Recipe</Link>
//       <Link to="/saved-recipes">Saved Recipes</Link>
//       {!cookies.access_token ? (
//         <Link to="/auth">Login/Register</Link>
//       ) : (
//         <button onClick={logout}> Logout </button>
//       )}
//     </div>
//   );
// };



import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/create-recipe" className="nav-link">
                Create Recipe
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/saved-recipes" className="nav-link">
                Saved Recipes
              </Link>
            </li>
          </ul>
          {!cookies.access_token ? (
            <Link to="/auth" className="nav-link">
              Login/Register
            </Link>
          ) : (
            <button onClick={logout} className="nav-link btn btn-link">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};