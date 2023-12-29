import { ultimoValor } from "../tratamentos";
import { listaMokc } from "../__mocks__/tratamentos.mock";



describe('teste suite', () => {
    it('Deve retornar Isadora', () => {
        expect(ultimoValor(["Joaquim", "Vitor", "Isadora"])).toBe('Isadora')
    })
})

describe('teste suite', () => {
    it('Deve retornar Isadora', () => {
        expect(ultimoValor(listaMokc)).not.toBe('Vitor')
    })
})