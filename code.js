let operacion = (nombre)=>{
    let dinero = prompt(`¿Cuanto dinero tienes ${nombre}?`);
    dinero = parseFloat(dinero);
    //Palito de Helado de agua 
    if (dinero >= 0.6 && dinero < 1){document.write(`${nombre} Compra el Palito de Helado de agua y te sobra `+(dinero - 0.6));}
    //Palito de Helado de crema
    else if (dinero >= 1 && dinero < 1.6){document.write(`${nombre} Compra el Palito de Helado de crema y te sobra `+(dinero - 1));}
    //Bombon helado marca heladix
    else if (dinero >= 1.6 && dinero < 1.7){document.write(`${nombre} Compra el Bombon helado marca heladix y te sobra `+(dinero - 1.6));}
    //Bombon helado marca heladovich
    else if (dinero >= 1.7 && dinero < 1.8){document.write(`${nombre} Compra el Bombon helado marca heladovich y te sobra `+(dinero - 1.7));}
    //Bombon helado marca helardo
    else if (dinero >= 1.8 && dinero < 2.9){document.write(`${nombre} Compra el Bombon helado marca helardo y te sobra `+(dinero - 1.8));}
    //Potecito de helado con confites o pote de 1/a de kg
    else if (dinero >= 2.9){document.write(`${nombre} Compra el Potecito de helado con confites o pote de 1/a de kg y te sobra `+(dinero - 2.9));}
    //No le alcanza
    else {document.write(`${nombre} No te alcanza el dinero`);}
}
operacion("Cofla");
document.write("<br>");
operacion("Roberto");
document.write("<br>");
operacion("Pedro");