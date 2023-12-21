const CELSIUS_FAHRENHEIT = (celsius) => (celsius * 9) / 5 + 32
const CELSIUS_KELVIN = (celsius) => celsius + 273.15

const FAHRENHEIT_CELSIUS = (fahrenheit) => (fahrenheit - 32) * (5 / 9)
const FAHRENHEIT_KELVIN = (fahrenheit) => ((fahrenheit - 32) * 5) / 9 + 273.15

const KELVIN_CELSIUS = (kelvin) => kelvin - 273.15
const KELVIN_FAHRENHEIT = (kelvin) => ((kelvin - 273.15) * 9) / 5 + 32

function convertTemperature() {
    let val = parseFloat(document.getElementById('input_value').value)
    let result = document.getElementById('result')
    let input = document.getElementById('input').value
    let output = document.getElementById('output').value

    let convertedResult

    if (input === 'celsius' && output === 'fahrenheit') {
        convertedResult = CELSIUS_FAHRENHEIT(val)
    } else if (input === 'celsius' && output === 'kelvin') {
        convertedResult = CELSIUS_KELVIN(val)
    } else if (input === 'fahrenheit' && output === 'celsius') {
        convertedResult = FAHRENHEIT_CELSIUS(val)
    } else if (input === 'fahrenheit' && output === 'kelvin') {
        convertedResult = FAHRENHEIT_KELVIN(val)
    } else if (input === 'kelvin' && output === 'celsius') {
        convertedResult = KELVIN_CELSIUS(val)
    } else if (input === 'kelvin' && output === 'fahrenheit') {
        convertedResult = KELVIN_FAHRENHEIT(val)
    }

    result.innerHTML = convertedResult.toFixed(2)
}

// Adicionar um único ouvinte de evento para os elementos relevantes
document.getElementById('input_value').addEventListener('input', convertTemperature)
document.getElementById('input').addEventListener('change', convertTemperature)
document.getElementById('output').addEventListener('change', convertTemperature)

function reset() {
    document.getElementById('input_value').value = ''
    convertTemperature()
}
