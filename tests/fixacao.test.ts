import {fixacao} from '../src/fixacao'

describe(("Praticando com Jest"), () => {
    test("Deve retornar lista contendo cada letra de uma palavra", () => {
        const result1 = fixacao('dev')
        expect(result1).toEqual(['d', 'e', 'v'])
    })
})