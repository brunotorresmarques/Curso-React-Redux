import React from 'react'
import Alunos from '../../data/alunos'

export default (props) => {
    const lis = Alunos.map((aluno)=>{
        return(
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} -- {aluno.nota.toFixed(1).replace('.',',')}
            </li>
        )
    })
    return(
        <div>
            <ul style={{listStyle:'none'}}>
               {lis}
            </ul>
        </div>
    )
}