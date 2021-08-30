export function Aluno(props){
    const situacao = props.media >= 6 ? "Aprovado!" : "Reprovado.";
    return(
        <>
        <h2>{props.nome}</h2>
        <h2>{props.media}</h2>
        <p><strong>Situação:</strong> {situacao}</p>
        </>
    );
}
