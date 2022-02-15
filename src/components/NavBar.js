import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from "react";


export default function NavBar({isMobile}) {
    const [isVisible, setIsVisible] = useState(false);

    function onMouseEnter(){
        setIsVisible(true);
        console.log("mouse enter");
    }
    function onMouseExit(){
        setIsVisible(false);
    }

    return (
        <div>
            <div className={`d-flex justify-content-center light-mode ${isMobile ? 'fixed-bottom' : 'fixed-top'}`} id={"navbar"}>
                <a className={'nav-link'}  href={"#about"}>About</a>
                <a className={'nav-link'} href={"#projects"}>Projects</a>
                <a className={'nav-link'} href={"#skills"}>Skills</a>
                <a className={'nav-link'} href={"#contact"}>Contact</a>
            </div>
        </div>
    )
}
