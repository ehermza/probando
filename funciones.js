
const guardarContacto = (db) =>{

    let contacto = {
        id: Math.random(1,100),
        nombre: nombre.value,
        numero: numero.value,
        direccion: direccion.value,
    }
    if( contacto.nombre == "" ) {
        console.log("Llenar campo name");
        return;
    }
    db.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = '.'
    
}

const cargarContactos = (db, parentNode) =>{
    let claves = Object.keys(db)
    
    for(clave of claves){
        let contacto = JSON.parse(db.getItem(clave))
        crearContacto(parentNode, contacto, db)
    }
}
//for(clave of claves)
const crearContacto = (parentNode, contacto, db) =>{

    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let numeroContacto = document.createElement('p')
    let direccionContacto = document.createElement('p')
    let iconoBorrar = document.createElement('span');
    let iconoChange = document.createElement('span');

    nombreContacto.innerHTML = contacto.nombre
    numeroContacto.innerHTML = contacto.numero
    direccionContacto.innerHTML = contacto.direccion
    iconoBorrar.innerHTML = 'delete_forever';
    iconoChange.innerHTML = 'save';


    divContacto.classList.add('tarea');
    iconoBorrar.classList.add('material-icons', 'icono')
    iconoChange.classList.add('material-icons', 'icono');

    iconoBorrar.onclick = () =>{
        db.removeItem(contacto.id)
        window.location.href = '.';
    }
    iconoChange.onclick = () =>{
        nombre.value = contacto.nombre;
        numero.value = contacto.numero;
        direccion.value = contacto.direccion;  
        blChange = true;  
        nKey = contacto.id; 
        console.log(contacto);   
    }
    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(iconoBorrar)
    divContacto.appendChild(iconoChange);

    parentNode.appendChild(divContacto)
}