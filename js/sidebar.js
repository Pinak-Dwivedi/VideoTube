const hamburger = document.querySelector("[data-hamburger]");

const sidebarHamburger = document.querySelector("[data-sidebar-hamburger]");

const sidebarContainer = document.querySelector("[data-sidebar]");

const navbar = document.querySelector("[data-navbar]");

const navbarSectionsData = [
  // section 1
  [
    { image: "home.png", title: "Home", alt: "home" },
    { image: "shorts.png", title: "Shorts", alt: "shorts" },
    {
      image: "subscriptions.png",
      title: "Subscriptions",
      alt: "subscriptions",
    },
  ],

  // section 2
  [
    { sectionTitle: "You" },
    { image: "your-channel.png", title: "Your channel", alt: "your channel" },
    {
      image: "history.png",
      title: "History",
      alt: "history",
    },
    {
      image: "your-videos.png",
      title: "Your videos",
      alt: "your videos",
    },
    {
      image: "your-courses.png",
      title: "Your courses",
      alt: "your courses",
    },
    {
      image: "watch-later.png",
      title: "Watch later",
      alt: "watch later",
    },
  ],

  // section 3
  [
    { sectionTitle: "Subscriptions" },
    { image: "channel1.png", title: "Channel 1", alt: "channel 1" },
    { image: "channel2.png", title: "Channel 2", alt: "channel 2" },
    { image: "channel3.png", title: "Channel 3", alt: "channel 3" },
  ],

  // section 4
  [
    { sectionTitle: "Explore" },
    { image: "trending.png", title: "Trending", alt: "trending" },
    { image: "shopping.png", title: "Shopping", alt: "shopping" },
    { image: "music.png", title: "Music", alt: "music" },
  ],

  // section 5
  [
    { image: "settings.png", title: "Settings", alt: "settings" },
    {
      image: "help.png",
      title: "Help",
      alt: "help",
    },
    {
      image: "send-feedback.png",
      title: "Send feedback",
      alt: "send feedback",
    },
  ],
];

hamburger.addEventListener("click", onSidebarOpen);

sidebarHamburger.addEventListener("click", onSidebarClose);

window.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    sidebarContainer.classList.contains("sidebar-open")
  ) {
    onSidebarClose(null, true);
  }
});

function onSidebarOpen() {
  document.body.style.overflowY = "scroll";
  document.body.style.position = "fixed";
  document.body.style.inset = "0";

  sidebarContainer.classList.add("sidebar-open");

  sidebarContainer.addEventListener("click", onSidebarClose);
}

function onSidebarClose(e, iskeyboardEscapeKey) {
  if (
    iskeyboardEscapeKey ||
    typeof e?.target?.dataset?.sidebar === "string" ||
    typeof e?.target?.dataset?.sidebarHamburger === "string"
  ) {
    document.body.style.overflowY = "auto";
    document.body.style.position = "static";
    document.body.style.inset = "none";

    sidebarContainer.classList.remove("sidebar-open");

    sidebarContainer.removeEventListener("click", onSidebarClose);
  }
}

navbarSectionsData.forEach((sectionData, sectionIndex) => {
  // clone navbar section template
  const navbarSectionTemplate = document
    .querySelector("[data-navbar-section-template]")
    .content.cloneNode(true);

  const navbarSection = navbarSectionTemplate.querySelector(
    "[data-navbar-section]"
  );

  const navbarList = navbarSection.querySelector("[data-navbar-list]");

  // add section to navbar
  navbar.append(navbarSection);

  sectionData.forEach((data, index) => {
    // check if there is section title

    if (typeof data === "object" && data?.sectionTitle != null) {
      const sectionTitle = document.createElement("h3");
      sectionTitle.textContent = data?.sectionTitle;
      sectionTitle.classList.add("navbar-section-heading");

      navbarSection.insertBefore(sectionTitle, navbarSection.children[0]);
      return;
    }

    // clone navbar section list item template
    const navbarListItemTemplate = document
      .querySelector("[data-navbar-list-item-template]")
      .content.cloneNode(true);

    const navbarListItem = navbarListItemTemplate.querySelector(
      "[data-navbar-list-item]"
    );

    const navbarListItemImage = navbarListItem.querySelector(
      "[data-navbar-list-item-image]"
    );
    const navbarListItemText = navbarListItem.querySelector(
      "[data-navbar-list-item-text]"
    );

    if (sectionIndex === 0 && index === 0) {
      navbarListItem.classList.add("active");
    }

    // add list items

    navbarListItemImage.src = `./images/${data?.image}`;
    navbarListItemText.textContent = data?.title;

    navbarList.append(navbarListItem);
  });
});
