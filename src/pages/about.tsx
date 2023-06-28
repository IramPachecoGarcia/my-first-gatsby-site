import * as React from 'react'
import { Link } from 'gatsby'
import CustomLinkStyles from '../components/style'
import { PrimaryHeading } from '../components/primaryHeading'
import '../styles/style.css'

const AboutPage = () => {
    return (
        <div>
            <PrimaryHeading>About Page</PrimaryHeading>
            <Link style={CustomLinkStyles} to="/">Home</Link>
            <p>Hi, I'm the creator of this site!</p>
        </div>
    )
}

export default AboutPage;
export {Head} from "../head_metadata/head"
