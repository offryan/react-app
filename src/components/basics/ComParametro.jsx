/* eslint-disable import/no-anonymous-default-export */
export default function ComParametro(props) {

    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    const notaInt = Math.ceil(props.nota)

    return (
        <>
            <h4>{props.titulo}</h4>
            <p>
                O
                <strong> {props.aluno} </strong>
                tem nota:
                <strong> {notaInt} </strong>
                portanto, está
                <strong> {status}! </strong>
            </p>
        </>
    )
}
