import * as React from 'react'
import { 
    primaryHeadingContainer, 
    primaryHeadingStyles 
} from './primaryHeading.module.css'

export const PrimaryHeading = ({children}) => {
    return (
        <div className={primaryHeadingContainer}>
            <h1 className={primaryHeadingStyles}>{children}</h1>
        </div>
    )
}

export default PrimaryHeading