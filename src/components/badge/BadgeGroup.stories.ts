import type { Meta, StoryObj } from '@storybook/react';

import { BadgeGroup } from './BadgeGroup';

const meta = {
  title: 'Component/Badge/BadgeGroup',
  component: BadgeGroup,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof BadgeGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 */

export const Default: Story = {
  args: {
    leading: {
      label: 'badge',
      type: 'pill',
      icon: 'dot',
      onlyOutline: true,
    },
    href: '/',
    size: 'md',
    label: 'badge group',
  },
};
