const image = document.getElementById('image');
const moveButton = document.getElementById('Mover');
const resetButton = document.getElementById('Situar');


async function mover(){
const section = document.getElementById('section').offsetWidth;
    image.style.transition = "all 3s";
    image.style.transform = `translateX(${section - image.offsetWidth - 25}px)`;
    
  setTimeout(function() {
    image.style.transition = "all 3s";

    image.style.transform = "translateX(0px)";
    image.style.filter = "none";
  }, 3000);
}
resetButton.addEventListener('click', function() {
  image.style.transition = "all 0s";
  image.style.transform = "translateX(0px)";
});


moveButton.addEventListener('click', () => mover());



