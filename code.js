let nombreC = "Cofla", nombreR = "Roberto", nombreP = "Pedro"
let dineroCofla = prompt(`¿Cuanto dinero tienes ${nombreC}?`), 
dineroRoberto = prompt(`¿Cuanto dinero tienes ${nombreR}?`),
dineroPedro = prompt(`¿Cuanto dinero tienes ${nombreP}?`);
dineroCofla = parseFloat(dineroCofla), dineroRoberto = parseInt(dineroRoberto), dineroPedro = parseInt(dineroPedro);

//Cofla
//Palito de Helado de agua 
if (dineroCofla >= 0.6 && dineroCofla < 1){alert(`${nombreC} Compra el Palito de Helado de agua y te sobra `+(dineroCofla - 0.6));}
//Palito de Helado de crema
else if (dineroCofla >= 1 && dineroCofla < 1.6){alert(`${nombreC} Compra el Palito de Helado de crema y te sobra `+(dineroCofla - 1));}
//Bombon helado marca heladix
else if (dineroCofla >= 1.6 && dineroCofla < 1.7){alert(`${nombreC} Compra el Bombon helado marca heladix y te sobra `+(dineroCofla - 1.6));}
//Bombon helado marca heladovich
else if (dineroCofla >= 1.7 && dineroCofla < 1.8){alert(`${nombreC} Compra el Bombon helado marca heladovich y te sobra `+(dineroCofla - 1.7));}
//Bombon helado marca helardo
else if (dineroCofla >= 1.8 && dineroCofla < 2.9){alert(`${nombreC} Compra el Bombon helado marca helardo y te sobra `+(dineroCofla - 1.8));}
//Potecito de helado con confites o pote de 1/a de kg
else if (dineroCofla >= 2.9){alert(`${nombreC} Compra el Potecito de helado con confites o pote de 1/a de kg y te sobra `+(dineroCofla - 2.9));}
//No le alcanza
else {alert(`${nombreC} No te alcanza el dinero`);}

//Roberto
//Palito de Helado de agua 
if (dineroRoberto >= 0.6 && dineroRoberto < 1){alert(`${nombreR} Compra el Palito de Helado de agua`);}
//Palito de Helado de crema
else if (dineroRoberto >= 1 && dineroRoberto < 1.6){alert(`${nombreR} Compra el Palito de Helado de crema`);}
//Bombon helado marca heladix
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7){alert(`${nombreR} Compra el Bombon helado marca heladix`);}
//Bombon helado marca heladovich
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8){alert(`${nombreR} Compra el Bombon helado marca heladovich`);}
//Bombon helado marca helardo
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9){alert(`${nombreR} Compra el Bombon helado marca helardo`);}
//Potecito de helado con confites o pote de 1/a de kg
else if (dineroRoberto >= 2.9){alert(`${nombreR} Compra el Potecito de helado con confites o pote de 1/a de kg`);}
//No le alcanza
else {alert(`${nombreR} No te alcanza el dinero`);}

//Pedro
//Palito de Helado de agua 
if (dineroPedro >= 0.6 && dineroPedro < 1){alert(`${nombreP} Compra el Palito de Helado de agua`);}
//Palito de Helado de crema
else if (dineroPedro >= 1 && dineroPedro < 1.6){alert(`${nombreP} Compra el Palito de Helado de crema`);}
//Bombon helado marca heladix
else if (dineroPedro >= 1.6 && dineroPedro < 1.7){alert(`${nombreP} Compra el Bombon helado marca heladix`);}
//Bombon helado marca heladovich
else if (dineroPedro >= 1.7 && dineroPedro < 1.8){alert(`${nombreP} Compra el Bombon helado marca heladovich`);}
//Bombon helado marca helardo
else if (dineroPedro >= 1.8 && dineroPedro < 2.9){alert(`${nombreP} Compra el Bombon helado marca helardo`);}
//Potecito de helado con confites o pote de 1/a de kg
else if (dineroPedro >= 2.9){alert(`${nombreP} Compra el Potecito de helado con confites o pote de 1/a de kg`);}
//No le alcanza
else {alert(`${nombreP} No te alcanza el dinero`);}