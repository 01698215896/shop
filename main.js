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




// reponsive trên mobil
let chacha1 = document.querySelector('.chacha1');
let concon1 = document.querySelector('.concon1')
chacha1.addEventListener('click',()=>{
    concon1.style.transform = 'translateX(0)';
})
chacha1.addEventListener('touchend',()=>{
    concon1.style.transform = 'translateX(0)';
})