import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="/"/>
                <Route element={<Services/>} path="/services"/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;


