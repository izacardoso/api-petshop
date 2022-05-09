const modeloTabela = require('../rotas/fornecedores/modeloTabelaFornecedor')

modeloTabela
    .sync()
    .then(()=> console.log('tabela criada com sucesso'))
    .catch(console.log)