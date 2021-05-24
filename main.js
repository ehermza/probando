const nombre = document.querySelector('.clNombre')
const numero = document.querySelector('.clNumero')
const direccion = document.querySelector('.clDireccion')
const btnAgregarTarea = document.querySelector('.btn-agregar-tarea')

const listadoTareas = document.querySelector('.listado-tareas')

const db = window.localStorage;
let blChange = false;
let nKey = 0;

btnAgregarTarea.onclick = () => 
{
    if (!blChange ) {
        guardarContacto(db);
    } else {
        console.log(nKey);
        db.removeItem(nKey);
        guardarContacto(db);
        blChange = false;
//        window.location.href = '.'

    }
}

cargarContactos(db, listadoTareas)