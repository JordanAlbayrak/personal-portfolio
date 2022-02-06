import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import ProjectSection from '../components/ProjectSection'
import AboutSection from '../components/AboutSection'
import {useEffect, useState} from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import MobileDetect from "mobile-detect";

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

    useEffect(() => {
        setMounted(true)
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
        r.style.setProperty('--main-bg-color', clicked ? '#1A1A1D' : 'white')
        r.style.setProperty('--main-text-color', clicked ? 'white' : 'black')
        r.style.setProperty('--main-invert-color', clicked ? '1' : '0')
        // console.log(r.style.getPropertyValue('--main-bg-color'))

        // localStorage.gay = clicked;
        // localStorage.setItem('gay', clicked);
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
            <NavBar/>
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
            <div className="container card" >
                    {/*<h1 className={''}> Hello</h1>*/}
                    <button onClick={handleClick} className={'light-mode'}> Light Mode</button>
                    <div style={{textAlign:"center"}}>
                        <h1 className={styles.title}><a>Hi there</a></h1>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <h3 className={''} style={{textAlign:"center"}}> I'm Jordan Albayrak <br/>and I'm a developer </h3>
                        <div className={'d-inline-block'}>
                        <p className={styles.typewriter} style={{display:"inline-block"}} > Welcome to my virtual portfolio</p>
                        </div>
                    </div>

                <div className={'text-center'} >
                    <div className={'customerGrid'}>
                        {dataList.filter( x => x.sys.contentType.sys.id === "about").map((data) => (
                            <AboutSection data={data.fields} key={data.sys.id} />
                        ))}
                    </div>
                </div>


                <div className={'text-center'} >
                    <h5> Here are some of my favorite projects</h5>
                    <div className={'customerGrid'}>
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