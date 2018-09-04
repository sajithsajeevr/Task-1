// UI Elements
const userUI=document.getElementById('users');
const clearUserUI=document.getElementById('clearUsers');

//Event Listeners
document.addEventListener('DOMContentLoaded',showUsers);
clearUserUI.addEventListener('click',clearUsers);


//Showing Data from LS
function showUsers(){
    if(localStorage.getItem('persistingusersls')==null)
{
    userUI.innerHTML+=`<li class="collection-item">No Users Found</li>`;
}else{
let users=JSON.parse(localStorage.getItem('persistingusersls'));
users.forEach(element => {
let user=element.split('+');
userUI.innerHTML+=`<li class="collection-item">${user[0]} ${user[1]}</li>`;
    
});}
}

//Clear User Function 
function clearUsers(e){

//confirmation to clear
    if(confirm('Are you Sure')){
localStorage.clear();
}else{}

//Display Message
if(localStorage.getItem('persistingusersls')==null){
    userUI.innerHTML=`<li class="collection-item">No Users Found</li>`;
}else{}};


//for individual clear
//'<i class="fa fa-remove"></i>'