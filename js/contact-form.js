/*
  contact-form.js
  ---------------
  Owner: Person C.

  Validates the contact form and submits it to Formspree.
*/

(function () {
  "use strict";

  function initContactForm() {
    var form = document.querySelector("[data-contact-form]");
    if (!form) return;

    var confirmation = document.querySelector("[data-contact-confirmation]");
    var productRows = form.querySelectorAll("[data-product-row]");

    Array.prototype.forEach.call(productRows, function (row) {
      var checkbox = row.querySelector("input[type=checkbox]");
      var quantity = row.querySelector("input[type=text]");
      checkbox.addEventListener("change", function () { setProductRowState(row); });
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = form.elements.name.value.trim();
      var phone = form.elements.phone.value.trim();
      var message = form.elements.message.value.trim();
      var products = getSelectedProducts(form);

      var errors = [];
      if (!name) errors.push("Please enter your name.");
      if (!phone) errors.push("Please enter a phone number so we can reach you back.");
      if (!products.length) errors.push("Select at least one product and enter its quantity.");
      if (products.some(function (product) { return !product.quantity; })) {
        errors.push("Enter a quantity for each selected product.");
      }

      clearErrors(form);
      if (errors.length) {
        showErrors(form, errors);
        return;
      }

      submitToFormspree(form, products, confirmation);
    });
  }

  function setProductRowState(row) {
    var checkbox = row.querySelector("input[type=checkbox]");
    var quantity = row.querySelector("input[type=text]");
    quantity.disabled = !checkbox.checked;
    if (!checkbox.checked) quantity.value = "";
  }

  function submitToFormspree(form, products, confirmation) {
    var submitButton = form.querySelector("button[type=submit]");
    var formData = new FormData(form);
    formData.append("product_summary", products.map(function (product) {
      return product.name + " (Quantity: " + product.quantity + ")";
    }).join(", "));

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    }).then(function (response) {
      if (!response.ok) throw new Error("Formspree request failed");
      if (confirmation) {
        confirmation.hidden = false;
        confirmation.textContent = "Thanks. Your quote request has been sent. We will get back to you soon.";
      }
      form.reset();
      Array.prototype.forEach.call(form.querySelectorAll("[data-product-row]"), setProductRowState);
    }).catch(function () {
      showErrors(form, ["We couldn't send your request right now. Please try again or call us at 647 537 4486."]);
    }).then(function () {
      submitButton.disabled = false;
      submitButton.textContent = "Send request";
    });
  }

  function getSelectedProducts(form) {
    var products = [];
    var rows = form.querySelectorAll("[data-product-row]");
    Array.prototype.forEach.call(rows, function (row) {
      var checkbox = row.querySelector("input[type=checkbox]");
      if (!checkbox.checked) return;
      var quantity = row.querySelector("input[type=text]").value.trim();
      products.push({ name: checkbox.value, quantity: quantity });
    });
    return products;
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
