function initializeCursor() {
  const cursor = document.querySelector(".custom-cursor");
  const cursorDot = document.querySelector(".cursor-dot");
  const hoverTargets = document.querySelectorAll(".hover-target");

  document.addEventListener("mousemove", (e) => {
    cursor.style.opacity = 1;
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
    cursorDot.style.opacity = 1;
    cursorDot.style.left = e.pageX + "px";
    cursorDot.style.top = e.pageY + "px";
  });

  hoverTargets.forEach((target) => {
    target.addEventListener("mouseenter", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1.2)";
      cursor.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    });
    target.addEventListener("mouseleave", () => {
      cursor.style.transform = "translate(-50%, -50%)";
      cursor.style.backgroundColor = "transparent";
    });
  });
}

// Fonction pour initialiser les liens AJAX
function initializeAjaxLinks() {
  document.querySelectorAll("a.ajax-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const url = this.getAttribute("href");
      loadPage(url);
    });
  });
}

// Fonction pour charger une page via AJAX avec une animation conditionnelle
function loadPage(url) {
  const mainContent = document.getElementById("main-content");
  const body = document.body;
  const isHomePage = url.includes("accueil.html");
  const slideOutClass = isHomePage ? "slide-out-right" : "slide-out-left";
  const slideInClass = isHomePage ? "slide-in-left" : "slide-in-right";

  mainContent.classList.add(slideOutClass);
  setTimeout(() => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        const newPage = new DOMParser().parseFromString(data, "text/html");
        const newContent = newPage.querySelector("#main-content").innerHTML;
        const newBodyClass = newPage.body.className;

        mainContent.innerHTML = newContent;
        body.className = newBodyClass; // Met à jour la classe du body

        injectGlobalSections();
        mainContent.classList.remove(slideOutClass);
        mainContent.classList.add(slideInClass);
        setTimeout(() => {
          mainContent.classList.remove(slideInClass);
        }, 500);
        initializeAjaxLinks(); // Réinitialiser les liens AJAX
        initializeCursor(); // Réinitialiser le curseur
      });
  }, 500); // Correspond à la durée de l'animation

  // Modifier l'URL sans recharger la page
  history.pushState(null, "", url);
}

// Fonction pour injecter les sections globales
function injectGlobalSections() {
  if (!document.querySelector(".global-header")) {
    const globalHeader = `
            <div class="global-header right-4 top-12 absolute flex flex-col items-center font-archivo font-bold text-skin-primary text-xs">
                <div class="mb-4 rotate-[270deg]">2024</div>
                <div class="h-16 w-0.5 bg-white"></div>
                <div class="mt-3 rotate-[270deg]">UB</div>
            </div>
        `;
    document.body.insertAdjacentHTML("afterbegin", globalHeader);
  }
  if (!document.querySelector(".global-footer")) {
    const globalFooter = `
            <ul class="global-footer bottom-6 left-1/2 absolute transform -translate-x-1/2 flex flex-row items-center font-archivo font-bold text-skin-primary text-xs">
                <li class="link-item">
                    <a href="https://www.linkedin.com/in/ugo-bittoni/" class="hover-target">LINKEDIN</a>
                </li>
                <li class="w-8 h-0.5 mx-4 bg-white"></li>
                <li class="link-item">
                    <a href="https://www.instagram.com/ugo.05.b/" class="hover-target">INSTAGRAM</a>
                </li>
                <li class="w-8 h-0.5 mx-4 bg-white"></li>
                <li class="link-item">
                    <a href="https://x.com/UgoBit_" class="hover-target">TWITTER</a>
                </li>
            </ul>
        `;
    document.body.insertAdjacentHTML("beforeend", globalFooter);
  }
}

// Initialisation au chargement de la page
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("main-content");

  // Injecter les sections globales
  injectGlobalSections();

  const globalHeader = document.querySelector(".global-header");
  const globalFooter = document.querySelector(".global-footer");

  function showLoader() {
    loader.style.display = "flex"; // Afficher le loader
    setTimeout(() => {
      loader.classList.add("fade-out");
    }, 1500); // Délai avant de commencer à disparaître (en millisecondes)

    setTimeout(() => {
      loader.style.display = "none";
      mainContent.classList.remove("hidden");
      mainContent.classList.add("fade-in");
      globalHeader.classList.remove("hidden");
      globalHeader.classList.add("fade-in");
      globalFooter.classList.remove("hidden");
      globalFooter.classList.add("fade-in");
    }, 2500); // Durée totale de l'animation (2000ms pour le délai + 1000ms pour la transition)
  }

  if (
    !sessionStorage.getItem("hasVisited") ||
    performance.navigation.type === 1
  ) {
    showLoader();
    sessionStorage.setItem("hasVisited", "true");
  } else {
    loader.style.display = "none";
    mainContent.classList.remove("hidden");
    mainContent.classList.add("fade-in");
    globalHeader.classList.remove("hidden");
    globalHeader.classList.add("fade-in");
    globalFooter.classList.remove("hidden");
    globalFooter.classList.add("fade-in");
  }

  initializeAjaxLinks();
  initializeCursor();
});
