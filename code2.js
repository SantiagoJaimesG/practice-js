/*let free = false;

const validarCliente = (time)=>{
    let edad = prompt("digita edad");
    if (edad >= 18){
        if (time >= 2 && time <7 && free == false){
            document.write("puedes oasar gratis");
            free = true;
        }else{document.write("pasas pero pagas");}
    }else{document.write("no pasas");}
}

validarCliente(23);
document.write("<br>");
validarCliente(7);
document.write("<br>");
validarCliente(6);
document.write("<br>");
validarCliente(1);
document.write("<br>");
validarCliente(4);*/

/*let cantidad = prompt("cantidad de alumnos");
let alumnostotales = [];

for (i = 0; i < cantidad; i++){
    alumnostotales[i] = [prompt("nombre del alumno: " + (i+1)), 0];
}

const asistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P"){
        alumnostotales[p][1]++;
    }
}

for (i = 0; i < 30; i++){
    for(alumno in alumnostotales){
        asistencia(alumnostotales[alumno][0], alumno);
    }
}

for(alumno in alumnostotales){
    let resultado = `${alumnostotales[alumno][0]}:<br>
           Presentes: ${alumnostotales[alumno][1]}<br>
           Ausentes: ${30 - parseInt(alumnostotales[alumno][1])}`;
    if (30 - alumnostotales[alumno][1]>18){
        resultado+="<br><b style ='color:red'>REPROBADO POR INASISTENCIA</b><br>"
    }else{resultado+="<br><br>"}document.write(resultado);
}*/

let operacion = prompt("Digite la operacion a realizar 1=+, 2=-, 3=*, 4=/ :"),
num1 = prompt("Digite el primer numero"), num2 = prompt("Digite el segundo numero");
num1 = parseInt(num1), num2 = parseInt(num2), operacion = parseInt(operacion);

let oper = (operacion,num1,num2)=>{
    switch (operacion) {
        case 1:
            resultado = num1 + num2;
            break;
        case 2:
            resultado = num1 - num2;
            break;
        case 3:
            resultado = num1 * num2;
            break;
        case 4:
            resultado = num1 / num2;
            break;
        default:
            document.write("Operacion invalida");
            break;
    }  
    
    return resultado;
}

document.write(oper(operacion,num1,num2));