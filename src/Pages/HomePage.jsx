import { Header } from '../Components/Header/Header';
import { Main } from '../Components/Main/Main';
import { TestimonialsBody } from '../Components/TestimonialsCards/TestimonialsBody';
import { NavBar } from '../Components/NavBar/NavBar';
import { Article } from '../Components/Article/Article';
import { Footer } from '../Components/Footer/Footer';
export const HomePage = () => {
    return(
        <>
            <NavBar />
            <Header />
            <Main />
            <TestimonialsBody />
            <Article />
            <Footer />
        </>
    )
}