// import React, { useState } from "react";
// import axios from "axios";
// import { useGetUserID } from "../hooks/useGetUserID";
// import { useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie";

// export const CreateRecipe = () => {
//   const userID = useGetUserID();
//   const [cookies, _] = useCookies(["access_token"]);
//   const [recipe, setRecipe] = useState({
//     name: "",
//     description: "",
//     ingredients: [],
//     instructions: "",
//     imageUrl: "",
//     cookingTime: 0,
//     userOwner: userID,
//   });

//   const navigate = useNavigate();

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setRecipe({ ...recipe, [name]: value });
//   };

//   const handleIngredientChange = (event, index) => {
//     const { value } = event.target;
//     const ingredients = [...recipe.ingredients];
//     ingredients[index] = value;
//     setRecipe({ ...recipe, ingredients });
//   };

//   const handleAddIngredient = () => {
//     const ingredients = [...recipe.ingredients, ""];
//     setRecipe({ ...recipe, ingredients });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await axios.post(
//         "http://localhost:3001/recipes",
//         { ...recipe },
//         {
//           headers: { authorization: cookies.access_token },
//         }
//       );

//       alert("Recipe Created");
//       navigate("/");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="create-recipe">
//       <h2>Create Recipe</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={recipe.name}
//           onChange={handleChange}
//         />
//         <label htmlFor="description">Description</label>
//         <textarea
//           id="description"
//           name="description"
//           value={recipe.description}
//           onChange={handleChange}
//         ></textarea>
//         <label htmlFor="ingredients">Ingredients</label>
//         {recipe.ingredients.map((ingredient, index) => (
//           <input
//             key={index}
//             type="text"
//             name="ingredients"
//             value={ingredient}
//             onChange={(event) => handleIngredientChange(event, index)}
//           />
//         ))}
//         <button type="button" onClick={handleAddIngredient}>
//           Add Ingredient
//         </button>
//         <label htmlFor="instructions">Instructions</label>
//         <textarea
//           id="instructions"
//           name="instructions"
//           value={recipe.instructions}
//           onChange={handleChange}
//         ></textarea>
//         <label htmlFor="imageUrl">Image URL</label>
//         <input
//           type="text"
//           id="imageUrl"
//           name="imageUrl"
//           value={recipe.imageUrl}
//           onChange={handleChange}
//         />
//         <label htmlFor="cookingTime">Cooking Time (minutes)</label>
//         <input
//           type="number"
//           id="cookingTime"
//           name="cookingTime"
//           value={recipe.cookingTime}
//           onChange={handleChange}
//         />
//         <button type="submit">Create Recipe</button>
//       </form>
//     </div>
//   );
// };



import React, { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const CreateRecipe = () => {
  const userID = useGetUserID();
  const [cookies, _] = useCookies(["access_token"]);
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: userID,
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientChange = (event, index) => {
    const { value } = event.target;
    const ingredients = [...recipe.ingredients];
    ingredients[index] = value;
    setRecipe({ ...recipe, ingredients });
  };

  const handleAddIngredient = () => {
    const ingredients = [...recipe.ingredients, ""];
    setRecipe({ ...recipe, ingredients });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:3001/recipes",
        { ...recipe },
        {
          headers: { authorization: cookies.access_token },
        }
      );

      alert("Recipe Created");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container create-recipe">
      <h2>Create Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={recipe.name}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={recipe.description}
                onChange={handleChange}
                className="form-control"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="ingredients">Ingredients</label>
              {recipe.ingredients.map((ingredient, index) => (
                <div key={index} className="input-group mb-3">
                  <input
                    type="text"
                    name="ingredients"
                    value={ingredient}
                    onChange={(event) => handleIngredientChange(event, index)}
                    className="form-control"
                  />
                  <div className="input-group-append">
                    {recipe.ingredients.length > 1 && (
                      <button
                        type="button"
                        onClick={() => setRecipe({
                          ...recipe,
                          ingredients: recipe.ingredients.filter(
                            (_, i) => i !== index
                          ),
                        })}
                        className="btn btn-danger"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <button type="button" onClick={handleAddIngredient} className="btn btn-primary">
                Add Ingredient
              </button>
            </div>
            </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="instructions">Instructions</label>
              <textarea
                id="instructions"
                name="instructions"
                value={recipe.instructions}
                onChange={handleChange}
                className="form-control"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="imageUrl">Image URL</label>
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                value={recipe.imageUrl}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cookingTime">Cooking Time (minutes)</label>
              <input
                type="number"
                id="cookingTime"
                name="cookingTime"
                value={recipe.cookingTime}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>
        </div>
        <button type="submit " className="btn btn-primary text-center ">
          Create Recipe
        </button>
      </form>
    </div>
  );
};