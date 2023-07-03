import Button from "./evento/Button"

function Eventos() {

    function meuEvento(){
        console.log("Ativado")
    }

    function segundoEvento() {
        console.log('Ativando o segundo evento')
    }

    return(
        <div>
            <p>Clioque aqui para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
        </div>
    )
}

export default Eventos