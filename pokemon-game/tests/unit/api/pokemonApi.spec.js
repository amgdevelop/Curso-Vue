import pokemonApi from '@/api/pokemonApi';
import { shallowMount } from '@vue/test-utils'


describe('pokemonApi', () => {


    test('axios debe estar configurado con el api de pokemon', () => {

        console.log(pokemonApi.defaults.baseURL)

        let baseURL = pokemonApi.defaults.baseURL

        expect(baseURL).toBe('https://pokeapi.co/api/v2/pokemon')

    })


})