import './App.css';
import FilterByTypes from './FilterByTypes';
import Header from './Header';
import RecipeBody from './RecipeBody';
import { useState } from 'react'

function App() {
  const [filters, setFilters] = useState([]);
  const [searchTerm, setSearchTerm]= useState("");

  const sendFilters = (e) => {
    const curIndex = filters.indexOf(e);
    const newChecked = [...filters];
    if (curIndex === -1) {
      newChecked.push(e);
    } else {
      newChecked.splice(curIndex, 1);
    }
    setFilters(newChecked);
    
  }
  const search=e=>{
    setSearchTerm(e);
  }
  return (
    <div className="app">
      <Header search={search}/>
      <div className="app__body">
        <FilterByTypes sendFilters={sendFilters} />
        <RecipeBody recievedFilters={filters} searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default App;
