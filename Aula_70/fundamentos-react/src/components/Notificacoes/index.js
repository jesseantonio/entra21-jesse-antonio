export function Notificacoes(props){
    const notificacoes = props.mensagens || [];
  
    return(
        <>
        {
            notificacoes.lenght > 0 &&
        <p> Voce têm {props.mensagens.lenght} notificacoes</p>
        }
        </>
    );
}