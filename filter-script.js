const searchBar = document.getElementById("searchBar");
const categoryFilter = document.getElementById("categoryFilter");
const monthFilter = document.getElementById("dateFilter");

const modalSearchBar = document.getElementById("modalSearchBar");
const modalCategoryFilter = document.getElementById("modalCategoryFilter");
const modalMonthFilter = document.getElementById("modalDateFilter");

// function toggleModal() {
//   const modal = document.getElementById("filter-modal");
//   const overlay = document.getElementById("modal-overlay");
//   const isVisible = modal.style.display === "block";
//   modal.style.display = isVisible ? "none" : "block";
//   overlay.style.display = isVisible ? "none" : "block";
// }

function populateCategories() {
  const categories = new Set();
  webinars.forEach((webinar) => {
    webinar.categories.forEach((cat) => categories.add(cat));
  });

  categoryFilter.innerHTML = ""; // Clear existing categories
  modalCategoryFilter.innerHTML = ""; // Clear existing categories
  categories.forEach((category) => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="checkbox" value="${category}" class="categoryCheckbox"> ${category}
    `;
    categoryFilter.appendChild(label);
    modalCategoryFilter.appendChild(label.cloneNode(true)); // Clone the label for the modal
  });
}

// Function to filter webinars
function filterWebinars() {
  let filtered = webinars;

  // Populate category dropdown dynamically

  // Filter by search term
  const searchTerm = searchBar.value.toLowerCase();
  if (searchTerm) {
    filtered = filtered.filter(
      (webinar) =>
        webinar.shortTitle.toLowerCase().includes(searchTerm) ||
        webinar.longTitle.toLowerCase().includes(searchTerm) ||
        webinar.keywords.some((keyword) =>
          keyword.toLowerCase().includes(searchTerm)
        ) // Search in keywords
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

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".filter-container");
  const sections = document.querySelectorAll(".section");
  const footer = document.querySelector(".footer");

  if (!sidebar || sections.length < 3 || !footer) return;

  function updateSidebarPosition() {
    const firstSectionTop =
      sections[0].getBoundingClientRect().top + window.scrollY;
    const lastSectionBottom =
      sections[sections.length - 1].getBoundingClientRect().bottom +
      window.scrollY;
    const footerTop = footer.getBoundingClientRect().top + window.scrollY;
    const sidebarHeight = sidebar.offsetHeight;
    const windowHeight = window.innerHeight;

    // Ensure sidebar is aligned with .section containers at start
    if (window.scrollY === 0) {
      sidebar.style.position = "absolute";
      sidebar.style.top = `${firstSectionTop}px`;
    }

    // Sidebar stays fixed while sections are visible
    if (
      window.scrollY >= firstSectionTop &&
      window.scrollY + windowHeight < lastSectionBottom
    ) {
      sidebar.style.position = "fixed";
      sidebar.style.top = "0";
      sidebar.style.bottom = "auto";
    }
    // Sidebar stops moving above the footer
    else if (window.scrollY + windowHeight >= footerTop) {
      sidebar.style.position = "absolute";
      sidebar.style.top = `${footerTop - sidebarHeight}px`;
    }
    // Reset to initial position when scrolling back up
    else {
      sidebar.style.position = "absolute";
      sidebar.style.top = `${firstSectionTop}px`;
    }
  }

  // Wait for layout to settle before positioning the sidebar
  requestAnimationFrame(() => {
    updateSidebarPosition();
    window.addEventListener("scroll", updateSidebarPosition);
  });
});

// Modal functionality
function toggleModal() {
  const modal = document.getElementById("filter-modal");
  const overlay = document.getElementById("modal-overlay");
  const isVisible = modal.style.display === "block";

  if (!isVisible) {
    // Sync values from sidebar to modal
    document.getElementById("modalSearchBar").value =
      document.getElementById("searchBar").value;
    document.getElementById("modalDateFilter").value =
      document.getElementById("dateFilter").value;

    const modalFilterDiv = document.getElementById("modalCategoryFilter");
    modalFilterDiv.innerHTML = "";
    const checkboxes = document.querySelectorAll(
      "#categoryFilter input[type='checkbox']"
    );
    checkboxes.forEach((checkbox) => {
      const clone = checkbox.cloneNode(true);
      // clone.id = "modal-" + checkbox.id;
      clone.checked = checkbox.checked;
      clone.addEventListener("change", () => {
        checkbox.checked = clone.checked;
        filterWebinars();
      });

      const label = document.createElement("label");
      label.appendChild(clone);
      label.appendChild(
        document.createTextNode(checkbox.parentNode.textContent.trim())
      );
      modalFilterDiv.appendChild(label);
      modalFilterDiv.appendChild(document.createElement("br"));
    });
  } else {
    // Sync values back to sidebar
    document.getElementById("searchBar").value =
      document.getElementById("modalSearchBar").value;
    document.getElementById("dateFilter").value =
      document.getElementById("modalDateFilter").value;
      filterWebinars();
  }

  modal.style.display = isVisible ? "none" : "block";
  overlay.style.display = isVisible ? "none" : "block";
}

// Optional: Add event listeners to modal filters
document.getElementById("modalSearchBar").addEventListener("input", () => {
  document.getElementById("searchBar").value =
    document.getElementById("modalSearchBar").value;
    filterWebinars();
});

document.getElementById("modalDateFilter").addEventListener("change", () => {
  document.getElementById("dateFilter").value =
    document.getElementById("modalDateFilter").value;
    filterWebinars();
});
