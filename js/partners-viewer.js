/*
  partners-viewer.js
  -------------------
  Owner: Person C.
  Powers the Partners page: a sidebar of brand buttons and a single
  <iframe> whose src swaps on click &mdash; the modern replacement for the
  old site's <frameset>.

  IMPORTANT &mdash; read this before changing the timeout logic below:
  Most manufacturer marketing sites send an X-Frame-Options or CSP
  frame-ancestors header specifically to block being embedded. When that
  happens the iframe just stays blank; JavaScript on this page has NO
  reliable way to ask a cross-origin iframe why it didn't load (that's
  the browser's same-origin policy, not a bug here). The BLOCK_TIMEOUT_MS
  heuristic below is a best-effort guess, not a certainty &mdash; task C1
  (the embeddability spike) is what actually tells you which of the six
  brands behave which way. Whatever C1 finds, the "open in new tab"
  control must keep working for every brand, embedded or not.
*/

(function () {
  "use strict";

  var BLOCK_TIMEOUT_MS = 4000;
  var MOBILE_QUERY = "(max-width: 860px)";

  function initPartnersViewer() {
    var buttons = document.querySelectorAll("[data-partner]");
    var iframe = document.querySelector("[data-partner-iframe]");
    var emptyState = document.querySelector("[data-partner-empty]");
    var blockedState = document.querySelector("[data-partner-blocked]");
    var label = document.querySelector("[data-partner-label]");
    var openLink = document.querySelector("[data-partner-open]");

    if (!buttons.length || !iframe) return; // not on the Partners page

    var loadTimer = null;

    function isMobile() {
      return window.matchMedia(MOBILE_QUERY).matches;
    }

    function setActiveButton(target) {
      buttons.forEach(function (b) { b.classList.remove("is-active"); });
      target.classList.add("is-active");
    }

    function showBlocked(url) {
      iframe.hidden = true;
      emptyState.hidden = true;
      blockedState.hidden = false;
    }

    function showFrame() {
      iframe.hidden = false;
      emptyState.hidden = true;
      blockedState.hidden = true;
    }

    function selectPartner(button) {
      var url = button.getAttribute("data-url");
      var name = button.getAttribute("data-partner");
      if (!url) return;

      setActiveButton(button);
      label.textContent = name;
      openLink.href = url;

      // On small screens, don't even try to embed a full desktop site
      // into a phone-width panel &mdash; go straight to a new tab.
      if (isMobile()) {
        window.open(url, "_blank", "noopener");
        return;
      }

      if (loadTimer) clearTimeout(loadTimer);
      showFrame();
      iframe.src = url;

      loadTimer = setTimeout(function () {
        // Heuristic only (see file header) &mdash; treat "never loaded" as blocked.
        showBlocked(url);
        window.open(url, "_blank", "noopener");
      }, BLOCK_TIMEOUT_MS);
    }

    iframe.addEventListener("load", function () {
      if (loadTimer) clearTimeout(loadTimer);
    });

    buttons.forEach(function (button) {
      button.addEventListener("click", function () { selectPartner(button); });
    });
  }

  document.addEventListener("DOMContentLoaded", initPartnersViewer);
})();
