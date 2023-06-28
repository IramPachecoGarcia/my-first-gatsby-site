import * as React from 'react'

export const PrimaryHeading = (props) => {
    return (
        <div class="primary-heading-container">
            <h1 class="primary-heading">{props. children}</h1>
        </div>
    )
}

export default PrimaryHeading