const showSearchBar = document.querySelector("[data-show-searchbar]");

const hideSearchBar = document.querySelector("[data-hide-searchbar]");

const searchBarContainer = document.querySelector("[data-searchbar-container]");

const searchInput = document.querySelector("[data-search-input]");

showSearchBar.addEventListener("click", () => {
  searchBarContainer.classList.add("active");
  searchInput.focus();
});

hideSearchBar.addEventListener("click", () => {
  searchBarContainer.classList.remove("active");
});
