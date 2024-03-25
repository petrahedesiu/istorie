import './App.css';
import ImageScrollAfrica from "./ImgScroll/ImgAfrica";
import DiasFirst from "./photos/dias first.gif";
import DiasAll from "./photos/africa-all.jpg";
import Henry from "./photos/henry.webp";
import React, {useEffect, useRef} from "react";
import SceneInitStatic from "./Scenes/SceneInitStatic";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader";
import "./Navbar.css";
import MagellanTrip from "./photos/magellan trip.jpg";

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
    paddingLeft: window.innerWidth / 7.5,
    paddingTop: 0
}
const mySubtitle3 = {
    color: '#f9f9f9',
    fontSize: 50,
    fontFamily: "Playfair Display",
    textAlign: 'left',
    paddingLeft: window.innerWidth / 9,
    paddingTop: 0
}
const mySubtitle4 = {
    color: '#f9f9f9',
    fontSize: 50,
    fontFamily: "Playfair Display",
    textAlign: 'left',
    paddingLeft: 70,
}
const myText1 = {
    color: '#f9f9f9',
    paddingTop: 10,
    paddingBottom: 40,
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
    paddingLeft: window.innerWidth / 15,
    marginRight: window.innerWidth / 14,
    fontSize: 18,
    fontFamily: "Playfair Display",
    textAlign: 'justify',
    display: 'inline-block'
}
const myText4 = {
    color: '#f9f9f9',
    paddingTop: 10,
    paddingBottom: 0,
    paddingLeft: 70,
    marginRight: window.innerWidth / 15,
    fontSize: 18,
    fontFamily: "Playfair Display",
    textAlign: 'left',
}
const myDescription = {
    color: '#b3b9bd',
    fontSize: 15,
    fontFamily: "Playfair Display",
    textAlign: 'left',
    paddingLeft: 100,
    paddingBottom: 100
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
        const test = new SceneInitStatic('myThreeJsCanvas2');
        test.initialize();
        test.animate();

        let loadedModel;
        const glftLoader = new GLTFLoader();
        glftLoader.load('/gama/scene.gltf', (gltfScene) => {
            loadedModel = gltfScene;
            console.log(loadedModel);

            gltfScene.scene.rotation.y = Math.PI / 8;
            gltfScene.scene.position.y = -0.01;
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
                <p style = {myTitle}>Coasta vestică a Africii</p>
            </div>
            <ImageScrollAfrica/>
            <p style = {{padding: 0.34 * window.innerWidth}}> </p>

            <div ref={ref2}>
                <div className="container">
                    <div>
                        <p style = {mySubtitle2}> Henric Navigatorul </p>
                        <p style = {myText2}>
                            Prinţul Henric a jucat un rol considerabil în istoria Portugaliei. În cei 45 de ani de activitate el a pregătit
                            numeroşi navigatori experimentaţi. Flota comercială portugheză s-a situat pe primul loc din lume, descoperind
                            arhipelagurile Azore și Canare, ajungând până în Golful Guineei. Expediţiile pe care le-a trimis prinţul au ocupat
                            şi au anexat la Portugalia patru mari arhipelaguri din partea estică a Oceanului Atlantic. Pe timpul lui Henric,
                            ţărmul vestic al Africii a fost explorat şi însemnat pe hărţi pe o distanţă de circa 3.500 de km, de la strâmtoarea
                            Gibraltar până în Guineea portugheză de astăzi, unde ţărmul coteşte spre sud-est, indicând parcă drumul către India.
                        </p>
                    </div>
                    <img src = {Henry} alt = "First trip" style = {{height: window.innerHeight / 2}}/>
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
            <div ref={ref3}>
                <p style = {mySubtitle1}> Călătoriile lui Bartolomeu Dias </p>
                <p style = {myText1}>
                    Diaz primește o însărcinare secretă a regelui portughez Ioan al II-lea ca să continue cercetarea lui
                    Diogo Cão de a găsi punctul sudic al continentului african și pe cât posibil drumul spre India.
                    Cele două călătorii ale lui Bartolomeu Dias au fost cruciale pentru dezvoltarea cunoașterii geografice a lumii
                    și au deschis noi rute comerciale pentru portughezi. Descoperirea rutei către India prin Capul Bunei Speranțe
                    a dus la dezvoltarea comerțului cu mirodenii și alte bunuri prețioase din Asia și a transformat Portugalia într-unul
                    dintre cele mai importante imperii comerciale ale timpului.
                </p>
            </div>
            <p style={{paddingTop: 100}}></p>
            <div ref={ref4}>
                <div className="container">
                    <div>
                        <p style = {mySubtitle2}> Capul Bunei Speranțe </p>
                        <p style = {myText2}>
                            În 1487, Bartolomeu Dias a condus o expediție portugheză cu trei corăbii pentru a găsi o rută maritimă către India.
                            Flota navighează în lungul coastei de vest africane lăsând în urmă vărsarea fluviului Congo, ajungând
                            la ultima regiune cunoscută deja de portughezi, Namibia de astăzi, trece prin Golful Balenei, spre sud
                            traversând Golfo de São Tomé (azi Spencer Bay) ajungând la Angra Pequena (Golful Lüderitz), urmează Cabo
                            da Volta de unde sunt întâmpinați de furtuni puternice și fiare marine. În cele din urmă, ajung la Capul
                            Bunei Speranțe, sudul extrem al continentului african. Acest lucru a dovedit că se poate ajunge la Oceanul
                            Indian navigând în jurul capului sudic al Africii, deschizând astfel o rută importantă pentru comerțul cu
                            India și Asia.
                        </p>
                    </div>
                    <img src = {DiasFirst} alt = "First trip" style = {{height: window.innerHeight + 20, paddingRight: 0}}/>
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
                    <img src = {DiasAll} alt = "Africa all trips" style = {{width: window.innerWidth / 2, paddingLeft: 30}}/>
                    <div>
                        <p style = {mySubtitle3}> Continuarea explorării </p>
                        <p style = {myText2}>
                            După această călătorie, Diaz participă ca sfătuitor la întocmirea hărților și echiparea corăbiilor.
                            Diaz speră la o a doua călătorie care să îl duca, de acea dată, până în Indii. Visul i-a fost destrămat
                            9 ani mai târziu, în 1497, atunci când un alt portughez, Vasco da Gama, era numit de casa regală portugheză
                            să conducă urmatoarea expeditie. Folosind harțile realizate de Diaz, da Gama atingea la 20 mai 1498 Calicut, India.
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
            <p style={{paddingTop: 40}}></p>
            <span style={mySubtitle1}>Vasco da Gama</span>
            <canvas id="myThreeJsCanvas2" />
        </div>
    );
}
