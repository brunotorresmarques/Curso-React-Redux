import React from 'react'
import './App.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Imput from './components/formulario/Imput'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'


export default props => {
    return (
        <div className='app'>
            <h1>Fundamentos React</h1>

            <div className='cards'>
                <Card titulo='#13 - Desafio Megasena' color='#cc0066'>
                    <Mega></Mega>
                </Card>

                <Card titulo='#12 - Contador' color='#e6e600'>
                    <Contador numeroInicial = {10}></Contador>
                </Card>
                <Card titulo='#11 - Componente Controlado' color='#ff0000'>
                    <Imput></Imput>
                </Card>
                <Card titulo='#10 - Comunicação Indireta' color='#00cccc'>
                    <IndiretaPai></IndiretaPai>
                </Card>
                <Card titulo='#09 - Comunicação Direta' color='#993399'>
                    <DiretaPai></DiretaPai>
                </Card>
                <Card titulo='#08 - Renderização Condicional' color='#006666'>
                    <UsuarioInfo usuario={{nome: 'Bruno'}}></UsuarioInfo>
                    <ParOuImpar numero={20}></ParOuImpar>
                </Card>
                <Card titulo='#07 - Desafio repetição (Tabela)' color='#bf8040'>
                    <TabelaProdutos></TabelaProdutos>
                </Card>
                <Card titulo='#06 - Repetição (Lista)' color='#00e600'>
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo='#05 - Componentes com filhos' color='#ff6600'>
                    <Familia sobrenome='Silva'>
                        <FamiliaMembro nome='Bruno' />
                        <FamiliaMembro nome='José' />
                        <FamiliaMembro nome='Ana' />
                    </Familia>
                </Card>

                <Card titulo='#04 - Aula desafio Aleatório' color='blue'>
                    <Aleatorio max={10} min={1}></Aleatorio>
                </Card>

                <Card titulo='#02 - Aula Componente com parâmetro' color='#ff0066'>
                    <ComParametro titulo="Situação do Aluno" nome="Bruno" nota={9.5}></ComParametro>
                </Card>

                <Card titulo='#01 - Aula Primeiro componente' color='#ffcc00'>
                    <Primeiro></Primeiro>
                </Card>
            </div>

        </div>
    )
}