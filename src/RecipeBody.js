import React from 'react'
import RecipeCard from './RecipeCard'
import './RecipeBody.css'
import data from './data.json'

function RecipeBody({ recievedFilters, searchTerm }) {
    console.log(searchTerm);
    console.log(recievedFilters);
    return (
        <div className="recipe__body">
            {data && data.hits.filter(recipe => {
                if (recievedFilters.length === 0 &&searchTerm==="") {
                    return recipe;
                }
                else {
                   let match =recievedFilters.find(element => {
                        if (recipe.type.toLocaleLowerCase()===(element.toLocaleLowerCase())) {
                            return true;
                        }
                    })
                    if(match && searchTerm==="" ){
                        return recipe;
                    }else{
                        if(match && recipe.name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return recipe;
                        }
                    }
                    
                }
            }).map(recipe => {
                return <RecipeCard key={recipe.id} url={recipe.imageUrl} name={recipe.name} time={`time`} service={`service`} />
            })}

        </div>
    )
}

export default RecipeBody
