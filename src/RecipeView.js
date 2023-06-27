import React from "react";

// I added the RecipeView component to handle creating the row of each recipe.
// This follows the Single-Responsibility Principle of havong each component 
// being responsible for a single part of the program.
function RecipeView({ recipe, deleteRecipe }) {
    return (
        <>
            <tr>
                <td>{recipe.name}</td>
                <td>{recipe.cuisine}</td>
                <td><img src={recipe.photo} alt="" /></td>
                <td className="content_td"><p>{(recipe.ingredients)}</p></td>
                <td className="content_td"><p>{(recipe.preparation)}</p></td>
                <td><button name="delete" onClick={deleteRecipe}>Delete</button></td>
            </tr>
        </>
    )
};

export default RecipeView;