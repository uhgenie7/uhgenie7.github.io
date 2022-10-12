/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // books: [{ type: 'autogenerated', dirName: '.' }],
  // But you can create a sidebar manually

  // tutorialSidebar: [
  //   'intro',
  //   'hello',
  //   {
  //     type: 'category',
  //     label: 'Tutorial',
  //     items: ['tutorial-basics/create-a-document'],
  //   },
  // ],
  dev: [
    'dev/index',
    {
      type: 'category',
      label: 'React',
      items: ['dev/react/introduction'],
    },
    {
      type: 'category',
      label: 'JS & TS',
      items: ['dev/jsts/introduction'],
    },
    {
      type: 'category',
      label: 'CS',
      items: ['dev/cs/introduction'],
    },
    {
      type: 'category',
      label: 'Git',
      items: ['dev/git/introduction'],
    },
    {
      type: 'category',
      label: 'ETC',
      items: ['dev/etc/introduction'],
    },
  ],
  books: [
    {
      type: 'autogenerated',
      dirName: 'books',
    },
  ],
};

module.exports = sidebars;
