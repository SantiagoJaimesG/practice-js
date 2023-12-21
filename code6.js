/*Funciones de registro
console.clear();
console.log("hola");
console.info("hola");
console.error("error");
console.table([2,3,5,5,8,4,58,4]);
console.warn("ojo ahi");
console.dir([2,3,5,5,8,4,58,4]);
//Funciones de conteo
console.count();
console.countReset();
//Funciones de agrupacion
console.group("personas");
console.groupEnd();
console.groupCollapsed("personas");
//Funciones de temporizacion
console.time();
console.timeLog();
console.timeEnd();*/

const materias = {
    fisica: [90, 6, 4, "fisica"],
    algebra: [85, 7, 2, "algebra"],
    español: [40, 4, 1, "español"],
    ingles: [90, 9, 5, "ingles"],
    biologia: [30, 4, 1, "biologia"],
    programacion: [95, 6, 4, "programacion"]
}
const aprobacion = ()=>{
    for (materia in materias){
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];
        console.log(materias[materia][3]);
        if (asistencias >= 90){
            console.log("%c  Buena asistencia","color: green");
        }else{
            console.log("%c  Mala asistencia","color: red");
        }
        if (promedio >= 7){
            console.log("%c  Buen promedio","color: green");
        }else{
            console.log("%c  Mal promedio","color: red");
        }
        if (trabajos >= 3){
            console.log("%c  Buenos trabajos","color: green");
        }else{
            console.log("%c  Malos trabajos","color: red");
        }
    }
}
aprobacion();