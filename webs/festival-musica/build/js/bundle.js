document.addEventListener('DOMContentLoaded', () => {
    scrollNav();
    navegacionFija();
});
function navegacionFija(){
    const barra = document.querySelector('.header');
    //registrar el intersection observer
    const observer = new IntersectionObserver(entries=>{
       if(entries[0].isIntersecting){
            barra.classList.remove('fijo');
       }else{
            barra.classList.add('fijo');
       }
    })
    //elemento a observar
    observer.observe(document.querySelector('.sobre-festival'));
}
//scroll pagina desde navegacion
function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a');
    
    enlaces.forEach( enlace => enlace.addEventListener('click', e =>{
        e.preventDefault();
        const selector = e.target.attributes.href.value;
        const seccion = document.querySelector(selector);
        seccion.scrollIntoView({
            behavior: 'smooth'
        });
    }));
}
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