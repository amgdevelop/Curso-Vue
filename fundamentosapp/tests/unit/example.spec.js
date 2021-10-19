describe('Example component', () => {

  test('Debe ser mayor a 10', () => {

    // ARREGLAR
    let value = 10;

    // ESTIMULO

    value += 2;

    //OBSERVAR EL RESULTADO

    expect(value).toBeGreaterThan(10)


  })

})