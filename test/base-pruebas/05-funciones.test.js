import { getUser } from "../../src/base-pruebas/05-funciones"
import { getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => { 
    test('getUser debe retorar un objeto', () => { 
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser()

        expect(testUser).toStrictEqual(user)
    })

    test("getUsuarioActivo debe de rotornar un objeto",()=>{

        const nombre = 'Juan'

        const testUserActivo = {
            uid: 'ABC567',
            username: nombre
        }
        const userActivo = getUsuarioActivo(nombre)
        expect(testUserActivo).toStrictEqual(userActivo)
    })

})