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
      <p>Fun fact: ${planet.trivia}</p>
    </div>
  </section>
  `;
  ////////
  // Add card to main container
  main.appendChild(article);
  const trivia = document.getElementById(`trivia-${planet.id}`);
  const spaceMissions = planet.history.space_missions;
  ////////
  // If the list for space missions to the planet
  // has any info, make a list item and add to trivia section
  if (spaceMissions.length > 0) {
    const label = document.createElement("label");
    label.for = `space-missions-${planet.id}`;
    label.classList.add("space-missions-label");
    label.textContent = "Missions:";
    trivia.appendChild(label);
    const ul = document.createElement("ul");
    ul.classList.add("space-missions");
    ul.id = `space-missions-${planet.id}`;
    spaceMissions.forEach((mission) => {
      const li = document.createElement("li");
      li.textContent = mission;
      ul.appendChild(li);
    });
    trivia.appendChild(ul);
  }
});

const planetLinks = document.getElementById("planet-links");
const linkToggle = document.getElementById("hamburger-menu-toggle");
linkToggle.addEventListener("click", () => {
  if (planetLinks.hidden) {
    planetLinks.removeAttribute("hidden");
  } else {
    planetLinks.setAttribute("hidden", true);
  }
});
