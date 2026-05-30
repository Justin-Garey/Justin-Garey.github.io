"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import React from "react";

const ANALYTICS_CONSENT_KEY = "ga-consent";
const CONSENT_GRANTED_VALUE = "granted";
const CONSENT_UPDATED_EVENT = "ga-consent-updated";

export default function AnalyticsConsentGate({ gaId }: { gaId?: string }) {
  const [isEnabled, setIsEnabled] = React.useState(false);

  React.useEffect(() => {
    const syncConsent = () => {
      const stored = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
      setIsEnabled(stored === CONSENT_GRANTED_VALUE);
    };

    syncConsent();
    window.addEventListener(CONSENT_UPDATED_EVENT, syncConsent);

    return () => {
      window.removeEventListener(CONSENT_UPDATED_EVENT, syncConsent);
    };
  }, []);

  if (!gaId || !isEnabled) {
    return null;
  }

  return <GoogleAnalytics gaId={gaId} />;
}
