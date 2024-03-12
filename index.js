const colors = ["#63C7F2", "rgb(146,75,192)", "cyan", "green", "orange", "purple", "pink", "teal"];

const color=document.querySelector(".color");
const btn=document.querySelector(".btn");



btn.addEventListener('click',()=>{
    let randomNumber=Math.floor(Math.random()*7);
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
})