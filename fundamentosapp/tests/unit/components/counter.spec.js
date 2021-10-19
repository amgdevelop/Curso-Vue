import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter';


describe('Counter Component', () => {

    let wrapper;

    beforeEach(() => {

        wrapper = shallowMount(Counter)
    })
    /* test('Debe hacer match con el snapshot', () => {

        const wrapper = shallowMount(Counter)

        expect(wrapper.html()).toMatchSnapshot()

    })
 */

    test('H2 debe tener el valor por defecto "Counter"', () => {




        expect(wrapper.find('h2').exists()).toBe(true)
        // find encuentra el primero y lo retorna .findAll() retorna todos 
        const h2Value = wrapper.find('h2').text()


        expect(h2Value).toBe('Counter')

    })

    test('el valor por defecto debe ser 100 en el p', () => {




        //todos los p
        //const pValues = wrapper.findAll('p')
        // esto nos permite excoger un elemento del array
        //expect(pValues[1].text()).toBe('100')


        // Permite buscar por un elemento de etiqueta concreto
        const pValues = wrapper.find('[data-testid="counter"]').text()
        //expect 2p=== 100


        expect(pValues).toBe('100')



    })

    test('debe incrementar y decrementar el contador', async () => {



        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')


        // Se necesita el await en el evento
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        // Se toma nuevamente el valor despues de los dos clicks
        const value = wrapper.find('[data-testid="counter"]').text()

        expect(value).toBe('101')
    })

    test('debe establecer el valor por defecto', () => {


        // Como conseguir las props 
        const { start } = wrapper.props();

        const value = wrapper.find('[data-testid="counter"]').text()


        expect(Number(value)).toBe(start)
    })


    test('debe mostrar la prop title', () => {

        const title = 'Hola Mundo!!!!!!'

        const wrapper = shallowMount(Counter, {
            props: {
                title
            }
        })

        expect(wrapper.find('h2').text()).toBe(title)

    })

})