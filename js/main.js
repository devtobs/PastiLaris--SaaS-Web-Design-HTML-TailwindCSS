document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-menu");
  const indicators = document.querySelectorAll(".tab-indicator");
  const tabContents = [
    {
      title: "We’re Helping Big <br/> Global Companies Grow",
      description:
        "Track your customers behavior to make a good decision that helps the customer use our services better way.",
      features: [
        "Auto running when reaches certain number",
        "Sending message to server for repeatation",
        "Reporting and extracting the data",
      ],
      image: "./assets/images/thumbnails/overview.png",
    },
    {
      title: "Real-Time Data Monitoring",
      description:
        "Monitor your data in real-time and get instant updates on critical metrics.",
      features: [
        "Live tracking of user activity",
        "Instant alerts for anomalies",
        "Customizable dashboard views",
      ],
      image: "./assets/images/thumbnails/overview.png",
    },
    {
      title: "Lifetime Support for All Users",
      description:
        "Our dedicated team is available 24/7 to assist you with any issues or questions.",
      features: [
        "Priority support for premium users",
        "Comprehensive knowledge base",
        "Regular updates and maintenance",
      ],
      image: "./assets/images/thumbnails/overview.png",
    },
    {
      title: "High Protection for Your Data",
      description:
        "Ensure the security of your data with advanced encryption and protection mechanisms.",
      features: [
        "End-to-end encryption",
        "Two-factor authentication",
        "Regular security audits",
      ],
      image: "./assets/images/thumbnails/overview.png",
    },
  ];

  // Function to update tab content
  function updateTabContent(index) {
    const tabContent = document.querySelector(".tab-content");
    const selectedContent = tabContents[index];

    // Update image
    tabContent.querySelector(".tab-img img").src = selectedContent.image;

    // Update title
    tabContent.querySelector(".tab-title").innerHTML = selectedContent.title;

    // Update description
    tabContent.querySelector(".tab-description").textContent =
      selectedContent.description;

    // Update features
    const featuresContainer = tabContent.querySelector(".tab-features");
    featuresContainer.innerHTML = ""; // Clear existing features
    selectedContent.features.forEach((feature) => {
      const featureElement = document.createElement("div");
      featureElement.className = "flex gap-3 items-center";
      featureElement.innerHTML = `
                <div class="flex items-center justify-center w-[30px] h-[30px] bg-primary rounded-full">
                  <img src="./assets/images/icons/ic_check.svg" alt="check icon" />
                </div>
                <p class="text-lg font-bold leading-[21px] text-[#040624]">${feature}</p>
              `;
      featuresContainer.appendChild(featureElement);
    });
  }

  // Function to move the indicator
  function moveIndicator(index) {
    indicators.forEach((indicator, i) => {
      if (i === index) {
        indicator.querySelector("div").classList.remove("bg-transparent");
        indicator.querySelector("div").classList.add("bg-foreground");
      } else {
        indicator.querySelector("div").classList.remove("bg-foreground");
        indicator.querySelector("div").classList.add("bg-transparent");
      }
    });
  }

  // Add click event listeners to tabs
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // Remove active state from all tabs
      tabs.forEach((t) => {
        t.classList.remove("active");
        t.querySelector("h3").classList.remove("font-semibold");
        t.querySelector("h3").classList.add("font-medium");
        t.querySelector("#tab-icon-container").classList.remove("bg-primary");
        t.querySelector("#tab-icon-container").classList.add("bg-tab-off");
        t.querySelector("#tab-icon").classList.remove("bg-foreground");
        t.querySelector("#tab-icon").classList.add("bg-[#ABB4B1]");
      });

      // Add active state to the clicked tab
      tab.classList.add("active");

      // Update the color of the title for the active tab
      const tabTitle = tab.querySelector("h3");
      tabTitle.classList.remove("font-medium");
      tabTitle.classList.add("font-semibold");
      const tabIconContainer = tab.querySelector("#tab-icon-container");
      tabIconContainer.classList.remove("bg-tab-off");
      tabIconContainer.classList.add("bg-[#B7EB38]");

      const tabIcon = tab.querySelector("#tab-icon");
      tabIcon.classList.remove("bg-white");
      tabIcon.classList.add("bg-foreground");

      // Move the indicator to the clicked tab
      moveIndicator(index);

      // Update the tab content
      updateTabContent(index);
    });
  });

  // Initialize the first tab as active
  tabs[0].classList.add("active");
  tabs[0].querySelector("h3").classList.remove("font-medium");
  tabs[0].querySelector("h3").classList.add("font-semibold");
  tabs[0].querySelector("#tab-icon-container").classList.remove("bg-tab-off");
  tabs[0].querySelector("#tab-icon-container").classList.add("bg-primary");
  tabs[0].querySelector("#tab-icon").classList.remove("bg-white");
  tabs[0].querySelector("#tab-icon").classList.add("bg-foreground");
  moveIndicator(0);
  updateTabContent(0);
});
