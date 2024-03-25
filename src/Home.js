import './App.css';
import ImageScrollHome from "./ImgScroll/ImgH";
import React, {useEffect, useRef} from "react";
import Timeline from "./photos/Timeline.jpg";
import SceneInit from "./Scenes/SceneInitStatic";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader";
import "./Navbar.css";

const myTitle = {
    color: '#f9f9f9',
    paddingTop: 170,
    paddingBottom: 170,
    fontSize: 75,
    fontFamily: "Playfair Display",
    textAlign: 'center',
}
const mySubtitle1 = {
    color: '#f9f9f9',
    fontSize: 40,
    fontFamily: "Playfair Display",
    paddingLeft: window.innerWidth / 4 - 40,
    paddingRight: window.innerWidth / 4 - 40,
    textAlign: 'center',
    fontStyle: 'italic',
    paddingBottom: 0
}
const mySubtitle2 = {
    color: '#f9f9f9',
    fontSize: 40,
    fontFamily: "Playfair Display",
    textAlign: 'left',
    paddingLeft: 120,
    paddingTop: 100,
    paddingBottom: 10
}
const myText1 = {
    color: '#f9f9f9',
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: window.innerWidth / 5 ,
    paddingRight: window.innerWidth / 5,
    fontSize: 20,
    fontFamily: "Playfair Display",
    textAlign: 'center'
}
const myText2 = {
    color: '#f9f9f9',
    paddingTop: 10,
    paddingBottom: 150,
    paddingLeft: 120,
    fontSize: 20,
    fontFamily: "Playfair Display",
    textAlign: 'left',
}
const myDescription1 = {
    color: '#b3b9bd',
    fontSize: 15,
    fontFamily: "Playfair Display",
    textAlign: 'left',
    paddingLeft: 100,
    paddingBottom: 100
}
const myDescription2 = {
    color: '#b3b9bd',
    fontSize: 15,
    fontFamily: "Playfair Display",
    textAlign: 'right',
    paddingRight: 350,
}

function RefFunction (ref)
{
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Element is visible
                    entry.target.classList.add('visible');
                }
            },
            {
                root: null,
                threshold: 0.2,
                // rootMargin: '0px 0px -0% 0px'
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);
}

export default function MyApp() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    RefFunction(ref1);
    RefFunction(ref2);
    RefFunction(ref3);

    return (
        <div className="App">
            <div ref={ref1}>
                <p style = {myTitle}> Marile descoperiri geografice </p>
            </div>
            {/*<img src = {BoatImage} alt = "boat" />*/}
            <ImageScrollHome />
            <p style = {{padding: 0.4 * window.innerWidth}}> </p>
            <div ref={ref2}>
                <p style = {mySubtitle1}>„Omul nu poate descoperi noi oceane, câtă vreme nu are curajul de a pierde din vedere ţărmul”</p>
                <p style = {myDescription2}>-Andre Gide</p>
                <p style = {myText1}>
                    De-a lungul istoriei, oamenii au călătorit cu scopul de a descoperi universul înconjurator. Fie că
                    este vorba de înaintașii noștri care și-au lăsat în urma locurile de baștină, ori de alți viitori
                    exploratori, fie că e vorba de călătoriile cu caracter militar, economic sau religios, cu toții au
                    fost stăpâniți de aceeași curiozitate insațibilă de a cerceta și de a trasa harta uni tărâm necunoscut.
                </p>
            </div>
            <img src = {Timeline} alt = "Timeline" style = {{height: window.innerHeight , marginRight: 0}}/>
            <div ref={ref3}>
                <p style = {mySubtitle2}> Despre realizarea proiectului</p>
                <p style = {myText2}>
                    <span style ={{fontStyle: "italic"}}> Realizator: </span> Petra Hedeșiu<br/>
                    <span style ={{fontStyle: "italic"}}> Școala: </span> Colegiul Național „Emil Racoviță” <br/>
                    <span style ={{fontStyle: "italic"}}> Clasa: </span> 10B <br/>
                    <span style ={{fontStyle: "italic"}}>Profesori coordonatori: </span><br/>
                    - prof. Anca Lăpuștea (informatică)<br/>
                    - prof. Maria Riţiu (istorie) <br/>
                    <p style ={{fontStyle: "italic"}}> Bibliografie: </p>
                    - Samuel Goldenberg și Sabin Belu: Epoca marilor descoperiri geografice - Editura Științifica - 1971<br/>
                    - Jean Favier: Marile descoperiri de la Alexandru Macedon la Magellan - Editura Artemis - 1991 <br/>
                    - Francisco Morales Padron: Istoria descoperirii si cuceririi Americii - Editura Științifica - 1979<br/>
                    - Robin-Hanbury-Tenison: 70 de călătorii temerare de-a lungul istoriei - Editura Aquila - 2007  <br/>
                    - https://historia.ro<br/>
                    - https://momenteistorice.ro<br/>
                    - https://www.agerpres.ro/documentare<br/>
                </p>
            </div>
        </div>
    );
}
