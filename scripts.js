let chave = "b0599c44e41f76ce63aa5115f2ae0dd5"

function colocarNaTela(dados){
    console.log(dados)
    document.querySelector("#cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector("#temperatura").innerHTML =  Math.floor(dados.main.temp) + "°C"
    document.querySelector("#previsao").innerHTML = dados.weather[0].description
    document.querySelector("#nuven").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector("#umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
}

async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    chave + 
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(resposta => resposta.json())

    colocarNaTela(dados)
}


function cliqueiNoBotao(){
   let cidade = document.querySelector("#pesquisar").value

   buscarCidade(cidade)
}