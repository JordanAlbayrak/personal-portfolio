import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from "react";
import {Carousel} from "react-bootstrap";


export default function ProjectSection({img_width, img_height, isMobile}) {
    const githubIcon = 'https://images.ctfassets.net/w84vaxpfiq86/2IqPsUDmPigoO0y5ehjgpq/c1707dd15dcd20d883e005574192f7f5/github-original-wordmark.svg';
    const nextjsIcon = 'https://images.ctfassets.net/w84vaxpfiq86/6Yw9EpKwh0F7N89f9VDsVy/6e1030bc4f5d0db92e9bb3992eca72dc/nextjs-original-wordmark.svg';
    const firebaseIcon = 'https://images.ctfassets.net/w84vaxpfiq86/6WATILWa104ddgb3qWa4gf/37b560ccfb53bbf3c283331362df480d/firebase-plain-wordmark.svg';
    const gitIcon = 'https://images.ctfassets.net/w84vaxpfiq86/1XIgP64lWI0FhkMcjo1N56/47697450f81b9732c4bf0f78267b94ba/git-original-wordmark.svg';
    const mySqlIcon = 'https://images.ctfassets.net/w84vaxpfiq86/3yd5ItwcvIQUWsXcu1nM7j/4a4525d682774033ec78cdf66384db59/mysql-original-wordmark.svg';
    const dotNetCoreIcon = 'https://images.ctfassets.net/w84vaxpfiq86/JgiJkUcUsVjZB35P1VL7c/0a4eb44ef50dd753b94450e270b6a878/dotnetcore-original.svg';
    const dotNetIcon = 'https://images.ctfassets.net/w84vaxpfiq86/uAhf0BXjhJ8KbgXgfjdLP/817cddf590daa5a526478164dbf57bf1/dot-net-original-wordmark.svg';
    const jsIcon = 'https://images.ctfassets.net/w84vaxpfiq86/6TcV5xgoOCkn0nG5lmtd5H/da7fda2c8a0ab0135a669a905931e2e3/javascript-original.svg';
    const jiraIcon = 'https://images.ctfassets.net/w84vaxpfiq86/VjxzS0rSV1dsCcNIs2etF/a544ed19a96b1947aa3f6647e88a2571/jira-original-wordmark.svg';
    const pythonIcon = 'https://images.ctfassets.net/w84vaxpfiq86/21COX44juYoJhn7816r6NP/31cfe94e3ba38b57942dc99a20a93b4e/python-original-wordmark.svg';
    const javaIcon = 'https://images.ctfassets.net/w84vaxpfiq86/3yLyKzbcIePTi1TnXJKybx/f56a9eb24b01277333ee04508ce8855b/java-original-wordmark.svg';
    const phpIcon = 'https://images.ctfassets.net/w84vaxpfiq86/seHUt1YJu2fH8Qge7Wtjg/397a5194dd9ea18801040c22fdf2cd1d/php-plain.svg';
    const nodeJsIcon = 'https://images.ctfassets.net/w84vaxpfiq86/5VsmGr3nH3ligYZ0TIe2uR/49b6a265162a2ea25a5c6cb16f4935a0/nodejs-original-wordmark.svg';
    const reactIcon = 'https://images.ctfassets.net/w84vaxpfiq86/nfk7PjM9xVo361Bm7bote/1dd598e2a9cddc5ce27acf49cd3970a1/react-original-wordmark.svg';
    const springIcon = 'https://images.ctfassets.net/w84vaxpfiq86/4pJuCWz4dT9klbVGeyzpjn/76388a00c3be57318851b125a9243f48/spring-original-wordmark.svg';
    const bootstrapIcon = 'https://images.ctfassets.net/w84vaxpfiq86/v3uhrAYCNalGpkDAaL2pz/656e9341fc7577f1b74997248bc92691/bootstrap-plain-wordmark.svg';
    const cssIcon = 'https://images.ctfassets.net/w84vaxpfiq86/2bdC9hUWe8oBPHDHWneDZy/3863d0c3eebc54107f7127329e07f532/css3-original-wordmark.svg';
    const unityIcon = 'https://images.ctfassets.net/w84vaxpfiq86/6KwKzKr88YjosslfQZGOMn/0f599486f1b4048ef5322d5b0f5a42ea/unity-original-wordmark.svg';
    const photoshopIcon = 'https://images.ctfassets.net/w84vaxpfiq86/7JnCYCBhwl9Vu8qj4J1aRu/e20ebe94510d6f53e02c7f5c0d5ac986/photoshop-plain.svg';


    // number of elements * img_heigh /4

    return(

        <div className={'w-100 position-relative overflow-hidden mx-auto'} style={{height:'110px',borderRadius:'20px', maxWidth:"1100px", minWidth:"1100px"}}>
                <div className="d-flex moving_icons" style={{width: `${img_width* (isMobile ? 30 : 50) }%`}}>
                    <div className="d-flex w-50 justify-content-around logo">

                        <img src={nextjsIcon} alt="nextjsIcon" className={'icon_invert_color'} height={img_height}/>
                        <img src={firebaseIcon} alt="firebaseIcon" height={img_height}/>
                        <img src={reactIcon} alt="reactIcon" height={img_height}/>
                        <img src={githubIcon} className={'icon_invert_color'} alt="githubIcon" height={img_height}/>
                        <img src={gitIcon} alt="gitIcon" height={img_height}/>
                        <img src={mySqlIcon} alt="mySqlIcon" height={img_height}/>
                        <img src={dotNetCoreIcon} alt="dotNetCoreIcon" className={'icon_invert_color'} height={img_height}/>
                        <img src={dotNetIcon} alt="dotNetIcon" className={'icon_invert_color'} height={img_height}/>
                        <img src={jsIcon} alt="jsIcon" height={img_height}/>
                        <img src={jiraIcon} alt="jiraIcon" className={'icon_invert_color'} height={img_height}/>
                        <img src={pythonIcon} alt="pythonIcon" height={img_height}/>
                        <img src={javaIcon} alt="javaIcon" height={img_height}/>
                        <img src={springIcon} alt="springIcon" height={img_height}/>
                        <img src={phpIcon} alt="phpIcon" height={img_height}/>
                        <img src={nodeJsIcon} alt="nodeJsIcon" className={'icon_invert_color'} height={img_height}/>
                        <img src={bootstrapIcon} alt="bootstrapIcon" className={'icon_invert_color'} height={img_height}/>
                        <img src={cssIcon} alt="cssIcon" height={img_height}/>
                        <img src={unityIcon} alt="unityIcon" className={'icon_invert_color'} height={img_height}/>
                        <img src={photoshopIcon} alt="photoshopIcon"  height={img_height}/>

                    </div>
                    <div className="d-flex w-50 justify-content-around logo">

                        <img src={nextjsIcon} alt="nextjsIcon" className={'icon_invert_color'} height={img_height}/>
                        <img src={firebaseIcon} alt="firebaseIcon" height={img_height}/>
                        <img src={reactIcon} alt="reactIcon" height={img_height}/>
                        <img src={githubIcon} className={'icon_invert_color'} alt="githubIcon" height={img_height}/>
                        <img src={gitIcon} alt="gitIcon" height={img_height}/>
                        <img src={mySqlIcon} alt="mySqlIcon" height={img_height}/>
                        <img src={dotNetCoreIcon} alt="dotNetCoreIcon" className={'icon_invert_color'} height={img_height}/>
                        <img src={dotNetIcon} alt="dotNetIcon" className={'icon_invert_color'} height={img_height}/>
                        <img src={jsIcon} alt="jsIcon" height={img_height}/>
                        <img src={jiraIcon} alt="jiraIcon" className={'icon_invert_color'} height={img_height}/>
                        <img src={pythonIcon} alt="pythonIcon" height={img_height}/>
                        <img src={javaIcon} alt="javaIcon" height={img_height}/>
                        <img src={springIcon} alt="springIcon" height={img_height}/>
                        <img src={phpIcon} alt="phpIcon" height={img_height}/>
                        <img src={nodeJsIcon} alt="nodeJsIcon" className={'icon_invert_color'} height={img_height}/>
                        <img src={bootstrapIcon} alt="bootstrapIcon" className={'icon_invert_color'} height={img_height}/>
                        <img src={cssIcon} alt="cssIcon" height={img_height}/>
                        <img src={unityIcon} alt="unityIcon" className={'icon_invert_color'} height={img_height}/>
                        <img src={photoshopIcon} alt="photoshopIcon"  height={img_height}/>

                    </div>
                </div>
        </div>


    )
}