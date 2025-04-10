import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData);
    setFormData({ ...initialFormState });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><input name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Name" required /></td>
            <td><input name="cuisine" type="text" value={formData.cuisine} onChange={handleChange} placeholder="Cuisine" required /></td>
            <td><input name="photo" type="url" value={formData.photo} onChange={handleChange} placeholder="URL" required /></td>
            <td><textarea name="ingredients" value={formData.ingredients} onChange={handleChange} placeholder="Ingredients" required /></td>
            <td><textarea name="preparation" value={formData.preparation} onChange={handleChange} placeholder="Preparation" required /></td>
            <td><button type="submit">Create</button></td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
