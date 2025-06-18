import { useEffect, useState } from "react"
import "./Cronometro.css"


function Cronometro() {

    const [tempo, setTempo] = useState(0) // tempo está começando em 0
    const [executando, setExecutando] = useState(false) // O cronometro começa parado por isso ele esta como falso

    useEffect(() => {

        let intervalo
        if (executando) {
            intervalo = setInterval(() => {
                setTempo((tempoAnterior) => tempoAnterior + 10) // caso ele for executado sera adicionado 10 ms
            }, 10)
        } else if (!executando) {
            clearInterval(intervalo) // limpa o contador
        }
        return () => clearInterval(intervalo) // essa função tem a função de limpar o cronometro caso aconteça algo

    }, [executando])

    return (
        <>
            <div className="containerMainCronometro">
                <h1 className="tituloCronometro">Cronômetro</h1>
                <div className="cronometro">
                    <span className="cronometoSaida" >{("0" + Math.floor((tempo / 60000) % 60)).slice(-2)}:</span>
                    <span className="cronometoSaida" >{("0" + Math.floor((tempo / 1000) % 60)).slice(-2)}:</span>
                    <span className="cronometoSaidaMilissegundo" >{("0" + ((tempo / 10) % 100)).slice(-2)}</span>
                </div>
                <div className="divBotoesCronometro">
                    {executando ? (
                        <button className="botoesCronometro" onClick={() => { setExecutando(false) }}>Parar</button>
                    ) : (
                        <button className="botoesCronometro" onClick={() => { setExecutando(true) }}>Iniciar</button>
                    )}
                    <button className="botoesCronometro" onClick={() => { setTempo(0) }}>Zerar</button>
                </div>
            </div>
        </>
    )
}


export default Cronometro 