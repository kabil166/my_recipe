import React from 'react'
import About from './About'
import App from './App'
import Categories from './Categories'
import Contact from './Contact'
import Recipe from './Recipe';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

function RouterOptions() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="categories" element={<Categories />} />
                <Route path="recipe" element={<Recipe />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
            </Routes>
            <Link to="categories">Catergories</Link>
            <Link to="recipe">Recipe</Link>
            <Link to="contact">Contact</Link>
            <Link to="about">About</Link>
        </Router>
    )
}

export default RouterOptions
