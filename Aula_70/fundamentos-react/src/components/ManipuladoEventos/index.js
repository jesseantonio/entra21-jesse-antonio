export function ManipulandoEventos(){
    function handleClick(){
        alert("Você clicou no botão");
    }
    function handleMouveOver(){
        console.log("Você entrou no botão")
    }
    function handleMouveLeave(){
        console.log("Você saiu no botão")
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log("Formulário Enviado");
    }

    return(
        <form onSubmit={handleSubmit}> 
        <input type="text"/>
        <button
         onClick={handleClick}
         onMouseOver={handleMouveOver}
         onMouseLeave={handleMouveLeave}
         >Clique em mim!</button>
        </form>
    );
}