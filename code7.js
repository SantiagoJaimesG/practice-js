/*document.querySelector(".parrafo");
document.querySelectorAll(".parrafo");
document.getElementById("#hola");
document.getElementsByTagName("p");*/

const contenedor = document.querySelector(".contenedor");
const fragmento = document.createDocumentFragment();
for (i = 0; i < 20; i++){
    const item = document.createElement("LI");
    item.innerHTML = "Hola soy Santiago";

    fragmento.appendChild(item);
}

contenedor.appendChild(fragmento);