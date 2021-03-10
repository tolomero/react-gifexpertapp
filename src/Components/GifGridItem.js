import React from 'react'


// COMOPONENTE PARA MOSTRAR LA LISTA
export const GifGridItem = ({ title, url }) => {
    // LO QUE ESTE EN EL ARGUMENTO DEL console,LOG(SON LAS PROPS DEL ESTADO IMG)
    // console.log(img);
        // console.log(props);
        // console.log( id, title, url )

    return (
        // CUANDO DICE CLASSNAME ES POR Q ESTAMOS LLAMANDO EL CSS
        <div className="card animate__animated animate__fadeIn">
            {/* aca mostramos la imagen ASI: */}
            <img src={ url } alt={ title } />
            <p> { title } </p>
            {/* { img.title } */}
        </div>
    )
}
