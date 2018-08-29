
document.querySelector('form').addEventListener('submit',function(e){
console.log('readyy');
const fname=document.getElementById('fname').value;
const lname=document.getElementById('lname').value;
console.log(fname);
let peoples;
let name =new people(fname,lname);
console.log(a.firstname);
//if(localStorage.getItem('peop'))
//localStorage.setItem('fname',fname)
e.preventDefault();
})//should add firstname and lastname as a single object



function people(fname,lname){
    this.firstname=fname;
    this.lastname=lname;
}