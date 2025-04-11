const productos = [
    { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
    { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
    { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" }, 
    { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
    { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
    ];

// Parte 1
// 1.
console.log(productos[0].nombre);
// 2.
for (const producto of productos) {
    console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
}
// 3.
productos.forEach(producto => {
    console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
});
// Parte 2
// 4. 
const nombresDeProductos = productos.map(producto => producto.nombre);
console.log(nombresDeProductos);
// 5.
const ropa = productos.filter(producto => producto.categoria === "Ropa");
ropa.forEach(producto => {
    console.log(`Producto: ${producto.nombre} - Categoría: ${producto.categoria} - Precio: $${producto.precio}`);
});
// 6.
const productosCaros = productos.filter(producto => producto.precio > 3000);
productosCaros.forEach(producto => {
    console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
});
// 7.
const gorra = productos.find(producto => producto.nombre === "Gorra");
console.log(gorra);
// Parte 3
// 8.
const hayProductosCaros = productos.some(producto => producto.precio > 10000);
console.log(hayProductosCaros);
// 9.
const todosMasDe1000 = productos.every(producto => producto.precio > 1000);
console.log(todosMasDe1000);
// 10.
const contieneCampera = nombresDeProductos.includes("Campera");
console.log(contieneCampera);
// Parte 4
// 11.
const productosOrdenadosPorPrecio = productos.slice().sort((a, b) => a.precio - b.precio);
productosOrdenadosPorPrecio.forEach(producto => {
    console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
});
// 12.
const mensajes = productos.map(producto => `El producto ${producto.nombre} cuesta $${producto.precio} y pertenece a la categoria ${producto.categoria}.`);
console.log(mensajes);
// 13.
const nuevosProductos = [
    { id: 6, nombre: "Botas", precio: 2200, categoria: "Calzado" },
    { id: 7, nombre: "Bufanda", precio: 1800, categoria: "Accesorios" }
]
const todosLosProductos = [...productos, ...nuevosProductos];
todosLosProductos.forEach(producto => {
    console.log(`ID: ${producto.id} - Producto: ${producto.nombre} - Precio: $${producto.precio} - Categoría: ${producto.categoria}`);
});