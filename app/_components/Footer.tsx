"use client";

import React from "react";

const ANALYTICS_CONSENT_KEY = "ga-consent";
const CONSENT_GRANTED_VALUE = "granted";
const CONSENT_DENIED_VALUE = "denied";
const CONSENT_UPDATED_EVENT = "ga-consent-updated";

export default function Footer({ config }: { config: any }) {
  const [analyticsEnabled, setAnalyticsEnabled] = React.useState(false);

  React.useEffect(() => {
    const stored = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
    setAnalyticsEnabled(stored === CONSENT_GRANTED_VALUE);
  }, []);

  const toggleAnalytics = () => {
    const nextEnabled = !analyticsEnabled;
    const nextValue = nextEnabled ? CONSENT_GRANTED_VALUE : CONSENT_DENIED_VALUE;

    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, nextValue);
    setAnalyticsEnabled(nextEnabled);
    window.dispatchEvent(new Event(CONSENT_UPDATED_EVENT));
  };

  if (!config) {
    return <></>
  }
  return (
    <footer className="mt-auto border-t border-secondary pt-4 flex justify-between items-center w-full gap-4 flex-wrap">
      <div className="text-secondary">{config.footer.content}</div>
      <div className="flex items-center gap-4 flex-wrap">
        <button
          type="button"
          onClick={toggleAnalytics}
          role="switch"
          aria-checked={analyticsEnabled}
          aria-label="Toggle Google Analytics"
          className="inline-flex items-center gap-2 hover:text-secondary/80"
        >
          <span>Google Analytics</span>
          <span
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${analyticsEnabled ? "bg-quinary" : "bg-secondary/30"}`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-off-white transition-transform ${analyticsEnabled ? "translate-x-5" : "translate-x-1"}`}
            />
          </span>
        </button>
        {config.footer.links.map((link: any, index: number) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary/80 underline"
          >
            {link.title}
          </a>
        ))}
      </div>
    </footer>
  );
}