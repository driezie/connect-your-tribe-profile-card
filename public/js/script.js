function turn() {
    document.getElementById("card").classList.toggle("turned");    
    // This toggles the inert attribute on the back and front of the card to be active for a focus
    document.querySelector(".back").toggleAttribute("inert");
    document.querySelector(".front").toggleAttribute("inert");
}