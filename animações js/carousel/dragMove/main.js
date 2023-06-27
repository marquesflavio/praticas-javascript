const carousel = document.querySelector('.carousel');
const images = document.querySelector('.images');

let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let previousTranslate = 0;
let animationID = 0;
let currentIndex = 0;

// Adicionar eventos de mouse/touch
images.addEventListener('mousedown', dragStart);
images.addEventListener('touchstart', dragStart);
images.addEventListener('mouseup', dragEnd);
images.addEventListener('mouseleave', dragEnd);
images.addEventListener('mousemove', drag);


// Impedir seleção durante o arrasto
images.addEventListener('dragstart', (e) => e.preventDefault());

// Funções de arrasto
function dragStart(event) {
  event.preventDefault();
  startPosition = getPositionX(event);
  isDragging = true;

  // Animação de deslize suave
  animationID = requestAnimationFrame(animation);
}

function drag(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = previousTranslate + currentPosition - startPosition;
  }
}

function dragEnd() {
  cancelAnimationFrame(animationID);
  isDragging = false;

  // Determinar se o slide deve mudar
  const threshold = carousel.clientWidth / 4;
  if (Math.abs(currentTranslate) > threshold) {
    if (currentTranslate > 0) {
      currentIndex--;
    } else {
      currentIndex++;
    }
  }

  // Fazer a transição suave para o próximo slide
  setPositionByIndex();
}

function animation() {
  setSliderPosition();
  if (isDragging) {
    requestAnimationFrame(animation);
  }
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -carousel.clientWidth;
  previousTranslate = currentTranslate;
  setSliderPosition();
}

function setSliderPosition() {
  images.style.transform = `translateX(${currentTranslate}px)`;
}
