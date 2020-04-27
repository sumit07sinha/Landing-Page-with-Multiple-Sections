// to make navbar responsive
let navBarButton = document.getElementById("navButton");
navBarButton.addEventListener("click", () => {
  let liLists = document.getElementById("navbar__list");
  liLists.classList.toggle("responsive");
});

// to add elements of navbar dynamically
const ulItem = document.getElementById("navbar__list");

for (let i = 1; i < 5; i++) {
  let liListItem = document.createElement("li");
  let anchorTag = document.createElement("a");

  anchorTag.innerText = "Section " + i;
  anchorTag.setAttribute("href", "#section" + i);
  liListItem.appendChild(anchorTag);
  liListItem.setAttribute("class", "liItems");
  liListItem.setAttribute("id", "Section" + i);
  ulItem.appendChild(liListItem);
}
// to select navbar sections and to highlight them
let mainNavLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", (event) => {
  let scrollFromTop = window.scrollY;

  mainNavLinks.forEach((link) => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= scrollFromTop &&
      section.offsetTop + section.offsetHeight > scrollFromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});
