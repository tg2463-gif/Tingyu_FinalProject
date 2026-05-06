let cyberButton = document.querySelector('#cyber-button');
let pageBody = document.querySelector('body');


function toggleCyberMode() {
    pageBody.classList.toggle('cyber-mode');
    
    if (pageBody.classList.contains('cyber-mode')) {
        cyberButton.textContent = "Enter Classic Mode";
        cyberButton.style.color = "#060607"; 
    } 

    else {
        cyberButton.textContent = "Enter Cyberpunk Mode";
        cyberButton.style.color = "##060607"; 
    }
}

cyberButton.addEventListener('click', toggleCyberMode);