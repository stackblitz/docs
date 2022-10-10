import DefaultTheme from 'vitepress/theme';

import './styles/index.scss';

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
