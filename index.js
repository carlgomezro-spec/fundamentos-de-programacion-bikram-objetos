// //Objetos
//1
const Coche = {
    marca: "Seat",
    modelo: "ibiza",
    matricula: "3376 HCY"
};

// //2
const Casa = {
    codPostal: "28022",
    calle: "Pirra",
    portal: "34",
    piso: "5"
};

// //3
const FullStackDeveloper = {
    lenguajes: ["JavaScript", "Python", "Java", "SQL"],
    proyectos: ["E-commerce", "Chat App", "Blog Personal", "API REST"]
};

// //4
const Perro = {
    nombre: "pepe",
    raza: "doberman",
    color: "marrón",
    edad: 2,
    ladrar: function() {
    console.log("ladrido");
  },
  popo: function() {
    return Math.random() * 3;
  }
};

// // Lectura de propiedades
//5
let marcaPortatil = Portatil.marca;

console.log(marcaPortatil);

// //6

let marcaPortatil2 = Portatil["marca"];

// //7

const grupos = Concierto.grupos;

// //8

const RGB = [Led.rojo, Led.verde, Led.azul];

// // Modificación de propiedades
// //9

Portatil.modelo ="P345";

// //10

Concierto.cartelera.push("Guns N' Roses");

// //11
Concierto.fecha = new Date ("28/09/2025");

// //12
Impresora.imprimiendo = {
  nombreArchivo: "Documento.pdf",
  copias: 2,
  numPaginas: 10
};

// //Objetos
// //13
const Noticia = {
    titular: "El acontecimiento del siglo",
    cuerpo: "Chico guapo salta por ventana por no entender que está escribiendo"
};

// //14
const Persona = {
    nombre: "Aureliano",
    apellidos: "Rojo Martínes",
    edad: 65
}

// //15
const Avion = {
    numPasajeros: 100,
    despegar: function(){
        console.log("despegando");
    },
    volar: function(){
        console.log("llegando al destino");
    },
    aterrizar: function(){
        console.log("aterrizando");
    }
};

// //16

const Paquete = {
    contenido: ["herramientas", "metro", "martillo"]
};

// //17
const Pais = {
    numHabitantes: 49315949,
    continente: "Europa",
    gentilicio: "español"
};

// // Lectura de propiedades
// //18
const codError = O_Error.codigo;

// const codError = O_error.codigo;

// //19
const integrantes = Grupo.integrantes;

// //20
const nivelesTinta = Impresora.tinta;

// //21
const pixeles = Pantalla.pixeles;

// //22

const especificaciones = Movil["especificaciones"];

// // Modificacion de propiedades
// //23

Grupo.numIntegrantes = 5;

// //24
Pantalla.dimensiones = "1920x1080";

// //25

Led.encendido = !Led.encendido;

// //26

Movil.temperatura = "20º";

