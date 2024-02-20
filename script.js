var downloadButton = document.getElementById("downloadButton");

downloadButton.addEventListener("click", function () {
  var pdfURL = "./assets/downloads/cv.pdf";

  var link = document.createElement("a");
  link.href = pdfURL;
  link.download = "Iago-Jorge-CV.pdf";

  link.click();
});

document.addEventListener("DOMContentLoaded", function () {
  const imageHoverElements = document.querySelectorAll(".skills");
  const infoContainer = document.getElementById("info-container");

  imageHoverElements.forEach((element) => {
    element.addEventListener("mouseover", function () {
      const text = element.getAttribute("data-text");
      const titulo = element.getAttribute("data-titulo");
      infoContainer.innerHTML = `<h1 class="title">${titulo}</h1><h2 class="subtitle">${text}</h2>`;
    });

    element.addEventListener("mouseout", function () {
      infoContainer.innerHTML = `<h1 class="title">Habilidades</h1><h2 class="subtitle">Aponte para uma skill para saber mais!</h2>`;
    });
  });
});

var timeTracker = document.getElementById("time-tracker");

timeTracker.addEventListener("click", function () {
  window.open("https://iago-tracker.vercel.app/", "_blank");
});

var conect = document.getElementById("conect");

conect.addEventListener("click", function () {
  window.open("https://app.conect360.org/app/login", "_blank");
});

var newProject = document.getElementById("new-project");

newProject.addEventListener("click", function () {
  window.open("https://www.conexos.com.br/", "_blank");
});

window.sr = ScrollReveal({ reset: true });

sr.reveal(".column", { duration: 2000 });
sr.reveal(".scrollreveal", { duration: 2000 });


