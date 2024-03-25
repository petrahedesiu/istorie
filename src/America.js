import './App.css';
import ImageScrollColumb from "./ImgScroll/ImgC";
import Columbus from "./photos/Christopher_Columbus.jpg";
import ColumbusTrip from "./photos/columbusgif.gif";
import ColumbusMap from "./photos/columb map bck.png"
import ColumbusThird from "./photos/columbus third.jpg";
import ColumbusDebarcare from "./photos/columbus debarcare.jpg";
import ColumbusAll from "./photos/columbus-all-voyages.jpg";
import AmerigoAll from "./photos/amerigo vespucci.jpg";
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
    paddingLeft: window.innerWidth / 7.5,
    paddingTop: 0
}
const mySubtitle3 = {
    color: '#f9f9f9',
    fontSize: 50,
    fontFamily: "Playfair Display",
    textAlign: 'left',
    paddingLeft: window.innerWidth / 8,
    paddingTop: 0
}
const mySubtitle4 = {
    color: '#f9f9f9',
    fontSize: 50,
    fontFamily: "Playfair Display",
    textAlign: 'left',
    paddingLeft: window.innerWidth / 5.5,
    paddingTop: 0
}
const mySubtitle5 = {
    color: '#f9f9f9',
    paddingTop: 10,
    paddingBottom: 0,
    paddingLeft: 70,
    paddingRight: 70,
    fontSize: 30,
    fontFamily: "Playfair Display",
    textAlign: 'center',
}
const myText1 = {
    color: '#f9f9f9',
    paddingTop: 10,
    paddingBottom: 10,
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
    fontSize: 22,
    fontFamily: "Playfair Display",
    textAlign: 'center',
    fontStyle: 'italic'
}
const myText5 = {
    color: '#f9f9f9',
    paddingTop: 10,
    paddingBottom: 0,
    paddingLeft: 80,
    paddingRight: 80,
    fontSize: 22,
    fontFamily: "Playfair Display",
    textAlign: 'justify',
    display: 'inline-block'
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
    textAlign: 'center',
    paddingRight: 120,
}
const myDescription3 = {
    color: '#b3b9bd',
    fontSize: 17,
    fontFamily: "Playfair Display",
    textAlign: 'center',
    paddingLeft: 400,
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
    const ref7 = useRef(null);
    const ref8 = useRef(null);
    RefFunction(ref1);
    RefFunction(ref2);
    RefFunction(ref3);
    RefFunction(ref4);
    RefFunction(ref5);
    RefFunction(ref6);
    RefFunction(ref7);
    RefFunction(ref8);

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
                <p style = {myText4}>„Înălțimea Voastră...s-a gândit să mă trimită pe mine, Cristofor Columb, spre tărâmurile
                    Indiei... și mi-a poruncit să nu călătoresc pe uscat în drumul meu spre est, așa cum se obișnuiește, ci să
                    mă duc prin vest pe unde, până în ziua de azi, după câte știm, nimeni nu a mai călcat.”</p>
                <p style = {myDescription2}>-Cristofor Columb, porlog la jurnal de bord, 1492</p>
            </div>
            <p style={{paddingTop: 70}}></p>
            <div ref={ref3}>
                <div className="container">
                    <div>
                        <p style = {mySubtitle2}> Cristofor Columb </p>
                        <p style = {myText2}>
                            Cristofor Columb (1451-1506), născut la Genova, a fost un navigator italiano-spaniol. În 1478 s-a stabili
                            în Portugalia, iar între 1482-1484 a făcut mai multe călătorii pe coastele Guineei, aflându-se în serviciul
                            Portugaliei. A navigat spre vest, pe Oceanul Atlantic, în căutarea unei rute spre India, dar în data de 12
                            octombrie 1492, navigatorul genovez Cristofor Columb a descoperit, întâmplător, America, ajungând în dreptul
                            actualelor insule Bahamas. Deşi rezultatul explorărilor sale avea să reprezinte un punct de cotitură
                            pentru întreaga istorie a umanităţii, Columb a murit convins că a fost primul european care a acostat în estul Asiei.
                        </p>
                    </div>
                    <img src = {Columbus} alt = "Cristofer Columb" style = {{height: window.innerHeight + 20, paddingRight: 0}}/>
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
            <div ref={ref4}>
                <div className="container">
                    <img src = {ColumbusTrip} alt = "Columb gif" style = {{height: window.innerHeight / 1.48, paddingLeft: 30}}/>
                    <div>
                        <p style = {mySubtitle3}> Prima călătorie </p>
                        <p style = {myDescription}> (3 august 1492 – 15 martie 1493) </p>
                        <p style = {myText2}>
                            Prima expediție pleacă din portul Palos de la Frontera cu navele Santa Maria (30 metri lungime, sub
                            comanda sa), Pinta și Nina (caravele mici de 15 m lungime, comandate de către Martín Alonso Pinzón și
                            Vicente Yañez Pinzón), alese pentru traversarea oceanului pe drumul alizeelor. <br/><br/>
                            La 12 octombrie 1492, Lumea Nouă (America), este zărită. Sunt descoperite insulele: Santa Maria
                            Conception, Fernandina, Isabella, Juna, Bohio. Columb a explorat la fel și coasta de nord-est a
                            Cubei (28 octombrie), și coasta nordică a Hispaniolei, din 5 decembrie, unde a eșuat Santa Maria,
                            în dimineața de Crăciun 1492, echipajul fiind nevoit s-o abandoneze, iar 39 de oameni fiind nevoiți
                            să rămână pe insulă, întemeind așezarea La Navidad, localitate din Haiti. Înainte de a se întoarce în
                            Spania, Columb a răpit între zece și douăzeci și cinci de indieni, pe care i-a luat cu el. Doar șapte
                            sau opt din ei au ajuns vii în Spania, ei făcând o impresie deosebită la Sevilia. Pe 15 martie 1493
                            Columb revine triumfător în Spania.
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
                        <p style = {myDescription2}> (1493-1496) </p>
                        <p style = {myText2}>
                            A doua călătorie a lui Cristofor Columb a urmat o rută mai sudică decât prima sa
                            călătorie, și a constat în explorarea insulelor din Caraibe. Columb a călătorit cu o flotă de 17
                            nave și aproximativ 1500 de oameni, a explorat insulele Guadeloupe, Dominica, Antigua, Puerto Rico,
                            Haiti, Jamaica, Cuba și Puerto Rico, a întemeiat așezăminte precum La Navidad și Isabela și a
                            descoperit insulele Turcești și Caicos și insula Mona. În cele din urmă, Columb s-a întors în
                            Spania în 1496, după ce a lăsat în urmă o colonie instabilă în Hispaniola, iar călătoria sa a
                            avut un impact important asupra istoriei Americii și a devenit un punct de plecare pentru colonizarea
                            ulterioară a insulelor din Caraibe.

                        </p>
                    </div>
                    <img src = {ColumbusMap} alt = "Cristofer Columb" style = {{width: window.innerWidth/ 2.3, paddingRight: 30, paddingTop: 20}}/>
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
                    <img src = {ColumbusThird} alt = "Columb gif" style = {{height: window.innerHeight / 2, paddingLeft: 30}}/>
                    <div>
                        <p style = {mySubtitle4}> A treia călătorie </p>
                        <p style = {myDescription}> (1498-1500) </p>
                        <p style = {myText2}>
                            A treia călătorie a lui Cristofor Columb (1498 și 1500) și a fost finanțată de regele Ferdinand și
                            regina Isabella a Spaniei. Columb a navigat spre sud, explorând coasta Americii de Sud, inclusiv
                            Venezuela, insulele Trinidad și Tobago și Insula Margarita. El a avut dificultăți în timpul acestei
                            călătorii, inclusiv conflicte cu coloniile spaniole și probleme cu navele sale, dar a reușit să ajungă
                            în cele din urmă în Spania în 1500.
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
            <div ref={ref7}>
                <div className="container">
                    <div>
                        <p style = {mySubtitle3}> A patra călătorie </p>
                        <p style = {myDescription2}> (1502-1504) </p>
                        <p style = {myText2}>
                            A patra și ultima călătorie a lui Columb a avut loc între 1502 și 1504 și a fost încă o dată finanțată
                            de regii spanioli. De data aceasta, Columb a navigat spre vest, către America Centrală și America de Sud.
                            El a explorat Coasta Rica, Panama și Jamaica, dar a întâmpinat probleme majore cu navele sale și a trebuit
                            să se adăpostească într-un port portughez din Africa de Vest. După ce și-a reechipat navele, a încercat
                            să navigheze înapoi spre America Centrală, dar a fost forțat să se întoarcă în Spania din cauza unei furtuni
                            puternice.
                        </p>
                    </div>
                    <img src = {ColumbusDebarcare} alt = "Cristofer Columb" style = {{height: window.innerHeight / 2, paddingRight: 30}}/>
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
            <div ref={ref8}>
                <p style = {mySubtitle1}> Amerigo Vespucci </p>
                <p style = {myText1}>Amerigo Vespucci a fost un explorator italian care a călătorit de mai multe ori în America în timpul secolului al XV-lea. El a participat la expedițiile portugheze și spaniole în regiunea Atlanticului de Sud și de Est și a făcut o serie de descoperiri semnificative. Printre cele mai importante descoperiri ale lui Vespucci se numără:</p>
                <div className="container">
                    <div>
                        <p style={mySubtitle5}>Prima călătorie (1499)</p>
                        <p style = {myText5}>
                            În 1499, Vespucci a fost trimis de regii spanioli într-o expediție în regiunea Atlanticului de Sud.
                            El a navigat pe coasta Braziliei, recunoscând-o ca o nouă țară, numind-o "Terra Brasilis" sau
                            "țara brazilor", și a ajuns până la estuarul Amazonului. Vespucci a scris un jurnal
                            detaliat despre călătoria sa, în care a descris flora și fauna Americii de Sud, precum și tradițiile
                            culturale ale populațiilor indigene.
                        </p>
                    </div>
                    <div>
                        <p style={mySubtitle5}>A doua călătorie (1501)</p>
                        <p style = {myText5}>
                            În 1500, Vespucci a plecat într-o a doua călătorie, de data aceasta alături de o flotă portugheză. El a
                            navigat în jurul coastei de nord-est a Americii de Sud, ajungând până în Golful Paria, între Venezuela
                            și Trinidad. Vespucci a scris și despre această călătorie în jurnalul său, subliniind importanța descoperirii
                            sale, fiind primul european care a navigat pe coasta de est a Americii de Sud și a recunoscut-o ca
                            un continent separat, realizând că teritoriile descoperite nu erau Asia, așa cum se credea înainte.
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
                    marginBottom: '30px'
                }}
            />
            <div className="container">
                <div>
                    <img src = {ColumbusAll} alt = "Cristofor Columb" style = {{height: window.innerHeight / 2, paddingLeft: 180, paddingRight: 30, }}/>
                    <p> Călătoriile lui Cristofor Columb </p>
                </div>
                <div>
                    <img src = {AmerigoAll} alt = "Cristofer Columb" style = {{height: window.innerHeight / 2, paddingLeft: 50, paddingRight: 20, }}/>
                    <p style = {myDescription2}> Călătoriile lui Cristofor Columb </p>
                </div>
            </div>
            <div className="container">
                <span style = {myDescription3}> Călătoriile lui Cristofor Columb </span>
                <span style = {myDescription3}> Călătoriile lui Amerigo Vespucci </span>
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
            <span style={mySubtitle1}>Vasul Galleon</span>
            <canvas id="myThreeJsCanvas" />
        </div>
    );
}
