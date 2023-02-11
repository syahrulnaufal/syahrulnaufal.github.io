const sidenav = document.querySelector(".sidenav");
const main = document.querySelector(".main");
const showButton = document.querySelector(".show");
const slider = document.getElementsByClassName("slider");
const slide = document.getElementsByClassName("slide");
const card = document.getElementsByClassName("card");

//set card and slider width =========================
let cardWidth = "400px";

//var untuk mengubah lebar slide 
for(i=0; i < slider.length; i++){
    let jumlahDiv = slider[i].children.length;
    let lebarSlide = (Number.parseInt(cardWidth) + 10) * jumlahDiv ;
    slider[i].style.width = lebarSlide.toString() + "px" ; 
}

for(i=0; i < card.length; i++){
    card[i].style.width = cardWidth;
}

// ====================================================

// pop up animation =====================================
function popUp(){
for(i=0; i < card.length; i++){
    let vw = window.innerWidth;
    let left = card[i].getBoundingClientRect().left;
    if( left > vw/10 && left < vw - vw/10 ){
        console.log("pop")
    }else{
        console.log("unpop");
    }
}
}

for(i=0; i<slide.length; i++){
    slide[i].addEventListener("scroll", popUp, false);
}

// ======================================================


function gone(){
    sidenav.classList.remove("tampil");
    sidenav.classList.add("sembunyi");
    showButton.classList.remove("sembunyi");
    showButton.classList.add("tampil");
    main.classList.remove("separate");
    main.classList.add("lebar");
}

function show(){
    sidenav.classList.remove("sembunyi");
    sidenav.classList.add("tampil");
    showButton.classList.remove("tampil");
    showButton.classList.add("sembunyi");
    main.classList.add("separate");
    main.classList.remove("lebar");
}
