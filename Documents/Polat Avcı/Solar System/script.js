const box = document.querySelector('.box')
const bilgi = document.getElementById('bilgi')



bilgi.addEventListener('change', event =>{

    box.innerHTML = bilgi

})


