import React, { useState } from 'react';
import productos from "../data/productos.json";

export const Item = () => {

    console.log(productos[0].nombre);


  return (
    <div>
        <img src={productos[1].imagen} alt="" />
    </div>
  )
}
