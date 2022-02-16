import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import ProjectSection from '../components/ProjectSection'
import AboutSection from '../components/AboutSection'
import SkillSection from '../components/SkillSection'
import WorkflowSection from '../components/WorkflowSection'
import ContactSection from '../components/ContactSection'
import {useEffect, useState} from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import MobileDetect from "mobile-detect";
import Aos from "aos";
import {Carousel} from "react-responsive-carousel";


const client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

const widthThresh_holdForSidebar = "(max-width: 768px)";

export const getStaticProps = async () => {
    const data = await client.getEntries();
    return {
        props: {
            dataList: data.items
        }
    }
}

const Home = ({dataList}) => {
    const [clicked, setClicked] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [isVisible, setIsVisible] = useState(false);
    const [lightMode, setLightMode] = useState('🌞')


    useEffect(() => {
        setMounted(true)

        Aos.init({
            easing:'ease-in-out',
            once:true,
            offset:50,
            duration:1500,
            disable:window.innerWidth < 768,
        })
    }, [])


    useEffect(() => {
        localStorage.setItem('setLightMode', clicked);
    }, [clicked])

    useEffect(() => {
        const md = new MobileDetect(window.navigator.userAgent);

        if (md.mobile() === null) {
            setIsMobile(false)
        }else {
            setIsMobile(true)
        }

        if (mounted) {
            // Create a condition that targets viewports at least 768px wide
            const mediaQuery = window.matchMedia(widthThresh_holdForSidebar);

            function handleTabletChange(e) {
                // Check if the media query is true
            }

            // Register event listener
            mediaQuery.addEventListener("change", handleTabletChange)

            // Initial check
            handleTabletChange(mediaQuery)
        }
    }, [ ])


    function handleClick() {
        setClicked(!clicked)
        let r = document.querySelector(':root')
        r.style.setProperty('--main-bg-color', clicked ? '#2C3E50' : '#E3EEF3')
        r.style.setProperty('--main-text-color', clicked ? 'white' : 'black')
        r.style.setProperty('--main-invert-color', clicked ? '1' : '0')
        r.style.setProperty('--main-nav-color', clicked ? '#FBFCFC' : '#34495E')
        r.style.setProperty('--r', clicked ? 44 : 251)
        r.style.setProperty('--g', clicked ? 62 : 252)
        r.style.setProperty('--b', clicked ? 80 : 252)

        setLightMode(clicked ? '🌜' : '🌞')

    }

    function onMouseEnter(){
        setIsVisible(true);
    }
    function onMouseExit(){
        setIsVisible(false);
    }

    return(
        <div>
            <NavBar isMobile={isMobile}/>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap"
                              rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>

                <title> Jordan Albayrak</title>
            </Head>

            {/* Introduction Section */}
            <div className="container card" id={"about"} >
                    <div className={'introSection'} style={{textAlign:"center", marginTop:"45px"}}>
                        <h1 className={`${styles.title} ${isMobile ? '' : 'mt-4'}`}><a>Hi there</a></h1>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <h3 className={''} style={{textAlign:"center"}}> I'm Jordan</h3>
                        <div className={'d-inline-block'}>
                        <p className={styles.typewriter} style={{display:"inline-block"}} > Welcome to my virtual portfolio</p>
                        </div>
                    </div>
                    <div className={'text-center'}>
                        <button onClick={handleClick} className={'light-mode border-0'} style={{width:"40px"}}> {lightMode}</button>
                    </div>

                {/* About Section */}
                <div className={`text-center pb-5 mb-5 ${isMobile ? '' : 'mt-5'}`}  data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="1000">
                    <div className={'customerGrid'} style={{marginTop:"100px"}}>
                        {dataList.filter( x => x.sys.contentType.sys.id === "about").map((data) => (
                            <AboutSection isMobile={isMobile} data={data.fields} key={data.sys.id} />
                        ))}
                    </div>
                </div>

                {/* Project Section */}
                <div className={'text-center'} id={"projects"} style={{marginTop:"200px"}} data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="1000" >
                    <h5 className={'content-div pt-5 fw-bold'}> Here are some of my favorite projects</h5>
                    <p style={{color:"gray"}}> {isMobile ? 'Click' : 'Hover'} for more details</p>
                    <div className={'customerGrid'} data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" >
                            {dataList.filter( x => x.sys.contentType.sys.id === "projects").map((data) => (
                                <ProjectSection isMobile={isMobile} data={data.fields} key={data.sys.id} />
                            ))}
                    </div>
                </div>

                {/* Skills Section */}
                <div className={'text-center'} style={{marginTop:"200px"}} data-aos="zoom-out" data-aos-easing="ease-in-out" data-aos-duration="1000">
                    <h5 className={'content-div pt-5 fw-bold'} id={"skills"}>Skills</h5>
                    <SkillSection/>
                </div>

                {/* Workflow Section */}
                <div className={'text-center'} style={{marginTop:"200px"}} data-aos="zoom-out" data-aos-easing="ease-in-out" data-aos-duration="1000">
                    <h5 className={'content-div pt-5 fw-bold'} id={"workflow"}>Workflow</h5>
                    <div className={'customerGrid'}>
                        {dataList.filter( x => x.sys.contentType.sys.id === "workflow").map((data) => (
                            <WorkflowSection isMobile={isMobile} data={data.fields} key={data.sys.id} />
                        ))}
                    </div>
                </div>

                {/* Contact Section */}
                <div className={'text-center'} style={{marginTop:"200px"}} id={"contact"} data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="1000" >
                    <h5 className={' content-div fw-bold'}> Wanna talk about life?</h5><br/>
                    <div className={''} >
                        {dataList.filter( x => x.sys.contentType.sys.id === "contact").map((data) => (
                            <ContactSection isMobile={isMobile} data={data.fields} key={data.sys.id} />
                        ))}
                    </div>
                </div>
            </div>
            {/*<Footer/>*/}
        </div>
    )
}


export default Home;