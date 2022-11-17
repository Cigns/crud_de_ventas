let listaCocteles = [];

const objCoctel = {
    nombre: ''
}

let editando = false;

const formulario = document.querySelector('#formulario')
const coctelInput = document.querySelector('#coctel')
const btnAgregar = document.querySelector('#crear')

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    if(coctelInput.value === '') {
        alert('Debes ingresar el nombre del cóctel que desees agregar');
        return;
    }

    if(editando) {
        editarCoctel();
        editando = false;
    } else {
        objCoctel.id = Date.now();
        objCoctel.nombre = coctelInput.value;
        
        agregarCoctel();
    }
}

function agregarCoctel() {
    listaCocteles.push({...objCoctel});

    mostrarCocteles();

    formulario.reset()

    limpiarObjeto()
}

function limpiarObjeto() {
    objCoctel.id = '';
    objCoctel.nombre = '';
}

function mostrarCocteles() {

    limpiarHTML();

    const divCocteles = document.querySelector('#display');
    listaCocteles.forEach(coctel => {
        const {id, nombre} = coctel;

        const parrafo = document.createElement('p');
        parrafo.textContent = `${id} - ${nombre} - `;
        parrafo.dataset.id = id;

        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarCoctel(coctel);
        editarBoton.textContent = 'Editar'
        editarBoton.classList.add = ('btn', 'btn-primary');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        //editarBoton.onclick = () => cargarCoctel(coctel);
        eliminarBoton.textContent = 'Eliminar'
        eliminarBoton.classList.add = ('btn', 'btn-primary');
        parrafo.append(eliminarBoton);

        divCocteles.appendChild(parrafo);
        //divCocteles.appendChild(hr);
    });
}

function cargarCoctel(coctel) {
    
    const {id, nombre} = coctel;

    coctelInput.value = nombre;

    objCoctel.id = id;

    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';

    editando = true;
}

function editarCoctel() {
    objCoctel.nombre = coctelInput.value;

    listaCocteles.map( coctel => {
        
        if(coctel.id === objCoctel.id) {
            coctel.id = objCoctel.id;
            coctel.nombre = objCoctel.nombre;
        }
    });

    limpiarHTML();
    mostrarCocteles();

    formulario.reset();
    formulario.querySelector('button[type="submit"]').textContent = "Agregar";

    editando = false;
}

function limpiarHTML() {

    const divCocteles = document.querySelector('#display')
    while (divCocteles.firstChild) {
        divCocteles.removeChild(divCocteles.firstChild);
    }
}