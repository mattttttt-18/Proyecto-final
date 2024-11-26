function agregar() {
            document.getElementById("ctexto").value = "En éste sector podemos encontrar, a un lado de la ciclovía, un supermercado Bodega Aurrera, un sitio para rentar algunos locales, una barbería, un puesto de tacos y venta de paletas llamada ´´Taquería Los Naranjos´´, una repostería, otro local de venta de tacos llamado ´´Los Cuñados´´, una ferretería llamada ´´Los Naranjos´´, también se encuentra una entrada a una residencial ´´Bosque de los Naranjos Sección Villas´´. Alrededor de la ciclovía hay muchas casas y residenciales privadas. Algunas bancas e iluminación en la ciclovía.";
        }
function agregar2() {
            document.getElementById("ctexto").value = "En éste sector podemos encontrar un vivero pequeño ´´llamado De la Flor Viveros´´, varios metros después encontraremos un pequeño puente, por el cual pasa un muy pequeño río, ésto llena de vegetación el lugar y fomenta el crecimiento y sustento de animales y plantas. A unos metros del puente, encontramos la entrada a un parque de tamaño pequeño. También podemos observar algunos comercios de comida cómo pizzerias o platillos de comida rápida cómo hamburguesas o sandwiches. De igual manera, encontramos la entrada a dos residenciales privadas, así cómo también un gimnasio y un minisuper.";
        }
function agregar3() {
            document.getElementById("ctexto").value = "En este sector no se encuentra mucho, la ciclovía sigue, a los lados se encuentra las calles y varias casas.";
        }
function filtro() {
            var img = document.getElementById("uno");
            img.style.filter = "";
        }
function filtro2() {
            var img = document.getElementById("dos");
            img.style.filter = "";
        }
function filtro3() {
            var img = document.getElementById("tres");
            img.style.filter ="";
        }
function nofiltro() {
            var img = document.getElementById("uno");
            img.style.filter = "blur(10px)";
        }
function nofiltro2() {
            var img = document.getElementById("dos");
            img.style.filter = "blur(10px)";
        }
function nofiltro3() {
            var img = document.getElementById("tres");
            img.style.filter = "blur(10px)";
        }




function mostrarAlerta(titulo, mensaje, delay) {
    setTimeout(() => {
        alert(titulo + ": " + mensaje);
    }, delay);
}

function agregar() {
    mostrarAlerta("Sector 1", "En este sector podemos encontrar, a un lado de la ciclovía, un supermercado Bodega Aurrera, un sitio para rentar algunos locales, una barbería, un puesto de tacos y venta de paletas llamada 'Taquería Los Naranjos', una repostería, otro local de venta de tacos llamado 'Los Cuñados', una ferretería llamada 'Los Naranjos', también se encuentra una entrada a una residencial 'Bosque de los Naranjos Sección Villas'. Alrededor de la ciclovía hay muchas casas y residenciales privadas. Algunas bancas e iluminación en la ciclovía.", 1000); // 1000 ms = 1 segundo
}

function agregar2() {
    mostrarAlerta("Sector 2", "En este sector podemos encontrar un vivero pequeño llamado 'De la Flor Viveros', varios metros después encontraremos un pequeño puente, por el cual pasa un muy pequeño río, esto llena de vegetación el lugar y fomenta el crecimiento y sustento de animales y plantas. A unos metros del puente, encontramos la entrada a un parque de tamaño pequeño. También podemos observar algunos comercios de comida como pizzerías o platillos de comida rápida como hamburguesas o sándwiches. De igual manera, encontramos la entrada a dos residenciales privadas, así como también un gimnasio y un minisuper.", 1000);
}

function agregar3() {
    mostrarAlerta("Sector 3", "En este sector no se encuentra mucho, la ciclovía sigue, a los lados se encuentran las calles y varias casas.", 1000);
}



// Función para calcular la huella de carbono
function calcularHuella(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores del formulario
    const distancia = parseFloat(document.getElementById('distance').value);
    const modo = document.getElementById('mode').value;

    let huella;

    // Definir la huella de carbono por modo de transporte (en kg de CO2)
    switch (modo) {
        case 'car':
            huella = distancia * 0.21; // kg CO2 por km en auto
            break;
        case 'bus':
            huella = distancia * 0.05; // kg CO2 por km en autobús
            break;
        case 'bike':
            huella = 0; // Bicicleta no genera huella de carbono
            break;
        default:
            huella = 0;
    }

    // Asignar un indicador de huella de carbono
    let indicador;
    if (huella <= 1) {
        indicador = "Baja";
    } else if (huella <= 5) {
        indicador = "Media";
    } else {
        indicador = "Alta";
    }

    // Mostrar el resultado
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h4>Huella de Carbono:</h4>
        <p>${huella.toFixed(2)} kg de CO2</p>
        <p>Tu huella de carbono es <strong>${indicador}</strong>.</p>
    `;
}

// Añadir el evento al formulario
document.getElementById('carbonForm').addEventListener('submit', calcularHuella);