import './App.css';
import ImageScrollMagellan from "./ImgScroll/Img";
import DaGamaMap from "./photos/Map-voyage-Vasco-da-Gama.webp";
import DaGama from "./photos/vasco-da-gama-lands-in-calicut.webp";
import ImageOnScrollGama from "./ImgScroll/ImgIndia";
import DaGamaCalicut from "./photos/calicut.webp";
import React, {useEffect, useRef} from "react";
import SceneInit from "./Scenes/SceneInitIndia";
import SceneInitStatic from "./Scenes/SceneInitStatic";
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
    paddingLeft: window.innerWidth / 7.5,
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
    textAlign: 'justify',
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

    useEffect(() => {
        const test = new SceneInit('myThreeJsCanvas3');
        test.initialize();
        test.animate();

        let loadedModel;
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('/carrack/scene.gltf', (gltfScene) => {
            loadedModel = gltfScene;
            console.log(loadedModel);

            gltfScene.scene.rotation.y = Math.PI / 8;
            gltfScene.scene.position.y = 0.01;
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
                <p style = {myTitle}>Descoperirea Indiei</p>
            </div>
            <ImageOnScrollGama/>

            <p style = {{padding: 0.33 * window.innerWidth}}> </p>
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
                <p style = {mySubtitle4}>Înconjorul Africii</p>
                <p style = {myText4}>
                    Din cauza unui buget redus, Da Gama pornește în călătorie alături de doar 150 de oameni, însă printre
                    ei se aflau printre cei mai experimentați exploratori și lingviști ai vremii.<br/>
                    Vasco da Gama a părăsit Lisabona la 8 iulie 1497. Bartolomeo Diaz a însoțit grupul până în Insulele Canare, iar
                    apoi până în Insulele Capului Verde. Pentru următoarea etapă a călătoriei, Diaz i-a sfătuit să meargă pe o rută
                    neobișnuită, pe direcția vest-sud vest, înspre largul Atlanticului, pentru a evita zona calmurilor din Golful Guineei.
                    <br/><br/>
                </p>
                <div className="container">
                    <img src = {DaGamaMap} alt = "Harta calatorie" style = {{height: window.innerHeight / 1.7, paddingTop: 10, paddingLeft: 70}}/>
                    <p style = {myText2}>
                        Ruta traseului urmat: <br/>
                        ◦ A plecat din Lisabona, Portugalia, la 8 iulie 1497 <br/>
                        ◦ A navigat pe coasta Africii, trecând de Capul Bunei Speranțe și oprește la: <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Insulele Cape Verde <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Insula Sf. Elena <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Golful Aden <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Mombasa, Kenia, pe 7 aprilie 1498, <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Malindi, Kenia <br/>
                        ◦ În urma unor negocieri dificile și a unui incident de violență, da Gama a reușit să obțină acordul de a deschide un port comercial în orașul Calicut, India.<br/>
                        ◦ A ajuns în Calicut pe 20 mai 1498, stabilind astfel prima rută maritimă directă dintre Europa și India.<br/>
                        ◦ După trei luni în India, Da Gama s-a întors pe coasta Africii pentru a ajunge din nou în Portugalia.<br/>
                        ◦ A ajuns în Lisabona pe 29 august 1499, încheind astfel o călătorie care a durat aproape doi ani.<br/>
                    </p>
                </div>
            </div>
            <br/><br/><br/><br/>
            <img src = {DaGamaCalicut} alt = "Calicut" style = {{width: window.innerWidth / 1.3}}/>
            <hr
                style={{
                    background: '#b3b9bd',
                    color: '#b3b9bd',
                    borderColor: '#b3b9bd',
                    height: '0.5px',
                    marginLeft: '70px',
                    marginRight: '70px',
                    marginBottom: '3px'
                }}
            />
            <h1 style={myDescription}>Tablou din portul Calicut, India</h1>
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
            <span style={mySubtitle1}>Vasco Da Gama cu un vas portughez</span>
            <div className="container">
                <canvas id="myThreeJsCanvas2" />
                <canvas id="myThreeJsCanvas3" />
            </div>
        </div>
    );
}
