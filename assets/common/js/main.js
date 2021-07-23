
(function(steps) {
    const select = document.querySelector("#steps");
    
    for(let step = 2; step <= steps; step++){
        console.log(step);
        option = document.createElement("option");
        option.setAttribute('value', step);
        optionValue = document.createTextNode(step);
        option.appendChild(optionValue);
        select.appendChild(option);
        console.log(option);
    }

})(50);

function increase(){
    const select = document.querySelector("#steps");
    const visor = document.querySelector("#visor");
    
    visor.textContent = Number(visor.textContent) + Number(select.value);
}