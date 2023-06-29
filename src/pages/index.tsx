import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { PrimaryHeading } from '../components/primaryHeading'
import Layout from '../components/layout'
import '../styles/style.css'

const IndexPage: React.FC<PageProps> = () => {
    return (
        <main>
            <Layout></Layout>
            <PrimaryHeading>Welcome to my Gatsby site!</PrimaryHeading>
        </main>
    )
}

export default IndexPage
export {Head} from "../head_metadata/head"
