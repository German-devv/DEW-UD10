const principal1  = document.getElementById('principal1');
const principal2  = document.getElementById('principal2');
const secundaria1 = document.getElementById('secundaria1');


principal1.addEventListener('mouseover', () =>{
    sustituir('secundaria');
});
principal1.addEventListener('mouseleave', () =>{
    sustituir('principal');
});
secundaria1.addEventListener('click', () =>{
    window.open('','_parent',''); 
    window.close();// ES IMPOSIBLE CERRAR LA VENTANA EN CHROME
});

function sustituir(imagen){
    principal1.src = '../../Images/Rollover/'+imagen+'1.gif';
    principal2.src = '../../Images/Rollover/'+imagen+'2.gif';
}
