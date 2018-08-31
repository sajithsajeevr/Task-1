let users=JSON.parse(localStorage.getItem('users'));
console.log(users);
users.forEach(element => {
let user=element.split('+');
console.log(user[0]);
document.getElementById('users').innerHTML+=`<li class="collection-item">${user[0]} ${user[1]}</li>`;
    
});