// Plan de estudios con materias organizadas por semestre
const planes = {
  mecanica: {
    semestres: [

      {
        semestre: "1º Semestre",
        materias: [
          { id: 1, nombre: "Cálculo I" , prerequisitos: []},
          { id: 2, nombre: "Álgebra" , prerequisitos: []},
          { id: 3, nombre: "Física Básica I" , prerequisitos: []},
          { id: 4, nombre: "Lab. Física Básica I" , prerequisitos: []},
          { id: 5, nombre: "Dibujo Mecánico", prerequisitos: [] },
          { id: 6, nombre: "Química General", prerequisitos: [] },
          { id: 7, nombre: "Lab. Química General", prerequisitos: [] },
        ],
      },
      {
        semestre: "2º Semestre",
        materias: [
          { id: 8, nombre: "Cálculo II", prerequisitos: [1] },
          { id: 9, nombre: "Álgebra Lineal", prerequisitos: [1,2] },
          { id: 10, nombre: "Probabilidad y Estadística", prerequisitos: [1,2] },
          { id: 11, nombre: "Métodos Numéricos y Diseño Algorítmico I", prerequisitos: [1,2] },
          { id: 12, nombre: "Física Básica II", prerequisitos: [3,4] },
          { id: 13, nombre: "Lab. Física Básica II", prerequisitos: [3,4] },
          { id: 14, nombre: "Mecánica Técnica I", prerequisitos: [1,3,4,5] },
        ],
      },
      {
        semestre: "3º Semestre",
        materias: [
          { id: 15, nombre: "Ecuaciones Diferenciales", prerequisitos: [8,9,10,11] },
          { id: 16, nombre: "Física Básica III", prerequisitos: [8,12,13] },
          { id: 17, nombre: "Lab. Física Básica III", prerequisitos: [8,12,13] },
          { id: 18, nombre: "Termodinámica", prerequisitos: [6,7,12,13] },
          { id: 19, nombre: "Ciencia de los Materiales" , prerequisitos: [6,7,12,13]},
          { id: 20, nombre: "Lab. Ciencia de los Materiales", prerequisitos: [6,7,12,13] },
          { id: 21, nombre: "Mecánica Técnica II", prerequisitos: [14] },
          { id: 22, nombre: "Mecánica de Materiales" , prerequisitos: [14]},
        ],
      },
      {
        semestre: "4º Semestre",
        materias: [
          { id: 23, nombre: "Mecánica de Materiales Aplicadas", prerequisitos: [22] },
          { id: 24, nombre: "Circuitos Eléctricos I", prerequisitos: [12,13,15] },
          { id: 25, nombre: "Lab. Circuitos Eléctricos I", prerequisitos: [12,13,15] },
          { id: 26, nombre: "Mecánica de Fluidos", prerequisitos: [6,7,12,13] },
          { id: 27, nombre: "Lab. Mecánica de Fluidos", prerequisitos: [6,7,12,13] },
          { id: 28, nombre: "Transmisión de Calor" , prerequisitos: [18]},
          { id: 29, nombre: "Procesos de Manufactura I", prerequisitos: [19,20,21] },
          { id: 30, nombre: "Taller de Procesos de Manufactura I", prerequisitos: [19,20,21] },
          { id: 31, nombre: "Mecanismos", prerequisitos: [21] },
         
        ],
      },
      {
        semestre: "5º Semestre",
        materias: [
          { id: 32, nombre: "Controles Automáticos", prerequisitos: [15] },
          { id: 33, nombre: "Lab. Controles Automáticos", prerequisitos: [15] },
          { id: 34, nombre: "Máquinas Eléctricas" , prerequisitos: [24,25]},
          { id: 35, nombre: "Lab. Máquinas Eléctricas", prerequisitos: [24,25] },
          { id: 36, nombre: "Electrónica I", prerequisitos: [24,25] },
          { id: 37, nombre: "Lab. Electrónica I", prerequisitos: [24,25] },
          { id: 38, nombre: "Ingeniería Térmica", prerequisitos: [28] },
          { id: 39, nombre: "Lab. Ingeniería Térmica", prerequisitos: [28] },
          { id: 40, nombre: "Elementos de Máquinas I" , prerequisitos: [23,31]},
          { id: 41, nombre: "Estructuras Metálicas" , prerequisitos: [23]},
        ],
      },
      {
        semestre: "6º Semestre",
        materias: [
          { id: 42, nombre: "Instalaciones Eléctricas II", prerequisitos: [34,35] },
          { id: 43, nombre: "Lab. Instalaciones Eléctricas II", prerequisitos: [34,35] },
          { id: 44, nombre: "Máquinas Neumáticas", prerequisitos: [26,27] },
          { id: 45, nombre: "Taller Máquinas Neumáticas", prerequisitos: [26,27] },
          { id: 46, nombre: "Refrigeración y Aire Acondicionado", prerequisitos: [38,39] },
          { id: 47, nombre: "Lab. Refrigeración y Aire Acondicionado", prerequisitos: [38,39] },
          { id: 48, nombre: "Procesos de Manufactura II", prerequisitos: [29] },
          { id: 49, nombre: "Taller de Manufactura II", prerequisitos: [30] },
          { id: 50, nombre: "Elementos de Máquinas II", prerequisitos: [40,41] },
        ],
      },
      {
        semestre: "7º Semestre",
        materias: [
          { id: 51, nombre: "Humanística I", prerequisitos: [] },
          { id: 52, nombre: "Tecnología de Gas Natural", prerequisitos: [38,39] },
          { id: 53, nombre: "Taller Tecnología del Gas Natural", prerequisitos: [38,39] },
          { id: 54, nombre: "Máquinas Hidráulicas", prerequisitos: [44,45] },
          { id: 55, nombre: "Mecatrónica I", prerequisitos: [36,37] },
          { id: 56, nombre: "Lab. Mecatrónica I" , prerequisitos: [36,37]},
          { id: 57, nombre: "Diseño Mecánico", prerequisitos: [48,49,50] },
          { id: 58, nombre: "Taller de Diseño Mecánico", prerequisitos: [48,49,50] },
          { id: 59, nombre: "Humanística II", prerequisitos: [] },
          { id: 60, nombre: "Ingeniería de Mantenimiento", prerequisitos: [] },
        ],
      },
      {
        semestre: "8º Semestre",
        materias: [
        
          { id: 61, nombre: "Diseño de Sistema de Control", prerequisitos: [32,33] },
          { id: 62, nombre: "Lab. Diseño de Sistema de Control", prerequisitos: [32,33] },
          { id: 63, nombre: "Energías Alternativas", prerequisitos: [52,53] },
          { id: 64, nombre: "Trabajo de Titulación", prerequisitos: [] },
          { id: 65, nombre: "Humanística III", prerequisitos: [] },
          { id: 66, nombre: "Máquinas de Elevación y Transporte", prerequisitos: [57,58] },
          { id: 67, nombre: "Ingeniería Automotriz", prerequisitos: [60] },
          { id: 68, nombre: "Taller de Ingeniería Automotriz", prerequisitos: [60] },
        ],
      },


    ],
  },
electromecanica: {
  semestres: [
    { semestre: "1º Semestre",
    materias: [
      { id: 1, nombre: "Cálculo I", prerequisitos: [] },
      { id: 2, nombre: "Álgebra", prerequisitos: [] },
      { id: 3, nombre: "Matemáticas Básicas II", prerequisitos: [] },
      { id: 4, nombre: "Física Básica I", prerequisitos: [] },
      { id: 5, nombre: "Laboratorio de Física Básica I", prerequisitos: [] },
      { id: 6, nombre: "Química General", prerequisitos: [] },
      { id: 7, nombre: "Laboratorio de Química General", prerequisitos: [] },
      { id: 8, nombre: "Dibujo Mecánico", prerequisitos: [] },
    ],
  },
  {
    semestre: "2º Semestre",
    materias: [
      { id: 9, nombre: "Cálculo II", prerequisitos: [] },
      { id: 10, nombre: "Álgebra Lineal", prerequisitos: [] },
      { id: 11, nombre: "Probabilidad y Estadística", prerequisitos: [] },
      { id: 12, nombre: "Métodos Numéricos y Diseño de Algoritmos I", prerequisitos: [] },
      { id: 13, nombre: "Física Básica II", prerequisitos: [] },
      { id: 14, nombre: "Laboratorio de Física Básica II", prerequisitos: [] },
      { id: 15, nombre: "Ecuaciones Diferenciales", prerequisitos: [] },
      { id: 16, nombre: "Ciencia de los Materiales", prerequisitos: [] },
      { id: 17, nombre: "Laboratorio de Ciencia de los Materiales", prerequisitos: [] },
      { id: 18, nombre: "Dibujo y Métodos Estadísticos", prerequisitos: [] },
    ],
  },
  {
    semestre: "3º Semestre",
    materias: [
      { id: 19, nombre: "Mecánica Técnica", prerequisitos: [] },
      { id: 20, nombre: "Mecánica de Materiales", prerequisitos: [] },
      { id: 21, nombre: "Laboratorio de Mecánica de Materiales", prerequisitos: [] },
      { id: 22, nombre: "Circuitos Eléctricos I", prerequisitos: [] },
      { id: 23, nombre: "Laboratorio de Circuitos Eléctricos I", prerequisitos: [] },
      { id: 24, nombre: "Medidas Eléctricas", prerequisitos: [] },
      { id: 25, nombre: "Laboratorio de Medidas Eléctricas", prerequisitos: [] },
      { id: 26, nombre: "Mecánica de Fluidos", prerequisitos: [] },
      { id: 27, nombre: "Laboratorio de Mecánica de Fluidos", prerequisitos: [] },
      { id: 28, nombre: "Termodinámica", prerequisitos: [] },
    ],
  },
  {
    semestre: "4º Semestre",
    materias: [
      { id: 29, nombre: "Procesos de Manufactura", prerequisitos: [] },
      { id: 30, nombre: "Taller de Manufactura", prerequisitos: [] },
      { id: 31, nombre: "Sistemas de Control", prerequisitos: [] },
      { id: 32, nombre: "Laboratorio de Sistemas de Control", prerequisitos: [] },
      { id: 33, nombre: "Circuitos Eléctricos II", prerequisitos: [] },
      { id: 34, nombre: "Laboratorio de Circuitos Eléctricos II", prerequisitos: [] },
      { id: 35, nombre: "Medidas Eléctricas", prerequisitos: [] },
      { id: 36, nombre: "Electrónica", prerequisitos: [] },
      { id: 37, nombre: "Ingeniería Térmica", prerequisitos: [] },
    ],
  },
  {
    semestre: "5º Semestre",
    materias: [
      { id: 38, nombre: "Máquinas de Corriente Alterna", prerequisitos: [] },
      { id: 39, nombre: "Laboratorio de Máquinas de Corriente Alterna", prerequisitos: [] },
      { id: 40, nombre: "Elementos de Máquinas", prerequisitos: [] },
      { id: 41, nombre: "Transmisión de Calor", prerequisitos: [] },
      { id: 42, nombre: "Procesos de Manufactura Aplicada", prerequisitos: [] },
    ],
  },
  {
    semestre: "6º Semestre",
    materias: [
      { id: 43, nombre: "Máquinas de Corriente Alterna", prerequisitos: [] },
      { id: 44, nombre: "Lab. Máquinas de Corriente Alterna", prerequisitos: [] },
      { id: 45, nombre: "Humanística", prerequisitos: [] },
      { id: 46, nombre: "Máquinas Hidráulicas", prerequisitos: [] },
      { id: 47, nombre: "Máquinas Neumáticas", prerequisitos: [] },
      { id: 48, nombre: "Taller Máquinas Neumáticas", prerequisitos: [] },
    ],
  },
  {
    semestre: "7º Semestre",
    materias: [
      { id: 49, nombre: "Mecatrónica", prerequisitos: [] },
      { id: 50, nombre: "Lab. Mecatrónica", prerequisitos: [] },
      { id: 51, nombre: "Ingeniería de Mantenimiento", prerequisitos: [] },
      { id: 52, nombre: "Máquinas de Corriente Alterna II", prerequisitos: [] },
      { id: 53, nombre: "Lab. Máquinas de Corriente Alterna II", prerequisitos: [] },
      { id: 54, nombre: "Instalaciones Eléctricas II", prerequisitos: [] },
      { id: 55, nombre: "Lab. Instalaciones Eléctricas II", prerequisitos: [] },
      { id: 56, nombre: "Electrónica Industrial", prerequisitos: [] },
      { id: 57, nombre: "Lab. Electrónica Industrial", prerequisitos: [] },
      { id: 58, nombre: "Humanística II", prerequisitos: [] },
      { id: 59, nombre: "Elementos de Máquinas", prerequisitos: [] },
      { id: 60, nombre: "Humanística III", prerequisitos: [] },
      { id: 61, nombre: "Diseño de Sistema de Control", prerequisitos: [] },
      { id: 62, nombre: "Lab. Diseño de Sistema de Control", prerequisitos: [] },
      { id: 63, nombre: "Sistemas Eléctricos de Potencia", prerequisitos: [] },
      { id: 64, nombre: "Lab. Sistemas Eléctricos de Potencia", prerequisitos: [] },
    ],
  },
  {
    semestre: "8º Semestre",
    materias: [
      { id: 65, nombre: "Centrales Eléctricas I", prerequisitos: [] },
      { id: 66, nombre: "Lab. Centrales Eléctricas I", prerequisitos: [] },
      { id: 67, nombre: "Diseño Mecánico", prerequisitos: [] },
      { id: 68, nombre: "Taller de Diseño Mecánico", prerequisitos: [] },
      { id: 69, nombre: "Trabajo de Titulación", prerequisitos: [] },
    ],
  },
  ],
  },
mecatronica: {
  semestres: [
    {
      semestre: "1º Semestre",
      materias: [
        { id: 1, nombre: "Cálculo I", prerequisitos: [] },
        { id: 2, nombre: "Álgebra", prerequisitos: [] },
        { id: 3, nombre: "Física Básica I", prerequisitos: [] },
        { id: 4, nombre: "Laboratorio de Física Básica I", prerequisitos: [] },
        { id: 5, nombre: "Química General", prerequisitos: [] },
        { id: 6, nombre: "Laboratorio de Química General", prerequisitos: [] },
        { id: 7, nombre: "Dibujo Técnico", prerequisitos: [] },
      ],
    },
    {
      semestre: "2º Semestre",
      materias: [
        { id: 8, nombre: "Cálculo II", prerequisitos: [1] },
        { id: 9, nombre: "Álgebra Lineal", prerequisitos: [1,2] },
        { id: 10, nombre: "Probabilidad y Estadística", prerequisitos: [1,2] },
        { id: 11, nombre: "Métodos Numéricos y Diseño de Algoritmos", prerequisitos: [1,2] },
        { id: 12, nombre: "Física Básica II", prerequisitos: [3,4] },
        { id: 13, nombre: "Laboratorio de Física Básica II", prerequisitos: [3,4] },
        { id: 18, nombre: "Mecánica Técnica", prerequisitos: [3,4,7] },
        
      ],
    },
    {
      semestre: "3º Semestre",
      materias: [
        { id: 14, nombre: "Ecuaciones Diferenciales", prerequisitos: [8,9,10,11] },
        { id: 15, nombre: "Física Básica III", prerequisitos: [12,13,8] },
        { id: 23, nombre: "Laboratorio de Física Básica III", prerequisitos: [12,13,8] },
        { id: 16, nombre: "Termodinámica", prerequisitos: [12,13,5,6] },
        { id: 17, nombre: "Métodos Numéricos y Diseño de Algoritmos II", prerequisitos: [11] },
        { id: 67, nombre: "Mecánica Técnica II", prerequisitos: [18] },
        { id: 19, nombre: "Mecánica de Materiales", prerequisitos: [18] },
      ],  
    },
    {
      semestre: "4º Semestre",
      materias: [
        { id: 20, nombre: "Circuitos Eléctricos I", prerequisitos: [14,15,23] },
        { id: 21, nombre: "Laboratorio de Circuitos Eléctricos I", prerequisitos: [14,15,23] },
        { id: 22, nombre: "Métodos Numéricos y Diseño de Algoritmos III", prerequisitos: [17] },
        { id: 24, nombre: "Laboratorio de Métodos Numéricos y Diseño de Algoritmos III", prerequisitos: [17] },
        { id: 25, nombre: "Mecánica de Fluidos", prerequisitos: [8,12,13] },
        { id: 26, nombre: "Laboratorio de Mecánica de Fluidos", prerequisitos: [8,12,13] },
        { id: 27, nombre: "Transmisión de Calor", prerequisitos: [16] },
        { id: 28, nombre: "Mecanismos", prerequisitos: [67] },
        { id: 29, nombre: "Elementos de Máquinas I", prerequisitos: [19] },
       
      ],
    },
    {
      semestre: "5º Semestre",
      materias: [
        { id: 30, nombre: "Controles Automáticos", prerequisitos: [14] },
        { id: 31, nombre: "Laboratorio de Controles Automáticos", prerequisitos: [14] },
        { id: 32, nombre: "Máquinas Eléctricas", prerequisitos: [20,21] },
        { id: 33, nombre: "Laboratorio de Máquinas Eléctricas", prerequisitos: [20,21] },
        { id: 34, nombre: "Electrónica I", prerequisitos: [20,21] },
        { id: 35, nombre: "Laboratorio de Electrónica I", prerequisitos: [20,21] },
        { id: 36, nombre: "Ingeniería Térmica", prerequisitos: [27] },
        { id: 38, nombre: "Laboratorio de Ingeniería de Térmica", prerequisitos: [27] },
        { id: 37, nombre: "Elementos de Máquinas II", prerequisitos: [28,29] },
        { id: 39, nombre: "Humanística I (150 creditos)", prerequisitos: [] },
      ],
    },
    {
      semestre: "6º Semestre",
      materias: [
        { id: 40, nombre: "Instrumentación Electrónica Mecánica", prerequisitos: [] },
        { id: 41, nombre: "Lab. Instrumentación Electrónica Mecánica", prerequisitos: [] },
        { id: 42, nombre: "Microprocesadores y Microcontroladores", prerequisitos: [] },
        { id: 43, nombre: "Lab. Microprocesadores y Microcontroladores", prerequisitos: [] },
        { id: 44, nombre: "Sistemas Digitales", prerequisitos: [] },
        { id: 45, nombre: "Laboratorio Sistemas Digitales", prerequisitos: [] },
        { id: 46, nombre: "Máquinas Neumáticas", prerequisitos: [] },
        { id: 47, nombre: "Lab. Máquinas Neumáticas", prerequisitos: [] },
        { id: 48, nombre: "Procesos de Manufactura II", prerequisitos: [] },
        { id: 49, nombre: "Taller Procesos de Manufactura II", prerequisitos: [] },
      ],
    },
    {
      semestre: "7º Semestre",
      materias: [
        { id: 50, nombre: "Procesamiento Digital de Señales", prerequisitos: [] },
        { id: 51, nombre: "Lab. Procesamiento Digital de Señales", prerequisitos: [] },
        { id: 52, nombre: "Interacción HD-SW", prerequisitos: [] },
        { id: 53, nombre: "Electrónica Industrial", prerequisitos: [] },
        { id: 54, nombre: "Lab. Electrónica Industrial", prerequisitos: [] },
        { id: 55, nombre: "Humanística II", prerequisitos: [] },
        { id: 56, nombre: "Humanística III", prerequisitos: [] },
        { id: 57, nombre: "Ingeniería de Mantenimiento", prerequisitos: [] },
      ],
    },
    {
      semestre: "8º Semestre",
      materias: [
        { id: 58, nombre: "Diseño de Sistemas de Control", prerequisitos: [] },
        { id: 59, nombre: "Lab. Diseño de Sistemas de Control", prerequisitos: [] },
        { id: 60, nombre: "Micro y Nano Tecnología", prerequisitos: [] },
        { id: 61, nombre: "Lab. Micro y Nano Tecnología", prerequisitos: [] },
        { id: 62, nombre: "Redes Industriales", prerequisitos: [] },
        { id: 63, nombre: "Lab. Redes Industriales", prerequisitos: [] },
        { id: 64, nombre: "Diseño Mecatrónico", prerequisitos: [] },
        { id: 65, nombre: "Taller Diseño Mecatrónico", prerequisitos: [] },
        { id: 66, nombre: "Trabajo de Titulación", prerequisitos: [] },
      ],
    },
  ],
  },
automotriz: {
  semestres: [
    {
      semestre: "1º Semestre",
      materias: [
        { id: 1, nombre: "Álgebra", prerequisitos: [] },
        { id: 2, nombre: "Química General", prerequisitos: [] },
        { id: 3, nombre: "Física I", prerequisitos: [] },
        { id: 4, nombre: "Laboratorio de Física I", prerequisitos: [] },
        { id: 5, nombre: "Sistemas del Automotor", prerequisitos: [] },
        { id: 6, nombre: "Dibujo Técnico I", prerequisitos: [] },
        { id: 7, nombre: "Cálculo I", prerequisitos: [] },
      ],
    },
    {
      semestre: "2º Semestre",
      materias: [
        { id: 8, nombre: "Cálculo II", prerequisitos: [7] },
        { id: 9, nombre: "Física II", prerequisitos: [1,3,4] },
        { id: 52, nombre: "Laboratorio de Física II", prerequisitos: [1,3,4] },
        { id: 10, nombre: "Combustibles y Lubricantes", prerequisitos: [2] },
        { id: 11, nombre: "Electrotecnia y Laboratorio", prerequisitos: [5] },
        { id: 12, nombre: "Metrología, Ajuste y Taller", prerequisitos: [] },
        { id: 13, nombre: "Dibujo Automotriz", prerequisitos: [] },
      ],
    },
    {
      semestre: "3º Semestre",
      materias: [
        { id: 14, nombre: "Cálculo III", prerequisitos: [] },
        { id: 15, nombre: "Mecánica de Fluidos", prerequisitos: [] },
        { id: 16, nombre: "Tecnología de los Mecanismos del Automotor y Taller", prerequisitos: [] },
        { id: 17, nombre: "Electricidad del Automotor y Taller", prerequisitos: [] },
        { id: 18, nombre: "Informática", prerequisitos: [] },
        { id: 19, nombre: "Mecánica Teórica I", prerequisitos: [] },
      ],
    },
    {
      semestre: "4º Semestre",
      materias: [
        { id: 20, nombre: "Electrónica del Automotor y Laboratorio", prerequisitos: [] },
        { id: 21, nombre: "Hidroneumática", prerequisitos: [] },
        { id: 22, nombre: "Mecánica Teórica II", prerequisitos: [] },
        { id: 23, nombre: "Resistencia de Materiales I", prerequisitos: [] },
        { id: 24, nombre: "Termodinámica", prerequisitos: [] },
        { id: 25, nombre: "Cinemática de los Mecanismos I", prerequisitos: [] },
        { id: 26, nombre: "Programación", prerequisitos: [] },
      ],
    },
    {
      semestre: "5º Semestre",
      materias: [
        { id: 27, nombre: "Autotrónica", prerequisitos: [] },
        { id: 28, nombre: "Metalurgia Automotriz", prerequisitos: [] },
        { id: 29, nombre: "Transmisión de Calor", prerequisitos: [] },
        { id: 30, nombre: "Tecnología de los Motores a Explosión y Taller", prerequisitos: [] },
        { id: 31, nombre: "Resistencia de Materiales II", prerequisitos: [] },
        { id: 32, nombre: "Cinemática de los Mecanismos II", prerequisitos: [] },
      ],
    },
    {
      semestre: "6º Semestre",
      materias: [
        { id: 33, nombre: "Ingeniería de los Mecanismos del Automotor y Laboratorio", prerequisitos: [] },
        { id: 34, nombre: "Tecnología de los Motores Diesel y Taller", prerequisitos: [] },
        { id: 35, nombre: "Diseño de Elementos I", prerequisitos: [] },
        { id: 36, nombre: "Inglés Técnico", prerequisitos: [] },
        { id: 37, nombre: "Metalurgia Aplicada al Automotor", prerequisitos: [] },
        { id: 38, nombre: "Metodología de la Investigación", prerequisitos: [] },
        { id: 39, nombre: "Electrónica Aplicada al Automotor", prerequisitos: [] },
      ],
    },
    {
      semestre: "7º Semestre",
      materias: [
        { id: 40, nombre: "Controles Automáticos", prerequisitos: [] },
        { id: 41, nombre: "Vibraciones Mecánicas", prerequisitos: [] },
        { id: 42, nombre: "Diagnóstico Automotriz y Taller", prerequisitos: [] },
        { id: 43, nombre: "Diseño de Elementos II", prerequisitos: [] },
        { id: 44, nombre: "Inglés Técnico II", prerequisitos: [] },
        { id: 45, nombre: "Gestión de Talleres", prerequisitos: [] },
      ],
    },
    {
      semestre: "8º Semestre",
      materias: [
        { id: 46, nombre: "Formulación y Evaluación de Proyectos", prerequisitos: [] },
        { id: 47, nombre: "Ingeniería de Mantenimiento", prerequisitos: [] },
        { id: 48, nombre: "Ingeniería de los Motores de Combustión Interna", prerequisitos: [] },
        { id: 49, nombre: "Equipo Pesado", prerequisitos: [] },
        { id: 50, nombre: "Administración de Equipos", prerequisitos: [] },
        { id: 51, nombre: "Economía del Transporte", prerequisitos: [] },
      ],
    },
  ],
  },
};

