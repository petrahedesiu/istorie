import './App.css';
import ImageScrollColumb from "./ImgScroll/ImgC";
import MagellanGif from "./photos/magellan.gif";
import FernandoMagellan from "./photos/Fernando Magellan.jpg";
import MagellanTrip from "./photos/magellan trip.jpg";
import React, {useEffect, useRef} from "react";
import SceneInit from "./Scenes/SceneInit";
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
    paddingLeft: window.innerWidth / 9,
    paddingTop: 60
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
        const test = new SceneInit('myThreeJsCanvas');
        test.initialize();
        test.animate();

        let loadedModel;
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('/galleon/scene.gltf', (gltfScene) => {
            loadedModel = gltfScene;
            console.log(loadedModel);

            gltfScene.scene.rotation.y = Math.PI / 8;
            gltfScene.scene.position.y = -3;
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
                <p style = {myTitle}>Descoperirea Americii</p>
            </div>
            <ImageScrollColumb/>
            <p style = {{padding: 0.37 * window.innerWidth}}> </p>

            <div ref={ref2}>
                <p style = {mySubtitle1}> Marea călatorie în jurul lumii </p>
                <p style = {myText1}>
                    Fernando Magellan ramane cunoscut in istorie ca fiind primul european care a navigat in apele Oceanului
                    Pacific, cel care a facut inconjurul lumii si primul care a gasit o cale de acces din Atlantic catre Pacific,
                    prin stramtoarea Tarii de Foc. Convins ca exista o trecatoare in America de Sud si inspirat de Cristofor Columb,
                    exploratorul portughez ii prezinta regelui Spaniei, Carol al V-lea, planul de a ajunge in Insulele Mirodeniilor.
                    Pe 10 august 1519, Fernando Magellan porneste in calatoria vietii sale si ultima, de altfel. Exploratorul pleaca
                    din Sevilla, cu 5 corabii si 270 de oameni la bordul acestora. Flota expeditiei era compusa din: Trinidad, San
                    Antonio, Concepcion, Victoria si Santiago.
                </p>
            </div>
            <img src = {MagellanGif} alt = "Magellan Gif" style = {{width: 1000}}/>
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
            <h1 style={myDescription}>Traseul urmat de Fernando Magellan</h1>
            <div ref={ref3}>
                <div className="container">
                    <div>
                        <p style = {mySubtitle2}> Fernando Magellan </p>
                        <p style = {myText2}>
                            Fernando Magellan știa că insulele cu mirodenii se găsesc în jumătatea de glob care revenea coroanei Spaniei,
                            prin tratatul de la Tordesillas prin care castilienii și portughezii își împărțiseră lumea în 1494. Fernando
                            Magellan era însă convins că poate ajunge și prin vest la insulele cu mirodenii – Insulele Spice – de care se
                            apropiase deja în timpul călătoriei la Malacca. Do­rința sa de a ajunge prin vest la insulele cu mirodenii a
                            fost susținută de Coroana Spaniolă. Acest impuls, pare să fi fost motorul ocolului Pământului, care nu făcea totuși
                            parte din planul inițial. <br/><br/>
                            Pe 20 septembrie 1519 Fernando Magellan și flota sa au plecat în expediția care avea să facă istorie. Aceștia au navigat
                            prin Oceanul Atlantic, spre Patagonia, trecând prin Strâmtoarea Tuturor Sfinților. Această strâmtoare îi poartă numele,
                            numindu-se Strâmtoarea Magellan.<br/><br/>
                            Surpriza a fost găsirea unui „ocean gol”, pe care el l-a numit Pacific. Asta pentru că erau ape liniștite în timpul
                            traversării din Țara de Foc până la Insulele Mariane, și apoi, la viitoarele Filipine. Această călătorie a durat trei
                            luni și douăzeci de zile. La 16 martie 1521, Magellan a ajuns în Insulele Filipine, devenind astfel primul european care
                            a pășit în arhipelag.
                        </p>
                    </div>
                    <img src = {FernandoMagellan} alt = "Fernando Magellan" style = {{height: window.innerHeight + 20, paddingRight: 0}}/>
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
                    <img src = {MagellanTrip} alt = "Fernando Magellan" style = {{height: window.innerHeight + 20, paddingLeft: 0}}/>
                    <div>
                        <p style = {mySubtitle3}> Pacificul dinaintea morții </p>
                        <p style = {myText2}>
                            După aproape 100 de zile pe mare, mulți dintre marinari au murit de scorbut și de foame. După un prim popas,
                            în martie 1521, pe insula Guamul aflată în arhipelagul Marianelor, au plecat către Filipine, unde spaniolii
                            au oficiat prima liturghie. Au ancorat apoi pe țărmul insulei Cebu, unde, datorită slujitorului personal al
                            lui Magellan, Enrique, membri echipajului s-au putut înțelege cu băștinașii. Se spune că regele Rajah Humabon
                            i-a plăcut atât de mult pe spanioli încât el și poporul lui s-au convertit la creștinism. Supunerea de bunăvoie
                            și convertirea la creștinism au încercat-o și în cazul locuitorilor de pe insula Mactan. Lapu-Lapu, regele insulei
                            filipineze, a refuzat, iar Magellan și echipajul lui, mult prea încrezători, i-au atacat. Calculele au fost greșite,
                            spaniolii fiind depășiți numeric. Lovit de o săgeată din bambus otrăvită, Fernando Magellan moare pe 27 aprilie 1521.
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
            <span style={mySubtitle1}>Vasul Trinidad</span>
            <canvas id="myThreeJsCanvas" />
        </div>
    );
}
