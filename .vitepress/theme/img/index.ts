import boltDark from './link-bg-bolt-dark.jpg';
import boltLight from './link-bg-bolt-light.jpg';
import squaresDark from './link-bg-squares-dark.png';
import squaresLight from './link-bg-squares-light.png';
import stepsDark from './link-bg-steps-dark.png';
import stepsLight from './link-bg-steps-light.png';

export type LinkBackgroundId = 'bolt' | 'squares' | 'steps';

export const linkBackgrounds: Record<LinkBackgroundId, { dark: string; light: string }> = {
  bolt: { dark: boltDark, light: boltLight },
  squares: { dark: squaresDark, light: squaresLight },
  steps: { dark: stepsDark, light: stepsLight },
};
