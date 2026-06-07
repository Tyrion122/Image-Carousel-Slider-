const pizzaImg = [
    "/images/Chicago.jpg",
    "/images/margherita.jpg",
    "/images/neapolitan.jpg",
    "/images/pepperoni.jpg"
]
let num = 0;
let image = document.getElementById("image");

//добавити перевірку на кількість фото і щоб автоматично додавались крапки (pizzaImg.length)
let dotsText = document.getElementById("dotsText");
let dots = [
]

//dots[0].style.fontSize="24px";
//
for (let d=0; pizzaImg.length>d; d++){
    dotsText.innerHTML+=`<span>.</span>`;
}
dots = document.querySelectorAll("#dotsText span");


function Next(){
    num++;
    if(pizzaImg.length<=num){
        num=0
        image.src = pizzaImg[num];
        document.getElementById("Previous").disabled=true;
    }
    if(num==0){
        document.getElementById("Previous").disabled=true;
        dots.forEach((dot)=>{dot.style.fontSize="12px";});
        dots[num].style.fontSize="24px";
    }else{
        image.src = pizzaImg[num];
        document.getElementById("Previous").disabled=false;
        dots[num].style.fontSize="24px";
        dots[num-1].style.fontSize="12px";
    }
    console.log(num);
    return num;
}

function Previous(){
    num--;
    if(num==0){
        image.src = pizzaImg[num];
        document.getElementById("Previous").disabled=true;
        dots.forEach((dot)=>{dot.style.fontSize="12px";});
        dots[num].style.fontSize="24px";
    }else{
        image.src = pizzaImg[num];
        dots[num].style.fontSize="24px";
        dots[num+1].style.fontSize="12px";
    }
    console.log(num);
    return num;
}

if(num==0){document.getElementById("Previous").disabled=true;}

window.onload = ()=>{
    dots[0].style.fontSize="24px";
}
//window onload додати крапку першу і ще щось до нього перенести