import React from 'react'
import CheckBox from './CheckBox'
const filters=[
    {
        "_id":5,
        "name":"Dairy Free"
    },
    {
        "_id":6,
        "name":"Egg Free"
    },
    {
        "_id":7,
        "name":"Gluten Free"
    },
    {
        "_id":8,
        "name":"Quick and Easy"
    },
    {
        "_id":9,
        "name":"Healthy"
    }
]
function FilterByDietry({handleFilter}) {
    const handleToggle=(e)=>{
        handleFilter(e);
    }
    return (
        <div>
            <h1 className="filter__type">By Dietry Preference:</h1>
            <div className="filter__checks">
            {filters && filters.map((obj,index)=>{
                  return  <React.Fragment key={index}>
                        <CheckBox handleToggle={handleToggle} name={obj.name} value={obj.name} id={obj._id}/>
                    </React.Fragment>
                    
                })}
            </div>
        </div>
    )
}

export default FilterByDietry
