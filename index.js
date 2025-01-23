

function convertTemperature() {
    const inputElement = document.getElementById("celsius");
    const celsius = parseFloat(inputElement.value);

    // Validar que el input sea un número
    if (Number.isNaN(Number(celsius))) {
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
