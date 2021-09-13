import React from 'react'

export default function (props) {
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                O aluno 
                <strong> {props.nome} </strong> 
                tirou 
                <strong> {props.nota}</strong>
            </p>
        </div>
    )
}