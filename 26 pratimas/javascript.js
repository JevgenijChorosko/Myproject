const experienceList = document.getElementById("experience-list");
const skillList = document.getElementById("skill-list");

// Fetch experiences from API
fetch("https://zany-skitter-caper.glitch.me/experiences")
  .then((response) => response.json())
  .then((experiences) => {
    experiences.forEach((experience) => {
      const experienceItem = document.createElement("div");
      experienceItem.classList.add("experience-item");

      const companyName = document.createElement("h3");
      companyName.textContent = experience.companyName;

      const position = document.createElement("h4");
      position.textContent = experience.position;

      const years = document.createElement("p");
      years.textContent = `${experience.startYear} - ${experience.finishYear}`;

      const description = document.createElement("p");
      description.textContent = experience.description;

      experienceItem.appendChild(companyName);
      experienceItem.appendChild(position);
      experienceItem.appendChild(years);
      experienceItem.appendChild(description);

      experienceList.appendChild(experienceItem);
    });
  });

// Fetch skills from API
fetch("https://zany-skitter-caper.glitch.me/skills")
  .then((response) => response.json())
  .then((skills) => {
    skills.forEach((skill) => {
      const skillItem = document.createElement("div");
      skillItem.classList.add("skill-item");

      const title = document.createElement("h3");
      title.textContent = skill.title;

      const level = document.createElement("p");
      level.textContent = `Level: ${skill.level}`;

      skillItem.appendChild(title);
      skillItem.appendChild(level);

      skillList.appendChild(skillItem);
    });
  });
