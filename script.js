let inputs = [...document.querySelectorAll(".input-text")];


function checkInputValue(input) {
    inputs.forEach(input => {
        if(input.value !== "") {
            input.previousSibling.previousSibling.classList.add("active");
        }
        else{
            input.previousSibling.previousSibling.classList.remove("active");
        }
    });
}