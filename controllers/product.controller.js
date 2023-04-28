import { productService } from "../Javascript/service/product-server.js";
import { pricePoint } from "../utils/pricePoint.js";

console.log(productService);

const crearNuevoProducto = (url, nombre, precio) => {
    const linea = document.createElement("div");
    const contenido = `
    <div class="producto">
      <img class="producto_imagen" src="${url}" alt="Purina">
      <span class="producto_descripcion">${nombre}</span>
      <span class="producto_precio" data-precio>$${pricePoint(precio)}</span>
      <a class="producto_boton" href="#">Ver producto</a>
   </div>`;
    linea.innerHTML = contenido;
    return linea;
  };
  const seccion = document.querySelector("[data-botones-Cantidad]");

  productService.listaProducto()
  .then((data) => {
    data.forEach((producto) => {
      const nuevaLinea = crearNuevoProducto(
        producto.url,
        producto.nombre,
        producto.precio
      );
      seccion.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrio un error" + error));