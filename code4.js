//METODOS DE CADENAS
let cadena = "hola cadena de prueba", cadena2 = "cadena de prueba";
//junta dos cadenas de texto y retorna una nueva .concat()
resultado = cadena.concat(cadena2);
document.write(resultado + "<br><br>");

//devuelve true si una cadena empieza con los caracteres de otra .startsWith()
resultado2 = cadena.startsWith(cadena2);
document.write(resultado2 + "<br><br>");
//devuelve true su una cadena termina con los caracteres de otra .endsWith()
resultado3 = cadena.endsWith(cadena2);
document.write(resultado3 + "<br><br>");
//devuelve true si una cadena contiene los caracteres de la otra .includes()
resultado4 = cadena.includes(cadena2);
document.write(resultado4 + "<br><br>");
//delvuelve la posicion del primer caracter que se encuentre en la otra cadena .indexOf()
resultado5 = cadena.indexOf(cadena2);
document.write(resultado5 + "<br><br>");
//delvuelve la posicion del ultimo caracter que se encuentre en la otra cadena .lastIndexOf()
resultado6 = cadena.lastIndexOf(cadena2);
document.write(resultado6 + "<br><br>");

//devuelve una cadena añadiendole caracteres y su cantidad deseada al principio .padStart()
resultado7 = cadena.padStart(54, cadena2);
document.write(resultado7 + "<br><br>");
//devuelve una cadena añadiendole caracteres y su cantidad deseada al final .padEnd()
resultado8 = cadena.padEnd(54, cadena2);
document.write(resultado8 + "<br><br>");
//devuelve una cadena repetida la cantidad de veces deseada .repeat()
resultado9 = cadena.repeat(4);
document.write(resultado9 + "<br><br>");

//divide la cadena como le pidamos (la convierte en array) .split()
resultado10 = cadena.split(" ");
document.write(resultado10 + "<br><br>");
//nos da una nueva cadena a partir de una posicion inicial y final dada .substring()
resultado11 = cadena.substring(0,11);
document.write(resultado11 + "<br><br>");
//convierte una cadena de texto en minuscula .toLowerCase()
resultado12 = cadena.toLowerCase();
document.write(resultado12 + "<br><br>");
//convierte una cadena de texto en mayuscula .toUpperCase()
resultado13 = cadena.toUpperCase();
document.write(resultado13 + "<br><br>");
//covierte un dato a string .toString()
resultado14 = cadena.toString();
document.write(resultado14 + "<br><br>");
//quita los espacios en blanco de una cadena .trim() .trimStart() .trimEnd()
resultado15 = cadena.trim();
document.write(resultado15.length + "<br><br>");


//METODOS DE ARRAYS
let nombres = ["santiago", "alicia", "totti"];
//elimina el ultimo elemento de un array y muestra cual fue .pop()
fin = nombres.pop();
document.write(fin + "<br><br>");
//elimina el primer elemento de un array y muestra cual fue .shift()
fin2 = nombres.shift();
document.write(fin2 + "<br><br>");
//agrega un elemento al final del array y muestra la nueva cantidad .push()
fin3 = nombres.push("luna","juan");
document.write(fin3 + "<br><br>");
//invierte el orden de los elementos de un array .reverse()
fin4 = nombres.reverse();
document.write(fin4 + "<br><br>");
//agrega al principio del array la cantidad de elementos deseada y reotorna cantidad .unshift()
fin5 = nombres.unshift("gloria","puchi");
document.write(fin5 + "<br><br>");
//ordena el array en orden .sort()
fin6 = nombres.sort();
document.write(fin6 + "<br><br>");
//se pone la posicion que se desea iniciar y luego la cantidad de elementos que se desean eliminar,
//tambien se pueden agregar elementos .splice()
fin7 = nombres.splice(1,2,"belbet","hola");
document.write(fin7 + "<br><br>");

//convierte un array en una cadena de texto separandolo como se desee .join()
fin8 = nombres.join(" - ");
document.write(fin8 + "<br><br>");
//devuelve una parte del array en uno nuevo basado en un rango .slice()
fin9 = nombres.slice(0,3);
document.write(fin9 + "<br><br>");
//.toString() .indexOf() .lastIndexOf() .includes() tambien se usan en arrays

//crea un nuevo array con todos los elementos que cumplan una condicion .filter()
fin10 = nombres.filter(nombre => nombre.length > 5);
document.write(fin10 + "<br><br>");
//muestra un array en bucle .forEach()
nombres.forEach(function(nombre){document.write(nombre + "<br>")});


//OBJETO MATH BASICO




