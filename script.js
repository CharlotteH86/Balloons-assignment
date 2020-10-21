let popped = 0;
const balloons = document.querySelectorAll('.balloons');
const once = {
    once : true
}

balloons.forEach((element) => {
    element.addEventListener('mouseover', (event) =>{
        event.target.style.backgroundColor = "lightgrey";
        event.target.textContent = "POP!";
        popped++;
        checkAllPopped();
    }, once)
})

function removeEvent (event){
    event.target.removeEventListener('mouseover', () =>{})
}

function checkAllPopped(){
    if(popped === balloons.length){
        const message = document.querySelector('#whenPopped');
        const gallery = document.querySelector('#balloons-gallery')
        gallery.innerHTML='';
        message.style.display = 'block';
    }
}