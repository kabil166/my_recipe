import React from 'react'
import CheckBox from './CheckBox'
const filters=[
    {
        "_id":1,
        "name":"Autumn"
    },
    {
        "_id":2,
        "name":"Spring"
    },
    {
        "_id":3,
        "name":"Summer"
    },
    {
        "_id":4,
        "name":"Winter"
    }
]
function FilterBySeason({ handleFilter }) {
    const handleToggle=(e)=>{
        handleFilter(e);
    }
    return (
        <div>
            <h1 className="filter__type">By Season</h1>
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

export default FilterBySeason
