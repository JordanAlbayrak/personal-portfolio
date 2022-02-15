import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import ProjectSection from '../components/ProjectSection'
import AboutSection from '../components/AboutSection'
import {useEffect, useState} from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import MobileDetect from "mobile-detect";
import Aos from "aos";

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
    const [hamburger, setHamburger] = useState(false)
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
                if (e.matches) {
                    setHamburger(true)
                }
                else {
                    setHamburger(false)
                }
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

    let hamburgerNav;
    if (hamburger){
        hamburgerNav = <h2> test </h2>;
    }
    else {
        hamburgerNav = null;
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

            {/*{hamburgerNav}*/}

            {/* Introduction Section */}
            <div className="container card" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="600">
                    {/*<h1 className={''}> Hello</h1>*/}
                    <div style={{textAlign:"center", marginTop:"45px"}}>
                        <h1 className={`${styles.title} ${isMobile ? '' : 'mt-4'}`}><a>Hi there</a></h1>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <h3 className={''} style={{textAlign:"center"}}> I'm Jordan Albayrak </h3>
                        <div className={'d-inline-block'}>
                        <p className={styles.typewriter} style={{display:"inline-block"}} > Welcome to my virtual portfolio</p>
                        </div>
                    </div>
                    <div className={'text-center'}>
                        <button onClick={handleClick} className={'light-mode border-0'} style={{width:"40px"}}> {lightMode}</button>
                    </div>

                {/* About Section */}
                <div className={`text-center ${isMobile ? '' : 'mt-5'}`} id={"about"} data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="600">
                    <div className={'customerGrid'}>
                        {dataList.filter( x => x.sys.contentType.sys.id === "about").map((data) => (
                            <AboutSection isMobile={isMobile} data={data.fields} key={data.sys.id} />
                        ))}
                    </div>
                </div>

                {/* Project Section */}
                <div className={'text-center'} id={"projects"} data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="600" >
                    <h5 className={'content-div pt-5'}> Here are some of my favorite projects</h5>
                    <p className={''}> {isMobile ? 'Click' : 'Hover'} for more details</p>
                    <div className={'customerGrid'} data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            {dataList.filter( x => x.sys.contentType.sys.id === "projects").map((data) => (
                                <ProjectSection isMobile={isMobile} data={data.fields} key={data.sys.id} />
                            ))}
                    </div>
                </div>

                {/* Skills Section */}
                <div className={'text-center mt-5'} id={"skills"} data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="600">
                    <div className={'customerGrid'}>
                        {dataList.filter( x => x.sys.contentType.sys.id === "about").map((data) => (
                            <AboutSection isMobile={isMobile} data={data.fields} key={data.sys.id} />
                        ))}
                    </div>
                </div>

                {/* Project Section */}
                <div className={'text-center'} id={"contact"} data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="600" >
                    <h5 className={'p-4 content-div'}> Here are some of my favorite projects</h5><br/>
                    <div className={'customerGrid'} data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        {dataList.filter( x => x.sys.contentType.sys.id === "projects").map((data) => (
                            <ProjectSection isMobile={isMobile} data={data.fields} key={data.sys.id} />
                        ))}
                    </div>
                </div>
            </div>
            {/*<Footer/>*/}
        </div>
    )
}


export default Home;