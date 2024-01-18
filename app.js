let input=document.querySelector('input');
let submit=document.querySelector('.submit');
let clear=document.querySelector(".clear");
let printYear=document.querySelector('#printyear');
let printMonth=document.querySelector('#printmonth');
let printDay=document.querySelector('#printday');
let output=document.querySelector('.output');
let old=document.querySelector('#old');
let you=document.querySelector('#you');


let userYear;
let userMonth;
let userDay;
submit.addEventListener('click',function(){
    // record date enter by user
    userYear=input.valueAsDate.getFullYear();
    userMonth=input.valueAsDate.getMonth()+1;
    userDay=input.valueAsDate.getDate();
    currAge();
})

//clear button
clear.addEventListener('click',function(){
    if(output.style.display==''){
        printYear.innerText=0;
        printMonth.innerText=0;
        printDay.innerText=0;
        input.value="";
    }else if(output.style.display=='none'){
        output.style.display='';
        you.innerText="You are";
        old.innerText="old";
        input.value="";
    }
})
//output for enter key pressed
input.addEventListener("keypress",function(event){
    if(event.code=="Enter"||event.code=="NumpadEnter"){
        userYear=input.valueAsDate.getFullYear();
        userMonth=input.valueAsDate.getMonth()+1;
        userDay=input.valueAsDate.getDate();
        currAge();
    }
})
//record current date 
let date= new Date();
let currYear=(date.getFullYear());
let currMonth=(date.getMonth()+1);
let currDay=(date.getDate());

//function for find current age
let result="";
let resultYear;
let resultMonth;
let resultDay;
function currAge(){
    if(userYear>currYear){
        output.style.display="none";
        you.innerText="Please enter a Valid date!";
        old.innerText="Your Birth year is greater than the current year.";
    }else if(userYear==currYear && userMonth>currMonth){
        output.style.display="none";
        you.innerText="Please enter a Valid date!";
        old.innerText="Your Birth month is greater than the current month.";
    }else if(userYear==currYear && userMonth==currMonth && userDay>currDay){
        output.style.display="none";
        you.innerText="Please enter a Valid date!";
        old.innerText="Your Birth date is greater than the current date.";
    }else if(userYear==currYear && userMonth==currMonth && userDay==currDay){
        you.innerText="Welcome, today is your first day on Earth.";
        old.style.display="none";
        output.style.display="none";
    }
    else{
        //result year
        resultYear=currYear-userYear;

        //result month
        if(currMonth>userMonth){
            resultMonth=currMonth-userMonth;
        }else{
            resultYear--;
            resultMonth=12+currMonth-userMonth;
        } 
        //result day
        if(currDay>=userDay){
            resultDay=currDay-userDay;
        }else{
            resultMonth--;
            resultDay=31+currDay-userDay;
        }
        result=`${resultYear} years ${resultMonth} months ${resultDay} days old`;
        printYear.innerText=resultYear;
        printMonth.innerText=resultMonth;
        printDay.innerText=resultDay;
    }
}