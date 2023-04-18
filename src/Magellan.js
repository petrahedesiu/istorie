// import React from 'react';
//
// function Magellan() {
//     return (
//         <div>Fernando Magellan</div>
//     )
// }
// export default Magellan;


import './App.css';
import ImageScroll from "./Img";
import MagellanGif from "./magellan.gif";
import FernandoMagellan from "./Fernando Magellan.jpg";
import React, {useEffect, useRef} from "react";

const myBackground = {
    backgroundColor: '#0f3d47',
    height: '5000px',
    width: '100%',
}
const myTitle = {
    color: '#f9f9f9',
    paddingTop: 220,
    paddingBottom: 180,
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
    paddingLeft: 210,
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
    paddingLeft: 120,
    marginRight: 300,
    fontSize: 18,
    fontFamily: "Playfair Display",
    textAlign: 'left',
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
    RefFunction(ref1);
    RefFunction(ref2);
    RefFunction(ref3);

    return (
        <div style = {myBackground}>
            <div ref={ref1}>
                <p style = {myTitle}> Marile descoperiri geografice </p>
            </div>
            {/*<p style = {{padding: 250}}></p>*/}
            {/*<img src = {BoatImage} alt = "boat" />*/}
            <ImageScroll/>
            <p style = {{padding: 600}}> </p>
            <div ref={ref2}>
                <p style = {mySubtitle1}> Lorem Ipsum </p>
                <p style = {myText1}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus tortor molestie, aliquet odio ac,
                    cursus neque. Suspendisse nec condimentum ligula. Ut fermentum neque id sapien imperdiet accumsan.
                    Suspendisse laoreet sagittis tortor, et eleifend neque congue non. Ut gravida, dui vitae ullamcorper
                    elementum, elit risus varius erat, nec hendrerit dui massa non sapien. Etiam eget tortor sit amet dolor
                    gravida feugiat. Pellentesque venenatis odio a luctus posuere. Nullam venenatis interdum dolor ut accumsan.
                    Vivamus diam orci, mollis eget lectus quis, finibus venenatis justo.
                </p>
            </div>
            <img src = {MagellanGif} alt = "Magellan Gif" style = {{width: '60%'}}/>
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
                    <p>
                        <p style = {mySubtitle2}> Lorem ipsum </p>
                        <p style = {myText2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus tortor molestie, aliquet odio ac,
                            cursus neque. Suspendisse nec condimentum ligula. Ut fermentum neque id sapien imperdiet accumsan.
                            Suspendisse laoreet sagittis tortor, et eleifend neque congue non. Ut gravida, dui vitae ullamcorper
                            elementum, elit risus varius erat, nec hendrerit dui massa non sapien. <br/><br/><br/>
                            Etiam eget tortor sit amet dolor gravida feugiat. Pellentesque venenatis odio a luctus posuere. Nullam
                            venenatis interdum dolor ut accumsan. Vivamus diam orci, mollis eget lectus quis, finibus venenatis
                            justo. Sed viverra nisl purus, in tristique sapien pharetra a. In hac habitasse platea.
                        </p>
                    </p>
                    <img src = {FernandoMagellan} alt = "Fernando Magellan" style = {{width: '70%', paddingRight: 0}}/>
                </div>
            </div>
        </div>
    );
}
