import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';


export default function TestCard({ test}) {
    const img_url = 'https://images.ctfassets.net/w84vaxpfiq86/6nExiScAjlCx9v4TG8DhlP/5c871a956dcba8647a4eac6e0b93a434/5847f98fcef1014c0b5e48c0.png';
    return(
        <section className={"card"}>
            <div>
                <h2>{test.title}</h2>
                <h3>{test.language}</h3>
                <p>{test.description}</p>
                <a href={test.link}> <img height={"25"} src={img_url} alt={"GithubIcon"}/></a>
            </div>
        </section>

    )
}