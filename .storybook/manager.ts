import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  brandTitle: 'NHN Commerce',
  brandUrl: 'https://www.nhn-commerce.com/',
  brandImage: './logo-commerce.png',
  brandTarget: '_self',
});

addons.setConfig({ theme });
