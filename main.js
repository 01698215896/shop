let login = document.querySelector('#login');
let register = document.querySelector('#register');
let hideRes = document.querySelector('.register');
let hidelog = document.querySelector('.login');
login.addEventListener('click',()=>{
    hideRes.style.display = 'none';
    hidelog.style.display = 'block';

})
register.addEventListener('click',()=>{
    hidelog.style.display = 'none';
    hideRes.style.display = 'block';

})