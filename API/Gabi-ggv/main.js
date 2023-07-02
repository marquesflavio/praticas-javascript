fetch("https://api.ggvinteligencia.com.br/webhook/start-test", {

    method : "GET",
    headers : {
        "Authorization": "teste-dev-ggv"
    }
    

}
)

.then((res) => console.log(res.json()))

.catch((err) => {
    console.log("ocorreu o erro: ",err)
})

// está dando erro de CORS, como se não tivesse autorização para acessar os dados do endpoint.