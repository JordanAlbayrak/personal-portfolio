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

export const getStaticProps = async () => {
    const data = await client.getEntries();
    // const icon_data = await client.getAssets();

    return {
        props: {
            dataList: data.items,
        }
    }
}

const Home = ({dataList}) => {
    const [clicked, setClicked] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [lightMode, setLightMode] = useState('🌜')
    const [img_height, setImg_height] = useState('70px')
    const [img_width, setImg_width] = useState(10)


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
        const rez = document.documentElement.clientWidth;
        console.log(rez);
        console.log(window.innerWidth);

        if (md.mobile() === null) {
            setIsMobile(false)
        }else {
            setIsMobile(true)
        }

        setImg_height('70px')
        setImg_width(Number(rez) >= 1200 ? 10 : 20)

        if (mounted) {
            // const mediaQuery_1200_min = window.matchMedia('(min-width: 1200px)')
            // const mediaQuery_786_min = window.matchMedia('(min-width: 768px)')
            // const mediaQuery_500_min = window.matchMedia('(min-width: 500px)')
            // const mediaQuery_300_min = window.matchMedia('(min-width: 301-px)')
            //
            // const mediaQuery_1200_max = window.matchMedia('(max-width: 1200px)')
            // const mediaQuery_786_max = window.matchMedia('(max-width: 768px)')
            // const mediaQuery_500_max = window.matchMedia('(max-width: 500px)')
            // const mediaQuery_300_max = window.matchMedia('(max-width: 300-px)')
            //
            // function screenResolutionChange(mediaQuery_1200_min, mediaQuery_786_min, mediaQuery_500_min, mediaQuery_300_min, mediaQuery_1200_max, mediaQuery_786_max, mediaQuery_500_max, mediaQuery_300_max) {
            //     console.log(document.documentElement.clientWidth);
            //
            //     if (mediaQuery_1200_min.matches) {
            //         setImg_height('70px')
            //         setImg_width(10)
            //     }
            //     else if (mediaQuery_1200_max.matches && mediaQuery_786_min.matches) {
            //         setImg_height('70px')
            //         setImg_width(12)
            //     }
            //     else if (mediaQuery_786_max.matches && mediaQuery_500_min.matches) {
            //         setImg_height('60px')
            //         setImg_width(20)
            //     }
            //     else if (mediaQuery_500_max.matches && mediaQuery_300_min.matches) {
            //         setImg_height('50px')
            //         setImg_width(20)
            //     }
            //     else if (mediaQuery_300_max.matches) {
            //         setImg_height('40px')
            //         setImg_width(20)
            //     }
            // }
            //
            // mediaQuery_1200_min.addListener(screenResolutionChange)
            // mediaQuery_786_min.addListener(screenResolutionChange)
            // mediaQuery_500_min.addListener(screenResolutionChange)
            // mediaQuery_300_min.addListener(screenResolutionChange)
            // mediaQuery_786_max.addListener(screenResolutionChange)
            // mediaQuery_500_max.addListener(screenResolutionChange)
            // mediaQuery_300_max.addListener(screenResolutionChange)
            // screenResolutionChange(mediaQuery_1200_min, )

        }
    }, [ ])

    useEffect(() => {
        if (mounted) {
            // if (localStorage.getItem('setLightMode') === 'true') {
            //     setLightMode('🌜')
            // } else {
            //     setLightMode('🌞')
            // }
        }
    }, [mounted])


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
                    <div className={'introSection'} style={{textAlign:"center", marginTop:"60px"}}>
                        <h1 className={`${styles.title} ${isMobile ? '' : 'mt-4'}`}><a>Hi there</a></h1>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <h3 className={'mb-3'} style={{textAlign:"center", color:""}}> I'm Jordan</h3>
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
                    <p style={{color:"gray"}}> {isMobile ? 'Click' : 'Hover'} a title for more details</p>
                    <div className={'customerGrid'} data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" >
                            {dataList.filter( x => x.sys.contentType.sys.id === "projects").map((data) => (
                                <ProjectSection isMobile={isMobile} data={data.fields} key={data.sys.id} />
                            ))}
                    </div>
                </div>

                {/* Skills Section */}
                <div id={"skills"}>
                    <div className={'text-center pb-2'} style={{marginTop:"200px", overflowX:'hidden'}} data-aos="zoom-out" data-aos-easing="ease-in-out" data-aos-duration="1000">
                        <h5 className={'content-div mb-4 fw-bold'} id={"skills"}>What I have worked with</h5>
                        <a href={dataList.filter( x => x.sys.contentType.sys.id === "skills").map(x => x.fields)[0].cvLinkEnglish} className={'text-decoration-none'} target={'__blank'} rel={'noreferrer noopener'}><p> Download my CV!</p></a>
                        <SkillSection img_width={img_width} img_height={img_height} />
                    </div>
                </div>

                {/* Workflow Section */}
                <div className={'text-center'} style={{marginTop:"200px"}} data-aos="zoom-out" data-aos-easing="ease-in-out" data-aos-duration="1000">
                    <h5 className={'content-div fw-bold'} id={"workflow"}>My standard workflow</h5>
                    <div className={'customerGrid'}>
                        {dataList.filter( x => x.sys.contentType.sys.id === "workflow").map((data) => (
                            <WorkflowSection isMobile={isMobile} data={data.fields} key={data.sys.id} />
                        ))}
                    </div>
                </div>

                {/* Contact Section */}
                <div className={'text-center'} style={{marginTop:"200px"}} id={"contact"} data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="500" >
                    <h5 className={' content-div fw-bold'}> Contact me here</h5><br/>
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