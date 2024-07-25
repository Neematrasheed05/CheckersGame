import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../Components';
import ContactForm from '../Components/Register'

function AllRoutes(props) {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/register" element={<ContactForm/>}/>
            </Routes>
            
            </BrowserRouter>
            
        </div>
    );
}

export default AllRoutes;