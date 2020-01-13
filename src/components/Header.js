import React from 'react'

export default function Header() {
    return (
        <div style ={headerStyle}>
            <h1>header</h1>
        </div>
    )
}

const headerStyle ={
    background: 'black',
    color: 'white',
    textAlign: 'center'
}
