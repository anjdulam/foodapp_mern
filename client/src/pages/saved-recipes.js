// import React, { useEffect, useState } from "react";
// import { useGetUserID } from "../hooks/useGetUserID";
// import axios from "axios";

// export const SavedRecipes = () => {
//   const [savedRecipes, setSavedRecipes] = useState([]);
//   const userID = useGetUserID();

//   useEffect(() => {
//     const fetchSavedRecipes = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:3001/recipes/savedRecipes/${userID}`
//         );
//         setSavedRecipes(response.data.savedRecipes);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchSavedRecipes();
//   }, []);
//   return (
//     <div>
//       <h1>Saved Recipes</h1>
//       <ul>
//         {savedRecipes.map((recipe) => (
//           <li key={recipe._id}>
//             <div>
//               <h2>{recipe.name}</h2>
//             </div>
//             <p>{recipe.description}</p>
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
import "./SavedRecipes.css"; // Import custom CSS for styling

export const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedRecipes();
  }, [userID]); // Include userID in the dependency array to trigger useEffect on userID change

  return (
    <div className="container">
      <h1 className="text-center mb-5">Saved Recipes</h1>
      <div className="row">
        {savedRecipes.map((recipe) => (
          <div key={recipe._id} className="col-md-4 mb-4">
            <div className="card saved-recipe-card">
              <div className="card-header">
                <h2>{recipe.name}</h2>
              </div>
              <div className="card-body">
                <p>{recipe.description}</p>
              </div>
              <img src={recipe.imageUrl} alt={recipe.name} className="card-img-top" />
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

