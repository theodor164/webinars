const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const calendarHeaderEl = document.getElementById("calendar-header");
const calendarBodyEl = document.getElementById("calendar-body");
const currentMonthEl = document.getElementById("currentMonth");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");
const eventDetailsEl = document.getElementById("event-details");

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

// Add days of the week
function generateCalendarHeader() {
  calendarHeaderEl.innerHTML = "";
  daysOfWeek.forEach((day) => {
    const dayEl = document.createElement("div");
    dayEl.textContent = day;
    calendarHeaderEl.appendChild(dayEl);
  });
}

// Generate the calendar
function generateCalendar(year, month) {
  calendarBodyEl.innerHTML = ""; // Clear previous calendar
  currentMonthEl.textContent = new Date(year, month).toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Empty cells for first week alignment
  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement("div");
    calendarBodyEl.appendChild(emptyCell);
  }

  // Generate day cells
  for (let day = 1; day <= daysInMonth; day++) {
    const dateStr = `${year}-${(month + 1).toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
    const dayEl = document.createElement("div");
    dayEl.classList.add("day");
    dayEl.textContent = day;

    // Highlight days with webinars
    const webinar = webinars.find((w) => w.date === dateStr);
    if (webinar) {
      dayEl.classList.add("has-event");
      dayEl.addEventListener("click", () => showEventDetails(webinar));
    }

    calendarBodyEl.appendChild(dayEl);
  }
}

// Show event details
function showEventDetails(webinar) {
  eventDetailsEl.innerHTML = `
  <img src="${webinar.image}" alt="${webinar.longTitle}">
  <div class="calendar-webinar-body">
    <h3>${webinar.shortTitle}</h3>
    <div class="calendar-webinar-date-time">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"></path></svg>
      <p>
        ${new Date(webinar.date).toLocaleDateString("ro-RO", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg>
      <p>Ora 
        ${new Date(webinar.date + " " + webinar.time).toLocaleTimeString(
          "ro-RO",
          {
            hour: "2-digit",
            minute: "2-digit",
          }
        )}
      </p>
    </div>
    <p class="calendar-webinar-description">
      ${webinar.shortDescription}
    </p>
    <p class="calendar-webinar-registration-link">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
       Inscrie-te la webinar
    </p>
    <hr class="line-for-separation">
    <div class="calendar-labels-container">
      ${webinar.categories
        .map((category) => `<span class="label">${category}</span>`)
        .join("")}
    </div>
  </div>
  `;
}

// Find the next upcoming event
function getNextEvent() {
  const today = new Date().toISOString().split("T")[0];
  return webinars.find((webinar) => webinar.date >= today) || null;
}

// Display the next upcoming event by default
function displayNextEvent() {
  const nextEvent = getNextEvent();
  if (nextEvent) {
    showEventDetails(nextEvent);
  } else {
    eventDetailsEl.innerHTML = "<h3>No upcoming events</h3>";
  }
}

// Navigation
prevMonthBtn.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  generateCalendar(currentYear, currentMonth);
});

nextMonthBtn.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  generateCalendar(currentYear, currentMonth);
});

// Init calendar
generateCalendarHeader();
generateCalendar(currentYear, currentMonth);
displayNextEvent();
