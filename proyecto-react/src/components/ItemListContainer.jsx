import React, {useEffect, useState} from 'react'
import data from "../data/productos.json"
import { useParams } from 'react-router-dom'
import categories from "../data/categorias.json"
import { Link, NavLink } from 'react-router-dom'

export function ItemListContainer() {

  let { categoryId } = useParams()

  let [productos, setProductos] = useState([])

  let [titulo, setTitulo] = useState ("Productos")

  function pedirProductos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      }, 1000);
    })
  }

  useEffect(() => {

    pedirProductos()
      .then((res) => {
        if (categoryId) {
          setProductos( res.filter((prod) => prod.categoria.id === categoryId ) )
        } else {
          setProductos(res);
        }
    } )

    if (categoryId) {
      setTitulo(categories.find((cat) => cat.id === categoryId).nombre)
    } else {
      setTitulo("Productos")
    }
  }, [categoryId])


  return (

    <main className='itemListContainer'>
      {
        productos.length > 0 ? 
        productos.map(productos => {
          return <div>    
                    <div className="tarjetaProductos">
                      <h3 className="h3Tarjeta"></h3>
                      <div className="tarjetaProductoDetail">
                        
                        <p>{productos.nombre}</p>
                        <p>{productos.precio}</p>
                      </div>
                      <Link to={`/item/${productos.id}`} className='boton-elegante'>Ver más</Link>
                    </div>
                </div> 
        } ) : 
        "No hay productos"
      }
    </main>
  )
}

export default ItemListContainer
