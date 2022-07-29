import React from 'react'
import './App.css';
import MinorNav from './components/MinorNav';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

import About from './pages/About';
import Articles from './pages/Articles'
import Catalog from './pages/Catalog'
import Featured from './pages/Featured'
import { Route, Routes } from 'react-router-dom';


function App() {
    return (
        <>
            <MinorNav />
            <div>
                <Routes>
                    <Route path='/about' element={<About />} />
                    <Route path='/articles' element={<Articles />} />
                    <Route path='/catalog' element={<Catalog />} />
                    <Route path='/featured' element={<Featured />} />
                    <Route path='/' element={<div>  <NavBar />
                                                    <Footer />
                                                    <BackToTop /></div>} />
                </Routes>
            </div>
            {/* <NavBar />
            <Footer />
            <BackToTop /> */}
        </>
    );
}

export default App
