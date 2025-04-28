const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-nav-topic-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});

window.onload = word;

function word() {
    const h = ["h2"];
    const allHeadings = document.querySelectorAll(h);

    let ul = document.querySelector(".off-screen-nav-topic-menu ul");
    
    for (let i = 0; i < allHeadings.length-1; i++) {
        let li = document.createElement("li");
        ul.appendChild(li);
        li.textContent = allHeadings[i].innerText;
    }
}

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function asciiHtmlEscape(text) {
    return htmlEscape(text).replace(/[^\x00-\x7F]/gu, char =>
      `&#x${char.codePointAt(0).toString(16).toUpperCase()};`
    );
  }