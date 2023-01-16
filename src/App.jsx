import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavOne from './components/NavOne';
import NavTwo from "./components/NavTwo";
import NavThree from './components/NavThree';
import ErrorPage from './components/ErrorPage';



const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<NavOne />} />
                <Route path="/navtwo" element={<NavTwo />} />
                <Route path="/navthree" element={<NavThree />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
    )
}

export default App