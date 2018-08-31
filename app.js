
document.querySelector('form').addEventListener('submit',function(e){
console.log('readyy');
const fname=document.getElementById('fname').value;
const lname=document.getElementById('lname').value;
console.log(fname);
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
e.preventDefault();
})
