const roteador = require('express').Router()

roteador.get('/', (requisicao,respota) => {
    respota.send(
        JSON.stringify([])
    )
})

module.exports = roteador