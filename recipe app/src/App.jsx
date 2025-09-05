import React from 'react'
import RecipeCard from './components/RecipeCard'
import Header from './components/Header'
import Footer from './components/Footer'
const App = () => {
  const recipes = [
  {
    id: 1,
    name: "Pasta Primavera",
    image:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80",
    description: "A classic Italian pasta dish loaded with fresh vegetables.",
  },
  {
    id: 2,
    name: "Avocado Toast",
    image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULoAMERIRh6Rl-i2q9VlubWkpLjh53xpcVA&s',
      
    description: "Crispy toast topped with creamy avocado and spices.",
  },
  {
    id: 3,
    name: "Berry Smoothie",
    image:
      "https://images.unsplash.com/photo-1502741126161-b048400d9c06?auto=format&fit=crop&w=800&q=80",
    description: "A refreshing smoothie packed with mixed berries.",
  },
  {
    id: 4,
    name: "Greek Salad",
    image:
      "https://images.unsplash.com/photo-1576402187877-9c71b3f8a1fc?auto=format&fit=crop&w=800&q=80",
    description: "Fresh cucumbers, tomatoes, olives, and feta cheese.",
  },
];
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">

      <Header/>
       <main id="recipes" className="max-w-6xl mx-auto p-4 flex-1">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </main>
      <Footer/>
      <RecipeCard/>
    </div>
  )
}

export default App
