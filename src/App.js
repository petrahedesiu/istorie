import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import Inconjor from "./Magellan";
import Teste from "./Teste";
import DaGama from "./India";
import America from "./America";
import Oceania from "./Oceania";
import Africa from "./Africa";
import "./Navbar.css";
import AnimatedCursor from "react-animated-cursor";
import {PlaySound} from "./Music";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Router>
            <PlaySound/>
            <AnimatedCursor
                innerSize={10}
                outerSize={20}
                color='100, 100, 100'
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={3}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link'
                ]}
            />
            <header className="header">
                <h1 className="logo"><a href="/">Marile descoperiri geografice</a></h1>
                <ul className="main-nav">
                    <li><a href="/">Acasă</a></li>
                    <li><a href="/africa">Africa</a></li>
                    <li><a href="/india">India</a></li>
                    <li><a href="/america">America</a></li>
                    <li><a href="/inconjorul_lumii">Înconjurul lumii</a></li>
                    <li><a href="/oceania">Oceania</a></li>
                    <li><a href="/teste">Teste</a></li>
                </ul>
            </header>
            <Route path="/" exact component={Home} />
            <Route path="/africa" component={Africa} />
            <Route path="/india" component={DaGama} />
            <Route path="/america" component={America} />
            <Route path="/oceania" component={Oceania} />
            <Route path="/inconjorul_lumii" component={Inconjor} />
            <Route path="/teste" component={Teste} />
        </Router>
    );
}
export default App;
