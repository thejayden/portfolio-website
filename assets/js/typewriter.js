/**
 * Typewriter animation for the intro heading.
 * The cursor is rendered as a CSS ::after pseudo-element on #typed-heading.
 * While typing/deleting the cursor is solid; once a phrase is fully typed
 * the 'is-blinking' class is added to trigger the CSS blink animation.
 * Typing speed is randomised to mimic natural, inconsistent human typing.
 */
(function () {
  'use strict';

  var phrases = ['Hi! My name is Jia Dian.'];
  var el = document.getElementById('typed-heading');

  if (!el) return;

  var phraseIndex = 0;
  var charIndex = 0;
  var isDeleting = false;
  var pauseAfterType   = 5500;
  var pauseAfterDelete = 400;

  // Returns a random integer in [min, max]
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Variable typing delay: slower after spaces (word boundary) and
  // with an occasional hesitation burst to feel human.
  function typingDelay(justTyped) {
    var delay = rand(60, 140);
    if (justTyped === ' ') delay += rand(40, 90);   // pause between words
    if (Math.random() < 0.08) delay += rand(150, 320); // rare hesitation
    return delay;
  }

  // Deletion is faster and slightly varied (mechanical feel)
  function deletingDelay() {
    return rand(40, 80);
  }

  function tick() {
    // Any active tick means typing/deleting is happening — stop blinking
    el.classList.remove('is-blinking');

    var current = phrases[phraseIndex % phrases.length];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    el.textContent = current.substring(0, charIndex);

    var delay;

    if (!isDeleting && charIndex === current.length) {
      // Phrase fully typed — start blinking, then delete after the pause
      el.classList.add('is-blinking');
      delay = pauseAfterType;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex++;
      delay = pauseAfterDelete;
    } else if (isDeleting) {
      delay = deletingDelay();
    } else {
      delay = typingDelay(current.charAt(charIndex - 1));
    }

    setTimeout(tick, delay);
  }

  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(tick, 500);
  });
}());
