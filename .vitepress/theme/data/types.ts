export type MenuLinkGroup =
  | 'api'
  | 'codeflow'
  | 'teams'
  | 'enterprise'
  | 'integrationGuide'
  | 'userGuide'
  | 'webcontainers';

export interface MenuLinkItem {
  text: string;
  link: string;
  items?: MenuLinkItem[];
}

export interface CardLink {
  bgImg?: 'bolt' | 'squares' | 'steps';
  description: string;
  icon?: string;
  large?: boolean;
  title: string;
  url: string;
}

export interface FooterSection {
  title: string;
  items: { text: string; link: string }[];
}

export interface Person {
  name: string;
  href: string;
  hrefAlias?: string;
  imgPath?: string;
  title?: string;
}
