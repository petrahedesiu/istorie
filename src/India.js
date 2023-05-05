import './App.css';
import ImageScrollMagellan from "./ImgScroll/Img";
import DaGamaMap from "./photos/Map-voyage-Vasco-da-Gama.webp";
import DaGama from "./photos/vasco-da-gama-lands-in-calicut.webp";
import ImageOnScrollGama from "./ImgScroll/ImgA";
import DaGamaCalicut from "./photos/calicut.webp";
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

    // useEffect(() => {
    //     const test = new SceneInit('myThreeJsCanvas2');
    //     test.initialize();
    //     test.animate();
    //
    //     let loadedModel;
    //     const gltfLoader = new GLTFLoader();
    //     gltfLoader.load('/gama/scene.gltf', (gltfScene) => {
    //         loadedModel = gltfScene;
    //         console.log(loadedModel);
    //
    //         gltfScene.scene.rotation.y = Math.PI / 8;
    //         gltfScene.scene.position.y = -3;
    //         gltfScene.scene.scale.set(0.01, 0.01, 0.01);
    //         test.scene.add(gltfScene.scene);
    //     });
    //
    //     const animate = () => {
    //         if (loadedModel) {
    //             // loadedModel.scene.rotation.x += 0.01;
    //             loadedModel.scene.rotation.y += 0.01;
    //             // loadedModel.scene.rotation.z += 0.01;
    //         }
    //         requestAnimationFrame(animate);
    //     };
    //     animate();
    // }, []);

    return (
        <div className="App">
            <div ref={ref1}>
                <p style = {myTitle}>Descoperirea Indiei</p>
            </div>
            <ImageOnScrollGama/>

            <p style = {{padding: 0.64 * window.innerWidth}}> </p>
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
                    Urmând această rută, portughezii au ajuns la circa 1000 de kilometri de coastele braziliene înainte ca vânturile
                    sud-vestice să-i împingă înspre Sudul Africii. Pe 7 noiembrie, au ajuns în Portul Sf. Elena, la 200 de kilometri
                    nord de Capul Bunei Speranțe. Trecurseră 13 săptămâni de când exploratorii văzuseră ultima oară uscatul, după ce
                    parcuseseră o distanță de peste 7200 de kilometri de la Capul Verde.<br/><br/>
                </p>
                <div className="container">
                    <img src = {DaGamaMap} alt = "Harta calatorie" style = {{height: window.innerHeight / 1.5, paddingTop: 10, paddingLeft: 70}}/>
                    <p style = {myText2}>
                        Două zile mai târziu, flota lui da Gama a înconjurat Capul Bunei Speranțe și a oprit la Mossel Bay. Nava cu
                        provizii a fost arsă, iar proviziile redistribuite celorlalte trei nave. În ziua de Crăciun, grupul a început
                        călătoria spre nord, de-a lungul coastelor estice ale Africii de Sud. Navigând spre nord împotriva unui curent
                        puternic, grupul lui da Gama a călătorit 2700 de kilometri de-a lungul coastei, iar pe 2 martie 1498 a ajuns în
                        portul Mozambique, primul dintr-un șir de orașe-stat musulmane aflate la extrema sudică a zonei de influență
                        musulmană din Africa de Est. Exploratorii nu au fost primiți bine de Sultan; darurile lor, considerate fără valoare,
                        au fost respinse. Asta se explică prin faptul că, în ciuda investițiilor masive în acea expediție, portughezii
                        subestimaseră calitatea bunurilor de pe piețele din această lume: bumbac, fildeș, aur și perle. Grupul și-a continuat
                        călătoria spre nord, ajungând la Mombassa, unde au fost primiți la fel. Doar liderul din Malindi a fost mai binevoitor
                        față de grupul de europeni, iar în timpul șederii sale acolo, da Gama a recrutat un marinar foarte experimentat – se
                        poate să fie vorba de faimosul marinar arab Ahmen Ibn Majid – care să le arate ruta către India.
                    </p>
                </div>
            </div>
            <br/><br/>
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
        </div>
    );
}
