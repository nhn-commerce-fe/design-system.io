import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const meta = {
  title: 'Component/Badge',
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Badge variant 중 <br/>
 * Icon: true <br/>
 * Type: modern <br/>
 * 미적용
 */

export const Default: Story = {
  args: {
    icon: 'arrowRight',
    label: 'badge',
    size: 'md',
  },
};