const carreraSelect = document.getElementById("carrera-select");
const materiasAprobadasSection = document.getElementById("materias-aprobadas");
const accordionSemestres = document.getElementById("accordionSemestres");
const checkAvailableButton = document.getElementById("check-available");
const availableList = document.getElementById("available-list");
const materiasDisponiblesSection = document.getElementById("materias-disponibles");

let materias = []; // Almacena las materias seleccionadas por carrera

// Mostrar materias por semestre
carreraSelect.addEventListener("change", () => {
  const carrera = planes[carreraSelect.value];
  if (!carrera) return;

  materias = carrera.semestres.flatMap((s) => s.materias);
  accordionSemestres.innerHTML = "";

  carrera.semestres.forEach((semestre, index) => {
    const idAcordeon = `semestre-${index}`;
    const card = `
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading-${idAcordeon}">
          <button class="accordion-button ${index !== 0 ? "collapsed" : ""}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${idAcordeon}" aria-expanded="${index === 0}" aria-controls="collapse-${idAcordeon}">
            ${semestre.semestre}
          </button>
        </h2>
        <div id="collapse-${idAcordeon}" class="accordion-collapse collapse ${index === 0 ? "show" : ""}" aria-labelledby="heading-${idAcordeon}" data-bs-parent="#accordionSemestres">
          <div class="accordion-body">
            ${semestre.materias
        .map(
          (materia) => `
              <div>
                <input type="checkbox" id="materia-${materia.id}" value="${materia.id}">
                <label for="materia-${materia.id}">${materia.nombre}</label>
              </div>
            `
        )
        .join("")}
          </div>
        </div>
      </div>
    `;
    accordionSemestres.insertAdjacentHTML("beforeend", card);
  });

  materiasAprobadasSection.style.display = "block";
  materiasDisponiblesSection.style.display = "none"; // Ocultar resultados anteriores
});

// Calcular materias disponibles
checkAvailableButton.addEventListener("click", () => {
  const checkedIds = Array.from(
    document.querySelectorAll("#accordionSemestres input:checked")
  ).map((checkbox) => parseInt(checkbox.value));

  const availableMaterias = materias.filter((materia) => {
    return (
      !checkedIds.includes(materia.id) &&
      materia.prerequisitos.every((req) => checkedIds.includes(req))
    );
  });

  availableList.innerHTML = ""; // Limpiar lista previa

  if (availableMaterias.length === 0) {
    availableList.innerHTML = "<li class='list-group-item'>No hay materias disponibles por ahora.</li>";
  } else {
    availableMaterias.forEach((materia) => {
      const li = document.createElement("li");
      li.textContent = materia.nombre;
      li.className = "list-group-item";
      availableList.appendChild(li);
    });
  };

  materiasDisponiblesSection.style.display = "block";
});
