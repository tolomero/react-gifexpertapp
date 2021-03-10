



// aca toca expoportarlo y ver que estado esta usando par allamarlo he importar
export const getGifs = async( category ) => {
    // ACA BUSCAMOS LA URL EN GUIPHY DEVELOPERS POR SEARCH LA COPIAMOS LA PEGAMOS EN 
    // EL PROGRAMA POSTMAN ESCRIBIMO S api_key y alfrente pegamos la url que nos dio
    // la pagina developer le damos en send copiamos la url
    // la pegamos aca en una constante dentro de nuestro componente 
    // NOS TOCA AGREGARLEhttps:// y rellenar los espacios con un +
    // ACA PODEMOS CONCATENEAR CON  BACK TICS Y ${category}
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=Hxr0C72n0N54IZwHha8oqAtqxosMahH4`
    const resp = await fetch( url );
    const { data } = await resp.json();

    // aca estoy creando un map osea barriendo toda la Array
    // y creando una nueva con lo que necesito de ella para eso se ase asi 
    // con esta funcion.
    const gifs = data.map(img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
    // console.log(gifs);
    // // esto muestra las imagenes como nosotros queriamos
    // setImages( gifs );
}