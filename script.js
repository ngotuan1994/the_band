const buyTickets = document.querySelectorAll(".js-buyTicket");
const closeModal = document.querySelector(".modal-close");
const modal = document.querySelector(".modal")
const modalContainer = document.querySelector(".modal-container");
const listMenu = document.querySelector(".nav_list");
const navBarLeft = document.querySelector(".navigation_bar__left");
const header = document.querySelector("#header")
function showBuyTickets(){
    document.querySelector(".modal").classList.add("display_flex");
}
function listenBtnTicket(){
    for (const buyTicket of buyTickets) {
        buyTicket.addEventListener("click",showBuyTickets);

    }
}

function closeBuyTicket(){
    document.querySelector(".modal").classList.remove("display_flex");
}
function listenBtnCloseModal(){
    closeModal.addEventListener("click",closeBuyTicket);
}
function listenModal(){
    modal.addEventListener("click",closeBuyTicket);
}
function listenModalaContainer() {
    modalContainer.addEventListener("click", (event)=>{
        event.stopPropagation();
    })
}
function listenListMenu(){
    
    listMenu.addEventListener("click", ()=>{
        if(navBarLeft.clientHeight > 200){
            navBarLeft.style.height = "46px";
            header.style.height = "46px";            
        }
        else{
            navBarLeft.style.height = "230px";
            header.style.height = "230px";
        }
                 
       
    })
}
listenBtnTicket();
listenBtnCloseModal();
listenModal();
listenModalaContainer();
listenListMenu();



