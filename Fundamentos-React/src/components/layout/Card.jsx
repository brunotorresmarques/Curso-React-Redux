import React from 'react'

import "./Card.css"

export default (props) => {
    const estilo = {
        backgroundColor: props.color || 'red',
        borderColor: props.color || 'red',

    }

    return (
        <div className="card" style={estilo}>
            <div className="title">{props.titulo}</div>
            <div className="content">{props.children}</div>
        </div>
    )
}
