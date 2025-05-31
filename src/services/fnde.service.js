const axios = require("axios")

const http = axios.create({
    baseURL: "https://www.fnde.gov.br/digef/rs/spba/publica"
})

module.exports = {
    async fetchStudentPayments(cpf){
        return new Promise(async (resolve, reject) => {
            try {
                let person      = await http.get(`/pessoa/1/10/${cpf}`)
                let hash        = person.data.pessoas[0].hash
                let payments    = await http.get(`/pagamento/${hash}`)
                let entities    = Object.values(payments.data.programas[0].entidades)
                let functions   = Object.values(entities[0].funcoes)

                resolve({
                    id: person.data.pessoas[0].hash,
                    cpf: person.data.pessoas[0].cpf,
                    nome: person.data.pessoas[0].nome,
                    municipio: payments.data.municipio,
                    uf: payments.data.uf,
                    atualizacao: payments.data.dataAtualizacao,
                    total_pago: payments.data.total,
                    pagamentos: functions[0].pagamentos
                })
            } catch (error) {
                reject(error)
            }
        })
    }
}