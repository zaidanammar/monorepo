import { create } from '@storybook/theming/create'

export default create({
  base: 'light',

  colorPrimary: '#424242',
  colorSecondary: '#EDEDED',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Work Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: '#EDEDED',
  barBg: '#424242',

  // Form colors
  // inputBg: 'white',
  // inputBorder: 'red',
  // inputTextColor: 'blue',
  // inputBorderRadius: 4,

  // brandTitle: 'Forest - Design System Bareksa',
  // brandUrl: 'https://www.candiborobudur.bareksa.com',
  // brandImage: 'https://images.bareksa.com/logo/1.0.0/logo.svg',
})
