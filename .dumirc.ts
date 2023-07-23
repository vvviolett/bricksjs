import { defineConfig } from 'dumi';

const serverPath = process.env.NODE_ENV === 'production' ? '/bricksjs' : '/';

export default defineConfig({
  title: 'bricksjs',
  base: serverPath,
  publicPath: serverPath,
  outputPath: './docs/build',
  favicons: ['/favicon.ico'],
  themeConfig: {
    name: 'bricksjs',
    logo: '/logo.jpg',
    nav: [
      {
        title: 'Docs',
        link: '/docs/get-started',
      },
    ],
    footer:
      'Copyright © 2023 | Powered by <a href="https://github.com/szchason/bricksjs" target="_blank" rel="noreferrer">szchason</a>',
    prefersColor: { default: 'dark', switch: false },
    socialLinks: {
      github: 'https://github.com/szchason/bricksjs',
    },
  },
});
