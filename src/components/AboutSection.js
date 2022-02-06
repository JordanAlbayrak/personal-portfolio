import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';


export default function ProjectSection({ data}) {
    const selfie = 'https://images.ctfassets.net/w84vaxpfiq86/1IohuIahw9L98rBuqmEqwV/bea9078c771e8816d37292a5a0ce3a33/IMG_3041.JPG';
    return(
        <section className={"card"}>
            <div className={"d-flex flex-column align-items-center text-center"}>
                <h2>{data.aboutTitle}</h2>
                <div className={"d-inline-block"}>
                    <h5>{data.aboutLanguages}</h5>
                    <h5>{data.origin}</h5>
                </div>
                <p>{data.aboutDescription}</p>
                <img height={"60"} src={selfie} alt={"Selfie"}/>
                <a href={data.instagram} target={"_blank"} rel="noopener noreferrer"> </a>
            </div>
        </section>

    )
}