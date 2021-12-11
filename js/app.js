document.addEventListener('DOMContentLoaded', ()=>{
    cargarPortafolio();
});
let archivoActual = window.location.pathname;
if(archivoActual == "/index.html") archivoActual = "/";

const cargarPortafolio = async ()=>{
    let url = 'datos.json';
    if(archivoActual !== "/")url = '../datos.json';

    const consulta = await fetch(url);
    const respuesta = await consulta.json();

    const {portafolio} = respuesta;

    
    const npro = document.querySelector('.n-pro');;
    npro ? npro.textContent = `Total: ${portafolio.length}`: null;

    const masProyectos = document.querySelector('.mas-proyectos');
    if( masProyectos && portafolio.length > 6) masProyectos.classList.remove('d-none');

    portafolio.sort((a,b)=>{return a-b;});
    let html = '';
    portafolio.map( portafolio => {
        //crear template
        if(archivoActual == "/" && portafolio.tipo === 2){
            html+= `
                <div class="col-md-6 col-xl-4 mt-4 portafolio Anime">
                    <a href="${portafolio.link}" class="text-white" rel="noopener noreferrer" target="_blank">
                        <div class="proyecto rounded position-relative aa">                    
                            <h2 class="fs-5 titel position-absolute top-0 start-50 translate-middle-x w-100 text-center py-1">${portafolio.tecnologias}</h2>
                            <img src="img/${portafolio.id}.png" class="img-fluid mx-auto w-100 h-100" alt="imagen ${portafolio.nombre}">

                            <div class="position-absolute top-50 start-50 translate-middle w-75 bb">
                                <h2 class="text-center fs-1 fw-bold text-uppercase">${portafolio.nombre}</h2>
                                <p class="text-center">${portafolio.desc}</p>
                                <p class="fs-6 text-center">Subido: ${portafolio.fecha}</p>
                            </div>
                        </div>
                    </a>
                </div>
            `;
        }else if(archivoActual !== "/"){
            html+= `
                <div class="col-md-6 col-xl-4 mt-4 portafolio Anime">
                    <a href="${portafolio.link}" rel="noopener noreferrer" target="_blank" class="text-decoration-none text-white">
                        <div class="proyecto rounded position-relative aa">
                            <h2 class="fs-5 titel position-absolute top-0 start-50 translate-middle-x w-100 text-center py-1">${portafolio.tecnologias}</h2>                               
                            <img class="img/fluid mx-auto w-100 h100" src="${archivoActual!=="/" ? "../img/" : "img/"}${portafolio.id}.png" id="${portafolio.id}" alt="imagen ${portafolio.nombre}">

                            <div class="position-absolute top-50 start-50 translate-middle w-75 bb">
                                <h2 class="text-center fs-1 fw-bold text-uppercase">${portafolio.nombre}</h2>
                                <p class="text-center">${portafolio.desc}</p>
                                <p class="fs-6 text-center">Subido: ${portafolio.fecha}</p>
                            </div>
                        </div>
                    </a>
                </div>
            `;
        }
    });
    //despues de crear el template, inyectar el html
    document.querySelector('#listado').innerHTML = html; 

}
const fechaInicio = 2021;
const year = document.querySelector('.year');
const date = new Date().getFullYear();
date === fechaInicio ? year.textContent = date : year.textContent = `${fechaInicio} - ${date}`;