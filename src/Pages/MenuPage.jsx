import BackButton from "../Components/BackButton/BackButton"
import { Footer } from "../Components/Footer/Footer"
import { Menu } from "../Components/Menu/Menu"
import { NavBar } from "../Components/NavBar/NavBar"

export const MenuPage = () => {
    return(
        <>
        <NavBar />
        <BackButton />
        <Menu />
        <Footer />
        </>
    )
}