import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/services/Services";
import Workers from "./pages/services/Workers";
import Foods from "./pages/foods/Foods";
import Booking from "./pages/book/Booking";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="/"/>
                <Route element={<Booking/>} path="/book"/>
                    <Route element={<Services/>} path="/services"/>
                    <Route element={<Workers/>} path="/services/workers/:id"/>
                    <Route element={<Foods/>} path="/foods"/>
                </Routes>
                    </BrowserRouter>
                    );
                }

                    export default App;


