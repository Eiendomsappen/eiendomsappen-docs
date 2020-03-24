/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


const siteConfig = {
  title: 'Eiendomsappen guide',
  tagline: 'Guide til Eiendomsappen',
  url: 'Lunke.github.io',
  baseUrl: '/eiendomsappen-docs/',
 
  projectName: 'eiendomsappen-docs',
  organizationName: 'Lunke',
  
  headerLinks: [
    { href: 'https://eiendomsappen.com', label: 'Hjem' },
    { href: 'https://eiendomsappen.com/dashboard', label: 'Dashbord' }
  ],

  headerIcon: 'img/logo.svg',
  favicon: 'img/favicon.ico',

  colors: {
    primaryColor: '#0D5BF1',
    secondaryColor: '#602042',
  },


  copyright: `Copyright © ${new Date().getFullYear()} Eiendomsappen AS`,

  highlight: {
    theme: 'default',
  },

  scripts: [], // 'https://buttons.github.io/buttons.js'

  onPageNav: 'separate',

  cleanUrl: true,

  docsSideNavCollapsible: true,
};

module.exports = siteConfig;
