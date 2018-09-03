//UI elements
const messageUI=document.getElementById('message');
const fname=document.getElementById('fname');
const lname=document.getElementById('lname');

document.querySelector('form').addEventListener('submit',function(e){

  //Regular expression for validation
const re=/^[a-zA-Z]{2,10}$/;

//Validation and persisting
if(!re.test(fname.value)||!re.test(lname.value)){
  messageUI.innerHTML="Input must be Alphabetic & between 2-15 Characters";
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
 messageUI.innerHTML="Saved!!!";
}
e.preventDefault();
})
