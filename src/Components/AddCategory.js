import React from 'react'
import { useState } from 'react'
// import PropTypes from 'prop-types';



// IMPORTANTE PARA RESIVIR LAS PROPIEDADES DE OTRO COMPONENTE SE LE PASAN 
// POR props PERO LA MEJOR FORMA ES DESESTRUCTURAR LA FUNCION ESTADO EJEMPLO({setCategories})
export const AddCategory = ({setcategories}) => {

    // CREAMOS EL ESTADO QUE VA A CAPTURAR LO QUE ESTAMOS ESCRIBIENDO DENTRO
// DEL InputDeviceInfo.

const [imputValue, setImputValue] = useState('')
const [counter, setcounter] = useState(0)
 const handleImputChange = (e) => {
    //  console.log(e.target.value);
     setImputValue(e.target.value);
 }
 const handleSubmit = (e) => {
     e.preventDefault();
     setcounter((prevContador) => {
        return prevContador + 1
      })
      
    // CONDICION PARA QUE NO ME GUARDE ALGO VACIO
    // Y RESETIAR EL imputValue
    if (imputValue.trim().length >= 0) {
        // ACA ES DONDE PODEMOS CAMBIAR PARA QUE DEJE PRIMO EN LA PAGINA
        // LAS QUE BUSCAMOS Y DESPUES LAS QUE YA ESTAN SE PONE DE 
        // SEGUNDAS LAS QUE ESTAN LLAMANDO LAS QUE TENEMOS Y LA NUEVA 
        // DE PRIMERAS SI NO SABEMOS COMO SE ENCUENTRA ENCIMA DEL MODULO DE DAMOS F12 

        setcategories( cats => [ imputValue, ...cats ]);
        // console.log(cats) 
        
        setImputValue('');
        // setcounter([imputValue + 1]) 
        // console.log(imputValue) 
        // setcounter(imputValue => {
        //             return [...imputValue + 1]
        //         });
        
    }

    // console.log('submit Hecho')
    // setImputValue('')
 }

    return (
        // NOTA EÑL FRAGMEN ES UN AGRUPADOR DE ELEMNETOS 
        // Y EL FORMULARIO TAMBIEN EN CASO QUE TENGAMOS UN FORMULARIO
        // NO NECESITAMOS EL FRAGMEN <>
        // <>
        <form onSubmit={ handleSubmit}>
        <span>{imputValue + counter}</span>
            <input
                type= "text"
                value={ imputValue }
                // FORMA DE VER LOS EVENTOS DEL IMPUT
                // onChange={(e) => console.log(e) }
                onChange={ handleImputChange }
        
            />
           </form> 
        // </>
    )
}

// CUANDO QUEREMOS LLAMAR UN ELEMNTE DE OTRO COMPONENTE POR PROP-TYPES
// AddCategory.PropTypes = {
//     setcategories: PropTypes.func.isRequired
// }

