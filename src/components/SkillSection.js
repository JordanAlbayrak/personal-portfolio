import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from "react";
import {Carousel} from "react-bootstrap";


export default function ProjectSection({ data, isMobile}) {
    const githubIcon = 'https://images.ctfassets.net/w84vaxpfiq86/6nExiScAjlCx9v4TG8DhlP/5c871a956dcba8647a4eac6e0b93a434/5847f98fcef1014c0b5e48c0.png';
    const youtubeIcon = 'https://images.ctfassets.net/w84vaxpfiq86/60PwRXG1Rsm9ileMKmHqsF/c19539655505ddb87e752e0e3794ea8e/youtube.png';
    const reactIcon = 'https://images.ctfassets.net/w84vaxpfiq86/1C4x6tq2SAKDbOz3TEqYxy/1abec616f274e4397cf686d580d19686/reactIcon.png';
    let img_height = '50px';
    // number of elements * img_heigh /4


    return(

        <div className={'w-100 position-relative border overflow-hidden'} style={{height:'60px'}}>
                <div className="d-flex moving_icons" style={{width:`${4*50}%`}}>
                    <div className="d-flex w-50 justify-content-around logo">
                        <img src={githubIcon} alt="Icon" height={img_height}/>
                        <img src={youtubeIcon} alt="Icon" height={img_height}/>
                        <img src={reactIcon} alt="Icon" height={img_height}/>
                        <img src={githubIcon} alt="Icon" height={img_height}/>

                    </div>
                    <div className="d-flex w-50 justify-content-around logo">
                        <img src={githubIcon} alt="Icon" height={img_height}/>
                        <img src={youtubeIcon} alt="Icon" height={img_height}/>
                        <img src={reactIcon} alt="Icon" height={img_height}/>
                        <img src={githubIcon} alt="Icon" height={img_height}/>

                    </div>
                </div>
        </div>
    )
}