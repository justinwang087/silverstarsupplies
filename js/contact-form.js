/*
  contact-form.js
  ---------------
  Owner: Person C.

  Validates the contact form and sends it. Ships with a zero-backend
  default (a mailto: link) so it works with no server at all &mdash; a
  plain static site has nothing to POST to yet.

  TODO (task C9, a real decision, not busywork): if a proper inbox / SMS
  routing is wanted instead of "opens the visitor's email client," swap
  buildMailtoUrl()'s usage below for a fetch() call to a lightweight
  form backend (e.g. Formspree) and keep the same validation.
*/

(function () {
  "use strict";

  var DESTINATION_EMAIL = "info@silverstarsupplies.com"; // TODO: confirm the real inbox to use

  function initContactForm() {
    var form = document.querySelector("[data-contact-form]");
    if (!form) return;

    var confirmation = document.querySelector("[data-contact-confirmation]");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = form.elements.name.value.trim();
      var phone = form.elements.phone.value.trim();
      var need = form.elements.need.value.trim();
      var message = form.elements.message.value.trim();

      var errors = [];
      if (!name) errors.push("Please enter your name.");
      if (!phone) errors.push("Please enter a phone number so we can reach you back.");
      if (!need) errors.push("Let us know what you need.");

      clearErrors(form);
      if (errors.length) {
        showErrors(form, errors);
        return;
      }

      window.location.href = buildMailtoUrl({ name: name, phone: phone, need: need, message: message });

      if (confirmation) {
        confirmation.hidden = false;
        confirmation.textContent = "Your email app should open with your message ready to send. If it doesn't, call us at 647 537 4486.";
      }
      form.reset();
    });
  }

  function buildMailtoUrl(fields) {
    var subject = "Quote request: " + fields.need;
    var body = [
      "Name: " + fields.name,
      "Phone: " + fields.phone,
      "What they need: " + fields.need,
      "",
      fields.message
    ].join("\n");
    return "mailto:" + DESTINATION_EMAIL +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
  }

  function showErrors(form, errors) {
    var list = document.querySelector("[data-contact-errors]");
    if (!list) return;
    list.hidden = false;
    list.innerHTML = "";
    errors.forEach(function (message) {
      var li = document.createElement("li");
      li.textContent = message;
      list.appendChild(li);
    });
  }

  function clearErrors(form) {
    var list = document.querySelector("[data-contact-errors]");
    if (!list) return;
    list.hidden = true;
    list.innerHTML = "";
  }

  document.addEventListener("DOMContentLoaded", initContactForm);
})();
