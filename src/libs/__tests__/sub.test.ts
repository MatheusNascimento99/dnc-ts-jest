import { Sub } from "../sub";

describe('Unit - sub test suite', () => {
    it('Deverá subtrair 3 e 2 e retornar 1', () => {
        expect(Sub(3, 2)).toEqual(1)
    })    

    it('Deverá subtrair -3 e 2 e retornar 1', () => {
        expect(Sub(-3, 2)).not.toEqual(1)
    })   
})
