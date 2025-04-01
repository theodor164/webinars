// const pastWebinars = findPastWebinars(webinars);

function findPastWebinars(webinars) {
  const now = new Date();
  const pastWebinars = [];

  webinars.forEach((webinar) => {
    const webinarDateTimeString = `${webinar.date} ${webinar.time}`;
    const webinarDateTime = new Date(webinarDateTimeString);

    if (webinarDateTime < now) {
      pastWebinars.push(webinar);
    }
  });

  return pastWebinars.sort((a, b) => {
    const dateA = new Date(`${a.date} ${a.time}`);
    const dateB = new Date(`${b.date} ${b.time}`);
    return dateB - dateA;
  });
}

const pastWebinarsContainer = document.querySelector(
  ".past-webinars-container"
);

const pastWebinarsTitle = document.createElement("h2");
pastWebinarsTitle.textContent = "Webinarii trecute";
pastWebinarsContainer.appendChild(pastWebinarsTitle);

const pastWebinarsDescription = document.createElement("p");
pastWebinarsDescription.textContent =
  "Nu ai ajuns la un webinar? Poti gasi inregistrarea acestora mai jos";
pastWebinarsContainer.appendChild(pastWebinarsDescription);

const pastWebinarsCardsContainer = document.createElement("div");
pastWebinarsCardsContainer.classList.add("past-webinars-cards");
pastWebinarsContainer.appendChild(pastWebinarsCardsContainer);

// pastWebinars.forEach((webinar) => {
//   const pastWebinarCard = createPastWebinarCardElement(webinar);
//   pastWebinarsCardsContainer.appendChild(pastWebinarCard);
// });

function createPastWebinarCardElement(webinar) {
  const webinarCardElement = document.createElement("div");
  webinarCardElement.classList.add("past-webinar");

  const imageElement = document.createElement("img");
  imageElement.src = webinar.image;
  imageElement.alt = webinar.longTitle;
  webinarCardElement.appendChild(imageElement);

  const cardBodyElement = document.createElement("div");
  cardBodyElement.classList.add("past-webinar-body");
  webinarCardElement.appendChild(cardBodyElement);

  const titleElement = document.createElement("h3");
  titleElement.textContent = webinar.shortTitle;
  cardBodyElement.appendChild(titleElement);

  const dateTimeElement = document.createElement("p");
  dateTimeElement.innerHTML = formatWebinarDate(webinar);
  dateTimeElement.classList.add("past-webinar-date-time");
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

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"/></svg> <p>${day} ${month} ${year}</p>`;
  }

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = webinar.shortDescription;
  descriptionElement.classList.add("past-webinar-description");
  cardBodyElement.appendChild(descriptionElement);

  const registrationLinkElement = document.createElement("p");
  registrationLinkElement.classList.add("past-webinar-registration-link");
  registrationLinkElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg> Vizioneaza`;
  cardBodyElement.appendChild(registrationLinkElement);

  const lineForSeparation = document.createElement("hr");
  lineForSeparation.classList.add("line-for-separation");
  cardBodyElement.appendChild(lineForSeparation);

  const selectedCategories = Array.from(
    document.querySelectorAll(".categoryCheckbox:checked")
  ).map((checkbox) => checkbox.value);

  const labelsContainer = document.createElement("div");
  labelsContainer.classList.add("past-labels-container");
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

const cardsPerPagePast = 4; // Change this to control how many cards per page
let currentPagePast = 1;

function displayPastPaginatedWebinars(pastWebinars) {
  pastWebinarsCardsContainer.innerHTML = ""; // Clear previous cards

  const startIndex = (currentPagePast - 1) * cardsPerPagePast;
  const endIndex = startIndex + cardsPerPagePast;
  const paginatedWebinars = pastWebinars.slice(startIndex, endIndex);

  paginatedWebinars.forEach((webinar) => {
    const webinarCard = createPastWebinarCardElement(webinar);
    pastWebinarsCardsContainer.appendChild(webinarCard);
  });

  updatePastPaginationControls(pastWebinars);
}

function updatePastPaginationControls(pastWebinars) {
  paginationContainerPast.innerHTML = "";

  const totalPages = Math.ceil(pastWebinars.length / cardsPerPagePast);
  if (totalPages <= 1) return; // No pagination needed if only one page

  const createButton = (text, page, disabled = false, active = false) => {
    const button = document.createElement("button");
    button.textContent = text;
    if (active) button.classList.add("active");
    if (disabled) button.disabled = true;
    button.addEventListener("click", () => {
      if (!disabled) {
        currentPagePast = page;
        displayPastPaginatedWebinars(pastWebinars);
      }
    });
    return button;
  };

  // First page button
  paginationContainerPast.appendChild(
    createButton("<<", 1, currentPagePast === 1)
  );

  // Previous button
  paginationContainerPast.appendChild(
    createButton("<", currentPagePast - 1, currentPagePast === 1)
  );

  // Dynamic numbered page buttons
  let startPage, endPage;

  if (totalPages <= 5) {
    startPage = 1;
    endPage = totalPages;
  } else if (currentPagePast <= 3) {
    startPage = 1;
    endPage = 5;
  } else if (currentPagePast >= totalPages - 2) {
    startPage = totalPages - 4;
    endPage = totalPages;
  } else {
    startPage = currentPagePast - 2;
    endPage = currentPagePast + 2;
  }

  for (let i = startPage; i <= endPage; i++) {
    paginationContainerPast.appendChild(
      createButton(i, i, false, i === currentPagePast)
    );
  }

  // Next button
  paginationContainerPast.appendChild(
    createButton(">", currentPagePast + 1, currentPagePast === totalPages)
  );

  // Last page button
  paginationContainerPast.appendChild(
    createButton(">>", totalPages, currentPagePast === totalPages)
  );
}

const paginationContainerPast = document.createElement("div");
paginationContainerPast.classList.add("pagination-container");
pastWebinarsContainer.appendChild(paginationContainerPast);
