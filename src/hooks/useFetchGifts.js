import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
// custom hooks no es mas que una funcion que dentro puede tener un estado 
// y este en elk estado inicia va hace r un objeto que va a tener un arreglo 
export const useFetchGifts = ( category ) =>  {
   const [state, setState] = useState({
      data: [],
      loading: true
   }); 
// los useEffect no pueden ser asyng por que esperan algo sincrono
   useEffect ( () => {
    getGifs( category )
    .then(imgs => {

        
        setTimeout(()=> {
            console.log(imgs)
    setState({
        data: imgs,
        loading: false
        }); 

        }, 3000);
    })

   }, [category])
   
//    setTimeout( () => {
//     setState({
//         data: [1,2,3,4,5,6,7],
//         loading: false
//     })

//    }, 3000 );

   return state; // el state es igual a: {data:[], loading: true}


}