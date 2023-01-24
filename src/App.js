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

  const addNewCake = (newCake) => {
    const updatedCakes = [...cakes, newCake];
    setCakes(updatedCakes);
  }

  const [filteredCakes, setFilteredCakes] = useState();

  const filterCakes = (searchTerm) => {
    console.log("searchTerm:", searchTerm);
    const foundCakes = cakes.filter(cake => {
      return cake.cakeName.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setFilteredCakes(foundCakes);
  }



  return (
    <>
      <header>
        <NavBar />
        <Title />
      </header>
      <main>
        <Search filterCakes = {filterCakes}/>
        <CakeForm addNewCake = {addNewCake}/>
        <RecipeList cakes = {filteredCakes ? filteredCakes : cakes} />
      </main>
    </>
  );
}

export default App;
