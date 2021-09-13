export default (props) => {
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]

    const ifChild = props.children.filter(child => {
        return child != elseChild
    })

    if(props.teste){
        return ifChild
    }else{
        return elseChild
    }
}

export const Else = (props) => props.children