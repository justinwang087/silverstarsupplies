/*
  main.js
  -------
  Shared, site-wide behavior: the mobile nav toggle and the live
  open/closed hours badge. Every page includes this file.

  OWNERSHIP: part of Phase 0 scaffolding. Frozen after setup — a page
  that needs its own JS (the partner viewer, the contact form) gets its
  own file (js/partners-viewer.js, js/contact-form.js) rather than
  growing this one.
*/

(function () {
  "use strict";

  /* ---- Mobile nav toggle ---- */
  function initNavToggle() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  /* ---- Open/closed hours badge ----
     Seasonal hours, confirmed against the current site (audit, Aug 2026):
       Apr 1 – Nov 30:  6:30am – 9:00pm
       Dec 1 – Mar 31:  9:00am – 5:00pm
     If these ever change, this is the one place to update them — every
     page's badge reads from here, nothing is hardcoded per-page.
  */
  var HOURS = {
    summer: { startMonth: 3, endMonth: 10, open: [6, 30], close: [21, 0] },  // Apr(3)–Nov(10), 0-indexed months
    winter: { open: [9, 0], close: [17, 0] }                                 // Dec–Mar
  };

  function isSummerSeason(date) {
    var m = date.getMonth(); // 0 = Jan ... 11 = Dec
    return m >= HOURS.summer.startMonth && m <= HOURS.summer.endMonth;
  }

  function minutesSinceMidnight(date) {
    return date.getHours() * 60 + date.getMinutes();
  }

  function toMinutes(pair) {
    return pair[0] * 60 + pair[1];
  }

  function isOpenNow(date) {
    date = date || new Date();
    var season = isSummerSeason(date) ? HOURS.summer : HOURS.winter;
    var now = minutesSinceMidnight(date);
    return now >= toMinutes(season.open) && now < toMinutes(season.close);
  }

  function updateHoursBadges() {
    var badges = document.querySelectorAll("[data-hours-badge]");
    if (!badges.length) return;
    var open = isOpenNow();
    badges.forEach(function (badge) {
      badge.textContent = open ? "Open now" : "Closed now";
      badge.setAttribute("data-state", open ? "open" : "closed");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNavToggle();
    updateHoursBadges();
    // Re-check every few minutes in case someone leaves a tab open across
    // an opening/closing boundary.
    setInterval(updateHoursBadges, 5 * 60 * 1000);
  });

  // Exposed for reuse (e.g. the Location page's hours table can call this
  // directly to highlight the current row).
  window.Silverstar = window.Silverstar || {};
  window.Silverstar.isOpenNow = isOpenNow;
})();
