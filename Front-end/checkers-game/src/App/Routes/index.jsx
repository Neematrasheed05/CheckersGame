import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../Components/HomePage';
import ContactForm from '../Components/Register'
import CheckersBoard from '../Components/Board';
import MenuPage from '../Components/MenuPage';
function AllRoutes(props) {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/register" element={<ContactForm/>}/>
                <Route path='/board' element={<CheckersBoard/>}/>
                <Route path='/menu' element={<MenuPage/>}/>
            </Routes>
            
            </BrowserRouter>
            
        </div>
    );
}

export default AllRoutes;