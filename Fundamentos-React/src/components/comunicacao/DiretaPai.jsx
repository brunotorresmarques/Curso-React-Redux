import React from 'react'
import DiretaFilho from './DiretaFilho'

export default (props) => {
    return(
        <div>
            <DiretaFilho texto='João' numero={20} bool= {true}></DiretaFilho>
            <DiretaFilho texto='Maria' numero={18} bool= {true}></DiretaFilho>
        </div>
    )
}