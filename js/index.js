import { bindDom } from "./dom-bindings.js";

import "./wizard/wizard.dom.js";
import "./wizard/wizard.core.js";
import "./wizard/wizard.language-theme.js";
import { initWizardSteps } from "./wizard/wizard.steps.js";
import { restoreWizardState } from "./wizard/wizard.state.js";

import { loadState, saveState } from "./services/state-storage.service.js";
import { logoAndBannerBase64 } from "../assets/base64/logo-and-banner-base64.js";
import { setLanguage } from "./translations/translations.apply.js";
import { debug } from "../js/utils/debug.js";

/**
 * Application Bootstrap
 * - Loads saved state
 * - Applies initial language
 * - Restores UI view & wizard state
 * - Binds UI interactions
 * - Displays content only when ready
 *
 * This is the coordinator of the app lifecycle.
 */

// ===========================
// Init
// ===========================
document.addEventListener("DOMContentLoaded", async () => {
  showLoader();

  // Load saved state before applying translations/UI
  const saved = loadState();

  // 1. Restore current language
  window.currentLang = saved?.lang || "gr";
  setLanguage(window.currentLang);

  // 2. Sync <select id="lang"> με την τρέχουσα γλώσσα
  const langSelect = document.getElementById("lang");
  if (langSelect) {
    langSelect.value = window.currentLang;
  }

  // 3. Bind language change
  bindDom({
    onLanguageChange: async (lang) => {
      showLoader();
      window.currentLang = lang;
      saveState({ lang });

      setLanguage(lang);
      restoreWizardState(loadState());

      hideLoader();
    },
  });

  // 4. Restore wizard UI (χωρίς να πειράζουμε τη γλώσσα εδώ μέσα - φόρμα, preview, step)
  restoreWizardState(saved);

  // 3. Events / Steps
  initWizardSteps();

  restoreWizardState(saved);

  setTimeout(() => {
    hideLoader();
    document.body.classList.add("app-ready");
  }, 150);

  debug.log("📌 App initialized");
  debug.log("🧩 Wizard fully initialized (All modules & state ready)");
  debug.log("🖼 Logo:", logoAndBannerBase64.slice(0, 30) + "...");
});
