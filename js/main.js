/*--------------- Preloader -------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.querySelector(".preloader-container");
  const body = document.body;

  // Add the 'loaded' class to the body after the page has fully loaded
  body.classList.add("loaded");

  // Remove the preloader once the transition is complete
  preloader.addEventListener("transitionend", function () {
    preloader.style.display = "none";
  });
});

/*--------------- FAQs sections -------------------*/
document.querySelectorAll(".faq").forEach(function (faq) {
  faq.addEventListener("click", function () {
    var collapsible = this.querySelector(".collapsible");
    var icon = this.querySelector(".material-symbols-outlined");

    if (collapsible) {
      collapsible.classList.toggle("hidden");
    }
    if (icon) {
      icon.textContent =
        icon.textContent.trim() === "visibility_off"
          ? "visibility"
          : "visibility_off";
    }
  });
});

/*--------------- generate IFRAME -------------------*/
function generateIframe(event) {
  event.preventDefault();
  // Get the YouTube URL from the input
  var YouTubeUrl = document.getElementById("YouTubeUrlInput").value;

  // Create an iframe element
  var iframe = document.createElement("iframe");
  iframe.id = "hphp";
  iframe.style.border = "none";
  iframe.width = "100%";
  iframe.height = "750";

  // Construct the URL for the iframe
  var apiUrl =
    "https://apiYouTube.cc/?url=" +
    encodeURIComponent(YouTubeUrl) +
    "&color=5ab4fb";
  iframe.src = apiUrl;

  // Clear previous iframe content
  document.getElementById("iframeContainer").innerHTML = "";

  // Append the iframe to the container
  document.getElementById("iframeContainer").appendChild(iframe);
}

/*--------------- DARK MODE -------------------*/
const logo = document.getElementById("logo");
const toggleModButton = document.getElementById("toggleModButton");

function toggleDarkMode(_this) {
  // Toggle the "dark" class on the body element
  document.body.classList.toggle("dark");

  // Toggle the "dark" class on the clicked button
  _this.classList.toggle("dark");

  // Toggle the logo source between light and dark modes
  const isDarkMode = document.body.classList.contains("dark");
  logo.src = isDarkMode
    ? "/img/mp3juice-logo-dark.svg"
    : "/img/mp3juice-logo.svg";

  localStorage.setItem("isDark", isDarkMode ? "enabled" : "");
}

let isDarkMode = localStorage.getItem("isDark");
if (isDarkMode === "enabled") {
  document.body.classList.add("dark");
  toggleModButton.classList.add("dark");
  logo.src = "/img/mp3juice-logo-dark.svg";
}
