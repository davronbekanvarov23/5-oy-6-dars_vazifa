import data from "./data.js";
const templete = document.querySelector(".job__templete");
const ul = document.querySelector(".job__list");
data.forEach((job) => {
  const {
    company,
    logo,
    nev,
    featured,
    position,
    postedAt,
    contract,
    location,
    role,
    level,
    languages,
    tools,
  } = job;

  const jobCard = templete.content.cloneNode(true);

  const image = jobCard.querySelector(".job__image");
  const jobCompany = jobCard.querySelector(".job__company");
  const btnNew = jobCard.querySelector(".btn-new");
  const btnFeatured = jobCard.querySelector(".btn-featured");
  const jobTitle = jobCard.querySelector(".job__title");
  const jobTime = jobCard.querySelector(".job__time");
  const jobRole = jobCard.querySelector(".job__role");
  const jobLevel = jobCard.querySelector(".job__level");
  const langList = jobCard.querySelector(".langList");
  const toolList = jobCard.querySelector(".job__tools__list");

  image.src = logo;
  jobCompany.textContent = company;
  if ((btnFeatured.textContent = featured == true)) {
    btnFeatured.textContent = "Featured";
  } else {
    btnFeatured.remove();
  }
  if ((btnNew.textContent = nev == true)) {
    btnNew.textContent = "NEW!";
  } else {
    btnNew.remove();
  }

  jobTitle.textContent = position;
  jobTime.textContent = `${postedAt} •  ${contract}  •  ${location}`;

  jobRole.textContent = role;
  jobLevel.textContent = level;
  languages.forEach((lang) => {
    langList.innerHTML += `<li>${lang}</li>`;
  });
  tools.forEach((tool) => {
    toolList.innerHTML += `<li>${tool}</li>`;
  });

  ul.appendChild(jobCard);
});
