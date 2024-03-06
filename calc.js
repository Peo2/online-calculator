let numfield1 = document.getElementById('numfield1');
let numfield2 = document.getElementById('numfield2');
let show = document.getElementById('show')
let form = document.getElementById('form');
let mult = document.getElementById('mult')
let addit = document.getElementById('addit')
let perc = document.getElementById('perc')
let subs = document.getElementById('subs')
let divi = document.getElementById('divi')

mult.addEventListener('click', (e) =>{
   e.preventDefault();
   if(!numfield1.value || !numfield2.value){
    alert('This place is required');
} else {
    let x = numfield1.value;
    let y = numfield2.value;
    let result = x * y;
    show.innerHTML= result;
    }
    
})


addit.addEventListener('click', (e) =>{
    e.preventDefault();
    if(!numfield1.value || !numfield2.value){
     alert('This place is required');
 } else {
     let x = parseFloat(numfield1.value);
     let y = parseFloat(numfield2.value);
     let result = x + y;
     show.innerHTML= result;
     }
     
 })

 subs.addEventListener('click', (e) =>{
    e.preventDefault();
    if(!numfield1.value || !numfield2.value){
     alert('This place is required');
 } else {
     let x = parseFloat(numfield1.value);
     let y = parseFloat(numfield2.value);
     let result = x - y;
     show.innerHTML= result;
     }
     
 })

 perc.addEventListener('click', (e) =>{
    e.preventDefault();
    if(!numfield1.value || !numfield2.value){
     alert('This place is required');
 } else {
     let x = parseFloat(numfield1.value);
     let y = parseFloat(numfield2.value);
     let result = x / y;
     let percentage = result * 100;
     show.innerHTML= percentage + '%';
     }
     
 })

 divi.addEventListener('click', (e) =>{
    e.preventDefault();
    if(!numfield1.value || !numfield2.value){
     alert('This place is required');
 } else {
     let x = parseFloat(numfield1.value);
     let y = parseFloat(numfield2.value);
     let result = x / y;
     show.innerHTML= result;
     }
     
 })