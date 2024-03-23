import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/services/Services";
import Workers from "./pages/services/Workers";
import Foods from "./pages/foods/Foods";
import Booking from "./pages/book/Booking";
import NotFound from "./pages/NotFound";
import BookConfirm from "./pages/book/BookConfirm";
import Places from "./pages/places/Places";
import SinglePlace from "./pages/places/SinglePlace";
import BookStatus from "./pages/book/BookStatus";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="/"/>
                <Route element={<Booking/>} path="/book"/>
                <Route element={<BookConfirm/>} path="/book/confirm"/>

                <Route element={<BookStatus/>} path="/book/success"/>
                <Route element={<BookStatus/>} path="/book/declined"/>

                <Route element={<Services/>} path="/services"/>
                <Route element={<Workers/>} path="/services/workers/:id"/>
                <Route element={<Foods/>} path="/foods"/>
                <Route element={<Places/>} path="/places"/>
                <Route element={<SinglePlace/>} path="/places/:id"/>

                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;


