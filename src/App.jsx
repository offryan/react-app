/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Aleatorio from "./components/basics/Aleatorio";
import Fragmento from './components/basics/Fragmento';
import ComParametro from './components/basics/ComParametro';
// import Primeiro from './components/basics/Primeiro';

export default _ =>
{
    // const tag = '2. Criando Tags
    //                 { tag }
    //<hr/>
    //<Primeiro />

    return (
        <div id='app'>
            <h1>Fudamentos React</h1>

            <Aleatorio min={10} max={500}/>
            <hr/>

            <Fragmento />
            <hr/>

            <ComParametro
                titulo='3. Boletim Escolar:'
                aluno='Aluno 1'
                nota={8} />

            <ComParametro
                aluno='Aluno 2'
                nota={4} />
            <hr/>
        </div>
    )
}
