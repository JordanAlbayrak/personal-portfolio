import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from "react";


export default function ProjectSection({ data, isMobile}) {
    const githubIcon = 'https://images.ctfassets.net/w84vaxpfiq86/6nExiScAjlCx9v4TG8DhlP/5c871a956dcba8647a4eac6e0b93a434/5847f98fcef1014c0b5e48c0.png';
    const emailIcon = 'https://images.ctfassets.net/w84vaxpfiq86/TE7pz7DtBkB6eZpPwNOTf/d90d7085fcfc71bdf0aca641e1b343a1/email.png';
    const linkedInIcon = 'https://images.ctfassets.net/w84vaxpfiq86/5NegJc8GfacmbiIaqmnQ4a/8590762685a346c898e8856c5c71b640/linkedin.png';
    const linkedInUrl = 'linkedin';
    const githubUrl = 'github';


    return(
        <section className={`d-inline-flex justify-content-center ${isMobile ? '' : 'mx-3'}`}>
            <div className={"d-flex flex-column align-items-center text-center justify-content-center"}  >
                <div className={'d-flex flex-column align-items-center text-center justify-content-center light-mode inl'}>
                    <div className={'d-flex bottom'}>
                         <a href={data.contactLink ? data.contactLink : 'mailto:jordan008@live.ca?subject = "Wine and Cheese"'} target={"_blank"} rel="noopener noreferrer">
                            <img className={data.contactTitle.includes('Github') ? 'icon_invert_color' : ''}
                                 height={"40"} src={data.contactLink ? (data.contactLink.includes(linkedInUrl) ? linkedInIcon : (data.contactLink.includes(githubUrl)
                                ? githubIcon : '')) : emailIcon } alt={"Contact Icon"}/></a>
                    </div>
                    <p className={'mx-4'}>{data.contactTitle}</p>
                </div>
            </div>
        </section>

    )
}