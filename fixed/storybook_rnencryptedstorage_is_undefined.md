---
title: 스토리북에서 rnencryptedstorage is undefined 에러가 날 때
description: rnencryptedstorage is undefined.
tags: [react-native, storybook, rnencryptedstorage]
date: '2023-05-03'
---

storybook에서 rnencryptedstorage is undefined 에러가 뜬다면, 모킹을 해주지 않아서 나는 에러이다.

1. mock 파일을 만들어준다.

:::note
네이밍에 주의한다. react-native.js 로 만들면 다른 에러를 야기할 수 있음
:::

```js title="__mocks__/react-native-encrypted-storage.js"
const RNEncryptedStorage = {
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve('{ "foo": 1 }')),
  removeItem: jest.fn(() => Promise.resolve()),
  clear: jest.fn(() => Promise.resolve()),
};

export default RNEncryptedStorage;
```

2.

```js title=".storybook/main.js"
const path = require('path');
const webpack = require('webpack');
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import custom from '../webpack.config.js';

module.exports = {
  stories: [
    '../src/components/**/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/styles/*.stories.mdx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-mdx-gfm',
  ],
  docs: {
    autodocs: true,
  },
  features: {
    interactionsDebugger: true,
  },
  webpackFinal: (config) => {
    // ...
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
      '@storybook/react-native': '@storybook/react-webpack5',
      // 이 코드를 추가한다.
      // highlight-start
      'react-native-encrypted-storage':
        '@react-native-async-storage/async-storage',
      // highlight-end
    };

    config.resolve.extensions = ['.web.js', '.tsx', '.ts', '.js'];

    return {
      ...config,
      module: {
        ...config.module,
        rules: [...config.module.rules, ...custom.module.rules],
      },
    };
  },
  babel: (options) => {
    options.plugins.push('babel-plugin-inline-react-svg');
    return options;
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: { fastRefresh: true },
  },
};
```
