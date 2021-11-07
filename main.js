// Creando declaraciones
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("form")
const checkbox = document.querySelector('input[type="checkbox"]')
const submit = document.querySelector('#submit')
let usuario = {
    email: '',
    password: '',
    remember: false
}

submit.addEventListener('click', (e) => {
    e.preventDefault()
    spinner()
    
})

form.addEventListener('change', (e) => {
    checkbox.checked ? usuario.remember = true : usuario.remember = false 

    if (usuario.email.length > 1 && usuario.password.length > 1) {
        console.log('pasa')
        submit.removeAttribute('disabled')
    } 
    // hola@hola.com
})

email.addEventListener("change", (e) => {
  if (
    email.value.indexOf("@") > 0 &&
    email.value.indexOf("@") + 1 < email.value.indexOf(".com")
  ) {
    usuario.email = email.value;
  } else {
    mostrarError('email');
  }
});

password.addEventListener("change", () => {
    if (password.value.length >= 4 && password.value.length <= 8) {
        console.log('contrasenia aceptada')
        usuario.password = password.value
    } else {
        console.log('contrasenia rechazada')
        mostrarError('pw')
    }
});

function mostrarError(id) {
  const p = document.querySelector(`#error-${id}`);  
  p.classList.remove('invisible');
  setTimeout(() => {
      p.classList.add('invisible')
  }, 2500);
}

function spinner() {
    const spinner = document.querySelector('#entro')

    spinner.innerHTML += `<div class="spinner"></div>`

    email.value = ''
    password.value = ''
    usuario.email = ''
    usuario.password = ''

    submit.setAttribute("disabled", "")

    setTimeout(() => {
        spinner.innerHTML = ''
    }, 3000)
}
