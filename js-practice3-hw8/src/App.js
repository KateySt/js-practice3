import React from 'react';
import "./App.css"
import {BrowserRouter, Navigate, Route, Routes,} from "react-router-dom";
import Navigation from "./components/navigation";
import NotFoundPage from "./routing/modules/errors";
import UsersModule from "./routing/modules/users/UsersModule";
import AlbumsModule from "./routing/modules/alboms/AlbumsModule";

const App = () => {
    return (
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path="/" element={<div>Home</div>}/>
                <Route path="/users/*" element={<UsersModule/>}/>
                <Route path="/albums/*" element={<AlbumsModule/>}/>
                <Route path='*' element={<Navigate to='/not-found' replace/>}/>
                <Route path='/not-found' element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
