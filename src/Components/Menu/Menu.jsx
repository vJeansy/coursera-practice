import { DishesCards } from "../DishesCards/DishesCards"
import '../Menu/Menu.css'

export const Menu = () => {
    return(
        <div className="menu-container">
        <DishesCards /> <br /> <br />
        <DishesCards />
        </div>
    )
}