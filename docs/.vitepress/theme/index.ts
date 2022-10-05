import DefaultTheme from 'vitepress/theme';

import './styles/index.scss';

/*
  VitePress doesn't have an option to provide URL path, so we need to
  manually add the initialPath parameter ourselves for the time being.

  On every click on the page, we check if it's an edit link, and if so
  we add the initial path parameter.

  Not sure if this is the right place to add runtime logic like this for
  vitepress sites, but it seems to work in the prod build.

  Also, I needed to add the globalThis check because it seems like Vitepress
  imports this file at build time in node, and DOM API calls broke the build.
*/
if (!!globalThis.window) {
  document.body.addEventListener('click', function(e: any) {
    if(e.target.classList.contains('edit-link-button')){
      e.target.href = e.target.href + '?initialPath=' + document.location.pathname
    }
  }, true);
}

export default {
  ...DefaultTheme,
};
