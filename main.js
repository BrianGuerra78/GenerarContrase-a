//let cantidad = 10;
let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contraseña = document.getElementById('contraseña');

const cadenaCaracteres = 'abcdefghijklmnñopqrstuvwxyz1234567890ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';

function generar() {
    let numeroDigitado = parseInt(cantidad.value);
    console.log(numeroDigitado);

    if (numeroDigitado < 10) {
        alert("La cantidad de caracteres tiene que ser mayor o igual a 10");
        return;
    }

    let password = '';
    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);
        password += caracterAleatorio;
    }
    console.log("password generado: " + password);
    contraseña.value = password;
}

//let texto = "texto";
//console.log(typeof texto);