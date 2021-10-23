import { shallowMount, mount } from '@vue/test-utils';
import PokemonPage from '@/pages/PokemonPage';
import { pokemons } from '../mocks/pokemons.mock'


describe('PokemonPage component', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(PokemonPage)
    })


    test('debe llamar el mixPokemonArray en el mount', () => {

        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')

        const wrapper = shallowMount(PokemonPage)

        expect(mixPokemonArraySpy).toHaveBeenCalled()
    })


    test('debe hacer match con el snapshot cuando cargan los pokemon', () => {

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: "",
                };
            }
        })

        expect(wrapper.html()).toMatchSnapshot()



    })

    test('debe mostrar los componentes de PokemonPicture y PokemonOptions', () => {

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: true,
                    showAnswer: false,
                    message: "",
                };
            }
        })


        const picture = wrapper.find('pokemon-picture-stub')
        const options = wrapper.find('pokemon-options-stub')

        // pokemonPicture debe existir
        expect(picture.exists()).toBe(true)
        // pokemonOptcions debe existir
        expect(options.exists()).toBe(true)



        // pokemonPicture  attribute pokemonId === 5
        expect(picture.attributes('pokemonid')).toBe('1')

        //PokemonOptions attribute pokemons toBe true
        expect(options.attributes('pokemons')).toBeTruthy()
    })



    test('pruebas con checkAnswer', async () => {


        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: "",
                };
            }
        })

        await wrapper.vm.checkAnswer(1)

        expect(wrapper.find('h2').exists()).toBeTruthy()
        expect(wrapper.vm.showPokemon).toBe(true)
        expect(wrapper.find('h2').text()).toBe(`Correcto, el pokemon es ${pokemons[0].name.toUpperCase()}`)


        await wrapper.vm.checkAnswer(10)
        console.log(wrapper.vm.message)
        expect(wrapper.vm.message).toBe(`Lo siento, el pokemon es ${pokemons[0].name.toUpperCase()}`)

    })




})