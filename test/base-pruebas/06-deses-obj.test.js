import { usContext } from "../../src/base-pruebas/06-deses-obj"
describe('Prueba en el archivo 06-deses-obj', () => { 
    test('debe retornar un objeto', () => {

        const clave = 'Ironman'
        const edad = 45

        const testUser = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }
        const userTest = usContext({ clave, edad })
        expect(testUser).toStrictEqual(userTest)

    })
})