let time = 000;
const creation_de_cercle = () =>{
    const r = () => Math.floor(Math.random() * 255);
    const g = ()=> Math.floor(Math.random() * 255);
    const b = ()=> Math.floor(Math.random() * 255);

    const colorString = ()=> `rgb(${r()}, ${g()}, ${b()})`;
    // permet de créé une couleur random en compilent les trois variable au dessus 
    // const colorString = `rgb(${r}, ${g}, ${b})`;
  
    const circle = document.createElement("span");// creation d'element html rapide avec "document.body.appendChild(circle);"
    circle.classList.add('cercle');// ahoute un class 'cercle' a la span
    //permet de créé un taille aleatoir de min"30" 
    let taille_du_cercle = Math.random() * 150 + 30 + "px"; 
    // injection du top et du lef en random 
    circle.style.top = Math.random() * 90 + "%"; 
    circle.style.left = Math.random() * 90 + "%";
    console.log(circle.style.left);
    // inject une hauteur a la balise "span"
    circle.style.height = taille_du_cercle;
    circle.style.width = taille_du_cercle;
    // random la rotation des boules à chaque apparition 
    circle.style.transform ="rotate("+ Math.random()*360 +"deg"+")";
     // random la linea-gradient des boules à chaque apparition 
    circle.style.background = "linear-gradient("+ Math.random()*360 +"deg,"+ colorString() + "0%,"+ colorString()+"100%)";
    circle.style.zIndex = Math.random()* 1000 ;
    // circle.style.boxShadow = Math.random()
    document.body.appendChild(circle); 
    // efface les boulles 
    setTimeout(() => {
        circle.remove();
    },12000);
    time=+4000;
    

};


creation_de_cercle();
creation_de_cercle();
creation_de_cercle();
creation_de_cercle();


setInterval(creation_de_cercle, time);
// for (let i =0; i < 10000; i++){
//     creation_de_cercle();
// }
