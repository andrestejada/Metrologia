
//Variables
const usuario = document.querySelector('#usuario')
const password = document.querySelector('#password')
const formulario = document.querySelector('#formulario')
const boxForm = document.querySelector('.box-form')
//Eventos

usuario.addEventListener('keyup',validar)
formulario.addEventListener('submit',validarFormulario)



//FUNCIONES
function  validar(e){
    console.log(e.target.value)
}

function mensajeError(mensaje){

    const p = document.createElement('p')
    p.classList.add('alert', 'alert-danger','mt-4','text-center')
    p.textContent=mensaje;

    boxForm.appendChild(p)

    setTimeout(()=>{
        p.remove()
    },3000)

}

function validarFormulario(e){
    e.preventDefault()

    if(usuario.value===''||password.value===''){
        mensajeError('Todos los campos son obligatorios')
        return;
    }

    //Primero debe validar en la base de datos
    firebase.auth().signInWithEmailAndPassword(usuario.value, password.value)
    .then((user) => {
      // Signed in
      // 
      console.log('paso la validacion'+user)
      window.location.href='../index.html'
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error)
    });


     
}

