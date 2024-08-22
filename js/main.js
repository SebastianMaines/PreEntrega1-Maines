function calcularPrestamo() {
    // pasar datos ingresados de usuario
    const edad = document.getElementById('edad').value;
    const monto = document.getElementById('monto').value;
    const cuotas = document.getElementById('cuotas').value;
    const interesAnual = document.getElementById('interes').value;

    // valudacion vacios
    if (!edad || !monto || !cuotas || !interesAnual) {
        document.getElementById('resultado').innerText = "Por favor, complete todos los campos.";
        return;
    }

    // Convertir los valores a los tipos de datos adecuados
    const edadNum = parseInt(edad);
    const montoNum = parseFloat(monto);
    const cuotasNum = parseInt(cuotas);
    const interesAnualNum = parseFloat(interesAnual);

    // condicion mayor a 18 años
    if (edadNum < 18) {
        document.getElementById('resultado').innerText = "Debes ser mayor de 18 años para solicitar un préstamo.";
        return;
    }

    if (montoNum <= 0 || cuotasNum <= 0 || interesAnualNum < 0) {
        document.getElementById('resultado').innerText = "Por favor, ingrese valores válidos.";
        return;
    }

    // interes mensual a anual
    const interesMensual = interesAnualNum / 12 / 100;

    // valor de cuotas
    let total = 0;
    let resultadoTexto = '';
    for (let i = 1; i <= cuotasNum; i++) {
        const cuota = (montoNum * interesMensual) / (1 - Math.pow(1 + interesMensual, -cuotasNum));
        total += cuota;
        resultadoTexto += `Cuota ${i}: $${cuota.toFixed(2)}\n`;
    }

    // resultado
    resultadoTexto += `\nMonto total a pagar: $${total.toFixed(2)}`;
    document.getElementById('resultado').innerText = resultadoTexto;
}
