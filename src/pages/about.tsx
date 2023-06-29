import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { PrimaryHeading } from '../components/primaryHeading'
import '../styles/style.css'

const AboutPage = () => {
    return (
        <div>
            
            <Layout></Layout>
            <PrimaryHeading>About Page</PrimaryHeading>
        </div>
    )
}

export default AboutPage;
export {Head} from "../head_metadata/head"
