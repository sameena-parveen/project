import React from "react";

export default function Header() {
  return (
    <header className="bg-green-600 text-white shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">My Recipe App</h1>
        <nav className="space-x-4 hidden sm:block">
          <a href="#recipes" className="hover:underline">
            Recipes
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
