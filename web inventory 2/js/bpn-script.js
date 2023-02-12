const sidenav = document.querySelector(".sidenav");
const main = document.querySelector(".main");
const slider = document.getElementsByClassName("slider");
const slide = document.getElementsByClassName("slide");
const card = document.getElementsByClassName("card");
const pop = document.querySelectorAll(".pop");

//set card and slider width =========================
let cardWidth = "300px";
let cardWidthPop = "400px";

//var untuk mengubah lebar slide 
for(i=0; i < slider.length; i++){
    let jumlahDiv = slider[i].children.length;
    let lebarSlide = (Number.parseInt(cardWidth) + 10) * jumlahDiv ;
    slider[i].style.width = lebarSlide.toString() + "px" ;
}

for(i=0; i < card.length; i++){
    card[i].style.width = cardWidth;
}

for(i=0; i < pop.length; i++){
    card[i].style.width = cardWidth;
}

// ====================================================

// pop up animation =====================================
function popUp(){
for(i=0; i < card.length; i++){
    let vw = window.innerWidth;
    let left = card[i].getBoundingClientRect().left;
    if( left > 0 && left < vw - vw/4.5 ){
        if(card[i].classList.contains("pop") == false){
            card[i].classList.add("pop");
        }
    }else{
        if(card[i].classList.contains("pop") == true){
            card[i].classList.remove("pop");
        }
    }
}
}
popUp();

for(i=0; i<slide.length; i++){
    slide[i].addEventListener("scroll", popUp, false);
}

// ======================================================

// setting main height for responsive to amount of slide
let mainHeight = 500 * slide.length;
main.style.height = mainHeight.toString() + "px";

function gone(){
    sidenav.classList.remove("tampil");
    sidenav.classList.add("sembunyi");
    main.classList.remove("separate");
    main.classList.add("lebar");
}

function show(){
    sidenav.classList.remove("sembunyi");
    sidenav.classList.add("tampil");
    main.classList.add("separate");
    main.classList.remove("lebar");
}

// check if the cursor is near left it will show sidebar
document.addEventListener("mousemove", function(mouse){
    if(mouse.clientX < 20){
        show();
        console.log(sidenav.getBoundingClientRect().right , mouse.clientX)
    }else if(mouse.clientX > 216){
        gone();
    }
});

