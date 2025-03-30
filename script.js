// Asegúrate de que GSAP y ScrollTrigger estén cargados
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Verifica si el elemento .intro-screen existe
    const introScreen = document.querySelector(".intro-screen");
    if (!introScreen) {
        console.error("El elemento .intro-screen no existe en el DOM.");
        return;
    }

    // Animación del logo y el fondo hacia abajo
    gsap.to(".intro-screen", {
        yPercent: 100, // Mueve la pantalla inicial hacia abajo
        ease: "power1.out", // Animación suave
        scrollTrigger: {
            trigger: ".intro-screen", // Elemento que activa el scroll
            start: "top top", // Inicia cuando el scroll comienza
            end: "bottom top", // Termina cuando la pantalla inicial desaparece
            scrub: true, // Sincroniza con el scroll
        },
    });
});