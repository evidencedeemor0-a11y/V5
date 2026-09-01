LOOP BANKING APP — MOCKUP IMPLEMENTATION (v2)

A front-end interactive prototype built from the LOOP mock-up direction.

WHAT CHANGED IN v2:
- Base font size raised to 16px; all UI text scaled up proportionally
  for comfortable reading without feeling oversized.
- Full icon set replaced with a clean, modern stroke-based system:
  rounded linecaps/joins, purpose-matched icons per screen and action
  (chain link for Linked accounts, shield for Card limits, etc.).
- Home quick-action grid (Pay / Transfer / Request / Deposit) removed.
  Replaced with two pill-shaped buttons: Deposit and Transfer.
- Positive transaction amounts now highlighted in green.
- Financials line chart has a subtle gradient fill under the curve.

STRUCTURE:
  index.html    — shell, links style.css + script.js
  style.css     — all styles
  script.js     — all state, rendering, icons, and event logic
  manifest.json — PWA manifest
  README.txt    — this file

RUN:
1. Unzip the folder.
2. Open index.html in a modern browser.
3. For the smoothest experience, serve with any local static server
   (e.g. `npx serve .` or VS Code Live Server).

INTERACTIONS:
- Home > Deposit     shows deposit toast
- Home > Transfer    opens Transfer screen (Send mode)
- Fund request card  opens Transfer screen (Request mode)
- Home > See all     opens Accounts
- Bottom nav         switches between all major sections
- Accounts > account opens account detail
- Cards > Card details opens card detail view
- Profile > Personal information, Notifications, Privacy & security
- Financials tabs    switch Spending / Income / Net Worth
- Transfer / Request forms validate amount and confirm
- Notification toggles are interactive
- Freeze card toggle is interactive

WHAT CHANGED IN v3:
- Amount entry screen now shows whole dollars only (no .00 cents).
- Tapping "Send" opens a 4-digit PIN sheet (test PIN: 1472). Tapping
  the boxes focuses a hidden input so the device keyboard appears;
  the sheet shifts upward while typing so the keyboard never covers
  the PIN boxes, then settles back down on blur. Wrong PIN shakes
  the sheet and clears the digits.
- After a correct PIN, a transaction sheet slides up (stopping just
  short of the top) showing a 10-second pending/spinner animation
  with the recipient, bank (Chase Bank) and account, then switches
  to a Payment Successful animation with full transaction details
  (status, recipient, bank, account, time, date, transaction ID,
  amount, fee, total) and a Done button.

WHAT CHANGED IN v4:
- Removed the fake mock status bar (clock/signal/wifi/battery) from
  every screen; the app now relies on the device's own status bar
  and reserves space for it using safe-area insets instead.
- Locked the viewport (maximum-scale=1, user-scalable=no) and bumped
  all text-input font sizes to 16px so the page no longer zooms in
  on double-tap or when focusing a text field.
- Bottom navigation is now a floating pill, inset from the screen
  edges and lifted above the home-indicator/safe area so icons are
  never clipped or hidden by the device UI.
- Transaction pending/success sheet now opens to roughly half the
  screen height instead of nearly full height (still scrolls
  internally if content is taller than the sheet).

WHAT CHANGED IN v5 (bugfixes):
- Bottom nav pill sits a touch lower (closer to the screen edge).
- Bottom nav is now hidden throughout the transfer flow (recipient
  form and amount-entry screens) — those screens take over the full
  screen instead of just the space above the nav.
- Any screen without the bottom nav now uses the full available
  height (was previously reserving space for a nav bar that wasn't
  there), fixing the cramped amount-entry screen.
- PIN sheet now tracks the on-screen keyboard's real height 1:1
  instead of an approximated/clamped offset, so it no longer drifts
  away from or lags behind the keyboard while typing.
- Transaction pending/success sheet now opens near the top of the
  screen instead of around halfway down.

WHAT CHANGED IN v6:
- Home screen's "Transfer" pill is now solid black like "Deposit"
  (was a translucent white pill before).
- Added a "liquid glass" (frosted, translucent, blurred) treatment
  to the header icon buttons (bell/help), the back button, and the
  floating bottom nav bar — including a soft glass highlight behind
  the active nav item.
