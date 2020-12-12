// Importacion
import React, {useState} from 'react'
import Functions from './componentes/Functions'
import MathOperations from './componentes/MathOperations'
import Numbers from './componentes/Numbers'
import Result from './componentes/Result'
import './App.css'

//Generacion de la funcion del componente
const App = () =>{
    // Lo que ejecuta la funcion
    console.log('Renderizacion de App')
    // creacion del array destructuring 
    const[stack, setStack] = useState("")
    return (
        <main className='react.calculator'>
            <Result value={stack} />
            <Numbers onClickNumber={number =>{
                console.log("Numero", number)
                // template literals ecmac6
                setStack(`${stack}${number}`) 
            }}/>            
            <Functions onContentClear = {() =>{
                 console.log("content clear")
                 setStack("")
            }}
            onDelete = {()=>{
                const newStack = stack.substring(0,stack.length - 1)
                setStack(newStack)
                console.log("borrar", newStack)
            }} />
            <MathOperations onClickOperation = {operacion =>{
               console.log("operacion", operacion)
               setStack(`${stack}${operacion}`) 
            }}
             onClickEqual = {igual =>{
                 console.log("igual", igual)
                 setStack(`${stack}${igual}`) 
             }} />
        </main>
    )
 };
// Exportacion
export default App;