//* ====== EJERCICIO 1 ======

const empresas = [
  {
    nombre: "Empresa1",
    informacion: {
      empleados: 71,
      direccion: {
        calle: "Av.San Luis",
        numero: 293,
      },
      secciones: ["Comercio", "Construcción", "Obras"],
      locales: {
        local1: {
          telefono: 5652457875,
          empleados: 15,
          especificaciones: { nombre: "Comercio", direccion: "Calle 285" },
        },
        local2: {
          telefono: 5285695875,
          empleados: 14,
          especificaciones: {
            nombre: "Obras",
            direccion: "Av. Roque Perez 512",
          },
        },
        local3: {
          telefono: null,
          empleados: 29,
          especificaciones: { nombre: "Comercio", direccion: "Calle 287" },
        },
        local4: {
          telefono: 5425875876,
          empleados: 17,
          especificaciones: {
            nombre: "Obras",
            direccion: "Av. Saenz Peña 726",
          },
        },
      },
    },
  },
  {
    nombre: "Empresa2",
    informacion: {
      empleados: 99,
      direccion: {
        calle: "Calle Junin",
        numero: 329,
      },
      secciones: ["Contabilidad", "Finanzas", "Auditoria", "Administracion"],
      locales: {
        local1: {
          telefono: null,
          empleados: 8,
          especificaciones: { nombre: "Contabilidad", direccion: "Calle ABC" },
        },
        local2: {
          telefono: 5862325625,
          empleados: 23,
          especificaciones: {
            nombre: "Auditoria",
            direccion: "Av. Corrientes 179",
          },
        },
        local3: {
          telefono: 5685214785,
          empleados: 51,
          especificaciones: { nombre: "Contabilidad", direccion: "Calle 587" },
        },
        local4: {
          telefono: 5245854875,
          empleados: 17,
          especificaciones: {
            nombre: "Administracion",
            direccion: "Av. Cabred 34",
          },
        },
      },
    },
  },
  {
    nombre: "Empresa3",
    informacion: {
      empleados: 72,
      direccion: {
        calle: "Av.Lopez Torres",
        numero: 934,
      },
      secciones: ["Hotelería", "Turismo", "Atención al Público"],
      locales: {
        local1: {
          telefono: 5487521493,
          empleados: 10,
          especificaciones: {
            nombre: "Hotelería",
            direccion: "Av. Roca 746",
          },
        },
        local2: {
          telefono: null,
          empleados: 15,
          especificaciones: {
            nombre: "Atención al Público",
            direccion: "Calle Córdoba 312",
          },
        },
        local3: {
          telefono: 5862548751,
          empleados: 20,
          especificaciones: {
            nombre: "Turismo",
            direccion: "Felix de Azara 857",
          },
        },
        local4: {
          telefono: 5632587845,
          empleados: 25,
          especificaciones: {
            nombre: "Turismo",
            direccion: "Felix de Azara 426",
          },
        },
      },
    },
  },
];

//* Crear una función que reciba 2 (dos) parámetros: un arreglo y un string, en el cual, el primer parámetro hará referencia al arreglo con el formato del arreglo "empresas" definido
//* aquí arriba, y el segundo parámetro hará referencia al nombre de la empresa.
//* Se solicita que la función creada, al pasarle ambos parámetros, nos devuelva un booleano indicando si la cantidad de empleados total indicada en la empresa elegida es igual a la cantidad
//* de empleados de todos sus locales. En caso afirmativo retornar true, sino retornar false.
//* En caso de no encontrar la empresa solicitada, retornar un string que diga "Empresa no encontrada"

function verificarCantidadEmpleados(empresas, nombreEmpresa) {
  const empresa = empresas.find((empresa) => empresa.nombre === nombreEmpresa);
  
  if (!empresa) {
    return "Empresa no encontrada";
  }
  
  const empleadosEmpresa = empresa.informacion.empleados;  
  let empleadosLocales = 0;
  Object.values(empresa.informacion.locales).forEach((local) => {
    empleadosLocales += local.empleados;
  });
  
  return empleadosEmpresa === empleadosLocales;
}


console.log(verificarCantidadEmpleados(empresas, "Empresa1")); 
console.log(verificarCantidadEmpleados(empresas, "Empresa2"));
console.log(verificarCantidadEmpleados(empresas, "Empresa4"));
