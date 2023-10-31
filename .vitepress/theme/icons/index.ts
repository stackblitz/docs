// Tell Vite to load all SVG icons in the icons folder as part of the build.
const importedIconsUrls = import.meta.glob('./*.svg', {
  as: 'url',
  eager: true,
});

const iconNamePattern = /([0-9a-zA-Z-]+)\.svg$/;

export const iconsUrls: Record<string, string> = Object.fromEntries(
  Object.entries(importedIconsUrls).map(([path, url]) => {
    const nameMatches = path.match(iconNamePattern);
    return [nameMatches ? nameMatches[1] : path, url];
  })
);
