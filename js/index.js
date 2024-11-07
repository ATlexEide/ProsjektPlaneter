////////
// Fetch json
const request = await fetch("./data.json");
const data = await request.json();

///////
// Select main container
const main = document.getElementById("main");
///////
// Loop through each planet in the json file and write html for it
data.forEach((planet) => {
  const article = document.createElement("article");
  article.id = planet.id;
  // Using innerHTML instead of creating each element
  // individually to keep it simple and readable
  article.innerHTML = `
   <h2 class="planet-name">${planet.name}</h2>
  <h3 class="planet-position">${planet.position}</h3>
  <figure>
    <img class="planet-image" src="${planet.visuals.image}" alt="" />
    <figcaption class="source-link"></figcaption>
  </figure>
  <section class="information">
    <div class="facts">
      <h4 class="facts-header">Facts</h4>
      <p>Diameter: ${planet.facts.diameter}</p>
      <p>Mass: ${planet.facts.mass}</p>
      <p>Gravity: ${planet.facts.gravity}</p>
      <p>Distance from the sun: ${planet.facts.distance_from_sun}</p>
      <p>Rotation time: ${planet.facts.rotation_time}</p>
      <p>Orbit time: ${planet.facts.orbit_time}</p>
    </div>
    <div class="unique-features">
      <h4 class="unique-features-header">Unique Features</h4>
      <p>Atmosphere: ${planet.unique_features.atmosphere}</p>
      <p>Temperature: ${planet.unique_features.temperature}</p>
      <p>Moons: ${planet.unique_features.moons}</p>
      <p>Special features: ${planet.unique_features.special_features}</p>
    </div>
    <div class="trivia" id="trivia-${planet.id}">
      <h4 class="trivia-header">Trivia</h4>
      <p>Comparison: ${planet.comparisons}</p>
      <p class="fun-fact">Fun fact: ${planet.trivia}</p>
      </div>
    <div class="space-missions" id="space-missions-${planet.id}">
    
  </section>
  `;
  ////////
  // Add card to main container
  main.appendChild(article);
  const missions = document.getElementById(`space-missions-${planet.id}`);
  const spaceMissions = planet.history.space_missions;
  ////////
  // If the list for space missions to the planet
  // has any info, make a list item and add to trivia section
  if (spaceMissions.length > 0) {
    const h4 = document.createElement("h4");
    h4.classList.add("space-missions-header");
    h4.textContent = "Missions:";
    missions.appendChild(h4);
    const ul = document.createElement("ul");
    ul.classList.add("space-missions");
    ul.id = `space-missions-${planet.id}`;
    spaceMissions.forEach((mission) => {
      const li = document.createElement("li");
      li.textContent = mission;
      ul.appendChild(li);
    });
    missions.appendChild(ul);
  }
});

const menu = document.getElementById("planet-link-menu");
const planetLinks = document.querySelectorAll(".planet-link");
const toggleBtn = document.getElementById("hamburger-menu-toggle");
const icon = document.getElementById("hamburger-icon");
console.log(planetLinks);
planetLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});
toggleBtn.addEventListener("click", () => {
  if (menu.hidden) {
    openMenu();
  } else {
    closeMenu();
  }
});
function openMenu() {
  menu.onanimationend = () => menu.classList.remove("reveal");
  menu.classList.add("reveal");
  menu.classList.remove("hide");
  icon.classList.remove("fa-bars");
  icon.classList.add("fa-xmark");
  document.body.classList.add("noscroll");
  menu.removeAttribute("hidden");
}
function closeMenu() {
  menu.onanimationend = () => {
    menu.classList.remove("hide");
    menu.setAttribute("hidden", true);
  };
  menu.classList.add("hide");
  icon.classList.remove("fa-xmark");
  icon.classList.add("fa-bars");
  document.body.classList.remove("noscroll");
}
