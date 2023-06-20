//Convertendo Objeto JavaScript p/ JSON
//Utilizado no método POST quando queremos enviar infos para uma API por ex.

let json_cidades = {
    "cidades": [
    {
        "sigla":"Fpolis",
        "nome": "Florianópolis",
        "bairros": [
            "Ponta das Canas",
            "Abraão",
            "Agronômica",
            "Armação do Pântano do Sul",
            "Balneario Estreito",
            "Barra da Lagoa",
        ]
    },
    {
        "sigla":"SJ",
        "nome": "São José",
        "bairros": [
            "Nossa Senhora do Rosário",
            "Praia Comprida"
        ]
    },
    {
        "sigla":"Sao P Alcantara",
        "nome": "São Pedro de Alcântara",
        "bairros": [
            "Col Satana"
        ]
    }
]
};

const jsonData = JSON.stringify(json_cidades)
console.log(json_cidades)
console.log( typeof jsonData) // traz string


//------------------------------------------------------------------

//Agora o contrário, converter o JSON em objeto JavaScript, pois JS não lida com JSON
//Para o caso de fazer um GET de uma API por ex.

// const objData = JSON.parse(jsonData)

// console.log(objData)
// console.log(typeof objData)