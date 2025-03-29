particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 700
            }
        },
        "color": { "value": "#ffffff" }, 
        "shape": { "type": "circle" },
        "opacity": {
            "value": 0.7,
            "random": true
        },
        "size": {
            "value": 4,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 140,
            "color": "#ffffff",
            "opacity": 0.8,
            "width": 1.9
        },
        "move": {
            "enable": true,
            "speed": 2.5,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "repulse" },
            "onclick": { "enable": true, "mode": "push" },
            "resize": true
        },
        "modes": {
            "repulse": {
                "distance": 120,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 5
            }
        }
    },
    "retina_detect": true
});