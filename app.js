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
// DPRC mobile contact link: land slightly lower so icons are visible
(() => {
  const contactMenuLink = document.querySelector('.site-nav a[href="#contact"]');
  const contactSection = document.querySelector("#contact");

  if (contactMenuLink && contactSection) {
    contactMenuLink.addEventListener("click", (event) => {
      if (window.innerWidth <= 850) {
        event.preventDefault();

        const contactTop =
          contactSection.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
          top: contactTop + 180,
          behavior: "smooth",
        });
      }
    });
  }
})();