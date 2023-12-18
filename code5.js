/*let operacion = prompt("Digite la operacion a realizar 1=+, 2=-, 3=*, 4=/, 5=^, 6=sqrt, 7=cbrt :"),
num1 = prompt("Digite el primer numero"), num2 = prompt("Digite el segundo numero");
num1 = parseInt(num1), num2 = parseInt(num2), operacion = parseInt(operacion);
class Calculadora{
    constructor(operacion,num1,num2){
        this.operacion = operacion, this.num1 = num1, this.num2 = num2;
    }
    sumar(num1,num2){
        return num1 + num2;
    }
    restar(num1,num2){
        return num1 - num2;
    }
    multiplicar(num1,num2){
        return num1 * num2;
    }
    dividir(num1,num2){
        return num1 / num2;
    }
    potenciar(num1,num2){
        return Math.pow(num1, num2);
    }
    raizcuadrada(num1,num2){
        return "La raiz cuadrada del primer numero es: " +Math.sqrt(num1)+
        "<br><br>La raiz cuadrada del segundo numero es: "+Math.sqrt(num2);
    }
    raizcubica(num1,num2){
        return "La raiz cubica del primer numero es: " +Math.cbrt(num1)+
        "<br><br>La raiz cubica del segundo numero es: "+Math.cbrt(num2);
    }
}
const calcular = new Calculadora();
let oper = (operacion, num1, num2)=>{
    switch (operacion) {
        case 1:
            resultado = calcular.sumar(num1,num2);
            break;
        case 2:
            resultado = calcular.restar(num1,num2);
            break;
        case 3:
            resultado = calcular.multiplicar(num1,num2);
            break;
        case 4:
            resultado = calcular.dividir(num1,num2);
            break;
        case 5:
            resultado = calcular.potenciar(num1,num2);
            break;
        case 6:
            resultado = calcular.raizcuadrada(num1,num2);
            break;
        case 7:
            resultado = calcular.raizcubica(num1,num2);
            break;
        default:
            document.write("Operacion invalida");
            break;
    }  
    return resultado;
}
document.write(oper(operacion,num1,num2));*/

const obtenerInfo = (materia)=>{
    materias = {
        ingSoft: ["A","santiago","alicia","andres","juan"],
        progMovil: ["B","santiago","alicia","dalto","juan"],
        compGrafica: ["C","santiago","andres","dalto","juan"],
        ingEconomica: ["D","alicia","andres","dalto","juan"]
    }

    if (materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    }else{return materias}
}

const mostrarInfo = (materia)=>{
    let info = obtenerInfo(materia)[1], profe = obtenerInfo(materia)[0][0],
    alumnos = obtenerInfo(materia)[0];
    alumnos.shift();
    let resultado = `<b>Alumnos presentes en la materia ${info}, con su docente
    ${profe}:</b><br>${alumnos}<br><br>`;
    document.write(resultado);
}

const cantidadClases = (alumno)=>{
    let total = 0, informacion = obtenerInfo();
    clases = [];
    for (infor in informacion){
        if (informacion[infor].includes(alumno)){total++;clases.push(" "+infor);}
    }return `<b>${alumno} esta en ${total} clases:</b> ${clases}`;
}

mostrarInfo("ingSoft");
mostrarInfo("progMovil");
mostrarInfo("compGrafica");
mostrarInfo("ingEconomica");
document.write(cantidadClases("juan"));