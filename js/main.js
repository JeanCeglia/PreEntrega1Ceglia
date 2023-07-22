/* Sistema de empleados

1-Funcion que pide el ingreso de los empleados nuevos en la empresa

*/

const newEmployee = () => {
    
    let finaly = ' ';
    let empleados = [];

    while(finaly != 'no'){

        /* array empleados */

        /* Pedir datos del empleado */
        let fullName = prompt('Ingresa el numbre del nuevo empleado: '),
        age = parseInt(prompt('Ingresa la edad del Empleado: ')),
        position = prompt('Ingrese el puesto que va a tener el empleado: programador / diseñador / QA');
        
        const employee = {
            fullName: fullName,
            age: age,
            position: position
        }

        empleados.push(employee);

        finaly = prompt('Quieres agregar otro empleado? responde si para seguir y no para salir: ')

    }

    return empleados;
}

/* Esta funcion filtra los empleados por su posicion y los mustra  */
const muestraEmpleadosPorPosicion = (empleados, buscarPosicion) => {
    
    let filtroEmpleados = empleados.filter(empleado => empleado.position.toLowerCase() === buscarPosicion.toLowerCase());
    
    if(filtroEmpleados.length > 0){
        document.write(`Empleados con el puesto de ${buscarPosicion} <hr>`);
        filtroEmpleados.forEach(empleado => document.write(`${empleado.fullName} - edad: ${empleado.age} - Puesto: ${empleado.position} <hr>`));
    }else{
        document.write('No existen empleados con ese puesto');
    }
}


let empleados = newEmployee();
let buscarEmpleados = prompt('Ingrese el puesto que deseas buscar: programador / diseñador / QA');
muestraEmpleadosPorPosicion(empleados, buscarEmpleados);

//Perdonen el spanglish jajajajja