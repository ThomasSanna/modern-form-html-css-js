let inputs = [...document.querySelectorAll(".input-text")];


function checkOnChangeValue(input) {
    inputs.forEach(input => {
        if(input.value !== "") {
            input.previousSibling.previousSibling.classList.add("active");
        }
        else{
            input.previousSibling.previousSibling.classList.remove("active");
        }
    });
} 