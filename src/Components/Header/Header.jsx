import { PrimaryButton } from "../Buttons/PrimaryButton"
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <>
        <header>
            <div className="header-container">
            <div className="header-text">
                <h1>Little Lemon</h1>
                <h4>Chicago</h4>
                <p>Nestled in the heart of the city,
                    Little Lemon is a family-owned
                    Mediterranean restaurant dedicated
                    to bringing a slice of sunshine to
                    your dining experience.</p>
                <Link to="/Reservation"><PrimaryButton
                text='Reserve a table' /></Link>
            </div>
            <div className="header-img">
                <img src="https://github.com/vJeansy/coursera-practice/blob/main/public/Assest/Mario and Adrian A.jpg?raw=true" alt="Mario and Adrian A" />
            </div>
            </div>
        </header>
        </>
    )
}