

if(localStorage.getItem('persistingusersls')==null)
{
    document.getElementById('users').innerHTML+=`<li class="collection-item">No Users Found</li>`;
}else{
let users=JSON.parse(localStorage.getItem('persistingusersls'));
console.log(users);
users.forEach(element => {
let user=element.split('+');
console.log(user[0]);
document.getElementById('users').innerHTML+=`<li class="collection-item">${user[0]} ${user[1]}</li>`;
    
});}

document.getElementById('clearUsers').addEventListener('click',function(e){
localStorage.clear();
console.log("clear");
if(localStorage.getItem('persistingusersls')==null){
    console.log("empty");
    document.getElementById('users').innerHTML=`<li class="collection-item">No Users Found</li>`;
}else{}});