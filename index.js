// Aquí se declara una constante llamada btnEl que se asigna al primer elemento HTML que tiene la clase 'btn'.
//El método querySelector devuelve el primer elemento que coincide con el selector especificado en la cadena.
const btnEl = document.querySelector('.btn')

//Aquí se declara una función llamada toggleOptions, que será la función que
//se ejecutará cuando el usuario haga clic en el botón.
//Esta función altera la visibilidad de un elemento HTML con la clase 'wrapper'
//y cambia el icono dentro del botón de 'ri-share-line' a 'ri-close-line' y viceversa.
const toggleOptions = () => {
    const wrapperEl = document.querySelector('.wrapper')
    const iconEl = btnEl.querySelector('i')
    //Aquí se seleccionan los elementos HTML con las clases 'wrapper' e 'i' dentro del botón.
    //Se declara una constante llamada wrapperEl y se asigna al primer elemento HTML que tiene la clase 'wrapper'.
    //A continuación, se declara otra constante llamada iconEl y se asigna al primer elemento HTML
    //que tiene la etiqueta 'i' dentro del botón seleccionado anteriormente.

    wrapperEl.classList.toggle('active')
    //Aquí se utiliza el método toggle() de la propiedad classList del elemento wrapperEl para agregar o
    //eliminar la clase 'active' del elemento. Si la clase 'active' ya está presente en el elemento, entonces
    //la elimina, y si no está presente, la agrega.

    if (iconEl.classList.contains('ri-share-line')) {
        iconEl.classList.replace('ri-share-line', 'ri-close-line')
    } else {
        iconEl.classList.replace('ri-close-line', 'ri-share-line')
    }
    //Aquí se utiliza un condicional if-else para comprobar si la clase 'ri-share-line' está presente en iconEl.
    //Si está presente, se utiliza el método replace() de la propiedad classList para reemplazar la clase
    //'ri-share-line' por la clase 'ri-close-line', y si no está presente, se reemplaza la clase 'ri-close-line' por 'ri-share-line'.
}

btnEl.addEventListener('click', toggleOptions)
//Finalmente, se utiliza el método addEventListener() del elemento btnEl para agregar un evento de clic que llama
//a la función toggleOptions cuando el usuario hace clic en el botón. Cuando el botón es pulsado,
//la función toggleOptions cambia la visibilidad del elemento con la clase 'wrapper' y cambia el icono dentro del botón.