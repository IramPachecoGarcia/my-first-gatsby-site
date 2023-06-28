import * as React from 'react'
import { Link } from 'gatsby'

const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const About = () => {
    return (
        <div style={pageStyles}>
            <h1>About Page</h1>
            <Link to="/">Home</Link>
            <p>Hi, I'm the creator of this site!</p>
        </div>
    )
}

export default About;
export {Head} from "../head_metadata/head.tsx"
