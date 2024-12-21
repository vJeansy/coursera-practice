import { TestimonialsCards } from "./TestimonialsCards"
import '../TestimonialsCards/Testimonials.css'

export const TestimonialsBody = () => {
    return(
        <div className="testimonials-body-container">
            <h2>Testimonials</h2>
            <div className="testimonals">
            <TestimonialsCards
            rating={'⭐⭐⭐⭐'}
            img={'../Assest/Marcos.jpg'}
            name={'Marcos'}
            alt={'Marcos'}
            testimonial={'Loved it!'}/> {/* some real data can be provided in here */}

            <TestimonialsCards
            rating={'⭐⭐⭐⭐⭐'}
            img={'../Assest/Andrea.jpg'}
            name={'Andrea'}
            alt={'Andrea'}
            testimonial={'Excellent dishes and customer service!'}/>

            <TestimonialsCards
            rating={'⭐⭐⭐⭐'}
            img={'../Assest/miguel.jpg'}
            name={'Miguel'}
            alt={'Miguel'}
            testimonial={'All was perfect!'}/>
            </div>
        </div>
    )
}