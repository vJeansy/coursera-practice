import { useState, useEffect } from "react"
import '../DishesCards/DishesCards.css'

export const DishesCards = () => {
const [restaurants, setRestaurants] = useState([]);

useEffect(() => {
fetch ('./Json/Specials.json')
.then((response) => response.json())
.then((data) => setRestaurants(data))
.catch((error) => console.log("Error fetching dishes:", error));

}, [restaurants]);
return(
    <div className="dish-card-container">
    {restaurants.map((restaurant) => (
        <div className="dish-cards">
        <div key={restaurant.id} className="dish-card-body">
            <div className="dish-card-img">
                <img src={restaurant.Picture} alt={restaurant.tittle} />
            </div>
            <div className="dish-card-context">
                <div className="dish-card-head-context">
                <h3>{restaurant.tittle}</h3>
                <p>${restaurant.price}</p>
                </div>
                <p>{restaurant.description}</p>
                <button type="button">Order a Delivery</button>
            </div>
        </div>
    </div>
    ))}
    </div>
)
}