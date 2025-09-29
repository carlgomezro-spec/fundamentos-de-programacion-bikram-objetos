//Objetos
//1
const Coche = {
    marca: "Seat",
    modelo: "ibiza",
    matrícula: "3376HCY",
}

//2
const casa = {
    codPostal: "28022",
    calle: "Pirra",
    portal: "34",
    piso: "5"
};

//3
const FullStackDeveloper = {
    lenguajes: ["JavaScript", "Python", "Java", "SQL"],
    proyectos: ["E-commerce", "Chat App", "Blog Personal", "API REST"]
}

//4
const perro = {
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

// Lectura de propiedades
//5
const Portatil = {
    marca: "Apple",
    modelo: "MacBookPro",
};

let marcaPortatil = Portatil.marca;

console.log(marcaPortatil);

//6
const Portatil = {
  marca: "HP",
  modelo: "Pavilion",
};

let marcaPortatil2 = Portatil["marca"];

//7
const Concierto = {
    "array grupos" : ["La oreja de van Gogh", "Linkin Park", "Metallica"]
}

let grupos = Concierto["array grupos"];

//8
onst Led = {
  rojo: 34,
  verde: 250,
  azul: 12
};

let arrayRGB = [Led.rojo, Led.verde, Led.azul];

// Modificación de propiedades
//9
const Portatil = {
  marca: "Lenovo",
  modelo: "12",
};

Portatil.modelo ="P345";

//10
const Concierto = {
    cartelera: "Linkin Park",
    ubicacion: "Torrejon",
}

Concierto.cartelera = "Guns N' Roses";

//11
const Concierto = {
    cartelera: "Linkin Park",
    ubicacion: "Torrejon",
    fecha: "12/09/2025",
}

Concierto.fecha = new Date ("28/09/2025");

//12
const Impresora = {
  marca: "HP",
  modelo: "LaserJet",
  imprimiendo: undefined
};

Impresora.imprimiendo = {
  nombreArchivo: "Documento.pdf",
  copias: 2,
  numPaginas: 10
};

//Objetos
//13
const Noticias = {
    titular: "El acontecimiento del siglo",
    cuerpo: "Chico guapo salta por ventana por no entender que está escribiendo"
};

//14
const Persona = {
    nombre: "Aureliano",
    apellidos: "Rojo Martínes",
    edad: 65
}

//15
const Avion = {
    numPasajeros: 75,
    despegar: function (){
        console.log("despegando")
    },
    volar: function (){
        console.log("llegando a destino")
    },
    aterrizar: function(){
        console.log("aterrizando")
    },
}

//16

const Paquetes = {
    contenido: ["herramientas", "metro", "martillo"]
}

//17
const Pais = {
    numHabitantes: 49315949,
    continente: Europa,
    gentilicio: español
}

// Lectura de propiedades
//18
const O_error = {
    codigo: 404,
}

const codError = O_error.codigo;

//19
const Grupo = {
    arrayintegrantes: ["María", "Paula", "Roberta"]
}

const integrantes = Grupo.arrayintegrantes;

//20
const Impresora = {
    tinta: {
        rojo: 50,
        verde: 70,
        azul: 90
    }
};

const nivelesTinta = Impresora.tinta;

//21
const Pantalla = {
    "array bidimensional pantalla": ["280px", "900px"]
}

const pixeles = Pantalla["array bidimensional pantalla"];

//22
const Movil = {
    especificaciones: {
        pantalla: "6.5 pulgadas",
        bateria: "4000mAh",
        camara: "12MP"
    }
};

const especificaciones = Movil["especificaciones"];

// Modificacion de propiedades
//23
const Grupo = {
    arrayintegrantes: ["María", "Paula", "Roberta"],
    numintegrantes: 3
}

Grupo.numintegrantes = 5;

//24
const Pantalla = {
    dimensiones: "470 x 800"
};

Pantalla.dimensiones = "1920 x 1080";

//25
const Led = {
    encendido: true
};

Led.encendido = !Led.encendido;

//26
onst Movil = {
    temperatura: "30º"
};

Movil.temperatura = "20º";

