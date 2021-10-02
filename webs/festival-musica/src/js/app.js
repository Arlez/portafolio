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