// function convertirTemperatura() {
// Solicitar al usuario la temperatura en grados Celsius
// let celsius = prompt("Ingresa la temperatura en grados Celsius:");

// Convertir la entrada a número
// celsius = Number(celsius);

// Validar si la entrada es un número
// if (isNaN(celsius)) {
//     alert("Por favor, ingresa un número válido.");
//     return; // Detener la función si el valor no es un número
// }

// Calcular grados Fahrenheit y Kelvin
// let fahrenheit = (celsius * 9 / 5) + 32;
// let kelvin = celsius + 273.15;

// Mostrar los resultados en consola
// console.log("Grados Fahrenheit: " + fahrenheit);
// console.log("Grados Kelvin: " + kelvin);

// Mostrar los resultados en el DOM (en la página web)
//     document.getElementById("resultadoFahrenheit").innerText = "Grados Fahrenheit: " + fahrenheit;
//     document.getElementById("resultadoKelvin").innerText = "Grados Kelvin: " + kelvin;
// }

function convertTemperature() {
    const inputElement = document.getElementById("celsius");
    const celsius = parseFloat(inputElement.value);

    // Validar que el input sea un número
    if (isNaN(celsius)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    // Realizar las conversiones
    const fahrenheit = (celsius * 9) / 5 + 32;
    const kelvin = celsius + 273.15;

    // Mostrar los resultados en el DOM
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <p>Grados Fahrenheit: ${fahrenheit.toFixed(2)}</p>
        <p>Grados Kelvin: ${kelvin.toFixed(2)}</p>
    `;

    // Limpiar el campo del input para un nuevo intento
    inputElement.value = "";
}
