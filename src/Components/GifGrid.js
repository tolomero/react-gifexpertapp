// import React, { useEffect } from 'react'
import React  from 'react';
import { useFetchGifts } from '../hooks/useFetchGifts';
// import { useState } from 'react';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';




// import { version } from 'react-dom'
export const GifGrid = ({ category }) => {

    // ACA ESTAMOS IMPORTANDO EL CUSTON HOOKS Q ES ELE QUE HACE EL LOADING
    // useFetchGifts();

    // aca se le manda como argumento la categoria
    // cuando se poene data: es para renombrar 
    const { data:images, loading } = useFetchGifts( category );
    console.log( images );

    // ESTADO DONDE NOSOTROS VAMOS A CARGAR LAS IMAGENES QUE QUEREMOS MOSTRAS Y COMO 
    // LAS QUEREMOS MOSTRAR
    // const [images, setImages] = useState([]);
// const [count, setCount] = useState(0)
//  useEffect NOS AYUDA A GENERAR CODIGO DE MANERA CONDICIONAL
//  Y PARA QUE ESTA PETICION NO SE ACTUALICE CADA VES QUE  QU EJECUTAMOS EL MODULO DE MANERA INFINITA
// COMO PRIMER ARGUMENTO RECIBE UNA FUNCION Y EL SEGUNDO ARGUMENTO
// QUE LEMANDAMOS VA HACER UN ARREGLO DE DEPENDENCIAS Y SI SE DEJA VACIO
// SOLO SE EJECUTA UNA UNICA veS
// useEffect( () =>{
//     // CUANDO SE CREA LA FUNCION EN EL ARCHIVO HELPER 
//     // ESTA FUNCION RETORNA UNA PROMESA NOS TOCA PONER .THEN
//     // se pone una funcion que como primer argumento e mandar una funcion 
//     // setImages entonces se pued borrar el img => (imgs)
//     getGifs( category )
//     .then( setImages );

//     // .then{imgs => setImages( imgs )}
// // CON ESTO QUITAMOS EL WARNING  react hook useEffect has missing dependency
// // POR SI ALGUNA APLICACION HACE DE UNA UNA PETICION HTTP 
// },[ category ])
    // esto no tiene que ver con react esto es peticion http de la data
    // const getGifs = async() => {
    //     // ACA BUSCAMOS LA URL EN GUIPHY DEVELOPERS POR SEARCH LA COPIAMOS LA PEGAMOS EN 
    //     // EL PROGRAMA POSTMAN ESCRIBIMO S api_key y alfrente pegamos la url que nos dio
    //     // la pagina developer le damos en send copiamos la url
    //     // la pegamos aca en una constante dentro de nuestro componente 
    //     // NOS TOCA AGREGARLEhttps:// y rellenar los espacios con un +
    //     // ACA PODEMOS CONCATENEAR CON  BACK TICS Y ${category}
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=Hxr0C72n0N54IZwHha8oqAtqxosMahH4`
    //     const resp = await fetch( url );
    //     const { data } = await resp.json();

    //     // aca estoy creando un map osea barriendo toda la Array
    //     // y creando una nueva con lo que necesito de ella para eso se ase asi 
    //     // con esta funcion.
    //     const gifs = data.map(img =>{
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url
    //         }
    //     })


    //     console.log(gifs);
    //     // esto muestra las imagenes como nosotros queriamos
    //     setImages( gifs );
    // }
    // getGifs();
                // se pone el fragmen o el <> </> por que ya hay dos objetos
            // la clase card-grid va hacer un contenedor de cartas de css
    return (
        <>
          <h1 className="animate__animated animate__heartBeat">{ category } </h1>
          {/* muestra el loadin y se va a los 3 segundos */}
          {/* {loading ? 'cargando...' : 'Carga Completa'} */}
          {loading && <p className="animate__animated animate__headShake">Loading</p>}
           
            <div className="card-grid">
          
            {/* <ol>  */}
                {
                    images.map( img =>(
                    // data.map( img =>(
                        <GifGridItem 
                        key={img.id}
                        // img={ img }
                        {...img}
                        />
                    ))
                }
            
             
            {/* <h3>{count}</h3>
            <button onClick={()=> setCount(count + 1 ) }></button> */}
            {/* </ol>         */}
            </div>
       </>     

    )
}



// {
//     cuando no tenemos las llaves es hacer un return implisito
//     images.map(img =>(
//         <li key={img.id} >{ img.title }</li>
//     ))
//     SI QUERMOS DESESTRUCTURARLOS PODEMOS QUITAR LOS IMG DE ID Y DE TITLE ASI:
//     images.map(({id, title}) =>(
//         <li key={id} >{ title } </li>
//     ))
    
//     ACA LO MOSTRAMOS POR MODULO 

//     images.map( img =>(
//         <GifGridItem 
//         key={img.id}
//         // img={ img }
//         {...img}
//         />
//     ))
// }