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
}

function mostrarCocteles() {
    const divCocteles = document.querySelector('#display');
    listaCocteles.forEach(coctel => {
        const {id, nombre} = coctel;

        const parrafo = document.createElement('p');
        parrafo.textContent = `${id} - ${nombre} - `;
        parrafo.dataset.id = id;

        const editarBoton = document.createElement('button');
        //editarBoton.onclick = () => cargarCoctel(coctel);
        editarBoton.textContent = 'Editar'
        editarBoton.classList.add = ('btn', 'btn-primary');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        //editarBoton.onclick = () => cargarCoctel(coctel);
        eliminarBoton.textContent = 'Eliminar'
        eliminarBoton.classList.add = ('btn', 'btn-primary');
        parrafo.append(eliminarBoton);

        divCocteles.appendChild(parrafo);
        divCocteles.appendChild(hr);
    });
}