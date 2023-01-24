import { useState } from "react";

import NavBar from "./components/NavBar";
import Title from "./components/Title";
import RecipeList from "./components/RecipeList";
import Search from "./components/Search";
import CakeForm from "./components/CakeForm";

function App() {

  const initialCakes = [
    {
        cakeName: "Lemon Drizzle",
        ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
        rating: 5
    },
    {
        cakeName: "Tea Loaf",
        ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
        rating: 3
    },
    {
        cakeName: "Brownie",
        ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
        rating: 4
    },
    {
        cakeName: "Carrot Cake",
        ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
        rating: 5
    }
  ]

  const [cakes, setCakes] = useState(initialCakes);


  return (
    <>
      <header>
        <NavBar />
        <Title />
      </header>
      <main>
        <Search />
        <CakeForm />
        <RecipeList cakes={cakes} />
      </main>
    </>
  );
}

export default App;
