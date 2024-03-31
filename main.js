

let headerel = document.createElement("header");
let logoDiv = document.createElement("div");
let textLogo = document.createTextNode("Khaoula")
let menuDiv = document.createElement("ul");
let ilElement1 = document.createElement("li")
let text1 = document.createTextNode("home ")
let ilElement2 = document.createElement("li")
let text2 = document.createTextNode("about ")
let ilElement3 = document.createElement("li")
let text3 = document.createTextNode("service ")
let ilElement4 = document.createElement("li")
let text4 = document.createTextNode("contect ")



// className
headerel.className = "website-head";
logoDiv.className = "logo";
menuDiv.className = "menu";

// stayle
headerel.style.cssText = ("padding: 8px 5%;display: flex;justify-content: space-between;align-items: center;background-color: white;")
menuDiv.style.cssText = ("    display: flex;     width: 251px; justify-content: space-between;align-items: center;")
ilElement1.style.listStyleType = ("none");
ilElement2.style.listStyleType = ("none");
ilElement3.style.listStyleType = ("none");
ilElement4.style.listStyleType = ("none");

logoDiv.style.cssText = ("font-family: cursive; color: #058905eb;font-size: x-large;");
ilElement1.style.display = ("inline");
ilElement2.style.display = ("inline");
ilElement3.style.display = ("inline");
ilElement4.style.display = ("inline");


// append

headerel.appendChild(logoDiv);
logoDiv.appendChild(textLogo);
headerel.appendChild(menuDiv);
menuDiv.appendChild(ilElement1);
ilElement1.appendChild(text1);
menuDiv.appendChild(ilElement2);
ilElement2.appendChild(text2);
menuDiv.appendChild(ilElement3);
ilElement3.appendChild(text3);
menuDiv.appendChild(ilElement4);
ilElement4.appendChild(text4);

document.body.appendChild(headerel)

// section2







let divContent = document.createElement("div")
divContent.className = ("Content")

for (let i = 1; i < 16; i++) {
    let divProdect = document.createElement("div")
    let spanProdect = document.createElement("span")
    let spanContent = document.createTextNode(`${i}`)
    let ProdectContent = document.createTextNode("prodect")
    divProdect.className = ("Prodect")
    spanProdect.appendChild(spanContent)
    divProdect.appendChild(spanProdect)
    divContent.appendChild(divProdect)
    divProdect.appendChild(ProdectContent)
    divProdect.style.cssText = ("display: grid; justify-content: center;align-items: center;width: 100%;height: 80px;text-align: center;color: rgba(5, 137, 5, 0.92);background-color: white;")
    spanProdect.style.cssText = ("font-family: cursive;color: black;text-align: center;font-size: x-large;")

}

// style section 2

divContent.style.cssText = ("display:grid ;grid-template-columns: 1fr 1fr 1fr;padding: 10px;justify-content: space-between;align-items: center;justify-items: center;gap: 20px; width: 80%;margin: auto;")
document.body.style.cssText = ("background-color: #bdbdbd2b;margin: 0;")


document.body.appendChild(divContent)



