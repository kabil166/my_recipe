import React from 'react'
import CheckBox from './CheckBox'
const filters = [
    {
        "_id":10,
        "name":"Breakfast"
    },
    {
        "_id":11,
        "name":"Dessert"
    },
    {
        "_id":12,
        "name":"Dinner"
    },
    {
        "_id":13,
        "name":"Holidays"
    },
    {
        "_id":14,
        "name":"Snacks and Apetizers"
    }
]
function ByMeal({handleFilter}) {
    const handleToggle=(e)=>{
        handleFilter(e);
    }
    return (
        <div>
            <h1 className="filter__type">By Meal:</h1>
            <div className="filter__checks">
                {filters && filters.map((obj,index)=>{
                  return  <React.Fragment key={index}>
                        <CheckBox  handleToggle={handleToggle} name={obj.name} value={obj.name} id={obj._id}/>
                    </React.Fragment>
                    
                })}
            </div>
        </div>
    )
}

export default ByMeal
