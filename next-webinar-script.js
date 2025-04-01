const closestWebinar = findClosestWebinar(webinars);

function findClosestWebinar(webinars) {
  const now = new Date();
  let closestWebinar = null;
  let closestTimeDifference = Infinity;

  webinars.forEach((webinar) => {
    const webinarDateTimeString = `${webinar.date} ${webinar.time}`;
    const webinarDateTime = new Date(webinarDateTimeString);
    const timeDifference = webinarDateTime - now;

    if (timeDifference > 0 && timeDifference < closestTimeDifference) {
      closestTimeDifference = timeDifference;
      closestWebinar = webinar;
    }
  });

  return closestWebinar;
}

const nextWebinarContainer = document.querySelector(".next-webinar-container");

if (closestWebinar) {
  const nextWebinar = createWebinarElement(closestWebinar);
  nextWebinarContainer.appendChild(nextWebinar);
}

function createWebinarElement(webinar) {
  const webinarElement = document.createElement("div");
  webinarElement.classList.add("next-webinar");

  const titleElement = document.createElement("h2");
  titleElement.textContent = webinar.longTitle;
  titleElement.className = "webinar-title";
  webinarElement.appendChild(titleElement);

  const dateTimeElement = document.createElement("p");
  dateTimeElement.textContent = formatWebinarDate(webinar);
  dateTimeElement.className = "webinar-date-time";
  webinarElement.appendChild(dateTimeElement);

  function formatWebinarDate(webinar) {
    const daysOfWeek = [
      "Duminică",
      "Luni",
      "Marți",
      "Miercuri",
      "Joi",
      "Vineri",
      "Sâmbătă",
    ];
    const months = [
      "ianuarie",
      "februarie",
      "martie",
      "aprilie",
      "mai",
      "iunie",
      "iulie",
      "august",
      "septembrie",
      "octombrie",
      "noiembrie",
      "decembrie",
    ];
    const webinarDateTimeString = `${webinar.date} ${webinar.time}`;
    const webinarDate = new Date(webinarDateTimeString);
    const dayOfWeek = daysOfWeek[webinarDate.getUTCDay()];
    const day = webinarDate.getUTCDate();
    const month = months[webinarDate.getUTCMonth()];
    const year = webinarDate.getUTCFullYear();
    const startTime = webinarDate.toLocaleTimeString("ro-RO", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const durationHours = parseInt(webinar.duration.split(" ")[0]);
    const endTime = new Date(
      webinarDate.getTime() + durationHours * 60 * 60 * 1000
    ).toLocaleTimeString("ro-RO", { hour: "2-digit", minute: "2-digit" });

    return `${dayOfWeek}, ${day} ${month} ${year}, ${startTime} - ${endTime}`;
  }

  const descriptionElement = document.createElement("p");
  descriptionElement.innerHTML = webinar.longDescription;
  webinarElement.appendChild(descriptionElement);

  const collapsibleDiv = document.createElement("div");
  collapsibleDiv.className = "collapsible";
  collapsibleDiv.textContent = "Agenda webinarului";

  const agendaContentDiv = document.createElement("div");
  agendaContentDiv.className = "agenda-content expanded";

  const agendaElement = document.createElement("ol");
  webinar.agenda.forEach((agendaItem) => {
    const agendaItemElement = document.createElement("li");
    agendaItemElement.textContent = agendaItem;
    agendaElement.appendChild(agendaItemElement);
  });

  agendaContentDiv.appendChild(agendaElement);

  webinarElement.appendChild(collapsibleDiv);
  webinarElement.appendChild(agendaContentDiv);

  collapsibleDiv.addEventListener("click", () => {
    agendaContentDiv.classList.toggle("expanded");
    collapsibleDiv.classList.toggle("collapsed");
  });

  return webinarElement;
}

const nextWebinarCard = createWebinarCardElement(closestWebinar);
nextWebinarContainer.appendChild(nextWebinarCard);

function createWebinarCardElement(webinar) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("next-webinar-card");

  const imageElement = document.createElement("img");
  imageElement.src = webinar.image;
  imageElement.alt = webinar.longTitle;
  imageElement.classList.add("next-webinar-card-image");
  cardElement.appendChild(imageElement);

  const cardBodyElement = document.createElement("div");
  cardBodyElement.classList.add("card-body");
  cardElement.appendChild(cardBodyElement);

  const titleElement = document.createElement("h2");
  titleElement.textContent = "Inscrie-te la webinar";
  cardBodyElement.appendChild(titleElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = webinar.shortDescription;
  cardBodyElement.appendChild(descriptionElement);

  const speakersElement = document.createElement("p");
  speakersElement.innerHTML = `<b>Speakers</b>: ${webinar.speakers
    .map((speaker) => speaker.name)
    .join(", ")}`;
  cardBodyElement.appendChild(speakersElement);

  const registrationLinkElement = document.createElement("a");
  registrationLinkElement.href = webinar.registrationLink;
  registrationLinkElement.textContent = "Înregistrează-te";
  registrationLinkElement.classList.add("next-webinar-card-button");
  cardBodyElement.appendChild(registrationLinkElement);

  return cardElement;
}
