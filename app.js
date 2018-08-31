
document.querySelector('form').addEventListener('submit',function(e){

console.log('readyy');
const fname=document.getElementById('fname').value;
const lname=document.getElementById('lname').value;
console.log(fname);
const re=/^[a-zA-Z]{2,10}$/;
if(!re.test(fname)||!re.test(lname)){
  console.log("invalidddddddd");
document.getElementById('message').innerHTML="Input must be Alphabetic & between 2-15 Characters";
}else{
  console.log("validddddddd");
let name=`${fname}+${lname}`;
let persistingusersls;
if(localStorage.getItem('persistingusersls')==null){
  persistingusersls=[];
 console.log(persistingusersls);}
 else{
  persistingusersls=JSON.parse(localStorage.getItem('persistingusersls'));
}
 console.log(persistingusersls)
 persistingusersls.push(name);
 localStorage.setItem('persistingusersls',JSON.stringify(persistingusersls));
 document.getElementById('message').innerHTML="Saved!!!";
}
e.preventDefault();
})
