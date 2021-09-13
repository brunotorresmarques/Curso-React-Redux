import React from 'react'


export default (props) => {
    const gerarIdade = () => parseInt(Math.random() * (20)) + 20
    const gerarNerd = () => Math.random() > 0.5

    return(
        <div>
            <div>Filho</div>
            <button onClick={(e) =>{ props.quandoClicar('João', gerarIdade(), gerarNerd())}}>Fornecer Informações</button>
        </div>
    )
}