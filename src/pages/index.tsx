import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from 'gatsby'
import Greeting from '../components/greeting'
import CustomLinkStyles from '../components/style'
import { PrimaryHeading } from '../components/primaryHeading'
import '../styles/style.css'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <PrimaryHeading>Welcome to my Gatsby site!</PrimaryHeading>
      <Link style={CustomLinkStyles} to="/about">About</Link>
      <p>I'm making this following the Gatsby Tutorial</p>
    </main>
  )
}

export default IndexPage
export {Head} from "../head_metadata/head"
