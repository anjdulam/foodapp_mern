// import React, { useEffect, useState } from "react";
// import { useGetUserID } from "../hooks/useGetUserID";
// import axios from "axios";

// export const Home = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [savedRecipes, setSavedRecipes] = useState([]);

//   const userID = useGetUserID();

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/recipes");
//         setRecipes(response.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     const fetchSavedRecipes = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:3001/recipes/savedRecipes/ids/${userID}`
//         );
//         setSavedRecipes(response.data.savedRecipes);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchRecipes();
//     fetchSavedRecipes();
//   }, []);

//   const saveRecipe = async (recipeID) => {
//     try {
//       const response = await axios.put("http://localhost:3001/recipes", {
//         recipeID,
//         userID,
//       });
//       setSavedRecipes(response.data.savedRecipes);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const isRecipeSaved = (id) => savedRecipes.includes(id);

//   return (
//     <div>
//       <h1>Recipes</h1>
//       <ul>
//         {recipes.map((recipe) => (
//           <li key={recipe._id}>
//             <div>
//               <h2>{recipe.name}</h2>
//               <button
//                 onClick={() => saveRecipe(recipe._id)}
//                 disabled={isRecipeSaved(recipe._id)}
//               >
//                 {isRecipeSaved(recipe._id) ? "Saved" : "Save"}
//               </button>
//             </div>
//             <div className="instructions">
//               <p>{recipe.instructions}</p>
//             </div>
//             <img src={recipe.imageUrl} alt={recipe.name} />
//             <p>Cooking Time: {recipe.cookingTime} minutes</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };




import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import "./Home.css"; // Import custom CSS for animations

export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/ids/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipes();
    fetchSavedRecipes();
  }, [userID]);

  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.put("http://localhost:3001/recipes", {
        recipeID,
        userID,
      });
      setSavedRecipes(response.data.savedRecipes);
    } catch (err) {
      console.log(err);
    }
  };

  const isRecipeSaved = (id) => savedRecipes.includes(id);

  return (
    <div className="container">
      <h1 className="text-center mb-5">Recipes</h1> {/* Centered heading */}
      <div className="row">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="col-md-4 mb-4">
            <div className="card recipe-card">
              <div className="card-header">
                <h2>{recipe.name}</h2>
                <button
                  onClick={() => saveRecipe(recipe._id)}
                  disabled={isRecipeSaved(recipe._id)}
                  className="btn btn-primary float-right"
                >
                  {isRecipeSaved(recipe._id) ? "Saved" : "Save"}
                </button>
              </div>
              <div className="card-body">
                <p>
                  <strong>Ingredients:</strong>
                </p>
                <ul>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <p>{recipe.instructions}</p>
              </div>
              <div className="img-container">
                <img
                  src={recipe.imageUrl}
                  alt={recipe.name}
                  className="card-img-top"
                />
              </div>
              <div className="card-footer">
                <p>Cooking Time: {recipe.cookingTime} minutes</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
