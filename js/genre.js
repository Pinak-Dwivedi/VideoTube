const genreList = document.querySelector("[data-genre-list]");

const scrollLeftButton = document.querySelector(
  "[data-genre-scroll-left-button]"
);

const scrollRightButton = document.querySelector(
  "[data-genre-scroll-right-button]"
);

const SCROLL_OFFSET = 150;

scrollLeftButton.addEventListener("click", () => {
  genreList.scrollLeft -= SCROLL_OFFSET;

  handleScroll();
});

scrollRightButton.addEventListener("click", () => {
  genreList.scrollLeft += SCROLL_OFFSET;

  handleScroll();
});

genreList.addEventListener("scroll", handleScroll);

// add right mask
genreList.style.mask = "linear-gradient(90deg, white 95%, transparent)";

function handleScroll() {
  let isLeftOffset = false;

  if (genreList.scrollLeft >= 20) {
    scrollLeftButton.classList.add("show");
    isLeftOffset = true;
  } else {
    scrollLeftButton.classList.remove("show");
    isLeftOffset = false;
  }

  const maxScrollWidth = genreList.scrollWidth - genreList.clientWidth - 20;

  if (genreList.scrollLeft >= maxScrollWidth) {
    scrollRightButton.classList.remove("show");

    // remove right mask
    genreList.style.mask = "linear-gradient(90deg, transparent, white 5%)";
  } else {
    scrollRightButton.classList.add("show");

    // add mask to left
    if (isLeftOffset) {
      genreList.style.mask =
        "linear-gradient(90deg, transparent, white 5%, white 95%, transparent)";
    } else {
      // remove left mask
      genreList.style.mask = "linear-gradient(90deg, white 95%, transparent)";
    }
  }
}
