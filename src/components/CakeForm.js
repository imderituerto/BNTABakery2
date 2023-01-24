import { useState } from "react";

const CakeForm = () => {

    const [newCake, setNewCake] = useState("");
    const [newIngredients, setNewIngredients] = useState();
    const [newRating, setNewRating] = useState("");

    return (
        <form>
            <label htmlFor="name">Cake Name:</label>
            <input  type="text" 
                    id="name"
                    onChange={(event) => setNewCake(event.target.value)} 
                    value = {newCake} />
                    
            <label htmlFor="ingredients">Ingredients:</label>
            <textarea   cols="30" rows="1" 
                        id="ingredients"
                        onChange={(event) => setNewIngredients(event.target.value)} 
                        value = {newIngredients} 
                        >
                        </textarea>
            
            <label htmlFor="rating">Rating:</label>
            <input  type="number" 
                    id="rating" 
                    min={1} max={5}
                    onChange={(event) => setNewRating(event.target.value)} 
                    value = {newRating} 
                    />
            
            <input type="submit"/>
        </form>
    )

}

export default CakeForm;