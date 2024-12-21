import { PrimaryButton } from "../Buttons/PrimaryButton"

export const Header = () => {
    return (
        <>
        <header>
            <div className="header-container">
            <div className="header-text">
                <h1>Little Lemon</h1>
                <h4>Chicago</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Donec maximus eros vel suscipit faucibus.
                Aenean vestibulum dignissim nisl.</p>
                <PrimaryButton
                text='Reserve a table' />
            </div>
            <div className="header-img">
                <img src="../Assest/Mario and Adrian A.jpg" alt="Mario and Adrian A" />
            </div>
            </div>
        </header>
        </>
    )
}