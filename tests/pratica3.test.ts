import {pratica3} from '../src/pratica3'

describe(("Praticando com Jest"), () => {
    test("Deve retornar um objeto contendo propriedades soma e multiplicacao", () => {
        const result1 = pratica3(3,5)
        expect(result1).toEqual( {soma: 8, multiplicacao: 15})

    })
})