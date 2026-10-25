(() => {
  "use strict";

  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector("#main-nav");
  const header = document.querySelector(".site-header");
  const year = document.querySelector("#year");
  const desktopQuery = window.matchMedia("(min-width: 901px)");

  const setMenuState = (isOpen, { returnFocus = false } = {}) => {
    if (!menuToggle || !mainNav) return;

    mainNav.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");

    if (returnFocus) menuToggle.focus();
  };

  if (menuToggle && mainNav) {
    const closeMenu = (options) => setMenuState(false, options);

    setMenuState(menuToggle.getAttribute("aria-expanded") === "true");

    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      setMenuState(!isOpen);
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => closeMenu());
    });

    document.addEventListener("click", (event) => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      if (isOpen && !mainNav.contains(event.target) && !menuToggle.contains(event.target)) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      if (event.key === "Escape" && isOpen) {
        closeMenu({ returnFocus: true });
      }
    });

    const handleViewportChange = (event) => {
      if (event.matches) closeMenu();
    };

    if (typeof desktopQuery.addEventListener === "function") {
      desktopQuery.addEventListener("change", handleViewportChange);
    } else if (typeof desktopQuery.addListener === "function") {
      desktopQuery.addListener(handleViewportChange);
    }
  }

  if (header) {
    const updateHeaderState = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 16);
    };

    window.addEventListener("scroll", updateHeaderState, { passive: true });
    updateHeaderState();
  }

  if (year) year.textContent = String(new Date().getFullYear());

  document.querySelectorAll(".service-media").forEach((media) => {
    const image = media.querySelector("img");
    if (!image) return;
    const markAsReady = () => media.classList.add("has-image");
    const showFallback = () => {
      image.hidden = true;
      media.classList.add("is-missing");
    };
    image.addEventListener("load", markAsReady, { once: true });
    image.addEventListener("error", showFallback, { once: true });
    if (image.complete) image.naturalWidth ? markAsReady() : showFallback();
  });

  if (mainNav && "IntersectionObserver" in window) {
    const internalLinks = Array.from(mainNav.querySelectorAll('a[href^="#"]'));
    const linksById = new Map();
    const sections = [];

    internalLinks.forEach((link) => {
      const id = link.getAttribute("href").slice(1);
      const target = id ? document.getElementById(id) : null;
      if (target) {
        linksById.set(id, link);
        sections.push(target);
      }
    });

    if (sections.length) {
      const observer = new IntersectionObserver((entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visible.length) return;

        const activeId = visible[0].target.id;
        internalLinks.forEach((link) => link.classList.remove("is-active"));
        const activeLink = linksById.get(activeId);
        if (activeLink) activeLink.classList.add("is-active");
      }, {
        rootMargin: "-20% 0px -55%",
        threshold: [0, 0.25, 0.5, 0.75, 1]
      });

      sections.forEach((section) => observer.observe(section));
    }
  }
})();
