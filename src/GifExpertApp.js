import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';


export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setcategories] = useState(['One Punch']);
  
//   const handleClick = () => {
//         // setcategories([...categories, 'HunterXHunter']);
//         // NOTA: ESTA FORMA GNERA UN CALLBACK MEDIANTE UNA Function
//         // QUE DESPUES SE PUEDE VOLVER A REUTILIZAR.
//         setcategories( cats => [...cats, 'HunterXHunter']);
//   }
    // {/* IMPORTATE COMO HACEMOS LA COMUNICACION ENTRE COMPONENTES
    //     ES ASI LE PODEMOS PASARLE PROPIEDADES Adcategorias mediante una funcion 
    //     EN ESTE CASO setCategories */}
    return (
    <>
        <h2>Gif Expert App</h2>
      
        <AddCategory setcategories={setcategories} />
        <hr />
        {/* <button onClick={handleClick}>Agregar</button> */}

        <ol>
        {
            // categories.map( (category, index) => {
            //         return <li key={ index }> { category } </li>   
            //     })     
            // categories.map( category => (
            //      <li key={ category }> { category } </li>
            //      ))   
            categories.map( category => (
                    <GifGrid 
                    key={category}
                    category={ category } />
                ))   
            
            
        }

        </ol>
    </>
   )
};

// categories.map( (category, index) => {
//     return <li key={ index }> { category } </li>   
// }) 