import '../Article/Article.css'

export const Article = () => {
    return(
        <div className="article-container">
            <div className="article-body">
                <div className="article-text">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Donec maximus eros vel suscipit faucibus.
                        Aenean vestibulum dignissim nisl. <br /> <br />

                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Donec maximus eros vel suscipit faucibus.
                        Aenean vestibulum dignissim nisl.
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Donec maximus eros vel suscipit faucibus.
                        Aenean vestibulum dignissim nisl.</p>
                </div>
                <div className="article-img">
                    <img src="https://github.com/vJeansy/coursera-practice/blob/main/public/Assest/restauranfood.jpg?raw=true" alt="restaurantfood" />
                    <img src="https://github.com/vJeansy/coursera-practice/blob/main/public/Assest/restauranfood2.jpg?raw=true" alt="restauranfood2" />
                </div>
            </div>
        </div>
    )
}