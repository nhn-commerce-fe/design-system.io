import type { Meta, StoryObj } from '@storybook/react';
import { CarouselArrow } from './CarouselArrow';

const meta = {
  title: 'Component/CarouselArrow',
  component: CarouselArrow,
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
      options: ['md', 'lg'],
    },
  },
} satisfies Meta<typeof CarouselArrow>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 *  Type: arrow <br/>
 *  미구현
 */
export const Default: Story = {
  args: {},
};
