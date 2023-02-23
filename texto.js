/*Texto H2*/
const text = document.querySelector('.h2');
const str = text.innerHTML;

text.innerHTML="";

const speed = 250;
var i = 0;

function typeWriter(){
    if(i < str.length){
        text.innerHTML += str.charAt(i);
  
        i++;
        setTimeout(typeWriter, speed);
    }
}
setTimeout(typeWriter, speed);


/*Texto h3*/

const texto = document.querySelector(".animation");
const textLoad = () =>{
    setTimeout(()=>{
        texto.textContent ="👩🏻‍💻 🧠 🪄 ";
    },0);
   
    setTimeout(()=>{
        texto.textContent ="Frontend Developer 👩🏻‍💻";
    },5000);

        setTimeout(()=>{
            texto.textContent ="Autodidacta👩🏻‍🏫";
        },7000);
     
            setTimeout(()=>{
                texto.textContent ="Disciplinada🏋🏻‍♀️";
            },9000);

            setTimeout(()=>{
                texto.textContent ="Creativa 🪄";
            },11000);   
}

textLoad();

setInterval(textLoad,12000);


/* menú hamburguesa*/

const button = document.querySelector('.button');
const nav = document.querySelector('#nav');
button.addEventListener('click',()=>{
    nav.classList.toggle('activo');
});



