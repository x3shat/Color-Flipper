const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
 

const color=document.querySelector(".color");
const btn=document.querySelector(".btn");



btn.addEventListener('click',()=>{
    
    let hexColor="#";
    for(let i =0;i<6;i++){
        let randomNumber=randomNumeber();
        hexColor+=hex[randomNumber];
    }
    document.body.style.backgroundColor=hexColor;
    color.textContent=hexColor;

})

function randomNumeber(){
    return  random= Math.floor(Math.random()*16);
}