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
                <div class="elemento">
                    <a href="${portafolio.link}" target="_blank">
                    <img src="img/${portafolio.id}.png" id="${portafolio.id}">
                    <div class="contenido">
                        <h3>${portafolio.nombre}</h3>
                        <p>${portafolio.desc}</p>
                    </div>
                    </a>
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