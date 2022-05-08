import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import {useEffect, useState} from "react";


export default function ProjectSection({ data, isMobile}) {
    const [isVisible, setIsVisible] = useState(false);
    const [isMouseIn, setIsMouseIn] = useState(false);
    const selfie = 'https://images.ctfassets.net/w84vaxpfiq86/1IohuIahw9L98rBuqmEqwV/23d49e31f95381fd66f5a982dd4381a9/long_jordan_nobackground4.png';

    function onMouseEnter(){
        setIsVisible(!isVisible);
        setIsMouseIn(!isMouseIn);
    }

    function showImage(){
            setIsVisible(!isVisible);
    }

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
                <img className={`${isMobile ? styles.showImg : styles.showImg } ${isVisible ? styles.hideImg : styles.showImg}`} onClick={showImage}  height={"450"} src={selfie} alt={"Selfie"}/>
                <a href={data.instagram} target={"_blank"} rel="noopener noreferrer"> </a>
            </div>
        </section>

    )
}