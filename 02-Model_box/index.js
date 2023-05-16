//DOM Elements Varables
const openBtn = document.getElementById("open__btn");
const modelContainer = document.querySelector(".model__wrapper");
const  modelClose = document.querySelector(".model__close");


//EventListener
openBtn.addEventListener("click", ()=>{
    modelContainer.style.display ="block";
})


modelClose.addEventListener("click", ()=>{
    modelContainer.style.display ="none";
})
