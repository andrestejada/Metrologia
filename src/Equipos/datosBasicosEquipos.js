const db = firebase.firestore();

//Variables

const codigoEquipo = document.querySelector('#codigoEquipo')
const descripcionEquipo = document.querySelector('#descripcionEquipo')
const marcaEquipo = document.querySelector('#marcaEquipo')
const modeloEquipo = document.querySelector('#modeloEquipo')
const serieEquipo = document.querySelector('#serieEquipo')
const ubicacionEquipo = document.querySelector('#ubicacionEquipo')
const responsableEquipo = document.querySelector('#responsableEquipo')

const formBasicosEquipos =document.querySelector('#formularioBasicosEquipos')

const formularioBasicosEquipos = document.querySelector(
  '#formularioBasicosEquipos'
)
const btnAgregar = document.querySelector('#btnAgregar')

//Eventos



formularioBasicosEquipos.addEventListener('submit', e => {
  e.preventDefault()
  //validar
  if (
    codigoEquipo.value.trim() === '' ||
    descripcionEquipo.value.trim() === '' ||
    marcaEquipo.value.trim() === '' ||
    modeloEquipo.value.trim() === '' ||
    serieEquipo.value.trim() === '' ||
    ubicacionEquipo.value === '' ||
    responsableEquipo.value === ''
  ) {
      mensajeError('Todos los campos son obligatorios')
      return;
  }

    const id = Date.now()

        db.collection("equipos").doc(id).set({
          
          codigo: codigoEquipo.value,
          descripcion: descripcionEquipo.value,
          marca: marcaEquipo.value,
          modelo: modeloEquipo.value,
          serie:serieEquipo.value,
          ubicacion:ubicacionEquipo.value,
          responsable: responsableEquipo.value,
          id:id
      })
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
          console.log('paso la validacion')
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
})




//funciones

function mensajeError(mensaje){

  const p = document.createElement('p')
  p.classList.add('alert', 'alert-danger','mt-4','text-center')
  p.textContent=mensaje;

  formBasicosEquipos.appendChild(p)

  setTimeout(()=>{
      p.remove()
  },3000)

}
 
