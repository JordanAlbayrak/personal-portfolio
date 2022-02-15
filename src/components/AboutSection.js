import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import {useEffect, useState} from "react";


export default function ProjectSection({ data, isMobile}) {
    const [isVisible, setIsVisible] = useState(false);
    const [isMouseIn, setIsMouseIn] = useState(false);
    const selfie = 'https://images.ctfassets.net/w84vaxpfiq86/1IohuIahw9L98rBuqmEqwV/a33aaab87b827b2f17763192eade8b28/jordan_nobackground.png';

    function onMouseEnter(){
        setIsVisible(!isVisible);
        setIsMouseIn(!isMouseIn);
    }

    function showImage(){
            setIsVisible(!isVisible);
    }
    // function onMouseExit(){
    //     setIsMouseIn(false);
    //     setIsVisible(false);
    // }

    // useEffect(() => {
    //     if(isMouseIn === false && isVisible === true){
    //         setTimeout(() => {
    //             if (isMouseIn === false) {
    //                 setIsVisible(false)
    //             }
    //         }, 2000);
    //     }
    //
    // }, [isMouseIn]);

    return(
        <section className={"card"} onMouseEnter={isMobile ? ()=>{} : onMouseEnter} >
            <div className={"d-flex flex-column align-items-center text-center"}>
                <h2>{data.aboutTitle}</h2>
                <p style={{color:"gray", marginBottom:"0"}}>{isMobile ? 'Click' : 'Hover'} Here</p>
                <div className={"d-inline-block"}>
                    <h5>{data.aboutLanguages}</h5>
                    {/*<h5>{data.origin}</h5>*/}
                </div>
                <p className={`${isMobile ? styles.hideAbout : styles.hideAbout} ${isVisible ? styles.hoverShowAbout : ''}`} onClick={showImage}>{data.aboutDescription}</p>
                <img className={`${isMobile ? styles.showImg : styles.showImg } ${isVisible ? styles.hideImg : styles.showImg}`} onClick={showImage}  height={"250"} src={selfie} alt={"Selfie"}/>
                <a href={data.instagram} target={"_blank"} rel="noopener noreferrer"> </a>
            </div>
        </section>

    )
}