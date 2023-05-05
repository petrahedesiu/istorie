import './App.css';
import ImageScrollMagellan from "./Img";
import MagellanGif from "./magellan.gif";
import FernandoMagellan from "./Fernando Magellan.jpg";
import DaGamaMap from "./Map-voyage-Vasco-da-Gama.webp";
import DaGama from "./vasco-da-gama-lands-in-calicut.webp";
import React, {useEffect, useRef} from "react";
import SceneInit from "./SceneInit";
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
    fontFamily: "Playfair Display",
    textAlign: 'center'
}
const mySubtitle2 = {
    color: '#f9f9f9',
    fontSize: 50,
    fontFamily: "Playfair Display",
    textAlign: 'left',
    paddingLeft: window.innerWidth / 6,
    paddingTop: 60
}
const mySubtitle3 = {
    color: '#f9f9f9',
    fontSize: 50,
    fontFamily: "Playfair Display",
    textAlign: 'left',
    paddingLeft: window.innerWidth / 7.5,
    paddingTop: 60
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
    paddingBottom: 150,
    paddingLeft: window.innerWidth / 16,
    marginRight: window.innerWidth / 15,
    fontSize: 18,
    fontFamily: "Playfair Display",
    textAlign: 'center',
    display: 'inline-block'
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
    RefFunction(ref1);
    RefFunction(ref2);
    RefFunction(ref3);
    RefFunction(ref4);

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
                <p style = {myTitle}>Înconjorul lumii</p>
            </div>
            {/*<p style = {{padding: 250}}></p>*/}
            {/*<img src = {BoatImage} alt = "boat" />*/}
            <ImageScrollMagellan/>

            <p style = {{padding: 0.4 * window.innerWidth}}> </p>
            <div ref={ref2}>
                <p style = {mySubtitle1}> Drumul estului: Vasco da Gama </p>
                <p style = {myText1}>
                    La mijlocul secolului al XV-lea, Portugalia era cea mai mare putere maritimă din Europa, datorită moștenirii
                    Prințului Henric Navigatorul, ce dorea să găsească o rută maritimă către India, obținând astfel pentru țara sa
                    acces la foarte profitabilul comerț cu mirodenii. Cu toate acestea, sudul extrem al continentului african
                    a rămas necunosut europenilor, iar visul Prințului nu s-a împlinit niciodată. Abia în 1487 Bartolomeo Diaz a
                    început călătoria ce-i va duce pe portughezi în sudul extrem al Africii. Înconjurând Capul Bunei Speranțe, Diaz
                    a demonstrat că exista o legătură între Oceanul Atlantic și cel Indian (geografii vremii susținând exact contrariul),
                    și astfel a renăscut ideea că ar putea fi descoperită o rută maritimă către India.
                </p>
            </div>
            <div ref={ref3}>
                <div className="container">
                    <img src = {DaGamaMap} alt = "" style = {{height: window.innerHeight / 1.5, paddingLeft: 30}}/>
                    <div>
                        <p style = {mySubtitle3}>Înconjorul Africii</p>
                        <p style = {myText2}>
                            Din cauza unui buget redus, Da Gama pornește în c
                            <br/><br/>
                            Datorită călătoriei parcurse de Da Gama, o jumatate a Pământului devenise deja cunoscută, iar existența
                            unei rute între Europa și Asia a fost demonstrată. Călătoria lui Da Gama a reprezentat o realizare epocală,
                            deși acesta nu a reușit să rămână în conștiința omenirii ca o figura eroica, fapt cauzat de violența, suspiciunea
                            și comportamentul lui lipsit de diplomație ce dau naștere unei relații tensionate dintre Europa și Africa de la bun început.
                        </p>
                    </div>

                </div>
            </div>
            <div ref={ref4}>
                <div className="container">
                    <div>
                        <p style = {mySubtitle2}>Primul contact cu India</p>
                        <p style = {myText2}>
                            Datorită unui muson, portughezii reușesc să ajungă în India în 23 de zile, ancorând în ziua de 20 mai la Calicut,
                            cel mai important centru pentru comerțul cu piper de pe coasta Malabarului. Aici, portughezii plini de încredere au
                            fost convinși că întălniseră populația creștină mult căutată, rugându-se într-un templu hindus. Lispsa diplomației
                            lui Da Gama se agravează pe zi ce trece, însă acesta reușește să părăsească portul Calicut pe 29 august, luând cu
                            sine mostre de condimente si cunoștințe despre noua lume descoperită. Apoi, din Africa, pornește
                            spre casă la 11 ianuarie 1499, înconjurând Capul Bunei Speranțe pe 20 martie și ajunge în insula Santiago în doar
                            27 de zile, loc în care Paulo se îmbolnăvește și mai târziu moare. Între timp Coelho navigheaza direct spre Lisabona,
                            unde ajunge în iulie 1499. În total, 55 de oameni murind în călătoria de întoarcere acasă.
                            <br/><br/>
                            Datorită călătoriei parcurse de Da Gama, o jumatate a Pământului devenise deja cunoscută, iar existența
                            unei rute între Europa și Asia a fost demonstrată. Călătoria lui Da Gama a reprezentat o realizare epocală,
                            deși acesta nu a reușit să rămână în conștiința omenirii ca o figura eroica, fapt cauzat de violența, suspiciunea
                            și comportamentul lui lipsit de diplomație ce dau naștere unei relații tensionate dintre Europa și Africa de la bun început.
                        </p>
                    </div>
                    <img src = {DaGama} alt = "" style = {{height: window.innerHeight + 20, paddingRight: 0}}/>
                </div>
            </div>
            <canvas id="myThreeJsCanvas" />
        </div>
    );
}
