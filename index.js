function convertTemperature() {
    let val = document.getElementById('input_value')
    let result = document.getElementById('result')
    let output = document.getElementById('output')
    let input = document.getElementById('input')

    val.addEventListener('keyup', convertTemperature)
    input.addEventListener('change', convertTemperature)
    output.addEventListener('change', convertTemperature)

    let inputValue = input.value
    let outputValue = output.value

    /* FORMULAS DE CONVERSÃO 
    celsius_fahrenheit = (celsius * 9/5) + 32
    celsius_kelvin = celsius + 273.15

    fahrenheit_celsius = (fahrenheit - 32) * 5/9
    fahrenheit_kelvin = (fahrenheit - 32) * 5/9 + 273.15

    kelvin_celsius = kelvin - 273.15
    kelvin_fahrenheit = (kelvin - 273.15) * 9/5 + 32
    */

    // conversão para celsius
    if (inputValue === 'celsius' && outputValue === 'fahrenheit') {
        result.innerHTML = Number((val.value * 9) / 5) + 32
    } else if (inputValue === 'celsius' && outputValue === 'kelvin') {
        result.innerHTML = Number(val.value + 273.15)
    } else if (inputValue === 'celsius' && outputValue === 'celsius') {
        result.innerHTML = val.value
    }
    // conversão para fahrenheit
    if (inputValue === 'fahrenheit' && outputValue === 'celsius') {
        result.innerHTML = Number((val.value - 32) * 9) + 5
    } else if (inputValue === 'fahrenheit' && outputValue === 'kelvin') {
        result.innerHTML = Number(((val.value - 32) * 5) / 9) + 273.15
    } else if (inputValue === 'fahrenheit' && outputValue === 'fahrenheit') {
        result.innerHTML = val.value
    }

    //  conversão para kelvin
    if (inputValue === 'kelvin' && outputValue === 'celsius') {
        result.innerHTML = Number(val.value - 273.15)
    } else if (inputValue === 'kelvin' && outputValue === 'fahrenheit') {
        result.innerHTML = Number(((val.value - 273.15) * 9) / 5) + 32
    } else if (inputValue === 'kelvin' && outputValue === 'kelvin') {
        result.innerHTML = val.value
    }
}

function reset() {
    convertTemperature()
}
