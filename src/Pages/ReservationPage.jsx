import BackButton from "../Components/BackButton/BackButton"
import { Footer } from "../Components/Footer/Footer"
import { NavBar } from "../Components/NavBar/NavBar"
import { Reservation } from "../Components/Reservation/Reservation"

export const ReservationPage = () => {
    return (
        <>
        <NavBar />
        <BackButton />
        <Reservation />
        <Footer />
        </>
    )
}