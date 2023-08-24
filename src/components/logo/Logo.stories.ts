import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from './Logo';

const meta = {
  title: 'Component/Logo',
  component: Logo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * - marketing, 개발자 센터 미구현
 */

export const Default: Story = {
  args: {
    type: 'shopby',
    label: '홈으로 이동',
  },
};
