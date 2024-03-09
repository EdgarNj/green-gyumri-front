import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/services/Services";
import Workers from "./pages/services/Workers";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="/"/>
                <Route element={<Services/>} path="/services"/>
                <Route element={<Workers/>} path="/services/workers/:id"/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;


