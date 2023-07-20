// je selectionne les documents avec lesquelles je vais travailler
const boutonsPlus= document.querySelectorAll(".Plus")
const boutonsMoins= document.querySelectorAll(".Moins")
const Quantite= document.querySelectorAll(".Quantité")
const boutonsSupprimer= document.querySelectorAll(".Supprimer")
const Prix = document.querySelectorAll (".Prix")
// console.log(boutonsPlus);

// Les boutons plus 

for (let index = 0; index < boutonsPlus.length; index++) {
    // on ajoute un écouteur d'évènement sur tous les boutons plus
    boutonsPlus[index].addEventListener("click", () => {
        // on récupère le input contenant la quantité 
        let input = boutonsPlus [index].nextElementSibling;
        // on récupère l'attribut value de l'input 
        let value = input.getAttribute( "value" )
        // Vu que la valeur se trouve actuellement en string on la convertie en entier 
        let intvalue = parseInt(value)
        // on incrémente le value de 1
        let newValue = intvalue + 1
        // on affecte la nouvelle valaue à l'attribut value de l'input
        input.setAttribute("value", newValue) ; 
        calculTotal() 
    })
}

//  Les boutons moins 

for (let index = 0; index < boutonsMoins.length; index++) {
    
    boutonsMoins[index].addEventListener( "click", () => {
        // On récupère le input contennat la quantité 
        let input = boutonsMoins[index].previousElementSibling;
        //  On récupère l'attribut value de l'input 
        let value = input.getAttribute ("value")
        //  Vu que la valeur se trouve actuellement en string on la convertie en entier 
        let invalue = parseInt(value)

        if (invalue>0) {
            //  on décremente la valeur value de 1
            let newValue = invalue - 1
            // on affecte la nouvelle valeur à l'attribut value de l'input 
            input.setAttribute( "value", newValue );  
        } 
        calculTotal() 
    })

}


//  Le total

function calculTotal() {
    let total = 0 
    for (let index = 0; index < Quantite.length; index++) {
        // On récupère la quantité et on la convertie en entier 
        let intQuantite = parseInt(Quantite[index].getAttribute("value")); 
        // On récupère le prix et on le convertit en entier 
        let intprix = parseInt(Prix[index].textContent)
        let sousTotal = intQuantite * intprix; 
        total = total + sousTotal; 

        let totalHtml = document.getElementById("Total")
        totalHtml.innerText = total
        
    }
    
}


//  Boutons supprimer
for (let index = 0; index < boutonsSupprimer.length; index++) {
    boutonsSupprimer[index].addEventListener( "click", () => {
    let parent = boutonsSupprimer[index].parentElement
    //  On se positionne sur le grandparent 
    let grandparent = parent.parentElement
    // // On retire
    //grandparent.removeChild(parent)
    parent.remove()
})

    
}
    
console.log(boutonsSupprimer);;