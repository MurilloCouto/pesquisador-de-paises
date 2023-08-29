document.getElementById('card').style.setProperty('display', 'none', 'important')


function Pesquisar(){
    document.getElementById('card').style.setProperty('display', 'block', 'important')
    let name = document.getElementById('name').value
    let finalURL = `https://restcountries.com/v3.1/name/${name}?fullText=true`
    console.log(finalURL)
    fetch(finalURL)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data[0].flag[0])
            console.log(data[0].altSpellings[1])
            console.log(data[0].capital[0])
            console.log(data[0].continents[0])
            console.log(data[0].population)

            let bandeira = document.getElementById('bandeira')
            let nome = document.getElementById('nome')
            let capital = document.getElementById('capital')
            let continente = document.getElementById('continente')
            let populacao = document.getElementById('populacao')


            bandeira.src = data[0].flags.svg
            nome.innerHTML = name
            capital.innerHTML = data[0].capital[0]
            continente.innerHTML = data[0].continents[0]
            populacao.innerHTML = data[0].population
        })
}
