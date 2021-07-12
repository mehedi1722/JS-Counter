(function All(){
    const counter = document.querySelector(".counter");
const button = document.querySelectorAll(".btn");
const getCode = document.querySelector(".getCode");
const container = document.querySelector(".container");


let count = 0;

button.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        let buttons = e.currentTarget.classList;
        //counting conditions...
        if(buttons.contains("Decrease")){
            count--;
        }else if(buttons.contains("Increase")){
            count++;
        }else{
            count = 0;
        }
        //counting color change condition
        if(count<0){
            counter.style.color = "red"
        }else if(count>0){
            counter.style.color = "green"
        }else{
            counter.style.color = "black"
        }
        counter.textContent = count;
    })
})

let code = `const counter = document.querySelector(".counter");
const button = document.querySelectorAll(".btn");

const getCode = document.querySelector(".getCode");
const container = document.querySelector(".container");


let count = 0;

button.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        let buttons = e.currentTarget.classList;
        //counting conditions...
        if(buttons.contains("Decrease")){
            count--;
        }else if(buttons.contains("Increase")){
            count++;
        }else{
            count = 0;
        }
        //counting color change condition
        if(count<0){
            counter.style.color = "red"
        }else if(count>0){
            counter.style.color = "green"
        }else{
            counter.style.color = "black"
        }
        counter.textContent = count;
    })
})

let code = const counter = document.querySelector(".counter");
const button = document.querySelectorAll(".btn");

const getCode = document.querySelector(".getCode");
const container = document.querySelector(".container");


let count = 0;

button.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        let buttons = e.currentTarget.classList;
        //counting conditions...
        if(buttons.contains("Decrease")){
            count--;
        }else if(buttons.contains("Increase")){
            count++;
        }else{
            count = 0;
        }
        //counting color change condition
        if(count<0){
            counter.style.color = "red"
        }else if(count>0){
            counter.style.color = "green"
        }else{
            counter.style.color = "black"
        }
        counter.textContent = count;
    })
});

getCode.addEventListener("click", function(){
    container.textContent = code
})


 `;

getCode.addEventListener("click", function(){
    container.textContent = code;
    container.style.textAlign = "left";
    container.style.background = "black";
    container.style.color = "white";
})
 
})();







