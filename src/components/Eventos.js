function Eventos() {

    function meuEvento(){
        console.log("Ativado")
    }

    return(
        <div>
            <p>Clioque aqui para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Eventos