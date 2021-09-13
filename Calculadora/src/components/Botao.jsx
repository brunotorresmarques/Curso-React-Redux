import React from 'react'
import './Botao.css'

export default (props) => {
    let classes = 'button '
    classes += props.operacao ? 'operacao ' : ''
    classes += props.duplo ? 'duplo' : ''
    classes += props.triplo ? 'triplo' : ''

    console.log(classes)

    return(
        <button 
        onClick={e => props.click && props.click(props.label)}
        className={classes}>
            {props.label} 
        </button>
    )
}