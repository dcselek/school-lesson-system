import { Button } from 'carbon-components-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function MainPage() {
    return (
        <div>
            <h1>Main Page</h1>
            <Link to="/"><Button>Back To</Button></Link>
        </div>
    )
}
