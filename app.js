
document.querySelector('form').addEventListener('submit',function(e){
console.log('readyy');
const fname=document.getElementById('fname').value;
const lname=document.getElementById('lname').value;
console.log(fname);
let name=`${fname}+${lname}`;
let users;
if(localStorage.getItem('users')==null){
 users=[];
 console.log(users);}
 else{
   users=JSON.parse(localStorage.getItem('users'));
}
 console.log(users)
users.push(name);
 localStorage.setItem('users',JSON.stringify(users));
e.preventDefault();
})
