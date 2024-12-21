import { PrimaryButton } from "../Buttons/PrimaryButton";
import { DishesCards } from "../DishesCards/DishesCards";
import '../Main/Main.css'

export const Main = () => {
    return(
        <div className="main-container">
        <div className="main-header">
            <h3>Specials</h3>
            <PrimaryButton
            text='Order Online' />
        </div>
            <DishesCards />
        </div>
    )
}