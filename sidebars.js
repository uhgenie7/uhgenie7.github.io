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
      items: ['dev/react/nextjs-optimization/index'],
    },
    {
      type: 'category',
      label: 'JS & TS',
      items: ['dev/jsts/variables/index'],
    },
    {
      type: 'category',
      label: 'HTML & CSS',
      items: ['dev/htmlcss/scrollbar-gutter/index'],
    },
    {
      type: 'category',
      label: 'CS',
      items: [
        'dev/cs/stale-while-revalidate/index',
        'dev/cs/metrics/index',
        'dev/cs/lcp/index',
      ],
    },
    {
      type: 'category',
      label: 'Git',
      items: [
        'dev/git/sync-repository',
        'dev/git/another-branch-push',
        'dev/git/trunk-based-development',
      ],
    },
    {
      type: 'category',
      label: 'PHP',
      items: ['dev/php/avocadoedition-light-add-emoticon/index'],
    },
  ],
  // books: [{ type: 'autogenerated', dirName: '.' }],
  books: [
    'books/introduction',
    {
      type: 'category',
      label: '이펙티브 타입스크립트',
      items: [
        'books/effective-typescript/introduction',
        'books/effective-typescript/01',
        'books/effective-typescript/02',
      ],
    },
    {
      type: 'category',
      label: '프레임워크 없는 프론트엔드 개발',
      items: [
        'books/frameworkless-front-end-development/introduction',
        'books/frameworkless-front-end-development/01',
        'books/frameworkless-front-end-development/02',
        'books/frameworkless-front-end-development/03',
        'books/frameworkless-front-end-development/04',
        'books/frameworkless-front-end-development/05',
        'books/frameworkless-front-end-development/06',
      ],
    },
    {
      type: 'category',
      label: '러닝 타입스크립트',
      items: [
        'books/learning-typescript/introduction',
        'books/learning-typescript/01',
        'books/learning-typescript/02',
      ],
    },
  ],
};

module.exports = sidebars;
