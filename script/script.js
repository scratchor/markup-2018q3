document.addEventListener("DOMContentLoaded", ready);
function ready(){
    let button1 = document.querySelector(".menu_button1");
    let button2 = document.querySelector(".menu_button2");
    button1.addEventListener("click", handler1)
    button2.addEventListener("click", handler2)    
}

function handler1(){
    let ul_1 = document.getElementById("ul_1");
    let h2 = document.querySelector(".greeting");
    ul_1.classList.toggle("open1");
    h2.classList.toggle("open_greeting");    
}

function handler2(){
    let ul_2 = document.querySelector(".ul_footer_menu");
    let div = document.querySelector(".div_footer_items");
    ul_2.classList.toggle("open2");
    div.classList.toggle("open3");
}