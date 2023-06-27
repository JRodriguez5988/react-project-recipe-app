import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
// I used an object for all the initial values of the form so that I do not 
// need to use multiple useState methods and so that it matches the 
// format of the RecipeData component.
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState(initialFormState);

// handleChange will add the contents of the input and texArea elements 
// to the formData object under the proper keys.
  const handleChange = ({target}) =>
    setFormData({...formData, [target.name]: target.value});

// handleSubmit will take the new data entered into the formData object
// and add it to RecipeData component.
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);

    setFormData({...initialFormState});
  };
  
  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
            <td>
                <input
                name="name"
                id="name"
                type="text"
                onChange={handleChange}
                value={formData.name}
                placeholder="Name"
                />
            </td>
            <td>
                <input 
                name="cuisine"
                id="cuisine"
                type="text"
                onChange={handleChange}
                value={formData.cuisine}
                placeholder="Cuisine"
                />
            </td>
            <td>
                <input
                name="photo"
                id="photo"
                type="url"
                onChange={handleChange}
                value={formData.photo}
                placeholder="URL"
                />
            </td>
            <td>
                <textarea
                name="ingredients"
                id="ingredients"
                type="text"
                onChange={handleChange}
                value={formData.ingredients}
                placeholder="Ingredients"
                />
            </td>
            <td>
                <textarea
                name="preparation"
                id="preparation"
                type="text"
                onChange={handleChange}
                value={formData.preparation}
                placeholder="Preparation"
                />
            </td>
            <td>
              <button type="submit" onClick={handleSubmit}>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
