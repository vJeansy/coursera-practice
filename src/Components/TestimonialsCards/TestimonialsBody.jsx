import { TestimonialsCards } from "./TestimonialsCards"
import '../TestimonialsCards/Testimonials.css'

export const TestimonialsBody = () => {
    return(
        <div className="testimonials-body-container">
            <h2>Our client comments!</h2>
            <div className="testimonals">
            <TestimonialsCards
            rating={'⭐⭐⭐⭐'}
            img={'https://github.com/vJeansy/coursera-practice/blob/main/public/Assest/Marcos.jpg?raw=true'}
            name={'Marcos'}
            alt={'Marcos'}
            testimonial={'Loved it!'}/> {/* some real data can be provided in here */}

            <TestimonialsCards
            rating={'⭐⭐⭐⭐⭐'}
            img={'https://github.com/vJeansy/coursera-practice/blob/main/public/Assest/Andrea.jpg?raw=true'}
            name={'Andrea'}
            alt={'Andrea'}
            testimonial={`Excellent dishes, views, pleace and customer service!`}/>

            <TestimonialsCards
            rating={'⭐⭐⭐⭐'}
            img={'https://github.com/vJeansy/coursera-practice/blob/main/public/Assest/miguel.jpg?raw=true'}
            name={'Miguel'}
            alt={'Miguel'}
            testimonial={'All was perfect!'}/>
            </div>
        </div>
    )
}