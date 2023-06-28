import * as React from 'react'
import { Link } from 'gatsby'
import CustomLinkStyles from '../components/style'

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <nav>
                <ul>
                <li><Link style={CustomLinkStyles} to="/">Home</Link></li>
                <li><Link style={CustomLinkStyles} to="/about">About</Link></li>
                </ul>
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout