let op1 = [];
let op2 = [];
let operator = "";
let result = 0;
let firstIsIn = false;
let firstNum = 0;
let secondNum = 0;
let equalIsIn = false;
let initial="";










let clear = document.querySelector('#clear');
let back = document.querySelector('#back');
let num = document.querySelectorAll('[number]');
let fop = document.querySelector('.foperand');
let sop = document.querySelector('.soperand');
let operate = document.querySelectorAll('[operator]');
let equal = document.querySelector('#equal');


fop.innerHTML = initial;






for(let i = 0;i<num.length;i++){
  num[i].addEventListener('click', ()=> {
    if(!firstIsIn){
    if(firstNum == 0){
      firstNum = Number(num[i].textContent);
      sop.innerHTML = firstNum;
    }
    else{
      firstNum = firstNum * 10 + Number(num[i].textContent);
      sop.innerHTML = firstNum;
    }}
    else{
      if(secondNum == 0){
        secondNum = Number(num[i].textContent);
        sop.innerHTML = secondNum;
      }
      else{
        secondNum = secondNum * 10 + Number(num[i].textContent);
        sop.innerHTML = secondNum;
      }
    }
  })
}



function operateNum(operator){
  switch(operator){
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    case "*":
      return firstNum * secondNum;
    case "/":
      return firstNum / secondNum;
  }
}



for(let i = 0;i<operate.length;i++){
  operate[i].addEventListener('click', ()=> {
    equalIsIn = false;
    if(operator!= ""){
      firstNum = operateNum(operator);
      secondNum = 0;
      operator = String(operate[i].textContent);
      fop.innerHTML = firstNum;
      sop.innerHTML = operator;
    }
    else{
    operator = String(operate[i].textContent);
    fop.innerHTML = firstNum;
    sop.innerHTML = operator;
    firstIsIn = true;
    }
  })
}


clear.addEventListener('click',()=>{
  clearing();
})


function clearing(){
  firstNum = 0;
  secondNum = 0;
  operator = "";
  fop.innerHTML = initial;
  sop.innerHTML = "";
  firstIsIn = false;
}

back.addEventListener('click', ()=>{
  if(!equalIsIn){
  if(!firstIsIn){
    firstNum = Math.floor(firstNum/10);
    sop.innerHTML = firstNum;
  }
  else{
    secondNum = Math.floor(secondNum/10);
    sop.innerHTML = secondNum;
  }
}
})

equal.addEventListener('click', ()=>{
  if(operator != ""){
    equalIsIn = true;
    firstNum = operateNum(operator);
    secondNum = 0;
    operator = "";
    fop.innerHTML = "Ans = " + firstNum;
    sop.innerHTML = "";
    firstIsIn = false;
  }
})