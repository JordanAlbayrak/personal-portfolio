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
    const reactUrl = 'https://iot-final-project-front-end.vercel.app/login';
    const [isVisible, setIsVisible] = useState(false);


    function onMouseEnter(){
        setIsVisible(true);
    }
    function onMouseExit(){
        setTimeout(() =>setIsVisible(false), 1000);
    }


    return(
        <section className={"card project"} onMouseEnter={isMobile ? ()=>{} : onMouseEnter} onMouseLeave={isMobile ? ()=>{} : onMouseExit} >
            <div className={"d-flex flex-column align-items-center text-center justify-content-center"} >
                <div className={'d-flex flex-column align-items-center text-center justify-content-center light-mode content-div'}>
                    <h3>{data.workflowTitle}</h3>
                </div>
                <p data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="600" data-aos-delay="1000" style={{position:'relative', zIndex:'0', marginTop:'20px'}}>{data.workflowDescription}</p>
            </div>
        </section>

    )
}