const { fetchStudentPayments }  = require("../services/fnde.service")
const { HTTP_OK, HTTP_NOT_FOUND } = require("../config/constants")

module.exports = {
    async getPaymentsController(request, response){
        let cpf = request.params.cpf
        if(cpf.match(/^\d{11}$/) === null){
            return response.status(HTTP_NOT_FOUND).json({
                error: "CPF inválido. Deve conter 11 dígitos."
            });
        }
        try {
            let data  = await fetchStudentPayments(cpf);
            response.status(HTTP_OK).json(data);
        } catch (error) {
            response.status(HTTP_NOT_FOUND).json({
                error: `Erro ao buscar pagamentos para ${cpf}`
            });
        }
    }
}
