const buyTickets = document.querySelectorAll(".js-buyTicket");
const closeModal = document.querySelector(".modal-close");
const modal = document.querySelector(".modal")
const modalContainer = document.querySelector(".modal-container");
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
listenBtnTicket();
listenBtnCloseModal();
listenModal();
listenModalaContainer();



