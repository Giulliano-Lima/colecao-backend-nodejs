fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL").then(resposta=> {
    return resposta.json()

}). then(corpo => {
    console.log(corpo)
})