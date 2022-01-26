import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import TestCard from '../components/TestCard'

const client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

const Tests = ({testList}) => {
    return(
        <div className="container">
            {testList.map((test) => (
                <TestCard test={test.fields} key={test.sys.id} />
            ))}
        </div>
    )
}



export const getStaticProps = async () => {
    const test = await client.getEntries();
    return {
        props: {
            testList: test.items
        }
    }
}
export default Tests;