class Usuario {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [];
    this.mascotas = [];
  }
  getFullName() {
    return this.nombre + " " + this.apellido;
  }
  addMascota(nombreMascota) {
    this.mascotas.push(nombreMascota);
  }
  countMascotas() {
    return this.mascotas.length;
  }
  addBook(nombreLibro, autor) {
    let libro = {
        nombre: nombreLibro,
        autor: autor
    }
    this.libros.push(libro)
  }
  getBookNames(){
    let nombreLibros = []
    for (let index = 0; index < this.libros.length; index++) {
        const element = this.libros[index];
        nombreLibros.push(element.nombre)
    }
    return nombreLibros
  }
}

const usuario = new Usuario("Gaston", "Iparraguirre");

console.log(usuario.getFullName());
usuario.addMascota("Luna");
console.log(usuario.countMascotas());
usuario.addBook('UnNombre', 'Elautor')
console.log(usuario.getBookNames())