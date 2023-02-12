const img1   = document.getElementById('img1');
const img2   = document.getElementById('img2');
const img3   = document.getElementById('img3');
const titulo = document.getElementById('titulo');

img1.addEventListener('mouseover', () =>{
    titulo.innerHTML = 'Este producto es el mejor de la línea';
});

img1.addEventListener('mouseleave', () =>{
    titulo.innerHTML = '¡Queremos que compre!';
});

img2.addEventListener('mouseover', () =>{
    titulo.innerHTML = 'Este producto es de la mejor calidad';
});

img2.addEventListener('mouseleave', () =>{
    titulo.innerHTML = '¡Queremos que compre!';
});

img3.addEventListener('mouseover', () =>{
    titulo.innerHTML = 'Este producto es barato, barato, barato';
});

img3.addEventListener('mouseleave', () =>{
    titulo.innerHTML = '¡Queremos que compre!';
});