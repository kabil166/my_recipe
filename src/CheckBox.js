import React from 'react'


function CheckBox({value, name, id, handleToggle }) {
    const handleChange=(e)=>{
        handleToggle(e.target.value);
    }
    return (
        <div>
            <input onChange={handleChange}type="checkbox" name={name} value={value} id={id}/>
            <label htmlFor={id}> {value}</label>
        </div>
    )
}

export default CheckBox
