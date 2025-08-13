const API_URL = "http://localhost:3001/productos";

export async function cargarProductos() {

    const res = await fetch(API_URL)
    const productos = await res.json()

    const lista = document.getElementById('listaProductos')
    lista.innerHTML = ''

   productos.forEach(producto => {
    const li = document.createElement('li');
    li.textContent = `${producto.nombre} - $${producto.precio} - Stock: ${producto.stock}`;

    const btnEditar = document.createElement('button');
    btnEditar.textContent = 'Editar';
    btnEditar.onclick = () => window.cargarFormulario(producto);

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.onclick = () => window.eliminarProducto(producto.id);

    li.appendChild(btnEditar);
    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });
}

export async function crearProducto(producto) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(producto)
  });
  const data = await res.json()
  console.log(data)
}

export async function actualizarProducto(id, producto) {
  await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(producto)
  });
}

export async function eliminarProducto(id) {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
}

