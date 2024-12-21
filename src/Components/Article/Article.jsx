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
                    <img src="./Assest/restauranfood.jpg" alt="restaurantfood" />
                    <img src="./Assest/restauranfood2.jpg" alt="restauranfood2" />
                </div>
            </div>
        </div>
    )
}