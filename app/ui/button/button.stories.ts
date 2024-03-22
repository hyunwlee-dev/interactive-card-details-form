import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta = {
  title: 'Component/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    textContent: {
      control: 'text'
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
  args: {
    textContent: 'chromatic build test',
  },
};
