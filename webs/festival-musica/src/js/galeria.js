document.addEventListener('DOMContentLoaded', ()=> crearGaleria());

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i<= 12; i++){
        const imagen = document.createElement('IMG');
        imagen.src = `./src/img/thumb/${i}.jpg`;
        imagen.dataset.imagenId = i;

        imagen.onclick = mostrarImagen;

        const lista = document.createElement('LI');

        lista.appendChild(imagen);
        galeria.appendChild(lista);
    }
}

function mostrarImagen(e){
    const id = parseInt(e.target.dataset.imagenId);
    
    //generar imagen
    const imagen = document.createElement('IMG');
    imagen.src = `./src/img/grande/${id}.jpg`; 
    
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //boton cerrar imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');
    overlay.appendChild(cerrarImagen);

    //cerrar imagen
    cerrarImagen.onclick = () => {
        overlay.remove();
        body.classList.remove('fijar-body');
    } 
    overlay.onclick = () => {
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    //mostrar en html
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}