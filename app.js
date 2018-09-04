//UI elements
const messageUI=document.getElementById('message');
const fname=document.getElementById('fname');
const lname=document.getElementById('lname');
const form=document.querySelector('form');

//Regular Expression for validation
const re=/^[a-zA-Z]{2,10}$/;

//Event listeners
form.addEventListener('submit',addUser);
fname.addEventListener('keyup',fNameValidator);
lname.addEventListener('keyup',lNameValidator);

//Add User
function addUser(e){

  //Validation
  if(!re.test(fname.value)||!re.test(lname.value)){
    message('Input must be Alphabetic & between 2-15 Characters');
  }else{
let name=`${fname.value}+${lname.value}`;
let persistingusersls;
if(localStorage.getItem('persistingusersls')==null){
  persistingusersls=[];
}else{
  persistingusersls=JSON.parse(localStorage.getItem('persistingusersls'));
}
 persistingusersls.push(name);
 localStorage.setItem('persistingusersls',JSON.stringify(persistingusersls));
 message('Saved!!!');
  }
e.preventDefault();
}

//First name Validation Message
function fNameValidator(e){
  if(!re.test(e.target.value)){
    message('First Name must be Alphabetic & between 2-15 Characters');
  }else{
    message('Accepted First Name');
  }
}
//Last Name Validation Message
function lNameValidator(e){
  if(!re.test(e.target.value)){
    message('Last Name must be Alphabetic & between 2-15 Characters');
  }else{
    message('Accepted Last Name');
  }
}
//Display message
function message(message){
messageUI.innerHTML=`${message}`;
}