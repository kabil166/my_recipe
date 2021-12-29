import React from 'react'
import './RecipeCard.css'
function RecipeCard({ url, name, time, service }) {
    return (
        <div className="recipe__card">
            <div
                className="food__image"
                style={{ backgroundImage: `url(${url}` }}>

            </div>
            <div className="food__details">
                <div className="details__top">
                    <p>{time}</p>
                    <p>{service}</p>
                </div>
                <h3 className="details__header">{name}</h3>
            </div>
        </div>
    )
}

export default RecipeCard;
