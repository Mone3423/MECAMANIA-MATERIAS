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
    {
      semestre: "1º Semestre",
      materias: [
        { id: 1, nombre: "Cálculo I", prerequisitos: [] },
        { id: 2, nombre: "Circuitos Eléctricos I", prerequisitos: [1] },
      ],
    },
  ],
  },
mecatronica: {
  semestres: [
    {
      semestre: "1º Semestre",
      materias: [
        { id: 1, nombre: "Fundamentos de Programación", prerequisitos: [] },
      ],
    },
  ],
  },
automotriz: {
  semestres: [
    {
      semestre: "1º Semestre",
      materias: [
        { id: 1, nombre: "Fundamentos de Programación", prerequisitos: [] },
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
