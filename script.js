const rand = Math.floor(Math.random()*20);
let result = document.querySelector("#historyArea > h2");

const checkGuess = () => {
    const userValue = document.querySelector('#userGuess').value;
    if (userValue != ""){
        const distance = userValue - rand
        if (distance < 0){
            result.textContent = "too short";
        }else if(distance > 0){
            result.textContent = "too long";
        }else{
            alert("You won!");
        }
    }
}

