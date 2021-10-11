document.addEventListener('DOMContentLoaded', ()=>{
    cargarPortafolio();
});

function cargarPortafolio(){
    fetch('datos.json')
    .then( (respuesta)=>{
        return respuesta.json();
    })
    .then((datos)=>{
        let html = '';
        datos.portafolio.forEach(portafolio => {
            //crear template
            html+= `
                <div class="col-md-4 my-4">
                    <div class="card text-center">
                        <img src="img/${portafolio.id}.png" id="${portafolio.id}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${portafolio.nombre}</h5>
                        <p class="card-text">${portafolio.desc}</p>
                        <a href="${portafolio.link}" target="_blank" class="btn btn-outline-dark btn-lg">Ver Proyecto</a>
                        </div>
                    </div>
                </div>
            `;
        });
        //despues de crear el template, inyectar el html
        document.querySelector('#listado').innerHTML = html;
    })
}

const year = document.querySelector('.year');
const date = new Date().getFullYear();
year.textContent = date;