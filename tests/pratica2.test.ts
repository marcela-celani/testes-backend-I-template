import {pratica2} from '../src/pratica2'

describe(("Praticando com Jest"), () => {
    test("Deve retornar true se receber número inteiro par", () => {
        const result1 = pratica2(10)
        const result2 = pratica2(24)

        expect(result1).toBe(true) // funciona apenas para dados primitivos
        expect(result1).toEqual(true) // funciona tambem para arrays e objetos
        expect(result2).not.toBe(false)

    })

    test("Deve retornar false se receber número inteiro impar", () => {
        const result1 = pratica2(11)
        const result2 = pratica2(23)

        expect(result1).toBe(false)
        expect(result2).toBeFalsy()
    })

    test("Deve retornar null se receber parametro diferente de number", () => {
        const result1 = pratica2("2" as any)// tipagem por motivos de typescript nao aceitar que eu envie de outro tipo em relaçao ao metodo

        expect(result1).toBeNull()
        expect(result1).toBe(null)
        expect(result1).toEqual(null)

    })
})