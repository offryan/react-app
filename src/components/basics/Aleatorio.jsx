/* eslint-disable import/no-anonymous-default-export */
import React from "react"

export default props =>
{
    const {min, max} = props;
    const NumRandom = parseInt(Math.random() * (max - min)) + min;
    return (
        <>
            <h4>Número Aleatório</h4>
            <p>
                <strong>Valor Mínimo: </strong> {props.min}
            </p>
            <p>
                <strong>Valor Máximo: </strong> {props.max}
            </p>
            <p>
                <strong>Valor Escolhido: </strong> {NumRandom}
            </p>
        </>
    )
}