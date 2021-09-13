import React from 'react'

export default (props) => {
    const isPar = props.numero % 2 === 0
    return (
        <div>
            <h3>Número: {props.numero}</h3>
            <p>Resultado: {isPar ? <span>Par</span> : <span>Ímpar</span>}</p>
        </div>
    )
}