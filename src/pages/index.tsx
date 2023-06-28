import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from 'gatsby'
import Greeting from '../components/greeting'
import { PrimaryHeading } from '../components/primaryHeading'
import Layout from '../components/layout'
import '../styles/style.css'

const IndexPage: React.FC<PageProps> = () => {
    return (
        <main>
            <PrimaryHeading>Welcome to my Gatsby site!</PrimaryHeading>
            <Layout>
                <p>I'm making this by following the Gatsby Tutorial.</p>
            </Layout>
        </main>
    )
}

export default IndexPage
export {Head} from "../head_metadata/head"
