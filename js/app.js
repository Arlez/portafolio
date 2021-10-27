document.addEventListener('DOMContentLoaded', ()=>{
    cargarPortafolio();
});
console.clear()


const archivoActual = window.location.pathname;



function cargarPortafolio(){
    let url = 'datos.json';
    if(archivoActual !== "/")url = '../datos.json';
    try {
        fetch(url)
        .then( (respuesta)=>{
            return respuesta.json();
        })
        .then((datos)=>{
            const masProyectos = document.querySelector('.mas-proyectos');
            if( masProyectos && datos.portafolio.length > 6) masProyectos.classList.remove('d-none')
  
            datos.portafolio.sort((a,b)=>{return a-b;});
            let html = '';
            datos.portafolio.forEach((portafolio,i)=> {
                //crear template
                if(i<=5 && archivoActual == "/"){
                    html+= `
                        <div class="col-md-6 col-xl-4 mt-4 portafolio Anime">
                            <span class="demostracion">
                                <span>${portafolio.tipo}</span>
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
                }else if(archivoActual !== "/"){
                    html+= `
                        <div class="col-md-6 col-xl-4 mt-4 portafolio Anime">
                            <span class="demostracion">
                                <span>${portafolio.tipo}</span>
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
        })
    } catch (error) {
        console.log(error)
    }
   
}
/*
function cargarPortafolioCompleto(){
    fetch('datos.json')
    .then( (respuesta)=>{
        return respuesta.json();
    })
    .then((datos)=>{
        if(datos.portafolio.length > 6){
            const masProyectos = document.querySelector('.mas-proyectos');
            masProyectos.classList.remove('d-none');
        }
        datos.portafolio.sort((a,b)=>{return a-b;});
        let html = '';
        datos.portafolio.forEach((portafolio,i)=> {
            //crear template
            if(i<=5){
                html+= `
                    <div class="col-md-6 col-xl-4 mt-4 portafolio Anime">
                        <span class="demostracion">
                            <span>${portafolio.tipo}</span>
                        </span>
                        <a href="${portafolio.link}" target="_blank" class="text-decoration-none text-dark">
                            
                            <figure>
                                <img class="img/fluid" src="img/${portafolio.id}.png" id="${portafolio.id}" alt="imagen ${portafolio.nombre}">
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
    })
}

*/

const fechaInicio = 2021;
const year = document.querySelector('.year');
const date = new Date().getFullYear();
date === fechaInicio ? year.textContent = date : year.textContent = `${fechaInicio} - ${date}`;