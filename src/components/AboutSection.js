import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import {useEffect, useState} from "react";


export default function ProjectSection({ data, isMobile}) {
    const [isVisible, setIsVisible] = useState(false);
    const [isMouseIn, setIsMouseIn] = useState(false);
    const selfie = 'https://images.ctfassets.net/w84vaxpfiq86/1IohuIahw9L98rBuqmEqwV/bea9078c771e8816d37292a5a0ce3a33/IMG_3041.JPG';

    function onMouseEnter(){
        setIsVisible(!isVisible);
        setIsMouseIn(!isMouseIn);
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
                <div className={"d-inline-block"}>
                    <h5>{data.aboutLanguages}</h5>
                    {/*<h5>{data.origin}</h5>*/}
                </div>
                <p className={`${isMobile ? '' : styles.hideAbout} ${isVisible ? styles.hoverShowAbout : ''}`}>{data.aboutDescription}</p>
                <img className={`${isMobile ? styles.showImg : '' } ${isVisible && !isMobile ? styles.hideImg : styles.showImg}`}  height={"250"} src={selfie} alt={"Selfie"}/>
                <a href={data.instagram} target={"_blank"} rel="noopener noreferrer"> </a>
            </div>
        </section>

    )
}