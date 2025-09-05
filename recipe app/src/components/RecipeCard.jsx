import React from "react";

export default function RecipeCard({ recipe }) {
    if (!recipe) return null
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{recipe.name}</h3>
        <p className="text-gray-600 text-sm mt-2">{recipe.description}</p>
        <button className="mt-3 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm">
          View Recipe
        </button>
      </div>
    </div>
  );
}
