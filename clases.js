
class Usuario {
    constructor (nombre, apellido){
        
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = [];
        this.libros = [];
      
    }

    getFullName () {
        console.log(`Nombre completo : ${this.nombre} ${this.apellido}`)
    }

    addMascota (mascota) {
        this.mascotas.push(mascota)
    }

    countMascotas () {
        console.log(this.mascotas.length)
    }

    addBook (nombre, autor) {
        this.libros.push({Nombre: nombre, Autor: autor})
    }

    getBookNames () {
        console.log(this.libros.map( libro => libro.Nombre))
    }
}

const usuario1 = new Usuario(`Ignacio`,`Bastias`);

usuario1.getFullName();
usuario1.addMascota(`Perro`);
usuario1.countMascotas();
usuario1.addBook(`Peter Pan`, `James Matthew Barrie`);
usuario1.getBookNames();
