const sidenav = document.querySelector(".sidenav");
const main = document.querySelector(".main");
const showButton = document.querySelector(".show");

function gone(){
    sidenav.classList.remove("tampil");
    sidenav.classList.add("sembunyi");
    showButton.classList.remove("sembunyi");
    showButton.classList.add("tampil");
    main.classList.remove("separate");
}

function show(){
    sidenav.classList.remove("sembunyi");
    sidenav.classList.add("tampil");
    showButton.classList.remove("tampil");
    showButton.classList.add("sembunyi");
    main.classList.add("separate");
}
