fetch('https://api.ggvinteligencia.com.br/webhook/start-test', {

    method : "GET",
    mode: "no-cors",
    Headers : {
        "authorization": "teste-dev-ggv"
    }
}
)

.then((res) => res.json())
.then((data)=>{
    console.log(data)
})