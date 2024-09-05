function change_style(){
    let selected_button = document.querySelector(".contact")
    selected_button.style.color = "black";
    selected_button.style.backgroundcolor = "aqua";
    selected_button.style.border =" 2px solid black"

}
function previous_style(){
    let selected_button = document.querySelector(".contact")
    selected_button.style.color = "aqua";
    selected_button.style.backgroundcolor = "black";
    selected_button.style.border =" 2px solid aqua";
}