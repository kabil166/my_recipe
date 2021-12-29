import React from 'react'
import CheckBox from './CheckBox'
import './ByMeal.css'
const filters=[
    {
        "_id":15,
        "name":"Fruit Dessert"
    },
    {
        "_id":16,
        "name":"Chocolate"
    },
    {
        "_id":17,
        "name":"Cakes and Quick Breads"
    },
    {
        "_id":18,
        "name":"Cookies and Bars"
    },
    {
        "_id":19,
        "name":"Pies and Tarts"
    },
    {
        "_id":20,
        "name":"Ice Cream and Popsicles"
    }
]
function SweetThings({handleFilter}) {
    const handleToggle=(e)=>{
        handleFilter(e);
    }
    return (
        <div>
            <h1 className="filter__type"> Sweet Things</h1>
            <div className="filter__checks">
                {filters && filters.map((obj,index)=>{
                  return  <React.Fragment  key={index}>
                        <CheckBox handleToggle={handleToggle} name={obj.name} value={obj.name} id={obj._id}/>
                    </React.Fragment>
                    
                })}
            </div>
        </div>
    )
}

export default SweetThings
