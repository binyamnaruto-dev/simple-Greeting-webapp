let userInput = document.querySelector('.search-bar');
let searchBtn = document.querySelector('.search-btn')
let ResetBtn = document.querySelector('.search-btn2')
let Greeting = document.querySelector('.Greeting')
let OutputCont = document.querySelector('.Output-div')
let GreetingTime = document.querySelector('.GreetingTime')
let Username = userInput.value;
function CurrentTime(){
    let x = new Date()
    let y = x.getHours()
    let Username = userInput.value;
//Time System: Converts the hour number into a text greeting

    if(y == 0){
        GreetingTime.textContent ='Good night!.';  
    }else if(y <= 11){
        GreetingTime.textContent = 'Good morning!.';
    }else if(y <= 16){
        GreetingTime.textContent = 'Good afternoon!.';
    }else if(y <=23){
        GreetingTime.textContent = 'Good evening!.';
    }
// user input type error handling system;
    if(userInput.value.length <=1 ){
        Greeting.textContent = `Wellcome: Sir!`;
    }else{
        Greeting.textContent = `Wellcome: ${Username}`;
    }
//continer style display system;

    OutputCont.style.padding = '20px 50px 20px 50px';
    OutputCont.style.backgroundColor = 'rgba(251, 254, 255, 0.288)';
    OutputCont.style.borderRadius = '15px'; 
}

function Clearsys(){
//clearing system on text and style;

    Greeting.textContent = '';
    GreetingTime.textContent = '';
    userInput.value = ''
    OutputCont.style.padding = '';
    OutputCont.style.backgroundColor = '';
    OutputCont.style.borderRadius = '';
}
//Search Button system;

searchBtn.addEventListener('click', () =>{
    CurrentTime()
})
//Resat button;

ResetBtn.addEventListener('click', () =>{
Clearsys()
})


//No Ai in this projuct or 0% ai;