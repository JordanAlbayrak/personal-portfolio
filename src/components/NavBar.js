import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


const NavBar = (prop) => {
    return (
        <div>
            <div className={'d-inline-block d-flex justify-content-center'}>
                <ul className={'nav navbar'}>
                    <li className={'nav-item'}> About</li>
                    <li className={'nav-item'}> Projects</li>
                    <li className={'nav-item'}> Skills</li>
                    <li className={'nav-item'}> Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar