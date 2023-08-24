import type { Meta, StoryObj } from '@storybook/react';

import { SvgIcon } from './SvgIcon';

const meta = {
  title: 'Component/SvgIcon',
  component: SvgIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof SvgIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 */

export const Default: Story = {
  args: {
    icon: 'chevronDown',
    color: 'gray300',
  },
};
