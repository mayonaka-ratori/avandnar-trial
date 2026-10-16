"use strict";
const destination = new URL("https://mayonaka-ratori.github.io/avandner-trial/");
destination.search = window.location.search;
destination.hash = window.location.hash;
document.getElementById("destination").href = destination.href;
window.setTimeout(() => window.location.replace(destination.href), 5000);
