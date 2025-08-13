import { crearProducto, actualizarProducto, eliminarProducto, cargarProductos } from '/services/peticionesProductos.js';



const form = document.getElementById('productosForm');
const lista = document.getElementById('listaProductos')


form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = document.getElementById('productoID').value;
  const nombre = document.getElementById('nombreProducto').value;
  const precio = parseFloat(document.getElementById('precioProducto').value);
  const stock = parseInt(document.getElementById('stock').value);

  const producto = { nombre, precio, stock };

  if (id) {
    await actualizarProducto(id, producto);
  } else {
    await crearProducto(producto);
  }

  form.reset();
  cargarProductos();
});

window.eliminarProducto = async (id) => {
  await eliminarProducto(id);
  cargarProductos();
};

window.cargarFormulario = (producto) => {
  document.getElementById('productoID').value = producto.id;
  document.getElementById('nombreProducto').value = producto.nombre;
  document.getElementById('precioProducto').value = producto.precio;
  document.getElementById('stock').value = producto.stock;
};
