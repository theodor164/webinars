const upcomingWebinars = findUpcomingWebinars(webinars);

function findUpcomingWebinars(webinars, filteredWebinars = webinars) {
  const now = new Date();
  const upcomingWebinars = [];

  filteredWebinars.forEach((webinar) => {
    const webinarDateTimeString = `${webinar.date} ${webinar.time}`;
    const webinarDateTime = new Date(webinarDateTimeString);

    if (webinarDateTime > now) {
      upcomingWebinars.push(webinar);
    }
  });
  upcomingWebinars.sort((a, b) => {
    const dateA = new Date(`${a.date} ${a.time}`);
    const dateB = new Date(`${b.date} ${b.time}`);
    return dateA - dateB;
  });
  if (upcomingWebinars.length > 0) {
    if (
      findClosestWebinar(upcomingWebinars).id ===
      findClosestWebinar(webinars).id
    ) {
      upcomingWebinars.shift();
    }
  }
  return upcomingWebinars;
}

const upcomingWebinarsContainer = document.querySelector(
  ".upcoming-webinars-container"
);

const upcomingWebinarsTitle = document.createElement("h2");
upcomingWebinarsTitle.textContent = "Urmatoarele webinarii";
upcomingWebinarsContainer.appendChild(upcomingWebinarsTitle);

const upcomingWebinarsDescription = document.createElement("p");
upcomingWebinarsDescription.textContent =
  "Inscrie-te la webinariile viitoare si afla pe mail, agenda si detaliile care te intereseaza";
upcomingWebinarsContainer.appendChild(upcomingWebinarsDescription);

const upcomingWebinarsCardsContainer = document.createElement("div");
upcomingWebinarsCardsContainer.classList.add("upcoming-webinars-cards");
upcomingWebinarsContainer.appendChild(upcomingWebinarsCardsContainer);

// upcomingWebinars.forEach((webinar) => {
//   const upcomingWebinarCard = createUpcomingWebinarCardElement(webinar);
//   upcomingWebinarsCardsContainer.appendChild(upcomingWebinarCard);
// });

