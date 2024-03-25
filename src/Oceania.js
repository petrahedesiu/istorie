import './App.css';
import ImageScrollCook from "./ImgScroll/ImgOceania";
import JamesCook from "./photos/james cook.jpg";
import CookFirst from "./photos/cook first.gif"
import CookSecond from "./photos/hms endeavour.jpg";
import CookThird from "./photos/hms resolution.jpg";
import CookAll from "./photos/james cook all.webp";
import React, {useEffect, useRef} from "react";
import SceneInit from "./Scenes/SceneInitCook";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader";
import "./Navbar.css";

const myTitle = {
    color: '#f9f9f9',
    paddingTop: 170,
    paddingBottom: 170,
    fontSize: 75,
    fontFamily: "Playfair Display",
    textAlign: 'center'
}
const mySubtitle1 = {
    color: '#f9f9f9',
    fontSize: 50,
    paddingTop: 50,
    fontFamily: "Playfair Display",
    textAlign: 'center'
}
const mySubtitle2 = {
    color: '#f9f9f9',
    fontSize: 50,
    fontFamily: "Playfair Display",
    textAlign: 'left',
    paddingLeft: window.innerWidth / 6,
    paddingTop: 0
}
const mySubtitle3 = {
    color: '#f9f9f9',
    fontSize: 50,
    fontFamily: "Playfair Display",
    textAlign: 'left',
    paddingLeft: window.innerWidth / 6,
    paddingTop: 60
}
const mySubtitle4 = {
    color: '#f9f9f9',
    fontSize: 50,
    fontFamily: "Playfair Display",
    textAlign: 'left',
    paddingLeft: window.innerWidth / 5.5,
    paddingTop: 0
}
const myText1 = {
    color: '#f9f9f9',
    paddingTop: 10,
    paddingBottom: 150,
    paddingLeft: 300,
    paddingRight: 300,
    fontSize: 18,
    fontFamily: "Playfair Display",
    textAlign: 'center'
}
const myText2 = {
    color: '#f9f9f9',
    paddingTop: 10,
    paddingBottom: 0,
    paddingLeft: window.innerWidth / 16,
    marginRight: window.innerWidth / 15,
    fontSize: 18,
    fontFamily: "Playfair Display",
    textAlign: 'justify',
    display: 'inline-block'
}
const myText4 = {
    color: '#f9f9f9',
    paddingTop: 10,
    paddingBottom: 0,
    paddingLeft: 300,
    paddingRight: 300,
    fontSize: 28,
    fontFamily: "Playfair Display",
    textAlign: 'center',
    fontStyle: 'italic'
}
const myDescription = {
    color: '#b3b9bd',
    fontSize: 17,
    fontFamily: "Playfair Display",
    textAlign: 'center',
    paddingRight: 40,
}
const myDescription2 = {
    color: '#b3b9bd',
    fontSize: 17,
    fontFamily: "Playfair Display",
    textAlign: 'right',
    paddingRight: 310,
}
const myDescription3 = {
    color: '#b3b9bd',
    fontSize: 17,
    fontFamily: "Playfair Display",
    textAlign: 'center',
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
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    RefFunction(ref1);
    RefFunction(ref2);
    RefFunction(ref3);
    RefFunction(ref4);
    RefFunction(ref5);
    RefFunction(ref6);

    useEffect(() => {
        const test = new SceneInit('myThreeJsCanvas4');
        test.initialize();
        test.animate();

        let loadedModel;
        const glftLoader = new GLTFLoader();
        glftLoader.load('/henry/scene.gltf', (gltfScene) => {
            loadedModel = gltfScene;
            console.log(loadedModel);

            gltfScene.scene.rotation.y = Math.PI / 8;
            gltfScene.scene.position.x = -1;
            gltfScene.scene.position.y = -10;
            gltfScene.scene.scale.set(0.01, 0.01, 0.01);
            test.scene.add(gltfScene.scene);
        });

        const animate = () => {
            if (loadedModel) {
                // loadedModel.scene.rotation.x += 0.01;
                loadedModel.scene.rotation.y += 0.01;
                // loadedModel.scene.rotation.z += 0.01;
            }
            requestAnimationFrame(animate);
        };
        animate();
    }, []);

    return (
        <div className="App">
            <div ref={ref1}>
                <p style = {myTitle}>Călătoriile din Oceania</p>
            </div>
            <ImageScrollCook/>
            <p style = {{padding: 0.32 * window.innerWidth}}> </p>

            <div ref={ref2}>
                <p style = {myText4}>„Ambiția mă conduce nu doar dincolo de orice teritoriu străbătut de predecesorii mei,
                    ci până într-acolo unde omul poate să ajungă.”</p>
                <p style = {myDescription2}>-James Cook, 30 ianuarie 1774</p>
            </div>

            <p style = {{padding: 40}}> </p>
            <div ref={ref3}>
                <div className="container">
                    <div>
                        <p style = {mySubtitle2}> James Cook </p>
                        <p style = {myText2}>
                            James Cook a fost ales de Societatea Regală Britanică să conducă o expediție pentru a observa trecerea
                            lui Venus pe fața soarelui și pentru a explora Pacificul de Sud în căutarea Terrei Australis Incognita
                            (Teritoriul Necunoscut al Sudului). Cook a navigat cu vasul HMS Endeavour și a ajuns pe coasta de est a
                            Australiei, unde a realizat o serie de cartografieri detaliate ale coastei și a întreprins o serie de
                            studii etnografice asupra populațiilor indigene. El a mai navigat prin Noua Zeelandă, Tahiti și insulele
                            din Pacificul de Sud, înainte de a se întoarce în Anglia în 1771.
                        </p>
                    </div>
                    <img src = {JamesCook} alt = "James Cook" style = {{height: window.innerHeight + 20, paddingRight: 0}}/>
                </div>
            </div>
            <hr
                style={{
                    background: '#b3b9bd',
                    color: '#b3b9bd',
                    borderColor: '#b3b9bd',
                    height: '0.5px',
                }}
            />
            <div ref={ref4}>
                <div className="container">
                    <img src = {CookFirst} alt = "Columb gif" style = {{height: window.innerHeight + 20, paddingLeft: 0}}/>
                    <div>
                        <p style = {mySubtitle3}> Prima călătorie </p>
                        <p style = {myDescription}> (1767-1771) </p>
                        <p style = {myText2}>
                            Plecând la data de 26 august 1768, lui Cook i s-a ordonat să navigheze spre Tahiti pentru a observa mișcarea
                            aștrilor la data de 3 iunie 1769 și pentru a explora Pacificul de Sud în căutarea Terrei Australis Incognita
                            (Teritoriul Necunoscut al Sudului), însă el a petrecut o vreme navigând spre sud prin Madeira spre Rio de Janeiro
                            și apoi în jocul țârmului Americii Latine, până la capul Horn. În cele din urmă, Cook a ancorat în 12 aprilie
                            1769 în golful Matavai din Tahiti. Apoi, Cook a navigat cu vasul HMS Endeavour și
                            a ajuns pe coasta de est a Australiei, unde a realizat o serie de cartografieri detaliate ale coastei
                            și a întreprins o serie de studii etnografice asupra populațiilor indigene. El a mai navigat prin Noua
                            Zeelandă și insulele din Pacificul de Sud, înainte de a se întoarce în Anglia în 1771.
                        </p>
                    </div>
                </div>
            </div>
            <hr
                style={{
                    background: '#b3b9bd',
                    color: '#b3b9bd',
                    borderColor: '#b3b9bd',
                    height: '0.5px',
                    marginLeft: '100px',
                    marginRight: '100px',
                    marginBottom: '3px'
                }}
            />
            <div ref={ref5}>
                <div className="container">
                    <div>
                        <p style = {mySubtitle2}> A doua călătorie </p>
                        <p style = {myDescription3}> (1772-1775) </p>
                        <p style = {myText2}>
                            James Cook a fost trimis într-o a doua expediție pentru a continua explorarea Pacificului de
                            Sud și pentru a căuta o rută maritimă către Asia. El a navigat cu vasele HMS Resolution și HMS
                            Adventure și a explorat insulele Kerguelen, Noua Zeelandă, Tahiti, insulele Tonga și insulele din
                            Pacificul de Sud. El a ajuns la vârful sudic al Americii de Sud și a descoperit insulele Sandwich
                            (astăzi Hawaii). Cook a întreprins, de asemenea, o serie de studii etnografice asupra populațiilor
                            indigene și a încercat să găsească un tratament pentru scorbut, o boală frecventă în rândul marinilor.

                        </p>
                    </div>
                    <img src = {CookSecond} alt = "Cristofer Columb" style = {{width: window.innerWidth/ 2.3, paddingRight: 50, paddingTop: 20}}/>
                </div>
            </div>
            <hr
                style={{
                    background: '#b3b9bd',
                    color: '#b3b9bd',
                    borderColor: '#b3b9bd',
                    height: '0.5px',
                    marginLeft: '100px',
                    marginRight: '100px',
                    marginBottom: '3px'
                }}
            />
            <div ref={ref6}>
                <div className="container">
                    <img src = {CookThird} alt = "Columb gif" style = {{height: window.innerHeight / 2, paddingLeft: 50}}/>
                    <div>
                        <p style = {mySubtitle4}> A treia călătorie </p>
                        <p style = {myDescription}> (1776-1779) </p>
                        <p style = {myText2}>
                            James Cook a fost trimis într-o a treia expediție pentru a căuta un pasaj maritim către Asia prin
                            Oceanul de Nord și pentru a continua explorarea Pacificului de Sud. El a navigat cu vasele HMS
                            Resolution și HMS Discovery și a ajuns la coasta de vest a Americii de Nord, în Alaska și a continuat
                            spre est prin Canalul Bering, înainte de a se întoarce în Pacificul de Sud. El a explorat insulele
                            Hawaii și Noua Caledonie, înainte de a fi ucis într-un conflict cu populația indigenă de pe insula Hawaii.
                        </p>
                    </div>
                </div>
            </div>
            <hr
                style={{
                    background: '#b3b9bd',
                    color: '#b3b9bd',
                    borderColor: '#b3b9bd',
                    height: '0.5px',
                    marginLeft: '100px',
                    marginRight: '100px',
                    marginBottom: '15px'
                }}
            />
            <img src = {CookAll} alt = "Columb gif" style = {{height: window.innerHeight / 1.4, paddingLeft: 50}}/>
            <hr
                style={{
                    background: '#b3b9bd',
                    color: '#b3b9bd',
                    borderColor: '#b3b9bd',
                    height: '0.5px',
                    marginLeft: '100px',
                    marginRight: '100px',
                    marginBottom: '3px'
                }}
            />
            <p style={{paddingTop: 40}}></p>
            <span style={mySubtitle1}>Vas din flota HMS a Marii Britanii</span>
            <canvas id="myThreeJsCanvas4" />
        </div>
    );
}
