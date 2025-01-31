document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".how-we-are-different p");
  let index = 0;

  elements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      clearInterval(interval);
      elements.forEach((e) => {
        e.style.color = "rgba(35, 34, 26, 0.3)";
        e.style.transition = "color 0.5s ease";
      });

      el.style.color = "black";
    });

    el.addEventListener("mouseleave", () => {
      index = Array.from(elements).indexOf(el);
      interval = setInterval(() => {
        elements.forEach((e, i) => {
          e.style.color = i === index ? "black" : "rgba(35, 34, 26, 0.3)";
          e.style.transition = "color 0.5s ease";
        });
        index = (index + 1) % elements.length;
      }, 2000);
    });
  });

  let interval = setInterval(() => {
    elements.forEach((el, i) => {
      el.style.color = i === index ? "black" : "rgba(35, 34, 26, 0.3)";
    });
    index = (index + 1) % elements.length;
  }, 2000);

//   document.querySelectorAll(".accordion-item").forEach((header) => {
//     const accHeader = header.querySelector(".accordion-header");
//     const p = header.querySelector(".accordion-header p");
//     header.addEventListener("click", (event) => {
//       accHeader.classList.toggle("active");
//       p.classList.toggle("paraph");
//     });
//   });
});