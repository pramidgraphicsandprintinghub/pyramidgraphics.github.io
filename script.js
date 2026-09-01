// Pyramid Graphics & Printing Hub WhatsApp number.
// Stored in international format for the WhatsApp link.
const WHATSAPP_NUMBER = "2348108100528";

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelector(".menu").addEventListener("click", () => {
  const nav = document.querySelector(".nav-links");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "76px";
  nav.style.left = "0";
  nav.style.right = "0";
  nav.style.background = "#fff";
  nav.style.padding = "20px";
  nav.style.flexDirection = "column";
  nav.style.boxShadow = "0 15px 30px rgba(0,0,0,.08)";
});

document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  if (WHATSAPP_NUMBER.includes("X")) {
    alert("Please replace WHATSAPP_NUMBER in script.js with your real business WhatsApp number first.");
    return;
  }

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const details = document.getElementById("details").value.trim();

  const message =
`Hello Pyramid Graphics & Printing Hub 👋

I would like to make an order/request.

Name: ${name}
Phone: ${phone}
Service: ${service}
Details: ${details}

Please let me know the price and next steps. Thank you.`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
});