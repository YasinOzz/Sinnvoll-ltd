"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const navButtonDienstleistung = document.querySelector(".nav-button-dienstleistung");
  const unsereDienstleistungen2 = document.getElementById("dienstleistung2");

  const goToDienstleistung = document.querySelector(".Dienstleistungen-container");

  navButtonDienstleistung?.addEventListener("click", () => {
    goToDienstleistung.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  unsereDienstleistungen2?.addEventListener("click", () => {
    goToDienstleistung.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  const uberUns = document.querySelector(".nav-button-uns");

  const goToUberUns = document.querySelector(".uber-uns-container");

  uberUns?.addEventListener("click", () => {
    goToUberUns.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  const kontaktButton = document.querySelector(".nav-button-kontakt");
  const kontaktButton2 = document.querySelector(".kontakt");

  const goToKontakt = document.querySelector(".kontakt-container");

  kontaktButton?.addEventListener("click", () => {
    goToKontakt.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  kontaktButton2?.addEventListener("click", () => {
    goToKontakt.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
