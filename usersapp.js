// UI Elements
const userUI=document.getElementById('users');

//Retrievimg data from LS
if(localStorage.getItem('persistingusersls')==null)
{
    userUI.innerHTML+=`<li class="collection-item">No Users Found</li>`;
}else{
let users=JSON.parse(localStorage.getItem('persistingusersls'));
users.forEach(element => {
let user=element.split('+');
userUI.innerHTML+=`<li class="collection-item">${user[0]} ${user[1]}</li>`;
    
});}

// To Clear persisted Users 
document.getElementById('clearUsers').addEventListener('click',function(e){
localStorage.clear();

//Display Message
if(localStorage.getItem('persistingusersls')==null){
    userUI.innerHTML=`<li class="collection-item">No Users Found</li>`;
}else{}});