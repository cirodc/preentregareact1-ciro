import React from "react";

export const Item = ( {producto} ) => {
  return (
    <div>
      <img src={producto.imagen} alt="" />
      <h2>{producto.nombre}</h2>
      <p>${producto.precio}</p>
      <p>{producto.descripcion}</p>
    </div>
  )
}
