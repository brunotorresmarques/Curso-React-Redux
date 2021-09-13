import React, {Component} from 'react'
import './Calculadora.css'

import Botao from '../components/Botao'
import Display from '../components/Display'


const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operacao: null,
    values: [0, 0],
    current: 0
}

export default class Calculadora extends Component {

    state = { ...initialState}

    constructor(props){
        super(props)
        this.addDigito = this.addDigito.bind(this)
        this.limparMemoria = this.limparMemoria.bind(this)
        this.setOperacao = this.setOperacao.bind(this)
    }

    limparMemoria(){
        this.setState({ ...initialState})
    }

    setOperacao(operacao){
        if(this.state.current === 0){
            this.setState({ operacao, current: 1, clearDisplay: true})
        }else{
            const equals = operacao == '='
            const currentOperacao = this.state.operacao

            const values = [...this.operacao.values]
            try{
                values[0] = eval(`${values[0]} ${currentOperacao} ${values[1]}`)
                console.log(values[0])

            } catch(e){
                values[0] = this.state.values[0]
            }
            values[1] = 0

            this.setState({
                displayValue: values[0],
                operacao: equals ? null : operacao,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    addDigito(n){
        if (n === '.' && this.state.displayValue.includes('.')){
            return
        }
        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        const valorCorrente = clearDisplay ? '' : this.state.displayValue
        const displayValue = valorCorrente + n
        this.setState({ displayValue, clearDisplay: false})

        if(n != '.'){
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
        }
    }

    render(){

        return(
            <div className='calculadora'>
                <Display  value={this.state.displayValue}/>
                <Botao label='AC' click={this.limparMemoria} triplo={true}/>
                <Botao label='/' click={this.setOperacao} operacao/>
                <Botao label='7' click={this.addDigito}/>
                <Botao label='8' click={this.addDigito}/>
                <Botao label='9' click={this.addDigito}/>
                <Botao label='*' click={this.setOperacao} operacao/>
                <Botao label='4' click={this.addDigito}/>
                <Botao label='5' click={this.addDigito}/>
                <Botao label='6' click={this.addDigito}/>
                <Botao label='-' click={this.setOperacao} operacao/>
                <Botao label='1' click={this.addDigito}/>
                <Botao label='2' click={this.addDigito}/>
                <Botao label='3' click={this.addDigito}/>
                <Botao label='+' click={this.setOperacao} operacao/>
                <Botao label='0' click={this.addDigito} duplo/>
                <Botao label='.' click={this.addDigito}/>
                <Botao label='=' click={this.setOperacao} operacao/>
            </div>
        )
    }
}
