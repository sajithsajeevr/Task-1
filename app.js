
document.querySelector('form').addEventListener('submit',function(e){
console.log('readyy');
const fname=document.getElementById('fname').value;
const lname=document.getElementById('lname').value;
console.log(fname);
let name=`${fname}+${lname}`;
let users;
//localStorage.setItem('users',JSON.stringify(name));
// let name =new people(fname,lname);
// console.log(name.firstname);
// console.log(name.lastname);
if(localStorage.getItem('users')==null){
 users=[];
 console.log(users);}
 else{
   users=JSON.parse(localStorage.getItem('users'));
}
 console.log(users)
users.push(name);
//console.log(users)
 localStorage.setItem('users',JSON.stringify(users));

//if(localStorage.getItem('peop'))
//localStorage.setItem('fname',fname)
e.preventDefault();
})//should add firstname and lastname as a single object



// function people(fname,lname){
//     this.firstname=fname;
//     this.lastname=lname;
// }