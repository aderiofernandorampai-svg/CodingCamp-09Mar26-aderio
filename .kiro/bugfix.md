# Bugfix Requirements Document

## Introduction

The theme toggle button in the life dashboard app fails to switch between light and dark mode when clicked. The button click produces no visible change — the page remains in light mode and no dark-mode class is applied. This prevents users from using their preferred color scheme, and any previously saved theme preference is also not reliably applied on page load.

The root cause is that the script runs before the DOM is fully parsed (no `defer` attribute or `DOMContentLoaded` wrapper), so `document.getElementById("theme-toggle")` returns `null`. The `if(themeBtn)` guard silently swallows this failure, meaning the click listener is never attached.

## Bug Analysis

### Current Behavior (Defect)

1.1 WHEN the script executes before the DOM is fully parsed THEN the system returns `null` for `document.getElementById("theme-toggle")` and silently skips attaching the click listener

1.2 WHEN the user clicks the theme toggle button THEN the system does nothing — no class is toggled on `document.body` and no theme is saved to localStorage

1.3 WHEN the page is reloaded after a previous dark-mode session THEN the system may fail to restore the saved theme if the body element is not yet available at script execution time

### Expected Behavior (Correct)

2.1 WHEN the script executes THEN the system SHALL ensure the DOM is fully available before querying for `#theme-toggle`, either via `defer` on the script tag or a `DOMContentLoaded` event listener

2.2 WHEN the user clicks the theme toggle button THEN the system SHALL toggle the `dark-mode` class on `document.body` and persist the resulting theme value (`"dark"` or `"light"`) to localStorage

2.3 WHEN the page loads and localStorage contains `theme = "dark"` THEN the system SHALL add the `dark-mode` class to `document.body` before first render to avoid a flash of incorrect theme

### Unchanged Behavior (Regression Prevention)

3.1 WHEN the user is in light mode and clicks the toggle THEN the system SHALL CONTINUE TO switch to dark mode and save `"dark"` to localStorage

3.2 WHEN the user is in dark mode and clicks the toggle THEN the system SHALL CONTINUE TO switch to light mode and save `"light"` to localStorage

3.3 WHEN the page loads and no theme is saved in localStorage THEN the system SHALL CONTINUE TO default to light mode

3.4 WHEN the page loads and localStorage contains `theme = "light"` THEN the system SHALL CONTINUE TO display in light mode without applying the `dark-mode` class
