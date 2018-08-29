
document.querySelector('form').addEventListener('submit',function(e){
console.log('readyy');
const name=document.getElementById('name').value;
console.log(name);
localStorage.setItem('name',name)
e.preventDefault();
})//should add firstname and lastname as a single object