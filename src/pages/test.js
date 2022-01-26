// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../../styles/Home.module.css'
// import 'bootstrap/dist/css/bootstrap.css';
// import testCard from 'src/components/TestCard.js'
//
// const url = "https://app.contentful.com/spaces/w84vaxpfiq86/entries/5PYykY2s9yEU4Ff149lnTo";
// const response = fetch(url).then(res => res.json());
//
//
//     const Tests = ({testList}) => {
//         return(
//             <div className="container">
//                 {testList.map((test) => (
//                     <testCard test={test.fields} key={test.sys.id} />
//                 ))}
//             </div>
//         )
//     }
//
//     const client = require('contentful').createClient({
//         space: process.env.CONTENTFUL_SPACE_ID,
//         accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
//     })
//
//     export const getStaticProps = async () => {
//         const test = await client.getEntries();
//         return {
//             props: {
//                 testList: test.items
//             }
//         }
//     }
//     export default Tests;