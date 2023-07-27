import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Preuba en 02-template-string', () => { 
    test('getSaludo debe retorn "Hola fernando', () => { 
        const name = "Fernando";
        const message = getSaludo(name)

        expect(message).toBe(`Hola ${name}`)
            
    })
 })