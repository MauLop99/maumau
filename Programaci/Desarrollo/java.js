document.addEventListener('DOMContentLoaded', function() {
    // Animación de corazones
    const heart = document.getElementById('heart');
    const heartsContainer = document.getElementById('hearts-container');
    
    heart.addEventListener('click', function() {
        createHearts();
    });
    
    function createHearts() {
        heartsContainer.innerHTML = '';
        
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = '❤️';
                heart.style.position = 'absolute';
                heart.style.fontSize = `${Math.random() * 20 + 10}px`;
                heart.style.left = `${Math.random() * 100}%`;
                heart.style.top = `${Math.random() * 100}%`;
                heart.style.opacity = '0.7';
                heart.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
                heart.style.animation = `floatHeart ${Math.random() * 3 + 2}s linear forwards`;
                
                heartsContainer.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 5000);
            }, i * 100);
        }
    }
    
    // Efecto de confeti al cargar la página
    setTimeout(() => {
        createHearts();
    }, 1000);
    
    // Animación del poema
    const poemLines = document.querySelectorAll('.poem p');
    poemLines.forEach((line, index) => {
        line.style.animationDelay = `${index * 0.3}s`;
    });
});

// Añadir el keyframe de la animación
const style = document.createElement('style');
style.textContent = `
    @keyframes floatHeart {
        0% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Botón de sorpresa
const surpriseBtn = document.getElementById('surprise-btn');
const surpriseContent = document.getElementById('surprise-content');

surpriseBtn.addEventListener('click', function() {
  // Añadir clase active para mostrar la sorpresa
  surpriseContent.classList.add('active');
  
  // Animación del botón
  this.classList.add('clicked');
  setTimeout(() => {
    this.classList.remove('clicked');
  }, 1500);
  
  // Crear confeti
  createConfetti();
  
  // Reproducir sonido (opcional)
  playSurpriseSound();
});

// Cerrar la sorpresa al hacer clic en cualquier parte
surpriseContent.addEventListener('click', function() {
  this.classList.remove('active');
});

function createConfetti() {
  const colors = ['#ff65a3', '#7afcff', '#feff9c', '#fff740', '#ff7eb9'];
  const container = document.body;
  
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animation = `confetti-fall ${Math.random() * 3 + 2}s linear forwards`;
    confetti.style.animationDelay = `${Math.random() * 0.5}s`;
    confetti.style.width = `${Math.random() * 10 + 5}px`;
    confetti.style.height = `${Math.random() * 10 + 5}px`;
    
    container.appendChild(confetti);
    
    // Eliminar confeti después de la animación
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

function playSurpriseSound() {
  // Opcional: Añadir sonido de sorpresa
  const sound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3');
  sound.volume = 0.3;
  sound.play().catch(e => console.log("El audio no pudo reproducirse: ", e));
}