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
         
          { id: 52, nombre: "Tecnología de Gas Natural", prerequisitos: [38,39] },
          { id: 53, nombre: "Taller Tecnología del Gas Natural", prerequisitos: [38,39] },
          { id: 54, nombre: "Máquinas Hidráulicas", prerequisitos: [44,45] },
          { id: 55, nombre: "Mecatrónica I", prerequisitos: [36,37] },
          { id: 56, nombre: "Lab. Mecatrónica I" , prerequisitos: [36,37]},
          { id: 57, nombre: "Diseño Mecánico", prerequisitos: [48,49,50] },
          { id: 58, nombre: "Taller de Diseño Mecánico", prerequisitos: [48,49,50] },
          
         
        ],
      },
      {
        semestre: "8º Semestre",
        materias: [
        
          { id: 61, nombre: "Diseño de Sistema de Control", prerequisitos: [32,33] },
          { id: 62, nombre: "Lab. Diseño de Sistema de Control", prerequisitos: [32,33] },
          { id: 63, nombre: "Energías Alternativas", prerequisitos: [52,53] },
          { id: 64, nombre: "Trabajo de Titulación", prerequisitos: [] },
        
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
      { id: 2, nombre: "Álgebra", prerequisitos: [] },,
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
      { id: 9, nombre: "Cálculo II", prerequisitos: [1] },
      { id: 10, nombre: "Álgebra Lineal", prerequisitos: [2] },
      { id: 11, nombre: "Probabilidad y Estadística", prerequisitos: [1,2] },
      { id: 12, nombre: "Métodos Numéricos y Diseño de Algoritmos I", prerequisitos: [1,2] },
      { id: 13, nombre: "Física Básica II", prerequisitos: [5,6,1] },
      { id: 14, nombre: "Laboratorio de Física Básica II", prerequisitos: [5,6,1] },
      { id: 15, nombre: "Mecánica Técnica I", prerequisitos: [5,6,8,1] },
     
    ],
  },
  {
    semestre: "3º Semestre",
    materias: [
      { id: 18, nombre: "Ecuaciones diferenciales", prerequisitos: [9,10,11,12] },
      { id: 21, nombre: "Física Básica III", prerequisitos: [9,13,14] },
      { id: 3, nombre: "Física Básica III", prerequisitos: [9,13,14] },
      { id: 28, nombre: "Termodinámica", prerequisitos: [13,14,6,7] },
      { id: 16, nombre: "Ciencia de los Materiales", prerequisitos: [13,14,6,7] },
      { id: 17, nombre: "Laboratorio de Ciencia de los Materiales", prerequisitos: [13,14,6,7] },
      { id: 19, nombre: "Mecánica Técnica II", prerequisitos: [15] },
      { id: 20, nombre: "Mecánica de Materiales", prerequisitos: [15] },
           
    ],
  },
  {
    semestre: "4º Semestre",
    materias: [
      
      { id: 22, nombre: "Circuitos Eléctricos I", prerequisitos: [21,3,18] },
      { id: 23, nombre: "Laboratorio de Circuitos Eléctricos I", prerequisitos: [21,3,18] },
      { id: 24, nombre: "Medidas Eléctricas", prerequisitos: [21,3] },
      { id: 25, nombre: "Laboratorio de Medidas Eléctricas", prerequisitos: [21,3] },
      { id: 26, nombre: "Mecánica de Fluidos", prerequisitos: [13,14,6,7] },
      { id: 27, nombre: "Laboratorio de Mecánica de Fluidos", prerequisitos: [13,14,6,7] },
      { id: 41, nombre: "Transmisión de Calor", prerequisitos: [28] },
      { id: 29, nombre: "Procesos de Manufactura", prerequisitos: [16,17,19] },
      { id: 30, nombre: "Taller de Manufactura", prerequisitos: [16,17,19] },
      { id: 39, nombre: "Mecánica de materiales aplicada", prerequisitos: [20] },

    ],
  },
  {
    semestre: "5º Semestre",
    materias: [
      { id: 31, nombre: "Sistemas de Control", prerequisitos: [18] },
      { id: 32, nombre: "Laboratorio de Sistemas de Control", prerequisitos: [18] },
      { id: 33, nombre: "Circuitos Eléctricos II", prerequisitos: [22,23,24,25] },
      { id: 34, nombre: "Laboratorio de Circuitos Eléctricos II", prerequisitos: [22,23,24,25] },
      { id: 35, nombre: "Electrónica I", prerequisitos: [22,23] },
      { id: 36, nombre: "Lab. Electrónica I", prerequisitos: [22,23] },
      { id: 37, nombre: "Ingeniería Térmica", prerequisitos: [41] },
      { id: 38, nombre: "Laboratorio de Ingeniería Térmica", prerequisitos: [41] },
      { id: 40, nombre: "Elementos de Máquinas I", prerequisitos: [29,30,39] },
    ],
  },
  {
    semestre: "6º Semestre",
    materias: [
     
      { id: 43, nombre: "Máquinas de Corriente Alterna", prerequisitos: [34,35] },
      { id: 44, nombre: "Lab. Máquinas de Corriente Alterna", prerequisitos: [35,34] },
      
      { id: 46, nombre: "Máquinas Hidráulicas", prerequisitos: [26,27] },
      { id: 47, nombre: "Máquinas Neumáticas", prerequisitos: [26,27] },
      { id: 48, nombre: "Taller Máquinas Neumáticas", prerequisitos: [26,27] },
      { id: 49, nombre: "Mecatrónica", prerequisitos: [37,38] },
      { id: 50, nombre: "Lab. Mecatrónica", prerequisitos: [37,38] },
    ],
  },
  {
    semestre: "7º Semestre",
    materias: [
    
      
      { id: 52, nombre: "Máquinas de Corriente Alterna II", prerequisitos: [44,43] },
      { id: 53, nombre: "Lab. Máquinas de Corriente Alterna II", prerequisitos: [44,43] },
      { id: 54, nombre: "Instalaciones Eléctricas II", prerequisitos: [44,43] },
      { id: 55, nombre: "Lab. Instalaciones Eléctricas II", prerequisitos: [44,43] },
      { id: 56, nombre: "Electrónica Industrial", prerequisitos: [49,50] },
      { id: 57, nombre: "Lab. Electrónica Industrial", prerequisitos: [49,50] },
      { id: 59, nombre: "Elementos de Máquinas II", prerequisitos: [40] },
    
    ],
  },
  {
    semestre: "8º Semestre",
    materias: [
      { id: 61, nombre: "Diseño de Sistema de Control", prerequisitos: [31,32,] },
      { id: 62, nombre: "Lab. Diseño de Sistema de Control", prerequisitos: [54,55] },
      { id: 63, nombre: "Sistemas Eléctricos de Potencia", prerequisitos: [54,55] },
      { id: 64, nombre: "Lab. Sistemas Eléctricos de Potencia", prerequisitos: [54,55] },
      { id: 65, nombre: "Centrales Eléctricas I", prerequisitos: [52,53,46] },
      { id: 66, nombre: "Lab. Centrales Eléctricas I", prerequisitos: [52,53,46] },
      { id: 67, nombre: "Diseño Mecánico", prerequisitos: [59] },
      { id: 68, nombre: "Taller de Diseño Mecánico", prerequisitos: [59] },
      { id: 69, nombre: "TRABAJO DE TITULACIÓN", prerequisitos: [61,62,63,64,65,66,67,68] },
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
       
      ],
    },
    {
      semestre: "6º Semestre",
      materias: [
        { id: 40, nombre: "Instrumentación Electrónica Mecánica", prerequisitos: [30,31.32,33] },
        { id: 41, nombre: "Lab. Instrumentación Electrónica Mecánica", prerequisitos: [30,31.32,33] },
        { id: 42, nombre: "Microprocesadores y Microcontroladores", prerequisitos: [28,34,35] },
        { id: 43, nombre: "Lab. Microprocesadores y Microcontroladores", prerequisitos: [28,34,35] },
        { id: 44, nombre: "Sistemas Digitales", prerequisitos: [34,35] },
        { id: 45, nombre: "Laboratorio Sistemas Digitales", prerequisitos: [34,35] },
        { id: 46, nombre: "Máquinas Neumáticas", prerequisitos: [25,26] },
        { id: 47, nombre: "Lab. Máquinas Neumáticas", prerequisitos: [25,26] },
        { id: 48, nombre: "Procesos de Manufactura II", prerequisitos: [37] },
        { id: 49, nombre: "Taller Procesos de Manufactura II", prerequisitos: [37] },
      ],
    },
    {
      semestre: "7º Semestre",
      materias: [
        { id: 50, nombre: "Procesamiento Digital de Señales", prerequisitos: [44,45,40,41] },
        { id: 51, nombre: "Lab. Procesamiento Digital de Señales", prerequisitos: [44,45,40,41] },
        { id: 52, nombre: "Interacción HD-SW", prerequisitos: [44,45,42,43] },
        { id: 53, nombre: "Electrónica Industrial", prerequisitos: [44,45] },
        { id: 54, nombre: "Lab. Electrónica Industrial", prerequisitos: [44,45] },
       
      ],
    },
    {
      semestre: "8º Semestre",
      materias: [
        { id: 58, nombre: "Diseño de Sistemas de Control", prerequisitos: [30,31] },
        { id: 59, nombre: "Lab. Diseño de Sistemas de Control", prerequisitos: [30,31] },
        { id: 60, nombre: "Micro y Nano Tecnología", prerequisitos: [50,51] },
        { id: 61, nombre: "Lab. Micro y Nano Tecnología", prerequisitos: [50,51] },
        { id: 62, nombre: "Redes Industriales", prerequisitos: [50,51,53,54] },
        { id: 63, nombre: "Lab. Redes Industriales", prerequisitos: [50,51,53,54] },
        { id: 64, nombre: "Diseño Mecatrónico", prerequisitos: [46,47,48,49,50,51] },
        { id: 65, nombre: "Taller Diseño Mecatrónico", prerequisitos: [46,47,48,49,50,51] },
        { id: 66, nombre: "TRABAJO DE TITULACIÓN" , prerequisitos: [58,59,60,61,62,63,64,65] },


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
        { id: 12, nombre: "Metrología, Ajuste y Taller", prerequisitos: [6] },
        { id: 13, nombre: "Dibujo Automotriz", prerequisitos: [6] },
      ],
    },
    {
      semestre: "3º Semestre",
      materias: [
        { id: 14, nombre: "Cálculo III", prerequisitos: [8] },
        { id: 15, nombre: "Mecánica de Fluidos", prerequisitos: [9,52] },
        { id: 16, nombre: "Tecnología de los Mecanismos del Automotor y Taller", prerequisitos: [12] },
        { id: 17, nombre: "Electricidad del Automotor y Taller", prerequisitos: [11] },
        { id: 18, nombre: "Informática", prerequisitos: [12] },
        { id: 19, nombre: "Mecánica Teórica I", prerequisitos: [8] },
      ],
    },
    {
      semestre: "4º Semestre",
      materias: [
        { id: 20, nombre: "Electrónica del Automotor y Laboratorio", prerequisitos: [17] },
        { id: 21, nombre: "Hidroneumática", prerequisitos: [15] },
        { id: 22, nombre: "Mecánica Teórica II", prerequisitos: [19] },
        { id: 23, nombre: "Resistencia de Materiales I", prerequisitos: [15] },
        { id: 24, nombre: "Termodinámica", prerequisitos: [15,10] },
        { id: 25, nombre: "Cinemática de los Mecanismos I", prerequisitos: [16] },
        { id: 26, nombre: "Programación", prerequisitos: [19,18] },
      ],
    },
    {
      semestre: "5º Semestre",
      materias: [
        { id: 27, nombre: "Autotrónica", prerequisitos: [26] },
        { id: 28, nombre: "Metalurgia Automotriz", prerequisitos: [18] },
        { id: 29, nombre: "Transmisión de Calor", prerequisitos: [14,24] },
        { id: 30, nombre: "Tecnología de los Motores a Explosión y Taller", prerequisitos: [24] },
        { id: 31, nombre: "Resistencia de Materiales II", prerequisitos: [23] },
        { id: 32, nombre: "Cinemática de los Mecanismos II", prerequisitos: [21,25] },
      ],
    },
    {
      semestre: "6º Semestre",
      materias: [
        { id: 33, nombre: "Ingeniería de los Mecanismos del Automotor y Laboratorio", prerequisitos: [32] },
        { id: 34, nombre: "Tecnología de los Motores Diesel y Taller", prerequisitos: [30] },
        { id: 35, nombre: "Diseño de Elementos I", prerequisitos: [31] },
        { id: 36, nombre: "Inglés Técnico", prerequisitos: [18] },
        { id: 37, nombre: "Metalurgia Aplicada al Automotor", prerequisitos: [29] },
        { id: 38, nombre: "Metodología de la Investigación", prerequisitos: [28] },
        { id: 39, nombre: "Electrónica Aplicada al Automotor", prerequisitos: [20,27] },
      ],
    },
    {
      semestre: "7º Semestre",
      materias: [
        { id: 40, nombre: "Controles Automáticos", prerequisitos: [34] },
        { id: 41, nombre: "Vibraciones Mecánicas", prerequisitos: [33] },
        { id: 42, nombre: "Diagnóstico Automotriz y Taller", prerequisitos: [20] },
        { id: 43, nombre: "Diseño de Elementos II", prerequisitos: [35] },
        { id: 44, nombre: "Inglés Técnico II", prerequisitos: [36] },
        { id: 45, nombre: "Gestión de Talleres", prerequisitos: [36] },
      ],
    },
    {
      semestre: "8º Semestre",
      materias: [
        { id: 46, nombre: "Formulación y Evaluación de Proyectos", prerequisitos: [44,45] },
        { id: 47, nombre: "Ingeniería de Mantenimiento", prerequisitos: [41,42] },
        { id: 48, nombre: "Ingeniería de los Motores de Combustión Interna", prerequisitos: [40] },
        { id: 49, nombre: "Equipo Pesado", prerequisitos: [40,41] },
        { id: 50, nombre: "Administración de Equipos", prerequisitos: [43,45] },
        { id: 51, nombre: "Economía del Transporte", prerequisitos: [44,45] },
      ],
    },
    {
      semestre: "8º Semestre",
      materias: [
        { id: 46, nombre: "TALLER DE GRADO", prerequisitos: [46,47,48,49,50,51] },
       
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
