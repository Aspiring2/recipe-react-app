import React from "react";
import "./style.css";

export default function RecipeTile({ recipe }) {
  if (!recipe || !recipe.recipe || !recipe.recipe.image) {
    return null;
  }

  return (
    <div
      className="recipeTile"
      onClick={() => window.open(recipe.recipe.url)}
    >
      <img
        className="recipeTile__img"
        src={recipe.recipe.image}
        alt={recipe.recipe.label}
      />
      <p className="recipeTile__name">{recipe.recipe.label}</p>
    </div>
  );
}
