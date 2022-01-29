import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import ProjectSection from '../components/ProjectSection'
import {useEffect, useState} from "react";

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

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
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
    }, [mounted])


    function handleClick() {
        setClicked(!clicked)
    }



    let hamburgerNav;
    if (hamburger){
        hamburgerNav = <h2> test </h2>;
    }
    else {
        hamburgerNav = null;
    }
    return(
        <div className={''}>
        {/*<NavBar/>*/}
            {hamburgerNav}
        <div className="container card" >
            <h1 className={clicked ? 'gay' : 'gay2'}> Hello</h1>
            <button onClick={handleClick}> Click Me!</button>
            <h1 className={styles.title}><a>Hello</a></h1>
            <div className={'customerGrid '}>
                    {dataList.map((data) => (
                        <ProjectSection data={data.fields} key={data.sys.id} />
                    ))}
            </div>
        </div>
        </div>
    )
}


export default Home;