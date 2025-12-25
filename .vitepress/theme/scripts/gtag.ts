// https://developers.google.com/tag-platform/gtagjs/reference
interface GtagEvent {
  eventName: string;
  pagePath: string;
  value: string;
}

export function sendEvent({ eventName, pagePath, value }: GtagEvent) {
  const gtag: any = (window as any).gtag;
  if (typeof gtag === 'function') {
    gtag('event', eventName, {
      page_path: pagePath,
      value,
    });
  }
}
