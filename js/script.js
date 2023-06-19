let labelInput = document.getElementById('label-input')
let labelResult = document.getElementById('label-result')
let inputConvertValue = document.getElementById('input-convertion')
let resultConvertValue = document.getElementById('resultConvertion')
let howConvertShow = document.getElementById('howConvert')
let explain = document.getElementById('explanations')
let valueConvertSelection = true

function showValue() {
    let temperatureInput = inputConvertValue.value
    if (valueConvertSelection) {
        let convertTemperatureValue = (temperatureInput * 9 / 5) + 32;
        let howConvertText = temperatureInput + "°C x (9/5) + 32 = " + convertTemperatureValue + "°F"
        calculateTemperature(convertTemperatureValue, howConvertText)
    } else {
        let convertTemperatureValue = (temperatureInput - 32) * 5 / 9
        let howConvertText = temperatureInput + "°F - 32 * 5/9 = " + convertTemperatureValue + "°C"
        calculateTemperature(convertTemperatureValue, howConvertText)
    }

}

function reverse() {
    if (valueConvertSelection) {
        labelInput.textContent = "Fahrenheit (°F):"
        labelResult.textContent = "Celsius (°C):"
        explain.innerHTML = `<h1 class="explenation-heading">Cara Konversi Dari Fahrenheit (°F) ke Celcius (°C)</h1>
            <hr>
            <p>
                Suhu <span>S</span> dalam derajat Celsius (°C) sama dengan suhu <span>S</span> dalam derajat <br>
                Fahrenheit (°F) kurang 32 kali 5/9
            </p>
            <p><span>S</span><sub>(°C)</sub>&ensp;=&ensp;(<span>S</span><sub>(°F)</sub> -32) * 5/9</p>`
        valueConvertSelection = false
    } else {
        labelInput.textContent = "Celsius (°C):"
        labelResult.textContent = "Fahrenheit (°F):"
        explain.innerHTML = `<h1 class="explenation-heading">Cara Konversi Dari Celcius (°C) ke Fahrenheit (°F)</h1>
            <hr>
            <p>
                Suhu <span>S</span> dalam derajat Fahrenheit (°F) sama dengan suhu <span>S</span> dalam derajat <br>
                Celsius (°C) kali 9/5 tambah 32
            </p>
            <p><span>S</span><sub>(°F)</sub>&ensp;=&ensp;(<span>S</span><sub>(°C)</sub> x 9/5 + 32)</p>
            <p>atau</p>
            <p><span>S</span><sub>(°F)</sub>&ensp;=&ensp;(<span>S</span><sub>(°C)</sub> x 1.8 + 32)</p>`
        valueConvertSelection = true
    }
}

function calculateTemperature(value, text) {
    resultConvertValue.innerHTML = value
    howConvertShow.innerHTML = text
}