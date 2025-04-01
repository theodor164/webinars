const searchBar = document.getElementById("searchBar");
const categoryFilter = document.getElementById("categoryFilter");
const monthFilter = document.getElementById("dateFilter");
const webinarList = document.getElementById("webinarList");

function populateCategories() {
  const categories = new Set();
  webinars.forEach((webinar) => {
    webinar.categories.forEach((cat) => categories.add(cat));
  });

  categoryFilter.innerHTML = ""; // Clear existing categories
  categories.forEach((category) => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="checkbox" value="${category}" class="categoryCheckbox"> ${category}
    `;
    categoryFilter.appendChild(label);
  });
}

// Function to filter webinars
function filterWebinars() {
  let filtered = webinars;

  // Populate category dropdown dynamically

  // Filter by search term
const searchTerm = searchBar.value.toLowerCase();
if (searchTerm) {
  filtered = filtered.filter((webinar) =>
    webinar.shortTitle.toLowerCase().includes(searchTerm) ||
    webinar.longTitle.toLowerCase().includes(searchTerm) ||
    webinar.keywords.some((keyword) => keyword.toLowerCase().includes(searchTerm)) // Search in keywords
  );
}

  // Filter by selected categories (checkboxes) - show webinars containing any of the selected categories
  const selectedCategories = Array.from(
    document.querySelectorAll(".categoryCheckbox:checked")
  ).map((checkbox) => checkbox.value);
  if (selectedCategories.length > 0) {
    filtered = filtered.filter((webinar) =>
      webinar.categories.some((category) =>
        selectedCategories.includes(category)
      )
    );
  }

  // Filter by month
  const selectedMonth = monthFilter.value;
  if (selectedMonth) {
    filtered = filtered.filter(
      (webinar) => webinar.date.startsWith(selectedMonth) // Matches only the year and month
    );
  }

  currentPageUpcoming = 1;
  currentPagePast = 1;

  // displayWebinars(filtered);
  if (filtered) {
    const nextWebinar = findUpcomingWebinars(webinars, filtered);
    const pastWebinars = findPastWebinars(filtered);

    displayUpcomingPaginatedWebinars(nextWebinar);
    displayPastPaginatedWebinars(pastWebinars);
  } else {
    displayUpcomingPaginatedWebinars(upcomingWebinars);
    displayPastPaginatedWebinars(pastWebinars);
  }
}

// Event listeners
searchBar.addEventListener("input", filterWebinars);
categoryFilter.addEventListener("change", filterWebinars);
monthFilter.addEventListener("change", filterWebinars);
window.addEventListener("load", filterWebinars);

// Initial display
populateCategories();
