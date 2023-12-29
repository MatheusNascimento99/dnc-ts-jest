import { listaMokc, listaUrbanaMokc } from "../__mocks__/tratamentos.mock";
import { descobrirNomes } from "../nomes";
import * as tratamentos from "../tratamentos";

describe('nomes suite', () => {
    it('Deverá retornar o último nome da primeira lista', () => {
        expect(descobrirNomes([listaMokc, listaUrbanaMokc])).toBe("Jade")
    })


    //stub é observar a funcionalidade de uma função, aspectos específicos da mesma
    it('Deve chamar a função ultimoValor', () => {
        const ultimoValorMock = jest.spyOn(tratamentos, 'ultimoValor') //jest.spyOne leva 2 parametros, o PRIMEIRO é a variável que engloba todos os métodos de um arquivo e o SEGUNDO é o métodos que eu quero obeservar de fato
       
    const response = descobrirNomes([
            listaMokc, listaUrbanaMokc
        ]) 

        expect(ultimoValorMock).toBeCalled()
        expect(response).toBe("Jade")
    })

})


 