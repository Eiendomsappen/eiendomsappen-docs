/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
  title: 'Eiendomsappen guide',
  tagline: 'Guide til Eiendomsappen',
  url: 'https://guide.eiendomsappen.com',
  baseUrl: '/',
  cname:'guide.eiendomsappen.com',
 
  projectName: 'eiendomsappen-docs',
  organizationName: 'Lunke',
  
  headerLinks: [
    { href: 'https://eiendomsappen.com', label: 'Hjem' },
    { doc: 'welcome', label: 'Guide' },
    { blog: true, label: 'Blog' },
    { href: 'https://eiendomsappen.com/dashboard', label: 'Dashbord' }
  ],

  headerIcon: 'img/logo.svg',
  favicon: 'img/favicon.ico',

  colors: {
    primaryColor: '#0D5BF1',
    secondaryColor: '#602042',
  },

  blogSidebarCount: 'ALL',
  blogSidebarTitle: { default: 'Nylige artikler', all: 'Alle artikler' },


  copyright: `Copyright © ${new Date().getFullYear()} Eiendomsappen AS`,

  highlight: {
    theme: 'default',
  },

  scripts: [], // 'https://buttons.github.io/buttons.js'

  onPageNav: 'separate',

  cleanUrl: true,
  enableUpdateBy: true,
  enableUpdateTime: true,
  scrollToTop: true,

  docsSideNavCollapsible: true,
};

module.exports = siteConfig;
