/**
 * Cookie Consent Management
 * Handles cookie consent popup and user preferences
 */

class CookieConsent {
  constructor() {
    this.cookieConsentKey = 'privacyinnovation_cookie_consent';
    this.cookiePreferencesKey = 'privacyinnovation_cookie_preferences';
    this.consentPopup = document.getElementById('cookie-consent-popup');
    this.preferencesModal = document.getElementById('cookie-preferences-modal');
    
    this.init();
  }

  init() {
    // Check if user has already made a choice
    if (!this.hasUserConsent()) {
      this.showConsentPopup();
    }
    
    this.bindEvents();
    this.loadPreferences();
  }

  bindEvents() {
    // Main consent popup events
    document.getElementById('cookie-accept')?.addEventListener('click', () => {
      this.acceptAllCookies();
    });

    document.getElementById('cookie-decline')?.addEventListener('click', () => {
      this.declineNonEssentialCookies();
    });

    document.getElementById('cookie-preferences')?.addEventListener('click', () => {
      this.showPreferencesModal();
    });

    // Preferences modal events
    document.getElementById('close-preferences')?.addEventListener('click', () => {
      this.hidePreferencesModal();
    });

    document.getElementById('save-preferences')?.addEventListener('click', () => {
      this.savePreferences();
    });

    document.getElementById('accept-all-cookies')?.addEventListener('click', () => {
      this.acceptAllCookies();
    });

    // Close modal when clicking outside
    this.preferencesModal?.addEventListener('click', (e) => {
      if (e.target === this.preferencesModal) {
        this.hidePreferencesModal();
      }
    });

    // Close consent popup when clicking outside
    this.consentPopup?.addEventListener('click', (e) => {
      if (e.target === this.consentPopup) {
        // Don't close on outside click for main consent popup
        // User must make a choice
      }
    });
  }

  showConsentPopup() {
    if (this.consentPopup) {
      this.consentPopup.style.display = 'flex';
      // Add body scroll lock
      document.body.style.overflow = 'hidden';
    }
  }

  hideConsentPopup() {
    if (this.consentPopup) {
      this.consentPopup.style.display = 'none';
      // Restore body scroll
      document.body.style.overflow = '';
    }
  }

  showPreferencesModal() {
    if (this.preferencesModal) {
      this.preferencesModal.style.display = 'flex';
      this.hideConsentPopup();
    }
  }

  hidePreferencesModal() {
    if (this.preferencesModal) {
      this.preferencesModal.style.display = 'none';
      // Show consent popup again if no choice was made
      if (!this.hasUserConsent()) {
        this.showConsentPopup();
      }
    }
  }

  acceptAllCookies() {
    const preferences = {
      essential: true,
      analytics: true,
      functional: true,
      marketing: true,
      timestamp: new Date().toISOString()
    };

    this.saveCookiePreferences(preferences);
    this.saveUserConsent('accepted');
    this.hideConsentPopup();
    this.hidePreferencesModal();
    this.applyCookiePreferences(preferences);
    
    // Show success message
    this.showNotification('Cookie preferences saved successfully!', 'success');
  }

  declineNonEssentialCookies() {
    const preferences = {
      essential: true,
      analytics: false,
      functional: false,
      marketing: false,
      timestamp: new Date().toISOString()
    };

    this.saveCookiePreferences(preferences);
    this.saveUserConsent('declined');
    this.hideConsentPopup();
    this.hidePreferencesModal();
    this.applyCookiePreferences(preferences);
    
    // Show success message
    this.showNotification('Only essential cookies will be used.', 'info');
  }

  savePreferences() {
    const preferences = {
      essential: true, // Always true
      analytics: document.getElementById('analytics-cookies')?.checked || false,
      functional: document.getElementById('functional-cookies')?.checked || false,
      marketing: document.getElementById('marketing-cookies')?.checked || false,
      timestamp: new Date().toISOString()
    };

    this.saveCookiePreferences(preferences);
    this.saveUserConsent('custom');
    this.hidePreferencesModal();
    this.applyCookiePreferences(preferences);
    
    // Show success message
    this.showNotification('Cookie preferences saved successfully!', 'success');
  }

  loadPreferences() {
    const preferences = this.getCookiePreferences();
    if (preferences) {
      // Update UI checkboxes
      document.getElementById('analytics-cookies')?.setAttribute('checked', preferences.analytics);
      document.getElementById('functional-cookies')?.setAttribute('checked', preferences.functional);
      document.getElementById('marketing-cookies')?.setAttribute('checked', preferences.marketing);
      
      // Apply preferences
      this.applyCookiePreferences(preferences);
    }
  }

  applyCookiePreferences(preferences) {
    // Apply analytics cookies
    if (preferences.analytics) {
      this.enableAnalytics();
    } else {
      this.disableAnalytics();
    }

    // Apply functional cookies
    if (preferences.functional) {
      this.enableFunctionalCookies();
    } else {
      this.disableFunctionalCookies();
    }

    // Apply marketing cookies
    if (preferences.marketing) {
      this.enableMarketingCookies();
    } else {
      this.disableMarketingCookies();
    }
  }

  enableAnalytics() {
    // Enable Google Analytics if it exists
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  }

  disableAnalytics() {
    // Disable Google Analytics if it exists
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  }

  enableFunctionalCookies() {
    // Enable functional cookies (e.g., language preferences, theme)
    console.log('Functional cookies enabled');
  }

  disableFunctionalCookies() {
    // Disable functional cookies
    console.log('Functional cookies disabled');
  }

  enableMarketingCookies() {
    // Enable marketing cookies
    console.log('Marketing cookies enabled');
  }

  disableMarketingCookies() {
    // Disable marketing cookies
    console.log('Marketing cookies disabled');
  }

  hasUserConsent() {
    return localStorage.getItem(this.cookieConsentKey) !== null;
  }

  saveUserConsent(choice) {
    localStorage.setItem(this.cookieConsentKey, choice);
  }

  getUserConsent() {
    return localStorage.getItem(this.cookieConsentKey);
  }

  saveCookiePreferences(preferences) {
    localStorage.setItem(this.cookiePreferencesKey, JSON.stringify(preferences));
  }

  getCookiePreferences() {
    const preferences = localStorage.getItem(this.cookiePreferencesKey);
    return preferences ? JSON.parse(preferences) : null;
  }

  showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `cookie-notification cookie-notification-${type}`;
    notification.innerHTML = `
      <div class="cookie-notification-content">
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
      </div>
    `;

    // Add styles
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
      color: white;
      padding: 15px 20px;
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
      z-index: 10001;
      animation: slideInRight 0.3s ease-out;
      max-width: 300px;
    `;

    // Add keyframe animation
    if (!document.querySelector('#cookie-notification-styles')) {
      const style = document.createElement('style');
      style.id = 'cookie-notification-styles';
      style.textContent = `
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .cookie-notification-content {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .cookie-notification-content i {
          font-size: 1.2rem;
        }
      `;
      document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Auto-remove after 5 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
          if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
          }
        }, 300);
      }
    }, 5000);
  }

  // Method to reset consent (useful for testing)
  resetConsent() {
    localStorage.removeItem(this.cookieConsentKey);
    localStorage.removeItem(this.cookiePreferencesKey);
    this.showConsentPopup();
  }

  // Method to show current preferences
  showCurrentPreferences() {
    const preferences = this.getCookiePreferences();
    const consent = this.getUserConsent();
    
    console.log('Current consent:', consent);
    console.log('Current preferences:', preferences);
  }
}

// Initialize cookie consent when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.cookieConsent = new CookieConsent();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CookieConsent;
}
