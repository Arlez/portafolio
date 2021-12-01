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

    const masProyectos = document.querySelector('.mas-proyectos');
    if( masProyectos && portafolio.length > 6) masProyectos.classList.remove('d-none');

    portafolio.sort((a,b)=>{return a-b;});
    let html = '';
    portafolio.map( portafolio => {
        //crear template
        if(archivoActual == "/" && portafolio.tipo === 2){
            html+= `
                <div class="col-md-6 col-xl-4 mt-4 portafolio Anime">
                    <span class="demostracion">
                        <span>${portafolio.tecnologias}</span>
                    </span>
                    <a href="${portafolio.link}" target="_blank" rel="noopener noreferrer" class="text-decoration-none text-dark">
                        <figure>
                            <img class="img/fluid" src="${archivoActual!=="/" ? "../img/" : "img/"}${portafolio.id}.png" id="${portafolio.id}" alt="imagen ${portafolio.nombre}">
                            <div class="capa d-flex flex-column align-items-center justify-content-center">
                                <h3 class="fw-bold text-center fs-2 text-white">${portafolio.nombre}</h3>
                                <p class="m-0 text-center fs-5 text-white">${portafolio.desc}</p>
                            </div>
                        </figure>
                    </a>
                </div>
            `;
        }else if(archivoActual !== "/"){
            html+= `
                <div class="col-md-6 col-xl-4 mt-4 portafolio Anime">
                    <span class="demostracion">
                        <span>${portafolio.tecnologias}</span>
                    </span>
                    <a href="${portafolio.link}" target="_blank" class="text-decoration-none text-dark">
                        <figure>
                            <img class="img/fluid" src="${archivoActual!=="/" ? "../img/" : "img/"}${portafolio.id}.png" id="${portafolio.id}" alt="imagen ${portafolio.nombre}">
                            <div class="capa d-flex flex-column align-items-center justify-content-center">
                                <h3 class="fw-bold text-center fs-2 text-white">${portafolio.nombre}</h3>
                                <p class="m-0 text-center fs-5 text-white">${portafolio.desc}</p>
                            </div>
                        </figure>
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