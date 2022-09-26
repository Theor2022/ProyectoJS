
/*El nombre n:nombre p:precio s:stock*/

let nA = "Fallout 4"
let pA = 25
let sA = 31

let nB = "God Of War 4"
let pB = 27
let sB = 46

let nC = "The Elder Scrolls V: Skyrim"
let pC = 18
let sC = 30

let nD = "Assassin's Creed: Odyssey"
let pD = 17
let sD = 25

let precioTotal = 0

alert("Bienvenido a ZonaGame")
alert("Inventario Disponible: \n \n Fallout 4   25$US \n God Of War 4   27$US \n The Elder Scrolls V: Skyrim   18$US \n Assassin's Creed: Odyssey   17$US")


let opcion = prompt("Ingrese que juego quiere comprar: \n - Fallout 4 \n - God of war 4\n - The Elder Scrolls V\n - Assassins Creed: Odyssey\n - Salir") //modal con opciones

while (opcion.toUpperCase() != "SALIR") { 

    if (opcion.toUpperCase() == 'FALLOUT 4') { 
        let cantidadProductoFALLOUT4 = parseInt(prompt("Ingrese que cantidad de " + nA + " desea comprar:"))
        if (cantidadProductoFALLOUT4 <= sA) {
            precioTotal = precioTotal + (cantidadProductoFALLOUT4 * pA)
        }
        else {
            alert("Actualmente tenemos " + sA + " unidades de este producto")
        }
    }

    else if (opcion.toUpperCase() == 'GOD OF WAR 4') {
        let cantidadProductoGow = parseInt(prompt("ingrese que cantidad de " + nB + " desea comprar:"))
        if (cantidadProductoGow <= sB) {
            precioTotal = precioTotal + (cantidadProductoGow * pB)
        }
        else {
            alert("Actualmente tenemos " + sB + " unidades de este producto")
        }
    }

    else if (opcion.toUpperCase() == 'THE ELDER SCROLLS V') {
        let cantidadProductoSkyrim= parseInt(prompt("Ingrese que cantidad de " + nC + " desea comprar:"))
        if (cantidadProductoSkyrim <= sC) {
            precioTotal = precioTotal + (cantidadProductoSkyrim * pC)
        }
        else {
            alert("Actualmente tenemos " + sC + " unidades de este producto")
        }
    }

    else if (opcion.toUpperCase() == 'ASSASSINS CREED ODYSSEY') {
        let cantidadProductoAco = parseInt(prompt("Ingrese que cantidad de " + nD + " desea comprar:"))
        if (cantidadProductoAco <= sD) {
            precioTotal = precioTotal + (cantidadProductoAco * pD)
        }
        else {
            alert("Actualmente tenemos " + sD + " unidades de este producto")
        }
    }

    else {
        alert("No tenemos ese producto a la venta")
    }
    opcion = prompt("Ingrese que otro producto quiere comprar: \n - Fallout 4 \n - God Of War 4\n - The Elder Scrolls V\n - Assassins Creed: Odyssey\n - Salir")

}

if (precioTotal > 0) {
    alert("El Total es: " + precioTotal)
}
else {
    alert("Gracias por su visita!")
}