function e(e){var t=e.target.nextSibling;t&&("none"===t.style.display?t.style.display="block":t.style.display="none")}document.querySelectorAll("li").forEach(function(t){var n=document.createElement("span");n.addEventListener("click",e),n.innerText=t.firstChild.nodeValue.trim(),t.firstChild.replaceWith(n)});
//# sourceMappingURL=index.4e9fa04c.js.map
