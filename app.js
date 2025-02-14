particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#fe3334" // Color de las partículas
      },
      "shape": {
        "type": "image",  // Usamos imagen en lugar de círculos
        "image": {
          "src": "corazon sin fondo.png", // URL del corazón
          "width": 30, // Tamaño del corazón
          "height": 30
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1
        }
      },
      "size": {
        "value": 10,  // Tamaño de las partículas (corazones)
        "random": true,
        "anim": {
          "enable": true,
          "speed": 40,
          "size_min": 0.1
        }
      },
      "line_linked": {
        "enable": false, // Sin líneas de conexión
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        }
      }
    },
    "retina_detect": true
  });
  