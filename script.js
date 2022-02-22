let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');   //it will select all the buttons
let screenValue='';
for(item of buttons){
item.addEventListener('click',(e)=>{
buttonText=e.target.innerText;

if(buttonText=='X'){
buttonText='*';
screenValue+=buttonText;
screen.value=screenValue;
  }
  else if(buttonText=='C'){
    screenValue="";
screen.value=screenValue;
  }
  else if(buttonText=='='){
    screen.value=eval(screenValue);
  }
  else{
   screenValue+=buttonText;         //you can make this calculator do some cool stuff if you want like scientific calculations 
screen.value=screenValue;
  } 
  
})
}
