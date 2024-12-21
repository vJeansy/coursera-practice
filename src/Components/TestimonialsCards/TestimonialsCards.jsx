import '../TestimonialsCards/Testimonials.css'

export const TestimonialsCards = (props) => {
    return(
        <div className="testimonial-card-container">
            <div className="testimonial-rating">
                {props.rating}
            </div>
            <div className="testimonial-card-body">
                <img src={props.img} alt={props.alt} />
                <h4>{props.name}</h4>
            </div>
            <p>{props.testimonial}</p>
        </div>
    )
}