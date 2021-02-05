const btnCollapse = document.querySelector('#btn-collapse');
const subMenuIngresar = document.querySelector('#toggle-sub-menu-ingresar')
const subMenuEquipos = document.querySelector('#toggle-sub-menu-equipos')
const subMenuPatrones = document.querySelector('#toggle-sub-menu-patrones')

//sub menu configuraciones
const subMenuConfiguraciones = document.querySelector('#toggle-sub-menu-configuraciones')



// Eventos


btnCollapse.addEventListener('click',collapsarMenu)

subMenuIngresar.addEventListener('click', ()=>{const showSubMenuIngresar = document.querySelector('#sub-menu-ingresar').classList.toggle('d-flex')})
subMenuEquipos.addEventListener('click',()=>{const showSubMenuEquipos = document.querySelector('#sub-menu-equipos').classList.toggle('d-flex')})
subMenuPatrones.addEventListener('click',()=>{const showSubMenuPatrones = document.querySelector('#sub-menu-patrones').classList.toggle('d-flex')})
subMenuConfiguraciones.addEventListener('click',()=>{const showSubMenuConfiguraciones = document.querySelector('#sub-menu-Configuraciones').classList.toggle('d-flex')})

//Funcion para collapsar el menu hamburgueza

function collapsarMenu (){

    const sidebar=document.querySelector('.menu-lateral');
    sidebar.classList.toggle('sidebar-collapse');

}

//Funcion para desplegar el Submenu



