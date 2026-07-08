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
const mobileNavLinks = document.querySelectorAll(".site-nav a");
const siteNav = document.querySelector(".site-nav");
const menuToggle = document.querySelector(".menu-toggle");

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (siteNav) {
      siteNav.classList.remove("active");
      siteNav.classList.remove("open");
      siteNav.classList.remove("is-open");
    }

    if (menuToggle) {
      menuToggle.classList.remove("active");
      menuToggle.classList.remove("open");
      menuToggle.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }

    document.body.classList.remove("nav-open");
    document.body.classList.remove("menu-open");
  });
});