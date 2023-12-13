class Animal{
    constructor(especie,edad,color){
        this.especie = especie, this.edad = edad, this.color = color,
        this.informacion = `Soy ${this.especie}, tengo ${this.edad} años y soy
        de color ${this.color}`;
    }
    verInformacion(){document.write(this.informacion + "<br>");}
}
class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = null;
    }
    set setRaza(newName){this.raza = newName;}
    get getRaza(){return this.raza;}
}
const perro = new Perro("perro", 5, "marron", "pincher"), gato = new Animal("gato", 3, "gris"),
pajaro = new Animal("cotorro", 1, "verde");
perro.setRaza = "pitbull";
document.write(perro.getRaza);
class Celular{
    constructor(color,peso,resoPant,camara,memRam){
        this.color = color, this.peso = peso, this.resoPant = resoPant, 
        this.camara = camara, this.memRam = memRam, this.encendido = false,
        this.informacion = `El celular es de color ${this.color}, tiene un peso de 
        ${this.peso}g, tiene una resolucion de pantalla de ${this.resoPant} pulgadas,
        una camara de ${this.camara}mpx, una memoria RAM de ${this.memRam}gb`;
    }
    verInformacion(){document.write(this.informacion + "<br><br>");}
    reiniciar(){
        if (this.encendido == true){
            alert("reiniciando celular");
            this.encendido = true;
        }else{alert("el celular esta apagado");}
    }
    botonEncendido(){
        if (this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
        }else if(this.encendido == true){
            alert("celular apagado");
            this.encendido = false;
        }else{alert("celular dañado");}
    }
    tomarFoto(){alert(`el celular tomo una foto en una resolucion de ${this.camara}`)}
    grabarVideo(){alert(`el celular grabo un video en una resolucion de ${this.camara}`)}
}

class CelularGA extends Celular{
    constructor(color,peso,resoPant,camara,memRam,segCam){
        super(color,peso,resoPant,camara,memRam);
        this.segCam = segCam;
    }
    recFac(){alert("vamos a iniciar un reconocimiento facial")}
    camSL(){alert("estas grabando en camara lenta")}
    infoGA(){return (this.informacion + `, una segunda camara de ${this.segCam}mpx`);}
}

const cel1 = new Celular("plata", 35, 3, 12, 4), cel2 = new Celular("oro", 40, 3.5, 48, 8),
cel3 = new Celular("negro mate", 20, 5, 48, 8), cel4 = new CelularGA("azul", 15, 6, 120, 16, 48);
cel1.verInformacion();
cel2.verInformacion();
cel3.verInformacion();
cel1.botonEncendido();
cel1.reiniciar();
cel2.tomarFoto();
cel3.grabarVideo();
cel1.botonEncendido();
cel4.recFac();
document.write(cel4.infoGA());

class App{
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas, this.puntuacion = puntuacion, this.peso = peso,
        this.iniciada = false, this.instalada = false, this.informacion = `La app tiene 
        ${this.descargas} descargas, una puntuacion de ${this.puntuacion} estrellas y tiene
        un peso de ${this.peso}mb`;
    }
    verInfo(){document.write(this.informacion + "<br><br>")}
    abrir(){
        if (this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("Se abrio la app")
        }else{alert("la app ya esta abierta")}
    }
    cerrar(){
        if (this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("Se cerro la app")
        }else{alert("la app ya esta cerrada")}
    }
    instalar(){
        if (this.instalada == false){
            this.instalada = true;
            alert("se instalo la app")
        }else{alert("la app ya estaba instalada")}
    }
    desinstalar(){
        if (this.instalada == true){
            this.instalada = false;
            alert("se desinstalo la app")
        }else{alert("la app no existe")}
    }
}

app1 = new App(16000, 5, 250), app2 = new App(40000, 4.6, 150), app3 = new App(7800, 3, 35),
app4 = new App(50000, 4.8, 300), app5 = new App(1600, 2.5, 25), app6 = new App(3, 1.5, 20),
app7 = new App(1000000, 5, 400);

app1.verInfo();
app2.verInfo();
app3.verInfo();
app4.verInfo();
app5.verInfo();
app6.verInfo();
app7.verInfo();
