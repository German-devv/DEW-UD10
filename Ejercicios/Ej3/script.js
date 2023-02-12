const image = document.getElementById('image');
const moveButton = document.getElementById('Mover');
const resetButton = document.getElementById('Situar');
const section = document.getElementById('section').offsetWidth;


moveButton.addEventListener('click', () => mover());

resetButton.addEventListener('click', function() {
  image.style.transition = "all 0s";
  image.style.transform = "translateX(0px)";
});


async function mover(){
    image.style.transition = "all 3s";
    image.style.transform = `translateX(${section - image.offsetWidth}px)`;
    


  setTimeout(function() {
    image.style.transition = "all 3s";

    image.style.transform = "translateX(0px)";
    image.style.filter = "none";
  }, 3000);
}