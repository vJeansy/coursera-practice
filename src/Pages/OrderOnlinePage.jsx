import { NavBar } from '../Components/NavBar/NavBar'
import { Footer } from '../Components/Footer/Footer'

export const OrderOnlinePage = () => {
    return(
        <>
        <NavBar />
        <h2 style={{
            textAlign: 'center',
            backgroundColor: '#495E57',
            borderRadius: '7px',
            padding: '50px',
            margin: '150px 50px 150px 50px',
            color: '#EDEFEE',
            }}>Order online</h2>
        <Footer />
        </>
    )
}