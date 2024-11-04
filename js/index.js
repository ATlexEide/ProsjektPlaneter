////////
// Fetch json
const request = await fetch("./data.json");
const data = await request.json();

const main = document.getElementById("main");
data.forEach((planet) => {
  const article = document.createElement("article");
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
      <p>${planet.facts.diameter}</p>
      <p>${planet.facts.mass}</p>
      <p>${planet.facts.gravity}</p>
      <p>${planet.facts.distance_from_sun}</p>
      <p>${planet.facts.rotation_time}</p>
      <p>${planet.facts.orbit_time}</p>
    </div>
    <div class="unique-features">
      <h4 class="unique-features-header">Unique Features</h4>
      <p>${planet.unique_features.atmosphere}</p>
      <p>${planet.unique_features.temperature}</p>
      <p>${planet.unique_features.moons}</p>
      <p>${planet.unique_features.special_features}</p>
    </div>
    <div>
      <h4></h4>
      <p></p>
      comparisons
      <p></p>
      trivia
      <ul></ul>
      space missions
    </div>
  </section>
  `;
  console.log(planet.name);
});
