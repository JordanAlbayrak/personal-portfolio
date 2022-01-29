import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';


export default function ProjectSection({ data}) {
    const img_url = 'https://images.ctfassets.net/w84vaxpfiq86/6nExiScAjlCx9v4TG8DhlP/5c871a956dcba8647a4eac6e0b93a434/5847f98fcef1014c0b5e48c0.png';
    return(
        <section className={"card"}>
            <div className={"d-flex flex-column align-items-center text-center"}>
                <h2>{data.title}</h2>
                <h3>{data.language}</h3>
                <p>{data.description}</p>
                <a href={data.link}> <img className={""} height={"25"} src={img_url} alt={"GithubIcon"}/></a>
            </div>
        </section>

    )
}