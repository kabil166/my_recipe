import React from 'react'
import ByMeal from './ByMeal'
import FilterByDietry from './FilterByDietry'
import FilterBySeason from './FilterBySeason'
import SweetThings from './SweetThings'
import './FilterByTypes.css'


function FilterByTypes({sendFilters}) {
    const handleFilter=(e)=>{
        sendFilters(e);
    }
    return (
        <div className="filter__options">
            <h3>Filter Recipies</h3>
            <p className="filter__checks">Check multiple boxes below to narrow recipe search results: </p>
            <FilterBySeason handleFilter={handleFilter}/>
            <FilterByDietry handleFilter={handleFilter}/>
            <ByMeal handleFilter={handleFilter}/>
            <SweetThings handleFilter={handleFilter}/>
            
        </div>
    )
}

export default FilterByTypes
