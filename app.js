const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");

menuToggle.addEventListener("click", () => {
  siteNav.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("active");
  });
});
// DPRC enquiry form → WhatsApp
const enquiryForm = document.querySelector("#dprcEnquiryForm");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#enquiryName").value.trim();
    const phone = document.querySelector("#enquiryPhone").value.trim();
    const type = document.querySelector("#enquiryType").value.trim();
    const sport = document.querySelector("#enquirySport").value.trim();
    const age = document.querySelector("#enquiryAge").value.trim();
    const level = document.querySelector("#enquiryLevel").value.trim();
    const availability = document.querySelector("#enquiryAvailability").value.trim();
    const message = document.querySelector("#enquiryMessage").value.trim();

    const whatsappMessage = `
New DPRC Website Enquiry

Name: ${name || "-"}
Phone / WhatsApp: ${phone || "-"}
Enquiry type: ${type || "-"}
Sport: ${sport || "-"}
Player age: ${age || "-"}
Playing level: ${level || "-"}
Preferred days / times: ${availability || "-"}

Message:
${message || "-"}
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/971545812647?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}
// DPRC enquiry jump links
const enquiryJumpLinks = document.querySelectorAll(".enquiry-jump");
const enquiryTypeSelect = document.querySelector("#enquiryType");

enquiryJumpLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const selectedType = link.dataset.enquiryType;

    if (enquiryTypeSelect && selectedType) {
      setTimeout(() => {
        enquiryTypeSelect.value = selectedType;
      }, 250);
    }
  });
});
// DPRC mobile menu: close after clicking a navigation link
(() => {
  const dprcMobileNavLinks = document.querySelectorAll(".site-nav a");
  const dprcSiteNav = document.querySelector(".site-nav");
  const dprcMenuToggle = document.querySelector(".menu-toggle");

  dprcMobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (dprcSiteNav) {
        dprcSiteNav.classList.remove("active", "open", "is-open");
      }

      if (dprcMenuToggle) {
        dprcMenuToggle.classList.remove("active", "open", "is-open");
        dprcMenuToggle.setAttribute("aria-expanded", "false");
      }

      document.body.classList.remove("nav-open", "menu-open");
    });
  });
})();
// DPRC mobile contact link: land on the contact card
(() => {
  const contactMenuLink = document.querySelector('.site-nav a[href="#contact"]');
  const contactCard = document.querySelector("#contact .contact-card");

  if (contactMenuLink && contactCard) {
    contactMenuLink.addEventListener("click", (event) => {
      if (window.innerWidth <= 850) {
        event.preventDefault();

        setTimeout(() => {
          const contactCardTop =
            contactCard.getBoundingClientRect().top + window.pageYOffset;

          window.scrollTo({
            top: contactCardTop - 18,
            behavior: "smooth",
          });
        }, 80);
      }
    });
  }
})();
// DPRC floating update ticker
(() => {
  const updates = window.dprcUpdates;

  if (!Array.isArray(updates) || updates.length === 0) {
    return;
  }

  const updateBar = document.createElement("div");
  updateBar.className = "dprc-update-bar";
  updateBar.setAttribute("aria-label", "Desert Palm Racquet Club updates");

  const updateTrack = document.createElement("div");
  updateTrack.className = "dprc-update-track";

  const repeatedUpdates = [...updates, ...updates];

  repeatedUpdates.forEach((item) => {
    const updateItem = document.createElement("a");
    updateItem.className = "dprc-update-item";
    updateItem.href = item.href || "index.html#contact";

    const label = document.createElement("strong");
    label.textContent = item.label || "Update";

    const text = document.createElement("span");
    text.textContent = item.text || "";

    updateItem.appendChild(label);
    updateItem.appendChild(text);
    updateTrack.appendChild(updateItem);
  });

  updateBar.appendChild(updateTrack);
  document.body.appendChild(updateBar);
})();