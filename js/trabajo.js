let nombre = prompt("Ingrese su nombre porfavor");
alert ("Bienvenido " + nombre + " a Ka Lafken Tourism");
let ubicacion = ["Ascenso al Volcan", "Tour Huilo Huilo", "Termas Geometricas", "Reserva Huerquehue", "Termas Vergara", "Parque Villarrica", "Rafting Bajo", "Rafting Alto", "Hidrospeed", "Canopy", "Transfer 1-5 personas", "Transfer 6-8 personas", "Transfer 11-16 personas", "Transfer 16-24 personas"];
const descuentos = ubicacion.slice (0, 4);
const descuentos2 = ubicacion.slice (10, 13);
alert ("Por temporada baja de invierno " + descuentos + " y " + descuentos2 +" están en descuento");
let precio = [105.000, 40.500, 47.000, 43.000, 45.000, 47.000, 15.000, 15.900, 14.700, 18.000, 60.000, 88.000, 118.000, 130.000];
let destino = "El destino seleccionado es: ";

class Producto{
    constructor(id, nombre, precio, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
}

let productos = [
    //TOURS//
    new Producto(101, "Ascenso al Volcan", 105000, "Tours"),
    new Producto(102, "Tour Huilo Huilo", 40500, "Tours"),
    new Producto(103, "Termas Geometricas", 47000, "Tours"),
    new Producto(104, "Reserva Huerquehue", 43000, "Tours"),
    new Producto(105, "Termas Vergara", 45000, "Tours"),
    new Producto(106, "Parque Villarrica", 47000, "Tours"),
    //Actividades//
    new Producto(201, "Rafting Bajo", 15000, "Actividades"),
    new Producto(202, "Rafting Alto", 15900, "Actividades"),
    new Producto(203, "Hidrospeed", 14700, "Actividades"),
    new Producto(204, "Canopy", 18000, "Actividades"),
    //Transfers//
    new Producto(301, "Transfer 1-5 personas", 60000, "Transfers"),
    new Producto(302, "Transfer 6-8 personas", 88000, "Transfers"),
    new Producto(303, "Transfer 11-16 personas", 118000, "Transfers"),
    new Producto(304, "Transfer 16-24 personas", 130000, "Transfers"),
    //Reservas(proximamente lo incluyo)//
];

let categorias = ["Tours", "Actividades", "Transfers"];
let ProductosEnCarro = [];
let categoria = "";

while (categoria != "salir" && categoria != null) {
    let auxi = categorias.join (" - ");
    categoria = prompt('Ingrese la categoría que desea ver o ingrese "salir" para finalizar: \n' + auxi);
    if (categoria != "salir" && categoria != null) {
        let productosEnCategoria = productos.filter((item) => item.categoria == categoria);
        console.log(productosEnCategoria);

    let cartelito = "";
    for (let i = 0; i < productosEnCategoria.length; i++) {
        cartelito += " id: "  + productosEnCategoria[i].id +  " precio: $" + productosEnCategoria[i].precio  + " " +  "Servicio: "  +  productosEnCategoria[i].nombre +  "\n";
    }


    let idSeleccionado = prompt("Esta es la lista de su categoría seleccionada, por favor introduzca el ID de su servicio: \n\n" + cartelito);
    let ProductosCarro = productosEnCategoria.find(item => item.id == idSeleccionado);

    console.log("Se ha agregado el producto: " + ProductosCarro.nombre + " al carrito");
    alert("Se ha agregado el producto: " + ProductosCarro.nombre + " al carrito, " + "el precio total es de: $" + ProductosCarro.precio);
    }
}