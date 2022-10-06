const GTM_ID = 'G-79VJSP1Z7C';

export const GTAG_URL = `https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`;

export const GTAG_INIT = `function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag('js',new Date),gtag('config','${GTM_ID}',{anonymize_ip:true})`;
