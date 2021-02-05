const db = firebase.firestore();

//Variables
const codigoPatrones = document.querySelector('#codigoPatrones')
const descripcionPatrones = document.querySelector('#descripcionPatrones')
const marcaPatrones = document.querySelector('#marcaPatrones')
const modeloPatrones = document.querySelector('#modeloPatrones')
const seriePatrones = document.querySelector('#seriePatrones')
const ubicacionPatrones = document.querySelector('#ubicacionPatrones')
const responsablePatrones = document.querySelector('#responsablePatrones')




const formularioBasicosPatrones = document.querySelector('#formularioBasicosPatrones')
const btnAgregar = document.querySelector('#btnAgregar')

//Eventos



formularioBasicosPatrones.addEventListener('submit', e => {
  e.preventDefault()


  const seleccion = document.querySelectorAll('input[name=radio-patrones]:checked')[0]

  console.log(seleccion)
  //validar
  if (
    codigoPatrones.value.trim() === '' ||
    descripcionPatrones.value.trim() === '' ||
    marcaPatrones.value.trim() === '' ||
    modeloPatrones.value.trim() === '' ||
    seriePatrones.value.trim() === '' ||
    ubicacionPatrones.value === '' ||
    responsablePatrones.value === ''
  ) {
      mensajeError('Todos los campos son obligatorios')
      return;
  }

    const id = Date.now()

        db.collection("patrones").add({
          
          codigo: codigoPatrones.value,
          descripcion: descripcionPatrones.value,
          marca: marcaPatrones.value,
          modelo: modeloPatrones.value,
          serie:seriePatrones.value,
          ubicacion:ubicacionPatrones.value,
          responsable: responsablePatrones.value,
          tipoPatron: seleccion.value,
          id:id
      })
      .then(function(docRef) {
        formularioBasicosPatrones.reset()
                   
          mensajeExito('Se han Enviado Tus Datos Corretamente')
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

  formularioBasicosPatrones.appendChild(p)

  setTimeout(()=>{
      p.remove()
  },3000)

}


function mensajeExito(mensaje){

  const p = document.createElement('p')
  p.classList.add('alert', 'alert-success','mt-4','text-center')
  p.textContent=mensaje;

  formularioBasicosPatrones.appendChild(p)

  setTimeout(()=>{
      p.remove()
  },3000)

}



//option dinamicos

db.collection("ubicaciones").get().then( function(querySnapshot) {

  

  querySnapshot.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots
      

      const option = document.createElement('option')
      option.textContent= `${doc.data().descripcion}`
      
      ubicacionPatrones.appendChild(option)
  });
});
