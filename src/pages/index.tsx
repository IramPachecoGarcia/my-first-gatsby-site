import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from 'gatsby'
import Greeting from '../components/greeting'

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1>Welcome to my Gatsby site!</h1>
      <Link to="/about">About</Link>
      <p>I'm making this following the Gatsby Tutorial</p>
      <Greeting name="Iram" />
    </main>
  )
}

export default IndexPage

export {Head} from "../head_metadata/head.tsx"
