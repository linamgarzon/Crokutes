//funcion nativa fetch que genera una promesa
const listaProducto = () =>
  fetch("http://localhost:3001/producto").then((respuesta) => respuesta.json());

export const productService ={
    listaProducto,
}