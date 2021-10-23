import { shallowMount } from '@vue/test-utils';
import pokemonOptions from '@/components/pokemonOptions';
import { pokemons } from '../mocks/pokemons.mock'


describe('PokemonOptions component', () => {

    let wrapper

    wrapper = shallowMount(pokemonOptions, {
        props: {
            pokemons
        }
    })


    test('debe hacer match con el snapshot', () => {



        expect(wrapper.html()).toMatchSnapshot()



    })


    test('debe mostrar las 4 opciones correctamente', () => {

        const liTags = wrapper.findAll('li')

        expect(liTags.length).toBe(4)

        const [p1, p2, p3, p4] = wrapper.findAll('li')


        expect(p1.text()).toBe('BULBASAUR')
        expect(p2.text()).toBe('IVYSAUR')
        expect(p3.text()).toBe('VENUSAUR')
        expect(p4.text()).toBe('CHARMANDER')



    })


    test('debe emitir "selection" con sus respectivos parametros al hacer click', () => {
        const [li1, li2, li3, li4] = wrapper.findAll('li')

        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')

        expect(wrapper.emitted('selection').length).toBe(4)
        expect(wrapper.emitted('selection')[0]).toEqual([1])
        expect(wrapper.emitted('selection')[1]).toEqual([2])
        expect(wrapper.emitted('selection')[2]).toEqual([3])
        expect(wrapper.emitted('selection')[3]).toEqual([4])
    })



})