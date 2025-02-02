document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Animasi Hero Section (menyeleksi semua elemen anak dalam .hero)
  gsap.from(gsap.utils.toArray(".hero > *"), {
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".hero",
      start: "top 80%",
    },
  });

  // Animasi Keunggulan Section (menyeleksi semua elemen anak dalam .wrapper)
  gsap.from(gsap.utils.toArray(".wrapper > *"), {
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".wrapper",
      start: "top 80%",
    },
  });
  // Animasi Keunggulan Section (menyeleksi semua elemen anak dalam .wrapper)
  gsap.from(gsap.utils.toArray("#produk > *"), {
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#produk",
      start: "center 80%",
    },
  });
});
