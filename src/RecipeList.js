import React from "react";

// inline RecipeRow component
function RecipeRow({ recipe, index, deleteRecipe }) {
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img
          src={recipe.photo}
          alt={recipe.name}
          style={{ objectFit: "scale-down", width: "100%", height: "100px" }}
        />
      </td>
      <td className="content_td"><p>{recipe.ingredients}</p></td>
      <td className="content_td"><p>{recipe.preparation}</p></td>
      <td>
        <button name="delete" onClick={() => deleteRecipe(index)}>Delete</button>
      </td>
    </tr>
  );
}

function RecipeList({ recipes, deleteRecipe }) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <RecipeRow
              key={index}
              recipe={recipe}
              index={index}
              deleteRecipe={deleteRecipe}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
