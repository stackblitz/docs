declare global {
  interface Window {
    gtag?: (eventName: string, options: Record<string, unknown>) => void;
  }
}

// https://developers.google.com/tag-platform/gtagjs/reference
interface Event {
  eventName: string;
  pagePath: string;
  value: string;
}

export function sendEvent({ eventName, pagePath, value }: Event) {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, {
      page_path: pagePath,
      value,
    });
  }
}
