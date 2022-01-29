import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


const NavBar = (prop) => {
    return (
        <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-xl">
                <Link href="/">
                    <a className="navbar-brand">GyanBlog</a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample07XL">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link href="/">
                                <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#">
                                <a className="nav-link">Articles</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#">
                                <a className="nav-link">Write</a>
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <Button className="nav-link">
                                Signup
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </Nav>
    )
}

export default NavBar