function createUpcomingWebinarCardElement(webinar) {
  const webinarCardElement = document.createElement("div");
  webinarCardElement.classList.add("upcoming-webinar");

  const imageElement = document.createElement("img");
  imageElement.src = webinar.image;
  imageElement.alt = webinar.longTitle;
  webinarCardElement.appendChild(imageElement);

  const cardBodyElement = document.createElement("div");
  cardBodyElement.classList.add("upcoming-webinar-body");
  webinarCardElement.appendChild(cardBodyElement);

  const titleElement = document.createElement("h3");
  titleElement.textContent = webinar.shortTitle;
  cardBodyElement.appendChild(titleElement);

  const dateTimeElement = document.createElement("p");
  dateTimeElement.innerHTML = formatWebinarDate(webinar);
  dateTimeElement.classList.add("upcoming-webinar-date-time");
  cardBodyElement.appendChild(dateTimeElement);

  function formatWebinarDate(webinar) {
    const webinarDateTimeString = `${webinar.date} ${webinar.time}`;
    const webinarDateTime = new Date(webinarDateTimeString);
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    // Extract the formatted date in the desired format
    const formattedDate = webinarDateTime.toLocaleDateString("ro-RO", options);
    // Remove the weekday and time components from the formatted date
    const [day, month, year] = formattedDate.split(" ");

    const optionsTime = {
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    };
    const formattedTime = webinarDateTime.toLocaleTimeString(
      "ro-RO",
      optionsTime
    );

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"/></svg> <p>${day} ${month} ${year}</p>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg> <p>Ora ${formattedTime}</p>`;
  }

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = webinar.shortDescription;
  descriptionElement.classList.add("upcoming-webinar-description");
  cardBodyElement.appendChild(descriptionElement);

  const registrationLinkElement = document.createElement("p");
  registrationLinkElement.classList.add("upcoming-webinar-registration-link");
  registrationLinkElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg> Inscrie-te la webinar`;
  cardBodyElement.appendChild(registrationLinkElement);

  const lineForSeparation = document.createElement("hr");
  lineForSeparation.classList.add("line-for-separation");
  cardBodyElement.appendChild(lineForSeparation);

  const selectedCategories = Array.from(
    document.querySelectorAll(".categoryCheckbox:checked")
  ).map((checkbox) => checkbox.value);

  const labelsContainer = document.createElement("div");
  labelsContainer.classList.add("upcoming-labels-container");
  cardBodyElement.appendChild(labelsContainer);
  labelsContainer.innerHTML = `${webinar.categories
    .map(
      (category) =>
        `<span class="label ${isLabelActive(category)}">${category}</span>`
    )
    .join("")}`;

  function isLabelActive(category) {
    if (selectedCategories.includes(category)) {
      return "active-label";
    }
    return "";
  }

  return webinarCardElement;
}

const cardsPerPageUpcoming = 3; // Change this to control how many cards per page
let currentPageUpcoming = 1;

function displayUpcomingPaginatedWebinars(upcomingWebinars) {
  upcomingWebinarsCardsContainer.innerHTML = ""; // Clear previous cards

  const startIndex = (currentPageUpcoming - 1) * cardsPerPageUpcoming;
  const endIndex = startIndex + cardsPerPageUpcoming;
  const paginatedWebinars = upcomingWebinars.slice(startIndex, endIndex);

  paginatedWebinars.forEach((webinar) => {
    const webinarCard = createUpcomingWebinarCardElement(webinar);
    upcomingWebinarsCardsContainer.appendChild(webinarCard);
  });

  updateUpcomingPaginationControls(upcomingWebinars);
}

function updateUpcomingPaginationControls(upcomingWebinars) {
  paginationContainerUpcoming.innerHTML = "";

  const totalPages = Math.ceil(upcomingWebinars.length / cardsPerPageUpcoming);
  if (totalPages <= 1) return; // No pagination needed if only one page

  const createButton = (text, page, disabled = false, active = false) => {
    const button = document.createElement("button");
    button.textContent = text;
    if (active) button.classList.add("active");
    if (disabled) button.disabled = true;
    button.addEventListener("click", () => {
      if (!disabled) {
        currentPageUpcoming = page;
        displayUpcomingPaginatedWebinars(upcomingWebinars);
      }
    });
    return button;
  };

  // First page button
  paginationContainerUpcoming.appendChild(
    createButton("<<", 1, currentPageUpcoming === 1)
  );

  // Previous button
  paginationContainerUpcoming.appendChild(
    createButton("<", currentPageUpcoming - 1, currentPageUpcoming === 1)
  );

  // Dynamic numbered page buttons
  let startPage, endPage;

  if (totalPages <= 5) {
    startPage = 1;
    endPage = totalPages;
  } else if (currentPageUpcoming <= 3) {
    startPage = 1;
    endPage = 5;
  } else if (currentPageUpcoming >= totalPages - 2) {
    startPage = totalPages - 4;
    endPage = totalPages;
  } else {
    startPage = currentPageUpcoming - 2;
    endPage = currentPageUpcoming + 2;
  }

  for (let i = startPage; i <= endPage; i++) {
    paginationContainerUpcoming.appendChild(
      createButton(i, i, false, i === currentPageUpcoming)
    );
  }

  // Next button
  paginationContainerUpcoming.appendChild(
    createButton(
      ">",
      currentPageUpcoming + 1,
      currentPageUpcoming === totalPages
    )
  );

  // Last page button
  paginationContainerUpcoming.appendChild(
    createButton(">>", totalPages, currentPageUpcoming === totalPages)
  );
}

const paginationContainerUpcoming = document.createElement("div");
paginationContainerUpcoming.classList.add("pagination-container");
upcomingWebinarsContainer.appendChild(paginationContainerUpcoming);
