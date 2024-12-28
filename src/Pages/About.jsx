import { AboutUs } from "../Components/AboutUs/AboutUs"
import BackButton from "../Components/BackButton/BackButton"
import { Footer } from "../Components/Footer/Footer"
import { NavBar } from "../Components/NavBar/NavBar"

export const About = () => {
    return(
        <>
        <NavBar />
        <BackButton />
        <AboutUs />
        <Footer />
        </>
    )
}