import '../Article/Article.css'

export const Article = () => {
    return(
        <div className="article-container">
            <div className="article-body">
                <div className="article-text">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Nestled in the heart of the city, Little Lemon is a family-owned
                         Mediterranean restaurant dedicated to bringing a slice of sunshine
                          to your dining experience. From the freshest ingredients to
                          authentic recipes passed down through generations, we pride
                          ourselves on creating meals that are both delicious and memorable.
                        <br /> <br />
                        Our story began with a passion for food and a dream to share the rich
                        culinary traditions of the Mediterranean. At Little Lemon, every dish
                        is prepared with love, care, and a zest for life, making each bite a
                        celebration of flavor and culture.</p>
                </div>
                <div className="article-img">
                    <img src="https://github.com/vJeansy/coursera-practice/blob/main/public/Assest/restauranfood.jpg?raw=true" alt="restaurantfood" />
                    <img src="https://github.com/vJeansy/coursera-practice/blob/main/public/Assest/restauranfood2.jpg?raw=true" alt="restauranfood2" />
                </div>
            </div>
        </div>
    )
}