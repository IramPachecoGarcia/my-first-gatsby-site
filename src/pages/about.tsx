import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { PrimaryHeading } from '../components/primaryHeading'
import '../styles/style.css'

const AboutPage = () => {
    return (
        <div>
            <PrimaryHeading>About Page</PrimaryHeading>
            <Layout>
                <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            </Layout>
        </div>
    )
}

export default AboutPage;
export {Head} from "../head_metadata/head"
