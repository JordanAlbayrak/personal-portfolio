import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from "react";


export default function ProjectSection({ data, isMobile}) {
    const githubIcon = 'https://images.ctfassets.net/w84vaxpfiq86/6nExiScAjlCx9v4TG8DhlP/5c871a956dcba8647a4eac6e0b93a434/5847f98fcef1014c0b5e48c0.png';
    const youtubeIcon = 'https://images.ctfassets.net/w84vaxpfiq86/60PwRXG1Rsm9ileMKmHqsF/c19539655505ddb87e752e0e3794ea8e/youtube.png';
    const reactIcon = 'https://images.ctfassets.net/w84vaxpfiq86/1C4x6tq2SAKDbOz3TEqYxy/1abec616f274e4397cf686d580d19686/reactIcon.png';
    const reactUrl = 'https://iot-final-project-front-end.vercel.app/login';
    const [isVisible, setIsVisible] = useState(false);
    const [isMouseIn, setIsMouseIn] = useState(false);
    const [img_height, setImg_height] = useState('70px');
    const [img_width, setImg_width] = useState(`${10*50}%`);


    function onMouseEnter(){
        setIsVisible(true);
        setIsMouseIn(true);
    }

    function onMouseExit(){
        // setIsVisible(!isVisible);
        // setIsMouseIn(!isMouseIn);
    }

    function showText(){
        setIsVisible(!isVisible);
    }

    return(
        <section className={"card project"} onMouseEnter={isMobile ? ()=>{} : onMouseEnter} onMouseLeave={isMobile ? ()=>{} : onMouseExit} >
            <div className={"d-flex flex-column align-items-center text-center justify-content-center"} onClick={showText} >
               <div className={'d-flex flex-column align-items-center text-center justify-content-center light-mode content-div'}>
                <h3 className={''}>{data.title}</h3>
                <h6 style={{color:'gray'}} >{data.language}</h6>
                <div className={'d-flex bottom'}>
                    <a href={data.link} target={"_blank"} rel="noopener noreferrer"> <img height={"35"} src={githubIcon} className={'icon_invert_color'} alt={"GithubIcon"}/></a>
                    {data.link2 ? <a href={data.link2} target={"_blank"} rel="noopener noreferrer">
                        <img style={{paddingLeft:"10%"}} height={"35"} src={data.link2 === reactUrl ? reactIcon : youtubeIcon } alt={"YoutubeIcon"}/></a> : null}
                </div>
               </div>
                <p style={{position:'relative', zIndex:'0', marginTop:'20px'}} className={`${isMobile ? styles.hide : styles.hide} ${isVisible ? styles.hoverShow : ''}`}>{data.description}</p>
            </div>
        </section>

    )
}